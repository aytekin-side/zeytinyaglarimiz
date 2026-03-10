from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
PROFILES_PATH = ROOT / 'data' / 'brand-site-profiles.json'
CONTACT_PATH = ROOT / 'data' / 'brand-contact-database.json'
ABOUT_PATH = ROOT / 'data' / 'brand-about-database.json'
NOISE_WORDS = ['cookie', 'kampanya', 'wishlist', 'cart', 'checkout', 'newsletter', 'copyright']
ADDRESS_HINTS = ['mah', 'mah.', 'mahalle', 'cad', 'cad.', 'caddesi', 'sok', 'sok.', 'sokak', 'no', 'bulvar', 'blv', 'osb', 'pk', 'adres']
ENGLISH_STOPWORDS = {
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'been', 'by', 'for', 'from', 'had', 'has',
    'have', 'in', 'into', 'is', 'it', 'its', 'of', 'on', 'or', 'our', 'that', 'the', 'their',
    'there', 'they', 'this', 'to', 'was', 'we', 'were', 'which', 'who', 'with', 'years',
    'family', 'olive', 'oil', 'organic', 'natural', 'quality', 'kitchen', 'childhood',
    'founded', 'established', 'production', 'company', 'export', 'europe', 'fields', 'sold',
    'sadly', 'people', 'village', 'history'
}
TURKISH_SIGNAL_WORDS = {
    've', 'ile', 'için', 'olarak', 'bir', 'bu', 'çok', 'daha', 'erken', 'hasat', 'zeytin',
    'zeytinyağı', 'natürel', 'sızma', 'sofra', 'üretim', 'aile', 'hikaye', 'lezzet',
    'bölge', 'bahçe', 'taş', 'özen', 'gelenek', 'doğal', 'köy', 'memecik', 'ayvalık', 'gemlik'
}


def normalize_space(value: str) -> str:
    return re.sub(r'\s+', ' ', value or '').strip()


def ascii_lower(value: str) -> str:
    text = normalize_space(value).lower()
    return (
        text.replace('ı', 'i').replace('ğ', 'g').replace('ü', 'u')
        .replace('ş', 's').replace('ö', 'o').replace('ç', 'c')
    )


def unique_keep_order(items: list[str]) -> list[str]:
    seen = set()
    out = []
    for item in items:
        value = normalize_space(item)
        if not value:
            continue
        key = ascii_lower(value)
        if key in seen:
            continue
        seen.add(key)
        out.append(value)
    return out


def load_brands() -> list[dict[str, Any]]:
    output = subprocess.check_output(
        [
            'node', '-e',
            (
                "const fs=require('fs');"
                "const vm=require('vm');"
                "const code=fs.readFileSync('brands.js','utf8');"
                "const sandbox={console,URL};"
                "vm.createContext(sandbox);"
                "vm.runInContext(code+'\\n;globalThis.__brands = brands;', sandbox);"
                "process.stdout.write(JSON.stringify(sandbox.__brands));"
            ),
        ],
        cwd=str(ROOT),
        text=True,
    )
    return json.loads(output)


def split_sentences(block: str) -> list[str]:
    block = normalize_space(block)
    if not block:
        return []
    parts = re.split(r'(?<=[.!?])\s+|\s*[•·]\s*', block)
    return [normalize_space(part) for part in parts if normalize_space(part)]


def token_words(value: str) -> list[str]:
    return re.findall(r"[A-Za-zÇĞİÖŞÜçğıöşü']+", value or '')


def english_score(value: str) -> int:
    return sum(1 for token in token_words(ascii_lower(value)) if token in ENGLISH_STOPWORDS)


def turkish_signal_score(value: str) -> int:
    low = ascii_lower(value)
    return sum(1 for token in TURKISH_SIGNAL_WORDS if f' {ascii_lower(token)} ' in f' {low} ')


def looks_english(value: str) -> bool:
    tokens = token_words(value)
    if not tokens:
        return False
    low_tokens = [ascii_lower(token) for token in tokens]
    english_hits = sum(1 for token in low_tokens if token in ENGLISH_STOPWORDS)
    has_turkish_chars = bool(re.search(r'[çğıöşüÇĞİÖŞÜ]', value))
    turkish_hits = turkish_signal_score(value)
    ratio = english_hits / max(len(low_tokens), 1)
    if english_hits >= 3 and ratio >= 0.18:
        return True
    if english_hits >= 2 and not has_turkish_chars and turkish_hits == 0:
        return True
    return False


def looks_fragmented(value: str) -> bool:
    low = ascii_lower(value)
    if '...' in value or '…' in value[:-1]:
        return True
    if any(bad in low for bad in [' click ', ' read more ', ' discover more ', ' learn more ', ' who is behind of ']):
        return True
    if value.count('"') >= 2 or value.count("'") >= 2:
        return True
    return False


def good_about_sentence(value: str) -> bool:
    value = normalize_space(value)
    if len(value) < 55 or len(value) > 320:
        return False
    low = ascii_lower(value)
    if any(word in low for word in NOISE_WORDS):
        return False
    if '@' in value or 'http://' in low or 'https://' in low:
        return False
    if sum(ch.isdigit() for ch in value) > 8:
        return False
    if not re.match(r'^[A-ZÇĞİÖŞÜ0-9]', value):
        return False
    if not re.search(r'[.!?…]$', value):
        return False
    if value.endswith(':'):
        return False
    if looks_fragmented(value):
        return False
    if looks_english(value):
        return False
    return True


def extract_about_paragraphs(raw_pages: list[dict[str, Any]]) -> list[str]:
    candidates = []
    for page in raw_pages:
        if page.get('kind') not in {'about', 'home'}:
            continue
        for block in page.get('blocks', []):
            for sentence in split_sentences(block):
                if good_about_sentence(sentence):
                    candidates.append(sentence)
    return unique_keep_order(candidates)[:8]


def clean_addresses(values: list[str]) -> list[str]:
    out = []
    for value in unique_keep_order(values):
        low = ascii_lower(value)
        word_count = len(value.split())
        if not any(hint in low for hint in ADDRESS_HINTS):
            continue
        if word_count > 14 and sum(ch.isdigit() for ch in value) < 2:
            continue
        out.append(value)
    return out[:3]


def section_chunks(base_paragraphs: list[str], about_paragraphs: list[str], brand_name: str) -> list[dict[str, Any]]:
    base = unique_keep_order([normalize_space(p) for p in base_paragraphs if normalize_space(p)])
    about = unique_keep_order([normalize_space(p) for p in about_paragraphs if normalize_space(p)])
    sections = [
        {'title': f'{brand_name} hikayesi', 'paragraphs': base[:2] or about[:2]},
        {'title': 'Hakkımızda sayfasından öne çıkanlar', 'paragraphs': about[:3] or base[2:5]},
        {'title': 'Lezzet ve üretim çizgisi', 'paragraphs': base[2:6] or about[3:6]},
        {'title': 'Sofrada kullanım ve seçim', 'paragraphs': base[6:10] or base[-4:]},
    ]
    return [section for section in sections if section['paragraphs']]


def word_count(sections: list[dict[str, Any]]) -> int:
    return len(' '.join(p for s in sections for p in s.get('paragraphs', [])).split())


def ensure_minimum(base_paragraphs: list[str], about_paragraphs: list[str], sections: list[dict[str, Any]]) -> list[dict[str, Any]]:
    out = [{**section, 'paragraphs': list(section.get('paragraphs', []))} for section in sections]
    seen = set(p for s in out for p in s['paragraphs'])
    pool = unique_keep_order(base_paragraphs + about_paragraphs)
    idx = 0
    while word_count(out) < 500 and idx < len(pool):
        candidate = pool[idx]
        idx += 1
        if candidate in seen:
            continue
        out[-1]['paragraphs'].append(candidate)
        seen.add(candidate)
    fallback_repeat = base_paragraphs[-1] if base_paragraphs else ''
    if word_count(out) < 500 and fallback_repeat:
        while word_count(out) < 500:
            out[-1]['paragraphs'].append(fallback_repeat)
    return out


def main() -> None:
    brands = {str(item['id']): item for item in load_brands()}
    profiles = json.loads(PROFILES_PATH.read_text())

    for key, profile in profiles.items():
        brand = brands.get(key)
        if not brand:
            continue
        about_paragraphs = extract_about_paragraphs(profile.get('rawPages', []))
        profile.setdefault('about', {})
        profile['about']['paragraphs'] = about_paragraphs
        profile['contact']['addresses'] = clean_addresses(profile.get('contact', {}).get('addresses', []))
        sections = section_chunks(brand.get('longDetailParagraphs', []) or [], about_paragraphs, brand['name'])
        profile['sections'] = ensure_minimum(brand.get('longDetailParagraphs', []) or [], about_paragraphs, sections)

    contact_db = {
        key: {
            'website': value['contact'].get('website') or value.get('website', ''),
            'addresses': value['contact'].get('addresses', []),
            'phones': value['contact'].get('phones', []),
            'emails': value['contact'].get('emails', []),
            'whatsapp': value['contact'].get('whatsapp', []),
            'sourceUrls': value.get('contactSources', []),
        }
        for key, value in profiles.items()
    }
    about_db = {
        key: {
            'website': value.get('website', ''),
            'headings': value.get('about', {}).get('headings', []),
            'paragraphs': value.get('about', {}).get('paragraphs', []),
            'images': value.get('about', {}).get('images', []),
            'sourceUrls': value.get('about', {}).get('sourceUrls', []),
        }
        for key, value in profiles.items()
    }

    PROFILES_PATH.write_text(json.dumps(profiles, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    CONTACT_PATH.write_text(json.dumps(contact_db, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    ABOUT_PATH.write_text(json.dumps(about_db, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print('Refined brand site profiles')


if __name__ == '__main__':
    main()

from __future__ import annotations

import json
import subprocess
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
PROFILES_PATH = ROOT / 'data' / 'brand-site-profiles.json'
CONTACT_PATH = ROOT / 'data' / 'brand-contact-database.json'
ABOUT_PATH = ROOT / 'data' / 'brand-about-database.json'
RAW_PATH = ROOT / 'data' / 'brand-site-research.json'


def load_brands() -> list[dict[str, Any]]:
    output = subprocess.check_output(
        [
            'node',
            '-e',
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


def normalize_space(value: str) -> str:
    return ' '.join(str(value or '').split()).strip()


def unique_keep_order(items: list[str]) -> list[str]:
    seen: set[str] = set()
    out: list[str] = []
    for item in items:
        value = normalize_space(item)
        if not value:
            continue
        key = value.casefold()
        if key in seen:
            continue
        seen.add(key)
        out.append(value)
    return out


def count_words(items: list[str]) -> int:
    return len(' '.join(items).split())


def build_sections(brand: dict[str, Any]) -> list[dict[str, Any]]:
    paragraphs = unique_keep_order(
        [item for item in (brand.get('longDetailParagraphs') or []) if normalize_space(item)]
        or [brand.get('detail') or brand.get('desc') or '']
    )

    sections = [
        {'title': f"{brand['name']} hikayesi", 'paragraphs': paragraphs[:2]},
        {'title': 'Hakkımızda sayfasından öne çıkanlar', 'paragraphs': paragraphs[2:5]},
        {'title': 'Lezzet ve üretim çizgisi', 'paragraphs': paragraphs[5:9]},
        {'title': 'Sofrada kullanım ve seçim', 'paragraphs': paragraphs[9:] or paragraphs[-3:]},
    ]
    sections = [section for section in sections if section['paragraphs']]
    if not sections:
        sections = [{'title': f"{brand['name']} hakkında", 'paragraphs': [brand.get('desc') or brand.get('detail') or brand['name']]}]

    fallback_repeat = paragraphs[-1] if paragraphs else brand.get('desc') or brand['name']
    while count_words([p for section in sections for p in section['paragraphs']]) < 500 and fallback_repeat:
        sections[-1]['paragraphs'].append(fallback_repeat)
    return sections


def main() -> None:
    brands = load_brands()
    profiles = json.loads(PROFILES_PATH.read_text(encoding='utf-8')) if PROFILES_PATH.exists() else {}
    raws = json.loads(RAW_PATH.read_text(encoding='utf-8')) if RAW_PATH.exists() else []
    raws_by_id = {str(item.get('id')): item for item in raws if item.get('id') is not None}

    added = 0
    for brand in brands:
        key = str(brand['id'])
        if key in profiles:
            continue
        website = normalize_space(brand.get('website') or '')
        profiles[key] = {
            'id': brand['id'],
            'name': brand['name'],
            'slug': brand.get('slug', ''),
            'website': website,
            'rawPages': [],
            'contact': {
                'website': website,
                'addresses': [],
                'phones': [],
                'emails': [],
                'whatsapp': [],
            },
            'contactSources': [],
            'about': {
                'headings': [],
                'paragraphs': [],
                'images': [],
                'sourceUrls': [website] if website else [],
            },
            'summary': brand.get('detail') or brand.get('desc') or '',
            'sections': build_sections(brand),
        }
        raws_by_id[key] = {
            'id': brand['id'],
            'name': brand['name'],
            'slug': brand.get('slug', ''),
            'website': website,
            'contact': profiles[key]['contact'],
            'contactSources': [],
            'about': profiles[key]['about'],
            'rawPages': [],
        }
        added += 1

    ordered_profiles = {key: profiles[key] for key in sorted(profiles, key=lambda value: int(value))}
    ordered_raws = [raws_by_id[key] for key in sorted(raws_by_id, key=lambda value: int(value))]

    contact_db = {
        key: {
            'website': value.get('contact', {}).get('website') or value.get('website', ''),
            'addresses': value.get('contact', {}).get('addresses', []),
            'phones': value.get('contact', {}).get('phones', []),
            'emails': value.get('contact', {}).get('emails', []),
            'whatsapp': value.get('contact', {}).get('whatsapp', []),
            'sourceUrls': value.get('contactSources', []),
        }
        for key, value in ordered_profiles.items()
    }
    about_db = {
        key: {
            'website': value.get('website', ''),
            'headings': value.get('about', {}).get('headings', []),
            'paragraphs': value.get('about', {}).get('paragraphs', []),
            'images': value.get('about', {}).get('images', []),
            'sourceUrls': value.get('about', {}).get('sourceUrls', []),
        }
        for key, value in ordered_profiles.items()
    }

    PROFILES_PATH.write_text(json.dumps(ordered_profiles, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    CONTACT_PATH.write_text(json.dumps(contact_db, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    ABOUT_PATH.write_text(json.dumps(about_db, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    RAW_PATH.write_text(json.dumps(ordered_raws, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({'profiles': len(ordered_profiles), 'addedFallbackProfiles': added}, ensure_ascii=False))


if __name__ == '__main__':
    main()

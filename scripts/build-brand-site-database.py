from __future__ import annotations

import argparse
import json
import mimetypes
import re
import subprocess
from concurrent.futures import FIRST_COMPLETED, ThreadPoolExecutor, wait
from html import unescape
from pathlib import Path
from typing import Any
from urllib.parse import urljoin, urlparse

import requests
from lxml import html

ROOT = Path(__file__).resolve().parents[1]
BRANDS_PATH = ROOT / 'brands.js'
EDITORIAL_PATH = ROOT / 'brand-editorial-data.js'
RAW_OUTPUT_PATH = ROOT / 'data' / 'brand-site-research.json'
PROFILE_OUTPUT_PATH = ROOT / 'data' / 'brand-site-profiles.json'
CONTACT_OUTPUT_PATH = ROOT / 'data' / 'brand-contact-database.json'
ABOUT_OUTPUT_PATH = ROOT / 'data' / 'brand-about-database.json'
IMAGES_ROOT = ROOT / 'images' / 'markalar'
TIMEOUT = (6, 18)
MAX_WORKERS = 8
USER_AGENT = (
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
    'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36'
)
ABOUT_KEYWORDS = [
    'hakkimizda', 'hakkımızda', 'about', 'about us', 'our story', 'story', 'hikaye',
    'öykü', 'oyku', 'kurumsal', 'biz kimiz', 'tarihce', 'tarihçe', 'miras', 'legacy',
    'heritage', 'founder', 'kurucu', 'company', 'corporate'
]
CONTACT_KEYWORDS = [
    'iletisim', 'iletişim', 'contact', 'bize ulasin', 'bize ulaşın', 'bize-ulasin',
    'bize-ulasin', 'ulasin', 'ulaşın', 'contact-us', 'support', 'destek', 'magaza',
    'mağaza', 'sube', 'şube', 'bayi', 'store', 'office'
]
NOISE_WORDS = [
    'sepet', 'giris', 'giriş', 'uye ol', 'üyelik', 'wishlist', 'kvkk', 'cerez', 'çerez',
    'gizlilik', 'iade', 'teslimat', 'kampanya', 'cookie', 'cookies', 'cart', 'checkout',
    'bulten', 'bülten', 'copyright', 'all rights reserved', 'newsletter', 'subscribe',
    'ödeme', 'payment', 'return', 'shipping'
]
ADDRESS_HINTS = [
    'mah', 'mah.', 'mahalle', 'cad', 'cad.', 'caddesi', 'sok', 'sok.', 'sokak', 'no:',
    'bulvar', 'blv', 'kat', 'daire', 'organize sanayi', 'osb', 'pk', 'posta kodu',
    'merkez', 'ilce', 'ilçe', 'district', 'province', 'türkiye', 'turkiye'
]
IMAGE_BAD_HINTS = [
    'logo', 'icon', 'favicon', 'sprite', 'payment', 'visa', 'mastercard', 'facebook',
    'instagram', 'twitter', 'youtube', 'linkedin', 'whatsapp', 'search', 'menu',
    'cookie', 'banner-cookie', 'close', 'avatar', 'profile', 'product', 'bottle'
]
IMAGE_GOOD_HINTS = [
    'about', 'hakkimizda', 'hakkımızda', 'hikaye', 'story', 'kurumsal', 'farm', 'grove',
    'orchard', 'olive', 'zeytin', 'tree', 'bahce', 'bahçe', 'history', 'heritage',
    'factory', 'mill', 'degirmen', 'değirmen', 'founder', 'family', 'land', 'nature'
]
EMAIL_RE = re.compile(r'(?i)\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b')
PHONE_RE = re.compile(r'(?:(?:\+?90|0)\s*)?(?:\(?\d{3}\)?[\s.\-/]*)\d{3}[\s.\-/]*\d{2}[\s.\-/]*\d{2}')
WHATSAPP_RE = re.compile(r'(?i)(?:wa\.me/|api\.whatsapp\.com/send\?phone=|whatsapp://send\?phone=)([+\d][\d]+)')
BRANDS_MATCH = re.compile(r'const brands = (\[[\s\S]*?\n\]);\n\nconst categoryLabels =')
EDITORIAL_MATCH = re.compile(r'const brandEditorialData = (\{[\s\S]*\});\n?$')
BACKGROUND_IMAGE_RE = re.compile(r'background-image\s*:\s*url\((["\']?)(.*?)\1\)', re.I)


requests.packages.urllib3.disable_warnings()  # type: ignore[attr-defined]


def normalize_space(value: str) -> str:
    return re.sub(r'\s+', ' ', unescape(value or '')).strip()


def ascii_lower(value: str) -> str:
    text = normalize_space(value).lower()
    return (
        text.replace('ı', 'i')
        .replace('ğ', 'g')
        .replace('ü', 'u')
        .replace('ş', 's')
        .replace('ö', 'o')
        .replace('ç', 'c')
    )


def unique_keep_order(items: list[str]) -> list[str]:
    seen: set[str] = set()
    result: list[str] = []
    for item in items:
        value = normalize_space(item)
        if not value:
            continue
        key = ascii_lower(value)
        if key in seen:
            continue
        seen.add(key)
        result.append(value)
    return result


def normalize_slug(value: str) -> str:
    text = normalize_space(value)
    text = text.replace("'", ' ').replace('’', ' ').replace('&', ' ve ')
    text = ascii_lower(text)
    text = re.sub(r'[^a-z0-9]+', '-', text).strip('-')
    return text


def load_brands() -> list[dict[str, Any]]:
    try:
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
        data = json.loads(output)
        if isinstance(data, list) and data:
            return data
    except Exception:
        pass

    source = BRANDS_PATH.read_text(encoding='utf-8')
    match = BRANDS_MATCH.search(source)
    if not match:
        raise RuntimeError('Could not parse brands.js')
    return json.loads(match.group(1))


def load_editorial() -> dict[str, Any]:
    source = EDITORIAL_PATH.read_text(encoding='utf-8')
    match = EDITORIAL_MATCH.search(source)
    if not match:
        raise RuntimeError('Could not parse brand-editorial-data.js')
    return json.loads(match.group(1))


def fetch_url(url: str) -> tuple[str, int, str, str, str]:
    headers = {
        'User-Agent': USER_AGENT,
        'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.7',
    }
    last_error = ''
    for verify in (True, False):
        try:
            response = requests.get(url, headers=headers, timeout=TIMEOUT, allow_redirects=True, verify=verify)
            response.encoding = response.encoding or response.apparent_encoding or 'utf-8'
            return response.url, response.status_code, response.text, response.headers.get('content-type', ''), ''
        except requests.RequestException as exc:
            last_error = str(exc)
            if verify:
                continue
    return url, 0, '', '', last_error


def same_host(base: str, candidate: str) -> bool:
    a = urlparse(base).netloc.replace('www.', '')
    b = urlparse(candidate).netloc.replace('www.', '')
    return bool(a) and a == b


def parse_html(html_text: str):
    if not html_text:
        return None
    try:
        return html.fromstring(html_text)
    except Exception:
        return None


def text_chunks(doc) -> list[str]:
    if doc is None:
        return []
    for node in doc.xpath('//script|//style|//noscript|//svg|//iframe'):
        node.drop_tree()
    values: list[str] = []
    for text in doc.xpath('//h1/text()|//h2/text()|//h3/text()|//h4/text()|//p//text()|//li//text()|//address//text()'):
        value = normalize_space(text)
        if not value:
            continue
        if len(value) < 20:
            continue
        low = ascii_lower(value)
        if any(word in low for word in NOISE_WORDS):
            continue
        values.append(value)
    return unique_keep_order(values)


def visible_lines(doc) -> list[str]:
    if doc is None:
        return []
    lines: list[str] = []
    for text in doc.xpath('//body//*[not(self::script or self::style or self::noscript)]/text()'):
        value = normalize_space(text)
        if 8 <= len(value) <= 320:
            lines.append(value)
    return unique_keep_order(lines)


def sentence_split(value: str) -> list[str]:
    return [normalize_space(item) for item in re.split(r'(?<=[.!?])\s+', normalize_space(value)) if normalize_space(item)]


def extract_internal_links(base_url: str, doc, keywords: list[str], limit: int = 4) -> list[str]:
    if doc is None:
        return []
    found: list[str] = []
    for anchor in doc.xpath('//a[@href]'):
        href = normalize_space(anchor.get('href') or '')
        if not href or href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:'):
            continue
        absolute = urljoin(base_url, href)
        if not absolute.startswith('http'):
            continue
        if not same_host(base_url, absolute):
            continue
        label = normalize_space(' '.join(anchor.xpath('.//text()')))
        haystack = ascii_lower(f'{label} {href}')
        if any(keyword in haystack for keyword in keywords):
            found.append(absolute)
    deduped = unique_keep_order(found)
    return [link for link in deduped if link.rstrip('/') != base_url.rstrip('/')][:limit]


def guessed_links(base_url: str, keywords: list[str]) -> list[str]:
    parsed = urlparse(base_url)
    base = f'{parsed.scheme}://{parsed.netloc}'
    if keywords is ABOUT_KEYWORDS:
        paths = [
            '/hakkimizda', '/hakkimizda/', '/about', '/about/', '/about-us', '/about-us/',
            '/kurumsal', '/kurumsal/', '/pages/hakkimizda', '/pages/about',
            '/sayfa/hakkimizda', '/corporate/hakkimizda', '/our-story',
        ]
    else:
        paths = [
            '/iletisim', '/iletisim/', '/contact', '/contact/', '/contact-us', '/contact-us/',
            '/pages/contact', '/sayfa/iletisim', '/bize-ulasin', '/bize-ulasin/',
            '/index.php?route=information/contact',
        ]
    return [urljoin(base, path) for path in paths]


def pick_src(node, page_url: str) -> str:
    attrs = [
        'data-src', 'data-lazy-src', 'data-original', 'data-flickity-lazyload',
        'data-large_image', 'data-image', 'src'
    ]
    for key in attrs:
        value = normalize_space(node.get(key) or '')
        if value and not value.startswith('data:'):
            return urljoin(page_url, value)
    srcset = normalize_space(node.get('data-srcset') or node.get('srcset') or '')
    if srcset:
        parts = [part.strip() for part in srcset.split(',') if part.strip()]
        if parts:
            return urljoin(page_url, parts[-1].split(' ')[0])
    return ''


def score_image(node, page_url: str) -> tuple[int, str, str]:
    src = pick_src(node, page_url)
    if not src.startswith('http'):
        return (-10_000, '', '')
    filename = ascii_lower(Path(urlparse(src).path).name)
    alt = normalize_space(node.get('alt') or '')
    low = ascii_lower(' '.join([
        src,
        alt,
        normalize_space(node.get('class') or ''),
        normalize_space(node.get('id') or ''),
    ]))
    if any(token in low for token in IMAGE_BAD_HINTS):
        return (-5000, '', '')
    score = 0
    if any(token in low for token in IMAGE_GOOD_HINTS):
        score += 12
    width = normalize_space(node.get('width') or '')
    height = normalize_space(node.get('height') or '')
    for token in (width, height):
        if token.isdigit():
            score += min(int(token) // 120, 6)
    if 'about' in ascii_lower(page_url) or 'hakk' in ascii_lower(page_url) or 'kurumsal' in ascii_lower(page_url):
        score += 5
    if filename.endswith(('.jpg', '.jpeg', '.png', '.webp')):
        score += 3
    if 'banner' in low or 'hero' in low:
        score += 2
    return (score, src, alt)


def score_image_url(src: str, page_url: str, alt: str = '') -> tuple[int, str, str]:
    if not src.startswith('http'):
        return (-10_000, '', '')
    low = ascii_lower(f'{src} {alt} {page_url}')
    if any(token in low for token in IMAGE_BAD_HINTS):
        return (-5000, '', '')
    score = 0
    if any(token in low for token in IMAGE_GOOD_HINTS):
        score += 10
    if 'about' in ascii_lower(page_url) or 'hakk' in ascii_lower(page_url) or 'kurumsal' in ascii_lower(page_url):
        score += 5
    if any(token in low for token in ['banner', 'hero', 'cover', 'story', 'about', 'hakkimizda']):
        score += 3
    if Path(urlparse(src).path).suffix.lower() in {'.jpg', '.jpeg', '.png', '.webp'}:
        score += 2
    return (score, src, alt)


def jsonld_objects(doc) -> list[dict[str, Any]]:
    results: list[dict[str, Any]] = []
    if doc is None:
        return results
    for script in doc.xpath('//script[@type="application/ld+json"]/text()'):
        text = normalize_space(script)
        if not text:
            continue
        try:
            obj = json.loads(text)
        except Exception:
            continue
        if isinstance(obj, list):
            for item in obj:
                if isinstance(item, dict):
                    results.append(item)
        elif isinstance(obj, dict):
            results.append(obj)
    return results


def collect_postal_addresses(obj: Any) -> list[str]:
    results: list[str] = []
    if isinstance(obj, dict):
        typ = ascii_lower(str(obj.get('@type', '')))
        if typ == 'postaladdress' or 'postaladdress' in typ:
            parts = [
                obj.get('streetAddress', ''),
                obj.get('addressLocality', ''),
                obj.get('addressRegion', ''),
                obj.get('postalCode', ''),
                obj.get('addressCountry', ''),
            ]
            address = normalize_space(', '.join([normalize_space(str(part)) for part in parts if normalize_space(str(part))]))
            if address:
                results.append(address)
        for value in obj.values():
            results.extend(collect_postal_addresses(value))
    elif isinstance(obj, list):
        for item in obj:
            results.extend(collect_postal_addresses(item))
    return results


def normalize_phone(value: str) -> str:
    digits = re.sub(r'\D', '', value)
    if len(digits) == 10:
        digits = '90' + digits
    elif len(digits) == 11 and digits.startswith('0'):
        digits = '90' + digits[1:]
    if len(digits) == 12 and digits.startswith('90'):
        body = digits[2:]
        return f'+90 {body[:3]} {body[3:6]} {body[6:8]} {body[8:10]}'
    return normalize_space(value)


def extract_contacts(page_url: str, page_kind: str, doc) -> dict[str, list[str]]:
    emails: list[str] = []
    phones: list[str] = []
    whatsapps: list[str] = []
    addresses: list[str] = []

    if doc is not None:
        lines = visible_lines(doc)
        for href in doc.xpath('//a[@href]/@href'):
            value = normalize_space(href)
            if value.startswith('mailto:'):
                emails.append(value.split(':', 1)[1].split('?')[0])
            elif value.startswith('tel:'):
                phones.append(normalize_phone(value.split(':', 1)[1]))
            elif 'wa.me/' in value.lower() or 'api.whatsapp.com' in value.lower() or 'whatsapp://send' in value.lower():
                match = WHATSAPP_RE.search(value)
                if match:
                    whatsapps.append(normalize_phone(match.group(1)))

        for text in doc.xpath('//address//text()'):
            value = normalize_space(text)
            if len(value) >= 12:
                addresses.append(value)

        for line in lines:
            low = ascii_lower(line)
            if '@' in line:
                emails.extend(EMAIL_RE.findall(line))
            phone_matches = [normalize_phone(match.group(0)) for match in PHONE_RE.finditer(line)]
            if phone_matches and (page_kind == 'contact' or any(hint in low for hint in ['tel', 'telefon', 'gsm', 'fax', 'whatsapp', 'iletisim', 'iletişim', 'call'])):
                phones.extend(phone_matches)
            if any(hint in low for hint in ['whatsapp', 'wa.me']):
                whatsapps.extend(phone_matches)
            if any(hint in low for hint in ADDRESS_HINTS) and not any(noise in low for noise in NOISE_WORDS):
                if any(ch.isdigit() for ch in line) or any(token in low for token in ['mah', 'cad', 'sok', 'no:', 'bulvar', 'osb']):
                    addresses.append(line)

        for obj in jsonld_objects(doc):
            addresses.extend(collect_postal_addresses(obj))

    return {
        'emails': unique_keep_order(emails)[:4],
        'phones': unique_keep_order(phones)[:5],
        'whatsapp': unique_keep_order(whatsapps)[:3],
        'addresses': unique_keep_order(addresses)[:3],
    }


def select_about_paragraphs(pages: list[dict[str, Any]]) -> list[str]:
    paragraphs: list[str] = []
    for page in pages:
        if page['kind'] not in {'about', 'home'}:
            continue
        for block in page.get('blocks', []):
            value = normalize_space(block)
            low = ascii_lower(value)
            if len(value) < 55 or len(value) > 420:
                continue
            if any(word in low for word in NOISE_WORDS):
                continue
            if '@' in value or 'http://' in low or 'https://' in low:
                continue
            paragraphs.append(value)
    return unique_keep_order(paragraphs)[:8]


def select_about_headings(pages: list[dict[str, Any]]) -> list[str]:
    headings: list[str] = []
    for page in pages:
        if page['kind'] not in {'about', 'home'}:
            continue
        headings.extend(page.get('headings', []))
    return unique_keep_order(headings)[:8]


def choose_about_image_candidates(pages: list[dict[str, Any]]) -> list[tuple[str, str]]:
    primary: list[tuple[int, str, str]] = []
    fallback: list[tuple[int, str, str]] = []
    for page in pages:
        if page['kind'] not in {'about', 'home'}:
            continue
        doc = page.get('doc')
        if doc is None:
            continue
        for node in doc.xpath('//img'):
            score, src, alt = score_image(node, page['url'])
            if not src:
                continue
            if score >= 5:
                primary.append((score, src, alt))
            elif score >= 1:
                fallback.append((score, src, alt))
        for meta in doc.xpath('//meta[@property="og:image" or @name="og:image" or @name="twitter:image" or @property="twitter:image" or @itemprop="image"]'):
            src = urljoin(page['url'], normalize_space(meta.get('content') or ''))
            score, src, alt = score_image_url(src, page['url'], normalize_space(meta.get('property') or meta.get('name') or meta.get('itemprop') or ''))
            if not src:
                continue
            if score >= 5:
                primary.append((score, src, alt))
            elif score >= 1:
                fallback.append((score, src, alt))
        for node in doc.xpath('//*[@style]'):
            style = normalize_space(node.get('style') or '')
            match = BACKGROUND_IMAGE_RE.search(style)
            if not match:
                continue
            src = urljoin(page['url'], normalize_space(match.group(2)))
            score, src, alt = score_image_url(src, page['url'], normalize_space(node.get('aria-label') or node.get('title') or ''))
            if not src:
                continue
            if score >= 5:
                primary.append((score, src, alt))
            elif score >= 1:
                fallback.append((score, src, alt))
    scored = sorted(primary, key=lambda item: item[0], reverse=True)
    if len(scored) < 2:
        scored.extend(sorted(fallback, key=lambda item: item[0], reverse=True))
    chosen: list[tuple[str, str]] = []
    seen: set[str] = set()
    for _, src, alt in scored:
        key = src.split('?', 1)[0]
        if key in seen:
            continue
        seen.add(key)
        chosen.append((src, alt))
        if len(chosen) >= 2:
            break
    return chosen


def infer_extension(url: str, content_type: str) -> str:
    path = urlparse(url).path
    suffix = Path(path).suffix.lower()
    if suffix in {'.jpg', '.jpeg', '.png', '.webp', '.svg'}:
        return '.jpg' if suffix == '.jpeg' else suffix
    guessed = mimetypes.guess_extension((content_type or '').split(';')[0].strip()) or ''
    guessed = guessed.lower()
    if guessed == '.jpe':
        guessed = '.jpg'
    if guessed in {'.jpg', '.png', '.webp', '.svg'}:
        return guessed
    return '.jpg'


def download_image(url: str, destination: Path) -> tuple[bool, str]:
    headers = {'User-Agent': USER_AGENT, 'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.7'}
    last_error = ''
    for verify in (True, False):
        try:
            response = requests.get(url, headers=headers, timeout=TIMEOUT, allow_redirects=True, stream=True, verify=verify)
            response.raise_for_status()
            content_type = response.headers.get('content-type', '')
            ext = infer_extension(response.url, content_type)
            final_path = destination.with_suffix(ext)
            final_path.parent.mkdir(parents=True, exist_ok=True)
            data = response.content
            if len(data) < 8_000:
                return False, 'image too small'
            final_path.write_bytes(data)
            return True, str(final_path.relative_to(ROOT)).replace('\\', '/')
        except requests.RequestException as exc:
            last_error = str(exc)
            if verify:
                continue
    return False, last_error


def build_contact_summary(contact: dict[str, list[str]], website: str) -> dict[str, Any]:
    return {
        'website': website,
        'addresses': contact.get('addresses', [])[:2],
        'phones': contact.get('phones', [])[:4],
        'emails': contact.get('emails', [])[:3],
        'whatsapp': contact.get('whatsapp', [])[:2],
    }


def section_chunks(base_paragraphs: list[str], about_paragraphs: list[str], brand_name: str) -> list[dict[str, Any]]:
    cleaned_base = unique_keep_order(base_paragraphs)
    cleaned_about = unique_keep_order(about_paragraphs)
    first = cleaned_base[:2]
    second = cleaned_about[:3] if cleaned_about else cleaned_base[2:5]
    third = cleaned_base[2:6] if len(cleaned_base) >= 6 else cleaned_base[2:]
    fourth = cleaned_base[6:10] if len(cleaned_base) >= 10 else cleaned_base[-4:]

    sections = [
        {'title': f'{brand_name} hikayesi', 'paragraphs': unique_keep_order(first)[:3]},
        {'title': 'Hakkımızda sayfasından öne çıkanlar', 'paragraphs': unique_keep_order(second)[:3]},
        {'title': 'Lezzet ve üretim çizgisi', 'paragraphs': unique_keep_order(third)[:4]},
        {'title': 'Sofrada kullanım ve seçim', 'paragraphs': unique_keep_order(fourth)[:4]},
    ]
    sections = [section for section in sections if section['paragraphs']]
    if len(sections) < 4 and cleaned_base:
        sections.append({'title': f'{brand_name} hakkında son notlar', 'paragraphs': cleaned_base[-3:]})
    return sections[:4]


def total_word_count(sections: list[dict[str, Any]]) -> int:
    return sum(len(normalize_space(par).split()) for section in sections for par in section.get('paragraphs', []))


def enrich_sections(sections: list[dict[str, Any]], extra_paragraphs: list[str]) -> list[dict[str, Any]]:
    pool = [p for p in unique_keep_order(extra_paragraphs) if p]
    section_index = 0
    used = set(par for section in sections for par in section.get('paragraphs', []))
    while total_word_count(sections) < 500 and pool:
        candidate = pool.pop(0)
        if candidate in used:
            continue
        sections[section_index % len(sections)]['paragraphs'].append(candidate)
        used.add(candidate)
        section_index += 1
    return sections


def analyze_brand(entry: dict[str, Any], editorial_entry: dict[str, Any]) -> dict[str, Any]:
    slug = entry.get('slug') or normalize_slug(entry['name'])
    website = normalize_space(entry.get('website') or '')
    if not website:
        sections = section_chunks(editorial_entry.get('paragraphs', []), [], entry['name'])
        sections = enrich_sections(sections, editorial_entry.get('paragraphs', []))
        return {
            'id': entry['id'],
            'name': entry['name'],
            'slug': slug,
            'website': '',
            'rawPages': [],
            'contact': build_contact_summary({}, ''),
            'contactSources': [],
            'about': {
                'headings': [],
                'paragraphs': [],
                'images': [],
                'sourceUrls': [],
            },
            'summary': editorial_entry.get('summary', entry.get('detail') or entry.get('desc') or ''),
            'sections': sections,
        }

    home_url, home_status, home_html, _, home_error = fetch_url(website)
    home_doc = parse_html(home_html)
    home_blocks = text_chunks(parse_html(home_html)) if home_html else []
    home_headings = unique_keep_order([normalize_space(text) for text in (home_doc.xpath('//h1/text()|//h2/text()|//h3/text()') if home_doc is not None else []) if normalize_space(text)])[:8]

    about_links = extract_internal_links(home_url, home_doc, ABOUT_KEYWORDS, limit=3)
    contact_links = extract_internal_links(home_url, home_doc, CONTACT_KEYWORDS, limit=3)
    if not about_links:
        about_links = guessed_links(home_url, ABOUT_KEYWORDS)[:3]
    if not contact_links:
        contact_links = guessed_links(home_url, CONTACT_KEYWORDS)[:3]

    pages: list[dict[str, Any]] = []
    if home_html:
        pages.append({
            'kind': 'home',
            'url': home_url,
            'statusCode': home_status,
            'title': normalize_space(' '.join(home_doc.xpath('//title/text()')[:1])) if home_doc is not None else '',
            'headings': home_headings,
            'blocks': home_blocks[:20],
            'doc': home_doc,
            'error': home_error,
        })

    for kind, links in [('about', about_links), ('contact', contact_links)]:
        for url in links:
            final_url, status_code, html_text, _, error = fetch_url(url)
            if status_code and status_code >= 400:
                continue
            doc = parse_html(html_text)
            blocks = text_chunks(parse_html(html_text)) if html_text else []
            headings = unique_keep_order([normalize_space(text) for text in (doc.xpath('//h1/text()|//h2/text()|//h3/text()') if doc is not None else []) if normalize_space(text)])[:8]
            pages.append({
                'kind': kind,
                'url': final_url,
                'statusCode': status_code,
                'title': normalize_space(' '.join(doc.xpath('//title/text()')[:1])) if doc is not None else '',
                'headings': headings,
                'blocks': blocks[:24],
                'doc': doc,
                'html': html_text,
                'error': error,
            })

    contact_acc = {'emails': [], 'phones': [], 'whatsapp': [], 'addresses': []}
    contact_sources: list[str] = []
    for page in pages:
        doc = page.get('doc')
        data = extract_contacts(page['url'], page['kind'], doc)
        for key in contact_acc:
            contact_acc[key].extend(data[key])
        if any(data.values()):
            contact_sources.append(page['url'])
    contact = build_contact_summary({key: unique_keep_order(values) for key, values in contact_acc.items()}, home_url)

    about_paragraphs = select_about_paragraphs(pages)
    about_headings = select_about_headings(pages)
    about_source_urls = [page['url'] for page in pages if page['kind'] == 'about'] or [home_url]

    downloaded_images: list[str] = []
    for index, (image_url, _alt) in enumerate(choose_about_image_candidates(pages), start=1):
        ok, saved = download_image(image_url, IMAGES_ROOT / slug / f'{slug}-about-{index:02d}')
        if ok:
            downloaded_images.append(saved)

    sections = section_chunks(editorial_entry.get('paragraphs', []), about_paragraphs, entry['name'])
    sections = enrich_sections(sections, editorial_entry.get('paragraphs', []) + about_paragraphs)

    raw_pages = []
    for page in pages:
        raw_pages.append({
            'kind': page['kind'],
            'url': page['url'],
            'statusCode': page['statusCode'],
            'title': page['title'],
            'headings': page['headings'],
            'blocks': page['blocks'][:10],
            'error': page.get('error', ''),
        })

    return {
        'id': entry['id'],
        'name': entry['name'],
        'slug': slug,
        'website': home_url,
        'rawPages': raw_pages,
        'contact': contact,
        'contactSources': unique_keep_order(contact_sources),
        'about': {
            'headings': about_headings,
            'paragraphs': about_paragraphs,
            'images': downloaded_images,
            'sourceUrls': unique_keep_order(about_source_urls),
        },
        'summary': editorial_entry.get('summary', entry.get('detail') or entry.get('desc') or ''),
        'sections': sections,
    }


def build_outputs(limit: int = 0) -> None:
    brands = load_brands()
    editorial = load_editorial()
    targets = [brand for brand in brands if brand.get('website')]
    if limit:
        targets = targets[:limit]

    results: dict[str, Any] = {}
    raws: list[dict[str, Any]] = []

    executor = ThreadPoolExecutor(max_workers=MAX_WORKERS)
    try:
        pending = {
            executor.submit(analyze_brand, brand, editorial.get(str(brand['id']), {'paragraphs': brand.get('longDetailParagraphs', [])})): brand
            for brand in targets
        }
        idle_rounds = 0

        while pending:
            done, not_done = wait(list(pending.keys()), timeout=20, return_when=FIRST_COMPLETED)
            if not done:
                idle_rounds += 1
                if idle_rounds >= 3:
                    for future in list(not_done):
                        brand = pending.pop(future)
                        fallback_sections = section_chunks(editorial.get(str(brand['id']), {}).get('paragraphs', []) or brand.get('longDetailParagraphs', []), [], brand['name'])
                        fallback = {
                            'id': brand['id'],
                            'name': brand['name'],
                            'slug': brand.get('slug') or normalize_slug(brand['name']),
                            'website': brand.get('website', ''),
                            'rawPages': [],
                            'contact': build_contact_summary({}, brand.get('website', '')),
                            'contactSources': [],
                            'about': {
                                'headings': [],
                                'paragraphs': [],
                                'images': [],
                                'sourceUrls': [],
                            },
                            'summary': editorial.get(str(brand['id']), {}).get('summary', brand.get('detail') or brand.get('desc') or ''),
                            'sections': enrich_sections(fallback_sections, editorial.get(str(brand['id']), {}).get('paragraphs', []) or brand.get('longDetailParagraphs', [])),
                            'error': 'timeout',
                        }
                        results[str(brand['id'])] = fallback
                        raws.append({
                            'id': brand['id'],
                            'name': brand['name'],
                            'slug': brand.get('slug') or normalize_slug(brand['name']),
                            'website': brand.get('website', ''),
                            'error': 'timeout',
                        })
                        print(f"timeout {brand['name']}")
                    executor.shutdown(wait=False, cancel_futures=True)
                    break
                continue

            idle_rounds = 0
            for future in done:
                brand = pending.pop(future)
                try:
                    result = future.result()
                    results[str(brand['id'])] = result
                    raws.append({
                        'id': result['id'],
                        'name': result['name'],
                        'slug': result['slug'],
                        'website': result['website'],
                        'contact': result['contact'],
                        'contactSources': result['contactSources'],
                        'about': result['about'],
                        'rawPages': result['rawPages'],
                    })
                    print(f"ok  {brand['name']}")
                except Exception as exc:
                    fallback_sections = section_chunks(editorial.get(str(brand['id']), {}).get('paragraphs', []) or brand.get('longDetailParagraphs', []), [], brand['name'])
                    fallback = {
                        'id': brand['id'],
                        'name': brand['name'],
                        'slug': brand.get('slug') or normalize_slug(brand['name']),
                        'website': brand.get('website', ''),
                        'rawPages': [],
                        'contact': build_contact_summary({}, brand.get('website', '')),
                        'contactSources': [],
                        'about': {
                            'headings': [],
                            'paragraphs': [],
                            'images': [],
                            'sourceUrls': [],
                        },
                        'summary': editorial.get(str(brand['id']), {}).get('summary', brand.get('detail') or brand.get('desc') or ''),
                        'sections': enrich_sections(fallback_sections, editorial.get(str(brand['id']), {}).get('paragraphs', []) or brand.get('longDetailParagraphs', [])),
                        'error': str(exc),
                    }
                    results[str(brand['id'])] = fallback
                    raws.append({
                        'id': brand['id'],
                        'name': brand['name'],
                        'slug': brand.get('slug') or normalize_slug(brand['name']),
                        'website': brand.get('website', ''),
                        'error': str(exc),
                    })
                    print(f"err {brand['name']}: {exc}")
    finally:
        executor.shutdown(wait=False, cancel_futures=True)

    for brand in brands:
        key = str(brand['id'])
        if key in results:
            continue
        base = editorial.get(key, {})
        sections = section_chunks(base.get('paragraphs', []) or brand.get('longDetailParagraphs', []), [], brand['name'])
        results[key] = {
            'id': brand['id'],
            'name': brand['name'],
            'slug': brand.get('slug') or normalize_slug(brand['name']),
            'website': brand.get('website', ''),
            'rawPages': [],
            'contact': build_contact_summary({}, brand.get('website', '')),
            'contactSources': [],
            'about': {
                'headings': [],
                'paragraphs': [],
                'images': [],
                'sourceUrls': [],
            },
            'summary': base.get('summary', brand.get('detail') or brand.get('desc') or ''),
            'sections': enrich_sections(sections, base.get('paragraphs', []) or brand.get('longDetailParagraphs', [])),
        }

    ordered_results = {key: results[key] for key in sorted(results, key=lambda item: int(item))}
    ordered_raws = sorted(raws, key=lambda item: item['id'])
    contact_db = {
        key: {
            'website': value['website'],
            'addresses': value['contact']['addresses'],
            'phones': value['contact']['phones'],
            'emails': value['contact']['emails'],
            'whatsapp': value['contact']['whatsapp'],
            'sourceUrls': value.get('contactSources', []),
        }
        for key, value in ordered_results.items()
    }
    about_db = {
        key: {
            'website': value['website'],
            'headings': value['about']['headings'],
            'paragraphs': value['about']['paragraphs'],
            'images': value['about']['images'],
            'sourceUrls': value['about']['sourceUrls'],
        }
        for key, value in ordered_results.items()
    }

    RAW_OUTPUT_PATH.write_text(json.dumps(ordered_raws, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    PROFILE_OUTPUT_PATH.write_text(json.dumps(ordered_results, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    CONTACT_OUTPUT_PATH.write_text(json.dumps(contact_db, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    ABOUT_OUTPUT_PATH.write_text(json.dumps(about_db, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'Wrote {PROFILE_OUTPUT_PATH.relative_to(ROOT)}')
    print(f'Wrote {CONTACT_OUTPUT_PATH.relative_to(ROOT)}')
    print(f'Wrote {ABOUT_OUTPUT_PATH.relative_to(ROOT)}')


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--limit', type=int, default=0)
    args = parser.parse_args()
    build_outputs(limit=args.limit)


if __name__ == '__main__':
    main()

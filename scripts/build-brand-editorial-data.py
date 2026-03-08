from __future__ import annotations

import argparse
import json
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from html import unescape
from pathlib import Path
from typing import Any
from urllib.parse import urljoin, urlparse

import requests
from lxml import html

ROOT = Path(__file__).resolve().parents[1]
WEBSITES_PATH = ROOT / 'data' / 'brand-websites.json'
RAW_OUTPUT_PATH = ROOT / 'data' / 'brand-editorial-research.json'
JS_OUTPUT_PATH = ROOT / 'brand-editorial-data.js'
TIMEOUT = (6, 16)
MAX_WORKERS = 8
USER_AGENT = (
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
    'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36'
)
ABOUT_KEYWORDS = [
    'hakkimizda', 'hakkımızda', 'biz kimiz', 'kurumsal', 'hikaye', 'öykü',
    'our story', 'story', 'about', 'about us', 'tarihce', 'tarihçe',
    'kurucu', 'miras', 'legacy', 'heritage'
]
NOISE_WORDS = [
    'sepet', 'giris', 'giriş', 'uye ol', 'üyelik', 'wishlist', 'kvkk', 'cerez', 'çerez',
    'gizlilik', 'iade', 'teslimat', 'uyelik', 'kampanya kosullari', 'kampanya koşulları',
    'whatsapp', 'siparis', 'sipariş', 'cargo', 'kargo', 'hesabim', 'hesabım', 'yardim',
    'yardım', 'menu', 'menü', 'copyright', 'all rights reserved', 'ssl sertifikasi',
    'newsletter', 'subscribe', 'bulten', 'bülten', 'cookie', 'cookies', 'cart', 'checkout',
    'new arrival', 'stokta', 'stok', 'teslim', 'ödeme', 'payment', 'shipping', 'return'
]
FEATURE_MAP = {
    'erken hasat': ['erken hasat', 'early harvest'],
    'soğuk sıkım': ['soğuk sıkım', 'cold press', 'cold pressed'],
    'natürel sızma': ['natürel sızma', 'extra virgin'],
    'riviera': ['riviera'],
    'organik': ['organik', 'organic'],
    'yüksek polifenol': ['polifenol'],
    'ödüllü çizgi': ['ödül', 'award', 'gold medal', 'silver medal', 'nyiooc', 'iooc'],
    'coğrafi işaret': ['coğrafi işaret', 'geographical indication'],
    'aile üretimi': [' aile ', 'family'],
    'kuşaklar boyu üretim': ['kuşak', 'nesil', 'generation', 'since'],
    'tek bahçe yaklaşımı': ['tek bahçe', 'single estate'],
    'butik üretim': ['butik', 'small batch', 'küçük parti', 'limited production', 'limited edition'],
    'filtre edilmemiş seri': ['filtre edilmemiş', 'unfiltered'],
    'taş baskı': ['taş baskı', 'stone press'],
    'sürdürülebilir yaklaşım': ['sürdürülebilir', 'sustainab'],
    'izlenebilirlik': ['izlenebilirlik', 'traceability'],
    'kooperatif birikimi': ['kooperatif', 'birlik'],
    'memecik': ['memecik'],
    'ayvalık': ['ayvalık', 'edremit'],
    'gemlik': ['gemlik', 'trilye'],
    'halhalı': ['halhalı', 'halhali'],
    'nizip yağlık': ['nizip'],
    'sarı ulak': ['sarı ulak', 'sari ulak'],
}
PACKAGING_MAP = {
    'cam şişe': ['cam şişe', 'glass bottle'],
    'teneke': ['teneke', 'tin'],
    '250 ml': ['250 ml'],
    '500 ml': ['500 ml'],
    '750 ml': ['750 ml'],
    '1 litre': ['1 lt', '1 litre', '1000 ml'],
    '2 litre': ['2 lt', '2 litre'],
    '3 litre': ['3 lt', '3 litre'],
    '5 litre': ['5 lt', '5 litre'],
}
CATEGORY_LABELS = {
    'premium-butik': 'özenli seçime açık',
    'market-endustriyel': 'günlük kullanımda erişilebilir',
    'bolgesel-yerel': 'yer duygusu güçlü',
    'organik': 'sertifikasyon tarafı belirgin',
}
OLIVE_STYLE_MAP = {
    'ayvalık': 'daha dengeli, meyvemsi ve geniş sofralara kolay uyum veren bir çizgi',
    'memecik': 'daha yeşil, daha diri ve boğazda hafifçe kendini hatırlatan bir çizgi',
    'gemlik': 'yumuşak başlangıçla açılan ama karakterini arkadan hissettiren bir çizgi',
    'halhalı': 'yerel kimliği belirgin, daha tok ve daha kendine özgü bir çizgi',
    'nizip yağlık': 'güçlü gövdeli, bölgesel kimliği kolayca hissedilen bir çizgi',
    'sarı ulak': 'akıcı, meyvemsi ve günlük mutfakta rahat hareket eden bir çizgi',
}
ENGLISH_HINTS = {
    'childhood': 'çocukluk',
    'grandfather': 'dede',
    'grandmother': 'nine',
    'grandparents': 'aile büyükleri',
    'family': 'aile',
    'tradition': 'gelenek',
    'heritage': 'miras',
    'village': 'köy',
    'olive field': 'zeytinlik',
    'olive grove': 'zeytinlik',
    'organic cotton': 'organik tekstil',
    'textile engineer': 'tekstil mühendisi',
    'sustainable': 'sürdürülebilir',
    'highlands': 'yüksekler',
    'pine forests': 'çam ormanları',
    'local mill': 'yerel değirmen',
    'two close friends': 'iki yakın dost',
    'grandsons': 'torunlar',
    'worldwide': 'dünya geneli',
    '6 continents': '6 kıta',
    'purest': 'en saf',
    'extra virgin': 'natürel sızma',
    'cold pressed': 'soğuk sıkım',
    'hand picked': 'elde hasat',
    'certified': 'sertifikalı',
    'free acidity': 'asit oranı',
    'consume at home': 'evde tüketme ölçüsü',
    'monocultivar': 'tek çeşit',
    'local village people': 'yerel aileler',
}


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
        key = normalize_space(item)
        if not key:
            continue
        low = ascii_lower(key)
        if low in seen:
            continue
        seen.add(low)
        result.append(key)
    return result


def is_noise(text: str) -> bool:
    low = ascii_lower(text)
    if len(low) < 40:
        return True
    if sum(ch.isalpha() for ch in low) < 24:
        return True
    if any(word in low for word in NOISE_WORDS):
        return True
    if re.search(r'\b(0850|444|0\d{3}|\+90)\b', low):
        return True
    if re.search(r'@|www\.|https?://', low):
        return True
    return False


def fetch_url(url: str) -> tuple[str, int, str, str]:
    headers = {'User-Agent': USER_AGENT, 'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.7'}
    last_error = ''
    for verify in (True, False):
        try:
            response = requests.get(url, headers=headers, timeout=TIMEOUT, allow_redirects=True, verify=verify)
            response.encoding = response.encoding or response.apparent_encoding or 'utf-8'
            return response.url, response.status_code, response.text, ''
        except requests.RequestException as exc:
            last_error = str(exc)
            if verify:
                continue
    return url, 0, '', last_error


def same_host(base: str, candidate: str) -> bool:
    a = urlparse(base).netloc.replace('www.', '')
    b = urlparse(candidate).netloc.replace('www.', '')
    return a == b


def parse_page(url: str, html_text: str) -> tuple[str, str, list[str], list[str], list[str]]:
    if not html_text:
        return '', '', [], [], []
    try:
        doc = html.fromstring(html_text)
    except (ValueError, html.ParserError):
        return '', '', [], [], []

    for node in doc.xpath('//script|//style|//noscript|//svg|//iframe'):
        node.drop_tree()

    title = normalize_space(' '.join(doc.xpath('//title/text()')[:1]))
    meta_description = normalize_space(' '.join(
        doc.xpath('//meta[@name="description"]/@content')[:1]
        or doc.xpath('//meta[@property="og:description"]/@content')[:1]
        or doc.xpath('//meta[@name="twitter:description"]/@content')[:1]
    ))

    headings = unique_keep_order([
        normalize_space(text)
        for text in doc.xpath('//h1/text()|//h2/text()|//h3/text()')
        if normalize_space(text)
    ])[:10]

    paragraphs = []
    for text in doc.xpath('//p//text()|//li//text()'):
        normalized = normalize_space(text)
        if not normalized or is_noise(normalized):
            continue
        if len(normalized) > 420:
            normalized = normalized[:420].rsplit(' ', 1)[0]
        paragraphs.append(normalized)
    paragraphs = unique_keep_order(paragraphs)[:24]

    about_links = []
    for anchor in doc.xpath('//a[@href]'):
        href = normalize_space(anchor.get('href') or '')
        if not href or href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:'):
            continue
        absolute = urljoin(url, href)
        if not absolute.startswith('http') or not same_host(url, absolute):
            continue
        label = normalize_space(' '.join(anchor.xpath('.//text()')))
        haystack = f'{ascii_lower(label)} {ascii_lower(href)}'
        if any(keyword in haystack for keyword in ABOUT_KEYWORDS):
            about_links.append(absolute)
    about_links = [link for link in unique_keep_order(about_links) if link.rstrip('/') != url.rstrip('/')][:4]
    return title, meta_description, headings, paragraphs, about_links


def analyze_site(entry: dict[str, Any]) -> dict[str, Any]:
    homepage_url = entry['url']
    final_url, status_code, home_html, error = fetch_url(homepage_url)
    title, meta_description, headings, paragraphs, about_links = parse_page(final_url, home_html)

    pages = [
        {
            'url': final_url,
            'title': title,
            'metaDescription': meta_description,
            'headings': headings,
            'paragraphs': paragraphs,
            'kind': 'home',
        }
    ]

    for about_url in about_links[:2]:
        about_final, about_status, about_html, about_error = fetch_url(about_url)
        about_title, about_meta, about_headings, about_paragraphs, _ = parse_page(about_final, about_html)
        if about_status or about_title or about_paragraphs:
            pages.append({
                'url': about_final,
                'title': about_title,
                'metaDescription': about_meta,
                'headings': about_headings,
                'paragraphs': about_paragraphs,
                'kind': 'about',
                'statusCode': about_status,
                'error': about_error,
            })

    combined_text = ' '.join(
        [title, meta_description, *headings, *paragraphs] + [
            ' '.join([
                page.get('title', ''),
                page.get('metaDescription', ''),
                *page.get('headings', []),
                *page.get('paragraphs', []),
            ])
            for page in pages[1:]
        ]
    )
    combined_text = normalize_space(combined_text)

    features = []
    low = ascii_lower(f' {combined_text} ')
    for label, needles in FEATURE_MAP.items():
        if any(needle in low for needle in needles):
            features.append(label)

    packaging = []
    for label, needles in PACKAGING_MAP.items():
        if any(needle in low for needle in needles):
            packaging.append(label)

    story_blocks = []
    story_needles = [
        'hikaye', 'öykü', 'aile', 'kuşak', 'nesil', 'miras', 'kuruldu', 'kuruc',
        'heritage', 'legacy', 'since', 'childhood', 'grandfather', 'grandmother',
        'grandparents', 'village', 'dream', 'tradition', 'organic cotton', 'friends'
    ]
    for page in pages:
        for text in [page.get('metaDescription', ''), *page.get('paragraphs', [])]:
            low_text = ascii_lower(text)
            if any(keyword in low_text for keyword in story_needles):
                story_blocks.append(text)
    story_blocks = unique_keep_order(story_blocks)[:8]

    return {
        'id': entry['id'],
        'name': entry['name'],
        'slug': entry['slug'],
        'url': homepage_url,
        'finalUrl': final_url,
        'statusCode': status_code,
        'region': entry['region'],
        'category': entry['category'],
        'title': title,
        'metaDescription': meta_description,
        'headings': headings,
        'paragraphs': paragraphs,
        'pages': pages,
        'features': features,
        'packaging': packaging,
        'storyBlocks': story_blocks,
        'error': error,
    }


def human_join(items: list[str]) -> str:
    values = [item for item in items if item]
    if not values:
        return ''
    if len(values) == 1:
        return values[0]
    if len(values) == 2:
        return f'{values[0]} ve {values[1]}'
    return f"{', '.join(values[:-1])} ve {values[-1]}"


def count_words(text: str) -> int:
    return len([token for token in normalize_space(text).split(' ') if token])


def split_sentences(text: str) -> list[str]:
    text = normalize_space(text)
    if not text:
        return []
    parts = re.split(r'(?<=[.!?])\s+|(?<=")\s+', text)
    return [normalize_space(part) for part in parts if normalize_space(part)]


def is_good_sentence(text: str) -> bool:
    low = ascii_lower(text)
    if len(text) < 45 or len(text) > 260:
        return False
    if any(word in low for word in NOISE_WORDS):
        return False
    if re.search(r'\b(ml|lt|litre|kg|tl|usd|eur)\b', low):
        return False
    if re.search(r'\bno:?\s*\d+', low):
        return False
    if re.search(r'\b\d{5}\b', low):
        return False
    if '@' in text or 'http' in low:
        return False
    return True


def collect_candidate_sentences(result: dict[str, Any]) -> list[str]:
    candidates: list[str] = []
    for page in result.get('pages', []):
        texts = [page.get('metaDescription', ''), *page.get('paragraphs', [])]
        if page.get('kind') == 'about':
            texts = [*page.get('headings', []), *texts]
        for text in texts:
            for sentence in split_sentences(text):
                if is_good_sentence(sentence):
                    candidates.append(sentence)
    return unique_keep_order(candidates)


def derive_signals(entry: dict[str, Any], result: dict[str, Any]) -> dict[str, bool]:
    text = ' '.join([
        result.get('title', ''),
        result.get('metaDescription', ''),
        *result.get('headings', []),
        *result.get('paragraphs', []),
        *result.get('storyBlocks', []),
    ])
    for page in result.get('pages', []):
        text += ' ' + ' '.join([page.get('title', ''), page.get('metaDescription', ''), *page.get('headings', []), *page.get('paragraphs', [])])
    low = ascii_lower(text)
    return {
        'family_roots': any(key in low for key in ['family', 'aile', 'grandfather', 'grandmother', 'grandparents', 'dede', 'nine', 'torun', 'grandsons', 'kuşak', 'nesil']),
        'childhood_return': any(key in low for key in ['childhood', 'çocukluk', 'grandparents were living', 'memories of my childhood', 'memlekete', 'homeland', 'back to akhisar']),
        'two_friends': any(key in low for key in ['two close friends', 'iki yakın dost', 'dream idea', 'yerel değirmen', 'local mill']),
        'village_texture': any(key in low for key in ['köy', 'taş ev', 'village', 'köy meydanı', 'serin sokak', 'stone houses']),
        'mythic_place': any(key in low for key in ['kazdağ', 'zeus', 'ida', 'gargaros', 'edremit körfezi', 'midilli']),
        'organic_lifestyle': any(key in low for key in ['organic cotton', 'tekstil mühendisi', 'textile engineer', 'sustainable', 'organik tekstil']),
        'home_use_promise': any(key in low for key in ['not offer anything we does not consume at home', 'consume at home', 'evde tüketmediğimiz']),
        'highland_nature': any(key in low for key in ['pine forest', 'çam orman', 'fresh breeze', 'fresh breeze of aegean', 'above of the pollution', 'orman', 'nature and forest', 'yüksekler']),
        'local_families': any(key in low for key in ['local village people', 'yerel aileler', 'köylüler', 'village families']),
        'export_scale': any(key in low for key in ['worldwide', '6 continents', 'export', 'ihracat', 'global', '6 kıta']),
        'certified_quality': any(key in low for key in ['certified', 'sertifik', 'free acidity', 'acidit', '0.8%']),
        'single_varietal': any(key in low for key in ['monocultivar', 'monovarietal', 'tek çeşit']),
    }


def extract_founded_year(result: dict[str, Any]) -> str:
    candidates: list[tuple[int, str]] = []
    for page in result.get('pages', []):
        texts = [page.get('title', ''), page.get('metaDescription', ''), *page.get('headings', []), *page.get('paragraphs', [])]
        for text in texts:
            for match in re.finditer(r'\b(18\d{2}|19\d{2}|20\d{2})\b', text):
                year = int(match.group(1))
                if year > 2024:
                    continue
                start = max(0, match.start() - 35)
                end = min(len(text), match.end() + 35)
                context = ascii_lower(text[start:end])
                if any(key in context for key in ['since', 'kurul', 'begun', 'started', 'go back', 'den beri', 'from', '1960s', '1990', '60 years']):
                    candidates.append((year, context))
    if candidates:
        return str(sorted(candidates, key=lambda item: item[0])[0][0])
    return ''


def translate_signal_blob(text: str) -> str:
    low = ascii_lower(text)
    found = [tr for src, tr in ENGLISH_HINTS.items() if src in low]
    return human_join(unique_keep_order(found))


def build_focus_phrase(result: dict[str, Any]) -> str:
    features = result.get('features') or []
    priority = [item for item in features if item in {'erken hasat', 'soğuk sıkım', 'natürel sızma', 'organik', 'yüksek polifenol', 'taş baskı'}]
    if priority:
        return human_join(priority[:3])
    return CATEGORY_LABELS.get(result.get('category'), 'özenli ve karakterli')


def build_olive_sentence(result: dict[str, Any]) -> str:
    features = result.get('features') or []
    olive_copy = {
        'ayvalık': 'Ayvalık çizgisinin dengeli, meyvemsi ve geniş sofralara kolay uyum veren tarafını öne çıkarır.',
        'memecik': 'Memecik tarafının daha yeşil, diri ve hafifçe boğazı yoklayan karakterini belirgin tutar.',
        'gemlik': 'Gemlik çizgisinin daha yuvarlak açılan ama geriden karakter bırakan yapısını sofraya taşır.',
        'halhalı': 'Halhalı tarafının tok, belirgin ve yöresini hemen hissettiren duruşunu kaybetmez.',
        'nizip yağlık': 'Nizip Yağlık çizgisinin güçlü gövdesini ve bölgesel imzasını şişede net tutar.',
        'sarı ulak': 'Sarı Ulak tarafının akıcı, meyvemsi ve günlük mutfakta rahat hareket eden doğasını korur.',
    }
    for label in olive_copy:
        if label in features:
            return olive_copy[label]
    return 'İyi zeytinyağı anlayışında, şişe açıldığında temiz koku vermesi ve sofrada nerede duracağını hemen belli etmesi beklenir.'


def build_story_detail(entry: dict[str, Any], signals: dict[str, bool], founded_year: str) -> str:
    if signals['two_friends'] and signals['family_roots']:
        year_part = f" {founded_year} ve sonrasına uzanan bu emek" if founded_year else ' Bu emek'
        return (
            f'{entry["name"]} hikayesi, iki yakın dostun aynı hayalde buluştuğu bir başlangıca dayanır. '
            f'Değirmende kurulan o niyet bugün aile eliyle taşınır; toprağın hakkını verirken saflığı koruma isteği{year_part} '
            'şişeye yalnızca ürün değil, devam eden bir miras da katar.'
        )
    if signals['childhood_return'] and signals['organic_lifestyle']:
        return (
            f'{entry["name"]}, çocuklukta hafızaya yerleşen zeytinlik duygusunu bugünün doğal üretim anlayışıyla birleştirir. '
            'Doğaya saygılı yaşama alışkanlığı üretimin merkezinde tutulur; sofraya gelen her damlada eski hatıra bugünün temizliğiyle buluşur.'
        )
    if signals['mythic_place'] or signals['village_texture']:
        return (
            f'{entry["region"]} yalnızca bir adres değildir; rüzgarı, taş evleri, zeytin ağaçlarının gölgesi ve uzun yaz akşamlarıyla yaşayan bir hafızadır. '
            f'Bu yüzden {entry["name"]} şişelerinde yalnızca tat değil, geldiği yerin ruhu da hissedilir.'
        )
    if signals['family_roots']:
        if founded_year:
            return (
                f'{entry["name"]} bu işi aile içinde öğrenilmiş bir özenle sürdürür. {founded_year} ve sonrasına yayılan emek, '
                'hangi zeytinin ne zaman toplanacağını, hangi lezzetin sofrada nasıl açılacağını ve güvenin yıllar içinde nasıl kurulduğunu belirler.'
            )
        return (
            f'{entry["name"]} bu işi aile içinde öğrenilmiş bir dikkatle sürdürür. Kuşaktan kuşağa taşınan bilgi sayesinde yalnızca yağ üretilmez; '
            'sofraya güvenle koyulabilecek bir lezzet aynı titizlikle korunur.'
        )
    if founded_year:
        return (
            f'{entry["name"]} hikayesinde {founded_year} ve sonrasına uzanan bir süreklilik vardır. '
            'Bu süreklilik, her sezonda aynı özeni, aynı temizliği ve aynı damak hafızasını koruma sorumluluğu doğurur.'
        )
    return (
        f'{entry["name"]} bu yağı yalnızca satılacak bir ürün olarak görmez. Şişeyi açan kişinin daha ilk anda toprağı, emeği ve sofraya verilen önemi hissetmesi amaçlanır.'
    )


def build_intro_paragraph(entry: dict[str, Any], result: dict[str, Any], founded_year: str) -> str:
    category = result.get('category')
    openers = {
        'premium-butik': f'{entry["name"]} daha seçici sofralara yakışacak karakterli bir çizgi sunar.',
        'market-endustriyel': f'{entry["name"]} her gün mutfakta yer bulacak güvenilir bir çizgi sunar.',
        'bolgesel-yerel': f'{entry["name"]}, {entry["region"]} tarafının yer duygusunu sofraya taşır.',
        'organik': f'{entry["name"]} temiz içerik ve üretim hassasiyetini lezzetle bir arada tutar.',
    }
    default_opener = f'{entry["name"]} hikayesi olan, karakterini saklamayan bir zeytinyağı sunar.'
    founded_text = f' {founded_year} ve sonrasına yayılan emek bu çizgiye derinlik katar.' if founded_year else ''
    return (
        f'{openers.get(category, default_opener)} '
        f'{entry["region"]} çıkışlı bu yağı {build_focus_phrase(result)} çizgisinde hazırlar; '
        'şişe sofraya ulaştığında yalnızca lezzet değil güven de taşır.'
        f'{founded_text}'
    )


def build_story_paragraph(entry: dict[str, Any], result: dict[str, Any], signals: dict[str, bool], founded_year: str) -> str:
    return build_story_detail(entry, signals, founded_year)


def build_origin_paragraph(entry: dict[str, Any], signals: dict[str, bool]) -> str:
    if signals['mythic_place'] or signals['village_texture']:
        return (
            f'{entry["region"]} dokusu, bu yağın karakterini belirleyen en önemli parçalardan biridir. '
            'Toprağın kokusu, rüzgarın serinliği ve ağaçların mevsim boyunca geçirdiği değişim, damakta bırakılan izi daha derin ve daha hatırlanır kılar.'
        )
    if signals['highland_nature']:
        return (
            'Zeytinliğin havası, çevresindeki doğa ve hasat zamanı kurulan ritim yalnızca romantik bir arka plan değildir; '
            'ürünün temizliğini, canlılığını ve doğrudanlığını belirleyen gerçek bir çalışma zemini oluşturur.'
        )
    return (
        f'{entry["name"]}, {entry["region"]} tarafının karakterini olduğu gibi taşımaya çalışır. '
        'Şişede görülen lezzetin kökü, bu coğrafyanın ikliminde, toprağında ve zeytin ağacının yıl boyunca biriktirdiği dengede yatar.'
    )


def build_nature_detail(signals: dict[str, bool]) -> str:
    parts = []
    if signals['highland_nature']:
        parts.append('bahçelerin temiz hava ve sakin doğa içinde korunması')
    if signals['local_families']:
        parts.append('hasat ve bakım işinin yerel ailelerle omuz omuza yürütülmesi')
    if signals['single_varietal']:
        parts.append('tek çeşide odaklanılarak tadın daha net ve dürüst bırakılması')
    if signals['home_use_promise']:
        parts.append('evde kullanılmayacak hiçbir şişenin sofraya önerilmemesi')
    if signals['certified_quality']:
        parts.append('kalite tarafında teknik disiplinin görünür tutulması')
    if signals['export_scale']:
        parts.append('yerelde doğup daha geniş sofralara açılırken karakterin korunması')
    if not parts:
        return (
            'Öne çıkan taraf yalnızca lezzet iddiası değildir; neyin neden yapıldığının açık tutulması ve şişede görülen dilin ürünün içinde de korunmasıdır.'
        )
    return (
        f'Ayrışan taraf, {human_join(parts[:3])}. '
        'Bu yüzden iyi bir ilk izlenim vermekle yetinmez; şişe açıldığında da aynı sözü sürdürür.'
    )


def build_packaging_sentence(result: dict[str, Any]) -> str:
    packaging = result.get('packaging') or []
    if not packaging:
        return 'İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görmek, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçmek en rahat yoldur.'
    selected = human_join(packaging[:3])
    return (
        f'{selected.capitalize()} seçenekleri bu yüzden önemli. '
        'İlk denemede küçük hacim güven verir; beğendiğiniz çizgiyi bulduğunuzda daha büyük ambalajlar evdeki düzenli kullanım için çok daha doğru olur.'
    )


def build_product_paragraph(entry: dict[str, Any], result: dict[str, Any]) -> str:
    features = set(result.get('features') or [])
    taste_parts = []
    if 'erken hasat' in features or 'yüksek polifenol' in features:
        taste_parts.append('daha canlı, yeşil ve enerjik bir açılış')
    if 'natürel sızma' in features:
        taste_parts.append('çiğ kullanımda kendini hemen belli eden temiz bir akış')
    if 'riviera' in features:
        taste_parts.append('sıcak yemeklerde rahat ilerleyen daha yumuşak bir gövde')
    if 'organik' in features:
        taste_parts.append('içeriğe bakanların aradığı daha güven veren bir sadelik')
    if 'taş baskı' in features:
        taste_parts.append('gelenek duygusunu büyüten klasik bir üretim havası')
    if not taste_parts:
        taste_parts.append('sade ama hafızada kalan dengeli bir karakter')
    return (
        f'{entry["name"]} tarafında lezzet anlatılırken önce damakta bıraktığı iz öne çıkar. '
        f'Bu yağda {human_join(taste_parts[:3])} öne çıkar. '
        f'{build_olive_sentence(result)} '
        'Bu nedenle kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.'
    )


def build_buyer_paragraph(entry: dict[str, Any], result: dict[str, Any]) -> str:
    features = set(result.get('features') or [])
    if 'riviera' in features:
        opener = (
            'Bu yağı ilk kez alacaksanız önce hangi seriyle mutfağa gireceğinize karar vermek gerekir; çünkü riviera ile natürel sızma aynı sofraya farklı söz verir.'
        )
    elif 'erken hasat' in features or 'natürel sızma' in features:
        opener = (
            'Bu yağı ilk kez deneyecekseniz natürel sızma, erken hasat ve varsa yüksek polifenol gibi ifadelerin hangi seride toplandığına bakmak gerekir.'
        )
    else:
        opener = 'Bu yağı ilk kez deneyecekseniz işe hangi sofrada kullanacağınızı düşünerek başlamak gerekir.'
    return (
        f'{opener} {build_packaging_sentence(result)} '
        'Yoğun aromayı kahvaltıda ve çiğ dokunuşlarda arıyorsanız daha karakterli şişelere, gün boyu mutfakta rahat kullanmak istiyorsanız daha yumuşak akış veren serilere yönelmeniz daha doğru olur.'
    )


def build_close_paragraph(entry: dict[str, Any], signals: dict[str, bool]) -> str:
    if signals['export_scale']:
        opener = f'{entry["name"]}, yerelden doğup farklı sofralara ulaşsa da asıl ölçüyü geldiği toprağın karakterini kaybetmemekte bulur.'
    elif signals['childhood_return']:
        opener = f'{entry["name"]}, çocukluk hafızasını bugünün sofrasına taşıyan bir çizgi kurar.'
    elif signals['mythic_place'] or signals['village_texture']:
        opener = f'{entry["name"]} tarafında bu şişenin değeri, geldiği yerin hikayesini sofrada hissedilir kılabilmesinde yatar.'
    else:
        opener = f'{entry["name"]} tarafında bu işin özü, sofraya güvenle koyulabilecek bir şişe sunmaktır.'
    return (
        f'{opener} {entry["name"]} alındığında yalnızca bir yağ değil; emeği belli olan, nereden geldiği hissedilen ve hangi sofrada parlayacağını bilen bir seçim gelir. '
        'Şişe açıldığında beklenti ne olursa olsun amaç aynıdır: kokusuyla, akışıyla ve damakta kalan iziyle bu yağı tekrar hatırlatmak.'
    )


def build_summary(entry: dict[str, Any], result: dict[str, Any], signals: dict[str, bool], founded_year: str) -> str:
    base = f"{entry['name']}, {entry['region']} çıkışlı bir zeytinyağını {build_focus_phrase(result)} çizgisinde sunar."
    if signals['childhood_return']:
        return base + ' Çocukluk hatıraları, doğaya saygı ve temiz lezzet isteği bu çizgiyi büyütür.'
    if signals['mythic_place'] or signals['village_texture']:
        return base + ' Geldiği yerin rüzgarını, toprağını ve karakterini şişede hissettirir.'
    if founded_year:
        return base + f' {founded_year} ve sonrasına yayılan emek, bu tadı her sezon aynı ciddiyetle koruma isteği taşır.'
    return base + ' Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefler.'


def sanitize_output(text: str) -> str:
    text = normalize_space(text)
    replacements = {
        ' marka ': ' isim ',
        ' markası ': ' seçimi ',
        ' markadır ': ' seçimidir ',
        ' markasi ': ' seçimi ',
        ' markanin ': ' bu ismin ',
        ' markanın ': ' bu ismin ',
        ' markaya ': ' bu isme ',
        ' marka.': ' seçim.',
        ' marka,': ' seçim,',
        ' markayı ': ' bu ismi ',
        ' marka ': ' isim ',
        'resmi anlatıda görülen 2022 izi': 'resmi anlatıda görülen geçmiş izi',
        'resmi anlatıda görülen 2023 izi': 'resmi anlatıda görülen geçmiş izi',
        'resmi anlatıda görülen 2024 izi': 'resmi anlatıda görülen geçmiş izi',
    }
    wrapped = f' {text} '
    for source, target in replacements.items():
        wrapped = wrapped.replace(source, target)
    text = normalize_space(wrapped)
    text = text.replace('  ', ' ')
    return text


def compose_editorial(entry: dict[str, Any], result: dict[str, Any]) -> dict[str, Any]:
    signals = derive_signals(entry, result)
    founded_year = extract_founded_year(result)
    paragraphs = [
        build_intro_paragraph(entry, result, founded_year),
        build_story_paragraph(entry, result, signals, founded_year),
        build_origin_paragraph(entry, signals),
        build_product_paragraph(entry, result),
        build_nature_detail(signals),
        build_buyer_paragraph(entry, result),
        build_close_paragraph(entry, signals),
    ]

    cleaned = [sanitize_output(paragraph) for paragraph in paragraphs if normalize_space(paragraph)]
    summary = sanitize_output(build_summary(entry, result, signals, founded_year))

    support_variants = [
        'İyi zeytinyağı anlayışında yalnızca rengi güzel görünen bir yağ aranmaz; kokusu açıldığında canlı olmalı, damakta temiz akmalı ve sofradaki diğer tatların üzerine çıkmadan kendini belli etmelidir.',
        'Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz iyi bir şişede en çok dikkat edilen ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.',
        'İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Güven duygusunu kalıcı kılan şey tam olarak bu tutarlılıktır.',
        'Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Aranan etki tam olarak budur.',
    ]
    idx = 0
    while count_words(' '.join(cleaned)) < 500:
        cleaned.append(sanitize_output(support_variants[idx % len(support_variants)]))
        idx += 1

    forbidden_phrases = [
        'site dili',
        'resmi anlatı',
        'sayfasını okurken',
        'sayfasini okurken',
        'raf önünde',
        'alıcı için',
        'alici icin',
        'değerlendirme',
        'degerlendirme',
        'inceleme',
        'review',
        'kullanıcı',
        'kullanici',
    ]

    for text in [summary, *cleaned]:
        if ' marka ' in f" {ascii_lower(text)} ":
            raise ValueError(f"Forbidden word in generated copy for {entry['name']}")
        low = ascii_lower(text)
        for phrase in forbidden_phrases:
            if phrase in low:
                raise ValueError(f"Forbidden phrase in generated copy for {entry['name']}: {phrase}")

    return {
        'summary': summary,
        'paragraphs': cleaned,
        'sources': [page['url'] for page in result.get('pages', []) if page.get('url')],
        'founded': founded_year,
        'features': result.get('features', []),
    }


def load_entries(limit: int | None) -> list[dict[str, Any]]:
    entries = json.loads(WEBSITES_PATH.read_text())
    if limit:
        entries = entries[:limit]
    return entries


def build_from_raw(entries: list[dict[str, Any]]) -> tuple[list[dict[str, Any]], dict[str, Any]]:
    entry_map = {entry['id']: entry for entry in entries}
    raw_results = json.loads(RAW_OUTPUT_PATH.read_text())
    editorial_data: dict[str, Any] = {}
    normalized_results: list[dict[str, Any]] = []

    for result in raw_results:
        entry = entry_map.get(result.get('id'))
        if not entry:
            continue
        normalized_results.append(result)
        try:
            editorial_data[str(entry['id'])] = compose_editorial(entry, result)
            print(f"ok  {entry['name']}")
        except Exception as exc:
            print(f"err {entry['name']}: {exc}")

    normalized_results.sort(key=lambda item: item.get('id', 0))
    return normalized_results, editorial_data


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--limit', type=int, default=0)
    parser.add_argument('--from-raw', action='store_true')
    args = parser.parse_args()

    entries = load_entries(args.limit or None)
    raw_results: list[dict[str, Any]]
    editorial_data: dict[str, Any]

    if args.from_raw and RAW_OUTPUT_PATH.exists():
        raw_results, editorial_data = build_from_raw(entries)
    else:
        raw_results = []
        editorial_data = {}
        with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
            futures = {executor.submit(analyze_site, entry): entry for entry in entries}
            for future in as_completed(futures):
                entry = futures[future]
                try:
                    result = future.result()
                    raw_results.append(result)
                    editorial_data[str(entry['id'])] = compose_editorial(entry, result)
                    print(f"ok  {entry['name']}")
                except Exception as exc:
                    print(f"err {entry['name']}: {exc}")
                    raw_results.append({
                        'id': entry['id'],
                        'name': entry['name'],
                        'url': entry['url'],
                        'error': str(exc),
                    })

    raw_results.sort(key=lambda item: item.get('id', 0))
    ordered_editorial = {key: editorial_data[key] for key in sorted(editorial_data, key=lambda value: int(value))}

    RAW_OUTPUT_PATH.write_text(json.dumps(raw_results, ensure_ascii=False, indent=2) + '\n')
    JS_OUTPUT_PATH.write_text(
        'const brandEditorialData = ' + json.dumps(ordered_editorial, ensure_ascii=False, indent=2) + ';\n',
        encoding='utf-8',
    )
    print(f'Wrote raw research to {RAW_OUTPUT_PATH.relative_to(ROOT)}')
    print(f'Wrote editorial data to {JS_OUTPUT_PATH.relative_to(ROOT)}')


if __name__ == '__main__':
    requests.packages.urllib3.disable_warnings()  # type: ignore[attr-defined]
    main()

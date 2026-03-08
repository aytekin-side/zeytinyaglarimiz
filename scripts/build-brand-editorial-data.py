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
        return f"{human_join(priority[:3])} çizgisi"
    return f"{CATEGORY_LABELS.get(result.get('category'), 'özenli seçime açık')} bir ürün dili"


def build_olive_sentence(result: dict[str, Any]) -> str:
    features = result.get('features') or []
    for label, style in OLIVE_STYLE_MAP.items():
        if label in features:
            return f"Site dili ve bölgesel bağ birlikte okunduğunda {label} tarafında beklenen {style} daha kolay hissediliyor."
    return 'Site dili daha çok şişedeki karakteri, kullanım alanını ve sofraya bırakmak istediği hissi anlatma üzerine kuruluyor.'


def build_story_detail(entry: dict[str, Any], result: dict[str, Any], signals: dict[str, bool], founded_year: str) -> str:
    if signals['two_friends'] and signals['family_roots']:
        year_part = f" {founded_year} ve sonrasına uzanan" if founded_year else ' Uzun yıllara yayılan'
        return f"Hikaye, iki yakın dostun değirmende başlayan hayalini ve o çizginin bugün aile tarafından taşınmasını öne çıkarıyor.{year_part} süreklilik hissi, şişeyi yalnızca ürün olarak değil, devam eden bir emeğin parçası gibi gösteriyor."
    if signals['childhood_return'] and signals['organic_lifestyle']:
        return 'Kurucu anlatısında çocukluk yıllarındaki zeytinlik hafızası, organik tekstil ve sürdürülebilir üretim tecrübesiyle birleşiyor. Bu geri dönüş duygusu, sofraya sadece lezzet değil niyet de taşımak isteyen bir çizgi kuruyor.'
    if signals['mythic_place'] or signals['village_texture']:
        return f"Anlatının merkezine doğrudan {entry['region']} çevresinin dokusu yerleştiriliyor; köy hissi, manzara, rüzgar ve eski zeytinlikler ürüne güçlü bir yer duygusu veriyor. Bu yüzden şişeye bakarken sadece teknik özellik değil, geldiği coğrafyanın atmosferi de hissediliyor."
    if signals['family_roots']:
        if founded_year:
            return f"Hikaye tarafında aile kökleri ve kuşaklar arası devamlılık öne çıkıyor. {founded_year} bilgisi de bu birikimin kısa süreli bir heves değil, zamana yayılmış bir emek olduğunu düşündürüyor."
        return 'Hikaye tarafında aile kökleri, kuşaklar arası devamlılık ve bir işi özenle sürdürme isteği öne çıkıyor. Bu duygu, ürünü daha sıcak ve daha hatırlanır hale getiriyor.'
    if founded_year:
        return f"Resmi anlatıda görülen {founded_year} izi, bugün görülen şişe dilinin tesadüfen kurulmadığını düşündürüyor. Geçmişe yaslanan bu ton, seçimi daha güven veren bir zemine çekiyor."
    return 'Hikaye kısmı tek başına nostalji üretmek yerine, bugün sofraya gelecek şişenin neden böyle konumlandığını anlatan sakin ama tutarlı bir zemin kuruyor.'


def build_nature_detail(signals: dict[str, bool]) -> str:
    parts = []
    if signals['highland_nature']:
        parts.append('bahçenin temiz hava, orman dokusu ve daha sakin bir çevre içinde anlatılması')
    if signals['local_families']:
        parts.append('hasat ve bakım tarafında yerel ailelerle ilerleyen daha yakın bir düzen')
    if signals['single_varietal']:
        parts.append('tek çeşit zeytine odaklanarak tadı daha net okumaya çalışan yaklaşım')
    if signals['home_use_promise']:
        parts.append('evde tüketilmeyecek hiçbir şeyi öne çıkarmama anlayışı')
    if signals['certified_quality']:
        parts.append('teknik standartları ve kalite eşiklerini görünür kılan net bir dil')
    if signals['export_scale']:
        parts.append('yerel kökleri korurken dış pazara da güven veren daha geniş bir kalite iddiası')
    if not parts:
        return 'Resmi anlatıda öne çıkan farklılaştırıcı taraf, ölçülü ama kendine güvenen bir ürün dili ve bunu destekleyen sade görsel düzen oluyor.'
    return f"Burada öne çıkan farklılaştırıcı taraf, {human_join(parts[:3])}. Bu ayrıntılar bir araya geldiğinde ürünün neden başka seçeneklerden ayrıldığı daha açık okunuyor."


def build_packaging_sentence(result: dict[str, Any]) -> str:
    packaging = result.get('packaging') or []
    if not packaging:
        return 'Paket boyları çok öne çıkmasa bile seri isimleri ve kullanım önerileri, hangi şişeyle başlanacağını anlamaya yardım ediyor.'
    selected = human_join(packaging[:3])
    return f"{selected.capitalize()} gibi ambalaj seçenekleri de seçim sırasında önemli. Küçük hacimler ilk deneme için, büyük boylar ise evde düzenli kullanım için daha mantıklı durabiliyor."


def build_product_paragraph(entry: dict[str, Any], result: dict[str, Any]) -> str:
    features = set(result.get('features') or [])
    taste_parts = []
    if 'erken hasat' in features or 'yüksek polifenol' in features:
        taste_parts.append('daha canlı, yeşil ve boğazda kısa bir hareket bırakan bir karakter')
    if 'natürel sızma' in features:
        taste_parts.append('çiğ kullanımda kendini daha iyi gösteren temiz bir yapı')
    if 'riviera' in features:
        taste_parts.append('sıcak yemeklerde daha rahat ilerleyen yumuşak bir akış')
    if 'organik' in features:
        taste_parts.append('içerik tarafında daha titiz davranmak isteyenler için güven veren bir çerçeve')
    if 'taş baskı' in features:
        taste_parts.append('gelenek duygusunu güçlendiren daha klasik bir üretim çağrışımı')
    if not taste_parts:
        taste_parts.append('sofrada ne beklenmesi gerektiğini önceden anlatan dengeli bir profil')
    return (
        f"{entry['name']} tarafında alıcı için asıl önemli soru, şişenin sofrada nasıl davranacağı. "
        f"Resmi ürün dili {human_join(taste_parts[:3])} beklentisini güçlendiriyor. "
        f"{build_olive_sentence(result)} "
        "Bu yüzden kahvaltıda ekmeğin üstüne gezdirilecek, salatada daha net hissedilecek ya da tencerede her gün kullanılacak seçenek aynı olmayabilir; seri ayrımını okuyarak ilerlemek daha doğru sonuç verir."
    )


def build_story_paragraph(entry: dict[str, Any], result: dict[str, Any], signals: dict[str, bool], founded_year: str) -> str:
    candidates = collect_candidate_sentences(result)
    translated_hint = ''
    for candidate in candidates:
        blob = translate_signal_blob(candidate)
        if blob:
            translated_hint = blob
            break
    hint_sentence = ''
    if translated_hint:
        hint_sentence = f" Hakkımızda bölümünden taşan ton daha çok {translated_hint} etrafında kuruluyor; bu da ürünü kuru bir teknik listeden çıkarıp daha yaşayan bir hikayeye bağlıyor."
    return build_story_detail(entry, result, signals, founded_year) + hint_sentence


def build_intro_paragraph(entry: dict[str, Any], result: dict[str, Any], founded_year: str) -> str:
    category = result.get('category')
    openers = {
        'premium-butik': f"{entry['name']}, ilk bakışta daha özenli seçim arayanların ilgisini çekecek bir çizgide duruyor.",
        'market-endustriyel': f"{entry['name']}, günlük mutfakta da rahat karşılık bulabilecek daha erişilebilir bir çizgi sunuyor.",
        'bolgesel-yerel': f"{entry['name']}, {entry['region']} tarafının yerel karakterini daha doğrudan taşıyan isimlerden biri gibi görünüyor.",
        'organik': f"{entry['name']}, temiz içerik ve üretim hassasiyeti arayanların daha yakından bakabileceği bir çizgi kuruyor.",
    }
    default_opener = f"{entry['name']}, alırken sadece etikete değil hikayesine de bakmak isteyeceğiniz bir çizgi sunuyor."
    founded_text = f" Resmi anlatıda görülen {founded_year} izi de bu çizgiye zaman duygusu ekliyor." if founded_year else ''
    return (
        f"{openers.get(category, default_opener)} "
        f"{entry['region']} çıkışı ve {build_focus_phrase(result)} birlikte düşünüldüğünde, burada amaç yalnızca yağ satmak değil; sofrada nasıl bir his bırakacağını daha en baştan anlatmak." 
        f"{founded_text} Şişe, etiket ve ürün sayfasındaki anlatım yan yana geldiğinde seçim yapmak daha kolay hale geliyor."
    )


def build_buyer_paragraph(result: dict[str, Any]) -> str:
    features = set(result.get('features') or [])
    if 'riviera' in features:
        opener = 'Almayı düşünen biri için önce riviera ile natürel sızma arasındaki ayrımı net görmek gerekir; çünkü mutfaktaki davranış burada ciddi biçimde değişir.'
    elif 'erken hasat' in features or 'natürel sızma' in features:
        opener = 'Almayı düşünen biri için önce natürel sızma, erken hasat ve varsa yüksek polifenol gibi ifadelerin hangi seride toplandığına bakmak iyi sonuç verir.'
    else:
        opener = 'Almayı düşünen biri için en doğru başlangıç, önce seri isimlerine ve şişe diline bakmak olmalı.'
    return (
        f"{opener} {build_packaging_sentence(result)} "
        "İlk denemede daha küçük hacimle ilerlemek, damakta bıraktığı izi anlamayı kolaylaştırır; sevilen bir profile rastlandığında daha büyük pakete geçmek çok daha rahat hissettirir. "
        "Karar verirken önce kullanım anını, sonra damak beklentisini, en son da paket boyunu yan yana koymak gerekir."
    )


def build_close_paragraph(entry: dict[str, Any], signals: dict[str, bool]) -> str:
    close = 'Sonuç olarak burada öne çıkan şey, köken duygusu ile günlük kullanım rahatlığını aynı şişede buluşturma çabası.'
    if signals['export_scale']:
        close = 'Sonuç olarak burada öne çıkan şey, yerel köklerle uluslararası güven duygusunu aynı çizgide birleştirme isteği.'
    elif signals['mythic_place'] or signals['village_texture']:
        close = 'Sonuç olarak burada öne çıkan şey, coğrafyanın ve yer duygusunun şişenin karakterine doğrudan eşlik etmesi.'
    elif signals['childhood_return']:
        close = 'Sonuç olarak burada öne çıkan şey, kişisel hatıralardan beslenen daha samimi ve daha düşünülmüş bir üretim dili.'
    return (
        f"{close} {entry['name']} sayfasını okurken, raf önünde karar vermeyi kolaylaştıran asıl şey de bu oluyor: nereden geldiği, hangi sofrada daha iyi karşılık vereceği ve hangi seriyle başlanmasının daha mantıklı olduğu daha net görünüyor. "
        "Bu yüzden seçim, yalnızca tanıdık bir isme yönelmekten çıkıp gerçekten keyifle okunmuş ve düşünülmüş bir tercih haline geliyor."
    )


def build_summary(entry: dict[str, Any], result: dict[str, Any], signals: dict[str, bool], founded_year: str) -> str:
    base = f"{entry['name']}, {entry['region']} çıkışlı ve {build_focus_phrase(result)} ile dikkat çeken bir zeytinyağı seçimi."
    if signals['childhood_return']:
        return base + ' Resmi anlatıda kişisel hikaye ile doğal üretim hissi yan yana ilerliyor.'
    if signals['mythic_place'] or signals['village_texture']:
        return base + ' Köken duygusu ve yer hissi, şişenin karakterini anlatan en güçlü taraflardan biri.'
    if founded_year:
        return base + f' {founded_year} ve sonrasına uzanan anlatı, bu çizgiye zaman duygusu ekliyor.'
    return base + ' Ürün dili, sofrada nasıl bir his bırakacağını daha ilk bakışta anlatmaya çalışıyor.'


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
        build_product_paragraph(entry, result),
        build_nature_detail(signals),
        build_buyer_paragraph(result),
        build_close_paragraph(entry, signals),
    ]

    cleaned = [sanitize_output(paragraph) for paragraph in paragraphs if normalize_space(paragraph)]
    summary = sanitize_output(build_summary(entry, result, signals, founded_year))

    support_variants = [
        'Etiketteki kelimeler ile resmi sitedeki anlatım aynı çizgide ilerliyorsa, alışveriş anında sürpriz yaşama ihtimali azalır. Bu da özellikle ilk kez denenecek bir şişede önemli bir rahatlık sağlar.',
        'Keyifli bulunan taraf genelde burada başlar: sadece yağın sınıfı değil, onu çevreleyen hikaye, yer duygusu ve kullanım önerisi de seçim kararını daha anlamlı hale getirir.',
        'Şişe görselleri, ambalaj boyları ve ürün sayfasındaki ton birlikte okunduğunda, hangi seçeneğin mutfakta daha sık kullanılacağı ve hangisinin daha çok sofrada parlayacağı daha net anlaşılır.',
    ]
    idx = 0
    while count_words(' '.join(cleaned)) < 500:
        cleaned.append(sanitize_output(support_variants[idx % len(support_variants)]))
        idx += 1

    for text in [summary, *cleaned]:
        if ' marka ' in f" {ascii_lower(text)} ":
            raise ValueError(f"Forbidden word in generated copy for {entry['name']}")

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


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--limit', type=int, default=0)
    args = parser.parse_args()

    entries = load_entries(args.limit or None)
    raw_results: list[dict[str, Any]] = []
    editorial_data: dict[str, Any] = {}

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

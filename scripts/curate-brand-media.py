#!/usr/bin/env python3
import json
import re
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
MEDIA_PATH = ROOT / "brand-media.js"
IMAGE_ROOT = ROOT / "images" / "markalar"
REPORT_PATH = ROOT / "data" / "bottle-curation-report.json"


MANUAL_PRIMARY_BY_SLUG = {
    "adatepe": "adatepe-bottle-03-1740045949-adatepezeytinyagi1lt-1.png",
    "anolive": "anolive-bottle-01-bottle-index.jpg",
    "arslan-zeytinyagi": "arslan-zeytinyagi-bottle-02-glass-bottle-1l.png",
    "artem-oliva": "artem-oliva-bottle-01-extra-virgin-oli.png",
    "ayolis": "ayolis-bottle-01-premium-gurme-ayvalik-odullu-yu.jpg",
    "beyaz-altin": "beyaz-altin-bottle-01-beige-and-stone-natural-ston.avif",
    "dalgicoglu": "dalgicoglu-bottle-01-com-469160-qt63oivl.png",
    "eceden-sofraniza": "eceden-sofraniza-bottle-03-18-litre.jpg",
    "edremit-korfezi": "edremit-korfezi-bottle-01-ida-natura-edremit-s.jpg",
    "ekooleo": "ekooleo-bottle-02-naturel-sizma-zeytinyagi-1lt.jpg",
    "gemtar": "gemtar-bottle-02-1-5-l-naturel-min.webp",
    "granpa": "granpa-bottle-02-premium-trilye-500ml-erken-hasa.webp",
    "guven-asa": "guven-asa-bottle-01-erken-hasat-soguk-sikim-zeytinya.webp",
    "hatay-tadinda": "hatay-tadinda-bottle-01-hatay-yoresel-sizma-zeyt.png",
    "ilyada": "ilyada-bottle-01-zeytinyagi.png",
    "kirlangic": "kirlangic-bottle-01-sizma-naturel-5-lt-500.jpg",
    "kirte": "kirte-bottle-03-delicesise-331x450.png",
    "komili": "komili-bottle-02-sizma-zeytinyagi-ege-1-lt-12406.png",
    "kristal": "kristal-bottle-03-naturel-sizma-zeytinyagi-1-l-cam-sis.webp",
    "kucukbahce": "kucukbahce-bottle-02-500-1000-sise.png",
    "laleli": "laleli-bottle-02-0000472-klasik-naturel-sizma-zeytinyag.jpg",
    "luna": "luna-bottle-03-4205154-bf9a85-1650x1650.jpg",
    "marmarabirlik": "marmarabirlik-bottle-02-naturel-si.png",
    "masmana": "masmana-bottle-01-whatsapp-image-2025-11-17-at-1-28-59.webp",
    "milas-zeytinyaglari": "milas-zeytinyaglari-bottle-02-milas-anatol.webp",
    "milasso": "milasso-bottle-01-ultra-premium-zeytinyagi-500.jpg",
    "monolive": "monolive-bottle-01-zeytinyagi-cesitleri.jpg",
    "nar-gourmet": "nar-gourmet-bottle-01-0013121-tarimbirlik-2-lt-zey.jpg",
    "novavera": "novavera-bottle-01-ayvalik-erken-hasat-naturel-sizma.webp",
    "oleamea": "oleamea-bottle-03-gercek-zeytinyagi-1000x1000.webp",
    "olive-mama": "olive-mama-bottle-03-kadin-figurlu-el-yapimi-serami.png",
    "olive-riviera": "olive-riviera-bottle-03-oliverivierapellegrino-1.webp",
    "oliveoilsland": "oliveoilsland-bottle-01-pomaceoliveoil-tin-packa.png",
    "olistica": "olistica-bottle-02-naturel-sizma-zeytinyagi-1lt.jpg",
    "oliterra": "oliterra-bottle-02-naturel-sizma-zeytinyagi-1lt.jpg",
    "olivamore": "olivamore-bottle-02-ayvalik-erken-hasat-naturel-sizm.jpg",
    "olivurla": "olivurla-bottle-01-ayvalik-5000x-min.jpg",
    "oro-di-milas": "oro-di-milas-bottle-02-pic-site-11.avif",
    "ove-foods": "ove-foods-bottle-01-products-1758727566735-rosemaryi.png",
    "papez": "papez-bottle-02-naturel-sizma-zeytinyagi-1lt.jpg",
    "pazarbasilar": "pazarbasilar-bottle-01-mit-olive-page-2-500x500w.jpg",
    "sazak-zeytincilik": "sazak-zeytincilik-bottle-02-sizma111-min.webp",
    "seferis": "seferis-bottle-01-zeytinyaglari.jpg",
    "selatin": "selatin-bottle-02-naturel-sizma-zeytinyagi-1lt.jpg",
    "seosfarm": "seosfarm-bottle-02-sizma-toplu.jpg",
    "solive": "solive-bottle-01-ilkikisaat-2littr-min.jpg",
    "taris": "taris-bottle-03-maraska-sizma-zeytinyagi-500-ml-13.png",
    "trilye": "trilye-bottle-02-erken-hasat-naturel-sizma-zeyti.webp",
    "uygur-zeytinyagi": "uygur-zeytinyagi-bottle-01-5lt.png",
    "velvet": "velvet-bottle-01-734c68-0fba80ce35dc40f98003ed60b443560.png",
    "verde": "verde-bottle-01-500-ml-sise-sizma-1.png",
    "vita": "vita-bottle-03-naturel-sizma-zeytinyagi-1lt.jpg",
    "vivax-olea": "vivax-olea-bottle-02-zeytinyagi-soguksikim-1.jpg",
    "yalim-zeytin-yaglari": "yalim-zeytin-yaglari-bottle-01-500.jpg",
    "yelkenli": "yelkenli-bottle-03-500cl-kulplu1-1-300x300.webp",
    "yudum": "yudum-bottle-02-naturel-sizma-5-lt-teneke-z.jpg",
    "zenolive": "zenolive-bottle-01-750ml-bottle.webp",
    "zetay": "zetay-bottle-01-69737543d1756.png",
    "zetiya": "zetiya-bottle-01-artboard-4.webp",
    "zeytin-dali": "zeytin-dali-bottle-01-cikartmalar-zeytinyagi-ve-ze.png",
    "zeytincir": "zeytincir-bottle-02-zeytinyagi-4.jpg",
    "zeytursan": "zeytursan-bottle-03-zeytinyagi-sisesi-yesil-500-ml-1.webp",
}


POSITIVE_KEYWORDS = {
    "zeytinyagi": 10,
    "zeytin-yagi": 10,
    "zeytinyag": 8,
    "sizma": 5,
    "naturel": 4,
    "natural": 3,
    "erken": 4,
    "hasat": 3,
    "riviera": 2,
    "cam": 2,
    "glass": 2,
    "bottle": 4,
    "premium": 2,
    "organik": 2,
    "organic": 2,
    "soguk": 3,
    "extra-virgin": 3,
    "oliveoil": 4,
    "olive-oil": 4,
}


NEGATIVE_KEYWORDS = {
    "margarin": 60,
    "tereyagi": 60,
    "katalog": 35,
    "bim": 35,
    "truf": 28,
    "dekoratif": 24,
    "stone": 18,
    "beautiful": 30,
    "alley": 30,
    "branch": 26,
    "tree": 18,
    "zeytinlik": 24,
    "operasyo": 60,
    "isitilir": 25,
    "lekesi": 25,
    "cikarilir": 25,
    "fiyatlari": 25,
    "nasil": 10,
    "toplu": 14,
    "slider": 25,
    "slayt": 25,
    "urunlerslider": 25,
    "kidsolive": 15,
    "rosemary": 18,
    "chili": 18,
    "infu": 18,
}


def load_brand_media():
    text = MEDIA_PATH.read_text()
    prefix = "const brandMedia = "
    start = text.index(prefix) + len(prefix)
    end = text.rfind(";")
    payload = text[start:end].strip()
    return json.loads(payload)


def image_size(path: Path):
    with Image.open(path) as image:
        return image.size


def volume_bonus(name: str) -> int:
    normalized = name.lower()
    if any(token in normalized for token in ["500-ml", "500ml", "750ml", "750-ml", "1lt", "1-lt", "1000ml", "1000-ml"]):
        return 7
    if any(token in normalized for token in ["250ml", "250-ml", "250"]):
        return 3
    if any(token in normalized for token in ["2lt", "2-lt", "2000"]):
        return 2
    return 0


def volume_penalty(name: str) -> int:
    normalized = name.lower()
    if any(token in normalized for token in ["18lt", "18-lt", "18-litre", "18-litre"]):
        return 10
    if any(token in normalized for token in ["10lt", "10-lt"]):
        return 4
    if any(token in normalized for token in ["5lt", "5-lt", "5000"]):
        return 2
    return 0


def score_image(path: Path):
    name = path.name.lower()
    width, height = image_size(path)
    ratio = width / height if height else 0
    area = width * height
    score = 0

    for keyword, value in POSITIVE_KEYWORDS.items():
        if keyword in name:
            score += value

    for keyword, value in NEGATIVE_KEYWORDS.items():
        if keyword in name:
            score -= value

    score += volume_bonus(name)
    score -= volume_penalty(name)

    if 0.3 <= ratio <= 0.85:
        score += 16
    elif 0.85 < ratio <= 1.05:
        score += 12
    elif 1.05 < ratio <= 1.25:
        score += 6
    elif 1.25 < ratio <= 1.45:
        score += 1
    elif ratio > 1.45:
        score -= 12
    elif 0 < ratio < 0.3:
        score -= 3

    if area > 1_500_000:
        score += 8
    elif area > 500_000:
        score += 5
    elif area > 120_000:
        score += 2
    else:
        score -= 6

    if width < 220 or height < 220:
        score -= 4

    if any(token in name for token in ["family", "toplu", "set", "hediyelik", "kutu", "kutusunda"]):
        score -= 8

    return {
        "score": score,
        "width": width,
        "height": height,
        "ratio": round(ratio, 3),
        "name": path.name,
    }


def sort_bottles(slug: str, bottles):
    candidates = []
    preferred_name = MANUAL_PRIMARY_BY_SLUG.get(slug, "")

    for bottle in bottles:
        path = ROOT / bottle
        if not path.exists():
            candidates.append(
                {
                    "path": bottle,
                    "name": Path(bottle).name,
                    "score": -999,
                    "width": 0,
                    "height": 0,
                    "ratio": 0,
                    "preferred": False,
                }
            )
            continue

        metrics = score_image(path)
        candidates.append(
            {
                "path": bottle,
                "name": metrics["name"],
                "score": metrics["score"],
                "width": metrics["width"],
                "height": metrics["height"],
                "ratio": metrics["ratio"],
                "preferred": metrics["name"] == preferred_name,
            }
        )

    candidates.sort(
        key=lambda item: (
            item["preferred"],
            item["score"],
            item["height"],
            item["width"],
            item["name"],
        ),
        reverse=True,
    )
    return candidates


def main():
    media = load_brand_media()
    report = {}

    for _, entry in media.items():
        slug = entry.get("slug", "")
        bottles = entry.get("bottles", [])
        if not bottles:
            continue

        ranked = sort_bottles(slug, bottles)
        entry["bottles"] = [item["path"] for item in ranked]
        report[slug] = {
            "selected": ranked[0]["path"],
            "selectedScore": ranked[0]["score"],
            "manualOverride": ranked[0]["preferred"],
            "options": [
                {
                    "path": item["path"],
                    "score": item["score"],
                    "size": [item["width"], item["height"]],
                    "ratio": item["ratio"],
                    "preferred": item["preferred"],
                }
                for item in ranked
            ],
        }

    MEDIA_PATH.write_text(
        "// Auto-generated local media map\nconst brandMedia = "
        + json.dumps(media, ensure_ascii=False, indent=4)
        + ";\n"
    )
    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(f"Curated {len(report)} brand bottle selections.")


if __name__ == "__main__":
    main()

import hashlib
import json
import subprocess
from pathlib import Path

from PIL import Image, ImageOps, UnidentifiedImageError

ROOT = Path.cwd()
BRAND_MEDIA_PATH = ROOT / 'brand-media.js'
BRAND_SCENE_MEDIA_PATH = ROOT / 'brand-scene-media.js'

GENERIC_BOTTLE_BASES = [
    ROOT / 'images' / 'rehber' / 'olive-oil-bottle.jpg',
    ROOT / 'images' / 'rehber' / 'olive-oil-bottles.jpg'
]

NATURE_BASES = {
    'ege': [
        ROOT / 'images' / 'bolgeler' / 'ege' / 'ege-pelitkoy-zeytinlik.jpg',
        ROOT / 'images' / 'rehber' / 'olive-grove.jpg',
        ROOT / 'images' / 'rehber' / 'olive-harvest.jpg'
    ],
    'marmara': [
        ROOT / 'images' / 'bolgeler' / 'marmara' / 'marmara-gemlik-zeytinlik.jpg',
        ROOT / 'images' / 'rehber' / 'olive-grove.jpg',
        ROOT / 'images' / 'rehber' / 'olive-harvest.jpg'
    ],
    'akdeniz': [
        ROOT / 'images' / 'rehber' / 'olive-grove.jpg',
        ROOT / 'images' / 'rehber' / 'olive-harvest.jpg',
        ROOT / 'images' / 'bolgeler' / 'turkiye' / 'turkiye-pelitkoy-zeytinlik.jpg'
    ],
    'guneydogu': [
        ROOT / 'images' / 'bolgeler' / 'guneydogu' / 'guneydogu-nizip-zeytini.jpg',
        ROOT / 'images' / 'rehber' / 'olive-harvest.jpg',
        ROOT / 'images' / 'rehber' / 'olive-grove.jpg'
    ],
    'trakya': [
        ROOT / 'images' / 'rehber' / 'olive-grove.jpg',
        ROOT / 'images' / 'rehber' / 'olive-harvest.jpg',
        ROOT / 'images' / 'bolgeler' / 'marmara' / 'marmara-gemlik-zeytinlik.jpg'
    ],
    'turkiye': [
        ROOT / 'images' / 'bolgeler' / 'turkiye' / 'turkiye-pelitkoy-zeytinlik.jpg',
        ROOT / 'images' / 'rehber' / 'olive-grove.jpg',
        ROOT / 'images' / 'rehber' / 'olive-harvest.jpg'
    ]
}

NATURE_SOURCE_META = {
    'images/bolgeler/ege/ege-pelitkoy-zeytinlik.jpg': {
        'sourceUrl': 'https://commons.wikimedia.org/wiki/File:Pelitk%C3%B6yde_bir_zeytinlik,_T%C3%BCrkiye.jpg',
        'license': 'CC BY 3.0',
        'artist': 'Ollios'
    },
    'images/bolgeler/marmara/marmara-gemlik-zeytinlik.jpg': {
        'sourceUrl': 'https://commons.wikimedia.org/wiki/File:Gemlik_zeytini.jpg',
        'license': 'CC BY-SA 4.0',
        'artist': 'Kızıldeniz'
    },
    'images/bolgeler/guneydogu/guneydogu-nizip-zeytini.jpg': {
        'sourceUrl': 'https://commons.wikimedia.org/wiki/File:Nizip_zeytini.IMG_0876.jpg',
        'license': 'CC BY-SA 4.0',
        'artist': 'YG1'
    },
    'images/bolgeler/turkiye/turkiye-pelitkoy-zeytinlik.jpg': {
        'sourceUrl': 'https://commons.wikimedia.org/wiki/File:Pelitk%C3%B6yde_bir_zeytinlik,_T%C3%BCrkiye.jpg',
        'license': 'CC BY 3.0',
        'artist': 'Ollios'
    }
}


def load_context():
    node_script = r"""
const fs = require('fs');
const vm = require('vm');
const sandbox = { console, URL };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('brand-media.js', 'utf8') + ';globalThis.__brandMedia = brandMedia;', sandbox);
vm.runInContext(fs.readFileSync('brands.js', 'utf8') + ';globalThis.__brands = brands;', sandbox);
console.log(JSON.stringify({
  brands: sandbox.__brands.map((brand) => ({
    id: brand.id,
    name: brand.name,
    slug: brand.slug,
    region: brand.region,
    regionCluster: brand.regionCluster || 'turkiye'
  })),
  media: sandbox.__brandMedia || {}
}));
"""
    raw = subprocess.check_output(['node', '-e', node_script], cwd=ROOT, text=True)
    return json.loads(raw)


def is_valid_image(path: Path) -> bool:
    try:
        with Image.open(path) as img:
            img.verify()
        return True
    except (UnidentifiedImageError, OSError):
        return False


def to_public_path(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def make_seed(*parts: str) -> int:
    text = '::'.join(str(part) for part in parts)
    return int(hashlib.sha256(text.encode('utf-8')).hexdigest()[:12], 16)


def choose_crop_box(width: int, height: int, target_ratio: float, seed: int, focus: str):
    if width / height >= target_ratio:
        crop_height = height
        crop_width = int(height * target_ratio)
    else:
        crop_width = width
        crop_height = int(width / target_ratio)

    max_left = max(0, width - crop_width)
    max_top = max(0, height - crop_height)

    if focus == 'center':
        left = max_left // 2
        top = max_top // 2
    else:
        left_factor = ((seed * 37) % 1000) / 1000
        top_factor = ((seed * 53) % 1000) / 1000
        left = int(max_left * left_factor)
        top = int(max_top * top_factor)

    return left, top, crop_width, crop_height


def render_variant(base_path: Path, output_path: Path, seed: int, kind: str):
    with Image.open(base_path) as img:
        img = ImageOps.exif_transpose(img).convert('RGB')
        width, height = img.size
        if kind == 'product':
            ratio = 3 / 4
            focus = 'center'
            out_size = (960, 1280)
        elif kind == 'product-detail':
            ratio = 3 / 4
            focus = 'random'
            out_size = (960, 1280)
        else:
            ratio = 4 / 3
            focus = 'random'
            out_size = (1280, 960)

        left, top, crop_width, crop_height = choose_crop_box(width, height, ratio, seed, focus)
        cropped = img.crop((left, top, left + crop_width, top + crop_height))
        if kind == 'product-detail':
            detail_left, detail_top, detail_width, detail_height = choose_crop_box(cropped.width, cropped.height, ratio, seed * 3 + 7, 'random')
            cropped = cropped.crop((detail_left, detail_top, detail_left + detail_width, detail_top + detail_height))
        cropped = cropped.resize(out_size, Image.Resampling.LANCZOS)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        cropped.save(output_path, format='JPEG', quality=88, optimize=True)


def ensure_bottle_set(brand: dict, media_entry: dict):
    slug = brand['slug']
    brand_dir = ROOT / 'images' / 'markalar' / slug
    bottles = []

    for source in media_entry.get('bottles', []):
        source_path = ROOT / source
        if source_path.exists() and is_valid_image(source_path):
            bottles.append(source)

    bottles = list(dict.fromkeys(bottles))
    if len(bottles) >= 2:
        return bottles[:3]

    if len(bottles) == 1:
        source_path = ROOT / bottles[0]
        derived_path = brand_dir / f'{slug}-bottle-detail-02.jpg'
        render_variant(source_path, derived_path, make_seed(slug, 'detail'), 'product-detail')
        bottles.append(to_public_path(derived_path))
        return bottles[:3]

    generated = []
    for index, base_path in enumerate(GENERIC_BOTTLE_BASES, start=1):
        if not base_path.exists() or not is_valid_image(base_path):
            continue
        output_path = brand_dir / f'{slug}-bottle-fallback-{index:02d}.jpg'
        render_variant(base_path, output_path, make_seed(slug, 'fallback-bottle', index), 'product')
        generated.append(to_public_path(output_path))
    return generated[:3]


def ensure_scene_entry(brand: dict):
    slug = brand['slug']
    cluster = brand.get('regionCluster') or 'turkiye'
    bases = [path for path in NATURE_BASES.get(cluster, NATURE_BASES['turkiye']) if path.exists() and is_valid_image(path)]
    if not bases:
        bases = [path for path in NATURE_BASES['turkiye'] if path.exists() and is_valid_image(path)]
    if not bases:
        raise RuntimeError('No valid nature base images found')

    seed = make_seed(slug, 'scene')
    base_index = seed % len(bases)
    base_path = bases[base_index]
    output_path = ROOT / 'images' / 'markalar' / slug / f'{slug}-scene-nature-{base_index + 1}.jpg'
    render_variant(base_path, output_path, seed, 'scene')

    rel_base = to_public_path(base_path)
    meta = NATURE_SOURCE_META.get(rel_base, {})
    place = (brand.get('region') or 'Türkiye').split(',')[0].strip() or 'Türkiye'
    return {
        'src': to_public_path(output_path),
        'alt': f'{place} çevresinde zeytin ağaçları ve doğal görünüm',
        'title': f'{place} zeytinlik görünümü',
        'sourceUrl': meta.get('sourceUrl', ''),
        'license': meta.get('license', ''),
        'artist': meta.get('artist', '')
    }


def write_brand_media(media_map: dict):
    BRAND_MEDIA_PATH.write_text('// Auto-generated local media map\nconst brandMedia = ' + json.dumps(media_map, indent=4, ensure_ascii=False) + ';\n')


def write_scene_media(scene_map: dict):
    def esc(value: str) -> str:
        return str(value or '').replace('\\', '\\\\').replace("'", "\\'")

    lines = ['const brandSceneMedia = {']
    keys = sorted(scene_map.keys())
    for index, key in enumerate(keys):
        item = scene_map[key]
        lines.append(f"  '{key}': {{")
        lines.append(f"    src: '{item['src']}',")
        lines.append(f"    alt: '{esc(item['alt'])}',")
        lines.append(f"    title: '{esc(item['title'])}',")
        lines.append(f"    sourceUrl: '{esc(item['sourceUrl'])}',")
        lines.append(f"    license: '{esc(item['license'])}',")
        lines.append(f"    artist: '{esc(item['artist'])}'")
        lines.append(f"  }}{',' if index < len(keys) - 1 else ''}")
    lines.append('};')
    lines.append('')
    BRAND_SCENE_MEDIA_PATH.write_text('\n'.join(lines))


def main():
    context = load_context()
    brands = context['brands']
    media_map = context['media']
    scene_map = {}

    for brand in brands:
        key = str(brand['id'])
        media_entry = dict(media_map.get(key, {}))
        media_entry['slug'] = brand['slug']
        media_entry['logo'] = media_entry.get('logo', '')
        media_entry['info'] = media_entry.get('info', '')
        media_entry['bottles'] = ensure_bottle_set(brand, media_entry)
        media_map[key] = media_entry
        scene_map[brand['slug']] = ensure_scene_entry(brand)

    write_brand_media(media_map)
    write_scene_media(scene_map)
    bottle_min = min(len(entry.get('bottles', [])) for entry in media_map.values())
    print(json.dumps({
        'brands': len(brands),
        'minimumBottleImages': bottle_min,
        'sceneRecords': len(scene_map)
    }, indent=2))


if __name__ == '__main__':
    main()

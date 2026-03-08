import hashlib
import json
import os
import subprocess
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path.cwd()
MANIFEST_PATH = ROOT / 'data' / 'brand-scene-manifest.json'
OUTPUT_JS_PATH = ROOT / 'brand-scene-media.js'
IMAGE_ROOT = ROOT / 'images' / 'markalar'

SUSPICIOUS_SLUGS = {'ove-foods', 'sabuncugil', 'kirte'}

CLUSTER_BASE_SLUGS = {
    'ege': [
        'komili', 'ayla-zeytinyagi', 'mavras', 'zetay', 'nermin-hanim-zeytinligi',
        'ayvaco', 'oliella', 'olivurla', 'anolive', 'edremit-korfezi'
    ],
    'marmara': [
        'marmarabirlik', 'trilye', 'gemlika', 'solive', 'terra-arteka', 'zeytinoz'
    ],
    'akdeniz': [
        'hatnar', 'arslan-zeytinyagi'
    ],
    'guneydogu': [
        'nizolive', 'uygur-zeytinyagi'
    ],
    'trakya': [
        'tarihi-kirkpinar', 'vivax-olea'
    ],
    'turkiye': [
        'komili', 'marmarabirlik', 'nizolive'
    ]
}

CLUSTER_REGION_FALLBACKS = {
    'ege': [
        ('images/bolgeler/ege/ege-pelitkoy-zeytinlik.jpg', 'Ege bölgesinde zeytin ağaçlarıyla dolu zeytinlik görünümü'),
        ('images/bolgeler/ege/ege-cunda-adasi.jpg', 'Ayvalık ve Cunda kıyılarından doğal görünüm')
    ],
    'marmara': [
        ('images/bolgeler/marmara/marmara-gemlik-zeytinlik.jpg', 'Gemlik çevresinde zeytinlik görünümü'),
        ('images/bolgeler/marmara/marmara-adasi-panorama.jpg', 'Marmara Denizi kıyılarından görünüm')
    ],
    'akdeniz': [
        ('images/bolgeler/akdeniz/akdeniz-samandag-sahili.jpg', 'Akdeniz kıyılarından doğal görünüm'),
        ('images/bolgeler/akdeniz/akdeniz-antakya.jpg', 'Antakya çevresinden doğal görünüm')
    ],
    'guneydogu': [
        ('images/bolgeler/guneydogu/guneydogu-nizip-zeytini.jpg', 'Nizip çevresinde zeytin ağaçları görünümü'),
        ('images/bolgeler/guneydogu/guneydogu-nizip-genel-gorunum.jpg', 'Güneydoğu çevresinden doğal görünüm')
    ],
    'trakya': [
        ('images/bolgeler/trakya/trakya-sarkoy-genel-gorunum.jpg', 'Trakya kıyılarından doğal görünüm'),
        ('images/bolgeler/trakya/trakya-tekirdag-sahil.jpg', 'Tekirdağ sahilinden görünüm')
    ],
    'turkiye': [
        ('images/bolgeler/turkiye/turkiye-pelitkoy-zeytinlik.jpg', 'Türkiye zeytinliklerinden görünüm'),
        ('images/bolgeler/turkiye/turkiye-sahil.jpg', 'Türkiye kıyılarından doğal görünüm')
    ]
}


def load_brands():
    node_script = r"""
const fs=require('fs');
const vm=require('vm');
const mediaCode=fs.readFileSync('brand-media.js','utf8');
const code=fs.readFileSync('brands.js','utf8');
const sandbox={console,URL};
vm.createContext(sandbox);
vm.runInContext(mediaCode+';globalThis.brandMedia=brandMedia;', sandbox);
vm.runInContext(code+';globalThis.__brands=brands;', sandbox);
console.log(JSON.stringify(sandbox.__brands.map((b)=>({slug:b.slug,region:b.region,cluster:b.regionCluster,regionClusterLabel:b.regionClusterLabel||'',oliveTypes:b.oliveTypeLabels||[]}))))
"""
    raw = subprocess.check_output(['node', '-e', node_script], cwd=ROOT, text=True)
    return json.loads(raw)


def load_manifest():
    if MANIFEST_PATH.exists():
        return json.loads(MANIFEST_PATH.read_text())
    return {}


def normalize_text(value: str) -> str:
    value = (value or '').strip()
    return ' '.join(value.split())


def build_alt(region: str, source_alt: str) -> str:
    place = normalize_text(region.split(',')[0]) if region else 'Türkiye'
    source_alt = normalize_text(source_alt)
    if 'zeytin' in source_alt.lower() or 'olive' in source_alt.lower():
        return f'{place} çevresinde zeytin ağaçları ve zeytinlik görünümü'
    return f'{place} çevresinden doğal görünüm'


def choose_bases(cluster: str, manifest: dict):
    bases = []
    for slug in CLUSTER_BASE_SLUGS.get(cluster, []):
        item = manifest.get(slug)
        if not item:
            continue
        path = ROOT / item['src']
        if path.exists():
            bases.append({
                'path': path,
                'alt': item.get('alt', ''),
                'title': item.get('title', ''),
                'sourceUrl': item.get('sourceUrl', ''),
                'license': item.get('license', ''),
                'artist': item.get('artist', '')
            })
    for rel_path, alt in CLUSTER_REGION_FALLBACKS.get(cluster, []):
        path = ROOT / rel_path
        if path.exists():
            bases.append({
                'path': path,
                'alt': alt,
                'title': Path(rel_path).stem.replace('-', ' '),
                'sourceUrl': '',
                'license': '',
                'artist': ''
            })
    return bases


def crop_image(base_path: Path, output_path: Path, seed: int):
    with Image.open(base_path) as img:
        img = ImageOps.exif_transpose(img).convert('RGB')
        width, height = img.size
        target_ratio = 4 / 3

        if width / height >= target_ratio:
            crop_height = height
            crop_width = int(height * target_ratio)
        else:
            crop_width = width
            crop_height = int(width / target_ratio)

        max_left = max(0, width - crop_width)
        max_top = max(0, height - crop_height)

        left_factor = ((seed * 37) % 1000) / 1000
        top_factor = ((seed * 53) % 1000) / 1000
        left = int(max_left * left_factor)
        top = int(max_top * top_factor)
        cropped = img.crop((left, top, left + crop_width, top + crop_height))

        if seed % 2 == 1:
            cropped = ImageOps.mirror(cropped)

        cropped = cropped.resize((1280, 960), Image.Resampling.LANCZOS)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        cropped.save(output_path, format='JPEG', quality=88, optimize=True)


def write_outputs(records: dict):
    def esc(value: str) -> str:
        return str(value or '').replace('\\', '\\\\').replace("'", "\\'")

    lines = ['const brandSceneMedia = {']
    keys = sorted(records.keys())
    for index, key in enumerate(keys):
        item = records[key]
        lines.append(f"  '{key}': {{")
        lines.append(f"    src: '{item['src']}',")
        lines.append(f"    alt: '{esc(item['alt'])}',")
        lines.append(f"    title: '{esc(item['title'])}',")
        lines.append(f"    sourceUrl: '{esc(item.get('sourceUrl', ''))}',")
        lines.append(f"    license: '{esc(item.get('license', ''))}',")
        lines.append(f"    artist: '{esc(item.get('artist', ''))}'")
        lines.append(f"  }}{',' if index < len(keys) - 1 else ''}")
    lines.append('};')
    lines.append('')
    OUTPUT_JS_PATH.write_text('\n'.join(lines))
    MANIFEST_PATH.write_text(json.dumps(records, indent=2, ensure_ascii=False) + '\n')


def main():
    brands = load_brands()
    manifest = load_manifest()
    brand_map = {brand['slug']: brand for brand in brands}

    targets = [brand for brand in brands if brand['slug'] not in manifest or brand['slug'] in SUSPICIOUS_SLUGS]
    for slug in SUSPICIOUS_SLUGS:
        old = manifest.get(slug)
        if old:
            old_path = ROOT / old['src']
            if old_path.exists():
                old_path.unlink()

    cluster_bases = {cluster: choose_bases(cluster, manifest) for cluster in CLUSTER_BASE_SLUGS.keys()}
    cluster_indices = {cluster: 0 for cluster in cluster_bases}

    for brand in targets:
        cluster = brand['cluster']
        bases = cluster_bases.get(cluster) or cluster_bases['turkiye']
        if not bases:
            raise RuntimeError(f'No base images available for cluster: {cluster}')

        base_index = cluster_indices.get(cluster, 0) % len(bases)
        base = bases[base_index]
        cluster_indices[cluster] = cluster_indices.get(cluster, 0) + 1

        seed = int(hashlib.sha256(brand['slug'].encode('utf-8')).hexdigest()[:12], 16)
        output_rel = Path('images') / 'markalar' / brand['slug'] / f"{brand['slug']}-scene-fallback-{base_index + 1}.jpg"
        output_abs = ROOT / output_rel
        crop_image(base['path'], output_abs, seed)

        manifest[brand['slug']] = {
            'src': output_rel.as_posix(),
            'alt': build_alt(brand['region'], base['alt']),
            'title': f"{normalize_text(brand['region'])} için görünüm",
            'sourceUrl': base.get('sourceUrl', ''),
            'license': base.get('license', ''),
            'artist': base.get('artist', '')
        }
        print(f"fallback {brand['slug']} <- {output_rel.as_posix()}")

    write_outputs(manifest)
    print(f"Final records: {len(manifest)}")


if __name__ == '__main__':
    main()

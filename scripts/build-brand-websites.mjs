import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();

function loadBrands() {
  const sandbox = { URL };
  vm.createContext(sandbox);

  const mediaSource = fs
    .readFileSync(path.join(ROOT, 'brand-media.js'), 'utf8')
    .replace('const brandMedia =', 'globalThis.brandMedia =');
  const brandsSource = fs
    .readFileSync(path.join(ROOT, 'brands.js'), 'utf8')
    .replace('const brands =', 'globalThis.brands =')
    .replace('const categoryLabels =', 'globalThis.categoryLabels =')
    .replace('const regionClusterLabels =', 'globalThis.regionClusterLabels =')
    .replace('const oliveTypeLabels =', 'globalThis.oliveTypeLabels =');

  vm.runInContext(mediaSource, sandbox);
  vm.runInContext(brandsSource, sandbox);
  return sandbox.brands || [];
}

const websites = loadBrands()
  .filter((brand) => typeof brand.website === 'string' && /^https?:\/\//i.test(brand.website))
  .map((brand) => ({
    id: brand.id,
    name: brand.name,
    slug: brand.slug,
    url: brand.website,
    region: brand.region,
    category: brand.category
  }))
  .sort((a, b) => a.name.localeCompare(b.name, 'tr'));

const outPath = path.join(ROOT, 'data', 'brand-websites.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(websites, null, 2)}\n`);

console.log(`Generated ${websites.length} brand websites at data/brand-websites.json`);

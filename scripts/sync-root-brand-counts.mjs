import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const BRANDS_PATH = path.join(ROOT, 'brands.js');
const INDEX_PATH = path.join(ROOT, 'index.html');
const MARKALAR_PATH = path.join(ROOT, 'markalar.html');

function loadBrands() {
  const source = fs.readFileSync(BRANDS_PATH, 'utf8');
  const sandbox = { console, URL };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\n;globalThis.__brands = brands;`, sandbox);
  return sandbox.__brands || [];
}

function replaceOrThrow(source, pattern, replacement, label) {
  if (!pattern.test(source)) {
    throw new Error(`Could not update ${label}`);
  }
  pattern.lastIndex = 0;
  const next = source.replace(pattern, replacement);
  return next;
}

function main() {
  const brands = loadBrands();
  const brandCount = brands.length;
  const categoryCount = new Set(brands.map((brand) => brand.category).filter(Boolean)).size;
  const regionCount = new Set(brands.map((brand) => brand.regionCluster).filter(Boolean)).size;
  const oliveTypeCount = new Set(brands.flatMap((brand) => Array.isArray(brand.oliveTypes) ? brand.oliveTypes : [])).size;

  let indexHtml = fs.readFileSync(INDEX_PATH, 'utf8');
  indexHtml = replaceOrThrow(
    indexHtml,
    /(<a href="markalar\.html" class="hero-stat">\s*<span class="num"[^>]*>)(\d+)(<\/span>\s*<span class="label">Marka<\/span>)/,
    `$1${brandCount}$3`,
    'index hero brand count'
  );
  indexHtml = replaceOrThrow(
    indexHtml,
    /(<a href="topic\/kategoriler\/index\.html" class="hero-stat">\s*<span class="num"[^>]*>)(\d+)(<\/span>\s*<span class="label">Kategori<\/span>)/,
    `$1${categoryCount}$3`,
    'index hero category count'
  );
  indexHtml = replaceOrThrow(
    indexHtml,
    /(<a href="topic\/bolgeler\/index\.html" class="hero-stat">\s*<span class="num"[^>]*>)(\d+)(<\/span>\s*<span class="label">Bölge<\/span>)/,
    `$1${regionCount}$3`,
    'index hero region count'
  );
  indexHtml = replaceOrThrow(
    indexHtml,
    /(<a href="topic\/zeytin-cesitleri\/index\.html" class="hero-stat">\s*<span class="num"[^>]*>)(\d+)(<\/span>\s*<span class="label">Zeytin Çeşidi<\/span>)/,
    `$1${oliveTypeCount}$3`,
    'index hero olive type count'
  );
  indexHtml = replaceOrThrow(
    indexHtml,
    /(<h3 data-home-brand-heading[^>]*>)(\d+)( Marka<\/h3>)/,
    `$1${brandCount}$3`,
    'index cta brand count'
  );
  fs.writeFileSync(INDEX_PATH, indexHtml);

  let markalarHtml = fs.readFileSync(MARKALAR_PATH, 'utf8');
  markalarHtml = replaceOrThrow(
    markalarHtml,
    /Türkiye'deki \d+ zeytinyağı markasını keşfedin\./,
    `Türkiye'deki ${brandCount} zeytinyağı markasını keşfedin.`,
    'markalar intro count'
  );
  fs.writeFileSync(MARKALAR_PATH, markalarHtml);

  console.log(JSON.stringify({ brandCount, categoryCount, regionCount, oliveTypeCount }, null, 2));
}

main();

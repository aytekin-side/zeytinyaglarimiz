import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const BRANDS_PATH = path.join(ROOT, 'brands.js');
const BRAND_MEDIA_PATH = path.join(ROOT, 'brand-media.js');
const BRAND_EDITORIAL_PATH = path.join(ROOT, 'brand-editorial-data.js');
const OUT_ROOT = path.join(ROOT, 'images', 'markalar');
const TMP_OUT_ROOT = path.join(ROOT, 'images', '.markalar-tmp');
const MANIFEST_PATH = path.join(ROOT, 'data', 'brand-assets-manifest.json');
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36';
const ACCEPT = 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8';
const REQUEST_TIMEOUT_MS = 12000;
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.avif']);
const MIME_TO_EXT = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/jpg': '.jpg',
  'image/webp': '.webp',
  'image/svg+xml': '.svg',
  'image/gif': '.gif',
  'image/avif': '.avif'
};

function normalizeSlug(value) {
  return String(value || '')
    .toLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function sanitizeBasename(value) {
  const base = normalizeSlug(safeDecode(value).replace(/\.[^.]+$/, ''));
  if (!base || ['image', 'logo', 'default', 'file', 'photo', 'urun', 'thumb'].includes(base)) {
    return 'asset';
  }
  return base.slice(0, 72);
}

function extFromSource(source, mime = '') {
  const type = String(mime || '').split(';')[0].trim().toLowerCase();
  if (MIME_TO_EXT[type]) return MIME_TO_EXT[type];

  const queryMatch = String(source || '').match(/[?&](?:format|fm|ext)=([a-z0-9]+)/i);
  if (queryMatch) {
    const ext = `.${queryMatch[1].toLowerCase()}`;
    if (IMAGE_EXTS.has(ext)) return ext;
  }

  const cleaned = String(source || '').split('?')[0].split('#')[0];
  const ext = path.extname(cleaned).toLowerCase();
  if (IMAGE_EXTS.has(ext)) return ext;
  return '.png';
}

function toPublicAssetPath(tmpDestPath) {
  const relativeToTmp = path.relative(TMP_OUT_ROOT, tmpDestPath).replace(/\\/g, '/');
  return path.posix.join('images', 'markalar', relativeToTmp);
}

function extractRawBrands() {
  const source = fsSync.readFileSync(BRANDS_PATH, 'utf8');
  const match = source.match(/const brands = (\[[\s\S]*?\n\]);\n\nconst categoryLabels =/);
  if (!match) throw new Error('Could not extract raw brands array from brands.js');
  const sandbox = { console };
  vm.createContext(sandbox);
  vm.runInContext(`const brands = ${match[1]}; globalThis.__brands = brands;`, sandbox);
  return { source, brands: sandbox.__brands };
}

function loadResolvedContext() {
  const sandbox = { console, URL };
  vm.createContext(sandbox);
  vm.runInContext(`${fsSync.readFileSync(BRAND_MEDIA_PATH, 'utf8')}\n;globalThis.__brandMedia = brandMedia;`, sandbox);
  vm.runInContext(`${fsSync.readFileSync(BRAND_EDITORIAL_PATH, 'utf8')}\n;globalThis.brandEditorialData = typeof brandEditorialData !== 'undefined' ? brandEditorialData : {};`, sandbox);
  vm.runInContext(`${fsSync.readFileSync(BRANDS_PATH, 'utf8')}\n;globalThis.__brands = brands;`, sandbox);
  return {
    brands: sandbox.__brands,
    brandMedia: sandbox.__brandMedia || {}
  };
}

async function ensureCleanOutDir() {
  await fs.rm(TMP_OUT_ROOT, { recursive: true, force: true });
  await fs.mkdir(TMP_OUT_ROOT, { recursive: true });
}

async function commitOutDir() {
  await fs.rm(OUT_ROOT, { recursive: true, force: true });
  await fs.rename(TMP_OUT_ROOT, OUT_ROOT);
}

async function copyLocalFile(sourcePath, destPath) {
  await fs.mkdir(path.dirname(destPath), { recursive: true });
  await fs.copyFile(path.join(ROOT, sourcePath), destPath);
  return { mime: '', sourceType: 'local-copy' };
}

async function fetchRemoteFile(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(new Error(`Timeout after ${REQUEST_TIMEOUT_MS}ms`)), REQUEST_TIMEOUT_MS);
  let response;

  try {
    response = await fetch(url, {
      redirect: 'follow',
      headers: {
        'user-agent': USER_AGENT,
        accept: ACCEPT
      },
      signal: controller.signal
    });
  } catch (error) {
    if (error?.name === 'AbortError') {
      throw new Error(`Timeout after ${REQUEST_TIMEOUT_MS}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const mime = response.headers.get('content-type') || '';
  const bytes = Buffer.from(await response.arrayBuffer());
  return { bytes, mime, finalUrl: response.url || url, sourceType: 'remote-download' };
}

async function writeRemoteFile(sourceUrl, destPath) {
  await fs.mkdir(path.dirname(destPath), { recursive: true });
  const { bytes, mime, finalUrl, sourceType } = await fetchRemoteFile(sourceUrl);
  await fs.writeFile(destPath, bytes);
  return { mime, finalUrl, sourceType };
}

async function materializeAsset({ source, destDir, fileBaseName }) {
  const isRemote = /^https?:\/\//i.test(source);
  if (!isRemote) {
    const ext = extFromSource(source);
    const destPath = path.join(destDir, `${fileBaseName}${ext}`);
    const meta = await copyLocalFile(source, destPath);
    return { relPath: toPublicAssetPath(destPath), ext, ...meta };
  }

  const remoteMeta = await fetchRemoteFile(source);
  const ext = extFromSource(remoteMeta.finalUrl || source, remoteMeta.mime);
  const destPath = path.join(destDir, `${fileBaseName}${ext}`);
  await fs.mkdir(path.dirname(destPath), { recursive: true });
  await fs.writeFile(destPath, remoteMeta.bytes);
  return { relPath: toPublicAssetPath(destPath), ext, mime: remoteMeta.mime, sourceType: remoteMeta.sourceType, finalUrl: remoteMeta.finalUrl };
}

async function main() {
  const { source: brandsSource, brands: rawBrands } = extractRawBrands();
  const { brands: resolvedBrands, brandMedia: rawBrandMedia } = loadResolvedContext();
  const rawBrandMap = new Map(rawBrands.map((brand) => [brand.id, brand]));
  const resolvedBrandMap = new Map(resolvedBrands.map((brand) => [brand.id, brand]));

  await ensureCleanOutDir();

  const manifest = [];
  const nextBrandMedia = {};
  const failures = [];

  for (const rawBrand of rawBrands) {
    const resolved = resolvedBrandMap.get(rawBrand.id);
    if (!resolved) {
      failures.push({ id: rawBrand.id, name: rawBrand.name, type: 'brand', source: '', error: 'Resolved brand not found' });
      continue;
    }

    const slug = resolved.slug || normalizeSlug(rawBrand.name);
    const brandDir = path.join(TMP_OUT_ROOT, slug);
    await fs.mkdir(brandDir, { recursive: true });

    const mediaEntry = rawBrandMedia[String(rawBrand.id)] || {};
    const brandRecord = {
      id: rawBrand.id,
      name: rawBrand.name,
      slug,
      logo: null,
      bottles: []
    };

    const logoSource = resolved.image;
    if (logoSource) {
      try {
        const logoAsset = await materializeAsset({
          source: logoSource,
          destDir: brandDir,
          fileBaseName: `${slug}-logo`
        });
        brandRecord.logo = logoAsset.relPath;
        rawBrand.image = logoAsset.relPath;
      } catch (error) {
        failures.push({ id: rawBrand.id, name: rawBrand.name, type: 'logo', source: logoSource, error: String(error.message || error) });
      }
    }

    const bottleSources = Array.isArray(resolved.bottleImages) ? resolved.bottleImages : [];
    for (let index = 0; index < bottleSources.length; index += 1) {
      const source = bottleSources[index];
      const cleanedName = sanitizeBasename(String(source).split('?')[0].split('/').pop() || `bottle-${index + 1}`);
      const fileBaseName = `${slug}-bottle-${String(index + 1).padStart(2, '0')}-${cleanedName}`;
      try {
        const bottleAsset = await materializeAsset({ source, destDir: brandDir, fileBaseName });
        brandRecord.bottles.push(bottleAsset.relPath);
      } catch (error) {
        failures.push({ id: rawBrand.id, name: rawBrand.name, type: `bottle-${index + 1}`, source, error: String(error.message || error) });
      }
    }

    nextBrandMedia[String(rawBrand.id)] = {
      slug,
      logo: brandRecord.logo || '',
      bottles: brandRecord.bottles,
      info: mediaEntry.info || `${rawBrand.name}, ${rawBrand.region} bölgesiyle ilişkilendirilen bir zeytinyağı üreticisidir. ${rawBrand.desc}`
    };

    rawBrand.logoFallback = '';
    manifest.push(brandRecord);
  }

  const nextBrandMediaSource = `// Auto-generated local media map\nconst brandMedia = ${JSON.stringify(nextBrandMedia, null, 4)};\n`;
  await fs.writeFile(BRAND_MEDIA_PATH, nextBrandMediaSource);
  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await fs.writeFile(MANIFEST_PATH, `${JSON.stringify({ generatedAt: new Date().toISOString(), brands: manifest, failures }, null, 2)}\n`);

  const nextBrandsArray = `const brands = ${JSON.stringify(rawBrands, null, 4)};`;
  let nextBrandsSource = brandsSource.replace(/const brands = \[[\s\S]*?\n\];\n\nconst categoryLabels =/, `${nextBrandsArray}\n\nconst categoryLabels =`);
  nextBrandsSource = nextBrandsSource.replace(/const manualLogoOverrides = \{[\s\S]*?\n\};\n\nfunction normalizeSlug/, 'const manualLogoOverrides = {};\n\nfunction normalizeSlug');
  await fs.writeFile(BRANDS_PATH, nextBrandsSource);
  await commitOutDir();

  console.log(JSON.stringify({
    mirroredBrands: manifest.length,
    mirroredLogos: manifest.filter((item) => item.logo).length,
    mirroredBottles: manifest.reduce((sum, item) => sum + item.bottles.length, 0),
    failures: failures.length
  }, null, 2));

  if (failures.length) {
    for (const failure of failures.slice(0, 50)) {
      console.log(`FAIL ${failure.id} ${failure.name} ${failure.type}: ${failure.source} -> ${failure.error}`);
    }
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

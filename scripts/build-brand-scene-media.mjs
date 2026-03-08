import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';

const ROOT = process.cwd();
const BRANDS_PATH = path.join(ROOT, 'brands.js');
const OUTPUT_JS_PATH = path.join(ROOT, 'brand-scene-media.js');
const MANIFEST_PATH = path.join(ROOT, 'data', 'brand-scene-manifest.json');
const IMAGE_ROOT = path.join(ROOT, 'images', 'markalar');
const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';
const USER_AGENT = 'zeytinyaglarimiz-scene-fetcher/1.0 (https://zeytinyaglarimiz.com)';
const CURL_MAX_TIME = '25';

const GENERIC_TOWN_TOKENS = new Set(['ege bolgesi', 'marmara bolgesi', 'akdeniz bolgesi', 'guneydogu anadolu', 'trakya', 'turkiye geneli']);
const BANNED_TERMS = [
  'logo', 'map', 'flag', 'coat of arms', 'diagram', 'drawing', 'illustration', 'advertisement', 'poster',
  'label', 'bottle', 'product', 'shop', 'market', 'portrait', 'person', 'people', 'festival', 'ceremony',
  'aircraft', 'vehicle', 'statue', 'museum', 'interior', 'iwmart', 'painting', 'artwork', 'battle', 'war',
  'soldier', 'cat', 'dog', 'bird', 'selfie', 'graffiti', 'comic', 'newspaper', 'book cover', 'postcard',
  'villager', 'villagers', 'refugee', 'refugees', 'debacle', 'lccn', 'military', 'army', 'children', 'child',
  'woman', 'women', 'man', 'men', 'family', 'families', 'roots', 'food'
];
const POSITIVE_TERMS = [
  'olive', 'zeytin', 'grove', 'orchard', 'zeytinlik', 'landscape', 'nature', 'countryside', 'panorama',
  'coast', 'shore', 'sea', 'bay', 'forest', 'view', 'harvest', 'island', 'beach', 'gulf', 'sahil'
];
const LOCATION_QUERY_KINDS = ['olive grove', 'landscape', 'panorama'];
const PROVINCE_QUERY_KINDS = ['olive grove', 'landscape'];
const MAX_TOWNS_PER_CLUSTER = 12;
const CLUSTER_QUERIES = {
  ege: ['Aegean Turkey olive grove', 'Aegean Turkey landscape', 'Aegean Turkey countryside', 'Turkey olive grove'],
  marmara: ['Bursa countryside olive', 'Gemlik olive grove', 'Marmara Turkey landscape', 'Turkey olive grove'],
  akdeniz: ['Hatay olive grove', 'Mediterranean Turkey landscape', 'Mersin olive grove', 'Turkey olive grove'],
  guneydogu: ['Gaziantep olive grove', 'Nizip olive', 'Southeastern Turkey landscape', 'Turkey olive grove'],
  trakya: ['Tekirdag landscape', 'Sarkoy landscape', 'Thrace Turkey countryside', 'Turkey countryside landscape'],
  turkiye: ['Turkey olive grove', 'Turkey olive tree', 'Turkey countryside landscape', 'Turkey nature landscape']
};
const GLOBAL_FALLBACK_QUERIES = [
  'Turkey olive grove',
  'Turkey olive tree',
  'Turkey countryside landscape',
  'Turkey coast landscape',
  'Aegean Turkey landscape',
  'Mediterranean Turkey landscape',
  'olive tree landscape',
  'olive grove landscape'
];
let KNOWN_TURKEY_LOCATION_TOKENS = [];

function normalize(value) {
  return String(value || '')
    .toLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanText(value) {
  return String(value || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeJsString(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'");
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function slugify(value) {
  return normalize(value)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72);
}

function fetchJson(url) {
  const raw = execFileSync('curl', ['-A', USER_AGENT, '-sSL', '--max-time', CURL_MAX_TIME, String(url)], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe']
  });
  return JSON.parse(raw);
}

function downloadFile(url, targetPath) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  execFileSync('curl', ['-A', USER_AGENT, '-sSL', '--max-time', CURL_MAX_TIME, '-o', targetPath, String(url)], {
    stdio: ['ignore', 'pipe', 'pipe']
  });
}

function loadBrands() {
  const sandbox = { console, URL };
  vm.createContext(sandbox);
  const brandMediaCode = fs.readFileSync(path.join(ROOT, 'brand-media.js'), 'utf8');
  const code = fs.readFileSync(BRANDS_PATH, 'utf8');
  vm.runInContext(`${brandMediaCode}\n;globalThis.brandMedia = brandMedia;`, sandbox);
  vm.runInContext(`${code}\n;globalThis.__brands = brands;`, sandbox);
  return sandbox.__brands || [];
}

function parseLocation(brand) {
  const parts = String(brand.region || '')
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);
  return {
    town: parts[0] || '',
    province: parts[1] || '',
    country: parts[2] || 'Türkiye'
  };
}

function townTokenIsSpecific(value) {
  return normalize(value).length >= 5;
}

function isGenericTown(value) {
  return GENERIC_TOWN_TOKENS.has(normalize(value));
}

function buildClusterQueries(clusterKey, brands) {
  const townCounts = new Map();
  brands.forEach((brand) => {
    const { town, province } = parseLocation(brand);
    if (town && !isGenericTown(town)) {
      const key = `${town}|||${province}`;
      townCounts.set(key, (townCounts.get(key) || 0) + 1);
    }
  });
  const towns = [...townCounts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'tr'))
    .slice(0, MAX_TOWNS_PER_CLUSTER)
    .map(([value]) => {
      const [town, province] = value.split('|||');
      return { town, province };
    });
  const provinces = unique(brands.map((brand) => parseLocation(brand).province).filter(Boolean));
  const queries = [];
  const push = (...values) => values.forEach((value) => {
    if (value) queries.push(value);
  });

  towns.forEach(({ town, province }) => {
    LOCATION_QUERY_KINDS.forEach((kind) => {
      push(province ? `${town} ${province} ${kind}` : `${town} ${kind}`);
      if (townTokenIsSpecific(town)) {
        push(`${town} ${kind}`);
      }
    });
  });

  provinces.forEach((province) => {
    PROVINCE_QUERY_KINDS.forEach((kind) => push(`${province} ${kind}`));
  });

  push(...(CLUSTER_QUERIES[clusterKey] || []));
  return unique(queries);
}

const queryCache = new Map();

function commonsSearch(query) {
  if (queryCache.has(query)) return queryCache.get(query);

  const url = new URL(COMMONS_API);
  url.searchParams.set('action', 'query');
  url.searchParams.set('format', 'json');
  url.searchParams.set('origin', '*');
  url.searchParams.set('generator', 'search');
  url.searchParams.set('gsrsearch', `${query} filetype:bitmap`);
  url.searchParams.set('gsrnamespace', '6');
  url.searchParams.set('gsrlimit', '18');
  url.searchParams.set('prop', 'imageinfo');
  url.searchParams.set('iiprop', 'url|extmetadata|size');
  url.searchParams.set('iiurlwidth', '1600');

  const data = fetchJson(url);
  const results = Object.values(data.query?.pages || {})
    .sort((a, b) => (a.index || 0) - (b.index || 0))
    .map((page) => {
      const image = page.imageinfo?.[0] || {};
      const metadata = image.extmetadata || {};
      return {
        query,
        pageTitle: cleanText(page.title),
        label: cleanText(metadata.ObjectName?.value) || cleanText(page.title.replace(/^File:/, '').replace(/\.[a-z0-9]+$/i, '').replace(/[_-]+/g, ' ')),
        description: cleanText(metadata.ImageDescription?.value) || '',
        artist: cleanText(metadata.Artist?.value) || '',
        license: cleanText(metadata.LicenseShortName?.value) || '',
        width: Number(image.width || 0),
        height: Number(image.height || 0),
        fileUrl: image.thumburl || image.url || '',
        sourceUrl: image.descriptionurl || ''
      };
    });

  queryCache.set(query, results);
  return results;
}

function isUsableCandidate(candidate) {
  if (!candidate.fileUrl || !candidate.sourceUrl) return false;
  if (candidate.width < 1000 || candidate.height < 700) return false;

  const haystack = normalize([candidate.pageTitle, candidate.label, candidate.description].join(' '));
  if (BANNED_TERMS.some((term) => haystack.includes(normalize(term)))) return false;
  if (!POSITIVE_TERMS.some((term) => haystack.includes(normalize(term)))) return false;
  return true;
}

function hasOliveTerms(haystack) {
  return ['olive', 'zeytin', 'grove', 'orchard', 'zeytinlik'].some((term) => haystack.includes(normalize(term)));
}

function hasNatureTerms(haystack) {
  return ['landscape', 'nature', 'countryside', 'panorama', 'coast', 'shore', 'sea', 'bay', 'forest', 'view', 'island', 'beach', 'gulf', 'sahil'].some((term) => haystack.includes(normalize(term)));
}

function hasKnownTurkeyLocation(haystack) {
  return KNOWN_TURKEY_LOCATION_TOKENS.some((token) => token && haystack.includes(token));
}

function scoreCandidateForBrand(brand, candidate) {
  if (!isUsableCandidate(candidate)) return -Infinity;

  const { town, province } = parseLocation(brand);
  const oliveLabels = Array.isArray(brand.oliveTypeLabels) ? brand.oliveTypeLabels : [];
  const haystack = normalize([candidate.pageTitle, candidate.label, candidate.description].join(' '));
  const hasOlive = hasOliveTerms(haystack);
  const hasNature = hasNatureTerms(haystack);
  const hasTown = town && !isGenericTown(town) && townTokenIsSpecific(town) && haystack.includes(normalize(town));
  const hasProvince = province && haystack.includes(normalize(province));
  const hasTurkeyLocation = hasKnownTurkeyLocation(haystack);
  let score = 0;

  if (!hasOlive && !hasNature) return -Infinity;
  if (!(hasTown || hasProvince || hasTurkeyLocation)) return -Infinity;
  if (!hasOlive && !(hasTown || hasProvince)) return -Infinity;

  if (candidate.width >= candidate.height) score += 8;
  if (candidate.width / Math.max(candidate.height, 1) > 1.15) score += 5;

  if (hasOlive) score += 22;
  if (haystack.includes('grove') || haystack.includes('zeytinlik') || haystack.includes('orchard')) score += 16;
  if (haystack.includes('landscape') || haystack.includes('nature') || haystack.includes('countryside') || haystack.includes('panorama')) score += 12;
  if (haystack.includes('coast') || haystack.includes('shore') || haystack.includes('sahil') || haystack.includes('sea') || haystack.includes('bay')) score += 9;
  if (haystack.includes('forest') || haystack.includes('view') || haystack.includes('island') || haystack.includes('beach')) score += 7;

  if (hasTown) score += 24;
  if (hasProvince) score += 12;

  oliveLabels.forEach((label) => {
    if (haystack.includes(normalize(label))) score += 8;
  });

  return score;
}

function removeExistingSceneFiles() {
  if (!fs.existsSync(IMAGE_ROOT)) return;
  const brandDirs = fs.readdirSync(IMAGE_ROOT);
  for (const dirName of brandDirs) {
    const dirPath = path.join(IMAGE_ROOT, dirName);
    if (!fs.statSync(dirPath).isDirectory()) continue;
    for (const fileName of fs.readdirSync(dirPath)) {
      if (fileName.includes('-scene-')) {
        fs.rmSync(path.join(dirPath, fileName), { force: true });
      }
    }
  }
}

function collectClusterPool(clusterKey, brands, globalSeenSources) {
  const queries = buildClusterQueries(clusterKey, brands);
  const pool = [];
  const poolSources = new Set();
  console.log(`collect ${clusterKey}: ${queries.length} queries`);

  for (const query of queries) {
    const candidates = commonsSearch(query);
    for (const candidate of candidates) {
      if (!isUsableCandidate(candidate)) continue;
      if (poolSources.has(candidate.sourceUrl) || globalSeenSources.has(candidate.sourceUrl)) continue;
      pool.push(candidate);
      poolSources.add(candidate.sourceUrl);
    }
  }

  return pool;
}

function collectGlobalPool(globalSeenSources) {
  const pool = [];
  const localSeen = new Set();
  for (const query of GLOBAL_FALLBACK_QUERIES) {
    const candidates = commonsSearch(query);
    for (const candidate of candidates) {
      if (!isUsableCandidate(candidate)) continue;
      if (localSeen.has(candidate.sourceUrl) || globalSeenSources.has(candidate.sourceUrl)) continue;
      pool.push(candidate);
      localSeen.add(candidate.sourceUrl);
    }
  }
  return pool;
}

function brandSpecificity(brand) {
  const { town, province } = parseLocation(brand);
  let score = 0;
  if (town && !isGenericTown(town)) score += 10;
  if (province) score += 5;
  if (Array.isArray(brand.oliveTypeLabels) && brand.oliveTypeLabels.length) score += 3;
  return score;
}

function pickBestCandidate(brand, primaryPool, fallbackPool, usedSources) {
  const chooseFrom = (pool) => pool
    .filter((candidate) => !usedSources.has(candidate.sourceUrl))
    .map((candidate) => ({ candidate, score: scoreCandidateForBrand(brand, candidate) }))
    .filter((entry) => Number.isFinite(entry.score) && entry.score >= 14)
    .sort((a, b) => b.score - a.score)[0]?.candidate || null;

  return chooseFrom(primaryPool) || chooseFrom(fallbackPool) || null;
}

function extensionFromUrl(url) {
  const pathname = String(url).split('?')[0].split('#')[0].toLowerCase();
  if (pathname.endsWith('.png')) return '.png';
  if (pathname.endsWith('.webp')) return '.webp';
  if (pathname.endsWith('.jpeg')) return '.jpeg';
  return '.jpg';
}

function buildAlt(brand, candidate) {
  const { town, province } = parseLocation(brand);
  const place = (town && !isGenericTown(town)) ? town : (province || brand.regionClusterLabel || 'Türkiye');
  const haystack = normalize([candidate.pageTitle, candidate.label, candidate.description].join(' '));
  if (haystack.includes('olive') || haystack.includes('zeytin')) {
    return `${place} çevresinde zeytin ağaçları ve zeytinlik görünümü`;
  }
  return `${place} çevresinden doğal görünüm`;
}

function buildTitle(brand, candidate) {
  const cleaned = cleanText(candidate.label || candidate.pageTitle.replace(/^File:/, '').replace(/\.[a-z0-9]+$/i, ''));
  return cleaned || `${brand.name} için doğa görseli`;
}

function writeOutputs(records) {
  const keys = Object.keys(records).sort((a, b) => a.localeCompare(b, 'tr'));
  const lines = ['const brandSceneMedia = {'];
  keys.forEach((key, index) => {
    const item = records[key];
    lines.push(`  '${escapeJsString(key)}': {`);
    lines.push(`    src: '${escapeJsString(item.src)}',`);
    lines.push(`    alt: '${escapeJsString(item.alt)}',`);
    lines.push(`    title: '${escapeJsString(item.title)}',`);
    lines.push(`    sourceUrl: '${escapeJsString(item.sourceUrl)}',`);
    lines.push(`    license: '${escapeJsString(item.license)}',`);
    lines.push(`    artist: '${escapeJsString(item.artist)}'`);
    lines.push(`  }${index === keys.length - 1 ? '' : ','}`);
  });
  lines.push('};');
  lines.push('');
  fs.writeFileSync(OUTPUT_JS_PATH, `${lines.join('\n')}\n`);
  fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(records, null, 2)}\n`);
}

function main() {
  const brands = loadBrands();
  KNOWN_TURKEY_LOCATION_TOKENS = unique([
    'turkey',
    'turkiye',
    'anadolu',
    ...brands.map((brand) => parseLocation(brand).town),
    ...brands.map((brand) => parseLocation(brand).province),
  ])
    .map((value) => normalize(value))
    .filter((value) => value.length >= 5);

  const brandsByCluster = new Map();
  brands.forEach((brand) => {
    if (!brandsByCluster.has(brand.regionCluster)) brandsByCluster.set(brand.regionCluster, []);
    brandsByCluster.get(brand.regionCluster).push(brand);
  });

  removeExistingSceneFiles();

  const usedSources = new Set();
  const records = {};
  const failures = [];
  const clusterPools = new Map();

  for (const [clusterKey, clusterBrands] of brandsByCluster.entries()) {
    const pool = collectClusterPool(clusterKey, clusterBrands, usedSources);
    clusterPools.set(clusterKey, pool);
    console.log(`pool ${clusterKey}: ${pool.length} candidates`);
  }

  const globalPool = collectGlobalPool(usedSources);
  console.log(`pool global: ${globalPool.length} candidates`);

  const orderedBrands = brands.slice().sort((a, b) => {
    const specificityDiff = brandSpecificity(b) - brandSpecificity(a);
    if (specificityDiff !== 0) return specificityDiff;
    return a.id - b.id;
  });

  for (const brand of orderedBrands) {
    const primaryPool = clusterPools.get(brand.regionCluster) || [];
    const candidate = pickBestCandidate(brand, primaryPool, globalPool, usedSources);
    if (!candidate) {
      failures.push({ slug: brand.slug, name: brand.name, region: brand.region, cluster: brand.regionCluster });
      continue;
    }

    const brandDir = path.join(IMAGE_ROOT, brand.slug);
    const baseName = `${brand.slug}-scene-${slugify(candidate.pageTitle.replace(/^File:/, '').replace(/\.[a-z0-9]+$/i, '')) || 'nature-view'}`;
    const ext = extensionFromUrl(candidate.fileUrl);
    const relativePath = path.posix.join('images', 'markalar', brand.slug, `${baseName}${ext}`);
    const absolutePath = path.join(ROOT, relativePath);

    downloadFile(candidate.fileUrl, absolutePath);
    usedSources.add(candidate.sourceUrl);
    records[brand.slug] = {
      src: relativePath,
      alt: buildAlt(brand, candidate),
      title: buildTitle(brand, candidate),
      sourceUrl: candidate.sourceUrl,
      license: candidate.license,
      artist: candidate.artist,
      query: candidate.query
    };
    console.log(`scene ${brand.slug} <- ${candidate.pageTitle} [${candidate.query}]`);
  }

  writeOutputs(records);
  console.log(`Generated ${Object.keys(records).length} brand scene records.`);

  if (failures.length) {
    console.error(`Missing scene image for ${failures.length} brands`);
    failures.forEach((item) => console.error(`- ${item.slug} | ${item.region} | ${item.cluster}`));
    process.exitCode = 1;
  }
}

main();

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';

const HUB_PATH = path.join(process.cwd(), 'rehber/index.html');
const OUTPUT_DIR = path.join(process.cwd(), 'images/rehber/articles');
const MANIFEST_PATH = path.join(process.cwd(), 'data/rehber-image-manifest.json');
const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';
const USER_AGENT = 'zeytinyaglarimiz-image-fetcher/1.0 (https://zeytinyaglarimiz.com)';

const groupQueries = {
  general: ['olive oil bottle', 'olive grove', 'olive harvest', 'olive oil bread'],
  price: ['olive oil bottles market', 'olive oil bottle', 'olive oil bottles'],
  buying: ['olive oil bottle', 'olive oil tasting', 'olive oil bottles market'],
  nutrition: ['olive oil spoon', 'olive oil salad', 'olive oil lemon', 'measuring spoon oil'],
  quality: ['olive oil tasting', 'olive oil glasses tasting', 'olive oil bottle'],
  varietal: ['olive harvest', 'olive grove', 'olive tree', 'olive fruit'],
  health: ['olive oil lemon', 'olive oil salad', 'olive oil bread', 'olive oil bottle', 'olive grove'],
  baby: ['baby food puree', 'starting solids baby food', 'baby spoon feeding'],
  hair: ['hair oil bottle', 'essential oil bottle', 'rosemary oil bottle', 'hair care bottle'],
  skin: ['olive oil soap', 'olive soap', 'massage oil', 'skin care bottle'],
  sensitive: ['dropper bottle oil', 'green glass dropper bottle', 'woman taking a dropper of CBD oil'],
  cooking: ['olive oil bread', 'olive oil salad', 'olive oil frying'],
  cleaning: ['olive oil bottle', 'kitchen towel'],
  packaging: ['olive oil bottle', 'olive oil bottles market', 'olive oil canister'],
  equipment: ['olive press machine', 'olive oil presser', 'cold press olive oil machine']
};

const bannedTitleTerms = [
  'logo',
  'icon',
  'diagram',
  'map',
  'flag',
  'coat of arms',
  'poster',
  'advertisement',
  'vector',
  'svg',
  'label',
  'seal',
  'wellcome',
  'lccn',
  'journal',
  'magazine',
  'book',
  'engraving',
  'drawing',
  'illustration'
];

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
    .replace(/ç/g, 'c');
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function cleanText(value) {
  return String(value || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function htmlDecode(value) {
  return String(value || '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function parseArticles() {
  const html = fs.readFileSync(HUB_PATH, 'utf8');
  const pattern = /<a class="guide-card" href="([^"]+)\.html" data-group="([^"]+)" data-search="([^"]*)">[\s\S]*?<h2>([^<]+)<\/h2>/g;
  const items = [];
  let match;
  while ((match = pattern.exec(html))) {
    items.push({
      slug: match[1],
      group: match[2],
      keywords: htmlDecode(match[3]),
      title: cleanText(match[4])
    });
  }
  return items;
}

function articleSpecificQueries(article) {
  const normalized = normalize(`${article.slug} ${article.title} ${article.keywords}`);
  const queries = [];
  const push = (...values) => values.forEach((value) => {
    if (value && !queries.includes(value)) queries.push(value);
  });

  if (/limon|sirke/.test(normalized)) push('olive oil lemon');
  if (/kalori|kac gr|kasik|gram/.test(normalized)) push('olive oil spoon', 'measuring spoon oil');
  if (/kilo|kabiz|bagirsak|oksur|kolesterol|ishal|icmek|ac karnina|fayda/.test(normalized)) push('olive oil salad', 'olive oil bread', 'olive oil bottle');
  if (/sac|kirpik/.test(normalized)) push('hair oil bottle', 'rosemary oil bottle');
  if (/yuze|cilt|vucut|gogus|gobek|makat/.test(normalized)) push('olive oil soap', 'massage oil');
  if (/kulaga|goze/.test(normalized)) push('dropper bottle oil');
  if (/kizartma|pisirme/.test(normalized)) push('olive oil frying');
  if (/sise|ambalaj|bottle/.test(normalized)) push('olive oil bottle', 'olive oil canister');
  if (/soguk sikim|sizma|ayvalik|memecik/.test(normalized)) push('olive harvest', 'olive grove');
  if (/bebek|cocuk/.test(normalized)) push('baby food puree', 'starting solids baby food');
  if (/makina|pres|fabrikasi/.test(normalized)) push('olive press machine', 'cold press olive oil machine');

  push(...(groupQueries[article.group] || []));
  push('olive oil bottle', 'olive grove');
  return unique(queries);
}

async function fetchJson(url) {
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const body = execFileSync('curl', ['-A', USER_AGENT, '-sSL', String(url)], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe']
      });
      return JSON.parse(body);
    } catch (error) {
      if (attempt === 4) throw error;
      await new Promise((resolve) => setTimeout(resolve, attempt * 800));
    }
  }
}

async function commonsSearch(query) {
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
  url.searchParams.set('iiurlwidth', '1280');

  const data = await fetchJson(url);
  return Object.values(data.query?.pages || {})
    .sort((a, b) => (a.index || 0) - (b.index || 0))
    .map((page) => {
      const image = page.imageinfo?.[0];
      const metadata = image?.extmetadata || {};
      return {
        pageTitle: page.title,
        label: cleanText(metadata.ObjectName?.value) || cleanText(page.title.replace(/^File:/, '').replace(/\.[a-z0-9]+$/i, '').replace(/[_-]+/g, ' ')),
        width: Number(image?.width || 0),
        height: Number(image?.height || 0),
        fileUrl: image?.thumburl || image?.url || '',
        source: image?.descriptionurl || '',
        license: cleanText(metadata.LicenseShortName?.value) || '',
        artist: cleanText(metadata.Artist?.value) || ''
      };
    });
}

function isUsableCandidate(candidate, usedSources) {
  if (!candidate.fileUrl || !candidate.source) return false;
  if (usedSources.has(candidate.source)) return false;
  if (candidate.width < 700 || candidate.height < 500) return false;
  const normalizedTitle = normalize(candidate.pageTitle);
  if (bannedTitleTerms.some((term) => normalizedTitle.includes(term))) return false;
  return true;
}

function extensionFromUrl(url) {
  const pathname = new URL(url).pathname.toLowerCase();
  if (pathname.endsWith('.png')) return '.png';
  if (pathname.endsWith('.webp')) return '.webp';
  return '.jpg';
}

async function downloadFile(url, targetPath) {
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      execFileSync('curl', ['-A', USER_AGENT, '-sSL', '-o', targetPath, String(url)], {
        stdio: ['ignore', 'pipe', 'pipe']
      });
      return;
    } catch (error) {
      if (attempt === 4) throw error;
      await new Promise((resolve) => setTimeout(resolve, attempt * 800));
    }
  }
}

function buildManifestEntry(article, candidate, relativePath) {
  const creditParts = ['Wikimedia Commons'];
  if (candidate.license) creditParts.push(candidate.license);

  return {
    path: relativePath,
    alt: candidate.label || article.title,
    caption: candidate.label || `${article.title} için görsel`,
    credit: creditParts.join(' - '),
    source: candidate.source
  };
}

async function collectPool(articles, usedSources) {
  const pool = [];
  for (const article of articles) {
    const queries = articleSpecificQueries(article);
    for (const query of queries) {
      const candidates = await commonsSearch(query);
      for (const candidate of candidates) {
        if (!isUsableCandidate(candidate, usedSources)) continue;
        if (pool.some((item) => item.source === candidate.source)) continue;
        pool.push(candidate);
        if (pool.length >= articles.length + 8) return pool;
      }
    }
  }
  return pool;
}

async function main() {
  const articles = parseArticles();
  const manifest = fs.existsSync(MANIFEST_PATH)
    ? JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'))
    : {};

  const usedSources = new Set(
    Object.values(manifest)
      .map((item) => item?.source)
      .filter(Boolean)
  );

  const groups = new Map();
  for (const article of articles.filter((item) => item.group !== 'brand')) {
    if (!groups.has(article.group)) groups.set(article.group, []);
    groups.get(article.group).push(article);
  }

  for (const [group, items] of groups.entries()) {
    const remaining = items.filter((article) => {
      const existing = manifest[article.slug];
      if (!existing) return true;
      const absPath = path.join(process.cwd(), existing.path.replace(/^\.\.\//, ''));
      return !fs.existsSync(absPath);
    });

    if (!remaining.length) {
      console.log(`Skipping ${group}: already complete`);
      continue;
    }

    console.log(`Collecting pool for ${group}: ${remaining.length} articles`);
    const pool = await collectPool(remaining, usedSources);
    if (pool.length < remaining.length) {
      throw new Error(`Not enough images for ${group}: needed ${remaining.length}, found ${pool.length}`);
    }

    for (const article of remaining) {
      const candidate = pool.shift();
      const extension = extensionFromUrl(candidate.fileUrl);
      const filename = `${article.slug}${extension}`;
      const outputPath = path.join(OUTPUT_DIR, filename);
      const relativePath = `../images/rehber/articles/${filename}`;
      await downloadFile(candidate.fileUrl, outputPath);
      manifest[article.slug] = buildManifestEntry(article, candidate, relativePath);
      usedSources.add(candidate.source);
      console.log(`Saved ${article.slug} <- ${candidate.pageTitle}`);
    }
  }

  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
  fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Updated manifest: ${MANIFEST_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

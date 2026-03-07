import fs from 'fs';
import vm from 'vm';

const src = fs.readFileSync('brands.js', 'utf8');
const start = src.indexOf('const brands =');
const arrStart = src.indexOf('[', start);
const arrEnd = src.indexOf('];', arrStart);
const arrLiteral = src.slice(arrStart, arrEnd + 1);
const brands = vm.runInNewContext(arrLiteral);

const badDomains = [
  'sikayetvar',
  'pinterest',
  'instagram',
  'facebook',
  'youtube',
  'twitter',
  'reddit',
  'wikipedia',
  'wikimedia',
  'shutterstock',
  'dreamstime',
  'freepik',
  'linktr',
  'stock',
  'vector'
];

const shoppingKeywords = [
  'trendyol', 'hepsiburada', 'n11', 'ciceksepeti', 'migros', 'carrefoursa', 'a101', 'bim',
  'sokmarket', 'happycenter', 'epttavm', 'pttavm', 'amazon', 'akakce', 'pazarama',
  'ideacdn', 'sepeti', 'avm', 'market', 'gross', 'shop', 'store'
];

const oliveKeywords = ['zeytin', 'zeytinyagi', 'olive', 'yag', 'sizma', 'riviera'];
const unrelatedKeywords = [
  'haber', 'news', 'forum', 'video', 'map', 'restoran', 'restaurant', 'cat', 'dog', 'pokemon',
  'dyson', 'kedi', 'canta', 'kolye', 'piercing', 'davetiye', 'takvim', 'oto', 'araba', 'yedek'
];

const genericBottleFallback =
  'https://static.happycenter.com.tr/Uploads/taris-zeytinyagi-riviera-5-lt-13533-500x500.png';

const normalize = (s) => (s || '')
  .toLowerCase('tr-TR')
  .normalize('NFD')
  .replace(/\p{Diacritic}/gu, '')
  .replace(/ğ/g, 'g')
  .replace(/ü/g, 'u')
  .replace(/ş/g, 's')
  .replace(/ı/g, 'i')
  .replace(/ö/g, 'o')
  .replace(/ç/g, 'c')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

const slugify = (s) => normalize(s).replace(/\s+/g, '-');

const tokenStopwords = new Set([
  'zeytinyagi', 'zeytin', 'yagi', 'yaglari', 'sizma', 'naturel', 'natuerel', 'natürel',
  'organik', 'premium', 'butik', 'market', 'endustriyel', 'birlik', 'olive'
]);

const tokensFor = (name) => normalize(name)
  .split(/\s+/)
  .filter(t => t.length > 2 && !tokenStopwords.has(t));

const ua = {
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
};

const decodeMurl = (s) => s
  .replace(/^murl&quot;:&quot;/, '')
  .replace(/&amp;/g, '&')
  .replace(/%3a/gi, ':')
  .replace(/%2f/gi, '/')
  .replace(/%3f/gi, '?')
  .replace(/%3d/gi, '=')
  .replace(/%26/gi, '&')
  .replace(/%25/gi, '%')
  .replace(/%2b/gi, '+')
  .replace(/%20/gi, ' ');

const hasAny = (text, arr) => arr.some(x => text.includes(x));

function scoreImage(url, tokens, { logoMode = false } = {}) {
  const n = normalize(url);

  if (hasAny(n, badDomains)) return -100;
  if (!url.startsWith('http://') && !url.startsWith('https://')) return -100;

  const tokenMatch = tokens.length > 0 && tokens.some(t => n.includes(t));
  const oliveMatch = hasAny(n, oliveKeywords);
  const shoppingMatch = hasAny(n, shoppingKeywords);

  let score = 0;
  if (tokenMatch) score += 6;
  if (oliveMatch) score += 5;
  if (shoppingMatch) score += 3;

  if (logoMode) {
    if (n.includes('logo')) score += 3;
    if (hasAny(n, ['icon', 'brand'])) score += 1;
    if (!tokenMatch && !n.includes('logo')) score -= 4;
  } else {
    if (!tokenMatch) score -= 4;
    if (!oliveMatch) score -= 6;
  }

  // Avoid obvious non-product content
  if (hasAny(n, unrelatedKeywords)) score -= 8;

  return score;
}

async function searchImageUrls(query) {
  const q = encodeURIComponent(query);
  const r = await fetch(`https://www.bing.com/images/search?q=${q}`, { headers: ua });
  const html = await r.text();
  const urls = [...html.matchAll(/murl&quot;:&quot;([^&]+(?:&amp;[^&]+)*)/g)]
    .map(m => decodeMurl(`murl&quot;:&quot;${m[1]}`))
    .filter(u => u.startsWith('http'));
  return [...new Set(urls)];
}

async function isImageUrl(url) {
  try {
    const r = await fetch(url, { method: 'HEAD', redirect: 'follow', headers: ua });
    const ct = (r.headers.get('content-type') || '').toLowerCase();
    return ct.startsWith('image/');
  } catch {
    return false;
  }
}

async function pickBest(urls, tokens, opts = {}) {
  const scored = urls
    .map(url => ({ url, score: scoreImage(url, tokens, opts) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20);

  for (const item of scored) {
    if (await isImageUrl(item.url)) return item.url;
  }
  return null;
}

async function pickBottles(urls, tokens, count = 3) {
  const scored = urls
    .map(url => ({ url, score: scoreImage(url, tokens, { logoMode: false }) }))
    .filter(x => x.score > 1)
    .sort((a, b) => b.score - a.score)
    .slice(0, 50);

  const out = [];
  for (const item of scored) {
    if (out.length >= count) break;
    if (out.includes(item.url)) continue;
    if (await isImageUrl(item.url)) out.push(item.url);
  }
  return out;
}

function logoFromWebsite(website) {
  if (!website) return null;
  try {
    const host = new URL(website).hostname.replace(/^www\./, '');
    return `https://img.logo.dev/${host}?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png`;
  } catch {
    return null;
  }
}

const media = {};

for (const brand of brands) {
  const tokens = tokensFor(brand.name);

  const logoCandidatesA = await searchImageUrls(`${brand.name} zeytinyagi logo`);
  const logoCandidatesB = await searchImageUrls(`${brand.name} zeytinyagi`);
  const bottleCandidatesA = await searchImageUrls(`${brand.name} zeytinyagi sisesi`);
  const bottleCandidatesB = await searchImageUrls(`${brand.name} naturel sizma zeytinyagi`);

  let logo = logoFromWebsite(brand.website);
  if (!logo) {
    logo = await pickBest([...logoCandidatesA, ...logoCandidatesB], tokens, { logoMode: true });
  }

  let bottles = await pickBottles([...bottleCandidatesA, ...bottleCandidatesB, ...logoCandidatesB], tokens, 3);

  if (bottles.length === 0 && logo && logo.startsWith('http')) {
    bottles = [logo];
  }

  if (!logo && bottles.length > 0) {
    logo = bottles[0];
  }

  if (!brand.website) {
    const logoNorm = normalize(logo || '');
    const tokenMatch = tokens.length > 0 && tokens.some(t => logoNorm.includes(t));
    const oliveMatch = hasAny(logoNorm, oliveKeywords);
    if (!(tokenMatch && oliveMatch) && bottles.length > 0) {
        logo = bottles[0];
    }
  }

  if (!logo) {
    logo = genericBottleFallback;
  }

  if (bottles.length === 0) {
    bottles = [genericBottleFallback];
  }

  media[brand.id] = {
    slug: slugify(brand.name),
    logo,
    bottles,
    info: `${brand.name}, ${brand.region} bölgesiyle ilişkilendirilen bir zeytinyağı markasıdır. ${brand.desc}`
  };

  console.log(`${String(brand.id).padStart(2, '0')} ${brand.name} -> logo:${logo ? 'ok' : '-'} bottles:${bottles.length}`);
}

const out = `// Auto-generated online media map\nconst brandMedia = ${JSON.stringify(media, null, 4)};\n`;
fs.writeFileSync('brand-media.js', out);
console.log('Wrote brand-media.js');

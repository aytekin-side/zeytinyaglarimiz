import fs from 'fs';
import vm from 'vm';

const src = fs.readFileSync('brands.js', 'utf8');
const start = src.indexOf('const brands =');
const arrStart = src.indexOf('[', start);
const arrEnd = src.indexOf('];', arrStart);
const arrLiteral = src.slice(arrStart, arrEnd + 1);
const brands = vm.runInNewContext(arrLiteral);

const badDomains = [
  'sikayetvar.com',
  'nefisyemektarifleri.com',
  'pinterest.',
  'instagram.com',
  'facebook.com',
  'youtube.com',
  'x.com',
  'twitter.com',
  'wikimedia.org',
  'wikipedia.org',
  'linktr.ee'
];

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

const tokenStopwords = new Set(['zeytinyagi', 'zeytin', 'yagi', 'yaglari', 'sizma', 'naturel', 'natürel', 'marka']);
const tokensFor = (name) => normalize(name).split(/\s+/).filter(t => t.length > 2 && !tokenStopwords.has(t));

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

async function pickUrl(candidates, tokens, { requireLogoHint = false } = {}) {
  const filtered = candidates.filter(u => {
    if (badDomains.some(d => u.includes(d))) return false;
    const n = normalize(u);
    if (requireLogoHint && !n.includes('logo')) return false;
    return tokens.length === 0 || tokens.some(t => n.includes(t));
  }).slice(0, 20);

  for (const url of filtered) {
    if (await isImageUrl(url)) return url;
  }

  return null;
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
  const websiteLogo = logoFromWebsite(brand.website);

  let logo = websiteLogo;
  if (!logo) {
    const logoCandidates = await searchImageUrls(`${brand.name} zeytinyagi logo`);
    logo = await pickUrl(logoCandidates, tokens, { requireLogoHint: true });
    if (!logo) {
      logo = await pickUrl(logoCandidates, tokens, { requireLogoHint: false });
    }
  }

  const bottleCandidates = await searchImageUrls(`${brand.name} zeytinyagi sise`);
  const bottles = [];
  for (const candidate of bottleCandidates) {
    if (bottles.length >= 3) break;
    if (badDomains.some(d => candidate.includes(d))) continue;
    const n = normalize(candidate);
    if (tokens.length && !tokens.some(t => n.includes(t))) continue;
    if (!await isImageUrl(candidate)) continue;
    if (!bottles.includes(candidate)) bottles.push(candidate);
  }

  if (bottles.length === 0) {
    // Keep at least one online image for every page
    bottles.push(`https://source.unsplash.com/1600x1200/?olive-oil,bottle,${encodeURIComponent(brand.name)}`);
  }

  media[brand.id] = {
    slug: slugify(brand.name),
    logo: logo || brand.image || null,
    bottles,
    info: `${brand.name}, ${brand.region} bölgesiyle ilişkilendirilen bir ${brand.category.replace('-', ' / ')} markasıdır. ${brand.desc}`
  };

  console.log(`${brand.id}. ${brand.name} -> logo:${media[brand.id].logo ? 'ok' : 'none'} bottles:${bottles.length}`);
}

const out = `// Auto-generated online media map\nconst brandMedia = ${JSON.stringify(media, null, 4)};\n`;
fs.writeFileSync('brand-media.js', out);
console.log('Wrote brand-media.js');

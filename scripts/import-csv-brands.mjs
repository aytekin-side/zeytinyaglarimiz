import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const CSV_PATH = process.argv[2];
if (!CSV_PATH) {
  throw new Error('Usage: node scripts/import-csv-brands.mjs /path/to/file.csv');
}

const BRANDS_PATH = path.join(ROOT, 'brands.js');
const BRAND_MEDIA_PATH = path.join(ROOT, 'brand-media.js');
const INDEX_PATH = path.join(ROOT, 'index.html');
const MARKALAR_PATH = path.join(ROOT, 'markalar.html');
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36';

const aliasMap = new Map([
  ['mentese som', 'Osman Menteşe Çiftliği'],
  ['mavras zeytinyagi', 'Mavras'],
  ['anolive zeytinyagi', 'Anolive'],
  ['yudum egemden', 'Yudum'],
  ['oliva sofralik zeytin', 'Oliva']
]);

const industrialNames = new Set([
  'baktat zeytin', 'sirma', 'orkide', 'zade', 'besler', 'abali', 'ekiz', 'sunar', 'olin',
  'hekimzade', 'fora', 'savorel', 'ozem', 'bata tarim'
]);

const regionRules = [
  [/samandag|samandağ/, 'Samandağ, Hatay'],
  [/altinozu|altınözü/, 'Altınözü, Hatay'],
  [/antakya|hatay/, 'Hatay'],
  [/nizip|gaziantep/, 'Nizip, Gaziantep'],
  [/mut\b|mersin/, 'Mut, Mersin'],
  [/tarsus/, 'Tarsus, Mersin'],
  [/datca|datça/, 'Datça, Muğla'],
  [/seferihisar/, 'Seferihisar, İzmir'],
  [/karaburun/, 'Karaburun, İzmir'],
  [/urla/, 'Urla, İzmir'],
  [/milas|mylasa/, 'Milas, Muğla'],
  [/aydin|aydın/, 'Aydın, Ege'],
  [/akhisar|manisa/, 'Akhisar, Manisa'],
  [/ayvalik|ayvalık/, 'Ayvalık, Balıkesir'],
  [/edremit/, 'Edremit, Balıkesir'],
  [/burhaniye/, 'Burhaniye, Balıkesir'],
  [/gomec|gömeç/, 'Gömeç, Balıkesir'],
  [/ayvacik|ayvacık|assos/, 'Ayvacık, Çanakkale'],
  [/canakkale|çanakkale/, 'Çanakkale'],
  [/eceabat/, 'Eceabat, Çanakkale'],
  [/gokceada|gökçeada|imbros/, 'Gökçeada, Çanakkale'],
  [/gemlik/, 'Gemlik, Bursa'],
  [/mudanya|trilye|zeytinbagi|zeytinbağı/, 'Mudanya, Bursa'],
  [/erdek/, 'Erdek, Balıkesir'],
  [/bandirma|bandırma|edincik/, 'Bandırma, Balıkesir'],
  [/sarkoy|şarköy|tekirdag|tekirdağ|ganos/, 'Şarköy, Tekirdağ'],
  [/armutlu|yalova/, 'Armutlu, Yalova'],
  [/izmir/, 'İzmir'],
  [/bursa/, 'Bursa, Marmara']
];

function normalize(value) {
  return String(value || '')
    .toLocaleLowerCase('tr')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/&/g, ' ve ')
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function getHost(value) {
  try {
    return new URL(value).hostname.replace(/^www\./, '').toLowerCase();
  } catch {
    return '';
  }
}

function decodeHtml(value) {
  return String(value || '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&uuml;/gi, 'ü')
    .replace(/&ouml;/gi, 'ö')
    .replace(/&ccedil;/gi, 'ç')
    .replace(/&Uuml;/g, 'Ü')
    .replace(/&Ouml;/g, 'Ö')
    .replace(/&Ccedil;/g, 'Ç')
    .replace(/&rsquo;/gi, "'")
    .replace(/&ndash;/gi, '-')
    .replace(/&mdash;/gi, '-');
}

function cleanText(value) {
  return decodeHtml(String(value || '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function parseCsv(csvText) {
  const lines = csvText.split(/\r?\n/).filter(Boolean);
  const rows = [];
  for (const line of lines.slice(1)) {
    const idx = line.lastIndexOf(',');
    if (idx === -1) continue;
    rows.push({
      name: line.slice(0, idx).replace(/^"|"$/g, '').trim(),
      website: line.slice(idx + 1).replace(/^"|"$/g, '').trim()
    });
  }
  return rows;
}

function loadBrands() {
  const source = fs.readFileSync(BRANDS_PATH, 'utf8');
  const match = source.match(/const brands = (\[[\s\S]*?\n\]);\n\nconst categoryLabels =/);
  if (!match) throw new Error('Could not extract brands array');
  const sandbox = { console };
  vm.createContext(sandbox);
  vm.runInContext(`const brands = ${match[1]}; globalThis.__brands = brands;`, sandbox);
  return { source, brands: sandbox.__brands, rawArrayLiteral: match[1] };
}

function loadBrandMedia() {
  const source = fs.readFileSync(BRAND_MEDIA_PATH, 'utf8');
  const sandbox = { console };
  vm.createContext(sandbox);
  vm.runInContext(`${source}; globalThis.__brandMedia = brandMedia;`, sandbox);
  return { source, brandMedia: sandbox.__brandMedia };
}

function scoreLogoCandidate(candidate, brandName) {
  const urlText = normalize(candidate.url);
  const altText = normalize(candidate.alt || '');
  let score = 0;
  if (/logo|brand|navbar|header|site-logo/.test(urlText)) score += 8;
  if (/logo/.test(altText)) score += 6;
  if (normalize(brandName).split(' ').some((token) => token.length > 2 && (urlText.includes(token) || altText.includes(token)))) score += 4;
  if (/icon|favicon/.test(urlText)) score += 2;
  if (/payment|banka|ssl|facebook|instagram|twitter|youtube/.test(urlText)) score -= 10;
  return score;
}

function scoreBottleCandidate(candidate, brandName) {
  const urlText = normalize(candidate.url);
  const altText = normalize(candidate.alt || '');
  let score = 0;
  if (/zeytin|zeytinyagi|olive|oil|sizma|natuel|naturel|erken|hasat|organik|memecik|ayvalik|gemlik|urun|product/.test(urlText)) score += 8;
  if (/zeytin|zeytinyagi|olive|oil|sizma|naturel|organik|erken|hasat/.test(altText)) score += 8;
  if (/logo|icon|favicon|banner|slider|background|hero/.test(urlText)) score -= 6;
  if (/facebook|instagram|twitter|youtube|payment|banka|ssl/.test(urlText)) score -= 10;
  if (/webp|png|jpg|jpeg|avif|svg/.test(urlText)) score += 1;
  if (normalize(brandName).split(' ').some((token) => token.length > 2 && (urlText.includes(token) || altText.includes(token)))) score += 2;
  return score;
}

function absolutize(base, value) {
  try {
    return new URL(value, base).href;
  } catch {
    return null;
  }
}

async function fetchPage(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': USER_AGENT },
      signal: controller.signal
    });
    const html = await response.text();
    return { ok: response.ok, status: response.status, url: response.url, html };
  } finally {
    clearTimeout(timeout);
  }
}

async function loadWebsiteProfile(initialUrl, brandName) {
  const variants = [];
  const seen = new Set();
  function add(url) {
    if (!url || seen.has(url)) return;
    seen.add(url);
    variants.push(url);
  }
  add(initialUrl);
  try {
    const parsed = new URL(initialUrl);
    if (parsed.hostname.startsWith('www.')) {
      add(`${parsed.protocol}//${parsed.hostname.replace(/^www\./, '')}${parsed.pathname}`);
    } else {
      add(`${parsed.protocol}//www.${parsed.hostname}${parsed.pathname}`);
    }
    if (parsed.protocol === 'https:') add(`http://${parsed.hostname}${parsed.pathname}`);
  } catch {}

  let page = null;
  for (const variant of variants) {
    try {
      const result = await fetchPage(variant);
      if (result.ok && result.html) {
        page = result;
        break;
      }
    } catch {}
  }

  if (!page) {
    return {
      website: initialUrl,
      title: '',
      meta: '',
      text: '',
      region: inferRegion(`${brandName} ${initialUrl}`),
      category: inferCategory(brandName, ''),
      desc: buildDesc(brandName, '', inferRegion(`${brandName} ${initialUrl}`), inferCategory(brandName, '')),
      logo: '',
      bottles: []
    };
  }

  const title = cleanText((page.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '');
  const meta = cleanText((page.html.match(/<meta[^>]+(?:name=["']description["']|property=["']og:description["'])[^>]+content=["']([\s\S]*?)["'][^>]*>/i) || [])[1] || '');
  const text = cleanText(
    page.html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  );

  const iconCandidates = [...page.html.matchAll(/<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]+href=["']([^"']+)["']/gi)]
    .map((m) => ({ url: absolutize(page.url, m[1]), alt: 'favicon' }))
    .filter((item) => item.url);

  const imageCandidates = [...page.html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*?(?:alt=["']([^"']*)["'])?/gi)]
    .map((m) => ({ url: absolutize(page.url, m[1]), alt: m[2] || '' }))
    .filter((item) => item.url && !item.url.startsWith('data:'));

  const metaImages = [...page.html.matchAll(/<meta[^>]+(?:property|name)=["'](?:og:image|twitter:image)["'][^>]+content=["']([^"']+)["']/gi)]
    .map((m) => ({ url: absolutize(page.url, m[1]), alt: 'og-image' }))
    .filter((item) => item.url);

  const logos = [...imageCandidates, ...iconCandidates].sort((a, b) => scoreLogoCandidate(b, brandName) - scoreLogoCandidate(a, brandName));
  const bottles = [...imageCandidates, ...metaImages].sort((a, b) => scoreBottleCandidate(b, brandName) - scoreBottleCandidate(a, brandName));
  const pickedLogo = logos.find((item) => scoreLogoCandidate(item, brandName) > 0)?.url || iconCandidates[0]?.url || '';
  const pickedBottle = bottles.find((item) => scoreBottleCandidate(item, brandName) > 1 && item.url !== pickedLogo)?.url || '';
  const region = inferRegion(`${brandName} ${page.url} ${title} ${meta} ${text.slice(0, 6000)}`);
  const category = inferCategory(brandName, `${title} ${meta} ${text.slice(0, 6000)}`);

  return {
    website: page.url || initialUrl,
    title,
    meta,
    text,
    region,
    category,
    desc: buildDesc(brandName, meta || title, region, category),
    logo: pickedLogo,
    bottles: pickedBottle ? [pickedBottle] : []
  };
}

function inferRegion(text) {
  const normalized = normalize(text);
  for (const [pattern, region] of regionRules) {
    if (pattern.test(normalized)) return region;
  }
  return 'Türkiye geneli';
}

function inferCategory(brandName, text) {
  const normalizedName = normalize(brandName);
  const normalizedText = normalize(text);
  if (industrialNames.has(normalizedName)) return 'market-endustriyel';
  if (/organik|organic|bio|eko/.test(normalizedName + ' ' + normalizedText)) return 'organik';
  if (/kooperatif|cooperative|kadin kooperatif|women cooperat/.test(normalizedText + ' ' + normalizedName)) return 'bolgesel-yerel';
  if (/premium|odul|award|high polyphenol|erken hasat|cold press|soguk sikim|soğuk sıkım|gourmet|butik|artisan|artizan/.test(normalizedText)) return 'premium-butik';
  if (/market|yemeklik yag|gida sanayi|food company|factory|fabrika/.test(normalizedText)) return 'market-endustriyel';
  if (/turkiye geneli|istanbul|izmir/.test(normalizedText) && !/milas|ayvalik|gemlik|urla|hatay|nizip|mut|canakkale/.test(normalizedText)) return 'market-endustriyel';
  return 'bolgesel-yerel';
}

function buildDesc(name, raw, region, category) {
  const cleaned = cleanText(raw)
    .replace(/^ana sayfa\s*-\s*/i, '')
    .replace(/^anasayfa\s*-\s*/i, '')
    .replace(/^home\s*-\s*/i, '')
    .slice(0, 220);
  if (cleaned && /(zeytin|olive|naturel|organik|soğuk|soguk|sızma|sizma|erken hasat|extra virgin)/i.test(cleaned)) {
    return cleaned.replace(/\s+/g, ' ').trim();
  }
  const categoryCopy = {
    'premium-butik': 'natürel sızma ve özel seri zeytinyağı sunan üretici',
    'market-endustriyel': 'geniş dağıtım ağıyla zeytinyağı ürünleri sunan üretici',
    organik: 'organik üretim çizgisinde zeytinyağı sunan üretici',
    'bolgesel-yerel': 'yerel üretim çizgisinde zeytinyağı sunan üretici'
  };
  if (region === 'Türkiye geneli') {
    return `${name}, ${categoryCopy[category] || 'zeytinyağı sunan üretici'} olarak dizine eklenmiştir.`;
  }
  return `${name}, ${region} çizgisinde ${categoryCopy[category] || 'zeytinyağı sunan üretici'} olarak öne çıkar.`;
}

function renderBrandEntry(entry) {
  return JSON.stringify(entry, null, 4)
    .split('\n')
    .map((line) => `    ${line}`)
    .join('\n');
}

function renderMediaEntry(id, entry) {
  return `    ${JSON.stringify(String(id))}: ${JSON.stringify(entry, null, 4).split('\n').join('\n    ')}`;
}

async function main() {
  const csvRows = parseCsv(fs.readFileSync(CSV_PATH, 'utf8'));
  const { source: brandsSource, brands } = loadBrands();
  const { source: mediaSource, brandMedia } = loadBrandMedia();

  const existingNames = brands.map((brand) => brand.name);
  const existingHosts = new Map(brands.map((brand) => [getHost(brand.website), brand.name]).filter(([h]) => h));
  const maxId = Math.max(...brands.map((brand) => Number(brand.id) || 0));

  const missingRows = csvRows.filter((row) => {
    const normalized = normalize(row.name);
    const byName = existingNames.find((name) => {
      const candidate = normalize(name);
      return candidate === normalized || candidate.includes(normalized) || normalized.includes(candidate) || aliasMap.get(normalized) === name;
    });
    const byHost = existingHosts.get(getHost(row.website));
    return !(byName || byHost);
  });

  const additions = [];
  const mediaAdditions = [];

  for (let index = 0; index < missingRows.length; index += 1) {
    const row = missingRows[index];
    const id = maxId + index + 1;
    const profile = await loadWebsiteProfile(row.website, row.name);
    const slug = slugify(row.name);
    additions.push({
      id,
      name: row.name,
      desc: profile.desc,
      region: profile.region,
      category: profile.category,
      website: profile.website || row.website,
      founded: '',
      highlight: false,
      image: ''
    });
    mediaAdditions.push({
      id,
      media: {
        slug,
        logo: profile.logo || '',
        bottles: profile.bottles || [],
        info: `${row.name}, ${profile.region} çizgisinde zeytinyağı ile ilişkilendirilen bir üreticidir. ${profile.desc}`
      }
    });
    console.log(`${String(id).padStart(3, '0')} ${row.name} -> ${profile.region} | ${profile.category} | logo:${profile.logo ? 'y' : 'n'} bottle:${profile.bottles.length}`);
  }

  if (additions.length === 0) {
    console.log('No missing brands to add.');
    return;
  }

  const brandInsert = `,\n${additions.map(renderBrandEntry).join(',\n')}\n`;
  const patchedBrands = brandsSource.replace('\n];\n\nconst categoryLabels =', `${brandInsert}];\n\nconst categoryLabels =`);
  fs.writeFileSync(BRANDS_PATH, patchedBrands);

  const mediaInsert = `,\n${mediaAdditions.map((entry) => renderMediaEntry(entry.id, entry.media)).join(',\n')}\n`;
  const patchedMedia = mediaSource.replace('\n};\n', `${mediaInsert}};\n`);
  fs.writeFileSync(BRAND_MEDIA_PATH, patchedMedia);

  const nextCount = brands.length + additions.length;
  const indexHtml = fs.readFileSync(INDEX_PATH, 'utf8')
    .replace(/<h3>\d+ Marka<\/h3>/, `<h3>${nextCount} Marka</h3>`);
  fs.writeFileSync(INDEX_PATH, indexHtml);

  const markalarHtml = fs.readFileSync(MARKALAR_PATH, 'utf8')
    .replace(/Türkiye'deki \d+ zeytinyağı markasını keşfedin\./, `Türkiye'deki ${nextCount} zeytinyağı markasını keşfedin.`);
  fs.writeFileSync(MARKALAR_PATH, markalarHtml);

  console.log(`Added ${additions.length} brands. Total is now ${nextCount}.`);
}

main();

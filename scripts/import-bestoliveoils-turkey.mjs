import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';

const ROOT = process.cwd();
const BRANDS_PATH = path.join(ROOT, 'brands.js');
const BRAND_MEDIA_PATH = path.join(ROOT, 'brand-media.js');
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36';
const BOO_API_ALL = 'https://bestoliveoils.org/api/oils/all';
const BOO_API_PRODUCER = 'https://bestoliveoils.org/api/producer';
const BOO_IMAGE_CACHE_PATH = '/tmp/turkey_missing_bestoliveoils.json';

const parentVariantConfig = {
  'funoli goldere': { parent: 'Funoli', region: 'Milas, Muğla', displayName: 'Funoli Göldere' },
  'fayton ayvalik': { parent: 'Fayton', region: 'Ayvalık, Balıkesir', displayName: 'Fayton Ayvalık' },
  'funoli organic': { parent: 'Funoli', region: 'Milas, Muğla', category: 'organik' },
  'safitad private reserve': { parent: 'Safitad', region: 'Çanakkale' },
  'zagoda ayvalik': { parent: 'Zagoda', region: 'Akhisar, Manisa', displayName: 'Zagoda Ayvalık' },
  'zagoda trilye': { parent: 'Zagoda', region: 'Akhisar, Manisa', displayName: 'Zagoda Trilye' },
  'asiltane limited ozel hasat': { parent: 'Asiltane', region: 'Aydın, Ege', displayName: 'Asiltane Limited Özel Hasat' },
  'safitad early harvest': { parent: 'Safitad', region: 'Çanakkale' },
  'tuay-zeytinin efendisi': { parent: 'Tuay', region: 'Milas, Muğla', displayName: 'Tuay Zeytinin Efendisi' },
  'nermin hanim zeytinligi edremit': { parent: 'Nermin Hanım Zeytinliği', region: 'Edremit, Balıkesir' },
  'gourmet selection domat': { parent: 'Palamidas', region: 'Akhisar, Manisa' },
  'gourmet selection early harvest trilye': { parent: 'Palamidas', region: 'Akhisar, Manisa' },
  'bozelli picual': { parent: 'Bozelli', region: 'Akhisar, Manisa' },
  'yudum egemden erken hasat': { parent: 'Yudum', region: 'Edremit, Balıkesir' },
  'zagoda arbequina': { parent: 'Zagoda', region: 'Akhisar, Manisa' },
  'bella mordane arbequina': { parent: 'Bella Mordane', region: 'Akhisar, Manisa' },
  'granpa premium trilye': { parent: 'Granpa', region: 'Bursa, Marmara' },
  'granpa memecik': { parent: 'Granpa', region: 'Bursa, Marmara', displayName: 'Granpa Memecik' },
  'granpa gold': { parent: 'Granpa', region: 'Bursa, Marmara' },
  'ayvalik koklu': { parent: 'Köklü', region: 'Ayvalık, Balıkesir', displayName: 'Ayvalık Köklü' }
};

const manualProductConfig = {
  luxe: {
    website: 'https://www.trueolive.co/',
    region: 'Ayvalık, Balıkesir',
    category: 'premium-butik',
    logo: 'https://www.trueolive.co/logo512.png',
    bottles: [
      'https://www.trueolive.co/luxe.webp',
      'https://www.trueolive.co/luxe-750.webp'
    ]
  },
  'true olive private reserve': {
    website: 'https://www.trueolive.co/',
    region: 'Edremit, Balıkesir',
    category: 'premium-butik',
    logo: 'https://www.trueolive.co/logo512.png',
    bottles: [
      'https://www.trueolive.co/private-reserve.webp',
      'https://www.trueolive.co/private-reserve-750.webp'
    ]
  },
  'oleavia south aegean special': {
    website: 'https://www.oleavia.com/',
    region: 'Milas, Muğla',
    category: 'premium-butik',
    logo: 'https://static.wixstatic.com/media/f3b838_063d8a0f3f884d448cdf7518fd331b4e~mv2.png/v1/fill/w_584,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/oleavia_logo-01.png',
    bottles: [
      'https://bestoliveoils.com/cdn/images/2025/9267.png',
      'https://static.wixstatic.com/media/0d32fb_866e99d825d040fc80214e404698152b~mv2.png/v1/fill/w_822,h_822,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Photoroom_20250703_122418.png',
      'https://static.wixstatic.com/media/0d32fb_eb6e47d910ae40daaec899b761c84f50~mv2.jpg/v1/crop/x_0,y_316,w_3024,h_3400/fill/w_756,h_850,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asilik2_JPG.jpg'
    ]
  },
  armolia: {
    website: 'https://armollia.com/',
    region: 'Selçuk, İzmir',
    category: 'premium-butik',
    logo: 'https://i0.wp.com/armollia.com/wp-content/uploads/2024/12/armolia-site-logo-e1729679667284.png?fit=300%2C92&ssl=1',
    bottles: [
      'https://bestoliveoils.com/cdn/images/2025/9578.png',
      'https://i0.wp.com/armollia.com/wp-content/uploads/2024/12/Armolia-Premium-Olive-Oil-Extra-Virgin-500-ml.webp?fit=800%2C800&ssl=1',
      'https://i0.wp.com/armollia.com/wp-content/uploads/2024/12/Armolia-Premium-Olive-Oil-Extra-Virgin-250-ml.webp?fit=800%2C800&ssl=1'
    ]
  },
  'birsen hanim arbequina': {
    website: 'https://www.birsenhanim.com/',
    region: 'Köprübaşı, Manisa',
    category: 'premium-butik',
    logo: 'https://www.birsenhanim.com/images/logo.png',
    bottles: [
      'https://bestoliveoils.com/cdn/images/2025/9595.png',
      'https://www.birsenhanim.com/urunlerresim/kucuk/arbequina-6li-sise-1599.jpg',
      'https://www.birsenhanim.com/urunlerresim/kucuk/3-litre-arbequina-1622.jpg'
    ]
  }
};

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
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function dedupe(values) {
  return [...new Set((values || []).filter(Boolean))];
}

function loadCachedBooImages() {
  if (!fs.existsSync(BOO_IMAGE_CACHE_PATH)) {
    return new Map();
  }
  try {
    const rows = JSON.parse(fs.readFileSync(BOO_IMAGE_CACHE_PATH, 'utf8'));
    return new Map(
      rows
        .filter((row) => row && row.brand && row.imageUrl)
        .map((row) => [normalize(row.brand), String(row.imageUrl)])
    );
  } catch {
    return new Map();
  }
}

function loadBrands() {
  const source = fs.readFileSync(BRANDS_PATH, 'utf8');
  const match = source.match(/const brands = (\[[\s\S]*?\n\]);\n\nconst categoryLabels =/);
  if (!match) throw new Error('Could not parse brands.js');
  const sandbox = { console, URL };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\n;globalThis.__brands = brands;`, sandbox);
  return { source, brands: sandbox.__brands };
}

function loadBrandMedia() {
  const source = fs.readFileSync(BRAND_MEDIA_PATH, 'utf8');
  const sandbox = { console, URL };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\n;globalThis.__brandMedia = brandMedia;`, sandbox);
  return { source, brandMedia: sandbox.__brandMedia };
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

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': USER_AGENT,
      accept: 'application/json,text/plain,*/*'
    }
  });
  if (!response.ok) {
    throw new Error(`${response.status} for ${url}`);
  }
  return response.json();
}

function cultivarNames(cultivars) {
  return (cultivars || [])
    .map((item) => typeof item === 'string' ? item : item?.name)
    .filter(Boolean);
}

function formatCultivarText(names) {
  if (!names.length) return 'özenle seçilen zeytinlerden';
  if (names.length === 1) return `${names[0]} zeytinlerinden`;
  return `${names.slice(0, -1).join(', ')} ve ${names.at(-1)} zeytinlerinden`;
}

function buildDescription(entry, region) {
  const names = cultivarNames(entry.entry?.cultivars || entry.detail?.entry?.cultivars || []);
  const cultivarText = formatCultivarText(names);
  const award = entry.award?.title || entry.detail?.award?.title || 'ödüllü';
  const year = entry.compYear?.title || entry.detail?.compYear?.title || '2026';
  const sourceSentence = `${entry.displayName}, ${region} hattında ${cultivarText} hazırlanan ${year} ${award} ödüllü natürel sızma zeytinyağıdır.`;
  const producerName = entry.producer?.name || entry.detail?.entry?.producer?.name || entry.entry?.producer?.name || '';
  if (!producerName) return sourceSentence;
  return `${sourceSentence} ${producerName} üretim çizgisinde öne çıkan seçili seriler arasında yer alır.`.slice(0, 280);
}

function buildMediaInfo(entry, region) {
  const producer = entry.producer?.name || entry.detail?.entry?.producer?.name || entry.entry?.producer?.name || '';
  const award = entry.award?.title || entry.detail?.award?.title || 'ödüllü';
  const year = entry.compYear?.title || entry.detail?.compYear?.title || '2026';
  const cultivarText = formatCultivarText(cultivarNames(entry.entry?.cultivars || entry.detail?.entry?.cultivars || []));
  return `${entry.displayName}, ${region} çizgisinde ${cultivarText} hazırlanan ${year} ${award} ödüllü bir natürel sızma seçimidir.${producer ? ` Üretici tarafında ${producer} öne çıkar.` : ''}`;
}

async function main() {
  const { source: brandsSource, brands } = loadBrands();
  const { source: mediaSource, brandMedia } = loadBrandMedia();
  const cachedImageMap = loadCachedBooImages();
  const existingNames = new Set(brands.map((brand) => normalize(brand.name)));
  const brandByName = new Map(brands.map((brand) => [brand.name, brand]));
  const brandByNormalizedName = new Map(brands.map((brand) => [normalize(brand.name), brand]));
  const mediaById = brandMedia;
  const maxId = Math.max(...brands.map((brand) => Number(brand.id) || 0));

  const feed = await fetchJson(BOO_API_ALL);
  const turkeyEntries = dedupe(
    (feed.entries || [])
      .filter((record) => record?.entry?.country?.name === 'Turkey')
      .sort((a, b) => Number(b?.compYear?.title || 0) - Number(a?.compYear?.title || 0))
      .map((record) => record)
  );

  const uniqueTurkeyEntries = [];
  const seenEntryNames = new Set();
  for (const record of turkeyEntries) {
    const key = normalize(record?.entry?.brandName || '');
    if (!key || seenEntryNames.has(key)) continue;
    seenEntryNames.add(key);
    uniqueTurkeyEntries.push(record);
  }

  const missingRecords = uniqueTurkeyEntries.filter((record) => !existingNames.has(normalize(record.entry?.brandName || '')));
  const producerCache = new Map();
  const additions = [];
  const mediaAdditions = [];

  for (let index = 0; index < missingRecords.length; index += 1) {
    const record = missingRecords[index];
    const rawName = String(record.entry?.brandName || '').trim();
    const normalizedName = normalize(rawName);
    const producerSlug = record.entry?.producer?.slug || '';
    const brandSlug = record.entry?.slug || slugify(rawName);

    if (!producerCache.has(producerSlug)) {
      producerCache.set(producerSlug, producerSlug ? await fetchJson(`${BOO_API_PRODUCER}/${producerSlug}`) : null);
    }

    const producerData = producerCache.get(producerSlug);
    const producer = producerData?.producer || {};
    const detailRecord = producerData?.entries?.find((item) => normalize(item?.entry?.brandName || '') === normalizedName) || record;
    const entry = {
      ...record,
      detail: detailRecord,
      producer,
      displayName: rawName
    };

    const parentConfig = parentVariantConfig[normalizedName] || null;
    const manualConfig = manualProductConfig[normalizedName] || null;

    let displayName = rawName.replace(/\s+/g, ' ').trim();
    let region = 'Ege';
    let category = 'premium-butik';
    let website = producer.website || '';
    let logo = '';
    const cachedBottle = cachedImageMap.get(normalizedName);
    let bottles = [
      cachedBottle || `https://bestoliveoils.com/cdn/images/${entry.compYear?.title || '2026'}/${entry.id}.png`
    ];

    if (parentConfig) {
      const parentBrand = brandByName.get(parentConfig.parent) || brandByNormalizedName.get(normalize(parentConfig.parent));
      if (!parentBrand) {
        throw new Error(`Parent brand not found for ${rawName}: ${parentConfig.parent}`);
      }
      const parentMedia = mediaById[String(parentBrand.id)] || {};
      displayName = parentConfig.displayName || displayName;
      region = parentConfig.region || parentBrand.region;
      category = parentConfig.category || parentBrand.category;
      website = parentBrand.website || website;
      logo = parentBrand.image || parentMedia.logo || '';
      bottles = dedupe([
        cachedBottle || `https://bestoliveoils.com/cdn/images/${entry.compYear?.title || '2026'}/${entry.id}.png`,
        ...(parentBrand.bottleImages || []),
        ...(parentMedia.bottles || [])
      ]).slice(0, 3);
    }

    if (manualConfig) {
      displayName = manualConfig.displayName || displayName;
      region = manualConfig.region || region;
      category = manualConfig.category || category;
      website = manualConfig.website || website;
      logo = manualConfig.logo || logo;
      bottles = dedupe([...(manualConfig.bottles || []), ...bottles]).slice(0, 3);
    }

    const id = maxId + index + 1;
    const desc = buildDescription({ ...entry, displayName }, region);
    additions.push({
      id,
      name: displayName,
      desc,
      region,
      category,
      website,
      founded: '',
      highlight: false,
      image: logo,
      logoFallback: ''
    });
    mediaAdditions.push({
      id,
      media: {
        slug: slugify(displayName),
        logo,
        bottles,
        info: buildMediaInfo({ ...entry, displayName }, region)
      }
    });
    console.log(`${String(id).padStart(3, '0')} ${displayName} -> ${region} | ${category}`);
  }

  if (!additions.length) {
    console.log('No missing Best Olive Oils Turkey entries to add.');
    return;
  }

  const brandInsert = `,\n${additions.map(renderBrandEntry).join(',\n')}\n`;
  const patchedBrands = brandsSource.replace('\n];\n\nconst categoryLabels =', `${brandInsert}];\n\nconst categoryLabels =`);
  fs.writeFileSync(BRANDS_PATH, patchedBrands);

  const mediaInsert = `,\n${mediaAdditions.map((entry) => renderMediaEntry(entry.id, entry.media)).join(',\n')}\n`;
  const patchedMedia = mediaSource.replace('\n};\n', `${mediaInsert}};\n`);
  fs.writeFileSync(BRAND_MEDIA_PATH, patchedMedia);

  const rebuild = spawnSync('bash', [path.join(ROOT, 'scripts', 'rebuild-brand-directory.sh')], {
    cwd: ROOT,
    stdio: 'inherit'
  });
  if (rebuild.status !== 0) {
    throw new Error(`Rebuild pipeline failed with exit code ${rebuild.status ?? 'unknown'}`);
  }

  console.log(`Added ${additions.length} Best Olive Oils Turkey entries.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

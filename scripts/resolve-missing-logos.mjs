import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const BRANDS_PATH = path.join(ROOT, 'brands.js');

const FIXES = {
  'alpoliva': {
    website: 'https://www.alpoliva.com/',
    image: 'https://www.alpoliva.com/idea/pu/57/themes/selftpl_67bb59401dfa2/assets/uploads/logo.jpg?revision=1743600658'
  },
  'anit-yag': {
    website: 'https://www.anityag.com.tr/',
    image: 'https://static.wixstatic.com/media/449bc0_b01f42d4ea7e466ea9ab6f472fa8a26a~mv2.png/v1/fill/w_228,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/unnamed.png'
  },
  'aysan': {
    website: 'https://aysanyaglari.com.tr/',
    image: 'https://aysanyaglari.com.tr/wp-content/uploads/2025/03/aysanlogo2.png'
  },
  'durukaan': {
    website: 'https://www.durukaanoliveoil.com/',
    image: 'https://static.ticimax.cloud/73568/Uploads/HeaderTasarim/Header4/c5f4f33c-72f7-4d15-a753-7754098de51d.jpg'
  },
  'egeo-norte': {
    website: 'https://egeonorte.com/',
    image: 'https://cdn.myikas.com/images/theme-images/9aceea67-9155-4682-99fa-69b88659b2e4/image_1080.webp'
  },
  'femes': {
    website: 'https://femes.com.tr/',
    image: 'https://femes.com.tr/wp-content/uploads/2025/05/logowhite.webp'
  },
  'galia-garden': {
    website: 'https://www.galiaolive.com.tr/',
    image: 'https://www.galiaolive.com.tr/resimler/siteayarlari/b1f6d05d3afe035306983ecc67fb4040o.png'
  },
  'heraliv': {
    website: 'https://heraliv.com.tr/',
    image: 'https://heraliv.com.tr/wp-content/uploads/2024/12/heraliv-white-logo.png'
  },
  'imbatto': {
    website: 'https://www.imbatto.com/',
    image: 'https://static.ticimax.cloud/71045/Uploads/HeaderTasarim/Header1/38c8b5f8-8219-407b-aeca-43b4f3971371.jpg'
  },
  'kulahli-zeytinyagi': {
    website: 'https://kulahlizeytinyagi.com/',
    image: 'https://kulahlizeytinyagi.com/wp-content/uploads/logo.png'
  },
  'levi-farm': {
    website: 'https://levifarm.com/',
    image: 'https://levifarm.com/wp-content/uploads/2024/09/logo-white.png'
  },
  'monterosso': {
    website: 'https://monterosso.com.tr/',
    image: 'images/_logo-sources/monterosso-logo.png'
  },
  'ninurta': {
    website: 'https://ninurta.com.tr/',
    image: 'https://ninurta.com.tr/wp-content/uploads/2021/08/ninurta-logo.png'
  },
  'odesa': {
    website: 'https://odesaolive.com/',
    image: 'https://odesaolive.com/wp-content/uploads/2020/08/1000060735.png'
  },
  'oliova': {
    website: 'https://www.herbafarm.com.tr/oliova',
    image: 'https://static.wixstatic.com/media/2f3dbd_91ebbba1210648eba8a02af30de83f83~mv2.png/v1/fill/w_113,h_115,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/oliova%20logo.png'
  },
  'oliva-troas': {
    website: 'https://olivatroas.com/',
    image: 'https://olivatroas.com/storage/settings/November2024/YttWpipg6ceX6W6OlXbJ.png'
  },
  'oz-koyum': {
    website: 'https://www.ozkoyum.com/',
    image: 'https://www.ozkoyum.com/catalog/view/theme/ozkoyum/assets/images/logo/filigran.png'
  },
  'ugurlu-zeytinyaglari': {
    website: 'https://www.ugurluzeytinyaglari.com/',
    image: 'https://static.ticimax.cloud/56736//uploads/bankalogo/421919624-890305739767747-464029.jpg'
  },
  'zarbali': {
    website: 'https://zarbali.com/',
    image: 'https://zarbali.com/wp-content/uploads/2025/07/Logo-Zarbali.png'
  },
  'zelena': {
    website: 'https://zelenaolive.com/',
    image: 'https://cdn.myikas.com/images/theme-images/11a41409-2a90-4554-bb98-32c7809de9c1/image_1080.webp'
  },
  'zeytin-iskelesi': {
    website: 'https://shop.zeytiniskelesi.com/',
    image: 'https://shop.zeytiniskelesi.com/cdn/shop/files/logo_4e297952-9d71-46bb-8e7a-75d2e98885ea_4000x.png?v=1613506198'
  }
};

const REMOVALS = new Set([
  'ayvalik-han',
  'dino-ayvalik',
  'garbi-garden',
  'gulpinar',
  'hektor-s',
  'hemdem-via-ga',
  'karadag-zeytincilik',
  'meray',
  'naif-ege-zeytincilik',
  'orpir',
  'ozbey-17',
  'samandag-kadin-kooperatifi',
  'tavoliva',
  'tenedos',
  'troas',
  'true-olive',
  'vega-1923',
  'vivendi',
  'zeytin-hanim'
]);

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

function extractBrandsSource() {
  const source = fs.readFileSync(BRANDS_PATH, 'utf8');
  const match = source.match(/const brands = (\[[\s\S]*?\n\]);\n\nconst categoryLabels =/);
  if (!match) {
    throw new Error('Could not extract brands array from brands.js');
  }

  const sandbox = { console };
  vm.createContext(sandbox);
  vm.runInContext(`const brands = ${match[1]}; globalThis.__brands = brands;`, sandbox);
  return { source, brands: sandbox.__brands };
}

function writeBrandsSource(originalSource, nextBrands) {
  const nextArray = `const brands = ${JSON.stringify(nextBrands, null, 4)};`;
  const nextSource = originalSource.replace(
    /const brands = \[[\s\S]*?\n\];\n\nconst categoryLabels =/,
    `${nextArray}\n\nconst categoryLabels =`
  );
  fs.writeFileSync(BRANDS_PATH, nextSource);
}

const { source, brands } = extractBrandsSource();
const applied = [];
const removed = [];

const nextBrands = brands
  .filter((brand) => {
    const slug = normalizeSlug(brand.slug || brand.name);
    if (!REMOVALS.has(slug)) return true;
    removed.push({ id: brand.id, slug, name: brand.name });
    return false;
  })
  .map((brand) => {
    const slug = normalizeSlug(brand.slug || brand.name);
    const fix = FIXES[slug];
    if (!fix) return brand;
    applied.push({ id: brand.id, slug, name: brand.name, website: fix.website, image: fix.image });
    return {
      ...brand,
      website: fix.website,
      image: fix.image,
      logoFallback: ''
    };
  });

writeBrandsSource(source, nextBrands);

console.log(JSON.stringify({
  fixedCount: applied.length,
  removedCount: removed.length,
  fixed: applied,
  removed
}, null, 2));

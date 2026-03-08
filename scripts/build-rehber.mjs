import fs from 'fs';
import path from 'path';
import vm from 'vm';

const SITE_URL = 'https://zeytinyaglarimiz.com';
const KEYWORDS_CSV = process.env.KEYWORDS_CSV || '/Users/aytekin/Downloads/google_tr_zeytinyagi_matching-terms_2026-03-07_18-58-18.csv';
const TODAY = '2026-03-07';
const EXCLUDED_GUIDE_SLUGS = new Set([
  'guvenasa-zeytinyagi'
]);

const mediaSource = fs
  .readFileSync('brand-media.js', 'utf8')
  .replace('const brandMedia =', 'globalThis.brandMedia =');

const brandsSource = fs
  .readFileSync('brands.js', 'utf8')
  .replace('const brands =', 'globalThis.brands =')
  .replace('const categoryLabels =', 'globalThis.categoryLabels =')
  .replace('const regionClusterLabels =', 'globalThis.regionClusterLabels =')
  .replace('const oliveTypeLabels =', 'globalThis.oliveTypeLabels =');

const ctx = { URL };
vm.createContext(ctx);
vm.runInContext(mediaSource, ctx);
vm.runInContext(brandsSource, ctx);

const brands = ctx.brands;
const categoryLabels = ctx.categoryLabels;
const regionClusterLabels = ctx.regionClusterLabels;
const oliveTypeLabels = ctx.oliveTypeLabels;
const imageManifestPath = path.join(process.cwd(), 'data/rehber-image-manifest.json');
const imageManifest = fs.existsSync(imageManifestPath)
  ? JSON.parse(fs.readFileSync(imageManifestPath, 'utf8'))
  : {};

const imageLibrary = {
  bottle: {
    path: '../images/rehber/olive-oil-bottle.jpg',
    alt: 'Cam şişede zeytinyağı',
    caption: 'Natürel zeytinyağı şişesi',
    credit: 'Wikimedia Commons',
    source: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Olive_oil_from_Oneglia.jpg'
  },
  bottles: {
    path: '../images/rehber/olive-oil-bottles.jpg',
    alt: 'Farklı şişelerde zeytinyağı çeşitleri',
    caption: 'Farklı ambalajlarda zeytinyağı örnekleri',
    credit: 'Wikimedia Commons',
    source: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Bottles_of_Olive_Oil.jpg'
  },
  grove: {
    path: '../images/rehber/olive-grove.jpg',
    alt: 'Zeytinlik görünümü',
    caption: 'Üretim bölgesi ve terroir, yağın karakterini doğrudan etkiler',
    credit: 'Wikimedia Commons',
    source: 'https://upload.wikimedia.org/wikipedia/commons/4/49/20230108_165831_Olive_Grove.jpg'
  },
  harvest: {
    path: '../images/rehber/olive-harvest.jpg',
    alt: 'Zeytin hasadı',
    caption: 'Hasat zamanı ve işleme hızı kaliteyi belirleyen ana faktörlerdendir',
    credit: 'Wikimedia Commons',
    source: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Olive-Harvest-Sitia-Lasithi-Crete-Greece.jpg'
  },
  tasting: {
    path: '../images/rehber/olive-oil-tasting.jpg',
    alt: 'Zeytinyağı tadımı',
    caption: 'Meyvemsilik, acılık ve yakıcılık profesyonel tadımın temel eksenleridir',
    credit: 'Wikimedia Commons',
    source: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Olive_oil_tasting%2C_Portugal_%2853980355725%29.jpg'
  },
  salad: {
    path: '../images/rehber/olive-oil-salad.jpg',
    alt: 'Zeytinyağlı salata',
    caption: 'Zeytinyağı en çok soğuk uygulamalarda aromatik karakterini gösterir',
    credit: 'Wikimedia Commons',
    source: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Greek_Salad_Choriatiki.jpg'
  },
  bread: {
    path: '../images/rehber/olive-oil-bread.jpg',
    alt: 'Ekmek ve zeytinyağı',
    caption: 'Taze zeytinyağını ekmekle tadım yapmak aromayı anlamayı kolaylaştırır',
    credit: 'Wikimedia Commons',
    source: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Artisan_bread_with_olive_oil_and_salt.jpg'
  },
  cacik: {
    path: '../images/rehber/cacik-olive-oil.jpg',
    alt: 'Üzerinde zeytinyağı gezdirilmiş cacık',
    caption: 'Zeytinyağı sıcak ve soğuk servislerde farklı yoğunlukta hissedilir',
    credit: 'Wikimedia Commons',
    source: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Cac%C4%B1k_with_olive_oil.jpg'
  }
};

const sourceLibrary = {
  ioc: {
    label: 'International Olive Council - Olive Oil',
    url: 'https://www.internationaloliveoil.org/olive-world/olive-oil/'
  },
  harvardFats: {
    label: 'Harvard T.H. Chan - Fats and Cholesterol',
    url: 'https://nutritionsource.hsph.harvard.edu/what-should-you-eat/fats-and-cholesterol/'
  },
  cdcInfantFoods: {
    label: 'CDC - Foods and Drinks for 6 to 24 Month Olds',
    url: 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/index.html'
  },
  nhsEarwax: {
    label: 'NHS - Earwax build-up',
    url: 'https://www.nhs.uk/conditions/earwax-build-up/'
  },
  nhsEyeInjuries: {
    label: 'NHS - Eye injuries',
    url: 'https://www.nhs.uk/conditions/eye-injuries/'
  },
  medlineConstipation: {
    label: 'MedlinePlus - Constipation',
    url: 'https://medlineplus.gov/constipation.html'
  },
  ahaFats: {
    label: 'American Heart Association - Fats in Foods',
    url: 'https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats/fats-in-foods'
  },
  nhsKidney: {
    label: 'NHS - Kidney stones',
    url: 'https://www.nhs.uk/conditions/kidney-stones/'
  },
  guvenilirGida: {
    label: 'Tarım ve Orman Bakanlığı - Güvenilir Gıda Portalı',
    url: 'https://guvenilirgida.tarimorman.gov.tr/'
  },
  clevelandHair: {
    label: 'Cleveland Clinic - Oiling Your Hair',
    url: 'https://health.clevelandclinic.org/oiling-hair'
  },
  clevelandSkin: {
    label: 'Cleveland Clinic - Olive Oil for Skin',
    url: 'https://health.clevelandclinic.org/olive-oil-for-skin'
  },
  clevelandBenefits: {
    label: 'Cleveland Clinic - Benefits of Olive Oil',
    url: 'https://health.clevelandclinic.org/benefits-of-olive-oil'
  },
  clevelandCooking: {
    label: 'Cleveland Clinic - Healthy Cooking Oils',
    url: 'https://health.clevelandclinic.org/how-to-choose-and-use-healthy-cooking-oils'
  },
  nhsCough: {
    label: 'NHS - Cough',
    url: 'https://www.nhs.uk/symptoms/cough/'
  },
  usdaFdc: {
    label: 'USDA FoodData Central - Olive Oil',
    url: 'https://fdc.nal.usda.gov/fdc-app.html#/food-details/171413/nutrients'
  },
  kaliteGuide: {
    label: 'Zeytinyağlarımız - Kalite Rehberi',
    url: '../kalite-rehberi.html',
    internal: true
  }
};

const groupLabels = {
  general: 'Temel Rehberler',
  price: 'Fiyat ve Satın Alma',
  buying: 'Marka ve Seçim',
  nutrition: 'Kalori ve Porsiyon',
  quality: 'Kalite ve Doğrulama',
  varietal: 'Çeşit ve Üretim',
  brand: 'Marka Rehberleri',
  health: 'Sağlık ve Tüketim',
  baby: 'Bebek ve Çocuk',
  hair: 'Saç ve Kirpik',
  skin: 'Cilt ve Vücut',
  sensitive: 'Göz ve Kulak',
  cooking: 'Mutfakta Kullanım',
  cleaning: 'Temizlik ve Bakım',
  packaging: 'Ambalaj ve Saklama',
  equipment: 'Ekipman ve Üretim'
};

const typeLabels = {
  general: 'Temel',
  price: 'Fiyat',
  buying: 'Seçim',
  nutrition: 'Beslenme',
  quality: 'Kalite',
  varietal: 'Çeşit',
  brand: 'Marka',
  health: 'Tüketim',
  baby: 'Bebek',
  hair: 'Saç',
  skin: 'Cilt',
  eye: 'Göz',
  ear: 'Kulak',
  cooking: 'Mutfak',
  cleaning: 'Temizlik',
  packaging: 'Ambalaj',
  equipment: 'Ekipman'
};

const guideCategoryLabels = {
  general: 'Temel Rehberler',
  price: 'Fiyat',
  buying: 'Marka ve Seçim',
  nutrition: 'Beslenme',
  quality: 'Kalite',
  varietal: 'Çeşit ve Üretim',
  brand: 'Marka Rehberleri',
  health: 'Sağlık ve Tüketim',
  baby: 'Bebek ve Çocuk',
  hair: 'Saç ve Kirpik',
  skin: 'Cilt ve Vücut',
  eye: 'Göz',
  ear: 'Kulak',
  cooking: 'Mutfakta Kullanım',
  cleaning: 'Temizlik ve Bakım',
  packaging: 'Ambalaj ve Saklama',
  equipment: 'Ekipman ve Üretim'
};

const guideCategoryDescriptions = {
  general: 'Zeytinyağı hakkında temel tanımlar, seçim mantığı ve başlangıç noktaları bu sayfada bir araya gelir.',
  price: 'Fiyat, litre hesabı, market karşılaştırmaları ve satın alma kararları için rehber yazıları bir arada görün.',
  buying: 'Marka seçimi, ürün karşılaştırması ve ilk satın alma kararlarını kolaylaştıran rehberleri keşfedin.',
  nutrition: 'Kalori, gramaj, porsiyon ve günlük tüketim çerçevesinde hazırlanan beslenme odaklı yazıları inceleyin.',
  quality: 'Kalite, doğrulama, saflık ve saklama mantığını anlatan rehber içeriklere buradan ulaşın.',
  varietal: 'Ayvalık, Memecik ve benzeri çeşitlerle üretim farklarını anlatan rehberler bu başlık altında toplanır.',
  brand: 'Belirli markaları araştırırken ürün sınıfı, köken ve karşılaştırma mantığını kuran yazıları görün.',
  health: 'Sağlık, tüketim şekli ve günlük kullanım sınırlarıyla ilgili rehberleri aynı sayfada toplayın.',
  baby: 'Bebek ve çocuklarda zeytinyağı kullanımıyla ilgili temkinli rehber yazıları buradan inceleyin.',
  hair: 'Saç ve kirpik bakımında zeytinyağı kullanımına dair en çok aranan sorular aynı kategoride yer alır.',
  skin: 'Cilt ve vücut kullanımına dair uygulama, sınır ve bakım odaklı rehberler bu sayfada listelenir.',
  eye: 'Göz çevresi ve gözle ilgili riskli kullanımlar için güvenlik odaklı rehberlere buradan geçin.',
  ear: 'Kulakla ilgili uygulamalarda güvenlik sınırlarını anlatan rehber içerikleri aynı yerde görün.',
  cooking: 'Pişirme, kızartma ve mutfak kullanımında doğru yağ seçimini anlatan yazıları inceleyin.',
  cleaning: 'Temizlik ve bakım odaklı pratik rehberleri bu kategori sayfasında bir arada bulun.',
  packaging: 'Şişe, ambalaj ve saklama koşullarına dair kalite koruma rehberleri bu başlık altında toplanır.',
  equipment: 'Ev tipi makine ve üretim ekipmanlarıyla ilgili rehber yazılara bu sayfadan ulaşın.'
};

const brandAliasMap = new Map();
for (const brand of brands) {
  const baseAlias = ascii(brand.name);
  const aliases = new Set([
    baseAlias,
    baseAlias.replace(/ zeytinligi$/, ''),
    baseAlias.replace(/ zeytinyaglari$/, ''),
    baseAlias.replace(/ zeytinyagi$/, '')
  ]);
  for (const alias of aliases) {
    if (alias) brandAliasMap.set(alias, brand);
  }
}

function ascii(value) {
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
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function slugify(value) {
  return ascii(value).replace(/\s+/g, '-');
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));
}

function titleCase(value) {
  const str = String(value || '');
  return str.charAt(0).toLocaleUpperCase('tr-TR') + str.slice(1);
}

function groupKeyForKind(kind) {
  if (kind === 'eye' || kind === 'ear') return 'sensitive';
  return kind;
}

function guideCategoryForKind(kind) {
  const label = guideCategoryLabels[kind] || typeLabels[kind] || titleCase(kind);
  const slug = slugify(label);
  return {
    key: kind,
    label,
    slug,
    path: `rehber/kategori/${slug}.html`,
    href: `/rehber/kategori/${slug}.html`,
    description: guideCategoryDescriptions[kind] || `${label} odaklı zeytinyağı rehberleri.`
  };
}

function guideCategoriesFromArticles(articles) {
  const categories = new Map();
  for (const article of articles) {
    const category = article.category || guideCategoryForKind(article.kind);
    if (!categories.has(category.key)) {
      categories.set(category.key, { ...category, count: 0 });
    }
    categories.get(category.key).count += 1;
  }
  return [...categories.values()].sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, 'tr'));
}

function prettifyKeyword(value) {
  let result = ` ${String(value || '')} `;
  const replacements = [
    [/\bzeytinyagi\b/gi, 'zeytinyağı'],
    [/\bsizma\b/gi, 'sızma'],
    [/\bsoguk\b/gi, 'soğuk'],
    [/\bcay\b/gi, 'çay'],
    [/\btatli\b/gi, 'tatlı'],
    [/\bkasigi\b/gi, 'kaşığı'],
    [/\bkasik\b/gi, 'kaşık'],
    [/\bkac\b/gi, 'kaç'],
    [/\bkilo aldirirmi\b/gi, 'kilo aldırır mı'],
    [/\bzayiflatirmi\b/gi, 'zayıflatır mı'],
    [/\byukseltirmi\b/gi, 'yükseltir mi'],
    [/\byakarmi\b/gi, 'yakar mı'],
    [/\bdonar mi\b/gi, 'donar mı'],
    [/\bdonar mı\b/gi, 'donar mı'],
    [/\bverilirmi\b/gi, 'verilir mi'],
    [/\bdamlatilirmi\b/gi, 'damlatılır mı'],
    [/\bcikarirmi\b/gi, 'çıkarır mı'],
    [/\bcalistirirmi\b/gi, 'çalıştırır mı'],
    [/\bergitirmi\b/gi, 'eritir mi'],
    [/\bbozulurmu\b/gi, 'bozulur mu'],
    [/\bsurulurmu\b/gi, 'sürülür mü'],
    [/\bsurmek\b/gi, 'sürmek'],
    [/\bsurmenin\b/gi, 'sürmenin'],
    [/\bsurulur\b/gi, 'sürülür'],
    [/\bsaca\b/gi, 'saça'],
    [/\bsacta\b/gi, 'saçta'],
    [/\bsac\b/gi, 'saç'],
    [/\bkirpige\b/gi, 'kirpiğe'],
    [/\bkirpikleri\b/gi, 'kirpikleri'],
    [/\byuze\b/gi, 'yüze'],
    [/\byuz\b/gi, 'yüz'],
    [/\bgoze\b/gi, 'göze'],
    [/\bkulaga\b/gi, 'kulağa'],
    [/\bgoguse\b/gi, 'göğüse'],
    [/\bgobek\b/gi, 'göbek'],
    [/\bdeligine\b/gi, 'deliğine'],
    [/\bmakata\b/gi, 'makata'],
    [/\bvucuda\b/gi, 'vücuda'],
    [/\bcilde\b/gi, 'cilde'],
    [/\bbagirsaklari\b/gi, 'bağırsakları'],
    [/\bkabizliga\b/gi, 'kabızlığa'],
    [/\boksuruge\b/gi, 'öksürüğe'],
    [/\bbogazi\b/gi, 'boğazı'],
    [/\bbobrek\b/gi, 'böbrek'],
    [/\btasini\b/gi, 'taşını'],
    [/\bcocuga\b/gi, 'çocuğa'],
    [/\bbebege\b/gi, 'bebeğe'],
    [/\bbebege\b/gi, 'bebeğe'],
    [/\bbebeklere\b/gi, 'bebeklere'],
    [/\b1 aylik\b/gi, '1 aylık'],
    [/\bfaydalari\b/gi, 'faydaları'],
    [/\bfaydasi\b/gi, 'faydası'],
    [/\bfiyati\b/gi, 'fiyatı'],
    [/\bfiyatlari\b/gi, 'fiyatları'],
    [/\bmarkalari\b/gi, 'markaları'],
    [/\bgercek\b/gi, 'gerçek'],
    [/\bhakiki\b/gi, 'hakiki'],
    [/\bnasil\b/gi, 'nasıl'],
    [/\banlasilir\b/gi, 'anlaşılır'],
    [/\balis?\b/gi, 'al'],
    [/\bicmenin\b/gi, 'içmenin'],
    [/\bicmek\b/gi, 'içmek'],
    [/\bhergun\b/gi, 'her gün'],
    [/\bac karnina\b/gi, 'aç karnına'],
    [/\bcorekotu\b/gi, 'çörek otu'],
    [/\bzerdecal\b/gi, 'zerdeçal'],
    [/\bsarimsak\b/gi, 'sarımsak'],
    [/\byogurt\b/gi, 'yoğurt'],
    [/\bkarisimi\b/gi, 'karışımı'],
    [/\bkireclenmeye\b/gi, 'kireçlenmeye'],
    [/\bsikim\b/gi, 'sıkım'],
    [/\bfabrikasi\b/gi, 'fabrikası'],
    [/\bicirmek\b/gi, 'içirmek'],
    [/\bhaliya\b/gi, 'halıya'],
    [/\bdokulurse\b/gi, 'dökülürse'],
    [/\bmut\b/gi, 'Mut'],
    [/\bmemecik\b/gi, 'Memecik'],
    [/\bayvalik\b/gi, 'Ayvalık'],
    [/\bkomili\b/gi, 'Komili'],
    [/\bkristal\b/gi, 'Kristal'],
    [/\btaris\b/gi, 'Tariş'],
    [/\bmigros\b/gi, 'Migros'],
    [/\bbimde\b/gi, 'BİM’de'],
    [/\bguvenasa\b/gi, 'Guvenasa'],
    [/\bguven asa\b/gi, 'Güven Asa'],
    [/\bnermin hanim\b/gi, 'Nermin Hanım'],
    [/\bgemici\b/gi, 'Gemici'],
    [/\bmakasci ozcan\b/gi, 'Makascı Özcan'],
    [/\bnaturel\b/gi, 'natürel'],
    [/\bpolifenolu\b/gi, 'polifenolü'],
    [/\byuksek\b/gi, 'yüksek'],
    [/\bkizartma\b/gi, 'kızartma'],
    [/\bkizartmada\b/gi, 'kızartmada'],
    [/\bkullanilirmi\b/gi, 'kullanılır mı'],
    [/\bolurmu\b/gi, 'olur mu'],
    [/\blekesi\b/gi, 'lekesi'],
    [/\bdokulurse\b/gi, 'dökülürse'],
    [/\btemizlenir\b/gi, 'temizlenir'],
    [/\bsisesi\b/gi, 'şişesi'],
    [/\bmakinasi\b/gi, 'makinası'],
    [/\balim\b/gi, 'alım'],
    [/\bkilosu\b/gi, 'kilosu'],
    [/\biyi gelir mi\b/gi, 'iyi gelir mi'],
    [/\biyi gelirmi\b/gi, 'iyi gelir mi'],
    [/\bgerçek mi\b/gi, 'gerçek mi']
  ];

  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement);
  }

  result = result.replace(/\s+/g, ' ').trim();
  return titleCase(result);
}

function ensureDir(relDir) {
  fs.mkdirSync(path.join(process.cwd(), relDir), { recursive: true });
}

function writeFile(relPath, content) {
  const abs = path.join(process.cwd(), relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content);
}

function parseCsv(absPath) {
  const text = fs.readFileSync(absPath).toString('utf16le').replace(/^\uFEFF/, '');
  const parseLine = (line) => line.split('\t').map((cell) => cell.replace(/^"|"$/g, '').replace(/""/g, '"'));
  const lines = text.trim().split(/\r?\n/);
  const headers = parseLine(lines[0]);
  const index = Object.fromEntries(headers.map((header, idx) => [header, idx]));

  return lines.slice(1).map((line) => {
    const row = parseLine(line);
    return {
      keyword: row[index['Keyword']] || '',
      parentKeyword: row[index['Parent Keyword']] || '',
      volume: Number(row[index['Volume']] || 0),
      intents: (row[index['Intents']] || '').split(',').map((item) => item.trim()).filter(Boolean),
      difficulty: Number(row[index['Difficulty']] || 0),
      country: row[index['Country']] || '',
      cpc: row[index['CPC']] || ''
    };
  });
}

function nav(prefix, active = 'rehber') {
  return `
<nav id="navbar">
    <div class="nav-inner">
        <a href="${prefix}index.html" class="nav-logo">
            <img src="${prefix}logo.png" alt="Zeytinyağlarımız">
            <span>Zeytinyağlarımız</span>
        </a>
        <ul class="nav-links">
            <li><a href="${prefix}markalar.html" class="${active === 'markalar' ? 'active' : ''}">Zeytinyağları</a></li>
            <li><a href="${prefix}topic/index.html" class="${active === 'topic' ? 'active' : ''}">Zeytinyağı Çeşitleri</a></li>
            <li><a href="${prefix}bolgeler.html" class="${active === 'bolgeler' ? 'active' : ''}">Bölgeler</a></li>
            <li><a href="${prefix}kalite-rehberi.html" class="${active === 'kalite' ? 'active' : ''}">Zeytinyağı Kalitesi</a></li>
            <li><a href="${prefix}rehber/index.html" class="${active === 'rehber' ? 'active' : ''}">Rehber</a></li>
        </ul>
        <div class="nav-actions">
            <div class="nav-search">
                <button class="nav-search-toggle" type="button" aria-label="Marka ara" aria-expanded="false">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
                </button>
                <div class="nav-search-panel" hidden>
                    <form class="nav-search-form" role="search">
                        <label class="nav-search-input-shell">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
                            <input class="nav-search-input" type="search" placeholder="Marka ara" autocomplete="off" spellcheck="false">
                        </label>
                    </form>
                    <div class="nav-search-results"></div>
                </div>
            </div>
            <button class="nav-hamburger" onclick="toggleMobileNav()" aria-label="Menü">
                <span></span><span></span><span></span>
            </button>
        </div>
    </div>
</nav>
<div class="mobile-nav" id="mobileNav">
    <button class="mobile-nav-close" onclick="toggleMobileNav()" aria-label="Kapat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <a href="${prefix}markalar.html">Zeytinyağları</a>
    <a href="${prefix}topic/index.html">Zeytinyağı Çeşitleri</a>
    <a href="${prefix}bolgeler.html">Bölgeler</a>
    <a href="${prefix}kalite-rehberi.html">Zeytinyağı Kalitesi</a>
    <a href="${prefix}rehber/index.html">Rehber</a>
</div>`;
}

function footer(prefix) {
  return `
<footer>
    <div class="footer-inner">
        <h3>Zeytinyağlarımız</h3>
        <p>Türkiye'deki zeytinyağı markalarını, çeşitlerini ve bilgi arayan kullanıcıların en çok sorduğu konuları bir araya getiren bağımsız rehber.</p>
        <div class="footer-links">
            <a href="${prefix}index.html">Ana Sayfa</a>
            <a href="${prefix}markalar.html">Markalar</a>
            <a href="${prefix}topic/index.html">Zeytinyağı Çeşitleri</a>
            <a href="${prefix}rehber/index.html">Rehber</a>
            <a href="${prefix}zeytinyagi-websiteleri.html">Zeytinyağı Websiteleri</a>
            <a href="${prefix}kalite-rehberi.html">Kalite Rehberi</a>
            <a href="${prefix}bolgeler.html">Bölgeler</a>
        </div>
        <p class="copyright">&copy; 2026 zeytinyaglarimiz.com - Tüm hakları saklıdır.</p>
    </div>
</footer>`;
}

function breadcrumb(prefix, items) {
  const html = items.map((item, index) => {
    const last = index === items.length - 1;
    if (last || !item.url) return `<span>${escapeHtml(item.label)}</span>`;
    return `<a href="${item.url.startsWith('http') || item.url.startsWith('../') || item.url.startsWith('/') ? item.url : `${prefix}${item.url}`}">${escapeHtml(item.label)}</a><span aria-hidden="true">/</span>`;
  }).join('');
  return `<div class="breadcrumbs-wrap"><nav class="breadcrumbs" aria-label="Breadcrumb">${html}</nav></div>`;
}

function breadcrumbJson(canonicalPath, items) {
  const normalizedCanonical = canonicalPath.replace(/^\//, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.url
        ? item.url.startsWith('http')
          ? item.url
          : item.url.startsWith('/')
            ? `${SITE_URL}${item.url}`
          : `${SITE_URL}/${item.url.replace(/^\.?\/?/, '')}`
        : `${SITE_URL}/${normalizedCanonical}`
    }))
  };
}

function pageShell({ prefix, active = 'rehber', title, description, canonicalPath, breadcrumbItems, content, structuredData = [], extraHead = '', extraScript = '' }) {
  const canonical = `${SITE_URL}/${canonicalPath.replace(/^\//, '')}`;
  const schema = [breadcrumbJson(canonicalPath, breadcrumbItems), ...structuredData];

  return `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="robots" content="index,follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" type="image/png" href="${prefix}favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${prefix}style.css">
    ${extraHead}
</head>
<body>
${nav(prefix, active)}
${breadcrumb(prefix, breadcrumbItems)}
${content}
${footer(prefix)}
<button class="scroll-top" id="scrollTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Yukarı çık">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
</button>
<script src="${prefix}nav-search.js"></script>
<script>
function toggleMobileNav(){document.getElementById('mobileNav').classList.toggle('open');}
window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);document.getElementById('scrollTop').classList.toggle('show',window.scrollY>600);});
${extraScript}
</script>
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</body>
</html>`;
}

function truncate(text, max = 158) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}...`;
}

function paragraph(text) {
  return `<p>${escapeHtml(text)}</p>`;
}

function list(items, className = 'guide-list') {
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function section(title, paragraphs = [], bullets = [], extraHtml = '') {
  return {
    title,
    paragraphs,
    bullets,
    extraHtml
  };
}

function renderSections(sections) {
  return sections.map((item) => `
    <section class="guide-section">
      <h2>${escapeHtml(item.title)}</h2>
      ${item.paragraphs.map(paragraph).join('')}
      ${item.bullets.length ? list(item.bullets) : ''}
      ${item.extraHtml || ''}
    </section>
  `).join('');
}

function renderFigures(figures) {
  return `<div class="guide-figure-grid${figures.length === 1 ? ' single' : ''}">${figures.map((figure) => `
    <figure class="guide-figure">
      <img src="${escapeHtml(figure.path)}" alt="${escapeHtml(figure.alt)}" loading="lazy" onerror="this.closest('figure').style.display='none'">
      <figcaption>${escapeHtml(figure.caption)} - <a href="${escapeHtml(figure.source)}" target="_blank" rel="noopener">${escapeHtml(figure.credit)}</a></figcaption>
    </figure>
  `).join('')}</div>`;
}

function renderSources(items) {
  return `
    <section class="guide-section">
      <h2>Kaynaklar</h2>
      <div class="guide-source-list">
        ${items.map((item) => `<a class="guide-source-card" href="${escapeHtml(item.url)}" ${item.internal ? '' : 'target="_blank" rel="noopener"'}><strong>${escapeHtml(item.label)}</strong><span>${item.internal ? 'Site içi kaynak' : 'Dış kaynak'}</span></a>`).join('')}
      </div>
    </section>
  `;
}

function renderFaq(faq) {
  return `
    <section class="guide-section">
      <h2>Sık Sorulan Sorular</h2>
      <div class="guide-faq-list">
        ${faq.map((item) => `
          <details class="guide-faq-item">
            <summary>${escapeHtml(item.q)}</summary>
            <p>${escapeHtml(item.a)}</p>
          </details>
        `).join('')}
      </div>
    </section>
  `;
}

function renderRelatedGuides(items) {
  return `
    <section class="guide-section">
      <h2>İlgili Rehberler</h2>
      <div class="guide-link-grid">
        ${items.map((item) => `<a class="guide-link-card" href="${escapeHtml(item.href)}"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.groupLabel)}</span></a>`).join('')}
      </div>
    </section>
  `;
}

function renderGuideCards(items, { hrefBase = '', filterable = false } = {}) {
  return items.map((article) => `
    <a class="guide-card" href="${escapeHtml(`${hrefBase}${article.slug}.html`)}"${filterable ? ` data-group="${escapeHtml(article.groupKey)}" data-search="${escapeHtml(ascii(`${article.keyword} ${article.parentKeyword} ${article.title}`))}"` : ''}>
      <div class="guide-card-media"><img src="${escapeHtml(article.figures[0].path)}" alt="${escapeHtml(article.figures[0].alt)}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>
      <div class="guide-card-body">
        <div class="guide-card-top"><span class="guide-card-tag">${escapeHtml(article.typeLabel)}</span></div>
        <h2>${escapeHtml(article.title)}</h2>
        <p>${escapeHtml(article.metaDescription)}</p>
        <div class="guide-card-footer">
          <span>${escapeHtml(article.groupLabel)}</span>
          <span>${escapeHtml(article.parentDisplay || 'Detay rehber')}</span>
        </div>
      </div>
    </a>
  `).join('');
}

function renderGuideCategoryLinks(items, hrefBase = 'kategori/') {
  if (!items.length) return '';
  return `
    <div class="topic-link-list">
      ${items.map((item) => `<a class="topic-link" href="${escapeHtml(`${hrefBase}${item.slug}.html`)}">${escapeHtml(item.label)} (${escapeHtml(String(item.count))})</a>`).join('')}
    </div>
  `;
}

function renderGuideCategoryCard(category, href = `kategori/${category.slug}.html`) {
  return `
    <div class="guide-side-card">
      <h3>Rehber Kategorisi</h3>
      <div class="guide-side-links">
        <a href="${escapeHtml(href)}"><strong>${escapeHtml(category.label)}</strong><span>Bu kategorideki tüm yazıları gör</span></a>
      </div>
    </div>
  `;
}

function renderTopicLinks(items) {
  if (!items.length) return '';
  return `
    <div class="guide-side-card">
      <h3>Kategori Geçişleri</h3>
      <div class="guide-side-links">
        ${items.map((item) => `<a href="${escapeHtml(item.url)}"><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.note)}</span></a>`).join('')}
      </div>
    </div>
  `;
}

function measureCards() {
  return `
    <div class="guide-measure-grid">
      <div class="guide-measure-card"><span>1 yemek kaşığı</span><strong>yaklaşık 13,5 g</strong><small>yaklaşık 119-120 kcal</small></div>
      <div class="guide-measure-card"><span>1 tatlı kaşığı</span><strong>yaklaşık 9 g</strong><small>yaklaşık 80 kcal</small></div>
      <div class="guide-measure-card"><span>1 çay kaşığı</span><strong>yaklaşık 4,5 g</strong><small>yaklaşık 40 kcal</small></div>
    </div>
  `;
}

function polishContextBullet(text) {
  return String(text || '')
    .replace(/Parent keyword bağlantısı, /g, 'Bu aramalarda ')
    .replace(/Parent keyword bağlantısı özellikle /g, 'Bu konu özellikle ')
    .replace(/Parent keyword bağlantısı varsa /g, 'Bu tür aramalarda ')
    .replace(/Parent keyword bağlantısı; /g, 'Bu tür aramalarda ')
    .replace(/Parent keyword bağlantısı /g, 'Bu konu ')
    .replace(/Parent keyword çoğu zaman /g, 'Bu tür aramalarda ')
    .replace(/Parent keyword ilişkisi, /g, 'Bu aramalarda ')
    .replace(/Parent keyword ilişkisi /g, 'Bu aramalarda ')
    .replace(/Parent keyword, /g, 'Bu tür aramalarda ')
    .replace(/parent keyword ile birlikte /g, '')
    .replace(/Bağımsız sorgu/g, 'Detay rehber');
}

function contextSection(article, bullets = []) {
  const paragraphs = article.parentKeyword
    ? [
        `${article.displayKeyword} araştırılırken kullanıcılar çoğu zaman ${article.parentDisplay} gibi daha geniş sorulara da yanıt arar.`,
        'Bu rehber bu yüzden kısa cevabın yanında seçim, kullanım ve karşılaştırma kararını kolaylaştıran ana noktaları aynı sayfada toplar.'
      ]
    : [
        `${article.displayKeyword} başlığında kullanıcılar genellikle hızlı cevapla birlikte pratik kullanım detaylarını da görmek ister.`,
        'Bu rehber bu yüzden net yanıtın yanında günlük karar vermeyi kolaylaştıran kontrol noktalarını da sıralar.'
      ];

  const items = (bullets.length
    ? bullets
    : [
        'Bu konu genellikle tek bir kısa cevapla kapanmaz; seçim ve kullanım notları da önem taşır.',
        'Benzer başlıklarla birlikte okunduğunda karar vermek daha kolay hale gelir.',
        'Doğru karar için etiket, kullanım amacı ve güvenilir kaynak üçlüsüne birlikte bakmak gerekir.'
      ]).map(polishContextBullet);

  return section('Bu Konuda Neler Öne Çıkıyor?', paragraphs, items);
}

function safetyNote(kind, article) {
  if (kind === 'baby') {
    return {
      title: 'Güvenlik notu',
      text: '6 aydan küçük bebeklerde hekim önermedikçe anne sütü veya formül dışında bir şey vermeyin. Bebeklerde cilt veya beslenme amaçlı her kullanımda çocuk doktoru değerlendirmesi önceliklidir.'
    };
  }

  if (kind === 'eye') {
    return {
      title: 'Güvenlik notu',
      text: 'Göze steril olmayan yağ, damla veya karışım uygulamayın. Ağrı, batma, bulanık görme veya travma varsa tıbbi yardım alın.'
    };
  }

  if (kind === 'ear') {
    return {
      title: 'Güvenlik notu',
      text: 'Kulakta ağrı, akıntı, ateş, ameliyat öyküsü veya delik kulak zarı şüphesi varsa kulak içine hiçbir yağ damlatmayın.'
    };
  }

  if (['health', 'hair', 'skin'].includes(kind)) {
    return {
      title: 'Dikkat',
      text: `${article.displayKeyword} için internette dolaşan önerilerin önemli bir kısmı klinik tedavi yerine geçmez. Şikayetiniz sürüyorsa veya hassas bir bölgede uygulama düşünüyorsanız doktor ya da eczacı görüşü alın.`
    };
  }

  return null;
}

function detectKind(keyword) {
  const normalized = ascii(keyword);

  if (/(\bmigros\b|\bbimde\b|\bkomili\b|\bkristal\b|\btaris\b|\bnermin hanim\b|\bguvenasa\b|\bguven asa\b|\bgemici\b|\bmakasci ozcan\b)/.test(normalized)) return 'brand';
  if (/(\bgoze\b|\bgoz\b)/.test(normalized)) return 'eye';
  if (/(\bkulaga\b|\bkulak\b)/.test(normalized)) return 'ear';
  if (/(\bbebek\b|\bbebege\b|\bbebeklere\b|\b1 aylik\b|\bcocuga\b)/.test(normalized)) return 'baby';
  if (/(\bsac\b|\bsaca\b|\bsacta\b|\bkirpik\b|\bboyasina\b)/.test(normalized)) return 'hair';
  if (/(\byuz\b|\byuze\b|\bcilt\b|\bvucuda\b|\bgoguse\b|\bgobek\b|\bmakata\b)/.test(normalized)) return 'skin';
  if (/(\bleke|\bdokulurse\b|\bhaliya\b|\btemizlenir\b)/.test(normalized)) return 'cleaning';
  if (/(\bkizartma\b|\bkizartmada\b|\bkullanilirmi\b|\bolurmu\b)/.test(normalized)) return 'cooking';
  if (/(\bsisesi\b)/.test(normalized)) return 'packaging';
  if (/(\bmakinasi\b)/.test(normalized)) return 'equipment';
  if (/(\bkalori\b|\bkac gr\b|\bkac kalori\b|\bkasigi\b)/.test(normalized)) return 'nutrition';
  if (/(\bal\b|\bmarkalari\b|\ben iyi\b|\bhangi zeytinyagi\b|\bhangi\b)/.test(normalized) && !/(\bdonar\b|\bnasil anlasilir\b|\bbozulur\b|\bbogazi yakar\b)/.test(normalized)) return 'buying';
  if (/(\bfiyat|\blitre\b|\b5 lt\b|\bkilosu\b|\balim fiyati\b)/.test(normalized)) return 'price';
  if (/(\bdonar|\bbogazi yak|\bnasil anlasilir|\bgercek|\bhakiki|\bsahte|\bbozulur|\bdayanir)/.test(normalized)) return 'quality';
  if (/(\bsoguk\b|\bsizma\b|\bnaturel\b|\borganik\b|\bpolifenol\b|\bmemecik\b|\bayvalik\b|\bmut\b|\briviera\b)/.test(normalized)) return 'varietal';
  if (/(\bfaydalari|\bfaydasi|\bicmek|\bkabizliga|\bbagirsak|\boksuruge|\bkilo\b|\bzayiflat|\bkolesterol|\bbobrek|\bkireclenme|\bac karnina|\bhergun|\bgunde ne kadar|\bishal|\blimon|\bsirke|\byogurt|\bcorekotu|\bsarimsak|\bincir|\byumurta)/.test(normalized)) return 'health';
  return 'general';
}

function detectSubkind(article) {
  const normalized = ascii(article.keyword);

  if (article.kind === 'quality') {
    if (/\bsahte\b/.test(normalized)) return 'fake-list';
    if (/\bdonar/.test(normalized)) return 'fridge-test';
    if (/\bbogazi yak/.test(normalized)) return 'pungency';
    if (/\bbozulur\b|\bdayanir\b/.test(normalized)) return 'storage';
    return 'authenticity';
  }

  if (article.kind === 'varietal') {
    if (/\bsoguk\b/.test(normalized)) return 'cold-pressed';
    if (/\borganik\b/.test(normalized)) return 'organic';
    if (/\bpolifenol\b/.test(normalized)) return 'polyphenol';
    if (/\bmemecik\b/.test(normalized)) return 'memecik';
    if (/\bayvalik\b/.test(normalized)) return 'ayvalik';
    if (/\bmut\b/.test(normalized)) return 'mut';
    if (/\briviera\b/.test(normalized)) return 'riviera-difference';
    if (/\bnaturel\b/.test(normalized)) return 'natural-extra-virgin';
    return 'extra-virgin';
  }

  if (article.kind === 'brand') {
    if (/\bmigros\b|\bbimde\b/.test(normalized)) return 'retailer';
    if (article.matchedBrand) return 'matched-brand';
    return 'brand-research';
  }

  if (article.kind === 'health') {
    if (/\bkabizliga\b|\bbagirsak\b|\bishal\b/.test(normalized)) return 'digestive';
    if (/\boksuruge\b/.test(normalized)) return 'cough';
    if (/\bkolesterol\b/.test(normalized)) return 'cholesterol';
    if (/\bbobrek\b|\bkireclenme\b/.test(normalized)) return 'kidney-joint';
    if (/\bkilo aldir|\bzayiflat/.test(normalized)) return 'weight';
    if (/\bac karnina\b|\bhergun\b|\bgunde ne kadar\b|\bicmek\b/.test(normalized)) return 'daily-use';
    if (/\blimon\b|\bsirke\b|\byogurt\b|\bcorekotu\b|\bsarimsak\b|\bincir\b|\byumurta\b/.test(normalized)) return 'mixture';
    return 'benefits';
  }

  if (article.kind === 'baby') {
    if (/\b1 aylik\b/.test(normalized)) return 'newborn';
    if (/\bcocuga\b/.test(normalized)) return 'child';
    if (/\bbebek zeytinyagi\b/.test(normalized)) return 'baby-oil';
    return 'infant';
  }

  if (article.kind === 'hair') {
    if (/\bsarimsak\b/.test(normalized)) return 'garlic-mix';
    if (/\bboyasina\b/.test(normalized)) return 'hair-dye';
    if (/\bkirpik\b/.test(normalized)) return 'eyelash';
    if (/\bcikarirmi\b/.test(normalized)) return 'hair-growth';
    if (/\bne kadar kalmali\b/.test(normalized)) return 'duration';
    if (/\bhergun\b/.test(normalized)) return 'daily';
    if (/\bnasil uygulanir\b|\bsurulurmu\b/.test(normalized)) return 'application';
    return 'benefits';
  }

  if (article.kind === 'skin') {
    if (/\bgobek\b/.test(normalized)) return 'navel';
    if (/\bgoguse\b/.test(normalized)) return 'chest';
    if (/\bmakata\b/.test(normalized)) return 'anal';
    if (/\bvucuda\b/.test(normalized)) return 'body';
    if (/\bcilt\b/.test(normalized)) return 'skin';
    return 'face';
  }

  if (article.kind === 'nutrition') {
    if (/\bkac gr\b/.test(normalized)) return 'grams';
    return 'calories';
  }

  if (article.kind === 'price') {
    if (/\b5\b|\blitre\b|\blt\b/.test(normalized)) return 'bulk';
    if (/\balim fiyati\b/.test(normalized)) return 'purchase-price';
    return 'generic-price';
  }

  if (article.kind === 'buying') {
    if (/\bmarkalari\b/.test(normalized)) return 'brand-list';
    return 'best-choice';
  }

  return 'default';
}

function findMatchedBrand(keyword) {
  const normalized = ascii(keyword);
  for (const [alias, brand] of brandAliasMap.entries()) {
    if (alias && normalized.includes(alias)) return brand;
  }
  return null;
}

function articleImages(article) {
  const manifestFigure = imageManifest[article.slug];
  if (manifestFigure) {
    return [manifestFigure];
  }

  if (article.kind === 'brand' && article.matchedBrand) {
    const brandBottle = Array.isArray(article.matchedBrand.bottleImages) ? article.matchedBrand.bottleImages[0] : null;
    if (brandBottle) {
      return [{
        path: brandBottle,
        alt: `${article.matchedBrand.name} zeytinyağı şişesi`,
        caption: `${article.matchedBrand.name} ürün görseli`,
        credit: article.matchedBrand.name,
        source: article.matchedBrand.website || brandBottle
      }];
    }
    return [imageLibrary.bottles];
  }

  const map = {
    general: ['bottle', 'grove'],
    price: ['bottles', 'harvest'],
    buying: ['bottles', 'tasting'],
    nutrition: ['bottle', 'salad'],
    quality: ['tasting', 'bottle'],
    varietal: ['harvest', 'grove'],
    health: ['bottle', 'salad'],
    baby: ['bottle', 'grove'],
    hair: ['bottle', 'grove'],
    skin: ['bottle', 'grove'],
    eye: ['bottle', 'grove'],
    ear: ['bottle', 'grove'],
    cooking: ['bread', 'cacik'],
    cleaning: ['bottle', 'bread'],
    packaging: ['bottles', 'bottle'],
    equipment: ['harvest', 'bottle']
  };

  return (map[article.kind] || ['bottle', 'grove']).map((key) => imageLibrary[key]);
}

function relatedTopics(article) {
  const items = [];
  const normalized = ascii(article.keyword);
  const push = (url, label, note) => {
    if (!items.some((item) => item.url === url)) items.push({ url, label, note });
  };

  push('../rehber/index.html', 'Zeytinyağı Rehberi', 'Tüm rehber yazıları');

  if (['quality', 'varietal', 'price', 'buying', 'cooking', 'packaging'].includes(article.kind)) {
    push('../kalite-rehberi.html', 'Kalite Rehberi', 'Etiket, saklama ve kalite kriterleri');
  }

  if (/\bayvalik\b/.test(normalized)) push('../topic/zeytin-cesitleri/ayvalik.html', 'Ayvalık', 'Ayvalık zeytininden üretilen markalar');
  if (/\bmemecik\b/.test(normalized)) push('../topic/zeytin-cesitleri/memecik.html', 'Memecik', 'Memecik odaklı üreticiler');
  if (/\bmut\b/.test(normalized)) push('../topic/bolgeler/akdeniz.html', 'Akdeniz Bölgesi', 'Mut ve çevresi üretim hattı');
  if (/\borganik\b/.test(normalized)) push('../topic/kategoriler/organik.html', 'Organik Markalar', 'Organik üretim odaklı markalar');
  if (/\bsoguk\b|\bsizma\b|\bpolifenol\b/.test(normalized)) push('../topic/kategoriler/premium-butik.html', 'Premium / Butik', 'Erken hasat ve yüksek kalite odaklı markalar');
  if (/\bmarmara\b|\bgemlik\b|\btrilye\b/.test(normalized)) push('../topic/bolgeler/marmara.html', 'Marmara Bölgesi', 'Gemlik ve Trilye hattı');
  if (/\bayvalik\b|\bedremit\b|\bmilas\b|\burla\b|\bege\b/.test(normalized)) push('../topic/bolgeler/ege.html', 'Ege Bölgesi', 'Ege zeytinyağı markaları');
  if (article.matchedBrand) {
    if (article.matchedBrand.categoryTopicUrl) push(`../${article.matchedBrand.categoryTopicUrl}`, categoryLabels[article.matchedBrand.category] || 'Kategori', 'İlgili kategori sayfası');
    if (article.matchedBrand.regionTopicUrl) push(`../${article.matchedBrand.regionTopicUrl}`, article.matchedBrand.regionClusterLabel || article.matchedBrand.region, 'Bölge geçişi');
  }

  return items.slice(0, 5);
}

function articleSources(article) {
  const keys = new Set(['kaliteGuide']);
  const subkind = article.subkind;

  if (article.kind === 'nutrition') {
    keys.add('usdaFdc');
    keys.add('harvardFats');
    keys.add('ahaFats');
  }

  if (article.kind === 'quality') {
    keys.add('ioc');
    keys.add('guvenilirGida');
  }

  if (article.kind === 'varietal') {
    keys.add('ioc');
    if (subkind === 'organic') keys.add('guvenilirGida');
  }

  if (article.kind === 'buying' || article.kind === 'price') {
    keys.add('ioc');
    keys.add('guvenilirGida');
  }

  if (article.kind === 'brand') {
    keys.add('ioc');
  }

  if (article.kind === 'health') {
    keys.add('harvardFats');
    keys.add('ahaFats');
    keys.add('clevelandBenefits');
    if (subkind === 'digestive') keys.add('medlineConstipation');
    if (subkind === 'cough') keys.add('nhsCough');
    if (subkind === 'kidney-joint') keys.add('nhsKidney');
    if (subkind === 'weight' || subkind === 'daily-use') keys.add('usdaFdc');
  }

  if (article.kind === 'baby') {
    keys.add('cdcInfantFoods');
    keys.add('clevelandSkin');
  }

  if (article.kind === 'hair') {
    keys.add('clevelandHair');
    if (subkind === 'eyelash') keys.add('nhsEyeInjuries');
  }

  if (article.kind === 'skin') {
    keys.add('clevelandSkin');
  }

  if (article.kind === 'eye') {
    keys.add('nhsEyeInjuries');
  }

  if (article.kind === 'ear') {
    keys.add('nhsEarwax');
  }

  if (article.kind === 'cooking') {
    keys.add('clevelandCooking');
    keys.add('ioc');
  }

  if (article.matchedBrand?.website) {
    return [
      ...[...keys].map((key) => sourceLibrary[key]).filter(Boolean),
      { label: `${article.matchedBrand.name} resmi sitesi`, url: article.matchedBrand.website }
    ];
  }

  return [...keys].map((key) => sourceLibrary[key]).filter(Boolean);
}

function relatedGuides(article, allArticles) {
  const currentTokens = new Set(ascii(article.keyword).split(' '));
  return allArticles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => {
      const candidateTokens = ascii(candidate.keyword).split(' ');
      let score = 0;
      if (candidate.kind === article.kind) score += 6;
      if (candidate.parentKeyword && article.parentKeyword && ascii(candidate.parentKeyword) === ascii(article.parentKeyword)) score += 5;
      for (const token of candidateTokens) if (currentTokens.has(token)) score += 1;
      if (candidate.groupKey === article.groupKey) score += 2;
      return { candidate, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.candidate.volume - a.candidate.volume;
    })
    .slice(0, 4)
    .map((item) => ({
      href: `${item.candidate.slug}.html`,
      title: item.candidate.title,
      groupLabel: item.candidate.groupLabel
    }));
}

function buildArticleSummary(article) {
  const suffix = article.parentKeyword
    ? `${article.parentDisplay} gibi ilgili sorulara da yanıt verir.`
    : 'Sayfa, aynı konu etrafındaki pratik seçim ve kullanım sorularını da kapsar.';
  return `${article.directAnswer} ${suffix}`;
}

function composeArticle(article) {
  const normalized = ascii(article.keyword);
  const sourceIntro = article.parentKeyword
    ? `Bu içerik, ${article.parentDisplay} gibi yakın sorularda da işinize yarayacak pratik notlar içerir.`
    : 'Bu içerik konuya doğrudan ve pratik bir cevap verecek şekilde hazırlandı.';

  if (article.kind === 'general') {
    return {
      title: `${article.displayKeyword}: seçim, kalite ve kullanım rehberi`,
      lead: 'en temel zeytinyağı sorularını sistematik biçimde açıklayan',
      directAnswer: 'Zeytinyağı seçerken tek bir ölçüte bakmak yetmez. Yağın sınıfı, tazeliği, bölgesi, ambalajı ve nerede kullanılacağı birlikte değerlendirilmelidir.',
      takeaways: [
        'Natürel sızma günlük sofrada ve soğuk kullanımlarda en çok aranan sınıftır.',
        'Fiyatı tek başına kalite kanıtı saymak doğru değildir; tazelik ve izlenebilirlik daha belirleyicidir.',
        'Koyu cam veya teneke ambalaj, ışığa karşı daha koruyucu bir tercih sunar.',
        'Mutfak kullanımında amaç belirlemek, doğru zeytinyağı sınıfına daha hızlı götürür.'
      ],
      sections: [
        section('Zeytinyağı denince hangi türler anlaşılır?', [
          'Günlük kullanımda en çok karşılaşılan başlıklar natürel sızma, natürel birinci ve riviera sınıflarıdır. Tüketici için temel fark; duyusal kalite, işleme yöntemi ve kullanım amacında ortaya çıkar.',
          'Natürel sızma yağlar meyvemsi karakterlerini daha güçlü korurken, riviera daha nötr tat isteyen ve sıcak kullanım arayan tüketicide öne çıkar.'
        ], [
          'Sofra ve salata odaklı alımda natürel sızma önce gelir.',
          'Yoğun aroma arayan kullanıcılar erken hasat ve soğuk sıkım ifadelerine bakar.',
          'Aile tüketimi yüksekse litre başı maliyet ayrıca hesaplanmalıdır.'
        ]),
        contextSection(article, [
          'Geniş sorgular kullanıcıyı çoğu zaman fiyat, kalite ve marka karşılaştırmasına birlikte götürür.',
          'Parent keyword bağlantısı özellikle satın alma kararı aşamasında önem kazanır.',
          'Bu yüzden rehber yalnızca tanım vermez; seçim mantığını da özetler.'
        ]),
        section('Satın alırken 5 kritik kontrol', [
          'Etikette ürün sınıfı, varsa hasat yılı, ambalaj tipi ve üretici bilgisi görünür olmalıdır. Güven veren ürünler çoğu zaman köken ve işleme bilgisini saklamaz.',
          'İlk kez alışveriş yapıyorsanız küçük hacimli şişeyle başlamak, hem aromayı hem de sizin damak tercihinizi anlamayı kolaylaştırır.'
        ], [
          'Koyu cam ya da teneke tercih edin.',
          'Açıldıktan sonra hızlı tüketebileceğiniz hacmi seçin.',
          'Şeffaf rafta uzun süre beklemiş ürünlere temkinli yaklaşın.',
          'Aroma, acılık ve yakıcılığı birlikte değerlendirin.'
        ]),
        section('Hangi kullanım için hangi yağ?', [
          'Ekmeğe banma, salata ve son dokunuş uygulamalarında taze ve aromatik natürel sızma yağlar öne çıkar. Yemek içinde kaybolmasını istemediğiniz bir karakter arıyorsanız meyvemsi yağlara yönelmek mantıklıdır.',
          'Yüksek hacimli mutfak kullanımında ise hem fiyat hem tadın baskınlığı birlikte hesaba katılır. Burada daha dengeli profilli ürünler pratik olabilir.'
        ], [
          sourceIntro,
          'Kalite rehberindeki saklama ve etiket okuma bölümleri bu sayfanın doğal devamıdır.'
        ])
      ],
      faq: [
        { q: 'Natürel sızma ile riviera arasındaki en pratik fark nedir?', a: 'Natürel sızma daha aromatik ve duyusal olarak daha zengin kabul edilir; riviera ise daha nötr ve geniş mutfak kullanımına yatkındır.' },
        { q: '5 litre zeytinyağı almak mantıklı mı?', a: 'Tüketim hızınız yüksekse litre başı maliyet avantajlı olabilir; ancak yavaş tüketimde tazelik kaybı yaşanabilir.' },
        { q: 'Buzdolabı testi güvenilir mi?', a: 'Hayır. Soğukta kıvam değişimi görülebilir ama bu tek başına saflık testi değildir.' },
        { q: 'En iyi zeytinyağı herkese göre aynı mı?', a: 'Hayır. Kullanım amacı, damak tercihi, bütçe ve güven duyulan üreticiye göre değişir.' }
      ]
    };
  }

  if (article.kind === 'price') {
    const isBulk = article.subkind === 'bulk';
    return {
      title: `${article.displayKeyword}: fiyatı nasıl yorumlamalı?`,
      lead: 'fiyat okuma ve karşılaştırma kararını kolaylaştıran',
      directAnswer: 'Zeytinyağında doğru fiyat, yalnızca en düşük etiketi bulmak değildir. Aynı hacimdeki iki ürün arasında sınıf, hasat zamanı, ambalaj, bölge ve marka güveni ciddi fark yaratabilir.',
      takeaways: [
        '5 litre gibi büyük hacimlerde litre başı maliyet düşebilir, fakat tazelik daha hızlı yönetilmelidir.',
        'Erken hasat, premium butik üretim ve koyu cam ambalaj genellikle fiyatı yükseltir.',
        'Raf kampanyaları kalıcı fiyat seviyesini yansıtmayabilir.',
        'Fiyat karşılaştırması yaparken mutlaka ürün sınıfını da aynı satırda değerlendirin.'
      ],
      sections: [
        section(isBulk ? 'Büyük hacimde fiyat neden değişir?' : 'Zeytinyağı fiyatını ne belirler?', [
          isBulk
            ? '5 litre ve benzeri büyük paketlerde üretici daha düşük ambalaj maliyetiyle çalışabilir. Bu yüzden litre başı maliyet çoğu zaman küçük şişelere göre daha avantajlı görünür.'
            : 'Natürel sızma olup olmaması, soğuk sıkım ibaresi, hasat biçimi, ambalaj ve marka pozisyonu aynı ürünü farklı fiyat seviyelerine taşır.',
          'Fiyat araştıran kullanıcı için asıl mesele, gördüğü etiketin hangi kalite katmanını satın aldığını anlayabilmektir.'
        ], [
          'Litre karşılaştırmasını aynı ürün sınıfı içinde yapın.',
          'Erken hasat ve özel seri yağlarda premium fark bekleyin.',
          'Şişe veya teneke seçimi fiyatı etkiler.'
        ]),
        contextSection(article, [
          'Parent keyword çoğu zaman kullanıcının tek fiyat değil, güvenilir fiyat aradığını gösterir.',
          'Fiyat sorguları genellikle marka, market ve kalite sorgularıyla birlikte akar.',
          'Bu sayfa bu yüzden yalnızca etiket okumayı değil, fiyat arkasındaki üretim mantığını da açıklar.'
        ]),
        section('Fiyat karşılaştırmasında hızlı kontrol listesi', [
          'Aynı ürün sınıfını kıyaslamadan yapılan fiyat yorumu yanıltıcı olur. Natürel sızma ile riviera, erken hasat ile standart hasat ya da teneke ile koyu cam arasında doğrudan eşleştirme doğru değildir.',
          'Market ve e-ticaret kampanyalarında birim fiyatı ayrı, tazelik ve güvenilirliği ayrı izlemek gerekir.'
        ], [
          'Önce ürün sınıfını eşitleyin.',
          'Sonra litre başı maliyete bakın.',
          'En son marka güveni ve köken bilgisini ekleyin.'
        ]),
        section(isBulk ? '5 litre mi küçük şişe mi?' : 'Fiyat/performans ne zaman oluşur?', [
          isBulk
            ? 'Aile tüketimi düzenliyse 5 litre paket ekonomik olabilir. Ancak yağı aylarca açıkta tutmak kaliteyi aşağı çeker; bu nedenle büyük paketi daha küçük koyu cam şişelere bölerek kullanmak mantıklıdır.'
            : 'Fiyat/performans, ihtiyacınıza uygun yağ sınıfını gereğinden pahalıya almamakla oluşur. Salata için aromatik yağ seçmek mantıklıyken, yoğun kızartma için aynı profile gereğinden fazla ödeme yapmak zorunda değilsiniz.'
        ], [sourceIntro])
      ],
      faq: [
        { q: '5 litre her zaman daha ucuz mu?', a: 'Birim maliyette çoğunlukla avantaj sağlar; ama tazelik kaybı yaşanırsa gerçek avantaj azalır.' },
        { q: 'Kampanyalı zeytinyağı alınır mı?', a: 'Alınabilir; ancak ürün sınıfı, ambalaj ve tarih bilgisi yine kontrol edilmelidir.' },
        { q: 'Litre mi kilogram mı baz alınmalı?', a: 'Tüketici karşılaştırmalarında litre daha pratiktir; ürünler çoğu zaman hacim üzerinden sunulur.' },
        { q: 'Fiyat düşükse ürün kötüdür diyebilir miyiz?', a: 'Hayır. Ancak düşük fiyatı anlamak için ürün sınıfı ve marka güvenilirliği mutlaka birlikte okunmalıdır.' }
      ]
    };
  }

  if (article.kind === 'buying') {
    return {
      title: `${article.displayKeyword}: seçim ve karşılaştırma rehberi`,
      lead: 'marka seçimini kullanım amacına bağlayan',
      directAnswer: 'Tek bir "en iyi" zeytinyağı yoktur. En iyi tercih, kullanım amacına, damak profiline, bütçeye ve güvendiğiniz üretici yapısına göre değişir.',
      takeaways: [
        'Salata, kahvaltı ve tadım için natürel sızma öncelikli düşünülmelidir.',
        'Büyük aile tüketiminde market markaları ile butik üreticiler farklı avantajlar sunar.',
        'Marka seçerken yalnızca popüler isme değil, etiket şeffaflığına bakmak gerekir.',
        'Aynı markanın farklı serileri farklı kalite katmanlarında olabilir.'
      ],
      sections: [
        section('Önce kullanım senaryosunu tanımlayın', [
          'Alışveriş kararı, ürünün nerede kullanılacağı netleşince daha kolay verilir. Kahvaltı ve salatada aromatik, meyvemsi, canlı yağlar değer kazanırken; günlük sıcak yemeklerde daha dengeli ve bütçe dostu seçenekler öne çıkabilir.',
          'Bu ayrımı yapmadan sadece marka adı üzerinden karar vermek hem bütçeyi hem beklentiyi zorlayabilir.'
        ]),
        contextSection(article, [
          'Geniş seçim sorguları kullanıcıyı marka ve kalite rehberleri arasında dolaştırır.',
          'Parent keyword ilişkisi, tek ürün önerisinden çok seçim mantığı beklendiğini gösterir.',
          'Bu yüzden içeriğe benzer markalar ve konu geçişleri de eklendi.'
        ]),
        section('Etikette ve ürün sayfasında ne aramalı?', [
          'Ürün sınıfı, üretici adı, köken bilgisi, ambalaj tipi ve varsa hasat yılı kullanıcıya ciddi bir güven sinyali verir. Şeffaf bilgi sunan markalar karşılaştırmayı kolaylaştırır.',
          'Büyük markalarda seri isimleri arasında ciddi fark olabilir; butik markalarda ise parti bazlı değişim görülebilir.'
        ], [
          'Natürel sızma ibaresi',
          'Koyu cam ya da teneke ambalaj',
          'Köken ve üretici bilgisi',
          'İhtiyaca uygun hacim'
        ]),
        section('Market markası mı butik üretici mi?', [
          'Market markaları erişilebilirlik ve geniş dağıtım avantajı sunar. Butik üreticiler ise çoğu zaman daha belirgin aromatik profil, küçük parti üretim ve izlenebilir hikaye ile öne çıkar.',
          'İdeal seçim, kullanıcının ne kadar sıklıkla tükettiğine ve aromadan ne beklediğine bağlıdır.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'En iyi zeytinyağı markası nasıl seçilir?', a: 'Kullanım amacı, ürün sınıfı, etiket şeffaflığı ve güven duyulan üretici dengesiyle seçilir.' },
        { q: 'Butik marka her zaman daha mı iyidir?', a: 'Hayır. Butik olmak kalite potansiyeli yaratır ama iyi üretim disiplini yine şarttır.' },
        { q: 'Market markalarında neye bakmalıyım?', a: 'Seri adı, ürün sınıfı, hacim, ambalaj ve kampanya dışında normal fiyat seviyesine bakın.' },
        { q: 'İlk kez alırken hangi hacim mantıklı?', a: 'Önce küçük hacim deneyip beğenirseniz daha büyük pakete geçmek daha sağlıklı olur.' }
      ]
    };
  }

  if (article.kind === 'nutrition') {
    const isGrams = article.subkind === 'grams';
    return {
      title: `${article.displayKeyword}: gram ve kalori hesabı`,
      lead: 'ölçü dönüşümünü pratik mutfak kararına çeviren',
      directAnswer: isGrams
        ? 'Standart beslenme hesaplarında 1 yemek kaşığı zeytinyağı yaklaşık 13,5 gram kabul edilir. Çay kaşığı ve tatlı kaşığı ölçüleri ise kaşığın hacmine göre küçük oynamalar gösterebilir.'
        : 'Standart hesapta 1 yemek kaşığı zeytinyağı yaklaşık 119-120 kcal kabul edilir. Enerji değeri ürünün sızma ya da riviera olmasından çok miktarına bağlıdır.',
      takeaways: [
        'Kaşık bazlı ölçüler pratik rehberdir; hassas sonuç için tartı daha güvenilir olur.',
        'Kalori değeri kaliteyi değil, miktarı anlatır.',
        'Zeytinyağı doymamış yağ profili nedeniyle dengeli beslenmede tercih edilir ama yine de enerji yoğundur.',
        'Tatlı kaşığı ve çay kaşığı gibi ölçülerde günlük farklar porsiyon toplamını etkileyebilir.'
      ],
      sections: [
        section('Standart ölçüler nasıl okunmalı?', [
          'Beslenme tabloları ve diyet uygulamaları kaşık ölçülerini genellikle standart hacim üzerinden hesaplar. Evde kullanılan kaşıkların gerçek hacmi değişebildiği için küçük sapmalar normaldir.',
          'Bu yüzden özellikle kalori takibi yapan kullanıcı için tek seferlik kesinlikten çok ortalama hesap mantığı önemlidir.'
        ], [], measureCards()),
        contextSection(article, [
          'Kalori hesabı yapan kullanıcılar çoğu zaman porsiyon yönetimi ve kilo kontrolü için net bir ölçü arar.',
          'Parent keyword bağlantısı kullanıcının yalnızca sayı değil, günlük kullanım rehberi de aradığını gösterir.',
          'Bu rehber ölçüyü, pratik yemek kullanımına bağlayarak açıklar.'
        ]),
        section('Kalori neyi söyler, neyi söylemez?', [
          'Kalori değeri ürünün enerji yoğunluğunu açıklar; fakat tazelik, duyusal kalite ya da köken hakkında bilgi vermez. Aynı miktardaki sızma ve riviera yağların enerjisi birbirine yakındır.',
          'Bu nedenle kalori hesabı ayrı, kalite tercihi ayrı bir karar alanı olarak okunmalıdır.'
        ], [
          'Kalori değeri bir porsiyon aracıdır.',
          'Kalite değerlendirmesi için etiket ve duyusal profil gerekir.'
        ]),
        section('Porsiyon yönetiminde pratik yaklaşım', [
          'Zeytinyağını şişeden doğrudan dökmek yerine kaşıkla ya da ölçü kabıyla kullanmak günlük toplamı daha görünür hale getirir. Özellikle salata ve son dokunuşlarda fark edilmeden yüksek miktara çıkmak kolaydır.',
          'İyi yağ seçmek önemlidir; ama iyi yağı ne kadar kullandığınız da en az o kadar önemlidir.'
        ], [sourceIntro])
      ],
      faq: [
        { q: '1 yemek kaşığı zeytinyağı kaç kaloridir?', a: 'Standart hesapta yaklaşık 119-120 kcal kabul edilir.' },
        { q: '1 yemek kaşığı zeytinyağı kaç gramdır?', a: 'Pratik beslenme hesaplarında yaklaşık 13,5 gram kabul edilir.' },
        { q: '1 çay kaşığı ve 1 tatlı kaşığı arasında ne fark var?', a: '1 tatlı kaşığı genellikle 1 çay kaşığından büyük hacim taşır; bu nedenle kalori ve gram farkı belirgindir.' },
        { q: 'Sızma zeytinyağının kalorisi daha mı düşüktür?', a: 'Hayır. Kalori farkı sınıf farkından çok miktarla ilişkilidir.' }
      ]
    };
  }

  if (article.kind === 'quality') {
    const scenarios = {
      'fake-list': {
        answer: 'Sürekli güncel, evrensel bir "sahte zeytinyağı listesi" beklemek doğru değildir. Güvenilir yaklaşım; resmi denetim duyurularını, geri çağırmaları ve üretici şeffaflığını takip etmektir.',
        title: `${article.displayKeyword}: resmi kaynaklarla nasıl kontrol edilir?`
      },
      'fridge-test': {
        answer: 'Zeytinyağının soğukta donması ya da bulanıklaşması tek başına saflık kanıtı değildir. Buzdolabı testi popüler olsa da güvenilir kalite doğrulama yöntemi sayılmaz.',
        title: `${article.displayKeyword}: buzdolabı testi gerçekten işe yarar mı?`
      },
      pungency: {
        answer: 'Boğazda hafif yakıcılık, özellikle taze ve polifenolü güçlü yağlarda olumlu duyusal işaret olabilir. Ama yakıcılık tek başına kalite veya saflık garantisi değildir.',
        title: `${article.displayKeyword}: kalite işareti mi, efsane mi?`
      },
      storage: {
        answer: 'Zeytinyağı bozulabilir; ışık, sıcaklık ve hava teması kaliteyi düşürür. Dayanım süresi markaya, ambalaja ve saklama koşuluna göre değişir.',
        title: `${article.displayKeyword}: saklama ve raf ömrü rehberi`
      },
      authenticity: {
        answer: 'Gerçek ve iyi zeytinyağını anlamak için tek bir ev testi yoktur. En güvenilir yaklaşım; etiket, üretici şeffaflığı, duyusal denge ve resmi denetim bilgilerini birlikte okumaktır.',
        title: `${article.displayKeyword}: güvenilir kontrol listesi`
      }
    };
    const current = scenarios[article.subkind] || scenarios.authenticity;
    return {
      title: current.title,
      lead: 'kalite sinyallerini abartıdan ayıran',
      directAnswer: current.answer,
      takeaways: [
        'Buzdolabı testi ve tek belirtiye dayalı internet efsaneleri yeterli değildir.',
        'Etiket şeffaflığı, ürün sınıfı ve üretici bilgisi en sağlam başlangıç noktasıdır.',
        'Meyvemsilik, acılık ve yakıcılık duyusal olarak birlikte değerlendirilmelidir.',
        'Şüpheli ürünlerde resmi denetim ve geri çağırma kanallarını takip etmek gerekir.'
      ],
      sections: [
        section('Tek teste güvenmek neden riskli?', [
          'Zeytinyağı hakkında yaygın dolaşan kısa testlerin çoğu bir işaret verebilir ama kesin hüküm sağlamaz. Soğukta kıvam değişimi, boğazda yakıcılık veya renk gibi unsurlar tek başına karar için yetersizdir.',
          'Kaliteli değerlendirme; ürün sınıfı, tazelik, aroma ve güvenilir üretici bilgisinin birleşimiyle yapılır.'
        ]),
        contextSection(article, [
          'Kalite sorguları çoğu zaman satın alma sorgularından hemen önce gelir.',
          'Parent keyword bağlantısı, kullanıcının doğrulama sonrasında marka veya fiyat karşılaştırmasına geçtiğini düşündürür.',
          'Bu nedenle rehber kalite sinyallerini karar ağacına dönüştürür.'
        ]),
        section('Pratik doğrulama listesi', [
          'Alışveriş anında tüketicinin elindeki en güçlü veri, etikettir. Ürün sınıfı, ambalaj, üretici adı ve varsa hasat yılı birlikte okunmalıdır.',
          'Şüphe durumunda kamuya açık denetim ve taklit-tağşiş duyurularını kontrol etmek, rastgele sosyal medya listelerinden daha güvenilirdir.'
        ], [
          'Ürün sınıfını doğrulayın.',
          'Köken ve üretici bilgisini kontrol edin.',
          'Koyu cam veya teneke tercih edin.',
          'Resmi duyuru kanallarını takip edin.'
        ]),
        section('Kaliteyi saklamayla korumak', [
          'İyi bir yağın kalitesini satın aldıktan sonra korumak da en az seçimi kadar önemlidir. Ocağın yanı, şeffaf pencere önü ve gevşek kapaklı kullanım kaliteyi hızla aşağı çeker.',
          'Küçük şişeye bölerek tüketmek ve açıldıktan sonra uzun süre bekletmemek pratikte en yararlı önlemlerden biridir.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'Zeytinyağının donması saflık kanıtı mı?', a: 'Hayır. Soğukta kıvam değişimi görülebilir ama bu tek başına güvenilir test değildir.' },
        { q: 'Boğazda yakması iyi olduğu anlamına mı gelir?', a: 'Bazı taze yağlarda olumlu bir duyusal işaret olabilir; ancak tek başına kalite garantisi değildir.' },
        { q: 'Sahte ürünleri nasıl takip ederim?', a: 'En güvenilir yaklaşım resmi denetim ve geri çağırma duyurularını izlemektir.' },
        { q: 'Bozulmayı en çok ne hızlandırır?', a: 'Işık, sıcaklık ve hava teması.' }
      ]
    };
  }

  if (article.kind === 'varietal') {
    const map = {
      'cold-pressed': 'Soğuk sıkım ifadesi, işleme sırasında sıcaklığın kontrollü tutulduğunu anlatır; amaç aromayı ve kaliteyi daha iyi korumaktır.',
      organic: 'Organik zeytinyağı, sertifikalı organik tarım ve işleme zinciri içinde üretilen ürünleri ifade eder.',
      polyphenol: 'Polifenolü yüksek yağlar genellikle daha belirgin acılık ve yakıcılık taşır; bu her damak için otomatik olarak "daha iyi" anlamına gelmez.',
      memecik: 'Memecik zeytinyağı genellikle güçlü, aromatik ve belirgin karakter arayan kullanıcıların ilgisini çeker.',
      ayvalik: 'Ayvalık zeytinyağı dengeli meyvemsilik ve erişilebilir içim profiliyle geniş bir kullanıcı kitlesine hitap eder.',
      mut: 'Mut zeytinyağı sorgusu çoğu zaman bölgesel karakter ve fiyat/üretim kökeni bilgisini birlikte taşır.',
      'riviera-difference': 'Sızma ve riviera arasındaki temel fark, üretim yöntemi ve duyusal profilde ortaya çıkar.',
      'natural-extra-virgin': 'Natürel sızma terimi, duyusal kusuru olmayan ve mekanik yöntemlerle elde edilen en çok aranan sofralık sınıfı işaret eder.',
      'extra-virgin': 'Sızma zeytinyağı, tazelik ve duyusal denge arayan kullanıcıların başlangıç noktasıdır.'
    };
    return {
      title: `${article.displayKeyword}: ne demek, nasıl seçilir?`,
      lead: 'terim bilgisini aromatik ve satın alma kararına bağlayan',
      directAnswer: map[article.subkind] || map['extra-virgin'],
      takeaways: [
        'Terim bilgisi, doğru kullanım ve fiyat beklentisini birlikte kurar.',
        'Çeşit ve bölge bilgisi tadım beklentisini daha doğru ayarlamayı sağlar.',
        'Aromatik yoğunluk her zaman herkes için en iyi seçim anlamına gelmez.',
        'Etiket üzerinde kullanılan niteliklerin üretici şeffaflığıyla desteklenmesi gerekir.'
      ],
      sections: [
        section('Terim ya da bölge ne anlatıyor?', [
          'Zeytinyağında kullanılan tanımlar yalnızca pazarlama dili değildir; çoğu zaman üretim tekniği, aroma profili ya da bölgesel karakter hakkında ipucu verir.',
          'Kullanıcı için önemli olan nokta, bu terimi kendi tüketim amacıyla eşleştirmektir. Güçlü aromalı bir yağı seven tüketici ile daha yumuşak profilli yağ arayan kişi aynı etiketi farklı okuyabilir.'
        ]),
        contextSection(article, [
          'Parent keyword, kullanıcıların ana terim üzerinden daha geniş kalite ve fiyat kararına geçtiğini gösterir.',
          'Bu nedenle rehber tanımın yanında kullanım ve seçim mantığını da verir.',
          'Benzer marka ve konu geçişleri, bu konuyu farklı açılardan incelemeyi kolaylaştırır.'
        ]),
        section('Tat profili ve kullanım alanı', [
          'Ayvalık, Memecik ya da polifenol vurgusu gibi başlıklar, çoğu zaman aromatik profil beklentisini yönetir. Dengeli, hafif içimli yağ ile yoğun, biberimsi yağ arasında mutfak ve damak kullanım farkı olabilir.',
          'Soğuk sıkım ve natürel sızma gibi terimlerde ise seçim daha çok kalite hedefi ve ürünün sofradaki rolüyle ilgilidir.'
        ], [
          'Salata ve son dokunuşta aromatik yağlar daha görünür olur.',
          'Günlük sıcak yemekte daha dengeli profiller tercih edilebilir.',
          'Bölgesel çeşit bilgisi marka seçiminde önemli bir kısa yol sunar.'
        ]),
        section('Satın alırken nelere bakmalı?', [
          'Terim doğru olsa bile ürünün nasıl işlendiği ve nasıl sunulduğu hâlâ önemlidir. Aynı başlık altında çok farklı kalite seviyeleri bulunabilir.',
          'Bu yüzden çeşit ya da terimi sevdiğinizde, onu taşıyan güvenilir üretici ve seri yapısını bulmak en sağlıklı yaklaşımdır.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'Soğuk sıkım her zaman daha mı iyi?', a: 'Kalite potansiyeli açısından güçlü bir işarettir ama üretim disiplini yine belirleyicidir.' },
        { q: 'Polifenolü yüksek yağ herkese uygun mu?', a: 'Yoğun acılık ve yakıcılık taşıyabilir; damak tercihi ve kullanım amacı önemlidir.' },
        { q: 'Ayvalık ve Memecik arasındaki seçim nasıl yapılır?', a: 'Damaktaki beklenti, aroma yoğunluğu ve marka güveni birlikte değerlendirilmelidir.' },
        { q: 'Organik ibaresi kalite garantisi midir?', a: 'Organik sertifikasyon önemlidir ama duyusal kalite ve tazelik ayrıca değerlendirilmelidir.' }
      ]
    };
  }

  if (article.kind === 'brand') {
    const isRetailer = article.subkind === 'retailer';
    const targetName = article.matchedBrand ? article.matchedBrand.name : article.displayKeyword;
    return {
      title: `${article.displayKeyword}: marka ve ürün değerlendirmesi`,
      lead: 'marka aramasını seçim mantığına dönüştüren',
      directAnswer: isRetailer
        ? `${article.displayKeyword} arandığında kullanıcılar çoğu zaman belirli bir market rafındaki seçenekleri kıyaslar. Burada kritik olan, market adı değil aynı raftaki ürün sınıflarını doğru okuyabilmektir.`
        : article.matchedBrand
          ? `${targetName} için doğru değerlendirme; markanın ürün sınıfı, seri yapısı, bölgesi ve sizin kullanım amacınız birlikte düşünülerek yapılmalıdır.`
          : `${article.displayKeyword} gibi marka sorgularında önce resmi site, üretici bilgisi, ürün sınıfı ve varsa bölgesel köken kontrol edilmelidir. İsme bakarak karar vermek yeterli değildir.`,
      takeaways: [
        'Aynı marka ya da market çatısı altında farklı kalite seviyelerinde ürünler olabilir.',
        'Marka değerlendirmesinde seri adı ve ürün sınıfı kritik rol oynar.',
        'Raf karşılaştırmasında hacim ve fiyat kadar köken ve ambalaj da önemlidir.',
        'Marka sayfası ile rehber içeriği birlikte okununca daha sağlam karar alınır.'
      ],
      sections: [
        section(isRetailer ? 'Market rafı nasıl okunur?' : 'Markayı nasıl okumalı?', [
          isRetailer
            ? 'Migros ya da BİM gibi perakende sorgularında tüketici aslında tek bir ürünü değil, aynı raftaki alternatifleri karşılaştırmak ister. Bu nedenle fiyat etiketi kadar ürünün sınıfına, şişe hacmine ve seri yapısına bakmak gerekir.'
            : article.matchedBrand
              ? `${targetName} araması çoğu zaman markanın kendisini değil, markanın hangi ürünüyle öne çıktığını anlamak için yapılır. Markanın bölgesi, kategori konumu ve varsa zeytin çeşidi, ürün beklentisini doğru kurar.`
              : 'Marka belirsiz ya da veri dışı olduğunda en sağlıklı yol; resmi site, iletişim bilgisi, üretim kökeni ve ürün açıklamasının ne kadar açık olduğuna bakmaktır.',
          'Marka adı tek başına yetmez; aynı isim altında farklı seri ve ambalajlar birbirinden ayrılmalıdır.'
        ]),
        contextSection(article, [
          'Marka sorguları çoğu zaman fiyat ve kalite sorgularına bağlanır.',
          'Parent keyword ilişkisi markanın sadece adıyla değil, alım kararıyla birlikte arandığını gösterir.',
          'Bu nedenle rehber, marka aramasını seçim listesine dönüştürür.'
        ]),
        section('Karşılaştırmayı hangi başlıklarla yapmalı?', [
          'Ürün sınıfı, bölge, ambalaj, hacim ve fiyat seviyesi aynı tabloda okunmalıdır. Özellikle market sorgularında etiketin ön yüzü ile arka yüzündeki bilgi yoğunluğu arasında büyük fark olabilir.',
          article.matchedBrand
            ? `${targetName} ile benzer markaları kıyaslarken en yararlı yaklaşım; aynı kategori ve benzer bölgedeki üreticilere bakmaktır.`
            : 'Belirsiz markalarda iadeye, müşteri hizmetlerine ve resmi ürün bilgisinin tutarlılığına da bakmak gerekir.'
        ], [
          'Ürün sınıfını eşitleyin.',
          'Aynı hacimde fiyat kıyaslayın.',
          'Marka güvenini üretici şeffaflığı üzerinden okuyun.'
        ]),
        section(article.matchedBrand ? `${targetName} için pratik okuma` : 'Marka araştırma kontrol listesi', [
          article.matchedBrand
            ? `${targetName} için en güçlü başlangıç noktası, markanın resmi ürün sayfalarıyla bizim marka kataloğundaki konumunu birlikte okumaktır. Böylece ürün ailesi ve bölgesel bağlam aynı anda görünür.`
            : 'Resmi site yoksa, ürün bilgisi belirsizse veya yalnızca kampanya dili varsa temkinli olmak gerekir. İyi marka araştırması, görünür bilgi ve izlenebilirlik üzerine kurulur.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'Marka sorgusunda ilk neye bakmalıyım?', a: 'Ürün sınıfı, resmi site ve üretici bilgisi ilk kontrol noktalarıdır.' },
        { q: 'Market ismi kaliteyi belirler mi?', a: 'Hayır. Aynı markette çok farklı kalite katmanlarında ürün bulunabilir.' },
        { q: 'Aynı markanın tüm ürünleri aynı kalitede midir?', a: 'Hayır. Seri, hasat ve ambalaj yapısı kalite algısını değiştirebilir.' },
        { q: 'Markayı hangi benzerlerle kıyaslamalıyım?', a: 'Önce aynı kategori ve benzer bölgedeki alternatiflerle.' }
      ]
    };
  }

  if (article.kind === 'health') {
    const answers = {
      digestive: 'Zeytinyağı bazı kullanıcılar için bağırsak hareketini destekleyen bir beslenme unsuru olabilir; ancak kabızlık ya da ishal gibi durumlarda tek başına tedavi gibi düşünülmemelidir.',
      cough: 'Zeytinyağının öksürüğü tedavi ettiğine dair güçlü klinik kanıt yoktur. Kısa süreli boğaz yumuşatma hissi olabilir; ama inatçı öksürükte standart tıbbi değerlendirme gerekir.',
      cholesterol: 'Zeytinyağı, doymuş yağların yerine geçtiğinde daha iyi bir yağ profili sunabilir; fakat kolesterol yönetimi toplam beslenme düzeni ve laboratuvar takibiyle değerlendirilir.',
      'kidney-joint': 'Zeytinyağı-limon gibi karışımların böbrek taşı eritmesi ya da kireçlenmeyi çözmesi için güçlü klinik kanıt yoktur. Bu tür iddialar tedaviyi geciktirmemelidir.',
      weight: 'Zeytinyağı ne tek başına zayıflatan ne de otomatik kilo aldıran bir ürün değildir. Sonuç, toplam enerji dengesi ve porsiyonla belirlenir.',
      'daily-use': 'Her gün zeytinyağı tüketmek birçok beslenme modelinde yer alabilir; ancak miktar ve toplam günlük enerji dengesi hâlâ belirleyicidir.',
      mixture: 'Yoğurt, çörek otu, sarımsak, limon ya da sirke ile yapılan karışımlar popülerdir; fakat bunların çoğu için tedavi düzeyinde kanıt sınırlıdır. Karışımın doğal olması otomatik olarak güvenli veya etkili olduğu anlamına gelmez.',
      benefits: 'Zeytinyağının beslenmede yeri güçlüdür; ancak internette dolaşan çok geniş sağlık iddialarının önemli bölümü abartılıdır. Doğru yaklaşım, onu dengeli bir beslenme bileşeni olarak görmekten geçer.'
    };
    return {
      title: `${article.displayKeyword}: araştırma, kullanım ve sınırlar`,
      lead: 'beslenme bilgisini tedavi iddiasından ayıran',
      directAnswer: answers[article.subkind] || answers.benefits,
      takeaways: [
        'Zeytinyağı beslenmede değerli olabilir; ama ilaç ya da tedavi yerine geçmez.',
        'Popüler karışım tarifleri için güçlü kanıt çoğu zaman sınırlıdır.',
        'Günlük miktar belirlerken porsiyon ve toplam enerji dengesi hesaba katılmalıdır.',
        'Uzayan şikayetlerde internetteki öneriler yerine klinik değerlendirme gerekir.'
      ],
      sections: [
        section('Araştırma neyi destekliyor?', [
          'Zeytinyağının doymamış yağ içeriği ve Akdeniz tipi beslenmedeki yeri iyi bilinir. Buna karşın öksürükten böbrek taşına kadar uzanan geniş halk önerilerinin çoğu, aynı güçte klinik desteğe sahip değildir.',
          'Bu nedenle kullanıcı için en yararlı çerçeve; beslenme değeri olan iddia ile tedavi vaadi arasındaki çizgiyi net görmektir.'
        ]),
        contextSection(article, [
          'Sağlık odaklı bu başlıklarda kullanıcılar çoğu zaman tek fayda cevabından daha fazlasını arar.',
          'Kullanıcılar çoğu zaman önce fayda sorusunu, sonra güvenlik ve miktar sorusunu sorar.',
          'Bu rehber her iki soruyu aynı sayfada karşılar.'
        ]),
        section('Uygulamada nerede abartı başlar?', [
          'Boş mideye içmek, karışım hazırlamak veya belirli bir şikayeti çözmek için tek başına zeytinyağına yüklenmek çoğu zaman beklentiyi gereksiz yükseltir. Özellikle kronik şikayetlerde bu yaklaşım gerçek tedaviyi geciktirebilir.',
          'Faydayı sürdürülebilir hale getiren şey, zeytinyağını bütün bir beslenme ve yaşam tarzı çerçevesine yerleştirmektir.'
        ], [
          'Miktarı ölçerek kullanın.',
          'Şikayeti tedavi etmek için değil, beslenmeyi iyileştirmek için düşünün.',
          'Belirti sürüyorsa profesyonel destek alın.'
        ]),
        section('Günlük kullanım için daha güvenli yaklaşım', [
          'Zeytinyağını salata, kahvaltı, sebze yemeği veya kontrollü sıcak kullanım içinde değerlendirmek, onu bir mucize reçete gibi kullanmaktan daha gerçekçidir.',
          'Karışım sorgularında ise özellikle çiğ, alerjen veya mideyi zorlayabilecek bileşenleri birlikte kullanırken daha temkinli olmak gerekir.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'Zeytinyağı tek başına zayıflatır mı?', a: 'Hayır. Sonuç toplam enerji dengesi ve porsiyon yönetimine bağlıdır.' },
        { q: 'Kabızlıkta işe yarar mı?', a: 'Bazı kullanıcılar için yardımcı olabilir; ama kalıcı kabızlıkta temel yaklaşım su, lif, hareket ve gerekirse tıbbi değerlendirmedir.' },
        { q: 'Öksürükte kullanılabilir mi?', a: 'Klinik tedavi yerine geçmez; uzun süren öksürükte değerlendirme gerekir.' },
        { q: 'Karışım tarifleri güvenilir mi?', a: 'Popüler olabilirler; fakat çoğu için güçlü kanıt sınırlıdır ve her bünyeye uygun olmayabilir.' }
      ]
    };
  }

  if (article.kind === 'baby') {
    const answers = {
      newborn: '1 aylık bir bebeğe zeytinyağını ağızdan vermek uygun bir rutin değildir. Bu dönemde hekim aksi söylemedikçe temel beslenme anne sütü veya formül üzerinden ilerler.',
      child: 'Çocuğa zeytinyağı içirmek şeklindeki uygulamalar rutin çözüm gibi görülmemelidir. Kullanım amacı mutlaka net olmalı ve pediatrik değerlendirme öncelik taşımalıdır.',
      'baby-oil': 'Bebek zeytinyağı ifadesi bazen kozmetik bazen de yenilebilir ürün anlamında kullanılır. Bu iki kullanım alanını birbirine karıştırmamak gerekir.',
      infant: 'Bebeklere zeytinyağı verme konusu yaş, kullanım amacı ve eşlik eden sağlık durumuna göre değişir. Özellikle küçük bebeklerde kulaktan dolma öneriyle hareket edilmemelidir.'
    };
    return {
      title: `${article.displayKeyword}: bebeklerde güvenli yaklaşım`,
      lead: 'bebek bakımını internet tavsiyesinden ayıran',
      directAnswer: answers[article.subkind] || answers.infant,
      takeaways: [
        'Küçük bebeklerde beslenme kararları internet önerisiyle değil, çocuk doktoru çerçevesiyle verilir.',
        'Ağızdan kullanım ile ciltte kullanım aynı başlık değildir.',
        'Bebek cildi daha hassastır; her doğal ürün otomatik olarak uygun sayılmaz.',
        '6 aydan küçük bebeklerde beslenme özellikle dikkatle yönetilmelidir.'
      ],
      sections: [
        section('Beslenme açısından temel çerçeve', [
          'Bebeklerde ağızdan verilen her ürün yaşa ve beslenme planına göre değerlendirilir. Özellikle yenidoğan ve erken süt çocukluğu döneminde spontan ek uygulamalar doğru yaklaşım değildir.',
          'Zeytinyağı beslenmede yer bulabilecek bir gıda olsa da zamanlama ve miktar pediatrik bağlamdan bağımsız düşünülmemelidir.'
        ]),
        contextSection(article, [
          'Bu tür sorgularda kullanıcı çoğu zaman hızlı ev çözümü arar.',
          'Parent keyword bağlantısı; güvenlik, yaş ve kullanım amacı sorularını birlikte doğurur.',
          'Bu rehber bu yüzden önce güvenlik sınırını çizer.'
        ]),
        section('Ciltte kullanım ile ağızdan kullanım aynı şey değildir', [
          'Bazı aileler zeytinyağını masaj, kuru bölge veya bakım amacıyla düşünür; bazıları ise ağızdan vermeyi sorar. Bu iki durumun risk profili farklıdır.',
          'Bebek cildinde uygulanacak her ürün için küçük alanda deneme yapmak ve tahriş olursa bırakmak önemlidir.'
        ], [
          'Ağızdan kullanım için yaş ve doktor görüşü esastır.',
          'Ciltte kullanımda küçük alanda deneme yapılmalıdır.',
          'Tahriş veya kusma gibi belirtilerde uygulama durdurulmalıdır.'
        ]),
        section('Ne zaman doktora danışmalı?', [
          'Kabızlık, kilo alımı, kusma, cilt sorunu veya iştah kaybı gibi altta yatan bir şikayet varsa önce bu problemin nedeni değerlendirilmelidir. Zeytinyağını çözüm gibi kullanmak temel sorunu perdeleyebilir.',
          'Pratikte en güvenli yaklaşım, yaşı küçük olan bebeklerde çocuk doktorunu işin başına koymaktır.'
        ], [sourceIntro])
      ],
      faq: [
        { q: '1 aylık bebeğe zeytinyağı verilir mi?', a: 'Hekim yönlendirmesi olmadan bu yaklaşım uygun kabul edilmez.' },
        { q: 'Bebek zeytinyağı ile yenilebilir zeytinyağı aynı şey mi?', a: 'Hayır. Kozmetik ürün ile gıda ürünü ayrı değerlendirilmelidir.' },
        { q: 'Kabızlık için zeytinyağı verilebilir mi?', a: 'Bu karar yaşa ve genel sağlık durumuna göre çocuk doktoruyla birlikte verilmelidir.' },
        { q: 'Bebek cildine sürülebilir mi?', a: 'Bazı durumlarda düşünülse de hassasiyet nedeniyle küçük alanda deneme ve temkin önemlidir.' }
      ]
    };
  }

  if (article.kind === 'hair') {
    const answers = {
      'garlic-mix': 'Sarımsaklı zeytinyağı karışımları internette sık önerilir; ancak saç çıkarma etkisi için güçlü kanıt yoktur ve tahriş riski belirgindir.',
      'hair-dye': 'Saç boyasına zeytinyağı eklemek ürünün performansını öngörülemez biçimde değiştirebilir. Üreticinin formülüne dışarıdan müdahale etmek her zaman iyi fikir değildir.',
      eyelash: 'Zeytinyağının kirpiği uzattığına dair güçlü kanıt yoktur. Göz çevresine yakın kullanımda tahriş ve bulanıklık riski daha önemlidir.',
      'hair-growth': 'Zeytinyağı saç telini yumuşatabilir; fakat yeni saç çıkarması için güçlü kanıt yoktur.',
      duration: 'Zeytinyağını saçta bırakma süresi saç tipine göre değişir; çoğu kullanıcı için kısa, kontrollü uygulama daha dengeli sonuç verir.',
      daily: 'Her gün zeytinyağı sürmek çoğu saç tipinde ağırlaşma ve birikim yapabilir.',
      application: 'Zeytinyağı saç bakımında daha çok yumuşatma ve parlaklık amacıyla kullanılır; doğru uygulama miktar ve bölge kontrolüyle yapılır.',
      benefits: 'Zeytinyağı saç tellerini yumuşatmaya yardımcı olabilir; ancak internetin büyüttüğü birçok saç çıkarma iddiası kanıt açısından zayıftır.'
    };
    return {
      title: `${article.displayKeyword}: saç bakımında gerçekten işe yarar mı?`,
      lead: 'kozmetik beklentiyi gerçek etkiyle dengeleyen',
      directAnswer: answers[article.subkind] || answers.benefits,
      takeaways: [
        'Saç telini yumuşatma ile saç çıkarma iddiası aynı şey değildir.',
        'Yoğun uygulama özellikle diplerde ağırlaşma ve kalıntı bırakabilir.',
        'Sarımsak gibi karışımlar tahriş riskini artırabilir.',
        'Göz çevresine ve kirpik dibine yaklaşan uygulamalar ekstra dikkat ister.'
      ],
      sections: [
        section('Gerçekçi beklenti ne olmalı?', [
          'Zeytinyağı saç bakımında en çok emolyan yani yumuşatıcı etkisi nedeniyle kullanılır. Kuru uçlarda parlaklık ve kayganlık hissi yaratabilir.',
          'Buna karşılık saç kökünü yeniden üretme, kirpik uzatma veya dökülmeyi tek başına durdurma gibi iddialar çok daha güçlü kanıt gerektirir.'
        ]),
        contextSection(article, [
          'Saç sorgularında kullanıcılar genellikle hızlı ve doğal çözüm ister.',
          'Parent keyword bağlantısı uygulama süresi, sıklığı ve karışım güvenliği gibi ikinci soruları beraberinde getirir.',
          'Bu rehber bu yüzden etkiyi ve riski aynı ekranda toplar.'
        ]),
        section('Nasıl uygulanır ve nerede durmalı?', [
          'Uygulama düşünülüyorsa yağı saçın boy ve uçlarına daha kontrollü vermek, diplerde birikme riskini azaltır. Çoğu kullanıcı için kısa süreli uygulama ve ardından iyi durulama daha dengeli sonuç verir.',
          'Tahriş, kepek artışı, göz yanması veya ağırlaşma varsa uygulamayı bırakmak gerekir.'
        ], [
          'Önce küçük miktarla deneyin.',
          'Saç diplerinden çok boy ve uçlara odaklanın.',
          'Göz çevresine taşırmayın.',
          'Karışım tariflerinde ekstra tahriş riskini hesaba katın.'
        ]),
        section('Doğal karışımlar neden her zaman güvenli değil?', [
          'Sarımsak, baharat ya da farklı yağları bir araya getirmek internette güçlü vaatlerle sunulabilir. Ancak doğal karışımlar da tahriş, alerjik reaksiyon ve saçlı deri hassasiyetine yol açabilir.',
          'Dökülme veya saçlı deri sorunu devam ediyorsa asıl fayda, nedeni doğru değerlendirmekten gelir.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'Zeytinyağı saç çıkarır mı?', a: 'Saç telini yumuşatabilir; fakat yeni saç çıkarma için güçlü kanıt yoktur.' },
        { q: 'Saçta ne kadar kalmalı?', a: 'Çoğu kullanıcı için kısa ve kontrollü uygulama daha dengeli olur; çok uzun bekletmek şart değildir.' },
        { q: 'Her gün sürmek doğru mu?', a: 'Çoğu saç tipinde ağırlaşma ve kalıntı yapabileceği için genellikle iyi fikir değildir.' },
        { q: 'Kirpik için kullanılabilir mi?', a: 'Göz çevresi riski nedeniyle çok temkinli olunmalı; uzatma etkisi için güçlü kanıt yoktur.' }
      ]
    };
  }

  if (article.kind === 'skin') {
    const answers = {
      navel: 'Göbek deliğine zeytinyağı sürmenin internette dolaşan geniş fayda iddiaları için güçlü kanıt yoktur. Hijyen ve tahriş riski düşünülmeden yapılmamalıdır.',
      chest: 'Göğse zeytinyağı sürmenin belirli bir hastalığı çözdüğünü söylemek için güçlü kanıt yoktur. Cilt bakımı ile tıbbi şikayet aynı başlık değildir.',
      anal: 'Makata zeytinyağı sürmek hassas bir bölge uygulamasıdır; tahriş, enfeksiyon ve altta yatan problem ihtimali nedeniyle rastgele öneriyle yapılmamalıdır.',
      body: 'Vücuda zeytinyağı sürmek kuru bölgelerde kayganlık ve yumuşama hissi verebilir; fakat her cilt tipine uygun değildir.',
      skin: 'Zeytinyağı bazı kuru bölgelerde emolyan etkili olabilir; ama hassas, akneye yatkın veya tahrişli ciltte her zaman ideal seçim olmayabilir.',
      face: 'Yüze zeytinyağı sürmek bazı kişilerde yumuşatma hissi verirken bazı cilt tiplerinde ağırlık ve tahriş yaratabilir. Mucize çözüm gibi düşünmek doğru değildir.'
    };
    return {
      title: `${article.displayKeyword}: ciltte kullanım rehberi`,
      lead: 'cilt bakımını viral önerilerden ayıran',
      directAnswer: answers[article.subkind] || answers.face,
      takeaways: [
        'Kuru ciltte emolyan hissi verebilir; ama her cilt tipi için ideal değildir.',
        'Hassas bölgelere uygulama ekstra dikkat ister.',
        'Sosyal medyada dolaşan geniş fayda listeleri çoğu zaman abartılıdır.',
        'Önce küçük alanda denemek en güvenli yaklaşımdır.'
      ],
      sections: [
        section('Ciltte işe yarayabilecek alan neresi?', [
          'Zeytinyağı daha çok kayganlaştırıcı ve yumuşatıcı bir his üzerinden değerlendirilir. Bu nedenle kuru bölge bakımında bazı kullanıcılar tarafından tercih edilir.',
          'Ancak yüz, göğüs, makat ya da göbek deliği gibi bölgelerin hassasiyet düzeyi aynı değildir. Bölge değiştikçe risk profili de değişir.'
        ]),
        contextSection(article, [
          'Cilt sorgularında kullanıcılar pratik bakım çözümü arar.',
          'Parent keyword bağlantısı uygulama biçimi, sıklık ve olası risk sorularını da beraberinde getirir.',
          'Bu rehber bu yüzden yalnızca fayda değil, sınır da çizer.'
        ]),
        section('Kimlerde uygun olmayabilir?', [
          'Akneye yatkın, kolay irrite olan veya bariyeri hassas ciltlerde ağır yağlı doku her zaman rahat etmeyebilir. Özellikle aktif tahriş, açık yara veya belirti veren döküntüde kulaktan dolma öneriyle ilerlemek doğru değildir.',
          'Hassas bölgelerde beklenmeyen yanma, kaşıntı ya da kızarıklık oluşursa uygulama hemen durdurulmalıdır.'
        ], [
          'Önce küçük bir alanda deneyin.',
          'Açık yara ve yoğun tahrişte uygulamaktan kaçının.',
          'Hassas bölgelerde profesyonel değerlendirmeyi öne alın.'
        ]),
        section('Daha güvenli uygulama yaklaşımı', [
          'Kullanım düşünülüyorsa temiz ciltte küçük miktarla başlamak ve sonucu izlemek en pratik yöntemdir. Cilt bakımını tek bir yağ etrafında mucize gibi kurgulamak yerine genel bariyer bakımına odaklanmak daha gerçekçidir.',
          'Şikayet kozmetik sınırı aşıyorsa, örneğin ağrı, akıntı, yaygın döküntü ya da sürekli tahriş varsa doktor değerlendirmesi gerekir.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'Yüze zeytinyağı sürülür mü?', a: 'Bazı ciltlerde tolere edilebilir; ancak her cilt tipi için ideal değildir ve küçük alanda deneme gerekir.' },
        { q: 'Cilde faydası var mı?', a: 'Daha çok yumuşatma ve kayganlık hissi üzerinden değerlendirilir; geniş tıbbi fayda iddiaları güçlü değildir.' },
        { q: 'Göbek deliğine sürmek faydalı mı?', a: 'Bu konuda internette dolaşan iddialar güçlü kanıt taşımaz.' },
        { q: 'Makat veya göğüs gibi hassas bölgelere sürülür mü?', a: 'Bu tür bölgelerde rastgele uygulama önerilmez; tahriş ve altta yatan sorun ihtimali nedeniyle temkin gerekir.' }
      ]
    };
  }

  if (article.kind === 'eye') {
    return {
      title: `${article.displayKeyword}: güvenli mi, ne zaman kaçınmalı?`,
      lead: 'hassas bölgede güvenliği merkeze alan',
      directAnswer: 'Göze steril olmayan zeytinyağı damlatmak uygun bir yaklaşım değildir. Göz; steril, hassas ve tıbbi açıdan riskli bir alandır.',
      takeaways: [
        'Steril olmayan yağlar göze uygulanmamalıdır.',
        'Bulanık görme, ağrı ve batma varsa beklemeden değerlendirme gerekir.',
        'Göz çevresi uygulamaları kirpik ve cilt bakımından farklıdır.',
        'Ev tipi karışımlar göz için güvenilir çözüm sayılmaz.'
      ],
      sections: [
        section('Neden risklidir?', [
          'Göz yüzeyi steril olmayan ürünlere karşı son derece hassastır. Yağlı yapı geçici rahatlama hissi verse bile sorunu çözmeyebilir ve değerlendirmeyi geciktirebilir.',
          'Özellikle kızarıklık, travma, akıntı, şiddetli batma ya da görme değişikliği varsa ev çözümü ile vakit kaybetmemek gerekir.'
        ]),
        contextSection(article, [
          'Bu tip sorgularda kullanıcı hızlı rahatlama arar.',
          'Parent keyword bağlantısı güvenlik sorusunu merkeze taşır.',
          'Bu yüzden rehberde fayda iddiası yerine güvenlik sınırı öne alınmıştır.'
        ]),
        section('Daha güvenli yaklaşım nedir?', [
          'Göz için kullanılacak ürünlerin o bölgeye uygun, steril ve tıbbi olarak tasarlanmış olması gerekir. Belirti sürüyorsa ya da travma varsa profesyonel değerlendirme en doğru adımdır.',
          'Göz çevresi bakımında kullanılan kozmetik ürünlerle göz içine uygulanacak ürünler aynı şey değildir.'
        ], [sourceIntro]),
        section('Acil değerlendirme gerektiren belirtiler', [
          'Ani görme değişikliği, şiddetli ağrı, kimyasal temas, travma, yoğun sulanma veya akıntı gibi belirtiler acil değerlendirme gerektirir.',
          'Bu tabloda zeytinyağı dahil hiçbir ev çözümünü denemek doğru yaklaşım sayılmaz.'
        ])
      ],
      faq: [
        { q: 'Göze zeytinyağı damlatılır mı?', a: 'Hayır, uygun ve güvenli bir yaklaşım olarak değerlendirilmez.' },
        { q: 'Kirpik için kullanılan yağ göze kaçarsa ne yapmalı?', a: 'Ilık temiz suyla nazikçe uzaklaştırın; belirti sürerse değerlendirme alın.' },
        { q: 'Gözde batma varsa ev çözümü yeterli olur mu?', a: 'Hayır. Belirti sürüyorsa tıbbi değerlendirme gerekir.' },
        { q: 'Doğal ürün olması neden yetmiyor?', a: 'Göz için belirleyici olan doğal olması değil, steril ve uygun formülde olmasıdır.' }
      ]
    };
  }

  if (article.kind === 'ear') {
    return {
      title: `${article.displayKeyword}: güvenli mi, ne zaman kaçınmalı?`,
      lead: 'kulak bakımında sınırları netleştiren',
      directAnswer: 'Zeytinyağı yalnızca belirli durumlarda, özellikle kulak kiri yumuşatma amacıyla düşünülür. Ağrı, akıntı, delik kulak zarı şüphesi veya enfeksiyon varsa kullanılmamalıdır.',
      takeaways: [
        'Kulak kiri ile kulak enfeksiyonu aynı şey değildir.',
        'Ağrı ve akıntı varsa kulak içine yağ damlatmak risklidir.',
        'Kulak zarıyla ilgili belirsizlikte ev uygulaması yerine muayene gerekir.',
        'Kulağa damlatmak ile kulağın dışını nemlendirmek ayrı konulardır.'
      ],
      sections: [
        section('Ne zaman düşünülür?', [
          'Zeytinyağı damlası, bazı kaynaklarda kulak kiri birikimini yumuşatmaya yardımcı bir seçenek olarak geçer. Bu kullanımın amacı enfeksiyonu tedavi etmek değil, sadece kirin yumuşamasını sağlamaktır.',
          'Bu nedenle belirtileri doğru ayırt etmek önemlidir. Ağrı veya işitmede ani azalma gibi durumlar daha farklı değerlendirilir.'
        ]),
        contextSection(article, [
          'Kulak sorgularında kullanıcılar çoğu zaman kolay ev çözümü arar.',
          'Parent keyword bağlantısı uygulama güvenliği ve belirtilerin ayrımını gerekli kılar.',
          'Bu yüzden sayfa riskli durumları özellikle ayırır.'
        ]),
        section('Ne zaman kullanılmamalı?', [
          'Ağrı, akıntı, ateş, yakın zamanda kulak ameliyatı öyküsü ya da delik kulak zarı şüphesi varsa yağ damlatmak doğru değildir. Bu tabloda profesyonel değerlendirme gerekir.',
          'Kulak içine gereksiz müdahale bazen sorunu büyütebilir veya teşhisi geciktirebilir.'
        ], [
          'Ağrı varsa kullanmayın.',
          'Akıntı varsa kullanmayın.',
          'Kulak zarıyla ilgili şüphede kullanmayın.'
        ]),
        section('Daha güvenli yaklaşım', [
          'Kulak kiri düşünülüyorsa ve riskli belirti yoksa, kısa ve kontrollü yaklaşım hakkında eczacı ya da hekim görüşü almak daha sağlıklıdır. Körlemesine tekrar eden uygulamalar yerine belirtilerin nedenini bilmek gerekir.',
          'Kulak hijyeninde aşırı müdahale çoğu zaman faydadan çok zarar verir.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'Kulağa zeytinyağı damlatılır mı?', a: 'Yalnızca belirli kulak kiri senaryolarında düşünülür; ağrı ve akıntı varsa uygulanmaz.' },
        { q: 'Kulak ağrısında işe yarar mı?', a: 'Ağrıda ev çözümü yerine değerlendirme gerekir.' },
        { q: 'Kulak kiri için ne kadar güvenli?', a: 'Riskli durum yoksa kısa süreli düşünülür; yine de eczacı veya hekim görüşü daha güvenlidir.' },
        { q: 'Kulak zarı delikse kullanılabilir mi?', a: 'Hayır.' }
      ]
    };
  }

  if (article.kind === 'cooking') {
    return {
      title: `${article.displayKeyword}: pişirme ve kızartma rehberi`,
      lead: 'mutfak kullanımını ürün sınıfıyla eşleştiren',
      directAnswer: 'Zeytinyağı mutfakta kızartma ve pişirme için kullanılabilir; ancak seçilecek yağın profili ve sizin beklentiniz önemlidir. Aromatik, pahalı bir yağı yanlış yerde harcamak gerekmeyebilir.',
      takeaways: [
        'Zeytinyağı yalnızca soğuk kullanım için değildir.',
        'Yemek tipi ve aroma beklentisi hangi yağı kullanacağınızı belirler.',
        'Natürel sızma sıcak kullanıma girebilir; ama güçlü aroması her yemekte istenmeyebilir.',
        'Yüksek hacimli mutfak kullanımında fiyat/performans ayrıca düşünülmelidir.'
      ],
      sections: [
        section('Kızartma ve sıcak kullanımda temel mantık', [
          'Zeytinyağı mutfakta sadece salata yağı değildir. Pek çok yemek için kullanılabilir; önemli olan hangi profildeki yağı hangi yemekte değerlendirdiğinizdir.',
          'Yoğun meyvemsi ve pahalı bir yağı uzun yüksek ısı uygulamasında kullanmak her zaman ekonomik ya da duyusal olarak en akıllı tercih olmayabilir.'
        ]),
        contextSection(article, [
          'Pişirme sorguları kalite ve fiyat sorgularıyla iç içe ilerler.',
          'Parent keyword bağlantısı, kullanıcının mutfak kararı verirken aynı zamanda ürün sınıfını da merak ettiğini gösterir.',
          'Bu rehber kullanım ile seçim kararını bir araya getirir.'
        ]),
        section('Hangi kullanım için hangi yaklaşım?', [
          'Son dokunuş, kahvaltı ve salata için aromatik natürel sızma yağlar öne çıkarken; yüksek hacimli günlük pişirmede daha dengeli profil tercih edilebilir. Mesele, yağın kötü ya da iyi olması değil, doğru yerde kullanılmasıdır.',
          'Özellikle ev kullanıcısı için tadı çok baskın olmayan ama güvenilir bir yağ, günlük yemeklerde daha konforlu olabilir.'
        ], [
          'Tadım ve soğuk kullanım için aromatik yağ seçin.',
          'Günlük sıcak yemek için daha dengeli profil arayın.',
          'Birim maliyet ve tüketim hızını birlikte düşünün.'
        ]),
        section('Mutfakta kaliteyi korumak', [
          'Yağı ocağın yanında bekletmek ya da kapağını açık bırakmak, mutfakta yapılan en yaygın hatalardandır. Sıcak kullanım kadar kullanım dışındaki saklama da önemlidir.',
          'Bu yüzden mutfak seçimi yaparken saklama alışkanlığınızı da hesaba katmak gerekir.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'Zeytinyağı ile kızartma olur mu?', a: 'Evet, yapılabilir; ancak kullanılacak yağın tipi ve maliyet beklentisi önemlidir.' },
        { q: 'Natürel sızma sıcak yemekte kullanılabilir mi?', a: 'Kullanılabilir; fakat aroması ve fiyatı kullanım amacına göre düşünülmelidir.' },
        { q: 'Her yemek için aynı zeytinyağı uygun mu?', a: 'Hayır. Sofra, salata ve yoğun sıcak kullanım için farklı profiller daha mantıklı olabilir.' },
        { q: 'Kızartma için en ucuz yağı mı seçmeliyim?', a: 'Sadece fiyata değil, güvenilirliğe ve ürün sınıfına da bakılmalıdır.' }
      ]
    };
  }

  if (article.kind === 'cleaning') {
    return {
      title: `${article.displayKeyword}: nasıl temizlenir?`,
      lead: 'ev içi pratiği hızlı müdahale mantığına bağlayan',
      directAnswer: 'Zeytinyağı lekesinde hız çok önemlidir. Yağ yeni döküldüyse önce emdirip sonra yağ çözücü bir temizlik adımı uygulamak genellikle en etkili yaklaşımdır.',
      takeaways: [
        'Lekeyi yaymadan fazla yağı hızla emdirmek ilk adımdır.',
        'Sıcak suyla rastgele ovalamak çoğu zaman lekeyi sabitleyebilir.',
        'Bulaşık deterjanı gibi yağ çözücü ürünler ilk aşamada yardımcı olur.',
        'Halı ve kumaşta malzeme tipine göre nazik davranmak gerekir.'
      ],
      sections: [
        section('İlk 5 dakikada ne yapılmalı?', [
          'Yeni dökülen yağda amaç lekeyi derine yedirmeden yüzeyden almak olmalıdır. Bunun için temiz kâğıt havlu veya kuru bir bezle bastırarak fazla yağ alınır.',
          'Lekeyi sertçe ovalamak, özellikle kumaş ve halıda yağı daha geniş bir alana yayabilir.'
        ], [
          'Fazla yağı bastırarak alın.',
          'Ovma hareketini azaltın.',
          'Önce emdirme, sonra yağ çözme adımına geçin.'
        ]),
        contextSection(article, [
          'Bu tür sorgularda kullanıcı anlık çözüm ister.',
          'Parent keyword bağlantısı varsa kullanıcı daha geniş leke çıkarma senaryosuna ilerleyebilir.',
          'Bu yüzden hızlı müdahale sırası özellikle öne çıkarıldı.'
        ]),
        section('Kumaş ve halıda yaklaşım', [
          'Kumaşta malzemenin hassasiyetine göre hareket etmek gerekir. Önce görünmeyen küçük bir bölgede deneme yapmak güvenli bir alışkanlıktır.',
          'Halıda ise fazla yağı emdirme sonrası yağ çözücü adımı kontrollü uygulanmalı ve aşırı ıslatmadan kaçınılmalıdır.'
        ]),
        section('Ne yapmamak gerekir?', [
          'Leke tazeyken sert fırçalama, aşırı sıcak su kullanımı veya uygunsuz kimyasal yüklenmesi yüzeyi bozabilir. Önce mekanik olarak azaltmak, sonra kontrollü temizlik yapmak daha etkilidir.',
          'Değerli kumaşlarda profesyonel temizleme seçeneği daha doğru olabilir.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'Zeytinyağı lekesi çıkar mı?', a: 'Evet; özellikle hızlı müdahalede çıkarma şansı yüksektir.' },
        { q: 'Halıya dökülürse ne yapmalıyım?', a: 'Önce fazla yağı emdirin, sonra kontrollü yağ çözücü temizlik uygulayın.' },
        { q: 'Sıcak su işe yarar mı?', a: 'Doğrudan sıcak suyla başlamak her zaman doğru değildir; önce yağı yüzeyden almak gerekir.' },
        { q: 'Ovmak doğru mu?', a: 'Hayır. Özellikle taze lekede yayılma riski yaratabilir.' }
      ]
    };
  }

  if (article.kind === 'packaging') {
    return {
      title: `${article.displayKeyword}: doğru şişe ve ambalaj seçimi`,
      lead: 'ambalaj tercihini kalite korumayla birleştiren',
      directAnswer: 'Zeytinyağında şişe sadece sunum değil, kalite koruma aracıdır. Işık ve hava ile temas ne kadar iyi yönetilirse yağın karakteri o kadar uzun korunur.',
      takeaways: [
        'Koyu cam ve teneke ışığa karşı avantaj sağlar.',
        'Büyük paket alındığında küçük şişeye bölmek pratik olabilir.',
        'Şeffaf ve uzun süre rafta kalan ambalajlarda dikkatli olmak gerekir.',
        'Ambalaj tercihi kullanım hızınıza göre yapılmalıdır.'
      ],
      sections: [
        section('Ambalaj neden bu kadar önemli?', [
          'Zeytinyağının üç temel düşmanı ışık, sıcaklık ve hava temasıdır. Bu nedenle ambalaj tipi sadece estetik mesele değil, kaliteyi koruma stratejisidir.',
          'Ürünün iyi olması kadar, o iyiliğin eve geldikten sonra ne kadar korunabildiği de önemlidir.'
        ]),
        contextSection(article, [
          'Şişe sorguları çoğu zaman satın alma ve saklama sorularıyla birleşir.',
          'Parent keyword bağlantısı kullanıcının sadece kap değil, kullanım biçimi aradığını gösterir.',
          'Bu nedenle sayfa ambalajı doğrudan saklama rehberine bağlar.'
        ]),
        section('Hangi senaryoda hangi ambalaj?', [
          'Küçük hacimli günlük tüketimde koyu cam kullanışlı olabilir. Yüksek aile tüketiminde teneke ekonomik avantaj sağlayabilir; ancak servis için ayrı küçük şişe kullanmak daha pratiktir.',
          'Aç-kapa sıklığı fazla olan büyük paketlerde kaliteyi korumak için ana kabı daha az açmak önemlidir.'
        ], [
          'Günlük kullanım için küçük koyu cam',
          'Toplu kullanım için teneke + küçük servis şişesi',
          'Şeffaf ambalajda saklama riskini hesaba katın'
        ]),
        section('Şişe kadar kullanım alışkanlığı da önemlidir', [
          'En iyi ambalaj bile yağı güneş önünde veya ocağın dibinde tutarsanız yeterli korumayı sağlayamaz. Ambalaj ve kullanım alışkanlığı birlikte düşünülmelidir.',
          'Bu yüzden kullanıcı için en iyi şişe, kendi tüketim hızına ve saklama düzenine uyan şişedir.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'Koyu cam mı teneke mi?', a: 'Her ikisi de ışığa karşı iyi koruma sağlayabilir; seçim kullanım biçimiyle ilişkilidir.' },
        { q: 'Şeffaf şişe kötü mü?', a: 'Şeffaf ambalaj daha dikkatli saklama gerektirir; uzun süre ışıkta kalması risklidir.' },
        { q: 'Büyük tenekeyi küçük şişeye bölmek doğru mu?', a: 'Evet, günlük kullanım için pratik ve koruyucu olabilir.' },
        { q: 'Şişe tipi tadı etkiler mi?', a: 'Doğrudan değil; ama kalite koruması üzerinden dolaylı olarak etkiler.' }
      ]
    };
  }

  if (article.kind === 'equipment') {
    return {
      title: `${article.displayKeyword}: ev tipi makine rehberi`,
      lead: 'ev tipi üretim kararını gerçek maliyetle karşılaştıran',
      directAnswer: 'Ev tipi zeytinyağı makinası araştırırken yalnızca cihaz fiyatına bakmak yeterli değildir. Kapasite, temizlik, verim, servis ve gerçek kullanım sıklığı birlikte değerlendirilmelidir.',
      takeaways: [
        'Cihaz bedeli tek maliyet kalemi değildir.',
        'Ham zeytin kalitesi ve işleme bilgisi sonuç üzerinde belirleyicidir.',
        'Ev tipi üretim romantik görünebilir ama operasyonel zahmet taşır.',
        'Düşük kullanım sıklığında satın alma ekonomik olmayabilir.'
      ],
      sections: [
        section('Makine fiyatı dışında neye bakmalı?', [
          'Ev tipi makinelerde fiyatla birlikte kapasite, temizlik süresi, parça dayanımı ve servis ağı değerlendirilmelidir. Cihazın evde gerçekten ne kadar kullanılacağı da önemli bir sorudur.',
          'Birçok kullanıcı için asıl mesele cihazı almak değil, cihazı verimli ve hijyenik şekilde sürdürebilmektir.'
        ]),
        contextSection(article, [
          'Ekipman sorguları çoğu zaman üretim merakı ile yatırım sorusunu birlikte taşır.',
          'Parent keyword bağlantısı varsa kullanıcı yalnızca fiyat değil, yapılabilirlik de sorgular.',
          'Bu rehber o yüzden yatırım mantığını pratik kullanım üzerinden okur.'
        ]),
        section('Verim neden sadece makineye bağlı değil?', [
          'Zeytinin kalitesi, bekleme süresi, işleme hızı ve kullanıcı deneyimi sonuç üzerinde doğrudan etkilidir. Makine ne kadar iyi olursa olsun zayıf hammadde iyi yağ üretmez.',
          'Ev kullanıcıları için bakım ve temizlik rutini ihmal edilirse cihazdan alınan memnuniyet hızla düşebilir.'
        ], [
          'Kapasite',
          'Temizlik kolaylığı',
          'Servis ve yedek parça',
          'Gerçek kullanım sıklığı'
        ]),
        section('Ne zaman mantıklı, ne zaman değil?', [
          'Düzenli zeytin erişiminiz ve üretim motivasyonunuz varsa anlamlı olabilir. Ama yılda çok az kullanım planlıyorsanız, güvenilir üreticiden yağ almak daha rasyonel kalabilir.',
          'Ev tipi üretim kararı romantik beklentiyle değil, operasyonel gerçeklikle verilmelidir.'
        ], [sourceIntro])
      ],
      faq: [
        { q: 'Ev tipi makine almak ekonomik mi?', a: 'Kullanım sıklığına ve zeytin erişimine bağlıdır; herkes için ekonomik olmayabilir.' },
        { q: 'Makine tek başına kaliteli yağ üretir mi?', a: 'Hayır. Hammadde ve işleme disiplini çok önemlidir.' },
        { q: 'Bakım neden önemli?', a: 'Hijyen, performans ve cihaz ömrü doğrudan bakım kalitesine bağlıdır.' },
        { q: 'Az kullanımda satın almak mantıklı mı?', a: 'Çoğu durumda temkinli değerlendirilmelidir.' }
      ]
    };
  }

  return {
    title: `${article.displayKeyword}: kapsamlı rehber`,
    lead: 'konuya hızlı giriş sağlayan',
    directAnswer: `${article.displayKeyword} için kullanıcıların en çok ihtiyaç duyduğu şey net tanım, pratik kullanım ve güvenilir seçim çerçevesidir.`,
    takeaways: [
      'Konu, yalnızca kısa cevapla değil kullanım mantığıyla birlikte okunmalıdır.',
      'Etiket, kaynak ve kullanım amacı kararın temelidir.',
      'Benzer rehber ve marka geçişleri aynı oturumda anlam kazanır.',
      'Parent keyword ilişkisi daha geniş karar ihtiyacını gösterir.'
    ],
    sections: [contextSection(article)],
    faq: [
      { q: `${article.displayKeyword} neden araştırılır?`, a: 'Genellikle kısa cevapla birlikte pratik karar ihtiyacı doğurduğu için.' },
      { q: 'Bu konuda en güvenilir yaklaşım nedir?', a: 'Kaynak, etiket ve kullanım amacını birlikte okumaktır.' }
    ]
  };
}

function buildArticleRecord(raw) {
  const keyword = raw.keyword;
  const matchedBrand = findMatchedBrand(keyword);
  const kind = detectKind(keyword);
  const article = {
    ...raw,
    slug: slugify(keyword),
    kind,
    matchedBrand,
    displayKeyword: prettifyKeyword(keyword),
    displayKeywordLower: prettifyKeyword(keyword).toLocaleLowerCase('tr-TR'),
    parentDisplay: raw.parentKeyword ? prettifyKeyword(raw.parentKeyword) : '',
    groupKey: groupKeyForKind(kind),
    groupLabel: groupLabels[groupKeyForKind(kind)] || 'Rehber',
    typeLabel: typeLabels[kind] || 'Rehber',
    category: guideCategoryForKind(kind)
  };
  article.subkind = detectSubkind(article);
  const content = composeArticle(article);
  Object.assign(article, content);
  article.summary = buildArticleSummary(article);
  article.metaDescription = truncate(article.summary);
  article.warning = safetyNote(article.kind, article);
  article.figures = articleImages(article);
  article.sources = articleSources(article);
  article.topicLinks = relatedTopics(article);
  return article;
}

function renderArticlePage(article, allArticles) {
  const related = relatedGuides(article, allArticles);
  const breadcrumbItems = [
    { label: 'Zeytinyağlarımız', url: 'index.html' },
    { label: 'Rehber', url: 'rehber/index.html' },
    { label: article.category.label, url: article.category.href },
    { label: article.displayKeyword }
  ];

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.metaDescription,
      datePublished: TODAY,
      dateModified: TODAY,
      author: { '@type': 'Organization', name: 'Zeytinyağlarımız' },
      publisher: { '@type': 'Organization', name: 'Zeytinyağlarımız' },
      image: article.figures.map((figure) => figure.path.startsWith('http') ? figure.path : `${SITE_URL}/${figure.path.replace(/^\.\.\//, '')}`),
      mainEntityOfPage: `${SITE_URL}/rehber/${article.slug}.html`
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }
  ];

  const sidebar = [
    renderGuideCategoryCard(article.category),
    article.matchedBrand
      ? `<div class="guide-side-card"><h3>Marka Sayfası</h3><div class="guide-side-links"><a href="../marka/${escapeHtml(article.matchedBrand.slug)}.html"><strong>${escapeHtml(article.matchedBrand.name)}</strong><span>Detay sayfasını aç</span></a></div></div>`
      : '',
    renderTopicLinks(article.topicLinks)
  ].filter(Boolean).join('');

  const content = `
<main class="guide-page">
  <section class="guide-hero-section">
    <div class="guide-hero-inner">
      <div class="guide-hero-copy">
        <span class="guide-eyebrow">${escapeHtml(article.groupLabel)}</span>
        <h1>${escapeHtml(article.title)}</h1>
        <p class="guide-summary">${escapeHtml(article.summary)}</p>
        <div class="guide-meta-row">
          <span class="guide-chip">${escapeHtml(article.typeLabel)}</span>
        </div>
      </div>
      <figure class="guide-hero-media">
        <img src="${escapeHtml(article.figures[0].path)}" alt="${escapeHtml(article.figures[0].alt)}" loading="eager" onerror="this.parentElement.style.display='none'">
      </figure>
    </div>
  </section>

  <div class="guide-layout">
    <article class="guide-content">
      <section class="guide-quick-answer">
        <h2>Kısa cevap</h2>
        <p>${escapeHtml(article.directAnswer)}</p>
        ${list(article.takeaways, 'guide-takeaways')}
      </section>

      ${article.warning ? `<section class="guide-callout"><strong>${escapeHtml(article.warning.title)}</strong><p>${escapeHtml(article.warning.text)}</p></section>` : ''}

      ${renderFigures(article.figures)}
      ${renderSections(article.sections)}
      ${renderFaq(article.faq)}
      ${renderRelatedGuides(related)}
      ${renderSources(article.sources)}
    </article>
    ${sidebar ? `<aside class="guide-sidebar">${sidebar}</aside>` : ''}
  </div>
</main>`;

  return pageShell({
    prefix: '../',
    active: 'rehber',
    title: `${article.title} | Zeytinyağı Rehberi`,
    description: article.metaDescription,
    canonicalPath: `rehber/${article.slug}.html`,
    breadcrumbItems,
    content,
    structuredData
  });
}

function renderHubPage(articles) {
  const categories = guideCategoriesFromArticles(articles);
  const groups = Object.entries(groupLabels).map(([key, label]) => ({
    key,
    label,
    count: articles.filter((article) => article.groupKey === key).length
  })).filter((item) => item.count > 0);

  const content = `
<main class="guide-hub-page">
  <section class="guide-hub-grid" id="guideHubGrid">
    ${renderGuideCards(articles, { filterable: true })}
  </section>

  <section class="guide-hub-hero">
    <div class="guide-hub-hero-copy">
      <span class="guide-eyebrow">Blog Ana Sayfası</span>
      <h1>Zeytinyağı Rehberi</h1>
      <p>Zeytinyağı ile ilgili en çok aranan sorular için hazırlanan 100 rehber sayfası. İçerikler benzer konular, markalar ve kategori sayfaları arasında güçlü geçişler kuracak şekilde düzenlendi.</p>
      <div class="guide-hub-stats">
        <div><strong>100</strong><span>rehber sayfası</span></div>
        <div><strong>${escapeHtml(String(categories.length))}</strong><span>rehber kategorisi</span></div>
        <div><strong>${escapeHtml(String(brands.length))}</strong><span>marka bağlantısı</span></div>
      </div>
      <section class="topic-section">
        <h2>Rehber Kategorileri</h2>
        ${renderGuideCategoryLinks(categories)}
      </section>
    </div>
    <div class="guide-hub-panel">
      <label class="guide-search-box">
        <span>Ara</span>
        <input id="guideSearchInput" type="search" placeholder="ör. sızma, kalori, kabızlık, Memecik">
      </label>
      <div class="guide-filter-list" id="guideFilters">
        <button class="guide-filter active" data-group="all">Tümü</button>
        ${groups.map((group) => `<button class="guide-filter" data-group="${escapeHtml(group.key)}">${escapeHtml(group.label)} (${group.count})</button>`).join('')}
      </div>
    </div>
  </section>
</main>`;

  const extraScript = `
const guideInput = document.getElementById('guideSearchInput');
const guideGrid = document.getElementById('guideHubGrid');
const guideCards = Array.from(guideGrid.querySelectorAll('.guide-card'));
const guideFilters = Array.from(document.querySelectorAll('.guide-filter'));
let activeGroup = 'all';
function filterGuideCards(){
  const term = (guideInput.value || '').toLowerCase('tr-TR').trim();
  guideCards.forEach((card)=>{
    const matchGroup = activeGroup === 'all' || card.dataset.group === activeGroup;
    const matchTerm = !term || card.dataset.search.includes(term);
    card.style.display = matchGroup && matchTerm ? '' : 'none';
  });
}
guideInput.addEventListener('input', filterGuideCards);
guideFilters.forEach((btn)=>btn.addEventListener('click', ()=>{
  activeGroup = btn.dataset.group;
  guideFilters.forEach((item)=>item.classList.toggle('active', item === btn));
  filterGuideCards();
}));`;

  return pageShell({
    prefix: '../',
    active: 'rehber',
    title: 'Zeytinyağı Rehberi',
    description: 'Zeytinyağı ile ilgili en çok aranan 100 konu için hazırlanan kapsamlı rehber sayfaları. Kalite, fiyat, sağlık, saç, cilt, marka ve çeşit başlıkları tek merkezde.',
    canonicalPath: 'rehber/index.html',
    breadcrumbItems: [
      { label: 'Zeytinyağlarımız', url: 'index.html' },
      { label: 'Rehber' }
    ],
    content,
    structuredData: [{
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Zeytinyağı Rehberi',
      description: 'Zeytinyağı ile ilgili en çok aranan 100 konu için rehber merkezi.',
      url: `${SITE_URL}/rehber/index.html`
    }],
    extraScript
  });
}

function renderCategoryPage(category, categoryArticles, allCategories) {
  const matchedBrandCount = categoryArticles.filter((article) => article.matchedBrand).length;
  const sampleArticles = categoryArticles.slice(0, 3).map((article) => article.displayKeyword).join(', ');
  const description = truncate(`${category.label} kategorisindeki zeytinyağı rehber yazıları. ${category.description} Bu sayfada ${categoryArticles.length} içerik yer alır: ${sampleArticles}.`, 160);
  const siblingCategories = allCategories.filter((item) => item.key !== category.key);

  const content = `
<main class="guide-hub-page">
  <section class="guide-hub-hero">
    <div class="guide-hub-hero-copy">
      <span class="guide-eyebrow">Rehber Kategorisi</span>
      <h1>${escapeHtml(category.label)}</h1>
      <p>${escapeHtml(category.description)}</p>
      <p>${escapeHtml(`${categoryArticles.length} yazı ile ${category.label.toLocaleLowerCase('tr-TR')} odağındaki aramaları aynı sayfada topladık. Bu sayfadan ilgili makalelere geçip aynı kategori içindeki benzer soruları bir arada inceleyebilirsiniz.`)}</p>
      <div class="guide-hub-stats">
        <div><strong>${escapeHtml(String(categoryArticles.length))}</strong><span>yazı</span></div>
        <div><strong>${escapeHtml(String(matchedBrandCount))}</strong><span>marka bağlantısı</span></div>
        <div><strong>${escapeHtml(String(siblingCategories.length))}</strong><span>diğer kategori</span></div>
      </div>
    </div>
    <div class="guide-hub-panel">
      <label class="guide-search-box">
        <span>Kategori</span>
        <input type="text" value="${escapeHtml(category.label)}" readonly>
      </label>
      <div class="topic-section">
        <h2>Diğer Rehber Kategorileri</h2>
        ${renderGuideCategoryLinks(siblingCategories, '')}
      </div>
    </div>
  </section>

  <section class="guide-hub-grid">
    ${renderGuideCards(categoryArticles, { hrefBase: '../' })}
  </section>
</main>`;

  return pageShell({
    prefix: '../../',
    active: 'rehber',
    title: `${category.label} | Zeytinyağı Rehberi`,
    description,
    canonicalPath: category.path,
    breadcrumbItems: [
      { label: 'Zeytinyağlarımız', url: 'index.html' },
      { label: 'Rehber', url: 'rehber/index.html' },
      { label: category.label }
    ],
    content,
    structuredData: [{
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${category.label} | Zeytinyağı Rehberi`,
      description,
      url: `${SITE_URL}/${category.path}`
    }]
  });
}

function collectStaticPages() {
  const pages = [
    'index.html',
    'markalar.html',
    'marka.html',
    'bolgeler.html',
    'kalite-rehberi.html',
    'topic/index.html'
  ];

  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(abs);
      if (entry.isFile() && entry.name.endsWith('.html')) pages.push(abs.replace(`${process.cwd()}/`, '').replace(/^\.\//, ''));
    }
  };

  walk(path.join(process.cwd(), 'topic'));
  walk(path.join(process.cwd(), 'rehber'));

  return Array.from(new Set(pages)).sort();
}

function buildSitemap() {
  const urls = collectStaticPages().map((relPath) => `  <url><loc>${SITE_URL}/${relPath}</loc></url>`).join('\n');
  writeFile('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  writeFile('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
}

ensureDir('rehber');
ensureDir('rehber/kategori');

const topKeywords = parseCsv(KEYWORDS_CSV)
  .filter((row) => row.keyword && !EXCLUDED_GUIDE_SLUGS.has(slugify(row.keyword)))
  .sort((a, b) => b.volume - a.volume || a.keyword.localeCompare(b.keyword, 'tr'))
  .slice(0, 100)
  .map(buildArticleRecord);

for (const article of topKeywords) {
  writeFile(`rehber/${article.slug}.html`, renderArticlePage(article, topKeywords));
}

const guideCategories = guideCategoriesFromArticles(topKeywords);
for (const category of guideCategories) {
  const categoryArticles = topKeywords.filter((article) => article.category.key === category.key);
  writeFile(category.path, renderCategoryPage(category, categoryArticles, guideCategories));
}

writeFile('rehber/index.html', renderHubPage(topKeywords));
for (const slug of EXCLUDED_GUIDE_SLUGS) {
  fs.rmSync(path.join(process.cwd(), 'rehber', `${slug}.html`), { force: true });
}
buildSitemap();

console.log(`Generated rehber pages: ${topKeywords.length + 1 + guideCategories.length}`);

import fs from 'fs';
import path from 'path';
import vm from 'vm';

const SITE_URL = 'https://zeytinyaglarimiz.com';

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

const categoryDescriptions = {
  'premium-butik': 'Premium ve butik üretim odaklı zeytinyağı markaları, erken hasat ve sınırlı seri ürünleriyle öne çıkar.',
  'market-endustriyel': 'Market raflarında yaygın bulunan, yüksek hacimli üretim yapan ve farklı paket seçenekleri sunan markalar.',
  organik: 'Organik sertifikalı, sürdürülebilir üretime odaklanan ve kimyasal kullanımını sınırlandıran markalar.',
  'bolgesel-yerel': 'Belirli bir yöreyi temsil eden, coğrafi karakteri öne çıkaran bölgesel ve yerel üretici markalar.'
};

const regionDescriptions = {
  ege: 'Türkiye zeytinyağı üretiminin ana merkezi olan Ege Bölgesi, Ayvalık ve Memecik gibi çeşitlerle güçlü bir profil sunar.',
  marmara: 'Marmara Bölgesi, Gemlik ve Trilye çevresindeki üretim kültürüyle dengeli ve yumuşak karakterli yağlarıyla bilinir.',
  akdeniz: 'Akdeniz Bölgesi markaları, aromatik yoğunluk ve sıcak iklim etkisiyle öne çıkan zeytinyağı profilleri üretir.',
  guneydogu: 'Güneydoğu Anadolu markaları, Halhalı ve Nizip Yağlık çeşitleriyle güçlü ve belirgin tat notaları sunar.',
  trakya: 'Trakya Bölgesi, son yıllarda gelişen üretim altyapısı ve butik üreticileriyle dikkat çeker.',
  turkiye: 'Türkiye geneline yayılan markalar, farklı bölgelerden zeytinleri harmanlayarak geniş ürün yelpazesi sunar.'
};

const oliveTypeDescriptions = {
  ayvalik: 'Ayvalık çeşidi, meyvemsi aroması ve dengeli acılık-yakıcılık profiliyle Türkiye’de en bilinen zeytin türlerinden biridir.',
  memecik: 'Memecik zeytini, yüksek polifenol potansiyeli ve yoğun aromatik karakteriyle özellikle Ege markalarında öne çıkar.',
  gemlik: 'Gemlik zeytini, Marmara ve çevresinde yaygın olup yumuşak içimli ve dengeli zeytinyağı profilleri üretir.',
  trilye: 'Trilye tipi zeytinler, narin meyvemsilik ve orta yoğunlukta aromatik denge arayan tüketiciler için güçlü bir kategoridir.',
  halhali: 'Halhalı çeşidi, özellikle Hatay ve çevresinde yetişen, karakteristik ve belirgin duyusal profile sahip bir zeytin türüdür.',
  nizip: 'Nizip Yağlık, Güneydoğu Anadolu’da öne çıkan, güçlü gövdeli ve belirgin tat profili sunan bir zeytin çeşididir.',
  'sari-ulak': 'Sarı Ulak, Mut ve Mersin hattında öne çıkan, yumuşak içim ile dengeli meyvemsiliği bir araya getiren yerel bir zeytin çeşididir.'
};

const normalize = (value) => String(value)
  .replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));

const sortBrands = (items) => {
  return [...items].sort((a, b) => {
    if (a.highlight && !b.highlight) return -1;
    if (!a.highlight && b.highlight) return 1;
    return a.name.localeCompare(b.name, 'tr');
  });
};

const countBy = (items, getter) => {
  const map = new Map();
  for (const item of items) {
    const key = getter(item);
    if (!key) continue;
    map.set(key, (map.get(key) || 0) + 1);
  }
  return map;
};

function ensureDir(relDir) {
  fs.mkdirSync(path.join(process.cwd(), relDir), { recursive: true });
}

function writeFile(relPath, content) {
  const abs = path.join(process.cwd(), relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content);
}

function nav(prefix, topicActive = false) {
  return `
<nav id="navbar">
    <div class="nav-inner">
        <a href="${prefix}index.html" class="nav-logo">
            <img src="${prefix}logo.png" alt="Zeytinyağlarımız">
            <span>Zeytinyağlarımız</span>
        </a>
        <ul class="nav-links">
            <li><a href="${prefix}markalar.html">Zeytinyağları</a></li>
            <li><a href="${prefix}topic/index.html" class="${topicActive ? 'active' : ''}">Zeytinyağı Çeşitleri</a></li>
            <li><a href="${prefix}bolgeler.html">Bölgeler</a></li>
            <li><a href="${prefix}kalite-rehberi.html">Zeytinyağı Kalitesi</a></li>
            <li><a href="${prefix}rehber/index.html">Rehber</a></li>
        </ul>
        <div class="nav-actions">
            <a href="${prefix}zeytinyagi-websiteleri.html" class="nav-discover-btn">Keşvet</a>
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
    <a href="${prefix}zeytinyagi-websiteleri.html" class="mobile-nav-cta">Keşvet</a>
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
        <p>Türkiye'deki zeytinyağı markalarının kapsamlı kataloğu. Bu site satış amacı taşımamaktadır.</p>
        <div class="footer-links">
            <a href="${prefix}index.html">Ana Sayfa</a>
            <a href="${prefix}markalar.html">Markalar</a>
            <a href="${prefix}topic/index.html">Zeytinyağı Çeşitleri</a>
            <a href="${prefix}rehber/index.html">Rehber</a>
            <a href="${prefix}zeytinyagi-websiteleri.html">Zeytinyağı Websiteleri</a>
            <a href="${prefix}kalite-rehberi.html">Kalite Rehberi</a>
            <a href="${prefix}bolgeler.html">Bölgeler</a>
        </div>
        <p class="copyright">&copy; 2026 zeytinyaglarimiz.com &mdash; Tüm hakları saklıdır.</p>
    </div>
</footer>`;
}

function breadcrumb(prefix, items) {
  const html = items.map((item, index) => {
    const isLast = index === items.length - 1;
    if (isLast || !item.url) return `<span>${normalize(item.label)}</span>`;
    return `<a href="${item.url.startsWith('http') ? item.url : `${prefix}${item.url}`}">${normalize(item.label)}</a><span aria-hidden="true">/</span>`;
  }).join('');

  return `<div class="breadcrumbs-wrap"><nav class="breadcrumbs" aria-label="Breadcrumb">${html}</nav></div>`;
}

function breadcrumbJson(canonicalPath, items) {
  const list = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.label,
    item: item.url ? (item.url.startsWith('http') ? item.url : `${SITE_URL}/${item.url.replace(/^\//, '')}`) : `${SITE_URL}/${canonicalPath.replace(/^\//, '')}`
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: list
  };
}

function pageShell({ prefix, title, description, canonicalPath, breadcrumbItems, content, structuredData = [] }) {
  const canonical = `${SITE_URL}/${canonicalPath.replace(/^\//, '')}`;
  const breadcrumbLd = breadcrumbJson(canonicalPath, breadcrumbItems);
  const schema = [breadcrumbLd, ...structuredData];

  return `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${normalize(title)}</title>
    <meta name="description" content="${normalize(description)}">
    <meta name="robots" content="index,follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" type="image/png" href="${prefix}favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${prefix}style.css">
</head>
<body>
${nav(prefix, true)}
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
</script>
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</body>
</html>`;
}

function brandCard(brand, prefix) {
  const resolveAssetUrl = (url) => {
    if (!url) return '';
    return /^https?:\/\//i.test(url) ? url : `${prefix}${url.replace(/^\.\//, '')}`;
  };
  const imageUrl = resolveAssetUrl(brand.image);
  const fallbackUrl = resolveAssetUrl(brand.logoFallback);
  const fallbackAttr = fallbackUrl ? ` data-fallback="${normalize(fallbackUrl)}"` : '';
  const image = brand.image
    ? `<img src="${normalize(imageUrl)}"${fallbackAttr} alt="${normalize(brand.name)} logosu" loading="lazy" onerror="const fb=this.dataset.fallback;if(fb&&this.src!==fb){this.src=fb;return;}this.style.display='none';">`
    : `<span class="brand-initials">${normalize(brand.name.slice(0, 2).toUpperCase())}</span>`;
  const badge = categoryLabels[brand.category] || brand.category;

  return `<a class="brand-card topic-brand-card" href="${prefix}marka/${normalize(brand.slug)}.html">
    <div class="brand-card-header ${brand.category}">
      ${image}
      <span class="brand-badge ${brand.category}">${normalize(badge)}</span>
      ${brand.highlight ? '<span class="brand-highlight-badge">Öne Çıkan</span>' : ''}
    </div>
    <div class="brand-card-body">
      <h3>${normalize(brand.name)}</h3>
      <div class="brand-region">${normalize(brand.region)}</div>
      <p class="brand-desc">${normalize(brand.desc.slice(0, 180))}...</p>
    </div>
  </a>`;
}

function brandGrid(items, prefix) {
  return `<div class="brands-grid">${items.map((b) => brandCard(b, prefix)).join('')}</div>`;
}

function linksHtml(items, prefix) {
  return `<div class="topic-link-list">${items.map((item) => `<a class="topic-link" href="${prefix}${item.url}">${normalize(item.label)} <span>(${item.count})</span></a>`).join('')}</div>`;
}

const categories = Object.entries(categoryLabels).map(([slug, label]) => ({
  slug,
  label,
  description: categoryDescriptions[slug],
  brands: sortBrands(brands.filter((b) => b.category === slug))
})).filter((item) => item.brands.length > 0);

const regions = Object.entries(regionClusterLabels).map(([slug, label]) => ({
  slug,
  label,
  description: regionDescriptions[slug],
  brands: sortBrands(brands.filter((b) => b.regionCluster === slug))
})).filter((item) => item.brands.length > 0);

const oliveTypes = Object.entries(oliveTypeLabels).map(([slug, label]) => ({
  slug,
  label,
  description: oliveTypeDescriptions[slug],
  brands: sortBrands(brands.filter((b) => Array.isArray(b.oliveTypes) && b.oliveTypes.includes(slug)))
})).filter((item) => item.brands.length > 0);

function topicCards(items, prefix, basePath) {
  return `<div class="topic-grid">${items.map((item) => `
    <a class="topic-card" href="${prefix}${basePath}/${item.slug}.html">
      <h3>${normalize(item.label)}</h3>
      <p>${normalize(item.description)}</p>
      <span class="topic-count">${item.brands.length} marka</span>
    </a>
  `).join('')}</div>`;
}

function renderHubPage({ relPath, prefix, title, description, breadcrumbItems, cardsHtml, dimensionsLinks = [], sectionTitle = 'Bölgeler', spotlightHtml = '' }) {
  const content = `
<main class="topic-page">
  <div class="topic-inner">
    <header class="topic-header">
      <h1>${normalize(title)}</h1>
      <p>${normalize(description)}</p>
      ${dimensionsLinks.length ? `<div class="topic-link-list" style="margin-top:14px;">${dimensionsLinks.map((link) => `<a class="topic-link" href="${prefix}${link.url}">${normalize(link.label)}</a>`).join('')}</div>` : ''}
    </header>
    ${spotlightHtml}
    <section class="topic-section">
      ${sectionTitle ? `<h2>${normalize(sectionTitle)}</h2>` : ''}
      ${cardsHtml}
    </section>
  </div>
</main>`;

  writeFile(relPath, pageShell({
    prefix,
    title,
    description,
    canonicalPath: relPath,
    breadcrumbItems,
    content,
    structuredData: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, description: description, url: `${SITE_URL}/${relPath}` }]
  }));
}

renderHubPage({
  relPath: 'topic/index.html',
  prefix: '../',
  title: 'Zeytinyağı Çeşitleri',
  description: 'Zeytinyağı markalarını marka kategorileri, üretim bölgeleri ve zeytin çeşitlerine göre keşfedin.',
  breadcrumbItems: [
    { label: 'Zeytinyağlarımız', url: 'index.html' },
    { label: 'Zeytinyağı Çeşitleri' }
  ],
  cardsHtml: `<div class="topic-grid">
    <a class="topic-card" href="../topic/kategoriler/index.html"><h3>Marka Kategorileri</h3><p>Premium, market, organik ve bölgesel kategorilerde benzer markaları görün.</p><span class="topic-count">${categories.length} alt konu</span></a>
    <a class="topic-card" href="../topic/bolgeler/index.html"><h3>Üretim Bölgeleri</h3><p>Ege, Marmara, Güneydoğu gibi bölgelere göre marka dağılımını inceleyin.</p><span class="topic-count">${regions.length} alt konu</span></a>
    <a class="topic-card" href="../topic/zeytin-cesitleri/index.html"><h3>Zeytin Çeşitleri</h3><p>Ayvalık, Memecik, Gemlik gibi zeytin türlerine göre markaları gezin.</p><span class="topic-count">${oliveTypes.length} alt konu</span></a>
  </div>`,
  dimensionsLinks: [
    { label: 'Markaları Listele', url: 'markalar.html' },
    { label: 'Öne Çıkan Markalar', url: 'index.html' },
    { label: 'Zeytinyağı Rehberi', url: 'rehber/index.html' }
  ],
  sectionTitle: ''
});

renderHubPage({
  relPath: 'topic/kategoriler/index.html',
  prefix: '../../',
  title: 'Zeytinyağı Marka Kategorileri',
  description: 'Premium, market, organik ve bölgesel markaları kategori bazında karşılaştırın ve benzer markaları keşfedin.',
  breadcrumbItems: [
    { label: 'Zeytinyağlarımız', url: 'index.html' },
    { label: 'Zeytinyağı Çeşitleri', url: 'topic/index.html' },
    { label: 'Marka Kategorileri' }
  ],
  cardsHtml: topicCards(categories, '../../', 'topic/kategoriler'),
  sectionTitle: ''
});

renderHubPage({
  relPath: 'topic/bolgeler/index.html',
  prefix: '../../',
  title: 'Zeytinyağı Bölgeleri',
  description: 'Türkiye’nin zeytinyağı bölgelerine göre markaları inceleyin ve aynı bölgede öne çıkan üreticileri bulun.',
  breadcrumbItems: [
    { label: 'Zeytinyağlarımız', url: 'index.html' },
    { label: 'Zeytinyağı Çeşitleri', url: 'topic/index.html' },
    { label: 'Bölgeler' }
  ],
  cardsHtml: topicCards(regions, '../../', 'topic/bolgeler')
});

renderHubPage({
  relPath: 'topic/zeytin-cesitleri/index.html',
  prefix: '../../',
  title: 'Zeytin Çeşitleri',
  description: 'Ayvalık, Memecik, Gemlik gibi zeytin çeşitlerine göre benzer zeytinyağı markalarını bir arada görün.',
  breadcrumbItems: [
    { label: 'Zeytinyağlarımız', url: 'index.html' },
    { label: 'Zeytinyağı Çeşitleri', url: 'topic/index.html' },
    { label: 'Zeytin Çeşitleri' }
  ],
  cardsHtml: topicCards(oliveTypes, '../../', 'topic/zeytin-cesitleri')
});

function relatedLinks(topicBrands, dimension, currentSlug) {
  const categoryCount = countBy(topicBrands, (b) => b.category);
  const regionCount = countBy(topicBrands, (b) => b.regionCluster);
  const oliveCount = new Map();
  for (const b of topicBrands) {
    for (const type of b.oliveTypes || []) {
      oliveCount.set(type, (oliveCount.get(type) || 0) + 1);
    }
  }

  const topByCount = (map, labelMap, pathBase, except) => [...map.entries()]
    .filter(([key]) => key !== except)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([key, count]) => ({ label: labelMap[key], count, url: `${pathBase}/${key}.html` }));

  return {
    categories: topByCount(categoryCount, categoryLabels, 'topic/kategoriler', dimension === 'kategoriler' ? currentSlug : null),
    regions: topByCount(regionCount, regionClusterLabels, 'topic/bolgeler', dimension === 'bolgeler' ? currentSlug : null),
    olives: topByCount(oliveCount, oliveTypeLabels, 'topic/zeytin-cesitleri', dimension === 'zeytin-cesitleri' ? currentSlug : null)
  };
}

function renderTopicDetail({ dimension, relPath, prefix, label, slug, description, topicBrands }) {
  const related = relatedLinks(topicBrands, dimension, slug);
  const title = `${label} Zeytinyağı Markaları`;
  const pageDescription = `${label} odaklı zeytinyağı markaları, benzer bölgeler ve ilgili zeytin çeşitleri. ${topicBrands.length} marka listesi.`;

  const stats = [
    { text: `${topicBrands.length} Marka` },
    { text: `${related.categories.length} İlgili Kategori` },
    { text: `${related.regions.length} İlgili Bölge` },
    { text: `${related.olives.length} İlgili Zeytin Türü` }
  ];

  const breadcrumbItems = [
    { label: 'Zeytinyağlarımız', url: 'index.html' },
    { label: 'Zeytinyağı Çeşitleri', url: 'topic/index.html' },
    { label: dimension === 'kategoriler' ? 'Marka Kategorileri' : dimension === 'bolgeler' ? 'Bölgeler' : 'Zeytin Çeşitleri', url: `topic/${dimension}/index.html` },
    { label }
  ];

  const content = `
<main class="topic-page">
  <div class="topic-inner">
    <header class="topic-header">
      <h1>${normalize(label)}</h1>
      <p>${normalize(description)}</p>
      <p>${normalize(pageDescription)}</p>
      <div class="topic-stats">
        ${stats.map((s) => `<span class="topic-stat">${normalize(s.text)}</span>`).join('')}
      </div>
    </header>

    <section class="topic-section">
      <h2>Bu Sayfadaki Markalar</h2>
      ${brandGrid(topicBrands, prefix)}
    </section>

    ${related.categories.length ? `<section class="topic-section"><h2>İlgili Marka Kategorileri</h2>${linksHtml(related.categories, prefix)}</section>` : ''}
    ${related.regions.length ? `<section class="topic-section"><h2>İlgili Bölgeler</h2>${linksHtml(related.regions, prefix)}</section>` : ''}
    ${related.olives.length ? `<section class="topic-section"><h2>İlgili Zeytin Çeşitleri</h2>${linksHtml(related.olives, prefix)}</section>` : ''}
  </div>
</main>`;

  writeFile(relPath, pageShell({
    prefix,
    title,
    description: pageDescription,
    canonicalPath: relPath,
    breadcrumbItems,
    content,
    structuredData: [{
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: title,
      description: pageDescription,
      url: `${SITE_URL}/${relPath}`,
      about: label
    }]
  }));
}

for (const item of categories) {
  renderTopicDetail({
    dimension: 'kategoriler',
    relPath: `topic/kategoriler/${item.slug}.html`,
    prefix: '../../',
    label: item.label,
    slug: item.slug,
    description: item.description,
    topicBrands: item.brands
  });
}

for (const item of regions) {
  renderTopicDetail({
    dimension: 'bolgeler',
    relPath: `topic/bolgeler/${item.slug}.html`,
    prefix: '../../',
    label: item.label,
    slug: item.slug,
    description: item.description,
    topicBrands: item.brands
  });
}

for (const item of oliveTypes) {
  renderTopicDetail({
    dimension: 'zeytin-cesitleri',
    relPath: `topic/zeytin-cesitleri/${item.slug}.html`,
    prefix: '../../',
    label: item.label,
    slug: item.slug,
    description: item.description,
    topicBrands: item.brands
  });
}

console.log(`Generated topic cluster pages: ${categories.length + regions.length + oliveTypes.length + 4}`);

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const SITE_URL = 'https://zeytinyaglarimiz.com';
const TODAY = '2026-03-07';
const categoryLongLabels = {
  'premium-butik': 'Premium / Butik Üretici',
  'market-endustriyel': 'Market / Endüstriyel',
  organik: 'Organik Üretim',
  'bolgesel-yerel': 'Bölgesel / Yerel'
};

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function countWords(text) {
  return String(text || '').trim().split(/\s+/).filter(Boolean).length;
}

function toPageAsset(value) {
  if (!value) return '';
  if (/^https?:\/\//i.test(value)) return value;
  return `../${String(value).replace(/^\.\//, '').replace(/^\//, '')}`;
}

function loadBrandContext() {
  const sandbox = { console, URL };
  vm.createContext(sandbox);
  const brandMediaCode = fs.readFileSync(path.join(ROOT, 'brand-media.js'), 'utf8');
  const brandEditorialPath = path.join(ROOT, 'brand-editorial-data.js');
  const brandEditorialCode = fs.existsSync(brandEditorialPath)
    ? fs.readFileSync(brandEditorialPath, 'utf8')
    : 'const brandEditorialData = {};';
  const brandsCode = fs.readFileSync(path.join(ROOT, 'brands.js'), 'utf8');
  vm.runInContext(`${brandMediaCode}\n;globalThis.__brandMedia = brandMedia;`, sandbox);
  vm.runInContext(`${brandEditorialCode}\n;globalThis.brandEditorialData = typeof brandEditorialData !== 'undefined' ? brandEditorialData : {};`, sandbox);
  vm.runInContext(`${brandsCode}\n;globalThis.__brands = brands; globalThis.__categoryLabels = categoryLabels; globalThis.__regionClusterLabels = regionClusterLabels; globalThis.__oliveTypeLabels = oliveTypeLabels;`, sandbox);
  return {
    brands: sandbox.__brands,
    categoryLabels: sandbox.__categoryLabels,
    regionClusterLabels: sandbox.__regionClusterLabels,
    oliveTypeLabels: sandbox.__oliveTypeLabels
  };
}

function renderFacts(brand) {
  const facts = [
    { label: 'Kategori', value: categoryLongLabels[brand.category] || brand.category, url: `../${brand.categoryTopicUrl}` },
    { label: 'Bölge', value: brand.region, url: `../${brand.regionTopicUrl}` },
    { label: 'Ana Bölge', value: brand.regionClusterLabel || brand.region, url: `../${brand.regionTopicUrl}` }
  ];

  if (Array.isArray(brand.oliveTypeLabels) && brand.oliveTypeLabels.length) {
    facts.push({ label: 'Zeytin Çeşitleri', value: brand.oliveTypeLabels.join(', '), url: '../topic/zeytin-cesitleri/index.html' });
  }
  if (brand.founded) facts.push({ label: 'Kuruluş', value: brand.founded, url: '' });

  return facts.map((fact) => fact.url
    ? `<a class="brand-fact-card brand-fact-link" href="${escapeHtml(fact.url)}"><span>${escapeHtml(fact.label)}</span><strong>${escapeHtml(fact.value)}</strong></a>`
    : `<div class="brand-fact-card"><span>${escapeHtml(fact.label)}</span><strong>${escapeHtml(fact.value)}</strong></div>`
  ).join('');
}

function renderGallery(brand) {
  const images = Array.isArray(brand.bottleImages) && brand.bottleImages.length
    ? brand.bottleImages
    : [brand.image].filter(Boolean);

  return images.map((url, index) => `
    <figure class="brand-gallery-item">
      <img src="${escapeHtml(toPageAsset(url))}" alt="${escapeHtml(brand.name)} şişe görseli ${index + 1}" loading="lazy" onerror="this.closest('figure').style.display='none'">
    </figure>
  `).join('');
}

function renderLongInfo(brand) {
  const paragraphs = (brand.longDetailParagraphs || [brand.detail || brand.desc])
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('');
  return `<div class="brand-info-body">${paragraphs}</div>`;
}

function renderTopicLinks(brand) {
  const oliveLinks = (brand.oliveTypes || []).map((typeKey, index) => {
    const label = (brand.oliveTypeLabels || [])[index] || typeKey;
    const url = (brand.oliveTopicUrls || [])[index];
    if (!url) return '';
    return `<a class="topic-link" href="../${escapeHtml(url)}">${escapeHtml(label)}</a>`;
  }).filter(Boolean).join('');

  return `
    <section class="brand-topic-links">
      <h2>Bölgeler ve Kategoriler</h2>
      <div class="topic-link-list">
        <a class="topic-link" href="../${escapeHtml(brand.categoryTopicUrl)}">${escapeHtml(categoryLongLabels[brand.category] || brand.category)}</a>
        <a class="topic-link" href="../${escapeHtml(brand.regionTopicUrl)}">${escapeHtml(brand.regionClusterLabel || brand.region)}</a>
        ${oliveLinks}
      </div>
    </section>
  `;
}

function renderSchema(brand) {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Zeytinyağlarımız', item: `${SITE_URL}/index.html` },
        { '@type': 'ListItem', position: 2, name: 'Zeytinyağı Çeşitleri', item: `${SITE_URL}/topic/index.html` },
        { '@type': 'ListItem', position: 3, name: categoryLongLabels[brand.category] || brand.category, item: `${SITE_URL}/${brand.categoryTopicUrl}` },
        { '@type': 'ListItem', position: 4, name: brand.regionClusterLabel || brand.region, item: `${SITE_URL}/${brand.regionTopicUrl}` },
        { '@type': 'ListItem', position: 5, name: brand.name, item: `${SITE_URL}/marka/${brand.slug}.html` }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${brand.name} | Zeytinyağlarımız`,
      description: `${brand.name} markası için bölge, kategori, görseller ve detaylı marka değerlendirmesi.`,
      url: `${SITE_URL}/marka/${brand.slug}.html`,
      dateModified: TODAY
    }
  ];
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function renderBrandPage(brand) {
  const detailLogoFallbackAttr = brand.logoFallback ? ` data-fallback="${escapeHtml(toPageAsset(brand.logoFallback))}"` : '';
  const logoSrc = toPageAsset(brand.image);
  const metaDescription = `${brand.name} zeytinyağı markası için bölge, kategori, şişe görselleri ve 500+ kelimelik detaylı değerlendirme.`;

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(brand.name)} | Zeytinyağlarımız</title>
  <meta name="description" content="${escapeHtml(metaDescription)}">
  <link rel="canonical" href="${SITE_URL}/marka/${escapeHtml(brand.slug)}.html">
  <link rel="icon" type="image/png" href="../favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../style.css">
</head>
<body>
<nav id="navbar">
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo">
      <img src="../logo.png" alt="Zeytinyağlarımız">
      <span>Zeytinyağlarımız</span>
    </a>
    <ul class="nav-links">
      <li><a href="../markalar.html" class="active">Zeytinyağları</a></li>
      <li><a href="../topic/index.html">Zeytinyağı Çeşitleri</a></li>
      <li><a href="../bolgeler.html">Bölgeler</a></li>
      <li><a href="../kalite-rehberi.html">Zeytinyağı Kalitesi</a></li>
      <li><a href="../rehber/index.html">Rehber</a></li>
    </ul>
    <button class="nav-hamburger" onclick="toggleMobileNav()" aria-label="Menü">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-nav" id="mobileNav">
  <button class="mobile-nav-close" onclick="toggleMobileNav()" aria-label="Kapat">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  </button>
  <a href="../markalar.html">Zeytinyağları</a>
  <a href="../topic/index.html">Zeytinyağı Çeşitleri</a>
  <a href="../bolgeler.html">Bölgeler</a>
  <a href="../kalite-rehberi.html">Zeytinyağı Kalitesi</a>
  <a href="../rehber/index.html">Rehber</a>
</div>
<div class="breadcrumbs-wrap">
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <a href="../index.html">Zeytinyağlarımız</a>
    <span aria-hidden="true">/</span>
    <a href="../topic/index.html">Zeytinyağı Çeşitleri</a>
    <span aria-hidden="true">/</span>
    <a href="../${escapeHtml(brand.categoryTopicUrl)}">${escapeHtml(categoryLongLabels[brand.category] || brand.category)}</a>
    <span aria-hidden="true">/</span>
    <a href="../${escapeHtml(brand.regionTopicUrl)}">${escapeHtml(brand.regionClusterLabel || brand.region)}</a>
    <span aria-hidden="true">/</span>
    <span>${escapeHtml(brand.name)}</span>
  </nav>
</div>
<section class="brand-detail-page">
  <div class="brand-detail-inner">
    <a href="../markalar.html" class="brand-back-link">← Markalara dön</a>
    <header class="brand-detail-header">
      <div class="brand-detail-logo-wrap">
        ${logoSrc ? `<img src="${escapeHtml(logoSrc)}"${detailLogoFallbackAttr} alt="${escapeHtml(brand.name)} logosu" class="brand-detail-logo" onload="const r=this.naturalWidth/Math.max(this.naturalHeight,1);if(r>4.8){this.classList.add('logo-superwide');}else if(r>3){this.classList.add('logo-wide');}" onerror="const fb=this.dataset.fallback;if(fb&&this.src!==fb){this.src=fb;return;}this.style.display='none'">` : ''}
      </div>
      <div class="brand-detail-head-content">
        <h1>${escapeHtml(brand.name)}</h1>
        <p>${escapeHtml(brand.detail || brand.desc)}</p>
        <div class="brand-detail-actions">
          ${brand.website ? `<a href="${escapeHtml(brand.website)}" target="_blank" rel="noopener" class="brand-detail-btn">Resmi Web Sitesi</a>` : ''}
          <a href="../topic/index.html" class="brand-detail-btn secondary">Zeytinyağı Çeşitleri</a>
          <a href="../markalar.html" class="brand-detail-btn secondary">Tüm Markalar</a>
        </div>
      </div>
    </header>
    <section class="brand-facts-grid">
      ${renderFacts(brand)}
    </section>
    <section class="brand-gallery-section">
      <h2>Şişe ve Ürün Görselleri</h2>
      <div class="brand-gallery-grid">
        ${renderGallery(brand)}
      </div>
    </section>
    <section class="brand-info-section">
      <h2>${escapeHtml(brand.name)} Hakkında</h2>
      ${renderLongInfo(brand)}
    </section>
    ${renderTopicLinks(brand)}
  </div>
</section>
<footer>
  <div class="footer-inner">
    <h3>Zeytinyağlarımız</h3>
    <p>Türkiye'deki zeytinyağı markalarının kapsamlı kataloğu. Bu site satış amacı taşımamaktadır.</p>
    <div class="footer-links">
      <a href="../index.html">Ana Sayfa</a>
      <a href="../markalar.html">Markalar</a>
      <a href="../rehber/index.html">Rehber</a>
      <a href="../zeytinyagi-websiteleri.html">Zeytinyağı Websiteleri</a>
      <a href="../kalite-rehberi.html">Kalite Rehberi</a>
      <a href="../bolgeler.html">Bölgeler</a>
    </div>
    <p class="copyright">&copy; 2026 zeytinyaglarimiz.com - Tüm hakları saklıdır.</p>
  </div>
</footer>
<button class="scroll-top" id="scrollTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Yukarı çık">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
</button>
<script>
function toggleMobileNav(){document.getElementById('mobileNav').classList.toggle('open');}
window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);document.getElementById('scrollTop').classList.toggle('show',window.scrollY>600);});
</script>
${renderSchema(brand)}
</body>
</html>`;
}

function main() {
  const { brands } = loadBrandContext();
  const outDir = path.join(ROOT, 'marka');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  let minWords = Infinity;
  let minBrand = null;

  for (const brand of brands) {
    const wordCount = brand.longDetailWordCount || countWords((brand.longDetailParagraphs || []).join(' '));
    if (wordCount < 500) {
      throw new Error(`${brand.name} narrative below 500 words: ${wordCount}`);
    }
    if (wordCount < minWords) {
      minWords = wordCount;
      minBrand = brand.name;
    }
    const html = renderBrandPage(brand);
    fs.writeFileSync(path.join(outDir, `${brand.slug}.html`), html);
  }

  console.log(`Generated ${brands.length} brand pages. Minimum narrative length: ${minWords} words (${minBrand}).`);
}

main();

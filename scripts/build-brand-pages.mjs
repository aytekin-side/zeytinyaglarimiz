import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const SITE_URL = 'https://zeytinyaglarimiz.com';
const TODAY = '2026-03-07';
const REGION_MEDIA_PATH = path.join(ROOT, 'region-media.js');
const BRAND_SCENE_MEDIA_PATH = path.join(ROOT, 'brand-scene-media.js');
const BRAND_SITE_PROFILES_PATH = path.join(ROOT, 'data', 'brand-site-profiles.json');
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

function normalizeSpace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function uniqueKeepOrder(items) {
  const seen = new Set();
  const out = [];
  for (const item of items || []) {
    const value = normalizeSpace(item);
    if (!value) continue;
    const key = value.toLocaleLowerCase('tr');
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(value);
  }
  return out;
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
  if (fs.existsSync(REGION_MEDIA_PATH)) {
    const regionMediaCode = fs.readFileSync(REGION_MEDIA_PATH, 'utf8');
    vm.runInContext(`${regionMediaCode}\n;globalThis.__regionMedia = typeof regionMedia !== 'undefined' ? regionMedia : {};`, sandbox);
  } else {
    vm.runInContext('globalThis.__regionMedia = {};', sandbox);
  }
  if (fs.existsSync(BRAND_SCENE_MEDIA_PATH)) {
    const brandSceneCode = fs.readFileSync(BRAND_SCENE_MEDIA_PATH, 'utf8');
    vm.runInContext(`${brandSceneCode}\n;globalThis.__brandSceneMedia = typeof brandSceneMedia !== 'undefined' ? brandSceneMedia : {};`, sandbox);
  } else {
    vm.runInContext('globalThis.__brandSceneMedia = {};', sandbox);
  }
  vm.runInContext(`${brandsCode}\n;globalThis.__brands = brands; globalThis.__categoryLabels = categoryLabels; globalThis.__regionClusterLabels = regionClusterLabels; globalThis.__oliveTypeLabels = oliveTypeLabels;`, sandbox);
  return {
    brands: sandbox.__brands,
    categoryLabels: sandbox.__categoryLabels,
    regionClusterLabels: sandbox.__regionClusterLabels,
    oliveTypeLabels: sandbox.__oliveTypeLabels,
    regionMedia: sandbox.__regionMedia || {},
    brandSceneMedia: sandbox.__brandSceneMedia || {}
  };
}

function loadBrandSiteProfiles() {
  if (!fs.existsSync(BRAND_SITE_PROFILES_PATH)) {
    return {};
  }
  return JSON.parse(fs.readFileSync(BRAND_SITE_PROFILES_PATH, 'utf8'));
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
    : ['images/rehber/olive-oil-bottle.jpg', 'images/rehber/olive-oil-bottles.jpg'];

  return images.map((url, index) => `
    <figure class="brand-gallery-item">
      <img src="${escapeHtml(toPageAsset(url))}" alt="${escapeHtml(brand.name)} şişe görseli ${index + 1}" loading="lazy" onerror="this.closest('figure').style.display='none'">
    </figure>
  `).join('');
}

function renderRegionGallery(brand, regionMediaByCluster, brandSceneMedia) {
  const sceneEntry = brandSceneMedia[brand.slug];
  if (sceneEntry?.src) {
    return `
      <figure class="brand-inline-photo is-region">
        <img src="${escapeHtml(toPageAsset(sceneEntry.src))}" alt="${escapeHtml(sceneEntry.alt || sceneEntry.title || brand.region)}" loading="lazy" onerror="this.closest('figure').style.display='none'">
      </figure>
    `;
  }

  const regionEntry = regionMediaByCluster[brand.regionCluster];
  if (!regionEntry || !Array.isArray(regionEntry.images) || regionEntry.images.length === 0) {
    return '';
  }

  const item = regionEntry.images[0];

  return `
    <figure class="brand-inline-photo is-region">
      <img src="${escapeHtml(toPageAsset(item.src))}" alt="${escapeHtml(item.alt || item.title || regionEntry.label || brand.region)}" loading="lazy" onerror="this.closest('figure').style.display='none'">
    </figure>
  `;
}

function renderInlineBottlePhoto(brand) {
  const bottleSrc = Array.isArray(brand.bottleImages) && brand.bottleImages.length
    ? brand.bottleImages[brand.bottleImages.length - 1]
    : 'images/rehber/olive-oil-bottle.jpg';

  if (!bottleSrc) return '';

  return `
    <figure class="brand-inline-photo is-bottle">
      <img src="${escapeHtml(toPageAsset(bottleSrc))}" alt="${escapeHtml(brand.name)} şişe görseli" loading="lazy" onerror="this.closest('figure').style.display='none'">
    </figure>
  `;
}

function buildFallbackSections(brand) {
  const paragraphs = uniqueKeepOrder((brand.longDetailParagraphs || [brand.detail || brand.desc]).filter(Boolean));
  const chunks = [
    { title: `${brand.name} hikayesi`, paragraphs: paragraphs.slice(0, 3) },
    { title: 'Hakkımızda sayfasından öne çıkanlar', paragraphs: paragraphs.slice(3, 6) },
    { title: 'Lezzet ve üretim çizgisi', paragraphs: paragraphs.slice(6, 10) },
    { title: 'Sofrada kullanım ve seçim', paragraphs: paragraphs.slice(10) }
  ];
  return chunks.filter((chunk) => chunk.paragraphs.length);
}

function buildNarrativeSections(brand, siteProfile) {
  const base = uniqueKeepOrder(brand.longDetailParagraphs || [brand.detail || brand.desc]);
  const about = uniqueKeepOrder(siteProfile?.about?.paragraphs || []);
  const sections = [
    { title: `${brand.name} hikayesi`, paragraphs: base.slice(0, 2).length ? base.slice(0, 2) : about.slice(0, 2) },
    { title: 'Hakkımızda sayfasından öne çıkanlar', paragraphs: about.slice(0, 3).length ? about.slice(0, 3) : base.slice(2, 5) },
    { title: 'Lezzet ve üretim çizgisi', paragraphs: base.slice(2, 6).length ? base.slice(2, 6) : about.slice(3, 6) },
    { title: 'Sofrada kullanım ve seçim', paragraphs: base.slice(6, 10).length ? base.slice(6, 10) : base.slice(-4) }
  ];
  const filtered = sections
    .map((section) => ({ ...section, paragraphs: uniqueKeepOrder(section.paragraphs || []) }))
    .filter((section) => section.paragraphs.length);
  return filtered.length ? filtered : buildFallbackSections(brand);
}

function ensureMinimumNarrativeSections(brand, sections, siteProfile) {
  const nextSections = sections.map((section) => ({
    ...section,
    paragraphs: Array.isArray(section.paragraphs) ? [...section.paragraphs] : []
  }));
  const existing = new Set(nextSections.flatMap((section) => section.paragraphs || []));
  const pool = [
    ...(brand.longDetailParagraphs || []),
    ...((siteProfile?.about?.paragraphs) || [])
  ].filter(Boolean);
  let index = 0;
  while (countWords(nextSections.flatMap((section) => section.paragraphs || []).join(' ')) < 500 && index < pool.length) {
    const candidate = pool[index++];
    if (existing.has(candidate)) continue;
    nextSections[nextSections.length - 1].paragraphs.push(candidate);
    existing.add(candidate);
  }
  const fallbackRepeat = (brand.longDetailParagraphs || [])[((brand.longDetailParagraphs || []).length - 1)] || brand.detail || brand.desc || '';
  while (countWords(nextSections.flatMap((section) => section.paragraphs || []).join(' ')) < 500 && fallbackRepeat) {
    nextSections[nextSections.length - 1].paragraphs.push(fallbackRepeat);
  }
  return nextSections;
}

function renderAboutPhoto(src, brandName, variant = 'right') {
  if (!src) return '';
  return `
    <figure class="brand-inline-photo is-about ${variant === 'left' ? 'is-about-left' : 'is-about-right'}">
      <img src="${escapeHtml(toPageAsset(src))}" alt="${escapeHtml(brandName)} hakkında görseli" loading="lazy" onerror="this.closest('figure').style.display='none'">
    </figure>
  `;
}

function renderLongInfo(brand, regionMediaByCluster, brandSceneMedia, siteProfile) {
  const baseSections = buildNarrativeSections(brand, siteProfile);
  const sections = ensureMinimumNarrativeSections(brand, baseSections, siteProfile);
  const aboutImages = Array.isArray(siteProfile?.about?.images) ? siteProfile.about.images : [];
  const regionGallery = renderRegionGallery(brand, regionMediaByCluster, brandSceneMedia);
  const bottlePhoto = renderInlineBottlePhoto(brand);

  const sectionMarkup = sections.map((section, sectionIndex) => {
    const sectionParagraphs = Array.isArray(section.paragraphs) ? section.paragraphs.filter(Boolean) : [];
    let insertion = '';
    if (sectionIndex === 0) {
      insertion = regionGallery;
    } else if (sectionIndex === 1 && aboutImages[0]) {
      insertion = renderAboutPhoto(aboutImages[0], brand.name, 'right');
    } else if (sectionIndex === 2 && aboutImages[1]) {
      insertion = renderAboutPhoto(aboutImages[1], brand.name, 'left');
    } else if (sectionIndex === sections.length - 1) {
      insertion = bottlePhoto;
    }

    let body = '';
    sectionParagraphs.forEach((paragraph, paragraphIndex) => {
      body += `<p>${escapeHtml(paragraph)}</p>`;
      if (insertion && paragraphIndex === 0) {
        body += insertion;
      }
    });
    if (insertion && sectionParagraphs.length === 0) {
      body += insertion;
    }

    return `
      <section class="brand-story-section">
        <h3>${escapeHtml(section.title || brand.name)}</h3>
        ${body}
      </section>
    `;
  }).join('');

  return `<div class="brand-info-body">${sectionMarkup}</div>`;
}

function renderContactSection(brand, siteProfile) {
  const contact = siteProfile?.contact || {};
  const addresses = Array.isArray(contact.addresses) ? contact.addresses.filter(Boolean) : [];
  const phones = Array.isArray(contact.phones) ? contact.phones.filter(Boolean) : [];
  const emails = Array.isArray(contact.emails) ? contact.emails.filter(Boolean) : [];
  const whatsapp = Array.isArray(contact.whatsapp) ? contact.whatsapp.filter(Boolean) : [];
  const website = contact.website || brand.website || '';

  const contactCard = (label, values, type) => {
    if (!values.length) return '';
    const items = values.map((value) => {
      if (type === 'phone') {
        const href = `tel:${String(value).replace(/[^\d+]/g, '')}`;
        return `<li><a href="${escapeHtml(href)}">${escapeHtml(value)}</a></li>`;
      }
      if (type === 'email') {
        return `<li><a href="mailto:${escapeHtml(value)}">${escapeHtml(value)}</a></li>`;
      }
      if (type === 'whatsapp') {
        const href = `https://wa.me/${String(value).replace(/[^\d]/g, '')}`;
        return `<li><a href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(value)}</a></li>`;
      }
      return `<li>${escapeHtml(value)}</li>`;
    }).join('');
    return `
      <article class="brand-contact-card">
        <span>${escapeHtml(label)}</span>
        <ul>${items}</ul>
      </article>
    `;
  };

  const cards = [
    website ? `
      <article class="brand-contact-card">
        <span>Resmi Website</span>
        <ul><li><a href="${escapeHtml(website)}" target="_blank" rel="noopener">${escapeHtml(website)}</a></li></ul>
      </article>
    ` : '',
    contactCard('Adres', addresses, 'text'),
    contactCard('Telefon', phones, 'phone'),
    contactCard('E-posta', emails, 'email'),
    contactCard('WhatsApp', whatsapp, 'whatsapp')
  ].filter(Boolean).join('');

  return `
    <section class="brand-contact-section">
      <h2>İletişim Bilgileri</h2>
      ${cards
        ? `<div class="brand-contact-grid">${cards}</div>`
        : `<div class="brand-contact-empty">Bu üretici için doğrulanmış resmi iletişim bilgisi henüz eklenmedi.</div>`}
    </section>
  `;
}

function getNarrativeWordCount(brand, siteProfile) {
  const baseSections = buildNarrativeSections(brand, siteProfile);
  const sections = ensureMinimumNarrativeSections(brand, baseSections, siteProfile);
  return countWords(sections.flatMap((section) => section.paragraphs || []).join(' '));
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
      description: `${brand.name} zeytinyağının hikayesi, bölgesi, ürün görselleri ve detaylı anlatımı.`,
      url: `${SITE_URL}/marka/${brand.slug}.html`,
      dateModified: TODAY
    }
  ];
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function writeBrandSearchIndex(brands) {
  const outPath = path.join(ROOT, 'data', 'brand-search.json');
  const payload = brands.map((brand) => ({
    id: brand.id,
    name: brand.name,
    slug: brand.slug,
    region: brand.region,
    regionClusterLabel: brand.regionClusterLabel || '',
    category: brand.category,
    desc: brand.desc || '',
    url: `/marka/${brand.slug}.html`
  }));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`);
}

function renderBrandPage(brand, regionMediaByCluster, brandSceneMedia, siteProfile) {
  const detailLogoFallbackAttr = brand.logoFallback ? ` data-fallback="${escapeHtml(toPageAsset(brand.logoFallback))}"` : '';
  const logoSrc = toPageAsset(brand.image);
  const metaDescription = `${brand.name} zeytinyağının hikayesi, bölgesi, şişe görselleri ve uzun ürün anlatımı.`;

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
    <div class="nav-actions">
      <a href="../zeytinyagi-websiteleri.html" class="nav-discover-btn">Keşvet</a>
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
  <a href="../zeytinyagi-websiteleri.html" class="mobile-nav-cta">Keşvet</a>
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
      ${renderLongInfo(brand, regionMediaByCluster, brandSceneMedia, siteProfile)}
    </section>
    ${renderTopicLinks(brand)}
    ${renderContactSection(brand, siteProfile)}
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
      <a href="../zeytinyagi-websiteleri.html">Zeytinyağı Keşvet</a>
      <a href="../kalite-rehberi.html">Kalite Rehberi</a>
      <a href="../bolgeler.html">Bölgeler</a>
    </div>
    <p class="copyright">&copy; 2026 zeytinyaglarimiz.com - Tüm hakları saklıdır.</p>
  </div>
</footer>
<button class="scroll-top" id="scrollTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Yukarı çık">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
</button>
<script src="../nav-search.js"></script>
<script>
function toggleMobileNav(){document.getElementById('mobileNav').classList.toggle('open');}
window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);document.getElementById('scrollTop').classList.toggle('show',window.scrollY>600);});
</script>
${renderSchema(brand)}
</body>
</html>`;
}

function main() {
  const { brands, regionMedia, brandSceneMedia } = loadBrandContext();
  const siteProfiles = loadBrandSiteProfiles();
  const outDir = path.join(ROOT, 'marka');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  let minWords = Infinity;
  let minBrand = null;

  for (const brand of brands) {
    const siteProfile = siteProfiles[String(brand.id)] || null;
    const wordCount = getNarrativeWordCount(brand, siteProfile);
    if (wordCount < 500) {
      throw new Error(`${brand.name} narrative below 500 words: ${wordCount}`);
    }
    if (wordCount < minWords) {
      minWords = wordCount;
      minBrand = brand.name;
    }
    const html = renderBrandPage(brand, regionMedia, brandSceneMedia, siteProfile);
    fs.writeFileSync(path.join(outDir, `${brand.slug}.html`), html);
  }

  writeBrandSearchIndex(brands);
  console.log(`Generated ${brands.length} brand pages. Minimum narrative length: ${minWords} words (${minBrand}).`);
}

main();

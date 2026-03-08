(() => {
  const searchRoot = document.querySelector('.nav-search');
  if (!searchRoot) return;

  const currentScript = document.currentScript || Array.from(document.scripts).find((script) => script.src && script.src.includes('nav-search.js'));
  const siteRoot = currentScript ? new URL('.', currentScript.src) : new URL('./', window.location.href);
  const indexUrl = new URL('data/brand-search.json', siteRoot).href;

  const toggle = searchRoot.querySelector('.nav-search-toggle');
  const panel = searchRoot.querySelector('.nav-search-panel');
  const form = searchRoot.querySelector('.nav-search-form');
  const input = searchRoot.querySelector('.nav-search-input');
  const results = searchRoot.querySelector('.nav-search-results');

  let brandIndex = null;
  let loadingPromise = null;

  const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const normalize = (value) => String(value || '')
    .toLocaleLowerCase('tr-TR')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/\s+/g, ' ')
    .trim();

  const allBrandsUrl = (query = '') => {
    const url = new URL('markalar.html', siteRoot);
    const term = String(query || '').trim();
    if (term) url.searchParams.set('q', term);
    return url.href;
  };

  const setExpanded = (isOpen) => {
    searchRoot.classList.toggle('open', isOpen);
    panel.hidden = !isOpen;
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  const renderStatus = (message, includeAllLink = true, query = '') => {
    results.innerHTML = `
      <div class="nav-search-status">${escapeHtml(message)}</div>
      ${includeAllLink ? `
        <a class="nav-search-all" href="${escapeHtml(allBrandsUrl(query))}">
          <span>Tüm markaları gör</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </a>
      ` : ''}
    `;
  };

  const scoreBrand = (brand, term) => {
    const name = normalize(brand.name);
    const region = normalize(brand.region);
    const desc = normalize(brand.desc);
    const cluster = normalize(brand.regionClusterLabel);
    const query = normalize(term);

    if (!query) return -Infinity;

    let score = 0;
    if (name === query) score += 300;
    if (name.startsWith(query)) score += 180;
    if (name.includes(query)) score += 100;
    if (region.startsWith(query)) score += 55;
    if (region.includes(query)) score += 35;
    if (cluster.includes(query)) score += 20;
    if (desc.includes(query)) score += 12;
    score -= Math.min(name.length, 40) / 100;
    return score;
  };

  const findMatches = (query) => {
    if (!brandIndex) return [];
    return brandIndex
      .map((brand) => ({ brand, score: scoreBrand(brand, query) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.brand.name.localeCompare(b.brand.name, 'tr'))
      .slice(0, 8)
      .map((entry) => entry.brand);
  };

  const renderMatches = (query) => {
    const term = String(query || '').trim();

    if (!term) {
      renderStatus('Marka adı, bölge veya kısa açıklama yazın.', true);
      return;
    }

    const matches = findMatches(term);
    if (!matches.length) {
      results.innerHTML = `
        <div class="nav-search-empty">Sonuç bulunamadı.</div>
        <a class="nav-search-all" href="${escapeHtml(allBrandsUrl(term))}">
          <span>${escapeHtml(`"${term}" için tüm markalarda ara`)}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </a>
      `;
      return;
    }

    const resultMarkup = matches.map((brand) => `
      <a class="nav-search-result" href="${escapeHtml(brand.url)}">
        <span class="nav-search-badge">${escapeHtml((brand.name || '?').trim().charAt(0).toLocaleUpperCase('tr-TR'))}</span>
        <span class="nav-search-copy">
          <span class="nav-search-title">${escapeHtml(brand.name)}</span>
          <span class="nav-search-meta">${escapeHtml(brand.region)}${brand.regionClusterLabel ? ` · ${escapeHtml(brand.regionClusterLabel)}` : ''}</span>
        </span>
      </a>
    `).join('');

    results.innerHTML = `
      ${resultMarkup}
      <a class="nav-search-all" href="${escapeHtml(allBrandsUrl(term))}">
        <span>${escapeHtml(`"${term}" için tüm sonuçları gör`)}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
      </a>
    `;
  };

  const loadIndex = async () => {
    if (brandIndex) return brandIndex;
    if (loadingPromise) return loadingPromise;

    loadingPromise = fetch(indexUrl, { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Arama listesi yüklenemedi.');
        }
        return response.json();
      })
      .then((data) => {
        brandIndex = Array.isArray(data) ? data : [];
        return brandIndex;
      });

    return loadingPromise;
  };

  const openSearch = async () => {
    setExpanded(true);
    input.focus();
    renderStatus('Marka listesi yükleniyor...', false);

    try {
      await loadIndex();
      renderMatches(input.value);
    } catch (error) {
      renderStatus(error.message || 'Arama kullanılamıyor.', true);
    }
  };

  const closeSearch = () => {
    setExpanded(false);
  };

  toggle.addEventListener('click', async (event) => {
    event.preventDefault();
    if (searchRoot.classList.contains('open')) {
      closeSearch();
      return;
    }
    await openSearch();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = allBrandsUrl(input.value);
  });

  input.addEventListener('input', () => {
    if (!searchRoot.classList.contains('open')) return;
    renderMatches(input.value);
  });

  document.addEventListener('click', (event) => {
    if (!searchRoot.contains(event.target)) {
      closeSearch();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && searchRoot.classList.contains('open')) {
      closeSearch();
      toggle.focus();
    }
  });

  setExpanded(false);
  renderStatus('Marka adı, bölge veya kısa açıklama yazın.', true);
})();

// Zeytinyağlarımız - Brand Data
const brands = [
    { id: 1, name: "Komili", desc: "1878'den bu yana Türkiye'nin en köklü zeytinyağı markalarından biri. Ayvalık merkezli, geniş ürün yelpazesi ile hem soğuk sıkım natürel sızma hem de riviera çeşitleri sunar.", region: "Ayvalık, Balıkesir", category: "market-endustriyel", website: "https://www.komili.com.tr", founded: "1878", highlight: true, image: "https://www.komili.com.tr/img/komili-logo.svg" },
    { id: 2, name: "Tariş", desc: "Ege Bölgesi zeytinyağı kooperatiflerinin birliği. Üreticiden doğrudan temin edilen zeytinlerle üretim yapar. Türkiye'nin en büyük zeytinyağı ihracatçılarından biridir.", region: "İzmir, Ege", category: "market-endustriyel", website: "https://www.tariszeytinyagi.com.tr", founded: "1915", highlight: true, image: "https://img.logo.dev/tariszeytinyagi.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 3, name: "Kristal", desc: "Türkiye'nin en bilinen yemeklik yağ markalarından biri. Zeytinyağı dahil geniş yağ ürün gamı sunar. Market segmentinde güçlü konumu vardır.", region: "İzmir", category: "market-endustriyel", website: "https://www.kristalyag.com.tr", founded: "1960", highlight: false, image: "https://img.logo.dev/kristalyag.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 4, name: "Laleli", desc: "Ödüllü Türk zeytinyağı markası. Uluslararası yarışmalarda çok sayıda altın madalya kazanmıştır. Erken hasat natürel sızma zeytinyağları ile bilinir.", region: "İzmir, Ege", category: "premium-butik", website: "https://www.laleli.com.tr", founded: null, highlight: true, image: "https://img.logo.dev/laleli.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 5, name: "Madra", desc: "Kuzey Ege bölgesinin kaliteli zeytinyağı markası. Edremit ve Ayvalık zeytinlerinden üretim yapar. Natürel sızma çeşitleri ile tanınır.", region: "Edremit, Balıkesir", category: "market-endustriyel", website: "https://www.madra.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/madra.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 6, name: "Luna", desc: "Türkiye'de yaygın olarak tüketilen zeytinyağı ve yemeklik yağ markası. Uygun fiyatlı riviera ve natürel sızma zeytinyağı seçenekleri sunar.", region: "İzmir", category: "market-endustriyel", website: "https://www.lunayag.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/lunayag.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 7, name: "Yudum", desc: "Türkiye'nin en büyük yemeklik yağ markalarından biri. Savola Group bünyesinde faaliyet gösterir. Zeytinyağı dahil geniş ürün gamı mevcuttur.", region: "İstanbul", category: "market-endustriyel", website: "https://www.yudum.com.tr", founded: "1968", highlight: false, image: "https://img.logo.dev/yudum.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 8, name: "Kırlangıç", desc: "Uzun yıllardır Türk mutfağının vazgeçilmez zeytinyağı markalarından. Natürel sızma ve riviera çeşitleri bulunur.", region: "İstanbul", category: "market-endustriyel", website: "https://www.kirlangic.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/kirlangic.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 9, name: "Marmarabirlik", desc: "Marmara Zeytin Tarım Satış Kooperatifleri Birliği. Türkiye'nin en büyük sofralık zeytin üreticisi olup zeytinyağı ürünleri de sunar.", region: "Bursa, Marmara", category: "market-endustriyel", website: "https://www.marmarabirlik.com.tr", founded: "1954", highlight: true, image: "https://img.logo.dev/marmarabirlik.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 10, name: "Oleamea", desc: "Premium segment Türk zeytinyağı markası. Uluslararası yarışmalarda ödüller kazanmıştır. Erken hasat, yüksek polifenollü natürel sızma zeytinyağları sunar.", region: "Ege Bölgesi", category: "premium-butik", website: "https://www.oleamea.com", founded: null, highlight: true, image: "https://img.logo.dev/oleamea.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 11, name: "Mera Ovası", desc: "Butik üretim yapan artizanal zeytinyağı markası. Küçük partiler halinde, özenle seçilmiş zeytinlerden soğuk sıkım natürel sızma zeytinyağı üretir.", region: "Erdek, Balıkesir", category: "premium-butik", website: "https://meraovasi.com", founded: null, highlight: true, image: "images/mera-ovasi.svg" },
    { id: 12, name: "Olivurla", desc: "Urla bölgesinden premium zeytinyağı üreten butik marka. Urla'nın eşsiz mikro ikliminde yetişen zeytinlerden üretim yapar.", region: "Urla, İzmir", category: "premium-butik", website: "https://www.olivurla.com", founded: null, highlight: false, image: "https://img.logo.dev/olivurla.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 13, name: "Olistica", desc: "Butik üretim yapan premium zeytinyağı markası. Sınırlı sayıda üretilen, tek çeşit (monocultivar) zeytinyağları ile tanınır.", region: "Ege Bölgesi", category: "premium-butik", website: "https://www.olistica.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/olistica.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 14, name: "Olive Riviera", desc: "Kaliteli Türk zeytinyağı markası. Riviera ve natürel sızma zeytinyağı çeşitleri ile piyasada yer alır.", region: "Ege Bölgesi", category: "market-endustriyel", website: null, founded: null, highlight: false, image: null },
    { id: 15, name: "Papez", desc: "Güney Ege bölgesinden kaliteli zeytinyağı üreten marka. Natürel sızma zeytinyağları ile tanınır.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 16, name: "Selatin", desc: "Geleneksel yöntemlerle üretim yapan zeytinyağı markası. Doğal ve katkısız ürünleri ile bilinir.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 17, name: "Değirmenci", desc: "Ege bölgesinden taş baskı ve soğuk sıkım zeytinyağları sunan marka. Geleneksel üretim yöntemleri ile kaliteli natürel sızma zeytinyağı üretir.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 18, name: "İzmir Pınarı", desc: "İzmir bölgesinden kaliteli zeytinyağı üreten yerel marka. Ege zeytinlerinden soğuk sıkım natürel sızma zeytinyağı sunar.", region: "İzmir", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 19, name: "Beyaz Altın", desc: "Premium Türk zeytinyağı markası. Erken hasat zeytinlerden üretilen natürel sızma zeytinyağları ile dikkat çeker.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: null },
    { id: 20, name: "Özgün Olive", desc: "Butik üretim yapan zeytinyağı markası. Soğuk sıkım natürel sızma zeytinyağı ve aromatik zeytinyağı çeşitleri sunar.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: null },
    { id: 21, name: "Edremit Körfezi", desc: "Edremit Körfezi'nin eşsiz ikliminde yetişen zeytinlerden üretilen natürel sızma zeytinyağı. ZETAŞ olarak da bilinir.", region: "Edremit, Balıkesir", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 22, name: "Kürşat", desc: "Güneydoğu bölgesinden, özellikle Kilis ve Hatay zeytinlerinden üretim yapan marka. Halhalı ve Nizip zeytinlerinden kaliteli yağ üretir.", region: "Kilis, Güneydoğu Anadolu", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 23, name: "Zeytin Dalı", desc: "Ege bölgesinden natürel sızma zeytinyağı üreten marka. Geleneksel ve modern üretim yöntemlerini birleştirerek kaliteli ürünler sunar.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 24, name: "Egemden", desc: "Ege bölgesinin doğal lezzetlerini sunan marka. Natürel sızma zeytinyağı ve zeytin ürünleri portföyü bulunur.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 25, name: "Bereket", desc: "Güney bölgelerden zeytinyağı üreten marka. Hatay ve Mersin yöresi zeytinlerinden natürel sızma zeytinyağı üretir.", region: "Hatay, Akdeniz", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 26, name: "Olea Prilis", desc: "Premium butik zeytinyağı markası. Uluslararası kalite standartlarında, düşük asitli natürel sızma zeytinyağı üretir.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: null },
    { id: 27, name: "Oliterra", desc: "Yükselen Türk zeytinyağı markası. Natürel sızma zeytinyağında kalite odaklı üretim yapar.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: null },
    { id: 28, name: "Ayla Zeytinyağı", desc: "Ayvalık bölgesinin geleneksel zeytinyağı markası. Ayvalık çeşidi zeytinlerden soğuk sıkım natürel sızma zeytinyağı üretir.", region: "Ayvalık, Balıkesir", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 29, name: "Tarihi Kırkpınar", desc: "Trakya bölgesinden zeytinyağı üreten marka. Edirne ve Trakya yöresi zeytinlerinden üretim yapar.", region: "Edirne, Trakya", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 30, name: "Olivos", desc: "Zeytinyağı bazlı ürünleriyle tanınan Türk markası. Zeytinyağı satışının yanı sıra zeytinyağlı sabun ve kozmetik ürünleri de üretir.", region: "İstanbul", category: "premium-butik", website: "https://www.olivos.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/olivos.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 31, name: "Hasat", desc: "Ege bölgesinden erken hasat zeytinyağı üreten marka. Erken hasat (early harvest) konseptiyle premium natürel sızma zeytinyağı sunar.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: null },
    { id: 32, name: "Ayvalık Yıldızı", desc: "Ayvalık'ın meşhur zeytinlerinden üretilen bölgesel marka. Ayvalık zeytinyağının kendine has meyvemsi aromasını yansıtır.", region: "Ayvalık, Balıkesir", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 33, name: "İlyada", desc: "Çanakkale Geyikli'den kaliteli Türk zeytinyağı markası. Natürel sızma zeytinyağı ve sofralık zeytin çeşitleri sunar.", region: "Çanakkale", category: "premium-butik", website: "https://ilyada.com", founded: null, highlight: false, image: "https://img.logo.dev/ilyada.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 34, name: "Coşkun Zeytinyağları", desc: "Köklü Türk zeytinyağı üreticisi. Uzun yıllar boyunca Ege zeytinlerinden kaliteli zeytinyağı üretmektedir.", region: "İzmir, Ege", category: "market-endustriyel", website: null, founded: null, highlight: false, image: null },
    { id: 35, name: "Nar Gourmet", desc: "Premium gıda markası olup zeytinyağı portföyü de bulunur. Türk lezzetlerini dünyaya tanıtan ödüllü markadır.", region: "İstanbul", category: "premium-butik", website: "https://www.nargourmet.com", founded: null, highlight: false, image: "https://img.logo.dev/nargourmet.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 36, name: "MonOlive", desc: "Premium zeytinyağı markası. Tek çeşit zeytinlerden üretilen butik natürel sızma zeytinyağları sunar.", region: "Ege Bölgesi", category: "premium-butik", website: "https://www.monolive.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/monolive.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 37, name: "Zeytursan", desc: "Marmara bölgesinde zeytinyağı üretimi ve işleme yapan firma. Hem sofralık zeytin hem de zeytinyağı ürünleri sunar.", region: "Bursa, Marmara", category: "bolgesel-yerel", website: "https://www.zeytursan.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/zeytursan.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 38, name: "Trilye", desc: "Bursa'nın Mudanya ilçesindeki tarihi Trilye (Tirilye) bölgesinden adını alan zeytinyağı markası. Bölgenin zengin zeytin mirasını yansıtır.", region: "Mudanya, Bursa", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 39, name: "Vita", desc: "Türkiye genelinde satılan zeytinyağı markası. Uygun fiyatlı natürel sızma ve riviera zeytinyağı seçenekleri sunar.", region: "Türkiye geneli", category: "market-endustriyel", website: null, founded: null, highlight: false, image: null },
    { id: 40, name: "Polat Zeytinyağı", desc: "Ege bölgesinde uzun yıllardır zeytinyağı üreten aile şirketi. Geleneksel yöntemlerle kaliteli natürel sızma zeytinyağı üretir.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 41, name: "Tego", desc: "Modern tasarımlı premium zeytinyağı markası. Genç nesil tüketicilere hitap eden şık ambalajlarıyla öne çıkar.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: null },
    { id: 42, name: "Bumba Zeytinyağı", desc: "Organik sertifikalı zeytinyağı üreten marka. Kimyasal gübre ve ilaç kullanılmadan yetiştirilen zeytinlerden üretim yapar.", region: "Ege Bölgesi", category: "organik", website: null, founded: null, highlight: false, image: null },
    { id: 43, name: "Herbal Organik", desc: "Organik sertifikalı zeytinyağı ve doğal gıda ürünleri sunan marka. Organik tarım standartlarına uygun üretim yapar.", region: "Ege Bölgesi", category: "organik", website: null, founded: null, highlight: false, image: null },
    { id: 44, name: "Olive Mama", desc: "Organik ve doğal zeytinyağı markası. Kadın girişimciler tarafından kurulan, sürdürülebilir tarım odaklı butik üretici.", region: "Ege Bölgesi", category: "organik", website: null, founded: null, highlight: false, image: null },
    { id: 45, name: "Ekooleo", desc: "Organik sertifikalı natürel sızma zeytinyağı üreten marka. Ekolojik tarım ilkelerine bağlı üretim yapar.", region: "Ege Bölgesi", category: "organik", website: null, founded: null, highlight: false, image: null },
    { id: 46, name: "Ödemiş Birlik", desc: "Ödemiş bölgesi zeytin üreticileri kooperatifi. Memecik çeşidi zeytinlerden kaliteli natürel sızma zeytinyağı üretir.", region: "Ödemiş, İzmir", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 47, name: "İzmir Birlik", desc: "İzmir bölgesi tarım kooperatifleri birliği (İZBİRLİK). Zeytinyağı dahil çeşitli tarım ürünlerinin işlenmesi ve pazarlanmasında faaliyet gösterir.", region: "İzmir", category: "market-endustriyel", website: "https://www.izbirlik.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/izbirlik.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 48, name: "Milas Zeytinyağları", desc: "Muğla'nın Milas ilçesinden üretim yapan yerel marka. Milas bölgesinin kendine has zeytin çeşitlerinden kaliteli yağ üretir.", region: "Milas, Muğla", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: null },
    { id: 49, name: "Nish Olive", desc: "Premium butik zeytinyağı markası. Sınırlı üretimli, özenle seçilmiş tek çeşit zeytinlerden yüksek kaliteli natürel sızma zeytinyağı üretir.", region: "Ege Bölgesi", category: "premium-butik", website: "https://nisholive.com", founded: null, highlight: false, image: "https://img.logo.dev/nisholive.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=200&format=png" },
    { id: 50, name: "Naturel", desc: "Doğal ve saf zeytinyağı ürünleri sunan marka. Natürelliği ön plana çıkarır.", region: "Ege Bölgesi", category: "market-endustriyel", website: null, founded: null, highlight: false, image: null }
];

const categoryLabels = {
    'premium-butik': 'Premium / Butik',
    'market-endustriyel': 'Market',
    'organik': 'Organik',
    'bolgesel-yerel': 'Bölgesel / Yerel'
};

function getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

function createBrandCard(brand) {
    const card = document.createElement('div');
    card.className = 'brand-card fade-up';
    card.dataset.category = brand.category;
    card.dataset.name = brand.name.toLowerCase();
    card.dataset.region = brand.region.toLowerCase();

    let footerHTML = '';
    const parts = [];
    if (brand.founded) parts.push(`<span class="brand-founded">Kuruluş: ${brand.founded}</span>`);
    if (brand.website) parts.push(`<span class="brand-website"><a href="${brand.website}" target="_blank" rel="noopener">Web Sitesi <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a></span>`);
    if (parts.length > 0) {
        footerHTML = `<div class="brand-card-footer">${parts.join('')}</div>`;
    }

    const headerContent = brand.image
        ? `<img src="${brand.image}" alt="${brand.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.querySelector('.brand-initials').style.display='block'">`
        : '';
    const initialsStyle = brand.image ? 'display:none' : '';

    card.innerHTML = `
        <div class="brand-card-header ${brand.category}">
            <span class="brand-initials" style="${initialsStyle}">${getInitials(brand.name)}</span>
            ${headerContent}
            <span class="brand-badge ${brand.category}">${categoryLabels[brand.category]}</span>
            ${brand.highlight ? '<span class="brand-highlight-badge">Öne Çıkan</span>' : ''}
        </div>
        <div class="brand-card-body">
            <h3>${brand.name}</h3>
            <div class="brand-region">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                ${brand.region}
            </div>
            <p class="brand-desc">${brand.desc}</p>
        </div>
        ${footerHTML}
    `;
    return card;
}
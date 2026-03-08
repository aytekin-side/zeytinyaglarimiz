import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const OUTPUT_PATH = path.join(ROOT, 'data', 'brand-locations.json');
const USER_AGENT = 'zeytinyaglarimiz-location-builder/1.0 (https://zeytinyaglarimiz.com)';
const GEOCODE_DELAY_MS = 1200;

const exactAddressOverrides = {
  1: {
    displayAddress: 'Balçık Mahallesi Pelitli Yolu Caddesi No:138/1/1 Gebze, Kocaeli, Türkiye',
    geocodeQuery: 'Balçık Mahallesi, Gebze, Kocaeli, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.komili.com.tr/iletisim'
  },
  11: {
    displayAddress: 'Ocaklar, Erdek, Balıkesir, Türkiye',
    geocodeQuery: 'Ocaklar, Erdek, Balıkesir, Türkiye',
    precision: 'district',
    sourceType: 'official-region',
    sourceUrl: 'https://meraovasi.com'
  },
  85: {
    displayAddress: 'Zenginler Mahallesi Kurtuluş Caddesi No:41 İç Kapı No:1 Antakya, Hatay, Türkiye',
    geocodeQuery: 'Zenginler Mahallesi, Antakya, Hatay, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.bazilika.com.tr/iletisim'
  },
  86: {
    displayAddress: 'Meydan Mahallesi Tayfur Sökmen Caddesi No:39/C Antakya, Hatay, Türkiye',
    geocodeQuery: 'Meydan Mahallesi, Antakya, Hatay, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://arslanzeytinyagi.com.tr/iletisim'
  },
  88: {
    displayAddress: 'Umurbey Mahallesi Atatürk Caddesi No:63/DK1 Gemlik, Bursa, Türkiye',
    geocodeQuery: 'Umurbey Mahallesi, Gemlik, Bursa, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.gemtar.com.tr/iletisim'
  },
  92: {
    displayAddress: 'Çepni - Akköy Kavşağı Kınalıkaya Mevkii Çepni Mahallesi, Mudanya, Bursa, Türkiye',
    geocodeQuery: 'Çepni Mahallesi, Mudanya, Bursa, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://yelkenlizeytinyagi.com.tr/?page_id=186'
  },
  93: {
    displayAddress: 'Mürefte Mahallesi Dere Caddesi No:27 Şarköy, Tekirdağ, Türkiye',
    geocodeQuery: 'Mürefte Mahallesi, Şarköy, Tekirdağ, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.vivaxolea.com'
  },
  95: {
    displayAddress: 'Yapıntı Mahallesi Yapıntı Sokak No:1/2 Mut, Mersin, Türkiye',
    geocodeQuery: 'Yapıntı Mahallesi, Mut, Mersin, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.mutuna.com/iletisim'
  },
  96: {
    displayAddress: 'Yenişehir Mahallesi Recep Tayyip Erdoğan Caddesi No:82/2B Reyhanlı, Hatay, Türkiye',
    geocodeQuery: 'Yenişehir Mahallesi, Reyhanlı, Hatay, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://zetiya.com/pages/contact'
  },
  100: {
    displayAddress: 'Yapıntı Mahallesi No:380 Mut, Mersin, Türkiye',
    geocodeQuery: 'Yapıntı Mahallesi, Mut, Mersin, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.adrasos.com/iletisim'
  },
  79: {
    displayAddress: 'Hürriyet Mahallesi Uğur Mumcu Caddesi No:48 İç Kapı No:2 Erzin, Hatay, Türkiye',
    geocodeQuery: 'Hürriyet Mahallesi, Erzin, Hatay, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.hatnar.com/'
  },
  102: {
    displayAddress: 'Mecidiye Mahallesi Atatürk Caddesi No:150 Akhisar, Manisa, Türkiye',
    geocodeQuery: 'Mecidiye Mahallesi, Akhisar, Manisa, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.palamidas.com/iletisim/'
  },
  103: {
    displayAddress: 'Ekindere Mahallesi Merkez 47 Caddesi No:112 Milas, Muğla, Türkiye',
    geocodeQuery: 'Ekindere Mahallesi, Milas, Muğla, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.orodimilas.com/contact'
  },
  104: {
    displayAddress: 'Orhangazi-İznik üretim hattı, Bursa, Türkiye',
    geocodeQuery: 'Orhangazi, Bursa, Türkiye',
    precision: 'district',
    sourceType: 'official-production',
    sourceUrl: 'https://en.velvetoliveoil.com/velvetiletisim'
  },
  106: {
    displayAddress: 'Küçükköy, İzmir Çanakkale Yolu, 10400 Ayvalık, Balıkesir, Türkiye',
    geocodeQuery: 'Küçükköy, Ayvalık, Balıkesir, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.josevia.com/iletisim'
  },
  107: {
    displayAddress: 'Öğretmenler Mahallesi Dumlupınar Caddesi No:25/B Tarsus, Mersin, Türkiye',
    geocodeQuery: 'Öğretmenler Mahallesi, Tarsus, Mersin, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://efsusnatural.com/iletisim'
  },
  108: {
    displayAddress: 'Mithatpaşa Mahallesi Dağınık Küme Evleri No:1/A Gömeç, Balıkesir, Türkiye',
    geocodeQuery: 'Mithatpaşa Mahallesi, Gömeç, Balıkesir, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.guvenasazeytinyagi.com/iletisim'
  },
  110: {
    displayAddress: 'Hacıosman Mahallesi Postacı Sokak No:1 Gömeç, Balıkesir, Türkiye',
    geocodeQuery: 'Hacıosman Mahallesi, Gömeç, Balıkesir, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://kozoliv.com.tr/iletisim'
  },
  112: {
    displayAddress: 'Seferihisar, İzmir, Türkiye',
    geocodeQuery: 'Seferihisar, İzmir, Türkiye',
    precision: 'district',
    sourceType: 'official-region',
    sourceUrl: 'https://www.oliellaseferihisar.com/'
  },
  113: {
    displayAddress: 'Gödence Köyü Seferihisar Yolu Üzeri Seferihisar, İzmir, Türkiye',
    geocodeQuery: 'Gödence Köyü, Seferihisar, İzmir, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://seosfarm.com/iletisim/'
  },
  114: {
    displayAddress: 'Ulamış, Seferihisar, İzmir, Türkiye',
    geocodeQuery: 'Ulamış, Seferihisar, İzmir, Türkiye',
    precision: 'district',
    sourceType: 'official-region',
    sourceUrl: 'https://www.seferis.org/'
  },
  115: {
    displayAddress: 'Salman Mahallesi Zeytinciler Küme Evler No:95/1 Karaburun, İzmir, Türkiye',
    geocodeQuery: 'Salman Mahallesi, Karaburun, İzmir, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.kucukbahce.com.tr/'
  },
  116: {
    displayAddress: 'Burhaniye, Balıkesir, Türkiye',
    geocodeQuery: 'Burhaniye, Balıkesir, Türkiye',
    precision: 'district',
    sourceType: 'official-region',
    sourceUrl: 'https://buzey.com.tr/'
  },
  117: {
    displayAddress: 'Burhaniye, Balıkesir, Türkiye',
    geocodeQuery: 'Burhaniye, Balıkesir, Türkiye',
    precision: 'district',
    sourceType: 'official-region',
    sourceUrl: 'https://www.kegefood.com/'
  },
  118: {
    displayAddress: 'Çınarlıdere Mevkii Eceabat Sanayi Bölgesi No:55 Eceabat, Çanakkale, Türkiye',
    geocodeQuery: 'Eceabat Sanayi Bölgesi, Eceabat, Çanakkale, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.pazarbasilar.com/'
  },
  119: {
    displayAddress: 'Alçıtepe Köyü Küme Evleri No:44 Eceabat, Çanakkale, Türkiye',
    geocodeQuery: 'Alçıtepe, Eceabat, Çanakkale, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://kirte.com.tr/'
  },
  120: {
    displayAddress: 'Kemalpaşa Mahallesi Cumhuriyet Caddesi No:86/D Eceabat, Çanakkale, Türkiye',
    geocodeQuery: 'Kemalpaşa Mahallesi, Eceabat, Çanakkale, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.anafortis.com.tr/'
  },
  121: {
    displayAddress: 'Datça, Muğla, Türkiye',
    geocodeQuery: 'Datça, Muğla, Türkiye',
    precision: 'district',
    sourceType: 'official-region',
    sourceUrl: 'https://www.datcam.com.tr/'
  },
  123: {
    displayAddress: 'Sahil Mahallesi No:214/3 Erdek, Balıkesir, Türkiye',
    geocodeQuery: 'Sahil Mahallesi, Erdek, Balıkesir, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://terraarteka.com/iletisim/'
  },
  124: {
    displayAddress: 'Bayır Mahallesi Atatürk Caddesi No:21 Armutlu, Yalova, Türkiye',
    geocodeQuery: 'Bayır Mahallesi, Armutlu, Yalova, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.zeytincisalih.com/'
  },
  125: {
    displayAddress: 'Yalova Yolu 1. km Armutlu, Yalova, Türkiye',
    geocodeQuery: 'Armutlu, Yalova, Türkiye',
    precision: 'district',
    sourceType: 'official',
    sourceUrl: 'https://zeytinoz.com/sayfa/iletisim'
  },
  127: {
    displayAddress: 'Kozlu Köyü Köy İçi Mevki No:64 Ayvacık, Çanakkale, Türkiye',
    geocodeQuery: 'Kozlu Köyü, Ayvacık, Çanakkale, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://lamponia.com/'
  },
  129: {
    displayAddress: 'Zeytinbağı Enverpaşa Mahallesi İskele Caddesi No:13/A Mudanya, Bursa, Türkiye',
    geocodeQuery: 'Zeytinbağı Enverpaşa Mahallesi, Mudanya, Bursa, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.macaroglu.com/iletisim.php'
  },
  131: {
    displayAddress: 'Kemalpaşa Mahallesi No:28 Eceabat, Çanakkale, Türkiye',
    geocodeQuery: 'Kemalpaşa Mahallesi, Eceabat, Çanakkale, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.coralolive.com/iletisim'
  },
  132: {
    displayAddress: 'İsmetpaşa Mahallesi Çan Ovası Mevkii Eceabat, Çanakkale, Türkiye',
    geocodeQuery: 'İsmetpaşa Mahallesi, Eceabat, Çanakkale, Türkiye',
    precision: 'street',
    sourceType: 'official',
    sourceUrl: 'https://www.galliolive.com/iletisim'
  }
};

const regionLocationOverrides = {
  'Akhisar, Manisa': {
    displayAddress: 'Akhisar, Manisa, Türkiye',
    geocodeQuery: 'Akhisar, Manisa, Türkiye',
    precision: 'district'
  },
  'Altınözü, Hatay': {
    displayAddress: 'Altınözü, Hatay, Türkiye',
    geocodeQuery: 'Altınözü, Hatay, Türkiye',
    precision: 'district'
  },
  'Antakya, Hatay': {
    displayAddress: 'Antakya, Hatay, Türkiye',
    geocodeQuery: 'Antakya, Hatay, Türkiye',
    precision: 'district'
  },
  'Assos, Çanakkale': {
    displayAddress: 'Assos, Çanakkale, Türkiye',
    geocodeQuery: 'Assos, Ayvacık, Çanakkale, Türkiye',
    precision: 'district'
  },
  'Aydın, Ege': {
    displayAddress: 'Aydın, Türkiye',
    geocodeQuery: 'Aydın, Türkiye',
    precision: 'city'
  },
  'Armutlu, Marmara': {
    displayAddress: 'Armutlu, Yalova, Türkiye',
    geocodeQuery: 'Armutlu, Yalova, Türkiye',
    precision: 'district'
  },
  'Ayvacık, Çanakkale': {
    displayAddress: 'Ayvacık, Çanakkale, Türkiye',
    geocodeQuery: 'Ayvacık, Çanakkale, Türkiye',
    precision: 'district'
  },
  'Ayvalık, Balıkesir': {
    displayAddress: 'Ayvalık, Balıkesir, Türkiye',
    geocodeQuery: 'Ayvalık, Balıkesir, Türkiye',
    precision: 'district'
  },
  'Bursa, Marmara': {
    displayAddress: 'Bursa, Türkiye',
    geocodeQuery: 'Bursa, Türkiye',
    precision: 'city'
  },
  'Çanakkale': {
    displayAddress: 'Çanakkale, Türkiye',
    geocodeQuery: 'Çanakkale, Türkiye',
    precision: 'city'
  },
  'Edirne, Trakya': {
    displayAddress: 'Edirne, Türkiye',
    geocodeQuery: 'Edirne, Türkiye',
    precision: 'city'
  },
  'Edremit, Balıkesir': {
    displayAddress: 'Edremit, Balıkesir, Türkiye',
    geocodeQuery: 'Edremit, Balıkesir, Türkiye',
    precision: 'district'
  },
  'Eceabat, Çanakkale': {
    displayAddress: 'Eceabat, Çanakkale, Türkiye',
    geocodeQuery: 'Eceabat, Çanakkale, Türkiye',
    precision: 'district'
  },
  'Ege Bölgesi': {
    displayAddress: 'Ege Bölgesi, Türkiye',
    geocodeQuery: 'Ege Bölgesi, Türkiye',
    precision: 'region'
  },
  'Erdek, Marmara': {
    displayAddress: 'Erdek, Balıkesir, Türkiye',
    geocodeQuery: 'Erdek, Balıkesir, Türkiye',
    precision: 'district'
  },
  'Erzin, Hatay': {
    displayAddress: 'Erzin, Hatay, Türkiye',
    geocodeQuery: 'Erzin, Hatay, Türkiye',
    precision: 'district'
  },
  'Gaziantep': {
    displayAddress: 'Gaziantep, Türkiye',
    geocodeQuery: 'Gaziantep, Türkiye',
    precision: 'city'
  },
  'Gaziantep, Güneydoğu Anadolu': {
    displayAddress: 'Gaziantep, Türkiye',
    geocodeQuery: 'Gaziantep, Türkiye',
    precision: 'city'
  },
  'Gömeç, Balıkesir': {
    displayAddress: 'Gömeç, Balıkesir, Türkiye',
    geocodeQuery: 'Gömeç, Balıkesir, Türkiye',
    precision: 'district'
  },
  'Burhaniye, Balıkesir': {
    displayAddress: 'Burhaniye, Balıkesir, Türkiye',
    geocodeQuery: 'Burhaniye, Balıkesir, Türkiye',
    precision: 'district'
  },
  'Datça, Muğla': {
    displayAddress: 'Datça, Muğla, Türkiye',
    geocodeQuery: 'Datça, Muğla, Türkiye',
    precision: 'district'
  },
  'Gemlik, Bursa': {
    displayAddress: 'Gemlik, Bursa, Türkiye',
    geocodeQuery: 'Gemlik, Bursa, Türkiye',
    precision: 'district'
  },
  'Hatay': {
    displayAddress: 'Hatay, Türkiye',
    geocodeQuery: 'Hatay, Türkiye',
    precision: 'city'
  },
  'Hatay, Akdeniz': {
    displayAddress: 'Hatay, Türkiye',
    geocodeQuery: 'Hatay, Türkiye',
    precision: 'city'
  },
  'İstanbul': {
    displayAddress: 'İstanbul, Türkiye',
    geocodeQuery: 'İstanbul, Türkiye',
    precision: 'city'
  },
  'İzmir': {
    displayAddress: 'İzmir, Türkiye',
    geocodeQuery: 'İzmir, Türkiye',
    precision: 'city'
  },
  'İzmir, Ege': {
    displayAddress: 'İzmir, Türkiye',
    geocodeQuery: 'İzmir, Türkiye',
    precision: 'city'
  },
  'Karaburun, İzmir': {
    displayAddress: 'Karaburun, İzmir, Türkiye',
    geocodeQuery: 'Karaburun, İzmir, Türkiye',
    precision: 'district'
  },
  'Kilis, Güneydoğu Anadolu': {
    displayAddress: 'Kilis, Türkiye',
    geocodeQuery: 'Kilis, Türkiye',
    precision: 'city'
  },
  'Küçükkuyu, Çanakkale': {
    displayAddress: 'Küçükkuyu, Çanakkale, Türkiye',
    geocodeQuery: 'Küçükkuyu, Çanakkale, Türkiye',
    precision: 'district'
  },
  'Marmara': {
    displayAddress: 'Marmara Bölgesi, Türkiye',
    geocodeQuery: 'Marmara Bölgesi, Türkiye',
    precision: 'region'
  },
  'Milas, Muğla': {
    displayAddress: 'Milas, Muğla, Türkiye',
    geocodeQuery: 'Milas, Muğla, Türkiye',
    precision: 'district'
  },
  'Mudanya, Bursa': {
    displayAddress: 'Mudanya, Bursa, Türkiye',
    geocodeQuery: 'Mudanya, Bursa, Türkiye',
    precision: 'district'
  },
  'Orhangazi, Bursa': {
    displayAddress: 'Orhangazi, Bursa, Türkiye',
    geocodeQuery: 'Orhangazi, Bursa, Türkiye',
    precision: 'district'
  },
  'Mut, Mersin': {
    displayAddress: 'Mut, Mersin, Türkiye',
    geocodeQuery: 'Mut, Mersin, Türkiye',
    precision: 'district'
  },
  'Nizip, Gaziantep': {
    displayAddress: 'Nizip, Gaziantep, Türkiye',
    geocodeQuery: 'Nizip, Gaziantep, Türkiye',
    precision: 'district'
  },
  'Ödemiş, İzmir': {
    displayAddress: 'Ödemiş, İzmir, Türkiye',
    geocodeQuery: 'Ödemiş, İzmir, Türkiye',
    precision: 'district'
  },
  'Seferihisar, İzmir': {
    displayAddress: 'Seferihisar, İzmir, Türkiye',
    geocodeQuery: 'Seferihisar, İzmir, Türkiye',
    precision: 'district'
  },
  'Şarköy, Tekirdağ': {
    displayAddress: 'Şarköy, Tekirdağ, Türkiye',
    geocodeQuery: 'Şarköy, Tekirdağ, Türkiye',
    precision: 'district'
  },
  'Tarsus, Mersin': {
    displayAddress: 'Tarsus, Mersin, Türkiye',
    geocodeQuery: 'Tarsus, Mersin, Türkiye',
    precision: 'district'
  },
  'Türkiye geneli': {
    displayAddress: 'Türkiye geneli',
    geocodeQuery: 'Türkiye',
    precision: 'country'
  },
  'Urla, İzmir': {
    displayAddress: 'Urla, İzmir, Türkiye',
    geocodeQuery: 'Urla, İzmir, Türkiye',
    precision: 'district'
  }
};

const coordinateOverrides = {
  'Altınözü, Hatay, Türkiye': { lat: 36.1155, lng: 36.2483 },
  'Antakya, Hatay, Türkiye': { lat: 36.202168, lng: 36.163366 },
  'Erdek, Balıkesir, Türkiye': { lat: 40.42837, lng: 27.766988 },
  'Ege Bölgesi, Türkiye': { lat: 38.62, lng: 27.43 },
  'Erzin, Hatay, Türkiye': { lat: 36.987918, lng: 36.120779 },
  'Gömeç, Balıkesir, Türkiye': { lat: 39.389415, lng: 26.839369 },
  'Karaburun, İzmir, Türkiye': { lat: 38.296966, lng: 26.693146 },
  'Marmara Bölgesi, Türkiye': { lat: 40.52, lng: 29.1 },
  'Tarsus, Mersin, Türkiye': { lat: 36.911122, lng: 34.880677 },
  'Türkiye': { lat: 39.10, lng: 35.15 }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalizeLocationText(value) {
  return String(value || '')
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\bturkiye\b/g, ' ')
    .replace(/\bbolgesi\b/g, ' ')
    .replace(/\banadolu\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getRegionLocationSeed(brand) {
  const regionMatch = regionLocationOverrides[brand.region] || {
    displayAddress: `${brand.region}, Türkiye`,
    geocodeQuery: `${brand.region}, Türkiye`,
    precision: 'district'
  };

  return {
    displayAddress: regionMatch.displayAddress,
    geocodeQuery: regionMatch.geocodeQuery,
    precision: regionMatch.precision,
    sourceType: 'origin-region',
    sourceUrl: brand.website || '',
    sourceLabel: 'Üretim / zeytin kaynağı'
  };
}

function getOriginTokens(brand, regionSeed) {
  return unique([
    brand.region,
    regionSeed.displayAddress,
    regionSeed.geocodeQuery
  ]).flatMap((value) => normalizeLocationText(value).split(' '))
    .filter((token) => token.length >= 4)
    .filter((token) => !['ege', 'marmara', 'akdeniz', 'trakya', 'hatay', 'izmir', 'bursa', 'turkiye'].includes(token));
}

function exactAddressMatchesOrigin(brand, exact, regionSeed) {
  if (!exact) return false;

  const exactText = normalizeLocationText(`${exact.displayAddress} ${exact.geocodeQuery}`);
  const originTokens = getOriginTokens(brand, regionSeed);

  if (!originTokens.length) return false;
  return originTokens.some((token) => exactText.includes(token));
}

function loadBrands() {
  const code = fsSync.readFileSync(path.join(ROOT, 'brands.js'), 'utf8');
  const sandbox = { console, URL };
  vm.createContext(sandbox);
  vm.runInContext(`${code}\n;globalThis.__brands = brands;`, sandbox);
  return sandbox.__brands;
}

function loadExistingCoordinateCache() {
  if (!fsSync.existsSync(OUTPUT_PATH)) return new Map();

  try {
    const payload = JSON.parse(fsSync.readFileSync(OUTPUT_PATH, 'utf8'));
    const records = Array.isArray(payload.records) ? payload.records : [];
    const cache = new Map();

    for (const record of records) {
      if (!record?.geocodeQuery || !Number.isFinite(record.lat) || !Number.isFinite(record.lng)) continue;
      cache.set(record.geocodeQuery, {
        lat: Number(record.lat),
        lng: Number(record.lng),
        provider: record.coordinateProvider || 'cache'
      });
    }

    return cache;
  } catch {
    return new Map();
  }
}

async function geocode(query) {
  const parts = query.split(',').map((item) => item.trim()).filter(Boolean);
  const attempts = unique([
    query,
    parts.length >= 4 ? parts.slice(1).join(', ') : '',
    parts.length >= 3 ? parts.slice(-3).join(', ') : '',
    parts.length >= 2 ? parts.slice(-2).join(', ') : ''
  ]);

  for (const attempt of attempts) {
    if (coordinateOverrides[attempt]) {
      return { ...coordinateOverrides[attempt], provider: 'manual' };
    }

    const url = new URL('https://nominatim.openstreetmap.org/search');
    url.searchParams.set('q', attempt);
    url.searchParams.set('format', 'jsonv2');
    url.searchParams.set('limit', '1');
    url.searchParams.set('countrycodes', 'tr');
    url.searchParams.set('accept-language', 'tr');

    const response = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Geocode failed for ${attempt}: ${response.status}`);
    }

    const payload = await response.json();
    if (Array.isArray(payload) && payload.length > 0) {
      const first = payload[0];
      return {
        lat: Number(first.lat),
        lng: Number(first.lon),
        provider: attempt === query ? 'nominatim' : 'nominatim-fallback'
      };
    }
  }

  throw new Error(`No geocode result for ${query}`);
}

function buildLocationSeed(brand) {
  const regionSeed = getRegionLocationSeed(brand);
  const exact = exactAddressOverrides[brand.id];

  if (!exact) {
    return regionSeed;
  }

  if (exact.sourceType === 'official-production' || exact.sourceType === 'official-region') {
    return {
      displayAddress: exact.displayAddress,
      geocodeQuery: exact.geocodeQuery,
      precision: exact.precision,
      sourceType: exact.sourceType,
      sourceUrl: exact.sourceUrl || brand.website || '',
      sourceLabel: exact.sourceType === 'official-production' ? 'Resmi üretim bölgesi' : 'Resmi bölge bilgisi'
    };
  }

  if (exactAddressMatchesOrigin(brand, exact, regionSeed)) {
    return {
      displayAddress: exact.displayAddress,
      geocodeQuery: exact.geocodeQuery,
      precision: exact.precision,
      sourceType: 'official',
      sourceUrl: exact.sourceUrl || brand.website || '',
      sourceLabel: 'Üretim / toplama noktası'
    };
  }

  return {
    ...regionSeed,
    sourceUrl: exact.sourceUrl || brand.website || '',
    sourceLabel: 'Üretim / zeytin kaynağı'
  };
}

function precisionLabel(precision) {
  const labels = {
    street: 'Tam adres',
    district: 'İlçe / üretim merkezi',
    city: 'İl merkezi',
    region: 'Bölge merkezi',
    country: 'Türkiye geneli'
  };
  return labels[precision] || 'Yaklaşık konum';
}

async function main() {
  const brands = loadBrands();
  const seeds = brands.map((brand) => ({ brand, location: buildLocationSeed(brand) }));
  const existingCache = loadExistingCoordinateCache();
  const queryMap = new Map();

  for (const { location } of seeds) {
    if (!queryMap.has(location.geocodeQuery)) {
      queryMap.set(location.geocodeQuery, existingCache.get(location.geocodeQuery) || null);
    }
  }

  const queries = [...queryMap.entries()]
    .filter(([, value]) => !value)
    .map(([query]) => query);
  for (let index = 0; index < queries.length; index += 1) {
    const query = queries[index];
    const result = await geocode(query);
    queryMap.set(query, result);
    if (index < queries.length - 1) {
      await sleep(GEOCODE_DELAY_MS);
    }
  }

  const records = seeds.map(({ brand, location }) => {
    const point = queryMap.get(location.geocodeQuery);
    if (!point || !Number.isFinite(point.lat) || !Number.isFinite(point.lng)) {
      throw new Error(`Missing coordinates for ${brand.name} (${location.geocodeQuery})`);
    }

    return {
      id: brand.id,
      slug: brand.slug,
      name: brand.name,
      logo: brand.image,
      website: brand.website || '',
      region: brand.region,
      regionCluster: brand.regionCluster,
      regionClusterLabel: brand.regionClusterLabel,
      category: brand.category,
      displayAddress: location.displayAddress,
      geocodeQuery: location.geocodeQuery,
      lat: Number(point.lat.toFixed(6)),
      lng: Number(point.lng.toFixed(6)),
      precision: location.precision,
      precisionLabel: precisionLabel(location.precision),
      sourceType: location.sourceType,
      sourceLabel: location.sourceLabel,
      sourceUrl: location.sourceUrl,
      coordinateProvider: point.provider
    };
  });

  const output = {
    generatedAt: new Date().toISOString(),
    totalBrands: records.length,
    exactAddressCount: records.filter((item) => item.precision === 'street').length,
    officialSourceCount: records.filter((item) => ['official', 'official-region', 'official-production'].includes(item.sourceType)).length,
    approximateCount: records.filter((item) => item.sourceType !== 'official').length,
    records
  };

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, 'utf8');

  console.log(`Wrote ${records.length} brand locations to ${path.relative(ROOT, OUTPUT_PATH)}`);
  console.log(`Exact street addresses: ${output.exactAddressCount}`);
  console.log(`Official-source records: ${output.officialSourceCount}`);
  console.log(`Approximate region/city locations: ${output.approximateCount}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Zeytinyağlarımız - Brand Data
const brands = [
    { id: 1, name: "Komili", desc: "1878'den bu yana Türkiye'nin en köklü zeytinyağı markalarından biri. Ayvalık merkezli, geniş ürün yelpazesi ile hem soğuk sıkım natürel sızma hem de riviera çeşitleri sunar.", region: "Ayvalık, Balıkesir", category: "market-endustriyel", website: "https://www.komili.com.tr", founded: "1878", highlight: true, image: "https://img.logo.dev/komili.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 2, name: "Tariş", desc: "Ege Bölgesi zeytinyağı kooperatiflerinin birliği. Üreticiden doğrudan temin edilen zeytinlerle üretim yapar. Türkiye'nin en büyük zeytinyağı ihracatçılarından biridir.", region: "İzmir, Ege", category: "market-endustriyel", website: "https://www.tariszeytin.com.tr", founded: "1915", highlight: true, image: "https://img.logo.dev/tariszeytinyagi.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 3, name: "Kristal", desc: "Türkiye'nin en bilinen yemeklik yağ markalarından biri. Zeytinyağı dahil geniş yağ ürün gamı sunar. Market segmentinde güçlü konumu vardır.", region: "İzmir", category: "market-endustriyel", website: "https://www.kristalyaglari.com", founded: "1960", highlight: false, image: "https://img.logo.dev/kristalyag.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 4, name: "Laleli", desc: "Ödüllü Türk zeytinyağı markası. Uluslararası yarışmalarda çok sayıda altın madalya kazanmıştır. Erken hasat natürel sızma zeytinyağları ile bilinir.", region: "İzmir, Ege", category: "premium-butik", website: "https://www.laleli.com.tr", founded: null, highlight: true, image: "https://img.logo.dev/laleli.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 5, name: "Madra", desc: "Kuzey Ege bölgesinin kaliteli zeytinyağı markası. Edremit ve Ayvalık zeytinlerinden üretim yapar. Natürel sızma çeşitleri ile tanınır.", region: "Edremit, Balıkesir", category: "market-endustriyel", website: "https://www.sezaiomermadra.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/madra.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 6, name: "Luna", desc: "Türkiye'de yaygın olarak tüketilen zeytinyağı ve yemeklik yağ markası. Uygun fiyatlı riviera ve natürel sızma zeytinyağı seçenekleri sunar.", region: "İzmir", category: "market-endustriyel", website: "https://www.lunayag.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/lunayag.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 7, name: "Yudum", desc: "Türkiye'nin en büyük yemeklik yağ markalarından biri. Savola Group bünyesinde faaliyet gösterir. Zeytinyağı dahil geniş ürün gamı mevcuttur.", region: "İstanbul", category: "market-endustriyel", website: "https://www.yudum.com.tr", founded: "1968", highlight: false, image: "https://img.logo.dev/yudum.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 8, name: "Kırlangıç", desc: "Uzun yıllardır Türk mutfağının vazgeçilmez zeytinyağı markalarından. Natürel sızma ve riviera çeşitleri bulunur.", region: "İstanbul", category: "market-endustriyel", website: "https://www.kirlangic.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/kirlangic.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 9, name: "Marmarabirlik", desc: "Marmara Zeytin Tarım Satış Kooperatifleri Birliği. Türkiye'nin en büyük sofralık zeytin üreticisi olup zeytinyağı ürünleri de sunar.", region: "Bursa, Marmara", category: "market-endustriyel", website: "https://www.marmarabirlik.com.tr", founded: "1954", highlight: true, image: "https://img.logo.dev/marmarabirlik.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 10, name: "Oleamea", desc: "Premium segment Türk zeytinyağı markası. Uluslararası yarışmalarda ödüller kazanmıştır. Erken hasat, yüksek polifenollü natürel sızma zeytinyağları sunar.", region: "Ege Bölgesi", category: "premium-butik", website: "https://www.oleamea.com", founded: null, highlight: true, image: "https://img.logo.dev/oleamea.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 11, name: "Mera Ovası", desc: "Marmara bölgesinde, Erdek çevresindeki Gemlik tipi zeytinlerden butik üretim yapan artizanal zeytinyağı markası. Küçük partiler halinde soğuk sıkım natürel sızma zeytinyağı üretir.", region: "Erdek, Marmara", category: "premium-butik", website: "https://meraovasi.com", founded: null, highlight: true, image: "https://img.logo.dev/meraovasi.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 12, name: "Olivurla", desc: "Urla bölgesinden premium zeytinyağı üreten butik marka. Urla'nın eşsiz mikro ikliminde yetişen zeytinlerden üretim yapar.", region: "Urla, İzmir", category: "premium-butik", website: "https://www.olivurla.com", founded: null, highlight: false, image: "https://img.logo.dev/olivurla.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 13, name: "Olistica", desc: "Butik üretim yapan premium zeytinyağı markası. Sınırlı sayıda üretilen, tek çeşit (monocultivar) zeytinyağları ile tanınır.", region: "Ege Bölgesi", category: "premium-butik", website: "https://www.olistica.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/olistica.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 14, name: "Olive Riviera", desc: "Kaliteli Türk zeytinyağı markası. Riviera ve natürel sızma zeytinyağı çeşitleri ile piyasada yer alır.", region: "Ege Bölgesi", category: "market-endustriyel", website: null, founded: null, highlight: false, image: "https://ideacdn.net/idea/fo/65/myassets/products/806/sizma-zeytinyagi-aydinli-amca-yemeklik-zeytinyagi-aydin-zeytinyagi-komili-zeytinyagi-riviera-zeytiny.jpg?revision=1721819285" },
    { id: 15, name: "Papez", desc: "Güney Ege bölgesinden kaliteli zeytinyağı üreten marka. Natürel sızma zeytinyağları ile tanınır.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/mnresize/590/591/asset/742185646900/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-500-ml-1.png" },
    { id: 16, name: "Selatin", desc: "Geleneksel yöntemlerle üretim yapan zeytinyağı markası. Doğal ve katkısız ürünleri ile bilinir.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/mnresize/590/591/asset/742185646900/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-500-ml-1.png" },
    { id: 17, name: "Değirmenci", desc: "Ege bölgesinden taş baskı ve soğuk sıkım zeytinyağları sunan marka. Geleneksel üretim yöntemleri ile kaliteli natürel sızma zeytinyağı üretir.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/mnresize/590/591/asset/742185646900/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-500-ml-1.png" },
    { id: 18, name: "İzmir Pınarı", desc: "İzmir bölgesinden kaliteli zeytinyağı üreten yerel marka. Ege zeytinlerinden soğuk sıkım natürel sızma zeytinyağı sunar.", region: "İzmir", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://iaysr.tmgrup.com.tr/8a922f/780/411/0/3/640/340?u=https://iysr.tmgrup.com.tr/2025/02/26/izmirde-sahte-zeytinyagi-satanlara-773-bin-liralik-para-cezasi-1740565322019.jpg" },
    { id: 19, name: "Beyaz Altın", desc: "Premium Türk zeytinyağı markası. Erken hasat zeytinlerden üretilen natürel sızma zeytinyağları ile dikkat çeker.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: "https://images.migrosone.com/sanalmarket/product/04133245/monini-beyaz-truflu-zeytinyagi-250-ml-d6ff50-1650x1650.jpg" },
    { id: 20, name: "Özgün Olive", desc: "Butik üretim yapan zeytinyağı markası. Soğuk sıkım natürel sızma zeytinyağı ve aromatik zeytinyağı çeşitleri sunar.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: "https://www.nevigurme.com/shop/ur/59/myassets/products/289/zeytinyagi-ozgun-birinci-2lt.jpg?revision=1724749057" },
    { id: 21, name: "Edremit Körfezi", desc: "Edremit Körfezi'nin eşsiz ikliminde yetişen zeytinlerden üretilen natürel sızma zeytinyağı. ZETAŞ olarak da bilinir.", region: "Edremit, Balıkesir", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://media-cdn.t24.com.tr/media/stories/2018/09/raw_edremit-korfezinde-ilk-zeytinyagi-sikildi_596679232.jpg" },
    { id: 22, name: "Kürşat", desc: "Güneydoğu bölgesinden, özellikle Kilis ve Hatay zeytinlerinden üretim yapan marka. Halhalı ve Nizip zeytinlerinden kaliteli yağ üretir.", region: "Kilis, Güneydoğu Anadolu", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://kursat.com.tr/cdn/shop/files/Kursat_Naturel_Sizma_Zeytinyagi_500_ml_tnk_1200X1136pxl_1024x1024@2x.jpg?v=1723830727" },
    { id: 23, name: "Zeytin Dalı", desc: "Ege bölgesinden natürel sızma zeytinyağı üreten marka. Geleneksel ve modern üretim yöntemlerini birleştirerek kaliteli ürünler sunar.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://img.pixers.pics/pho_wat(s3:700/FO/13/35/58/60/7/700_FO133558607_eb4d127e2a371d76db9c5af5ef75ddfd.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/cikartmalar-zeytinyagi-ve-zeytin-dali-elle-cizilmis-vektor-kroki-cizim.jpg.jpg" },
    { id: 24, name: "Egemden", desc: "Ege bölgesinin doğal lezzetlerini sunan marka. Natürel sızma zeytinyağı ve zeytin ürünleri portföyü bulunur.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://images.hepsiburada.net/assets/Taris/ProductDesc/yudum-egemden-sizma-zeytinyagi-ayvalikli-kadinlar-500-ml-urun-detay-gorseli-1.png" },
    { id: 25, name: "Bereket", desc: "Güney bölgelerden zeytinyağı üreten marka. Hatay ve Mersin yöresi zeytinlerinden natürel sızma zeytinyağı üretir.", region: "Hatay, Akdeniz", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/mnresize/590/591/asset/742185646900/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-500-ml-1.png" },
    { id: 26, name: "Olea Prilis", desc: "Premium butik zeytinyağı markası. Uluslararası kalite standartlarında, düşük asitli natürel sızma zeytinyağı üretir.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: "https://files.ekmcdn.com/886557/images/olea-prilis-organic-tuscan-pgi-extra-virgin-olive-oil-500ml-tin-(3)-338-dv-p.jpg?v=D26D5FFD-4350-4E41-A6FF-CF5E2EA5F6FA" },
    { id: 27, name: "Oliterra", desc: "Yükselen Türk zeytinyağı markası. Natürel sızma zeytinyağında kalite odaklı üretim yapar.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/mnresize/590/591/asset/742185646900/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-500-ml-1.png" },
    { id: 28, name: "Ayla Zeytinyağı", desc: "Ayvalık bölgesinin geleneksel zeytinyağı markası. Ayvalık çeşidi zeytinlerden soğuk sıkım natürel sızma zeytinyağı üretir.", region: "Ayvalık, Balıkesir", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/mnresize/590/591/asset/742185646900/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-500-ml-1.png" },
    { id: 29, name: "Tarihi Kırkpınar", desc: "Trakya bölgesinden zeytinyağı üreten marka. Edirne ve Trakya yöresi zeytinlerinden üretim yapar.", region: "Edirne, Trakya", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://muzeler.org/images/google-place-images/oleatrium-zeytin-ve-zeytinyagi-tarihi-muzesi.jpg" },
    { id: 30, name: "Olivos", desc: "Zeytinyağı bazlı ürünleriyle tanınan Türk markası. Zeytinyağı satışının yanı sıra zeytinyağlı sabun ve kozmetik ürünleri de üretir.", region: "İstanbul", category: "premium-butik", website: "https://www.olivos.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/olivos.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 31, name: "Hasat", desc: "Ege bölgesinden erken hasat zeytinyağı üreten marka. Erken hasat (early harvest) konseptiyle premium natürel sızma zeytinyağı sunar.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: "https://girisimcikadinlar.com.tr/wp-content/uploads/2022/12/hasat-logo_1-Hasat-Zeytinyagi-Butigi.png" },
    { id: 32, name: "Ayvalık Yıldızı", desc: "Ayvalık'ın meşhur zeytinlerinden üretilen bölgesel marka. Ayvalık zeytinyağının kendine has meyvemsi aromasını yansıtır.", region: "Ayvalık, Balıkesir", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://grafizula.com/wp-content/uploads/2020/03/ayvalik_sepeti_sabun_etiket_tasarimi_geleneksel_zeytinyagi.jpg" },
    { id: 33, name: "İlyada", desc: "Çanakkale Geyikli'den kaliteli Türk zeytinyağı markası. Natürel sızma zeytinyağı ve sofralık zeytin çeşitleri sunar.", region: "Çanakkale", category: "premium-butik", website: "https://ilyada.com", founded: null, highlight: false, image: "https://img.logo.dev/ilyada.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 34, name: "Coşkun Zeytinyağları", desc: "Köklü Türk zeytinyağı üreticisi. Uzun yıllar boyunca Ege zeytinlerinden kaliteli zeytinyağı üretmektedir.", region: "İzmir, Ege", category: "market-endustriyel", website: null, founded: null, highlight: false, image: "https://i0.wp.com/kudretzeytinyaglari.com/wp-content/uploads/2021/05/kudret_zeytinyagi_logo.png?w=800&ssl=1" },
    { id: 35, name: "Nar Gourmet", desc: "Premium gıda markası olup zeytinyağı portföyü de bulunur. Türk lezzetlerini dünyaya tanıtan ödüllü markadır.", region: "İstanbul", category: "premium-butik", website: "https://www.nargourmet.com", founded: null, highlight: false, image: "https://img.logo.dev/nargourmet.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 36, name: "MonOlive", desc: "Premium zeytinyağı markası. Tek çeşit zeytinlerden üretilen butik natürel sızma zeytinyağları sunar.", region: "Ege Bölgesi", category: "premium-butik", website: "https://www.monolive.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/monolive.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 37, name: "Zeytursan", desc: "Marmara bölgesinde zeytinyağı üretimi ve işleme yapan firma. Hem sofralık zeytin hem de zeytinyağı ürünleri sunar.", region: "Bursa, Marmara", category: "bolgesel-yerel", website: "https://www.zeytursan.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/zeytursan.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 38, name: "Trilye", desc: "Bursa'nın Mudanya ilçesindeki tarihi Trilye (Tirilye) bölgesinden adını alan zeytinyağı markası. Bölgenin zengin zeytin mirasını yansıtır.", region: "Mudanya, Bursa", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "http://granpa.com.tr/cdn/shop/files/granpa-premium-trilye-zeytinyagi-hediye-seti-sofra-sunum.jpg?v=1764532675" },
    { id: 39, name: "Vita", desc: "Türkiye genelinde satılan zeytinyağı markası. Uygun fiyatlı natürel sızma ve riviera zeytinyağı seçenekleri sunar.", region: "Türkiye geneli", category: "market-endustriyel", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/mnresize/590/591/asset/742185646900/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-500-ml-1.png" },
    { id: 40, name: "Polat Zeytinyağı", desc: "Ege bölgesinde uzun yıllardır zeytinyağı üreten aile şirketi. Geleneksel yöntemlerle kaliteli natürel sızma zeytinyağı üretir.", region: "Ege Bölgesi", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://www.polattarim.com.tr/wp-content/uploads/2021/08/naturel_zeytinyagi_3.jpg" },
    { id: 41, name: "Tego", desc: "Modern tasarımlı premium zeytinyağı markası. Genç nesil tüketicilere hitap eden şık ambalajlarıyla öne çıkar.", region: "Ege Bölgesi", category: "premium-butik", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/mnresize/590/591/asset/742185646900/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-500-ml-1.png" },
    { id: 42, name: "Bumba Zeytinyağı", desc: "Organik sertifikalı zeytinyağı üreten marka. Kimyasal gübre ve ilaç kullanılmadan yetiştirilen zeytinlerden üretim yapar.", region: "Ege Bölgesi", category: "organik", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/mnresize/590/591/asset/742185646900/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-500-ml-1.png" },
    { id: 43, name: "Herbal Organik", desc: "Organik sertifikalı zeytinyağı ve doğal gıda ürünleri sunan marka. Organik tarım standartlarına uygun üretim yapar.", region: "Ege Bölgesi", category: "organik", website: null, founded: null, highlight: false, image: "https://www.herbalpalace.com.tr/idea/nf/63/myassets/products/011/ozonlanmis-zeytinyagi.jpg?revision=1738874855" },
    { id: 44, name: "Olive Mama", desc: "Organik ve doğal zeytinyağı markası. Kadın girişimciler tarafından kurulan, sürdürülebilir tarım odaklı butik üretici.", region: "Ege Bölgesi", category: "organik", website: null, founded: null, highlight: false, image: "https://olive-mama-karaage.com/img/logo.png" },
    { id: 45, name: "Ekooleo", desc: "Organik sertifikalı natürel sızma zeytinyağı üreten marka. Ekolojik tarım ilkelerine bağlı üretim yapar.", region: "Ege Bölgesi", category: "organik", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/mnresize/590/591/asset/742185646900/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-500-ml-1.png" },
    { id: 46, name: "Ödemiş Birlik", desc: "Ödemiş bölgesi zeytin üreticileri kooperatifi. Memecik çeşidi zeytinlerden kaliteli natürel sızma zeytinyağı üretir.", region: "Ödemiş, İzmir", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://blog.otelegidelim.com/wp-content/uploads/2023/04/odemis-cekiste-zeytinyagi-2.png" },
    { id: 47, name: "İzmir Birlik", desc: "İzmir bölgesi tarım kooperatifleri birliği (İZBİRLİK). Zeytinyağı dahil çeşitli tarım ürünlerinin işlenmesi ve pazarlanmasında faaliyet gösterir.", region: "İzmir", category: "market-endustriyel", website: "https://www.izbirlik.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/izbirlik.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 48, name: "Milas Zeytinyağları", desc: "Muğla'nın Milas ilçesinden üretim yapan yerel marka. Milas bölgesinin kendine has zeytin çeşitlerinden kaliteli yağ üretir.", region: "Milas, Muğla", category: "bolgesel-yerel", website: null, founded: null, highlight: false, image: "https://www.halkmarket.istanbul/idea/jp/05/myassets/products/233/milas-naturel-sizma-zeytinyagi-1-lt.png?revision=1737370438" },
    { id: 49, name: "Nish Olive", desc: "Premium butik zeytinyağı markası. Sınırlı üretimli, özenle seçilmiş tek çeşit zeytinlerden yüksek kaliteli natürel sızma zeytinyağı üretir.", region: "Ege Bölgesi", category: "premium-butik", website: "https://nisholive.com", founded: null, highlight: false, image: "https://img.logo.dev/nisholive.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 50, name: "Naturel", desc: "Doğal ve saf zeytinyağı ürünleri sunan marka. Natürelliği ön plana çıkarır.", region: "Ege Bölgesi", category: "market-endustriyel", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/MNRESIZE/600/600/asset/742185646894/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-250-ml-1.png" },
{ id: 51, name: "NovaVera", desc: "Kuzey Ege merkezli butik üretici. Erken hasat, soğuk sıkım ve yüksek polifenol odaklı natürel sızma zeytinyağlarıyla bilinir.", region: "Edremit, Balıkesir", category: "premium-butik", website: "https://novavera.com.tr", founded: "2017", highlight: true, image: "https://static.ticimax.cloud/42334/uploads/editoruploads/novavera-logo-white.png" },
    { id: 52, name: "Gaia Oliva", desc: "Ayvalık hattında üretim yapan marka. Natürel sızma ve özel seri zeytinyağı ürünleri sunar.", region: "Ayvalık, Balıkesir", category: "premium-butik", website: "https://www.gaiaoliva.com.tr", founded: null, highlight: false, image: "https://static.ticimax.cloud/34601//uploads/editoruploads/go-logo-2025.svg" },
    { id: 53, name: "Nizolive", desc: "Güneydoğu kökenli üretici marka. Nizip yağlık başta olmak üzere bölgesel zeytinlerden zeytinyağı üretimi yapar.", region: "Gaziantep, Güneydoğu Anadolu", category: "bolgesel-yerel", website: "https://nizolive.com", founded: null, highlight: false, image: "https://nizolive.com/wp-content/uploads/2025/10/1_logo_y.webp" },
    { id: 54, name: "Verde", desc: "Kuzey Ege odaklı zeytinyağı markası. Erken hasat natürel sızma ve farklı ambalaj seçenekleriyle öne çıkar.", region: "Ayvalık, Balıkesir", category: "premium-butik", website: "https://www.olioverde.com.tr", founded: null, highlight: false, image: "https://www.olioverde.com.tr/uploads/logo.png" },
    { id: 55, name: "Adatepe", desc: "Kazdağları eteklerinde üretim yapan köklü marka. Taş baskı ve natürel sızma zeytinyağı çeşitleriyle bilinir.", region: "Küçükkuyu, Çanakkale", category: "premium-butik", website: "https://www.adatepe.com", founded: null, highlight: true, image: "https://www.adatepe.com/foto/6f0c3471da75.jpg" },
    { id: 56, name: "OleTurk", desc: "Milas ve Ege havzasından zeytinlerle üretim yapan marka. Natürel sızma odaklı ürün portföyü sunar.", region: "Milas, Muğla", category: "premium-butik", website: "https://www.oleturk.com", founded: null, highlight: false, image: "https://www.oleturk.com/cdn/shop/files/Logo_white.png?v=1769521626" },
    { id: 57, name: "Kahraman", desc: "Akhisar merkezli üretici. Natürel sızma, riviera ve farklı paket boylarında zeytinyağı ürünleri bulunur.", region: "Akhisar, Manisa", category: "market-endustriyel", website: "https://kahraman.com.tr", founded: null, highlight: false, image: "https://kahraman.com.tr/kahraman/logo/logo.png" },
    { id: 58, name: "Buta Assos", desc: "Assos bölgesinde üretilen zeytinlerden premium natürel sızma zeytinyağı sunan marka.", region: "Assos, Çanakkale", category: "premium-butik", website: "https://butaassos.com.tr", founded: null, highlight: false, image: "https://butaassos.com.tr/wp-content/uploads/2025/04/LOGO-1.png" },
    { id: 59, name: "Ayvaco", desc: "Ayvacık çevresinde üretim yapan yerel marka. Soğuk sıkım natürel sızma zeytinyağı çeşitleriyle bilinir.", region: "Ayvacık, Çanakkale", category: "bolgesel-yerel", website: "https://www.ayvaco.com", founded: null, highlight: false, image: "https://www.ayvaco.com/cdn/shop/files/AYV_logo_final_20f77506-6e46-4a00-8884-c48658186a7d_300x.png?v=1736545014" },
    { id: 60, name: "OVE Foods", desc: "Zeytin ve zeytinyağı odaklı gıda markası. Natürel sızma ve gurme segment ürünler sunar.", region: "Aydın, Ege", category: "premium-butik", website: "https://ovefoods.com", founded: null, highlight: false, image: "https://ovefoods.com/ovelogonet.png" },
    { id: 61, name: "Granpa", desc: "Marmara bölgesi odaklı üretici marka. Trilye/Gemlik hattında natürel sızma ürünleriyle öne çıkar.", region: "Bursa, Marmara", category: "premium-butik", website: "https://granpa.com.tr", founded: null, highlight: false, image: "https://granpa.com.tr/cdn/shop/files/image_1080_copy.png?v=1749037376&width=1445" },
    { id: 62, name: "Mavras", desc: "Urla merkezli butik marka. Sınırlı seri ve erken hasat natürel sızma zeytinyağı üretimi yapar.", region: "Urla, İzmir", category: "premium-butik", website: "https://mavras.com.tr", founded: null, highlight: false, image: "https://mavras.com.tr/cdn/shop/files/MAVRAS.png?v=1753728989&width=1445" },
    { id: 63, name: "Hermus", desc: "Akhisar ve çevresindeki zeytinlerden üretilen premium natürel sızma zeytinyağı markası.", region: "Akhisar, Manisa", category: "premium-butik", website: "https://www.hermus.com.tr", founded: null, highlight: false, image: "https://www.hermus.com.tr/idea/qn/58/myassets/std_theme_files/tpl-foodavo/assets/uploads/logo.png?revision=1770746284" },
    { id: 64, name: "Nermin Hanım Zeytinliği", desc: "Ayvalık merkezli butik üretici. Erken hasat ve izlenebilir üretim yaklaşımıyla natürel sızma ürünler sunar.", region: "Ayvalık, Balıkesir", category: "premium-butik", website: "https://nerminhanim.com", founded: null, highlight: true, image: "https://cdn.myikas.com/images/theme-images/d2fff716-f48b-48bf-b26e-6f6c800268e7/image_180.webp" },
    { id: 65, name: "Olivya Gökçeovacık", desc: "Milas bölgesinde faaliyet gösteren butik marka. Yöresel karakterli natürel sızma zeytinyağı üretir.", region: "Milas, Muğla", category: "premium-butik", website: "https://olivyagokceovacik.com", founded: null, highlight: false, image: "https://olivyagokceovacik.com/wp-content/uploads/olivyagokceovacik-logo-100x100.webp" },
    { id: 66, name: "Zetay", desc: "Edremit Körfezi odaklı üretici. Bölgesel zeytinlerden natürel sızma ve riviera ürünleri sunar.", region: "Edremit, Balıkesir", category: "bolgesel-yerel", website: "https://zetay.com.tr", founded: null, highlight: false, image: "https://zetay.com.tr/upload/upload/8c721f08-33db-4c6b-87ed-86b21cc06ba5.png" },
    { id: 67, name: "MR Zeytin", desc: "Akhisar merkezli zeytin ve zeytinyağı üreticisi. Natürel sızma ürünleriyle öne çıkar.", region: "Akhisar, Manisa", category: "bolgesel-yerel", website: "https://www.mrzeytin.com.tr", founded: null, highlight: false, image: "https://www.mrzeytin.com.tr/galeri/2442132831.webp" },
    { id: 68, name: "Dalgıçoğlu", desc: "Edremit Körfezi çevresinde üretim yapan marka. Bölgesel zeytinyağı ürünleri sunar.", region: "Edremit, Balıkesir", category: "bolgesel-yerel", website: "https://dalgicoglu.com", founded: null, highlight: false, image: "https://dalgicoglu.com/wp-content/uploads/2023/08/dalgicoglu.com-904410.png" },
    { id: 69, name: "Sabuncugil", desc: "Ayvalık kökenli geleneksel üretici marka. Natürel sızma ve bölgesel ürünleriyle bilinir.", region: "Ayvalık, Balıkesir", category: "bolgesel-yerel", website: "https://www.sabuncugil.com.tr", founded: null, highlight: false, image: "https://ideacdn.net/idea/di/87/themes/selftpl_6912dd7f4fb18/assets/uploads/logo.png?revision=1770973431" },
    { id: 70, name: "Koral Zeytin", desc: "Akhisar merkezli üretici. Zeytin ve zeytinyağı ürünlerinde yerel üretim odaklıdır.", region: "Akhisar, Manisa", category: "bolgesel-yerel", website: "https://koralzeytin.com", founded: null, highlight: false, image: "https://www.koralzeytin.com/image/cache/catalog/site-resimleri/logo_band_white@2x-912x64.png" },
    { id: 71, name: "Semylasa", desc: "Milas yöresinden üretim yapan premium marka. Natürel sızma zeytinyağı çeşitleriyle öne çıkar.", region: "Milas, Muğla", category: "premium-butik", website: "https://semylasa.com", founded: null, highlight: false, image: "https://semylasa.com/cdn/shop/files/Untitled_design_10.png?v=1732443014&width=600" },
    { id: 72, name: "Olivamore", desc: "Butik üretim anlayışına sahip zeytinyağı markası. Erken hasat natürel sızma ürünleri sunar.", region: "Ege Bölgesi", category: "premium-butik", website: "https://olivamore.com", founded: null, highlight: false, image: "https://olivamore.com/wp-content/uploads/2024/12/olivamore-logo.svg" },
    { id: 73, name: "Ayolis", desc: "Ayvalık bölgesinden premium natürel sızma zeytinyağı üreten marka.", region: "Ayvalık, Balıkesir", category: "premium-butik", website: "https://www.ayolis.com", founded: null, highlight: false, image: "https://static.ticimax.cloud/cdn-cgi/image/width=1903,quality=99/55671/uploads/editoruploads/footer-logo.png" },
    { id: 74, name: "Gemlika", desc: "Gemlik zeytininden üretilen natürel sızma zeytinyağına odaklanan bölgesel marka.", region: "Gemlik, Bursa", category: "bolgesel-yerel", website: "https://gemlika.com.tr", founded: null, highlight: false, image: "https://gemlika.com.tr/wp-content/uploads/2024/08/gemlika.png" },
    { id: 75, name: "Zeytinsan", desc: "Akhisar merkezli daha geniş ölçekli üretici. Farklı segmentlerde zeytinyağı ürünleri sunar.", region: "Akhisar, Manisa", category: "market-endustriyel", website: "https://www.zeytinsan.com.tr", founded: null, highlight: false, image: "https://www.zeytinsan.com.tr/wp-content/uploads/2021/10/zeytinsan-logo180.png" },
    { id: 76, name: "Anolive", desc: "Ayvalık bölgesinde premium natürel sızma zeytinyağı üretimi yapan marka.", region: "Ayvalık, Balıkesir", category: "premium-butik", website: "https://www.anolive.com.tr", founded: null, highlight: false, image: "https://www.anolive.com.tr/img/anolive-logo-header_1.png" },
    { id: 77, name: "Artem Oliva", desc: "Butik üretim odaklı natürel sızma zeytinyağı markası.", region: "Marmara", category: "premium-butik", website: "https://artemoliva.com", founded: null, highlight: false, image: "https://artemoliva.com/wp-content/uploads/2021/02/logo_bckrgoundOK_sizeOK_GRNT250X250_TVL270X270.png" },
    { id: 78, name: "OliveOilsLand", desc: "Zeytinyağı ürünlerinde premium ve butik segmentte yer alan marka.", region: "Ege Bölgesi", category: "premium-butik", website: "https://www.oliveoilsland.com", founded: null, highlight: false, image: "https://www.oliveoilsland.com/wp-content/themes/neve/olive/images/logo.png" },
    { id: 79, name: "Hatnar", desc: "Erzin, Hatay merkezli üretici marka. Soğuk sıkım natürel sızma zeytinyağı ve yöresel zeytin ürünleri sunar.", region: "Erzin, Hatay", category: "premium-butik", website: "https://www.hatnar.com", founded: null, highlight: true, image: "https://www.hatnar.com/wp-content/uploads/2021/10/hatnar-logo-H-8.png" },
    { id: 80, name: "Zetiya", desc: "Hatay odaklı erken hasat natürel sızma serileriyle öne çıkan butik marka. Cam şişe ve teneke ambalajlı ürünler sunar.", region: "Hatay", category: "premium-butik", website: "https://zetiya.com", founded: null, highlight: true, image: "https://zetiya.com/cdn/shop/files/Logo.Zetiya4.png?v=1756152630&width=500" },
    { id: 81, name: "Ece'den Sofranıza", desc: "Hatay merkezli aile markası. El hasadı ve natürel sızma odaklı teneke ve şişe ürünler sunar.", region: "Hatay", category: "bolgesel-yerel", website: "https://eceden.com.tr", founded: null, highlight: false, image: "https://eceden.com.tr/logo3.png" },
    { id: 82, name: "Uygur Zeytinyağı", desc: "1972'den beri Gaziantep'te faaliyet gösteren üretici. Nizip tesislerinde natürel sızma zeytinyağı ve zeytinyağlı sabun üretir.", region: "Nizip, Gaziantep", category: "market-endustriyel", website: "https://uygurzeytinyagi.com", founded: "1972", highlight: true, image: "https://uygurzeytinyagi.com/images/logo.png" },
    { id: 83, name: "Yalım Zeytin Yağları", desc: "Gaziantep merkezli köklü üretici. Günlük mutfak kullanımına ve natürel sızma serilerine yönelik geniş bir ürün gamı sunar.", region: "Gaziantep", category: "market-endustriyel", website: "https://www.yalimzeytinyaglari.com.tr", founded: "1997", highlight: false, image: "https://www.yalimzeytinyaglari.com.tr/assets/images/logo.png" },
    { id: 84, name: "Zeytincir", desc: "Gaziantep odaklı natürel sızma üretici marka. Saf zeytinyağı ve filtreli-filtresiz ürün diliyle öne çıkar.", region: "Gaziantep", category: "bolgesel-yerel", website: "https://www.zeytincir.com.tr", founded: null, highlight: false, image: "https://www.zeytincir.com.tr/wp-content/uploads/2021/12/zeytinyagi-logo1-1.png" },
    { id: 85, name: "Bazilika", desc: "Altınözü, Hatay merkezli yöresel üretici. Zeytin ve zeytinyağı ürünlerini Hatay köken vurgusuyla sunar.", region: "Altınözü, Hatay", category: "bolgesel-yerel", website: "https://www.bazilika.com.tr", founded: null, highlight: false, image: "https://www.bazilika.com.tr/upload/bazilika-zeytinyaglari-hatay-antakya-altinozu.png" },
    { id: 86, name: "Arslan Zeytinyağı", desc: "Antakya, Hatay merkezli üretici. Cam şişe, pet ve teneke ambalajlı natürel sızma serileri sunar.", region: "Antakya, Hatay", category: "bolgesel-yerel", website: "https://arslanzeytinyagi.com.tr", founded: null, highlight: false, image: "https://arslanzeytinyagi.com.tr/upload//arslan-zeytinyagi10.png" },
    { id: 87, name: "Hatay Tadında", desc: "Hatay yöresel ürünleri ve zeytinyağı satışı yapan yerel marka. Soğuk sıkım ve teneke zeytinyağı ürünleriyle öne çıkar.", region: "Hatay", category: "bolgesel-yerel", website: "https://www.hataytadinda.com", founded: null, highlight: false, image: "https://www.hataytadinda.com/wp-content/uploads/2019/04/hatay-tad%C4%B1nda-logo2.png" },
    { id: 88, name: "Gemtar", desc: "Gemlik merkezli üretici marka. Gemlik zeytininden natürel sızma ve farklı hacimlerde zeytinyağı serileri sunar.", region: "Gemlik, Bursa", category: "market-endustriyel", website: "https://www.gemtar.com.tr", founded: null, highlight: true, image: "https://ideacdn.net/idea/ln/94/themes/selftpl_63c93921dff4b/assets/uploads/logo.png?revision=1761118145" },
    { id: 89, name: "Gemlik Zeytincisi", desc: "Gemlik odaklı zeytin ve zeytinyağı üreticisi. Bölgesel kökeni öne çıkan natürel sızma ürünleri bulunur.", region: "Gemlik, Bursa", category: "bolgesel-yerel", website: "https://www.gemlikzeytincisi.com.tr", founded: null, highlight: false, image: "https://www.gemlikzeytincisi.com.tr/wp-content/uploads/2024/05/op.png" },
    { id: 90, name: "Gemlik Zeytin Evi", desc: "Gemlik bölgesinde zeytin ve zeytinyağı ürünleri sunan yerel marka. Cam şişe ve teneke seçenekleriyle öne çıkar.", region: "Gemlik, Bursa", category: "bolgesel-yerel", website: "https://www.gemlikzeytinevi.com", founded: null, highlight: false, image: "https://www.gemlikzeytinevi.com/image/catalog/logohy.png" },
    { id: 91, name: "Solive", desc: "Gemlik zeytini ve erken hasat zeytinyağı serileriyle öne çıkan bölgesel marka. Zeytin Ağacı mağaza yapısı içinde satış yapar.", region: "Gemlik, Bursa", category: "premium-butik", website: "https://www.zeytinagaci.com", founded: null, highlight: false, image: "https://www.zeytinagaci.com/shop/bu/35/themes/selftpl_61814615742ac/assets/uploads/logo.png?revision=1767075887" },
    { id: 92, name: "Yelkenli", desc: "Mudanya merkezli üretim ve satış yapan marka. Teneke ve cam ambalajlı zeytinyağı ürünleri sunar.", region: "Mudanya, Bursa", category: "bolgesel-yerel", website: "https://yelkenlizeytinyagi.com.tr", founded: null, highlight: false, image: "https://yelkenlizeytinyagi.com.tr/wp-content/uploads/2024/03/logo-1.png" },
    { id: 93, name: "Vivax Olea", desc: "Şarköy, Tekirdağ hattında üretim yapan marka. Kontinü sistem ve soğuk sıkım serileriyle Trakya'da öne çıkar.", region: "Şarköy, Tekirdağ", category: "premium-butik", website: "https://www.vivaxolea.com", founded: "2021", highlight: true, image: "https://www.vivaxolea.com/tema/kurumsal/uploads/logo/VivaxOlea_Logo.png" },
    { id: 94, name: "Şarköy Çiftlik", desc: "Şarköy merkezli doğal ürünler markası. Coğrafi işaretli ve soğuk sıkım zeytinyağı ürünleriyle Trakya hattında dikkat çeker.", region: "Şarköy, Tekirdağ", category: "bolgesel-yerel", website: "https://sarkoyciftlik.com.tr", founded: null, highlight: true, image: "https://cdn.myikas.com/images/15ce70ae-d38f-457b-b820-715d906f980d/b83b2e19-7134-48e7-9e43-cd9f159202b8/image_1080.webp" },
    { id: 95, name: "Mutuna", desc: "Mut, Mersin merkezli yerel üretici. Erken hasat ve soğuk sıkım Mut zeytinyağı serileri bulunur.", region: "Mut, Mersin", category: "bolgesel-yerel", website: "https://www.mutuna.com", founded: null, highlight: true, image: "https://www.mutuna.com/idea/if/09/themes/selftpl_65798a840c0eb/assets/uploads/logo.png?revision=1729753622" },
    { id: 96, name: "Mutili", desc: "Mut merkezli modern üretici marka. Cam şişe ve teneke ambalajlı natürel sızma serileri sunar.", region: "Mut, Mersin", category: "premium-butik", website: "https://mutili.com.tr", founded: null, highlight: false, image: "https://mutili.com.tr/wp-content/uploads/2025/05/Mutili-Logo-2.png" },
    { id: 97, name: "Mut İncisi", desc: "Mut yöresinden üretim yapan bölgesel marka. Farklı hacimlerde natürel sızma ve yemeklik seriler sunar.", region: "Mut, Mersin", category: "bolgesel-yerel", website: "https://mutincisi.com", founded: null, highlight: false, image: "https://mutincisi.com/assets/images/logo_1772443738.png" },
    { id: 98, name: "Zeytinyağı Evi", desc: "Mut zeytinyağı ve sofralık zeytin odaklı satış yapan marka. Filtresiz, domat ve arbequina serileriyle dikkat çeker.", region: "Mut, Mersin", category: "bolgesel-yerel", website: "https://www.zeytinyagievi.com", founded: null, highlight: false, image: "https://www.zeytinyagievi.com/shop/rr/76/themes/selftpl_5de7a2fdcd356/assets/uploads/logo.png?revision=1767710058" },
    { id: 99, name: "Sazak Zeytincilik", desc: "Mut merkezli üretici. Erken hasat, soğuk sıkım ve büyük hacimli teneke ürünlerde güçlü bir ürün gamı sunar.", region: "Mut, Mersin", category: "bolgesel-yerel", website: "https://www.sazakzeytincilik.com", founded: null, highlight: false, image: "https://www.sazakzeytincilik.com/idea/bf/61/themes/selftpl_65a925bc527ae/assets/uploads/logo.png?revision=1770703548" },
    { id: 100, name: "Adrasos", desc: "Mut bölgesinden premium natürel sızma serileri sunan marka. Cam ve galon ambalajlı zeytinyağlarıyla öne çıkar.", region: "Mut, Mersin", category: "premium-butik", website: "https://www.adrasos.com", founded: null, highlight: false, image: "https://www.adrasos.com/idea/hd/67/themes/selftpl_5faad86c5cff0/assets/uploads/logo.jpg?revision=1728927645" },
    { id: 101, name: "Mutolea", desc: "Mut merkezli zeytinyağı ve doğal ürün markası. Soğuk sıkım zeytinyağı ile bitkisel ürün portföyünü birlikte sunar.", region: "Mut, Mersin", category: "bolgesel-yerel", website: "https://mutolea.com", founded: null, highlight: false, image: "https://mutolea.com/Resim/mut-olea-3000-3000-piksel-pdf-1000-x-1000-piksel-14_tr_TR.png" }
];

const categoryLabels = {
    'premium-butik': 'Premium / Butik',
    'market-endustriyel': 'Market',
    'organik': 'Organik',
    'bolgesel-yerel': 'Bölgesel / Yerel'
};

const regionClusterLabels = {
    ege: 'Ege Bölgesi',
    marmara: 'Marmara Bölgesi',
    akdeniz: 'Akdeniz Bölgesi',
    guneydogu: 'Güneydoğu Anadolu',
    trakya: 'Trakya Bölgesi',
    turkiye: 'Türkiye Geneli'
};

const oliveTypeLabels = {
    ayvalik: 'Ayvalık',
    memecik: 'Memecik',
    gemlik: 'Gemlik',
    trilye: 'Trilye',
    halhali: 'Halhalı',
    nizip: 'Nizip Yağlık',
    'sari-ulak': 'Sarı Ulak'
};

const manualLogoOverrides = {
    1: 'images/brand-logos/01-komili.svg',
    2: 'images/brand-logos/02-taris.png',
    3: 'images/brand-logos/03-kristal.png',
    4: 'images/brand-logos/04-laleli.png',
    5: 'images/brand-logos/05-madra.png',
    6: 'images/brand-logos/06-luna.png',
    7: 'images/brand-logos/07-yudum.svg',
    8: 'images/brand-logos/08-kirlangic.svg',
    9: 'images/brand-logos/09-marmarabirlik.png',
    10: 'images/brand-logos/10-oleamea.png',
    11: 'images/brand-logos/11-mera-ovasi.png',
    12: 'images/brand-logos/12-olivurla.png',
    13: 'images/brand-logos/13-olistica.jpg',
    14: 'images/brand-logos/14-olive-riviera.jpg',
    15: 'images/brand-logos/15-papez.jpg',
    16: 'images/brand-logos/16-selatin.png',
    17: 'images/brand-logos/17-degirmenci.png',
    18: 'images/brand-logos/18-izmir-pinari.jpg',
    19: 'images/brand-logos/19-beyaz-altin.jpg',
    20: 'images/brand-logos/20-ozgun-olive.jpg',
    21: 'images/brand-logos/21-edremit-korfezi.jpg',
    22: 'images/brand-logos/22-kursat.png',
    23: 'images/brand-logos/23-zeytin-dali.jpg',
    24: 'images/brand-logos/24-egemden.png',
    25: 'images/brand-logos/25-bereket.jpg',
    26: 'images/brand-logos/26-olea-prilis.png',
    27: 'images/brand-logos/27-oliterra.gif',
    28: 'images/brand-logos/28-ayla-zeytinyagi.jpg',
    29: 'images/brand-logos/29-tarihi-kirkpinar.png',
    30: 'images/brand-logos/30-olivos.png',
    31: 'images/brand-logos/31-hasat.png',
    32: 'images/brand-logos/32-ayvalik-yildizi.jpg',
    33: 'images/brand-logos/33-ilyada.png',
    34: 'images/brand-logos/34-coskun-zeytinyaglari.png',
    35: 'images/brand-logos/35-nar-gourmet.jpg',
    36: 'images/brand-logos/36-monolive.jpg',
    37: 'images/brand-logos/37-zeytursan.png',
    38: 'images/brand-logos/38-trilye.png',
    39: 'images/brand-logos/39-vita.jpg',
    40: 'images/brand-logos/40-polat-zeytinyagi.png',
    41: 'images/brand-logos/41-tego.png',
    42: 'images/brand-logos/42-bumba-zeytinyagi.png',
    43: 'images/brand-logos/43-herbal-organik.jpg',
    44: 'images/brand-logos/44-olive-mama.png',
    45: 'images/brand-logos/45-ekooleo.webp',
    46: 'images/brand-logos/46-odemis-birlik.png',
    47: 'images/brand-logos/47-izmir-birlik.png',
    48: 'images/brand-logos/48-milas-zeytinyaglari.png',
    49: 'images/brand-logos/49-nish-olive.png',
    50: 'images/brand-logos/50-naturel.jpg'
};

function normalizeSlug(value) {
    return value
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

function getTopicPageUrl(dimension, slug) {
    return `topic/${dimension}/${slug}.html`;
}

function getCategoryTopicUrl(categoryKey) {
    return getTopicPageUrl('kategoriler', categoryKey);
}

function getRegionTopicUrl(regionClusterKey) {
    return getTopicPageUrl('bolgeler', regionClusterKey);
}

function getOliveTypeTopicUrl(oliveTypeKey) {
    return getTopicPageUrl('zeytin-cesitleri', oliveTypeKey);
}

function inferRegionCluster(regionText) {
    const text = (regionText || '').toLowerCase('tr-TR');

    if (/(kilis|güneydoğu|guneydogu|nizip|gaziantep|mardin|şanlıurfa|sanliurfa)/.test(text)) return 'guneydogu';
    if (/(edirne|trakya|tekirdağ|tekirdag|kırklareli|kirklareli|şarköy|sarkoy)/.test(text)) return 'trakya';
    if (/(bursa|marmara|mudanya|gemlik|istanbul)/.test(text)) return 'marmara';
    if (/(mersin|antalya|adana|akdeniz|hatay|antakya|altınözü|altinozu|erzin|samandağ|samandag)/.test(text)) return 'akdeniz';
    if (/(izmir|ege|ayvalık|ayvalik|balıkesir|balikesir|edremit|urla|ödemiş|odemis|milas|muğla|mugla|çanakkale|canakkale)/.test(text)) return 'ege';
    if (/(türkiye|turkiye)/.test(text)) return 'turkiye';
    return 'ege';
}

function inferOliveTypes(brand) {
    const text = `${brand.region} ${brand.desc}`.toLowerCase('tr-TR');
    const types = [];

    if (/(ayvalık|ayvalik|edremit|balıkesir|balikesir)/.test(text)) types.push('ayvalik');
    if (/(izmir|urla|ege|ödemiş|odemis|milas|muğla|mugla|memecik)/.test(text)) types.push('memecik');
    if (/(bursa|marmara|gemlik|mudanya)/.test(text)) types.push('gemlik');
    if (/(trilye|trakya|edirne|tekirdağ|tekirdag|şarköy|sarkoy)/.test(text)) types.push('trilye');
    if (/(hatay|antakya|altınözü|altinozu|erzin|samandağ|samandag|halhalı|halhali)/.test(text)) types.push('halhali');
    if (/(nizip|gaziantep|kilis)/.test(text)) types.push('nizip');
    if (/(\bmut\b|\bmersin\b|\bsilifke\b|sarı ulak|sari ulak)/.test(text)) types.push('sari-ulak');

    if (types.length === 0) {
        if (brand.category === 'bolgesel-yerel') types.push('ayvalik');
        else types.push('memecik');
    }

    return Array.from(new Set(types)).slice(0, 2);
}

function isSafeHttpUrl(value) {
    if (typeof value !== 'string' || value.includes('|')) return false;
    try {
        const url = new URL(value);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
        return false;
    }
}

function isLocalImagePath(value) {
    if (typeof value !== 'string') return false;
    return /^(?:\.\/)?images\/[a-z0-9._/-]+$/i.test(value.trim());
}

function isBlockedSource(value) {
    const blocked = [
        'sikayetvar',
        'pinterest',
        'instagram',
        'facebook',
        'youtube',
        'twitter',
        'reddit',
        'wikipedia',
        'wikimedia',
        'shutterstock',
        'dreamstime',
        'freepik'
    ];
    const text = value.toLowerCase();
    return blocked.some((item) => text.includes(item));
}

function getWebsiteHost(websiteUrl) {
    if (!websiteUrl || typeof websiteUrl !== 'string') return '';
    try {
        return new URL(websiteUrl).hostname.replace(/^www\./, '').toLowerCase();
    } catch {
        return '';
    }
}

function getWebsiteFaviconUrl(websiteUrl) {
    const host = getWebsiteHost(websiteUrl);
    if (!host) return null;
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=256`;
}

function getManualLogoOverride(brand) {
    return manualLogoOverrides[brand.id] || null;
}

function normalizeLogoUrlForBrand(brand, logoUrl) {
    if (!logoUrl || typeof logoUrl !== 'string') return null;
    let value = logoUrl.trim();
    if (!value) return null;

    if (isLocalImagePath(value)) {
        return value;
    }

    // legacy logo.dev links started returning 401/404; use site favicon as reliable fallback.
    if (value.includes('img.logo.dev/')) {
        return getWebsiteFaviconUrl(brand.website);
    }

    if (value.startsWith('http://')) {
        value = `https://${value.slice('http://'.length)}`;
    }

    if (!isSafeHttpUrl(value)) return null;
    if (isBlockedSource(value)) return null;
    return value;
}

function getMediaForBrand(brand) {
    if (typeof brandMedia === 'undefined') return null;
    return brandMedia[String(brand.id)] || null;
}

function isTrustedLogoForBrand(brand, logoUrl) {
    if (!logoUrl || typeof logoUrl !== 'string') return false;
    if (!(isSafeHttpUrl(logoUrl) || isLocalImagePath(logoUrl))) return false;
    if (isSafeHttpUrl(logoUrl) && isBlockedSource(logoUrl)) return false;
    return true;
}

function getBrandSlug(brand) {
    const media = getMediaForBrand(brand);
    if (media && typeof media.slug === 'string' && media.slug.trim()) {
        return media.slug.trim();
    }
    return normalizeSlug(brand.name);
}

function getBrandDetailUrl(brand) {
    return `marka/${encodeURIComponent(getBrandSlug(brand))}.html`;
}

function getBrandBottleImages(brand) {
    const media = getMediaForBrand(brand);
    if (!media || !Array.isArray(media.bottles)) return [];
    return media.bottles.filter(isSafeHttpUrl).slice(0, 3);
}

function getBrandInfo(brand) {
    const media = getMediaForBrand(brand);
    if (media && typeof media.info === 'string' && media.info.trim()) {
        return media.info.trim();
    }
    return brand.desc;
}

brands.forEach((brand) => {
    const media = getMediaForBrand(brand);
    const manualLogo = normalizeLogoUrlForBrand(brand, getManualLogoOverride(brand));
    const fallbackLogo = getWebsiteFaviconUrl(brand.website);
    const baseLogo = normalizeLogoUrlForBrand(brand, brand.image);
    const mediaLogo = media ? normalizeLogoUrlForBrand(brand, media.logo) : null;

    brand.slug = getBrandSlug(brand);
    brand.detail = getBrandInfo(brand);
    brand.bottleImages = getBrandBottleImages(brand);
    brand.regionCluster = inferRegionCluster(brand.region);
    brand.oliveTypes = inferOliveTypes(brand);
    brand.categoryTopicUrl = getCategoryTopicUrl(brand.category);
    brand.regionTopicUrl = getRegionTopicUrl(brand.regionCluster);
    brand.oliveTopicUrls = brand.oliveTypes.map((type) => getOliveTypeTopicUrl(type));
    brand.regionClusterLabel = regionClusterLabels[brand.regionCluster];
    brand.oliveTypeLabels = brand.oliveTypes.map((type) => oliveTypeLabels[type]).filter(Boolean);
    brand.logoFallback = fallbackLogo || '';
    brand.image = manualLogo || baseLogo || fallbackLogo || '';

    if (!manualLogo && media && isTrustedLogoForBrand(brand, mediaLogo)) {
        brand.image = mediaLogo;
    }
});

function countWords(text) {
    return String(text || '')
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .length;
}

function joinTextList(items) {
    const values = (items || []).filter(Boolean);
    if (values.length === 0) return '';
    if (values.length === 1) return values[0];
    if (values.length === 2) return `${values[0]} ve ${values[1]}`;
    return `${values.slice(0, -1).join(', ')} ve ${values[values.length - 1]}`;
}

function getRegionNarrative(brand) {
    const narratives = {
        ege: "Ege hattı, Türkiye zeytinyağı haritasında en yoğun ve en çeşitli üretim alanlarından biri olduğu için marka değerlendirmesinde hem bölgesel gelenek hem de modern ürün dili birlikte okunur.",
        marmara: "Marmara hattı özellikle Gemlik ve Trilye ekseniyle sofralık zeytin algısından beslenen ama zeytinyağında da güçlü bir bölgesel kimlik kuran üreticiler barındırır.",
        akdeniz: "Akdeniz hattı, sıcak iklim ve uzun sezon nedeniyle farklı aromatik profiller ve geniş kullanım senaryolarıyla öne çıkan üreticilere alan açar.",
        guneydogu: "Güneydoğu hattında Halhalı ve Nizip gibi yerel çeşitlerle kurulan daha karakterli ve daha belirgin bölgesel üretim dili görülür.",
        trakya: "Trakya hattı ana üretim merkezlerine göre daha niş görünse de sınırlı üretim, bölgesel karakter ve yakın tedarik anlayışıyla ayrışabilir.",
        turkiye: "Türkiye geneline yayılan markalarda tek bir yöresel kimlikten çok, ürün ailesi, dağıtım yapısı ve seri ayrımı öne çıkar."
    };
    return narratives[brand.regionCluster] || narratives.ege;
}

function getCategoryNarrative(brand) {
    const narratives = {
        'premium-butik': "Premium ve butik segmentte yer alan markalarda duyusal karakter, hasat vurgusu, sınırlı seri algısı ve sofrada belirgin tat beklentisi daha görünür hale gelir.",
        'market-endustriyel': "Market segmentinde yer alan markalarda geniş dağıtım, farklı fiyat seviyeleri ve aynı marka altında birden fazla ürün serisi bulunması daha sık karşılaşılan bir durumdur.",
        'bolgesel-yerel': "Bölgesel ve yerel üreticilerde üretim hikayesi, köken bilgisi ve yöresel karakter çoğu zaman markanın ana ayrışma noktası haline gelir.",
        organik: "Organik segmentte marka dili çoğunlukla sertifikasyon, izlenebilirlik ve denetim süreçleri üzerinden kurulur; bu nedenle etiket bilgisi daha büyük önem taşır."
    };
    return narratives[brand.category] || narratives['bolgesel-yerel'];
}

function getBuyingNarrative(brand) {
    const narratives = {
        'premium-butik': "Bu tip markalarda satın alma kararı verirken erken hasat ifadesi, natürel sızma sınıfı, hasat yılı, şişe tipi ve duyusal profil anlatımı birlikte değerlendirilmelidir. Kullanıcı çoğu zaman kahvaltı, salata ve soğuk kullanım için daha karakterli bir yağ arar.",
        'market-endustriyel': "Bu tip markalarda en önemli nokta, markayı değil doğru seriyi seçmektir. Aynı marka altında riviera, natürel birinci, natürel sızma ya da farklı bölgesel seriler bulunabileceği için etiketin ön ve arka yüzünü birlikte okumak gerekir.",
        'bolgesel-yerel': "Yerel markalarda üreticinin köken bilgisi, ürünün hangi bölgeden geldiği, şişe üzerindeki açıklama dili ve ürünün ne kadar izlenebilir olduğu satın alma kararında daha büyük rol oynar. Burada küçük üretim ölçeği avantaj da olabilir, sınırlayıcı unsur da olabilir.",
        organik: "Organik markalarda satın alma aşamasında yalnızca organik ibareye değil, sertifikanın görünürlüğüne, ürün sınıfına, ambalaj yapısına ve resmi açıklamanın şeffaflığına birlikte bakılmalıdır."
    };
    return narratives[brand.category] || narratives['bolgesel-yerel'];
}

function getOliveNarrative(brand) {
    if (Array.isArray(brand.oliveTypeLabels) && brand.oliveTypeLabels.length > 0) {
        return `Bu sitedeki sınıflamaya göre marka ${joinTextList(brand.oliveTypeLabels)} çizgisiyle ilişkilendiriliyor. Bu eşleştirme resmi teknik beyan yerine, markanın bölgesi, açıklama dili ve görünen ürün profili birlikte değerlendirilerek hazırlanmış pratik bir okuma çerçevesi olarak düşünülmelidir.`;
    }
    return "Markanın belirgin bir zeytin çeşidi vurgusu görünmüyorsa, değerlendirmeyi ürün sınıfı, bölge ve üretim dili üzerinden yapmak daha sağlıklı olur.";
}

function buildBrandLongDetailParagraphs(brand) {
    const categoryLabel = (categoryLabels[brand.category] || brand.category).toLocaleLowerCase('tr-TR');
    const foundedSentence = brand.founded
        ? `${brand.founded} bilgisi, markanın pazardaki geçmişini anlamak için önemli bir referans sunuyor; ancak tek başına kalite göstergesi olarak okunmaması gerekiyor.`
        : `${brand.name} için açık bir kuruluş yılı bilgisi görünmüyorsa, değerlendirmeyi daha çok ürün dili, bölgesel bağ ve kategori konumu üzerinden yapmak gerekiyor.`;
    const websiteSentence = brand.website
        ? `Markanın resmi web sitesi bulunduğunda, seri isimleri, ambalaj seçenekleri, varsa hasat veya üretim vurguları ve kurumsal anlatı ilk bakılması gereken kaynaklardan biri haline geliyor.`
        : `Resmi web sitesi görünmeyen ya da sınırlı bilgi sunan markalarda, güvenilir satış sayfaları ve etiket üzerindeki zorunlu bilgiler daha dikkatli okunmalıdır.`;

    const paragraphs = [
        `${brand.name}, ${brand.region} bağlantısıyla öne çıkan bir ${categoryLabel} zeytinyağı markasıdır. ${brand.detail} Bu marka sayfası, markayı yalnızca tek cümlelik bir tanımla bırakmak yerine; ürün dilini, bölgesel bağlamını, kategori içindeki konumunu ve tüketici açısından ne ifade ettiğini daha açık hale getirmek için hazırlandı. Türkiye'de aynı marka altında farklı sınıflar, farklı ambalajlar ve farklı fiyat seviyeleri bulunabildiği için, kısa bir açıklama çoğu zaman satın alma kararına yetmez. Buradaki amaç, ${brand.name} adını daha okunur bir çerçeveye yerleştirmek ve kullanıcıya sonraki karşılaştırmaları için sağlam bir başlangıç noktası sunmaktır.`,
        `${foundedSentence} ${getRegionNarrative(brand)} ${getCategoryNarrative(brand)} Bu iki eksen birlikte okunduğunda marka, yalnızca nerede üretildiğiyle değil, nasıl bir tüketici beklentisine cevap verdiğiyle de daha net anlaşılır. Premium ve butik bir markada duyusal karakter, sınırlı seri veya erken hasat söylemi öne çıkabilirken; market segmentinde süreklilik, bulunabilirlik ve aynı markanın farklı seri yapıları daha belirleyici hale gelir. Bölgesel ve yerel üreticilerde ise köken anlatısı, üretici dili ve izlenebilirlik çoğu zaman en önemli fark yaratıcı unsurlar arasında yer alır.`,
        `${getOliveNarrative(brand)} Bunun pratik karşılığı şudur: şişe üzerindeki “natürel sızma”, “erken hasat”, “soğuk sıkım”, “organik” ya da bölgesel köken gibi ifadeler, markanın hangi damak profiline ve hangi kullanım senaryosuna daha yakın durduğunu anlamada yardımcı olur. Markayı seçerken yalnızca bir sloganı değil, bu teknik ve duyusal işaretleri birlikte okumak daha sağlıklı sonuç verir. Aynı isim altında bulunan farklı seri ve paketlerin birbirinden ciddi biçimde ayrışabileceği unutulmamalıdır; bu yüzden marka düzeyinde değil ürün düzeyinde karşılaştırma yapmak çoğu zaman daha doğru bir yaklaşımdır.`,
        `${websiteSentence} Sayfadaki şişe ve ürün görselleri gerçek marka kaynaklarından veya güvenilir satış sayfalarından derlendiği için, marka algısını yalnızca logo üzerinden değil, gerçek ürün görünümü üzerinden de okumaya yardımcı olur. Cam şişe, teneke, kutu set veya farklı paket yapıları gibi ayrımlar, markanın hedeflediği kullanım biçimini anlamada çoğu zaman düşündüğümüzden daha belirleyicidir. Bir markanın sofralık kullanım mı, günlük mutfak mı, hediye segmenti mi ya da daha yüksek fiyatlı butik bir seri mi öne çıkardığı çoğu zaman görsel sunum ve ürün dili birlikte incelendiğinde daha kolay anlaşılır.`,
        `${getBuyingNarrative(brand)} Marka değerlendirmesinde dikkat edilmesi gereken bir başka nokta da, aynı ismin altında farklı kalite katmanları bulunabilmesidir. Bu nedenle kullanıcı için en doğru yöntem; önce ürün sınıfını eşitlemek, sonra ambalaj ve paket yapısını karşılaştırmak, en son da fiyatı ve marka güvenini aynı tabloda okumaktır. Özellikle ilk kez denenen bir markada küçük boyutlu ya da daha sınırlı bir ürünle başlamak, aromayı ve tazeliği anlamayı kolaylaştırır; daha sonra daha büyük paketlere geçmek hem bütçeyi hem de tüketim hızını daha doğru yönetmeye yardımcı olur. Böylece markayı sadece reklam dili üzerinden değil, gerçek kullanım deneyimi üzerinden değerlendirmek mümkün hale gelir.`,
        `Bu sayfa ayrıca ${brand.name} markasını tek başına bırakmaz; ilgili kategori, bölge ve zeytin çeşidi sayfalarına bağlanarak benzer üreticileri görmeyi kolaylaştırır. Böylece kullanıcı yalnızca “bu marka nasıl bir profile sahip?” sorusuna değil, “hangi benzerlerle kıyaslanmalı?”, “hangi bölgesel çizgiye daha yakın duruyor?” ve “hangi kullanım senaryosunda daha mantıklı olabilir?” sorularına da yanıt bulur. Sonuç olarak ${brand.name}, logodan veya tek bir kısa tanımdan ibaret bir kayıt olmaktan çıkar; daha bilinçli marka karşılaştırması yapmaya yarayan, bağlamı güçlü ve daha açıklayıcı bir rehber sayfasına dönüşür. Bu yaklaşım, özellikle çok sayıda seçenek arasında kaybolmadan benzer markaları ayırmak isteyen kullanıcılar için daha pratik bir okuma zemini sunar.`
    ];

    const supportParagraph = `${brand.name} değerlendirilirken son adımda etiket üzerindeki ürün sınıfı, ambalaj tipi, saklama önerisi, varsa hasat yılı ve üretici bilgisinin birlikte okunması gerekir. Özellikle zeytinyağında tazelik, ışıkla temas, şişe tipi ve doğru saklama koşulları, marka algısını doğrudan etkileyebilir. Bu yüzden iyi bilinen bir marka ile daha az bilinen bir marka arasında karar verirken yalnızca isim gücüne değil; görünür bilgi kalitesine, ürün sınıfına ve sizin kullanım amacınıza uygunluğa bakmak daha doğru olur. Marka sayfasındaki iç bağlantılar da bu yüzden yalnızca gezinme için değil, benzerleri aynı bağlam içinde görebilmek için eklenmiştir.`;

    while (countWords(paragraphs.join(' ')) < 500) {
        paragraphs.push(supportParagraph);
    }

    return paragraphs;
}

brands.forEach((brand) => {
    brand.longDetailParagraphs = buildBrandLongDetailParagraphs(brand);
    brand.longDetailWordCount = countWords(brand.longDetailParagraphs.join(' '));
});

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

    const fallbackAttr = brand.logoFallback ? ` data-fallback="${brand.logoFallback}"` : '';
    const headerContent = brand.image
        ? `<img src="${brand.image}"${fallbackAttr} alt="${brand.name}" loading="lazy" onload="const r=this.naturalWidth/Math.max(this.naturalHeight,1);if(r>4.8){this.classList.add('logo-superwide');}else if(r>3){this.classList.add('logo-wide');}" onerror="const fb=this.dataset.fallback;if(fb&&this.src!==fb){this.src=fb;return;}this.style.display='none';const i=this.parentElement.querySelector('.brand-initials');if(i)i.style.display='block';">`
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

    card.tabIndex = 0;
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', `${brand.name} detay sayfasına git`);
    card.addEventListener('click', (event) => {
        if (event.target.closest('a')) return;
        window.location.href = getBrandDetailUrl(brand);
    });
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            window.location.href = getBrandDetailUrl(brand);
        }
    });

    return card;
}

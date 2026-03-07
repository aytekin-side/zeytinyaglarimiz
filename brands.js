// Zeytinyağlarımız - Brand Data
const brands = [
    { id: 1, name: "Komili", desc: "1878'den bu yana Türkiye'nin en köklü zeytinyağı markalarından biri. Ayvalık merkezli, geniş ürün yelpazesi ile hem soğuk sıkım natürel sızma hem de riviera çeşitleri sunar.", region: "Ayvalık, Balıkesir", category: "market-endustriyel", website: "https://www.komili.com.tr", founded: "1878", highlight: true, image: "https://img.logo.dev/komili.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 2, name: "Tariş", desc: "Ege Bölgesi zeytinyağı kooperatiflerinin birliği. Üreticiden doğrudan temin edilen zeytinlerle üretim yapar. Türkiye'nin en büyük zeytinyağı ihracatçılarından biridir.", region: "İzmir, Ege", category: "market-endustriyel", website: "https://www.tariszeytinyagi.com.tr", founded: "1915", highlight: true, image: "https://img.logo.dev/tariszeytinyagi.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 3, name: "Kristal", desc: "Türkiye'nin en bilinen yemeklik yağ markalarından biri. Zeytinyağı dahil geniş yağ ürün gamı sunar. Market segmentinde güçlü konumu vardır.", region: "İzmir", category: "market-endustriyel", website: "https://www.kristalyag.com.tr", founded: "1960", highlight: false, image: "https://img.logo.dev/kristalyag.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 4, name: "Laleli", desc: "Ödüllü Türk zeytinyağı markası. Uluslararası yarışmalarda çok sayıda altın madalya kazanmıştır. Erken hasat natürel sızma zeytinyağları ile bilinir.", region: "İzmir, Ege", category: "premium-butik", website: "https://www.laleli.com.tr", founded: null, highlight: true, image: "https://img.logo.dev/laleli.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 5, name: "Madra", desc: "Kuzey Ege bölgesinin kaliteli zeytinyağı markası. Edremit ve Ayvalık zeytinlerinden üretim yapar. Natürel sızma çeşitleri ile tanınır.", region: "Edremit, Balıkesir", category: "market-endustriyel", website: "https://www.madra.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/madra.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 6, name: "Luna", desc: "Türkiye'de yaygın olarak tüketilen zeytinyağı ve yemeklik yağ markası. Uygun fiyatlı riviera ve natürel sızma zeytinyağı seçenekleri sunar.", region: "İzmir", category: "market-endustriyel", website: "https://www.lunayag.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/lunayag.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 7, name: "Yudum", desc: "Türkiye'nin en büyük yemeklik yağ markalarından biri. Savola Group bünyesinde faaliyet gösterir. Zeytinyağı dahil geniş ürün gamı mevcuttur.", region: "İstanbul", category: "market-endustriyel", website: "https://www.yudum.com.tr", founded: "1968", highlight: false, image: "https://img.logo.dev/yudum.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 8, name: "Kırlangıç", desc: "Uzun yıllardır Türk mutfağının vazgeçilmez zeytinyağı markalarından. Natürel sızma ve riviera çeşitleri bulunur.", region: "İstanbul", category: "market-endustriyel", website: "https://www.kirlangic.com.tr", founded: null, highlight: false, image: "https://img.logo.dev/kirlangic.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 9, name: "Marmarabirlik", desc: "Marmara Zeytin Tarım Satış Kooperatifleri Birliği. Türkiye'nin en büyük sofralık zeytin üreticisi olup zeytinyağı ürünleri de sunar.", region: "Bursa, Marmara", category: "market-endustriyel", website: "https://www.marmarabirlik.com.tr", founded: "1954", highlight: true, image: "https://img.logo.dev/marmarabirlik.com.tr?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 10, name: "Oleamea", desc: "Premium segment Türk zeytinyağı markası. Uluslararası yarışmalarda ödüller kazanmıştır. Erken hasat, yüksek polifenollü natürel sızma zeytinyağları sunar.", region: "Ege Bölgesi", category: "premium-butik", website: "https://www.oleamea.com", founded: null, highlight: true, image: "https://img.logo.dev/oleamea.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
    { id: 11, name: "Mera Ovası", desc: "Butik üretim yapan artizanal zeytinyağı markası. Küçük partiler halinde, özenle seçilmiş zeytinlerden soğuk sıkım natürel sızma zeytinyağı üretir.", region: "Erdek, Balıkesir", category: "premium-butik", website: "https://meraovasi.com", founded: null, highlight: true, image: "https://img.logo.dev/meraovasi.com?token=pk_Ofa3ohoGTiGfMxKCkSAbCA&size=400&format=png" },
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
    { id: 50, name: "Naturel", desc: "Doğal ve saf zeytinyağı ürünleri sunan marka. Natürelliği ön plana çıkarır.", region: "Ege Bölgesi", category: "market-endustriyel", website: null, founded: null, highlight: false, image: "https://cdn.pazarama.com/MNRESIZE/600/600/asset/742185646894/fcbe2fb9-fcc2-495d-0773-08d979bdb7e0/zeytinyagi-sisesi-yesil-250-ml-1.png" }
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
    nizip: 'Nizip Yağlık'
};

const manualLogoOverrides = {
    2: 'https://www.tariszeytin.com.tr/Data/EditorFiles/designs/stickyLogo.svg',
    3: 'https://static.ticimax.cloud/54603/customcss/ticimax/images/logo.png',
    5: 'https://www.sezaiomermadra.com.tr/assets/img/som-logo.png',
    6: 'https://static.happycenter.com.tr/Uploads/luna-kase-margarin-500-gr-13735-500x500.png',
    10: 'images/oleamea.png',
    11: 'images/mera-ovasi.svg',
    12: 'images/olivurla.png',
    13: 'images/olistica.png',
    30: 'images/olivos.png',
    35: 'images/nargourmet.png',
    47: 'https://cdn.cimri.io/market/260x260/izmir-zeytinyaglari-5-lt-soguk-sikim-zeytinyagi-_1495911.jpg'
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

    if (/(kilis|hatay|güneydoğu|guneydogu|nizip|gaziantep|mardin|şanlıurfa|sanliurfa)/.test(text)) return 'guneydogu';
    if (/(edirne|trakya|tekirdağ|tekirdag|kırklareli|kirklareli)/.test(text)) return 'trakya';
    if (/(bursa|marmara|mudanya|gemlik|istanbul)/.test(text)) return 'marmara';
    if (/(mersin|antalya|adana|akdeniz)/.test(text)) return 'akdeniz';
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
    if (/(trilye|trakya|edirne)/.test(text)) types.push('trilye');
    if (/(kilis|hatay|halhalı|halhali|güneydoğu|guneydogu)/.test(text)) types.push('halhali');
    if (/(nizip|gaziantep)/.test(text)) types.push('nizip');

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
        ? `<img src="${brand.image}"${fallbackAttr} alt="${brand.name}" loading="lazy" onerror="const fb=this.dataset.fallback;if(fb&&this.src!==fb){this.src=fb;return;}this.style.display='none';const i=this.parentElement.querySelector('.brand-initials');if(i)i.style.display='block';">`
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

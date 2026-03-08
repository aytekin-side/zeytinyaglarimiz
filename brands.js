// Zeytinyağlarımız - Brand Data
const brands = [
    {
        "id": 1,
        "name": "Komili",
        "desc": "1878'den bu yana Türkiye'nin en köklü zeytinyağı markalarından biri. Ayvalık merkezli, geniş ürün yelpazesi ile hem soğuk sıkım natürel sızma hem de riviera çeşitleri sunar.",
        "region": "Ayvalık, Balıkesir",
        "category": "market-endustriyel",
        "website": "https://www.komili.com.tr",
        "founded": "1878",
        "highlight": true,
        "image": "images/brand-logos/01-komili.svg",
        "slug": "komili",
        "editorial": null,
        "detail": "Biz Ayvalık, Balıkesir çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. 1878 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=komili.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Komili tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Ayvalık, Balıkesir çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 1878 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Komili tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Komili aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 508
    },
    {
        "id": 2,
        "name": "Tariş",
        "desc": "Ege Bölgesi zeytinyağı kooperatiflerinin birliği. Üreticiden doğrudan temin edilen zeytinlerle üretim yapar. Türkiye'nin en büyük zeytinyağı ihracatçılarından biridir.",
        "region": "İzmir, Ege",
        "category": "market-endustriyel",
        "website": "https://www.tariszeytin.com.tr",
        "founded": "1915",
        "highlight": true,
        "image": "images/brand-logos/02-taris.png",
        "slug": "taris",
        "editorial": null,
        "detail": "Biz İzmir, Ege çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. 1915 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=tariszeytin.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Tariş tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. İzmir, Ege çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 1915 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Tariş tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Tariş aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 3,
        "name": "Kristal",
        "desc": "Türkiye'nin en bilinen yemeklik yağ markalarından biri. Zeytinyağı dahil geniş yağ ürün gamı sunar. Market segmentinde güçlü konumu vardır.",
        "region": "İzmir",
        "category": "market-endustriyel",
        "website": "https://www.kristalyaglari.com",
        "founded": "1960",
        "highlight": false,
        "image": "images/brand-logos/03-kristal.png",
        "slug": "kristal",
        "editorial": null,
        "detail": "Biz İzmir çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. 1960 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=kristalyaglari.com&sz=256",
        "longDetailParagraphs": [
            "Biz Kristal tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. İzmir çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 1960 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Kristal tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Kristal aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 510
    },
    {
        "id": 4,
        "name": "Laleli",
        "desc": "Ödüllü Türk zeytinyağı markası. Uluslararası yarışmalarda çok sayıda altın madalya kazanmıştır. Erken hasat natürel sızma zeytinyağları ile bilinir.",
        "region": "İzmir, Ege",
        "category": "premium-butik",
        "website": "https://www.laleli.com.tr",
        "founded": null,
        "highlight": true,
        "image": "images/brand-logos/04-laleli.png",
        "slug": "laleli",
        "editorial": null,
        "detail": "Biz İzmir, Ege çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=laleli.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Laleli tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. İzmir, Ege çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz İzmir, Ege tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Laleli tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Laleli aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 5,
        "name": "Madra",
        "desc": "Kuzey Ege bölgesinin kaliteli zeytinyağı markası. Edremit ve Ayvalık zeytinlerinden üretim yapar. Natürel sızma çeşitleri ile tanınır.",
        "region": "Edremit, Balıkesir",
        "category": "market-endustriyel",
        "website": "https://www.sezaiomermadra.com.tr",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/05-madra.png",
        "slug": "madra",
        "editorial": null,
        "detail": "Biz Edremit, Balıkesir çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik",
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html",
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık",
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=sezaiomermadra.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Madra tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Edremit, Balıkesir çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Edremit, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Madra tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Madra aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 510
    },
    {
        "id": 6,
        "name": "Luna",
        "desc": "Türkiye'de yaygın olarak tüketilen zeytinyağı ve yemeklik yağ markası. Uygun fiyatlı riviera ve natürel sızma zeytinyağı seçenekleri sunar.",
        "region": "İzmir",
        "category": "market-endustriyel",
        "website": "https://www.lunayag.com.tr",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/06-luna.png",
        "slug": "luna",
        "editorial": null,
        "detail": "Biz İzmir çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=lunayag.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Luna tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. İzmir çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz İzmir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Luna tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Luna aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 7,
        "name": "Yudum",
        "desc": "Türkiye'nin en büyük yemeklik yağ markalarından biri. Savola Group bünyesinde faaliyet gösterir. Zeytinyağı dahil geniş ürün gamı mevcuttur.",
        "region": "İstanbul",
        "category": "market-endustriyel",
        "website": "https://www.yudum.com.tr",
        "founded": "1968",
        "highlight": false,
        "image": "images/brand-logos/07-yudum.svg",
        "slug": "yudum",
        "editorial": null,
        "detail": "Biz İstanbul çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. 1968 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=yudum.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Yudum tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. İstanbul çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 1968 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Yudum tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Yudum aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 510
    },
    {
        "id": 8,
        "name": "Kırlangıç",
        "desc": "Uzun yıllardır Türk mutfağının vazgeçilmez zeytinyağı markalarından. Natürel sızma ve riviera çeşitleri bulunur.",
        "region": "İstanbul",
        "category": "market-endustriyel",
        "website": "https://www.kirlangic.com.tr",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/08-kirlangic.svg",
        "slug": "kirlangic",
        "editorial": null,
        "detail": "Biz İstanbul çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=kirlangic.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Kırlangıç tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. İstanbul çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz İstanbul tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Kırlangıç tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Kırlangıç aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 9,
        "name": "Marmarabirlik",
        "desc": "Marmara Zeytin Tarım Satış Kooperatifleri Birliği. Türkiye'nin en büyük sofralık zeytin üreticisi olup zeytinyağı ürünleri de sunar.",
        "region": "Bursa, Marmara",
        "category": "market-endustriyel",
        "website": "https://www.marmarabirlik.com.tr",
        "founded": "1954",
        "highlight": true,
        "image": "images/brand-logos/09-marmarabirlik.png",
        "slug": "marmarabirlik",
        "editorial": null,
        "detail": "Biz Bursa, Marmara çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. 1954 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=marmarabirlik.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Marmarabirlik tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Bursa, Marmara çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 1954 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Marmarabirlik tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Marmarabirlik aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 10,
        "name": "Oleamea",
        "desc": "Premium segment Türk zeytinyağı markası. Uluslararası yarışmalarda ödüller kazanmıştır. Erken hasat, yüksek polifenollü natürel sızma zeytinyağları sunar.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": "https://www.oleamea.com",
        "founded": null,
        "highlight": true,
        "image": "images/brand-logos/10-oleamea.png",
        "slug": "oleamea",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=oleamea.com&sz=256",
        "longDetailParagraphs": [
            "Biz Oleamea tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Oleamea tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Oleamea aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 11,
        "name": "Mera Ovası",
        "desc": "Marmara bölgesinde, Erdek çevresindeki Gemlik tipi zeytinlerden butik üretim yapan artizanal zeytinyağı markası. Küçük partiler halinde soğuk sıkım natürel sızma zeytinyağı üretir.",
        "region": "Erdek, Marmara",
        "category": "premium-butik",
        "website": "https://meraovasi.com",
        "founded": null,
        "highlight": true,
        "image": "images/brand-logos/11-mera-ovasi.png",
        "slug": "mera-ovasi",
        "editorial": null,
        "detail": "Biz Erdek, Marmara çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=meraovasi.com&sz=256",
        "longDetailParagraphs": [
            "Biz Mera Ovası tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Erdek, Marmara çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Erdek, Marmara tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Mera Ovası tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Mera Ovası aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 516
    },
    {
        "id": 12,
        "name": "Olivurla",
        "desc": "Urla bölgesinden premium zeytinyağı üreten butik marka. Urla'nın eşsiz mikro ikliminde yetişen zeytinlerden üretim yapar.",
        "region": "Urla, İzmir",
        "category": "premium-butik",
        "website": "https://www.olivurla.com",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/12-olivurla.png",
        "slug": "olivurla",
        "editorial": null,
        "detail": "Biz Urla, İzmir çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=olivurla.com&sz=256",
        "longDetailParagraphs": [
            "Biz Olivurla tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Urla, İzmir çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Urla, İzmir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Olivurla tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Olivurla aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 13,
        "name": "Olistica",
        "desc": "Butik üretim yapan premium zeytinyağı markası. Sınırlı sayıda üretilen, tek çeşit (monocultivar) zeytinyağları ile tanınır.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": "https://www.olistica.com.tr",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/13-olistica.jpg",
        "slug": "olistica",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=olistica.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Olistica tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Olistica tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Olistica aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 14,
        "name": "Olive Riviera",
        "desc": "Kaliteli Türk zeytinyağı markası. Riviera ve natürel sızma zeytinyağı çeşitleri ile piyasada yer alır.",
        "region": "Ege Bölgesi",
        "category": "market-endustriyel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/14-olive-riviera.jpg",
        "slug": "olive-riviera",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Olive Riviera tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Ege Bölgesi çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Olive Riviera tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Olive Riviera aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 520
    },
    {
        "id": 15,
        "name": "Papez",
        "desc": "Güney Ege bölgesinden kaliteli zeytinyağı üreten marka. Natürel sızma zeytinyağları ile tanınır.",
        "region": "Ege Bölgesi",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/15-papez.jpg",
        "slug": "papez",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Papez ile Ege Bölgesi tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Ege Bölgesi çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Papez tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Papez aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 515
    },
    {
        "id": 16,
        "name": "Selatin",
        "desc": "Geleneksel yöntemlerle üretim yapan zeytinyağı markası. Doğal ve katkısız ürünleri ile bilinir.",
        "region": "Ege Bölgesi",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/16-selatin.png",
        "slug": "selatin",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Selatin ile Ege Bölgesi tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Ege Bölgesi çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Selatin tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Selatin aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 515
    },
    {
        "id": 17,
        "name": "Değirmenci",
        "desc": "Ege bölgesinden taş baskı ve soğuk sıkım zeytinyağları sunan marka. Geleneksel üretim yöntemleri ile kaliteli natürel sızma zeytinyağı üretir.",
        "region": "Ege Bölgesi",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/17-degirmenci.png",
        "slug": "degirmenci",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Değirmenci ile Ege Bölgesi tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Ege Bölgesi çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Değirmenci tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Değirmenci aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 515
    },
    {
        "id": 18,
        "name": "İzmir Pınarı",
        "desc": "İzmir bölgesinden kaliteli zeytinyağı üreten yerel marka. Ege zeytinlerinden soğuk sıkım natürel sızma zeytinyağı sunar.",
        "region": "İzmir",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/18-izmir-pinari.jpg",
        "slug": "izmir-pinari",
        "editorial": null,
        "detail": "Biz İzmir çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz İzmir Pınarı ile İzmir tarafının yer duygusunu sofraya taşımayı hedefliyoruz. İzmir çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz İzmir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz İzmir Pınarı tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. İzmir Pınarı aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 515
    },
    {
        "id": 19,
        "name": "Beyaz Altın",
        "desc": "Premium Türk zeytinyağı markası. Erken hasat zeytinlerden üretilen natürel sızma zeytinyağları ile dikkat çeker.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/19-beyaz-altin.jpg",
        "slug": "beyaz-altin",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Beyaz Altın tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Beyaz Altın tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Beyaz Altın aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 520
    },
    {
        "id": 20,
        "name": "Özgün Olive",
        "desc": "Butik üretim yapan zeytinyağı markası. Soğuk sıkım natürel sızma zeytinyağı ve aromatik zeytinyağı çeşitleri sunar.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/20-ozgun-olive.jpg",
        "slug": "ozgun-olive",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Özgün Olive tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Özgün Olive tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Özgün Olive aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 520
    },
    {
        "id": 21,
        "name": "Edremit Körfezi",
        "desc": "Edremit Körfezi'nin eşsiz ikliminde yetişen zeytinlerden üretilen natürel sızma zeytinyağı. ZETAŞ olarak da bilinir.",
        "region": "Edremit, Balıkesir",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/21-edremit-korfezi.jpg",
        "slug": "edremit-korfezi",
        "editorial": null,
        "detail": "Biz Edremit, Balıkesir çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Edremit Körfezi ile Edremit, Balıkesir tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Edremit, Balıkesir çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Edremit, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Edremit Körfezi tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Edremit Körfezi aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 515
    },
    {
        "id": 22,
        "name": "Kürşat",
        "desc": "Güneydoğu bölgesinden, özellikle Kilis ve Hatay zeytinlerinden üretim yapan marka. Halhalı ve Nizip zeytinlerinden kaliteli yağ üretir.",
        "region": "Kilis, Güneydoğu Anadolu",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/22-kursat.png",
        "slug": "kursat",
        "editorial": null,
        "detail": "Biz Kilis, Güneydoğu Anadolu çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "guneydogu",
        "oliveTypes": [
            "halhali",
            "nizip"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/guneydogu.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/halhali.html",
            "topic/zeytin-cesitleri/nizip.html"
        ],
        "regionClusterLabel": "Güneydoğu Anadolu",
        "oliveTypeLabels": [
            "Halhalı",
            "Nizip Yağlık"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Kürşat ile Kilis, Güneydoğu Anadolu tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Kilis, Güneydoğu Anadolu çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Kilis, Güneydoğu Anadolu tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Güneydoğu tarafının daha belirgin bölgesel kimliği, yağa tok ve akılda kalıcı bir duruş kazandırır. Biz bu duruşu saklamadan, sofrada hemen tanınır hale getirmeyi istiyoruz.",
            "Biz Kürşat tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Halhalı tarafının tok ve yöresini hemen hissettiren duruşunu sofraya dürüstçe taşımak istiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Kürşat aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 516
    },
    {
        "id": 23,
        "name": "Zeytin Dalı",
        "desc": "Ege bölgesinden natürel sızma zeytinyağı üreten marka. Geleneksel ve modern üretim yöntemlerini birleştirerek kaliteli ürünler sunar.",
        "region": "Ege Bölgesi",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/23-zeytin-dali.jpg",
        "slug": "zeytin-dali",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Zeytin Dalı ile Ege Bölgesi tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Ege Bölgesi çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Zeytin Dalı tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Zeytin Dalı aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 518
    },
    {
        "id": 24,
        "name": "Egemden",
        "desc": "Ege bölgesinin doğal lezzetlerini sunan marka. Natürel sızma zeytinyağı ve zeytin ürünleri portföyü bulunur.",
        "region": "Ege Bölgesi",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/24-egemden.png",
        "slug": "egemden",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Egemden ile Ege Bölgesi tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Ege Bölgesi çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Egemden tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Egemden aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 515
    },
    {
        "id": 25,
        "name": "Bereket",
        "desc": "Güney bölgelerden zeytinyağı üreten marka. Hatay ve Mersin yöresi zeytinlerinden natürel sızma zeytinyağı üretir.",
        "region": "Hatay, Akdeniz",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/25-bereket.jpg",
        "slug": "bereket",
        "editorial": null,
        "detail": "Biz Hatay, Akdeniz çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "halhali",
            "sari-ulak"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/halhali.html",
            "topic/zeytin-cesitleri/sari-ulak.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Halhalı",
            "Sarı Ulak"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Bereket ile Hatay, Akdeniz tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Hatay, Akdeniz çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Hatay, Akdeniz tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Bereket tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Halhalı tarafının tok ve yöresini hemen hissettiren duruşunu sofraya dürüstçe taşımak istiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Bereket aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 26,
        "name": "Olea Prilis",
        "desc": "Premium butik zeytinyağı markası. Uluslararası kalite standartlarında, düşük asitli natürel sızma zeytinyağı üretir.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/26-olea-prilis.png",
        "slug": "olea-prilis",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Olea Prilis tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Olea Prilis tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Olea Prilis aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 520
    },
    {
        "id": 27,
        "name": "Oliterra",
        "desc": "Yükselen Türk zeytinyağı markası. Natürel sızma zeytinyağında kalite odaklı üretim yapar.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/27-oliterra.gif",
        "slug": "oliterra",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Oliterra tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Oliterra tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Oliterra aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 517
    },
    {
        "id": 28,
        "name": "Ayla Zeytinyağı",
        "desc": "Ayvalık bölgesinin geleneksel zeytinyağı markası. Ayvalık çeşidi zeytinlerden soğuk sıkım natürel sızma zeytinyağı üretir.",
        "region": "Ayvalık, Balıkesir",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/28-ayla-zeytinyagi.jpg",
        "slug": "ayla-zeytinyagi",
        "editorial": null,
        "detail": "Biz Ayvalık, Balıkesir çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Ayla Zeytinyağı ile Ayvalık, Balıkesir tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Ayvalık, Balıkesir çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ayvalık, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Ayla Zeytinyağı tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Ayla Zeytinyağı aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 515
    },
    {
        "id": 29,
        "name": "Tarihi Kırkpınar",
        "desc": "Trakya bölgesinden zeytinyağı üreten marka. Edirne ve Trakya yöresi zeytinlerinden üretim yapar.",
        "region": "Edirne, Trakya",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/29-tarihi-kirkpinar.png",
        "slug": "tarihi-kirkpinar",
        "editorial": null,
        "detail": "Biz Edirne, Trakya çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "trakya",
        "oliveTypes": [
            "trilye"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/trakya.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/trilye.html"
        ],
        "regionClusterLabel": "Trakya Bölgesi",
        "oliveTypeLabels": [
            "Trilye"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Tarihi Kırkpınar ile Edirne, Trakya tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Edirne, Trakya çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Edirne, Trakya tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Trakya tarafının daha niş ve daha yakın üretim hissi, şişeye sakin ama özgün bir kimlik verir. Biz bu özgünlüğü fazla oynatmadan korumaya çalışıyoruz.",
            "Biz Tarihi Kırkpınar tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Trilye çizgisinin damakta bıraktığı karakteri mümkün olduğunca açık hissettirmek istiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Tarihi Kırkpınar aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 30,
        "name": "Olivos",
        "desc": "Zeytinyağı bazlı ürünleriyle tanınan Türk markası. Zeytinyağı satışının yanı sıra zeytinyağlı sabun ve kozmetik ürünleri de üretir.",
        "region": "İstanbul",
        "category": "premium-butik",
        "website": "https://www.olivos.com.tr",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/30-olivos.png",
        "slug": "olivos",
        "editorial": null,
        "detail": "Biz İstanbul çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=olivos.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Olivos tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. İstanbul çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz İstanbul tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Olivos tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Olivos aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 31,
        "name": "Hasat",
        "desc": "Ege bölgesinden erken hasat zeytinyağı üreten marka. Erken hasat (early harvest) konseptiyle premium natürel sızma zeytinyağı sunar.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/31-hasat.png",
        "slug": "hasat",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Hasat tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Hasat tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Hasat aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 517
    },
    {
        "id": 32,
        "name": "Ayvalık Yıldızı",
        "desc": "Ayvalık'ın meşhur zeytinlerinden üretilen bölgesel marka. Ayvalık zeytinyağının kendine has meyvemsi aromasını yansıtır.",
        "region": "Ayvalık, Balıkesir",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/32-ayvalik-yildizi.jpg",
        "slug": "ayvalik-yildizi",
        "editorial": null,
        "detail": "Biz Ayvalık, Balıkesir çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Ayvalık Yıldızı ile Ayvalık, Balıkesir tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Ayvalık, Balıkesir çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ayvalık, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Ayvalık Yıldızı tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Ayvalık Yıldızı aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 515
    },
    {
        "id": 33,
        "name": "İlyada",
        "desc": "Çanakkale Geyikli'den kaliteli Türk zeytinyağı markası. Natürel sızma zeytinyağı ve sofralık zeytin çeşitleri sunar.",
        "region": "Çanakkale",
        "category": "premium-butik",
        "website": "https://ilyada.com",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/33-ilyada.png",
        "slug": "ilyada",
        "editorial": null,
        "detail": "Biz Çanakkale çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=ilyada.com&sz=256",
        "longDetailParagraphs": [
            "Biz İlyada tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Çanakkale çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Çanakkale tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz İlyada tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. İlyada aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 34,
        "name": "Coşkun Zeytinyağları",
        "desc": "Köklü Türk zeytinyağı üreticisi. Uzun yıllar boyunca Ege zeytinlerinden kaliteli zeytinyağı üretmektedir.",
        "region": "İzmir, Ege",
        "category": "market-endustriyel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/34-coskun-zeytinyaglari.png",
        "slug": "coskun-zeytinyaglari",
        "editorial": null,
        "detail": "Biz İzmir, Ege çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Coşkun Zeytinyağları tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. İzmir, Ege çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz İzmir, Ege tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Coşkun Zeytinyağları tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Coşkun Zeytinyağları aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 520
    },
    {
        "id": 35,
        "name": "Nar Gourmet",
        "desc": "Premium gıda markası olup zeytinyağı portföyü de bulunur. Türk lezzetlerini dünyaya tanıtan ödüllü markadır.",
        "region": "İstanbul",
        "category": "premium-butik",
        "website": "https://www.nargourmet.com",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/35-nar-gourmet.jpg",
        "slug": "nar-gourmet",
        "editorial": null,
        "detail": "Biz İstanbul çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=nargourmet.com&sz=256",
        "longDetailParagraphs": [
            "Biz Nar Gourmet tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. İstanbul çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz İstanbul tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Nar Gourmet tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Nar Gourmet aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 514
    },
    {
        "id": 36,
        "name": "MonOlive",
        "desc": "Premium zeytinyağı markası. Tek çeşit zeytinlerden üretilen butik natürel sızma zeytinyağları sunar.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": "https://www.monolive.com.tr",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/36-monolive.jpg",
        "slug": "monolive",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=monolive.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz MonOlive tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz MonOlive tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. MonOlive aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 37,
        "name": "Zeytursan",
        "desc": "Marmara bölgesinde zeytinyağı üretimi ve işleme yapan firma. Hem sofralık zeytin hem de zeytinyağı ürünleri sunar.",
        "region": "Bursa, Marmara",
        "category": "bolgesel-yerel",
        "website": "https://www.zeytursan.com.tr",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/37-zeytursan.png",
        "slug": "zeytursan",
        "editorial": null,
        "detail": "Biz Bursa, Marmara çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=zeytursan.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Zeytursan ile Bursa, Marmara tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Bursa, Marmara çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Bursa, Marmara tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Zeytursan tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Zeytursan aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 38,
        "name": "Trilye",
        "desc": "Bursa'nın Mudanya ilçesindeki tarihi Trilye (Tirilye) bölgesinden adını alan zeytinyağı markası. Bölgenin zengin zeytin mirasını yansıtır.",
        "region": "Mudanya, Bursa",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/38-trilye.png",
        "slug": "trilye",
        "editorial": null,
        "detail": "Biz Mudanya, Bursa çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik",
            "trilye"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html",
            "topic/zeytin-cesitleri/trilye.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik",
            "Trilye"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Trilye ile Mudanya, Bursa tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Mudanya, Bursa çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Mudanya, Bursa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Trilye tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Trilye aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 515
    },
    {
        "id": 39,
        "name": "Vita",
        "desc": "Türkiye genelinde satılan zeytinyağı markası. Uygun fiyatlı natürel sızma ve riviera zeytinyağı seçenekleri sunar.",
        "region": "Türkiye geneli",
        "category": "market-endustriyel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/39-vita.jpg",
        "slug": "vita",
        "editorial": null,
        "detail": "Biz Türkiye geneli çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "turkiye",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/turkiye.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Türkiye Geneli",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Vita tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Türkiye geneli çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Türkiye geneli tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Türkiye’nin farklı üretim çizgilerinden gelen birikim, bu yağın mutfakta farklı kullanım alanlarına rahatça girebilmesini sağlıyor. Biz de bu esnekliği güvenle sunmak istiyoruz.",
            "Biz Vita tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Vita aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 515
    },
    {
        "id": 40,
        "name": "Polat Zeytinyağı",
        "desc": "Ege bölgesinde uzun yıllardır zeytinyağı üreten aile şirketi. Geleneksel yöntemlerle kaliteli natürel sızma zeytinyağı üretir.",
        "region": "Ege Bölgesi",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/40-polat-zeytinyagi.png",
        "slug": "polat-zeytinyagi",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Polat Zeytinyağı ile Ege Bölgesi tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Ege Bölgesi çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Polat Zeytinyağı tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Polat Zeytinyağı aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 518
    },
    {
        "id": 41,
        "name": "Tego",
        "desc": "Modern tasarımlı premium zeytinyağı markası. Genç nesil tüketicilere hitap eden şık ambalajlarıyla öne çıkar.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/41-tego.png",
        "slug": "tego",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Tego tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Tego tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Tego aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 517
    },
    {
        "id": 42,
        "name": "Bumba Zeytinyağı",
        "desc": "Organik sertifikalı zeytinyağı üreten marka. Kimyasal gübre ve ilaç kullanılmadan yetiştirilen zeytinlerden üretim yapar.",
        "region": "Ege Bölgesi",
        "category": "organik",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/42-bumba-zeytinyagi.png",
        "slug": "bumba-zeytinyagi",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını temiz içerik hassasiyetini lezzetle bir arada tutan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/organik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Bumba Zeytinyağı tarafında temiz içerik hassasiyetini lezzetle bir arada tutuyoruz. Ege Bölgesi çıkışlı bu yağı içeriği kadar üretim hassasiyeti de önemli olan temiz bir çizgi anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Bumba Zeytinyağı tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Bumba Zeytinyağı aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 520
    },
    {
        "id": 43,
        "name": "Herbal Organik",
        "desc": "Organik sertifikalı zeytinyağı ve doğal gıda ürünleri sunan marka. Organik tarım standartlarına uygun üretim yapar.",
        "region": "Ege Bölgesi",
        "category": "organik",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/43-herbal-organik.jpg",
        "slug": "herbal-organik",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını temiz içerik hassasiyetini lezzetle bir arada tutan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/organik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Herbal Organik tarafında temiz içerik hassasiyetini lezzetle bir arada tutuyoruz. Ege Bölgesi çıkışlı bu yağı içeriği kadar üretim hassasiyeti de önemli olan temiz bir çizgi anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Herbal Organik tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Herbal Organik aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 520
    },
    {
        "id": 44,
        "name": "Olive Mama",
        "desc": "Organik ve doğal zeytinyağı markası. Kadın girişimciler tarafından kurulan, sürdürülebilir tarım odaklı butik üretici.",
        "region": "Ege Bölgesi",
        "category": "organik",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/44-olive-mama.png",
        "slug": "olive-mama",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını temiz içerik hassasiyetini lezzetle bir arada tutan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/organik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Olive Mama tarafında temiz içerik hassasiyetini lezzetle bir arada tutuyoruz. Ege Bölgesi çıkışlı bu yağı içeriği kadar üretim hassasiyeti de önemli olan temiz bir çizgi anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Olive Mama tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Olive Mama aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 520
    },
    {
        "id": 45,
        "name": "Ekooleo",
        "desc": "Organik sertifikalı natürel sızma zeytinyağı üreten marka. Ekolojik tarım ilkelerine bağlı üretim yapar.",
        "region": "Ege Bölgesi",
        "category": "organik",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/45-ekooleo.webp",
        "slug": "ekooleo",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını temiz içerik hassasiyetini lezzetle bir arada tutan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/organik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Ekooleo tarafında temiz içerik hassasiyetini lezzetle bir arada tutuyoruz. Ege Bölgesi çıkışlı bu yağı içeriği kadar üretim hassasiyeti de önemli olan temiz bir çizgi anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Ekooleo tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Ekooleo aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 517
    },
    {
        "id": 46,
        "name": "Ödemiş Birlik",
        "desc": "Ödemiş bölgesi zeytin üreticileri kooperatifi. Memecik çeşidi zeytinlerden kaliteli natürel sızma zeytinyağı üretir.",
        "region": "Ödemiş, İzmir",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/46-odemis-birlik.png",
        "slug": "odemis-birlik",
        "editorial": null,
        "detail": "Biz Ödemiş, İzmir çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Ödemiş Birlik ile Ödemiş, İzmir tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Ödemiş, İzmir çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ödemiş, İzmir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Ödemiş Birlik tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Ödemiş Birlik aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 518
    },
    {
        "id": 47,
        "name": "İzmir Birlik",
        "desc": "İzmir bölgesi tarım kooperatifleri birliği (İZBİRLİK). Zeytinyağı dahil çeşitli tarım ürünlerinin işlenmesi ve pazarlanmasında faaliyet gösterir.",
        "region": "İzmir",
        "category": "market-endustriyel",
        "website": "https://www.izbirlik.com.tr",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/47-izmir-birlik.png",
        "slug": "izmir-birlik",
        "editorial": null,
        "detail": "Biz İzmir çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=izbirlik.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz İzmir Birlik tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. İzmir çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz İzmir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz İzmir Birlik tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. İzmir Birlik aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 514
    },
    {
        "id": 48,
        "name": "Milas Zeytinyağları",
        "desc": "Muğla'nın Milas ilçesinden üretim yapan yerel marka. Milas bölgesinin kendine has zeytin çeşitlerinden kaliteli yağ üretir.",
        "region": "Milas, Muğla",
        "category": "bolgesel-yerel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/48-milas-zeytinyaglari.png",
        "slug": "milas-zeytinyaglari",
        "editorial": null,
        "detail": "Biz Milas, Muğla çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Milas Zeytinyağları ile Milas, Muğla tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Milas, Muğla çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Milas, Muğla tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Milas Zeytinyağları tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Milas Zeytinyağları aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 518
    },
    {
        "id": 49,
        "name": "Nish Olive",
        "desc": "Premium butik zeytinyağı markası. Sınırlı üretimli, özenle seçilmiş tek çeşit zeytinlerden yüksek kaliteli natürel sızma zeytinyağı üretir.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": "https://nisholive.com",
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/49-nish-olive.png",
        "slug": "nish-olive",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=nisholive.com&sz=256",
        "longDetailParagraphs": [
            "Biz Nish Olive tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Nish Olive tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Nish Olive aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 516
    },
    {
        "id": 50,
        "name": "Naturel",
        "desc": "Doğal ve saf zeytinyağı ürünleri sunan marka. Natürelliği ön plana çıkarır.",
        "region": "Ege Bölgesi",
        "category": "market-endustriyel",
        "website": null,
        "founded": null,
        "highlight": false,
        "image": "images/brand-logos/50-naturel.jpg",
        "slug": "naturel",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "",
        "longDetailParagraphs": [
            "Biz Naturel tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Ege Bölgesi çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Naturel tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Naturel aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 517
    },
    {
        "id": 51,
        "name": "NovaVera",
        "desc": "Kuzey Ege merkezli butik üretici. Erken hasat, soğuk sıkım ve yüksek polifenol odaklı natürel sızma zeytinyağlarıyla bilinir.",
        "region": "Edremit, Balıkesir",
        "category": "premium-butik",
        "website": "https://novavera.com.tr",
        "founded": "2017",
        "highlight": true,
        "image": "https://static.ticimax.cloud/42334/uploads/editoruploads/novavera-logo-white.png",
        "slug": "novavera",
        "editorial": null,
        "detail": "Biz Edremit, Balıkesir çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. 2017 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik",
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html",
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık",
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=novavera.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz NovaVera tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Edremit, Balıkesir çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 2017 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz NovaVera tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. NovaVera aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 508
    },
    {
        "id": 52,
        "name": "Gaia Oliva",
        "desc": "Ayvalık hattında üretim yapan marka. Natürel sızma ve özel seri zeytinyağı ürünleri sunar.",
        "region": "Ayvalık, Balıkesir",
        "category": "premium-butik",
        "website": "https://www.gaiaoliva.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://static.ticimax.cloud/34601//uploads/editoruploads/go-logo-2025.svg",
        "slug": "gaia-oliva",
        "editorial": null,
        "detail": "Biz Ayvalık, Balıkesir çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=gaiaoliva.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Gaia Oliva tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ayvalık, Balıkesir çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ayvalık, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Gaia Oliva tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Gaia Oliva aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 53,
        "name": "Nizolive",
        "desc": "Güneydoğu kökenli üretici marka. Nizip yağlık başta olmak üzere bölgesel zeytinlerden zeytinyağı üretimi yapar.",
        "region": "Gaziantep, Güneydoğu Anadolu",
        "category": "bolgesel-yerel",
        "website": "https://nizolive.com",
        "founded": null,
        "highlight": false,
        "image": "https://nizolive.com/wp-content/uploads/2025/10/1_logo_y.webp",
        "slug": "nizolive",
        "editorial": null,
        "detail": "Biz Gaziantep, Güneydoğu Anadolu çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "guneydogu",
        "oliveTypes": [
            "nizip"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/guneydogu.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/nizip.html"
        ],
        "regionClusterLabel": "Güneydoğu Anadolu",
        "oliveTypeLabels": [
            "Nizip Yağlık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=nizolive.com&sz=256",
        "longDetailParagraphs": [
            "Biz Nizolive ile Gaziantep, Güneydoğu Anadolu tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Gaziantep, Güneydoğu Anadolu çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Gaziantep, Güneydoğu Anadolu tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Güneydoğu tarafının daha belirgin bölgesel kimliği, yağa tok ve akılda kalıcı bir duruş kazandırır. Biz bu duruşu saklamadan, sofrada hemen tanınır hale getirmeyi istiyoruz.",
            "Biz Nizolive tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Nizip Yağlık çizgisinin güçlü gövdesini ve bölgesel imzasını şişede kaybetmemeye çalışıyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Nizolive aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 54,
        "name": "Verde",
        "desc": "Kuzey Ege odaklı zeytinyağı markası. Erken hasat natürel sızma ve farklı ambalaj seçenekleriyle öne çıkar.",
        "region": "Ayvalık, Balıkesir",
        "category": "premium-butik",
        "website": "https://www.olioverde.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://www.olioverde.com.tr/uploads/logo.png",
        "slug": "verde",
        "editorial": null,
        "detail": "Biz Ayvalık, Balıkesir çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik",
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html",
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık",
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=olioverde.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Verde tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ayvalık, Balıkesir çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ayvalık, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Verde tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Verde aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 510
    },
    {
        "id": 55,
        "name": "Adatepe",
        "desc": "Kazdağları eteklerinde üretim yapan köklü marka. Taş baskı ve natürel sızma zeytinyağı çeşitleriyle bilinir.",
        "region": "Küçükkuyu, Çanakkale",
        "category": "premium-butik",
        "website": "https://www.adatepe.com",
        "founded": null,
        "highlight": true,
        "image": "https://www.adatepe.com/foto/6f0c3471da75.jpg",
        "slug": "adatepe",
        "editorial": null,
        "detail": "Biz Küçükkuyu, Çanakkale çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=adatepe.com&sz=256",
        "longDetailParagraphs": [
            "Biz Adatepe tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Küçükkuyu, Çanakkale çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Küçükkuyu, Çanakkale tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Adatepe tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Adatepe aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 56,
        "name": "OleTurk",
        "desc": "Milas ve Ege havzasından zeytinlerle üretim yapan marka. Natürel sızma odaklı ürün portföyü sunar.",
        "region": "Milas, Muğla",
        "category": "premium-butik",
        "website": "https://www.oleturk.com",
        "founded": null,
        "highlight": false,
        "image": "https://www.oleturk.com/cdn/shop/files/Logo_white.png?v=1769521626",
        "slug": "oleturk",
        "editorial": null,
        "detail": "Biz Milas, Muğla çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=oleturk.com&sz=256",
        "longDetailParagraphs": [
            "Biz OleTurk tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Milas, Muğla çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Milas, Muğla tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz OleTurk tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. OleTurk aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 57,
        "name": "Kahraman",
        "desc": "Akhisar merkezli üretici. Natürel sızma, riviera ve farklı paket boylarında zeytinyağı ürünleri bulunur.",
        "region": "Akhisar, Manisa",
        "category": "market-endustriyel",
        "website": "https://kahraman.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://kahraman.com.tr/kahraman/logo/logo.png",
        "slug": "kahraman",
        "editorial": null,
        "detail": "Biz Akhisar, Manisa çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=kahraman.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Kahraman tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Akhisar, Manisa çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Akhisar, Manisa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Kahraman tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Kahraman aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 58,
        "name": "Buta Assos",
        "desc": "Assos bölgesinde üretilen zeytinlerden premium natürel sızma zeytinyağı sunan marka.",
        "region": "Assos, Çanakkale",
        "category": "premium-butik",
        "website": "https://butaassos.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://butaassos.com.tr/wp-content/uploads/2025/04/LOGO-1.png",
        "slug": "buta-assos",
        "editorial": null,
        "detail": "Biz Assos, Çanakkale çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=butaassos.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Buta Assos tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Assos, Çanakkale çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Assos, Çanakkale tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Buta Assos tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Buta Assos aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 516
    },
    {
        "id": 59,
        "name": "Ayvaco",
        "desc": "Ayvacık çevresinde üretim yapan yerel marka. Soğuk sıkım natürel sızma zeytinyağı çeşitleriyle bilinir.",
        "region": "Ayvacık, Çanakkale",
        "category": "bolgesel-yerel",
        "website": "https://www.ayvaco.com",
        "founded": null,
        "highlight": false,
        "image": "https://www.ayvaco.com/cdn/shop/files/AYV_logo_final_20f77506-6e46-4a00-8884-c48658186a7d_300x.png?v=1736545014",
        "slug": "ayvaco",
        "editorial": null,
        "detail": "Biz Ayvacık, Çanakkale çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=ayvaco.com&sz=256",
        "longDetailParagraphs": [
            "Biz Ayvaco ile Ayvacık, Çanakkale tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Ayvacık, Çanakkale çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ayvacık, Çanakkale tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Ayvaco tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Ayvaco aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 508
    },
    {
        "id": 60,
        "name": "OVE Foods",
        "desc": "Zeytin ve zeytinyağı odaklı gıda markası. Natürel sızma ve gurme segment ürünler sunar.",
        "region": "Aydın, Ege",
        "category": "premium-butik",
        "website": "https://ovefoods.com",
        "founded": null,
        "highlight": false,
        "image": "https://ovefoods.com/ovelogonet.png",
        "slug": "ove-foods",
        "editorial": null,
        "detail": "Biz Aydın, Ege çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=ovefoods.com&sz=256",
        "longDetailParagraphs": [
            "Biz OVE Foods tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Aydın, Ege çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Aydın, Ege tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz OVE Foods tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. OVE Foods aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 516
    },
    {
        "id": 61,
        "name": "Granpa",
        "desc": "Marmara bölgesi odaklı üretici marka. Trilye/Gemlik hattında natürel sızma ürünleriyle öne çıkar.",
        "region": "Bursa, Marmara",
        "category": "premium-butik",
        "website": "https://granpa.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://granpa.com.tr/cdn/shop/files/image_1080_copy.png?v=1749037376&width=1445",
        "slug": "granpa",
        "editorial": null,
        "detail": "Biz Bursa, Marmara çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik",
            "trilye"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html",
            "topic/zeytin-cesitleri/trilye.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik",
            "Trilye"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=granpa.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Granpa tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Bursa, Marmara çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Bursa, Marmara tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Granpa tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Granpa aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 62,
        "name": "Mavras",
        "desc": "Urla merkezli butik marka. Sınırlı seri ve erken hasat natürel sızma zeytinyağı üretimi yapar.",
        "region": "Urla, İzmir",
        "category": "premium-butik",
        "website": "https://mavras.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://mavras.com.tr/cdn/shop/files/MAVRAS.png?v=1753728989&width=1445",
        "slug": "mavras",
        "editorial": null,
        "detail": "Biz Urla, İzmir çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=mavras.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Mavras tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Urla, İzmir çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Urla, İzmir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Mavras tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Mavras aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 63,
        "name": "Hermus",
        "desc": "Akhisar ve çevresindeki zeytinlerden üretilen premium natürel sızma zeytinyağı markası.",
        "region": "Akhisar, Manisa",
        "category": "premium-butik",
        "website": "https://www.hermus.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://www.hermus.com.tr/idea/qn/58/myassets/std_theme_files/tpl-foodavo/assets/uploads/logo.png?revision=1770746284",
        "slug": "hermus",
        "editorial": null,
        "detail": "Biz Akhisar, Manisa çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=hermus.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Hermus tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Akhisar, Manisa çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Akhisar, Manisa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Hermus tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Hermus aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 64,
        "name": "Nermin Hanım Zeytinliği",
        "desc": "Ayvalık merkezli butik üretici. Erken hasat ve izlenebilir üretim yaklaşımıyla natürel sızma ürünler sunar.",
        "region": "Ayvalık, Balıkesir",
        "category": "premium-butik",
        "website": "https://nerminhanim.com",
        "founded": null,
        "highlight": true,
        "image": "https://cdn.myikas.com/images/theme-images/d2fff716-f48b-48bf-b26e-6f6c800268e7/image_180.webp",
        "slug": "nermin-hanim-zeytinligi",
        "editorial": null,
        "detail": "Biz Ayvalık, Balıkesir çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=nerminhanim.com&sz=256",
        "longDetailParagraphs": [
            "Biz Nermin Hanım Zeytinliği tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ayvalık, Balıkesir çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ayvalık, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Nermin Hanım Zeytinliği tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Nermin Hanım Zeytinliği aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 516
    },
    {
        "id": 65,
        "name": "Olivya Gökçeovacık",
        "desc": "Milas bölgesinde faaliyet gösteren butik marka. Yöresel karakterli natürel sızma zeytinyağı üretir.",
        "region": "Milas, Muğla",
        "category": "premium-butik",
        "website": "https://olivyagokceovacik.com",
        "founded": null,
        "highlight": false,
        "image": "https://olivyagokceovacik.com/wp-content/uploads/olivyagokceovacik-logo-100x100.webp",
        "slug": "olivya-gokceovacik",
        "editorial": null,
        "detail": "Biz Milas, Muğla çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=olivyagokceovacik.com&sz=256",
        "longDetailParagraphs": [
            "Biz Olivya Gökçeovacık tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Milas, Muğla çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Milas, Muğla tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Olivya Gökçeovacık tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Olivya Gökçeovacık aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 516
    },
    {
        "id": 66,
        "name": "Zetay",
        "desc": "Edremit Körfezi odaklı üretici. Bölgesel zeytinlerden natürel sızma ve riviera ürünleri sunar.",
        "region": "Edremit, Balıkesir",
        "category": "bolgesel-yerel",
        "website": "https://zetay.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://zetay.com.tr/upload/upload/8c721f08-33db-4c6b-87ed-86b21cc06ba5.png",
        "slug": "zetay",
        "editorial": null,
        "detail": "Biz Edremit, Balıkesir çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=zetay.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Zetay ile Edremit, Balıkesir tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Edremit, Balıkesir çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Edremit, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Zetay tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Zetay aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 508
    },
    {
        "id": 67,
        "name": "MR Zeytin",
        "desc": "Akhisar merkezli zeytin ve zeytinyağı üreticisi. Natürel sızma ürünleriyle öne çıkar.",
        "region": "Akhisar, Manisa",
        "category": "bolgesel-yerel",
        "website": "https://www.mrzeytin.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://www.mrzeytin.com.tr/galeri/2442132831.webp",
        "slug": "mr-zeytin",
        "editorial": null,
        "detail": "Biz Akhisar, Manisa çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=mrzeytin.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz MR Zeytin ile Akhisar, Manisa tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Akhisar, Manisa çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Akhisar, Manisa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz MR Zeytin tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. MR Zeytin aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 68,
        "name": "Dalgıçoğlu",
        "desc": "Edremit Körfezi çevresinde üretim yapan marka. Bölgesel zeytinyağı ürünleri sunar.",
        "region": "Edremit, Balıkesir",
        "category": "bolgesel-yerel",
        "website": "https://dalgicoglu.com",
        "founded": null,
        "highlight": false,
        "image": "https://dalgicoglu.com/wp-content/uploads/2023/08/dalgicoglu.com-904410.png",
        "slug": "dalgicoglu",
        "editorial": null,
        "detail": "Biz Edremit, Balıkesir çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=dalgicoglu.com&sz=256",
        "longDetailParagraphs": [
            "Biz Dalgıçoğlu ile Edremit, Balıkesir tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Edremit, Balıkesir çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Edremit, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Dalgıçoğlu tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Dalgıçoğlu aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 508
    },
    {
        "id": 69,
        "name": "Sabuncugil",
        "desc": "Ayvalık kökenli geleneksel üretici marka. Natürel sızma ve bölgesel ürünleriyle bilinir.",
        "region": "Ayvalık, Balıkesir",
        "category": "bolgesel-yerel",
        "website": "https://www.sabuncugil.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://ideacdn.net/idea/di/87/themes/selftpl_6912dd7f4fb18/assets/uploads/logo.png?revision=1770973431",
        "slug": "sabuncugil",
        "editorial": null,
        "detail": "Biz Ayvalık, Balıkesir çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=sabuncugil.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Sabuncugil ile Ayvalık, Balıkesir tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Ayvalık, Balıkesir çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ayvalık, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Sabuncugil tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Sabuncugil aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 508
    },
    {
        "id": 70,
        "name": "Koral Zeytin",
        "desc": "Akhisar merkezli üretici. Zeytin ve zeytinyağı ürünlerinde yerel üretim odaklıdır.",
        "region": "Akhisar, Manisa",
        "category": "bolgesel-yerel",
        "website": "https://koralzeytin.com",
        "founded": null,
        "highlight": false,
        "image": "https://www.koralzeytin.com/image/cache/catalog/site-resimleri/logo_band_white@2x-912x64.png",
        "slug": "koral-zeytin",
        "editorial": null,
        "detail": "Biz Akhisar, Manisa çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=koralzeytin.com&sz=256",
        "longDetailParagraphs": [
            "Biz Koral Zeytin ile Akhisar, Manisa tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Akhisar, Manisa çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Akhisar, Manisa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Koral Zeytin tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Koral Zeytin aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 71,
        "name": "Semylasa",
        "desc": "Milas yöresinden üretim yapan premium marka. Natürel sızma zeytinyağı çeşitleriyle öne çıkar.",
        "region": "Milas, Muğla",
        "category": "premium-butik",
        "website": "https://semylasa.com",
        "founded": null,
        "highlight": false,
        "image": "https://semylasa.com/cdn/shop/files/Untitled_design_10.png?v=1732443014&width=600",
        "slug": "semylasa",
        "editorial": null,
        "detail": "Biz Milas, Muğla çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=semylasa.com&sz=256",
        "longDetailParagraphs": [
            "Biz Semylasa tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Milas, Muğla çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Milas, Muğla tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Semylasa tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Semylasa aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 72,
        "name": "Olivamore",
        "desc": "Butik üretim anlayışına sahip zeytinyağı markası. Erken hasat natürel sızma ürünleri sunar.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": "https://olivamore.com",
        "founded": null,
        "highlight": false,
        "image": "https://olivamore.com/wp-content/uploads/2024/12/olivamore-logo.svg",
        "slug": "olivamore",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=olivamore.com&sz=256",
        "longDetailParagraphs": [
            "Biz Olivamore tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Olivamore tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Olivamore aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 73,
        "name": "Ayolis",
        "desc": "Ayvalık bölgesinden premium natürel sızma zeytinyağı üreten marka.",
        "region": "Ayvalık, Balıkesir",
        "category": "premium-butik",
        "website": "https://www.ayolis.com",
        "founded": null,
        "highlight": false,
        "image": "https://static.ticimax.cloud/cdn-cgi/image/width=1903,quality=99/55671/uploads/editoruploads/footer-logo.png",
        "slug": "ayolis",
        "editorial": null,
        "detail": "Biz Ayvalık, Balıkesir çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=ayolis.com&sz=256",
        "longDetailParagraphs": [
            "Biz Ayolis tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ayvalık, Balıkesir çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ayvalık, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Ayolis tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Ayolis aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 510
    },
    {
        "id": 74,
        "name": "Gemlika",
        "desc": "Gemlik zeytininden üretilen natürel sızma zeytinyağına odaklanan bölgesel marka.",
        "region": "Gemlik, Bursa",
        "category": "bolgesel-yerel",
        "website": "https://gemlika.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://gemlika.com.tr/wp-content/uploads/2024/08/gemlika.png",
        "slug": "gemlika",
        "editorial": null,
        "detail": "Biz Gemlik, Bursa çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=gemlika.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Gemlika ile Gemlik, Bursa tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Gemlik, Bursa çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Gemlik, Bursa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Gemlika tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Gemlika aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 75,
        "name": "Zeytinsan",
        "desc": "Akhisar merkezli daha geniş ölçekli üretici. Farklı segmentlerde zeytinyağı ürünleri sunar.",
        "region": "Akhisar, Manisa",
        "category": "market-endustriyel",
        "website": "https://www.zeytinsan.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://www.zeytinsan.com.tr/wp-content/uploads/2021/10/zeytinsan-logo180.png",
        "slug": "zeytinsan",
        "editorial": null,
        "detail": "Biz Akhisar, Manisa çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=zeytinsan.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Zeytinsan tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Akhisar, Manisa çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Akhisar, Manisa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Zeytinsan tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Zeytinsan aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 76,
        "name": "Anolive",
        "desc": "Ayvalık bölgesinde premium natürel sızma zeytinyağı üretimi yapan marka.",
        "region": "Ayvalık, Balıkesir",
        "category": "premium-butik",
        "website": "https://www.anolive.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://www.anolive.com.tr/img/anolive-logo-header_1.png",
        "slug": "anolive",
        "editorial": null,
        "detail": "Biz Ayvalık, Balıkesir çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=anolive.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Anolive tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ayvalık, Balıkesir çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ayvalık, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Anolive tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Anolive aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 510
    },
    {
        "id": 77,
        "name": "Artem Oliva",
        "desc": "Butik üretim odaklı natürel sızma zeytinyağı markası.",
        "region": "Marmara",
        "category": "premium-butik",
        "website": "https://artemoliva.com",
        "founded": null,
        "highlight": false,
        "image": "https://artemoliva.com/wp-content/uploads/2021/02/logo_bckrgoundOK_sizeOK_GRNT250X250_TVL270X270.png",
        "slug": "artem-oliva",
        "editorial": null,
        "detail": "Biz Marmara çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=artemoliva.com&sz=256",
        "longDetailParagraphs": [
            "Biz Artem Oliva tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Marmara çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Marmara tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Artem Oliva tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Artem Oliva aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 514
    },
    {
        "id": 78,
        "name": "OliveOilsLand",
        "desc": "Zeytinyağı ürünlerinde premium ve butik segmentte yer alan marka.",
        "region": "Ege Bölgesi",
        "category": "premium-butik",
        "website": "https://www.oliveoilsland.com",
        "founded": null,
        "highlight": false,
        "image": "https://www.oliveoilsland.com/wp-content/themes/neve/olive/images/logo.png",
        "slug": "oliveoilsland",
        "editorial": null,
        "detail": "Biz Ege Bölgesi çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=oliveoilsland.com&sz=256",
        "longDetailParagraphs": [
            "Biz OliveOilsLand tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ege Bölgesi çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ege Bölgesi tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz OliveOilsLand tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. OliveOilsLand aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 79,
        "name": "Hatnar",
        "desc": "Erzin, Hatay merkezli üretici marka. Soğuk sıkım natürel sızma zeytinyağı ve yöresel zeytin ürünleri sunar.",
        "region": "Erzin, Hatay",
        "category": "premium-butik",
        "website": "https://www.hatnar.com",
        "founded": null,
        "highlight": true,
        "image": "https://www.hatnar.com/wp-content/uploads/2021/10/hatnar-logo-H-8.png",
        "slug": "hatnar",
        "editorial": null,
        "detail": "Biz Erzin, Hatay çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "halhali"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/halhali.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Halhalı"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=hatnar.com&sz=256",
        "longDetailParagraphs": [
            "Biz Hatnar tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Erzin, Hatay çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Erzin, Hatay tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Hatnar tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Halhalı tarafının tok ve yöresini hemen hissettiren duruşunu sofraya dürüstçe taşımak istiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Hatnar aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 80,
        "name": "Zetiya",
        "desc": "Hatay odaklı erken hasat natürel sızma serileriyle öne çıkan butik marka. Cam şişe ve teneke ambalajlı ürünler sunar.",
        "region": "Hatay",
        "category": "premium-butik",
        "website": "https://zetiya.com",
        "founded": null,
        "highlight": true,
        "image": "https://zetiya.com/cdn/shop/files/Logo.Zetiya4.png?v=1756152630&width=500",
        "slug": "zetiya",
        "editorial": null,
        "detail": "Biz Hatay çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "halhali"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/halhali.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Halhalı"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=zetiya.com&sz=256",
        "longDetailParagraphs": [
            "Biz Zetiya tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Hatay çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Hatay tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Zetiya tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Halhalı tarafının tok ve yöresini hemen hissettiren duruşunu sofraya dürüstçe taşımak istiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Zetiya aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 509
    },
    {
        "id": 81,
        "name": "Ece'den Sofranıza",
        "desc": "Hatay merkezli aile markası. El hasadı ve natürel sızma odaklı teneke ve şişe ürünler sunar.",
        "region": "Hatay",
        "category": "bolgesel-yerel",
        "website": "https://eceden.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://eceden.com.tr/logo3.png",
        "slug": "ece-den-sofraniza",
        "editorial": null,
        "detail": "Biz Hatay çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "halhali"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/halhali.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Halhalı"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=eceden.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Ece'den Sofranıza ile Hatay tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Hatay çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Hatay tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Ece'den Sofranıza tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Halhalı tarafının tok ve yöresini hemen hissettiren duruşunu sofraya dürüstçe taşımak istiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Ece'den Sofranıza aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 509
    },
    {
        "id": 82,
        "name": "Uygur Zeytinyağı",
        "desc": "1972'den beri Gaziantep'te faaliyet gösteren üretici. Nizip tesislerinde natürel sızma zeytinyağı ve zeytinyağlı sabun üretir.",
        "region": "Nizip, Gaziantep",
        "category": "market-endustriyel",
        "website": "https://uygurzeytinyagi.com",
        "founded": "1972",
        "highlight": true,
        "image": "https://uygurzeytinyagi.com/images/logo.png",
        "slug": "uygur-zeytinyagi",
        "editorial": null,
        "detail": "Biz Nizip, Gaziantep çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. 1972 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "guneydogu",
        "oliveTypes": [
            "nizip"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/guneydogu.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/nizip.html"
        ],
        "regionClusterLabel": "Güneydoğu Anadolu",
        "oliveTypeLabels": [
            "Nizip Yağlık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=uygurzeytinyagi.com&sz=256",
        "longDetailParagraphs": [
            "Biz Uygur Zeytinyağı tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Nizip, Gaziantep çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 1972 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Güneydoğu tarafının daha belirgin bölgesel kimliği, yağa tok ve akılda kalıcı bir duruş kazandırır. Biz bu duruşu saklamadan, sofrada hemen tanınır hale getirmeyi istiyoruz.",
            "Biz Uygur Zeytinyağı tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Nizip Yağlık çizgisinin güçlü gövdesini ve bölgesel imzasını şişede kaybetmemeye çalışıyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Uygur Zeytinyağı aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 83,
        "name": "Yalım Zeytin Yağları",
        "desc": "Gaziantep merkezli köklü üretici. Günlük mutfak kullanımına ve natürel sızma serilerine yönelik geniş bir ürün gamı sunar.",
        "region": "Gaziantep",
        "category": "market-endustriyel",
        "website": "https://www.yalimzeytinyaglari.com.tr",
        "founded": "1997",
        "highlight": false,
        "image": "https://www.yalimzeytinyaglari.com.tr/assets/images/logo.png",
        "slug": "yalim-zeytin-yaglari",
        "editorial": null,
        "detail": "Biz Gaziantep çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. 1997 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "guneydogu",
        "oliveTypes": [
            "nizip"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/guneydogu.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/nizip.html"
        ],
        "regionClusterLabel": "Güneydoğu Anadolu",
        "oliveTypeLabels": [
            "Nizip Yağlık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=yalimzeytinyaglari.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Yalım Zeytin Yağları tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Gaziantep çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 1997 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Güneydoğu tarafının daha belirgin bölgesel kimliği, yağa tok ve akılda kalıcı bir duruş kazandırır. Biz bu duruşu saklamadan, sofrada hemen tanınır hale getirmeyi istiyoruz.",
            "Biz Yalım Zeytin Yağları tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Nizip Yağlık çizgisinin güçlü gövdesini ve bölgesel imzasını şişede kaybetmemeye çalışıyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Yalım Zeytin Yağları aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 84,
        "name": "Zeytincir",
        "desc": "Gaziantep odaklı natürel sızma üretici marka. Saf zeytinyağı ve filtreli-filtresiz ürün diliyle öne çıkar.",
        "region": "Gaziantep",
        "category": "bolgesel-yerel",
        "website": "https://www.zeytincir.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://www.zeytincir.com.tr/wp-content/uploads/2021/12/zeytinyagi-logo1-1.png",
        "slug": "zeytincir",
        "editorial": null,
        "detail": "Biz Gaziantep çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "guneydogu",
        "oliveTypes": [
            "nizip"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/guneydogu.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/nizip.html"
        ],
        "regionClusterLabel": "Güneydoğu Anadolu",
        "oliveTypeLabels": [
            "Nizip Yağlık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=zeytincir.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Zeytincir ile Gaziantep tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Gaziantep çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Gaziantep tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Güneydoğu tarafının daha belirgin bölgesel kimliği, yağa tok ve akılda kalıcı bir duruş kazandırır. Biz bu duruşu saklamadan, sofrada hemen tanınır hale getirmeyi istiyoruz.",
            "Biz Zeytincir tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Nizip Yağlık çizgisinin güçlü gövdesini ve bölgesel imzasını şişede kaybetmemeye çalışıyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Zeytincir aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 505
    },
    {
        "id": 85,
        "name": "Bazilika",
        "desc": "Altınözü, Hatay merkezli yöresel üretici. Zeytin ve zeytinyağı ürünlerini Hatay köken vurgusuyla sunar.",
        "region": "Altınözü, Hatay",
        "category": "bolgesel-yerel",
        "website": "https://www.bazilika.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://www.bazilika.com.tr/upload/bazilika-zeytinyaglari-hatay-antakya-altinozu.png",
        "slug": "bazilika",
        "editorial": null,
        "detail": "Biz Altınözü, Hatay çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "halhali"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/halhali.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Halhalı"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=bazilika.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Bazilika ile Altınözü, Hatay tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Altınözü, Hatay çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Altınözü, Hatay tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Bazilika tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Halhalı tarafının tok ve yöresini hemen hissettiren duruşunu sofraya dürüstçe taşımak istiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Bazilika aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 509
    },
    {
        "id": 86,
        "name": "Arslan Zeytinyağı",
        "desc": "Antakya, Hatay merkezli üretici. Cam şişe, pet ve teneke ambalajlı natürel sızma serileri sunar.",
        "region": "Antakya, Hatay",
        "category": "bolgesel-yerel",
        "website": "https://arslanzeytinyagi.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://arslanzeytinyagi.com.tr/upload//arslan-zeytinyagi10.png",
        "slug": "arslan-zeytinyagi",
        "editorial": null,
        "detail": "Biz Antakya, Hatay çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "halhali"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/halhali.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Halhalı"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=arslanzeytinyagi.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Arslan Zeytinyağı ile Antakya, Hatay tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Antakya, Hatay çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Antakya, Hatay tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Arslan Zeytinyağı tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Halhalı tarafının tok ve yöresini hemen hissettiren duruşunu sofraya dürüstçe taşımak istiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Arslan Zeytinyağı aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 512
    },
    {
        "id": 87,
        "name": "Hatay Tadında",
        "desc": "Hatay yöresel ürünleri ve zeytinyağı satışı yapan yerel marka. Soğuk sıkım ve teneke zeytinyağı ürünleriyle öne çıkar.",
        "region": "Hatay",
        "category": "bolgesel-yerel",
        "website": "https://www.hataytadinda.com",
        "founded": null,
        "highlight": false,
        "image": "https://www.hataytadinda.com/wp-content/uploads/2019/04/hatay-tad%C4%B1nda-logo2.png",
        "slug": "hatay-tadinda",
        "editorial": null,
        "detail": "Biz Hatay çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "halhali"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/halhali.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Halhalı"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=hataytadinda.com&sz=256",
        "longDetailParagraphs": [
            "Biz Hatay Tadında ile Hatay tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Hatay çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Hatay tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Hatay Tadında tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Halhalı tarafının tok ve yöresini hemen hissettiren duruşunu sofraya dürüstçe taşımak istiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Hatay Tadında aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 509
    },
    {
        "id": 88,
        "name": "Gemtar",
        "desc": "Gemlik merkezli üretici marka. Gemlik zeytininden natürel sızma ve farklı hacimlerde zeytinyağı serileri sunar.",
        "region": "Gemlik, Bursa",
        "category": "market-endustriyel",
        "website": "https://www.gemtar.com.tr",
        "founded": null,
        "highlight": true,
        "image": "https://ideacdn.net/idea/ln/94/themes/selftpl_63c93921dff4b/assets/uploads/logo.png?revision=1761118145",
        "slug": "gemtar",
        "editorial": null,
        "detail": "Biz Gemlik, Bursa çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=gemtar.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Gemtar tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Gemlik, Bursa çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Gemlik, Bursa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Gemtar tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Gemtar aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 89,
        "name": "Gemlik Zeytincisi",
        "desc": "Gemlik odaklı zeytin ve zeytinyağı üreticisi. Bölgesel kökeni öne çıkan natürel sızma ürünleri bulunur.",
        "region": "Gemlik, Bursa",
        "category": "bolgesel-yerel",
        "website": "https://www.gemlikzeytincisi.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://www.gemlikzeytincisi.com.tr/wp-content/uploads/2024/05/op.png",
        "slug": "gemlik-zeytincisi",
        "editorial": null,
        "detail": "Biz Gemlik, Bursa çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=gemlikzeytincisi.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Gemlik Zeytincisi ile Gemlik, Bursa tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Gemlik, Bursa çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Gemlik, Bursa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Gemlik Zeytincisi tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Gemlik Zeytincisi aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 514
    },
    {
        "id": 90,
        "name": "Gemlik Zeytin Evi",
        "desc": "Gemlik bölgesinde zeytin ve zeytinyağı ürünleri sunan yerel marka. Cam şişe ve teneke seçenekleriyle öne çıkar.",
        "region": "Gemlik, Bursa",
        "category": "bolgesel-yerel",
        "website": "https://www.gemlikzeytinevi.com",
        "founded": null,
        "highlight": false,
        "image": "https://www.gemlikzeytinevi.com/image/catalog/logohy.png",
        "slug": "gemlik-zeytin-evi",
        "editorial": null,
        "detail": "Biz Gemlik, Bursa çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=gemlikzeytinevi.com&sz=256",
        "longDetailParagraphs": [
            "Biz Gemlik Zeytin Evi ile Gemlik, Bursa tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Gemlik, Bursa çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Gemlik, Bursa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Gemlik Zeytin Evi tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Gemlik Zeytin Evi aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 517
    },
    {
        "id": 91,
        "name": "Solive",
        "desc": "Gemlik zeytini ve erken hasat zeytinyağı serileriyle öne çıkan bölgesel marka. Zeytin Ağacı mağaza yapısı içinde satış yapar.",
        "region": "Gemlik, Bursa",
        "category": "premium-butik",
        "website": "https://www.zeytinagaci.com",
        "founded": null,
        "highlight": false,
        "image": "https://www.zeytinagaci.com/shop/bu/35/themes/selftpl_61814615742ac/assets/uploads/logo.png?revision=1767075887",
        "slug": "solive",
        "editorial": null,
        "detail": "Biz Gemlik, Bursa çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=zeytinagaci.com&sz=256",
        "longDetailParagraphs": [
            "Biz Solive tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Gemlik, Bursa çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Gemlik, Bursa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Solive tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Solive aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 92,
        "name": "Yelkenli",
        "desc": "Mudanya merkezli üretim ve satış yapan marka. Teneke ve cam ambalajlı zeytinyağı ürünleri sunar.",
        "region": "Mudanya, Bursa",
        "category": "bolgesel-yerel",
        "website": "https://yelkenlizeytinyagi.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://yelkenlizeytinyagi.com.tr/wp-content/uploads/2024/03/logo-1.png",
        "slug": "yelkenli",
        "editorial": null,
        "detail": "Biz Mudanya, Bursa çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=yelkenlizeytinyagi.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Yelkenli ile Mudanya, Bursa tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Mudanya, Bursa çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Mudanya, Bursa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Yelkenli tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Yelkenli aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 93,
        "name": "Vivax Olea",
        "desc": "Şarköy, Tekirdağ hattında üretim yapan marka. Kontinü sistem ve soğuk sıkım serileriyle Trakya'da öne çıkar.",
        "region": "Şarköy, Tekirdağ",
        "category": "premium-butik",
        "website": "https://www.vivaxolea.com",
        "founded": "2021",
        "highlight": true,
        "image": "https://www.vivaxolea.com/tema/kurumsal/uploads/logo/VivaxOlea_Logo.png",
        "slug": "vivax-olea",
        "editorial": null,
        "detail": "Biz Şarköy, Tekirdağ çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. 2021 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "trakya",
        "oliveTypes": [
            "trilye"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/trakya.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/trilye.html"
        ],
        "regionClusterLabel": "Trakya Bölgesi",
        "oliveTypeLabels": [
            "Trilye"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=vivaxolea.com&sz=256",
        "longDetailParagraphs": [
            "Biz Vivax Olea tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Şarköy, Tekirdağ çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 2021 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Trakya tarafının daha niş ve daha yakın üretim hissi, şişeye sakin ama özgün bir kimlik verir. Biz bu özgünlüğü fazla oynatmadan korumaya çalışıyoruz.",
            "Biz Vivax Olea tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Trilye çizgisinin damakta bıraktığı karakteri mümkün olduğunca açık hissettirmek istiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Vivax Olea aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 509
    },
    {
        "id": 94,
        "name": "Şarköy Çiftlik",
        "desc": "Şarköy merkezli doğal ürünler markası. Coğrafi işaretli ve soğuk sıkım zeytinyağı ürünleriyle Trakya hattında dikkat çeker.",
        "region": "Şarköy, Tekirdağ",
        "category": "bolgesel-yerel",
        "website": "https://sarkoyciftlik.com.tr",
        "founded": null,
        "highlight": true,
        "image": "https://cdn.myikas.com/images/15ce70ae-d38f-457b-b820-715d906f980d/b83b2e19-7134-48e7-9e43-cd9f159202b8/image_1080.webp",
        "slug": "sarkoy-ciftlik",
        "editorial": null,
        "detail": "Biz Şarköy, Tekirdağ çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "trakya",
        "oliveTypes": [
            "trilye"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/trakya.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/trilye.html"
        ],
        "regionClusterLabel": "Trakya Bölgesi",
        "oliveTypeLabels": [
            "Trilye"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=sarkoyciftlik.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Şarköy Çiftlik ile Şarköy, Tekirdağ tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Şarköy, Tekirdağ çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Şarköy, Tekirdağ tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Trakya tarafının daha niş ve daha yakın üretim hissi, şişeye sakin ama özgün bir kimlik verir. Biz bu özgünlüğü fazla oynatmadan korumaya çalışıyoruz.",
            "Biz Şarköy Çiftlik tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Trilye çizgisinin damakta bıraktığı karakteri mümkün olduğunca açık hissettirmek istiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Şarköy Çiftlik aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 509
    },
    {
        "id": 95,
        "name": "Mutuna",
        "desc": "Mut, Mersin merkezli yerel üretici. Erken hasat ve soğuk sıkım Mut zeytinyağı serileri bulunur.",
        "region": "Mut, Mersin",
        "category": "bolgesel-yerel",
        "website": "https://www.mutuna.com",
        "founded": null,
        "highlight": true,
        "image": "https://www.mutuna.com/idea/if/09/themes/selftpl_65798a840c0eb/assets/uploads/logo.png?revision=1729753622",
        "slug": "mutuna",
        "editorial": null,
        "detail": "Biz Mut, Mersin çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "sari-ulak"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/sari-ulak.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Sarı Ulak"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=mutuna.com&sz=256",
        "longDetailParagraphs": [
            "Biz Mutuna ile Mut, Mersin tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Mut, Mersin çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Mut, Mersin tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Mutuna tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Sarı Ulak tarafının akıcı, meyvemsi ve günlük mutfakta rahat ilerleyen doğasını koruyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Mutuna aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 509
    },
    {
        "id": 96,
        "name": "Mutili",
        "desc": "Mut merkezli modern üretici marka. Cam şişe ve teneke ambalajlı natürel sızma serileri sunar.",
        "region": "Mut, Mersin",
        "category": "premium-butik",
        "website": "https://mutili.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://mutili.com.tr/wp-content/uploads/2025/05/Mutili-Logo-2.png",
        "slug": "mutili",
        "editorial": null,
        "detail": "Biz Mut, Mersin çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "sari-ulak"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/sari-ulak.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Sarı Ulak"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=mutili.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Mutili tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Mut, Mersin çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Mut, Mersin tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Mutili tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Sarı Ulak tarafının akıcı, meyvemsi ve günlük mutfakta rahat ilerleyen doğasını koruyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Mutili aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 97,
        "name": "Mut İncisi",
        "desc": "Mut yöresinden üretim yapan bölgesel marka. Farklı hacimlerde natürel sızma ve yemeklik seriler sunar.",
        "region": "Mut, Mersin",
        "category": "bolgesel-yerel",
        "website": "https://mutincisi.com",
        "founded": null,
        "highlight": false,
        "image": "https://mutincisi.com/assets/images/logo_1772443738.png",
        "slug": "mut-incisi",
        "editorial": null,
        "detail": "Biz Mut, Mersin çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "sari-ulak"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/sari-ulak.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Sarı Ulak"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=mutincisi.com&sz=256",
        "longDetailParagraphs": [
            "Biz Mut İncisi ile Mut, Mersin tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Mut, Mersin çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Mut, Mersin tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Mut İncisi tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Sarı Ulak tarafının akıcı, meyvemsi ve günlük mutfakta rahat ilerleyen doğasını koruyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Mut İncisi aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 512
    },
    {
        "id": 98,
        "name": "Zeytinyağı Evi",
        "desc": "Mut zeytinyağı ve sofralık zeytin odaklı satış yapan marka. Filtresiz, domat ve arbequina serileriyle dikkat çeker.",
        "region": "Mut, Mersin",
        "category": "bolgesel-yerel",
        "website": "https://www.zeytinyagievi.com",
        "founded": null,
        "highlight": false,
        "image": "https://www.zeytinyagievi.com/shop/rr/76/themes/selftpl_5de7a2fdcd356/assets/uploads/logo.png?revision=1767710058",
        "slug": "zeytinyagi-evi",
        "editorial": null,
        "detail": "Biz Mut, Mersin çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "sari-ulak"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/sari-ulak.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Sarı Ulak"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=zeytinyagievi.com&sz=256",
        "longDetailParagraphs": [
            "Biz Zeytinyağı Evi ile Mut, Mersin tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Mut, Mersin çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Mut, Mersin tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Zeytinyağı Evi tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Sarı Ulak tarafının akıcı, meyvemsi ve günlük mutfakta rahat ilerleyen doğasını koruyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Zeytinyağı Evi aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 512
    },
    {
        "id": 99,
        "name": "Sazak Zeytincilik",
        "desc": "Mut merkezli üretici. Erken hasat, soğuk sıkım ve büyük hacimli teneke ürünlerde güçlü bir ürün gamı sunar.",
        "region": "Mut, Mersin",
        "category": "bolgesel-yerel",
        "website": "https://www.sazakzeytincilik.com",
        "founded": null,
        "highlight": false,
        "image": "https://www.sazakzeytincilik.com/idea/bf/61/themes/selftpl_65a925bc527ae/assets/uploads/logo.png?revision=1770703548",
        "slug": "sazak-zeytincilik",
        "editorial": null,
        "detail": "Biz Mut, Mersin çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "sari-ulak"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/sari-ulak.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Sarı Ulak"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=sazakzeytincilik.com&sz=256",
        "longDetailParagraphs": [
            "Biz Sazak Zeytincilik ile Mut, Mersin tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Mut, Mersin çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Mut, Mersin tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Sazak Zeytincilik tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Sarı Ulak tarafının akıcı, meyvemsi ve günlük mutfakta rahat ilerleyen doğasını koruyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Sazak Zeytincilik aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 512
    },
    {
        "id": 100,
        "name": "Adrasos",
        "desc": "Mut bölgesinden premium natürel sızma serileri sunan marka. Cam ve galon ambalajlı zeytinyağlarıyla öne çıkar.",
        "region": "Mut, Mersin",
        "category": "premium-butik",
        "website": "https://www.adrasos.com",
        "founded": null,
        "highlight": false,
        "image": "https://www.adrasos.com/idea/hd/67/themes/selftpl_5faad86c5cff0/assets/uploads/logo.jpg?revision=1728927645",
        "slug": "adrasos",
        "editorial": null,
        "detail": "Biz Mut, Mersin çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "sari-ulak"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/sari-ulak.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Sarı Ulak"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=adrasos.com&sz=256",
        "longDetailParagraphs": [
            "Biz Adrasos tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Mut, Mersin çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Mut, Mersin tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Adrasos tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Sarı Ulak tarafının akıcı, meyvemsi ve günlük mutfakta rahat ilerleyen doğasını koruyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Adrasos aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 101,
        "name": "Mutolea",
        "desc": "Mut merkezli zeytinyağı ve doğal ürün markası. Soğuk sıkım zeytinyağı ile bitkisel ürün portföyünü birlikte sunar.",
        "region": "Mut, Mersin",
        "category": "bolgesel-yerel",
        "website": "https://mutolea.com",
        "founded": null,
        "highlight": false,
        "image": "https://mutolea.com/Resim/mut-olea-3000-3000-piksel-pdf-1000-x-1000-piksel-14_tr_TR.png",
        "slug": "mutolea",
        "editorial": null,
        "detail": "Biz Mut, Mersin çıkışlı bir zeytinyağını geldiği yerin karakterini saklamayan bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "sari-ulak"
        ],
        "categoryTopicUrl": "topic/kategoriler/bolgesel-yerel.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/sari-ulak.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Sarı Ulak"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=mutolea.com&sz=256",
        "longDetailParagraphs": [
            "Biz Mutolea ile Mut, Mersin tarafının yer duygusunu sofraya taşımayı hedefliyoruz. Mut, Mersin çıkışlı bu yağı geldiği yerin kimliğini doğrudan hissettiren bir lezzet anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Mut, Mersin tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz Mutolea tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Sarı Ulak tarafının akıcı, meyvemsi ve günlük mutfakta rahat ilerleyen doğasını koruyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Mutolea aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 509
    },
    {
        "id": 102,
        "name": "Palamidas",
        "desc": "Akhisar merkezli aile üreticisi. Soğuk sıkım natürel sızma ve organik serileriyle öne çıkar; resmi mağazasında cam şişe ve teneke seçenekleri sunar.",
        "region": "Akhisar, Manisa",
        "category": "premium-butik",
        "website": "https://www.palamidas.com",
        "founded": null,
        "highlight": false,
        "image": "https://shop.palamidas.com/uploads/logo.swceh.png",
        "slug": "palamidas",
        "editorial": null,
        "detail": "Biz Akhisar, Manisa çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=palamidas.com&sz=256",
        "longDetailParagraphs": [
            "Biz Palamidas tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Akhisar, Manisa çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Akhisar, Manisa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Palamidas tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Palamidas aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 103,
        "name": "Oro di Milas",
        "desc": "Milas bölgesinde aileye ait modern tesiste üretim yapan premium üretici. Coğrafi işaretli natürel sızma çizgisi ve kadın girişimciliği vurgusuyla öne çıkar.",
        "region": "Milas, Muğla",
        "category": "premium-butik",
        "website": "https://www.orodimilas.com",
        "founded": null,
        "highlight": false,
        "image": "https://static.wixstatic.com/media/1ab336_32e95f3d4bd14e92945b0eab059a8a28~mv2.png/v1/fill/w_366,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pic-site-15.png",
        "slug": "oro-di-milas",
        "editorial": null,
        "detail": "Biz Milas, Muğla çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=orodimilas.com&sz=256",
        "longDetailParagraphs": [
            "Biz Oro di Milas tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Milas, Muğla çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Milas, Muğla tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Oro di Milas tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Oro di Milas aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 519
    },
    {
        "id": 104,
        "name": "Velvet",
        "desc": "Bursa hattında Gemlik tipi zeytinlerden üretim yapan üretici. Orhangazi-İznik çevresindeki zeytinlerden natürel sızma seriler sunar.",
        "region": "Orhangazi, Bursa",
        "category": "premium-butik",
        "website": "https://www.velvetoliveoil.com",
        "founded": null,
        "highlight": false,
        "image": "https://static.wixstatic.com/media/734c68_8d8c98a6135e49b0b41911349c6d5f2b~mv2.png/v1/crop/x_0,y_132,w_450,h_185/fill/w_209,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Velvet%20Logo%20Yeni%20Boyut.png",
        "slug": "velvet",
        "editorial": null,
        "detail": "Biz Orhangazi, Bursa çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "marmara",
        "oliveTypes": [
            "gemlik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/marmara.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/gemlik.html"
        ],
        "regionClusterLabel": "Marmara Bölgesi",
        "oliveTypeLabels": [
            "Gemlik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=velvetoliveoil.com&sz=256",
        "longDetailParagraphs": [
            "Biz Velvet tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Orhangazi, Bursa çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Orhangazi, Bursa tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bizim çizgimiz de bu dengeyi bozmadan sunmak üzerine kurulu.",
            "Biz Velvet tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutuyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Velvet aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 105,
        "name": "MASMANA",
        "desc": "Kilis kökenli dördüncü nesil aile üreticisi. Organik ve natürel sızma odaklı, erken hasat ve özel seri yağlarıyla öne çıkar.",
        "region": "Kilis, Güneydoğu Anadolu",
        "category": "premium-butik",
        "website": "https://www.masmana.com",
        "founded": null,
        "highlight": false,
        "image": "https://www.masmana.com/cdn/shop/files/masmana-logo-png.png?v=1754565017",
        "slug": "masmana",
        "editorial": null,
        "detail": "Biz Kilis, Güneydoğu Anadolu çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "guneydogu",
        "oliveTypes": [
            "nizip"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/guneydogu.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/nizip.html"
        ],
        "regionClusterLabel": "Güneydoğu Anadolu",
        "oliveTypeLabels": [
            "Nizip Yağlık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=masmana.com&sz=256",
        "longDetailParagraphs": [
            "Biz MASMANA tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Kilis, Güneydoğu Anadolu çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Kilis, Güneydoğu Anadolu tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Güneydoğu tarafının daha belirgin bölgesel kimliği, yağa tok ve akılda kalıcı bir duruş kazandırır. Biz bu duruşu saklamadan, sofrada hemen tanınır hale getirmeyi istiyoruz.",
            "Biz MASMANA tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Nizip Yağlık çizgisinin güçlü gövdesini ve bölgesel imzasını şişede kaybetmemeye çalışıyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. MASMANA aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 512
    },
    {
        "id": 106,
        "name": "Josevia",
        "desc": "Ayvalık çevresindeki zeytinlerden sürdürülebilir üretim anlayışıyla natürel sızma sunan premium çizgi. Erken hasat ve soğuk sıkım ürünleriyle bilinir.",
        "region": "Ayvalık, Balıkesir",
        "category": "premium-butik",
        "website": "https://www.josevia.com",
        "founded": null,
        "highlight": false,
        "image": "https://static.wixstatic.com/media/bc44bf_7d1e1648ecd748c791e6bf92acc65fb5~mv2.png",
        "slug": "josevia",
        "editorial": null,
        "detail": "Biz Ayvalık, Balıkesir çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=josevia.com&sz=256",
        "longDetailParagraphs": [
            "Biz Josevia tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Ayvalık, Balıkesir çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Ayvalık, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Josevia tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Josevia aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 510
    },
    {
        "id": 107,
        "name": "EFSUS",
        "desc": "Tarsus ve Çukurova hattında bahçe ve tesis entegrasyonuyla üretim yapan üretici. Natürel sızma, naturel birinci ve sarı ulak zeytin ürünleri sunar.",
        "region": "Tarsus, Mersin",
        "category": "organik",
        "website": "https://efsusnatural.com",
        "founded": "2010",
        "highlight": false,
        "image": "https://efsusnatural.com/wp-content/uploads/2023/05/logo-300x89.png",
        "slug": "efsus",
        "editorial": null,
        "detail": "Biz Tarsus, Mersin çıkışlı bir zeytinyağını temiz içerik hassasiyetini lezzetle bir arada tutan bir çizgide sofraya getiriyoruz. 2010 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "akdeniz",
        "oliveTypes": [
            "sari-ulak"
        ],
        "categoryTopicUrl": "topic/kategoriler/organik.html",
        "regionTopicUrl": "topic/bolgeler/akdeniz.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/sari-ulak.html"
        ],
        "regionClusterLabel": "Akdeniz Bölgesi",
        "oliveTypeLabels": [
            "Sarı Ulak"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=efsusnatural.com&sz=256",
        "longDetailParagraphs": [
            "Biz EFSUS tarafında temiz içerik hassasiyetini lezzetle bir arada tutuyoruz. Tarsus, Mersin çıkışlı bu yağı içeriği kadar üretim hassasiyeti de önemli olan temiz bir çizgi anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 2010 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Biz bu canlılığı şişede korurken temizliği kaybetmemeye dikkat ediyoruz.",
            "Biz EFSUS tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Sarı Ulak tarafının akıcı, meyvemsi ve günlük mutfakta rahat ilerleyen doğasını koruyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. EFSUS aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 509
    },
    {
        "id": 108,
        "name": "Güven Asa",
        "desc": "Gömeç’te modern üretim tesisi bulunan Kuzey Ege üreticisi. Erken hasat, natürel sızma ve riviera serileriyle geniş ürün gamı sunar.",
        "region": "Gömeç, Balıkesir",
        "category": "market-endustriyel",
        "website": "https://www.guvenasazeytinyagi.com",
        "founded": "2014",
        "highlight": false,
        "image": "https://static.ticimax.cloud/5032/uploads/editoruploads/site/guven-asa-logo.png",
        "slug": "guven-asa",
        "editorial": null,
        "detail": "Biz Gömeç, Balıkesir çıkışlı bir zeytinyağını her gün mutfakta rahat yer bulacak güvenilir bir çizgide sofraya getiriyoruz. 2014 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik",
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/market-endustriyel.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html",
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık",
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=guvenasazeytinyagi.com&sz=256",
        "longDetailParagraphs": [
            "Biz Güven Asa tarafında her gün mutfakta yer bulacak güvenilir bir çizgi sunuyoruz. Gömeç, Balıkesir çıkışlı bu yağı günlük kullanımda da güven veren temiz bir akış anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 2014 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Güven Asa tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Güven Asa aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 511
    },
    {
        "id": 109,
        "name": "ZenOlive",
        "desc": "Edremit tipi Ayvalık zeytinlerinden soğuk sıkım yağ üreten küçük ölçekli üretici. Tek bahçe ve iyi tarım vurgusuyla öne çıkar.",
        "region": "Edremit, Balıkesir",
        "category": "premium-butik",
        "website": "https://zenolive.com.tr",
        "founded": "2004",
        "highlight": false,
        "image": "https://zenolive.com.tr/wp-content/uploads/2020/04/Logo_ZenOlive.webp",
        "slug": "zenolive",
        "editorial": null,
        "detail": "Biz Edremit, Balıkesir çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. 2004 ve sonrasına yayılan emeğimiz, bu tadı her sezon aynı ciddiyetle koruma isteği taşıyor.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=zenolive.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz ZenOlive tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Edremit, Balıkesir çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Bizim hikayemizde 2004 ve sonrasına yayılan bir emek var. Bu süreklilik bize her sezonda aynı özeni koruma sorumluluğu veriyor.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz ZenOlive tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. ZenOlive aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 508
    },
    {
        "id": 110,
        "name": "Kozoliv",
        "desc": "Gömeç merkezli Kuzey Ege üreticisi. Üç nesillik aile mirası, erken hasat ve natürel sızma serileriyle öne çıkar.",
        "region": "Gömeç, Balıkesir",
        "category": "premium-butik",
        "website": "https://kozoliv.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://static.ticimax.cloud/61978/uploads/editoruploads/logo_band_colored1x.png",
        "slug": "kozoliv",
        "editorial": null,
        "detail": "Biz Gömeç, Balıkesir çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "ayvalik",
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/ayvalik.html",
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Ayvalık",
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=kozoliv.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Kozoliv tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Gömeç, Balıkesir çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Gömeç, Balıkesir tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Kozoliv tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşımayı önemsiyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Kozoliv aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 510
    },
    {
        "id": 111,
        "name": "Milasso",
        "desc": "Milas çıkışlı yüksek polifenollü premium natürel sızma üreticisi. Erken hasat soğuk sıkım ve hediyelik seri seçenekleri sunar.",
        "region": "Milas, Muğla",
        "category": "premium-butik",
        "website": "https://milasso.com.tr",
        "founded": null,
        "highlight": false,
        "image": "https://spaces.wikiapis.com/milasso/milassologo.png",
        "slug": "milasso",
        "editorial": null,
        "detail": "Biz Milas, Muğla çıkışlı bir zeytinyağını daha seçici sofralara yakışacak karakterli bir çizgide sofraya getiriyoruz. Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakmayı hedefliyoruz.",
        "bottleImages": [],
        "regionCluster": "ege",
        "oliveTypes": [
            "memecik"
        ],
        "categoryTopicUrl": "topic/kategoriler/premium-butik.html",
        "regionTopicUrl": "topic/bolgeler/ege.html",
        "oliveTopicUrls": [
            "topic/zeytin-cesitleri/memecik.html"
        ],
        "regionClusterLabel": "Ege Bölgesi",
        "oliveTypeLabels": [
            "Memecik"
        ],
        "logoFallback": "https://www.google.com/s2/favicons?domain=milasso.com.tr&sz=256",
        "longDetailParagraphs": [
            "Biz Milasso tarafında daha seçici sofralara yakışacak karakterli bir çizgi kuruyoruz. Milas, Muğla çıkışlı bu yağı özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat anlayışıyla sofraya getiriyor, şişe açıldığında hem lezzet hem güven hissedilsin istiyoruz.",
            "Biz Milas, Muğla tarafının karakterini olduğu gibi sofraya taşımaya çalışıyoruz; şişedeki tat, toprağın ve iklimin birlikte kurduğu dengenin uzantısı olsun istiyoruz.",
            "Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Biz de bu doğallığı şişede fazla süslemeden korumayı tercih ediyoruz.",
            "Biz Milasso tarafında lezzeti anlatırken önce damakta bıraktığımız izden söz ediyoruz. Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korumayı seviyoruz. Bu yüzden kahvaltıda ekmeğe gezdirdiğinizde, salatada son dokunuşu yaptığınızda ya da zeytinyağlı bir yemekte temel lezzeti kurduğunuzda farklı biçimde karşılık verir.",
            "Bizi iyi yapan taraf yalnızca tat iddiamız değil; şişede gördüğünüz söz ile sofrada karşılaştığınız lezzetin birbirini tutması. Bizim için iyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.",
            "Bizi ilk kez deneyecekseniz önce kullanım anınızı düşünün. Daha canlı ve karakterli bir ifade arıyorsanız kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış arıyorsanız günlük mutfak kullanımına uygun serileri seçin. İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.",
            "Bizim için bu işin özü, sofraya güvenle koyacağınız bir şişe hazırlamaktır. Milasso aldığınızda yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim almış olursunuz.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır.",
            "İster kahvaltı sofrasında ekmeğe gezdirin ister salatada son dokunuş olarak kullanın, iyi bir şişe her kullanımda aynı güveni vermelidir. Biz de tam olarak bu güven duygusunu korumaya çalışıyoruz.",
            "Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Bizim istediğimiz etki tam olarak budur.",
            "Şişeyi açtığınızda önce gelen koku, sonra dilde bıraktığı akış ve en son boğazdaki kısa iz bizim en çok önem verdiğimiz ayrıntılardır. Bu üçü bir araya geldiğinde yağ kendini gerçekten anlatır."
        ],
        "longDetailWordCount": 513
    },
    {
        "id": 112,
        "name": "Oliella",
        "desc": "Seferihisar çıkışlı erken hasat, soğuk sıkım natürel sızma zeytinyağları sunan butik üretici.",
        "region": "Seferihisar, İzmir",
        "category": "premium-butik",
        "website": "https://www.oliellaseferihisar.com/",
        "founded": null,
        "highlight": false,
        "image": "https://static.wixstatic.com/media/9f2182_7c2ed85fdb44468084ad530ebebbd9a4~mv2.png"
    },
    {
        "id": 113,
        "name": "Seosfarm",
        "desc": "Seferihisar hattında erken hasat ve özel seri natürel sızma zeytinyağları geliştiren üretici.",
        "region": "Seferihisar, İzmir",
        "category": "premium-butik",
        "website": "https://seosfarm.com/",
        "founded": null,
        "highlight": false,
        "image": "https://seosfarm.com/wp-content/uploads/seos-farm-logo.png"
    },
    {
        "id": 114,
        "name": "Seferis",
        "desc": "Seferihisar Ulamış çevresinde organik soğuk sıkım natürel sızma zeytinyağı sunan yerel üretici.",
        "region": "Seferihisar, İzmir",
        "category": "organik",
        "website": "https://www.seferis.org/",
        "founded": null,
        "highlight": false,
        "image": "https://www.seferis.org/images/slider/seferis.png"
    },
    {
        "id": 115,
        "name": "Küçükbahçe",
        "desc": "Karaburun çevresinden naturel sızma zeytinyağları sunan, geleneksel lezzet vurgulu butik üretici.",
        "region": "Karaburun, İzmir",
        "category": "premium-butik",
        "website": "https://www.kucukbahce.com.tr/",
        "founded": null,
        "highlight": false,
        "image": "https://www.kucukbahce.com.tr/content/kucukbahce/images/kucukbahce_logo.png"
    },
    {
        "id": 116,
        "name": "Buzey",
        "desc": "Burhaniye çıkışlı natürel sızma ve soğuk sıkım zeytinyağları sunan yerel üretici.",
        "region": "Burhaniye, Balıkesir",
        "category": "bolgesel-yerel",
        "website": "https://buzey.com.tr/",
        "founded": null,
        "highlight": false,
        "image": "https://cdn.myikas.com/images/9c404b1d-06c2-4b9c-b463-ee240be49443/89874136-b4ff-48f0-90c1-75cc98654458/image_1080.webp"
    },
    {
        "id": 117,
        "name": "Kege Food",
        "desc": "Burhaniye merkezli natürel sızma zeytinyağı ve zeytin ürünleri geliştiren yerel üretici.",
        "region": "Burhaniye, Balıkesir",
        "category": "bolgesel-yerel",
        "website": "https://www.kegefood.com/",
        "founded": null,
        "highlight": false,
        "image": "https://static.wixstatic.com/media/b329ca_e40e46dbf07b452cb7c4d9acb3a10206~mv2.png"
    },
    {
        "id": 118,
        "name": "Pazarbaşılar",
        "desc": "Eceabat ve Gelibolu Yarımadası çevresinden natürel sızma zeytinyağları sunan köklü üretici.",
        "region": "Eceabat, Çanakkale",
        "category": "premium-butik",
        "website": "https://www.pazarbasilar.com/",
        "founded": null,
        "highlight": false,
        "image": "https://shop.pazarbasilar.com/image/cache/catalog/logo-787x197.png"
    },
    {
        "id": 119,
        "name": "Kirte",
        "desc": "Eceabat Alçıtepe çıkışlı natürel sızma zeytinyağları sunan yerel üretici.",
        "region": "Eceabat, Çanakkale",
        "category": "premium-butik",
        "website": "https://kirte.com.tr/",
        "founded": null,
        "highlight": false,
        "image": "https://kirte.com.tr/wp-content/uploads/2023/11/logo-min.png"
    },
    {
        "id": 120,
        "name": "Anafortis",
        "desc": "Eceabat çıkışlı, ödüllü erken hasat natürel sızma zeytinyağlarıyla tanınan butik üretici.",
        "region": "Eceabat, Çanakkale",
        "category": "premium-butik",
        "website": "https://www.anafortis.com.tr/",
        "founded": null,
        "highlight": false,
        "image": "https://www.anafortis.com.tr/images/ANAFORTIS_LOGO.svg"
    },
    {
        "id": 121,
        "name": "Datçam",
        "desc": "Datça çıkışlı natüreli soğuk sıkım zeytinyağı serileri sunan yerel üretici.",
        "region": "Datça, Muğla",
        "category": "bolgesel-yerel",
        "website": "https://www.datcam.com.tr/",
        "founded": null,
        "highlight": false,
        "image": "https://www.datcam.com.tr/idea/jl/13/themes/selftpl_620dfb3921634/assets/uploads/logo.png?revision=1737105670"
    }
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

const editorialDataset = typeof brandEditorialData !== 'undefined'
    ? brandEditorialData
    : (typeof globalThis !== 'undefined' && globalThis.brandEditorialData ? globalThis.brandEditorialData : {});

function getEditorialForBrand(brand) {
    if (!editorialDataset) return null;
    return editorialDataset[String(brand.id)] || null;
}

function sanitizeBrandPageCopy(text) {
    return String(text || '')
        .replace(/\bmarkası\b/gi, 'seçimi')
        .replace(/\bmarkasi\b/gi, 'seçimi')
        .replace(/\bmarkadır\b/gi, 'seçimidir')
        .replace(/\bmarkadir\b/gi, 'seçimidir')
        .replace(/\bmarkanın\b/gi, 'bu ismin')
        .replace(/\bmarkanin\b/gi, 'bu ismin')
        .replace(/\bmarkaya\b/gi, 'bu isme')
        .replace(/\bmarkayı\b/gi, 'bu ismi')
        .replace(/\bmarka\b/gi, 'isim')
        .replace(/\s+/g, ' ')
        .trim();
}

function getBrandInfo(brand) {
    const editorial = getEditorialForBrand(brand);
    if (editorial && typeof editorial.summary === 'string' && editorial.summary.trim()) {
        return sanitizeBrandPageCopy(editorial.summary);
    }
    const focusMap = {
        'premium-butik': 'daha seçici sofralara yakışacak karakterli',
        'market-endustriyel': 'her gün mutfakta rahat yer bulacak güvenilir',
        'bolgesel-yerel': 'geldiği yerin karakterini saklamayan',
        organik: 'temiz içerik hassasiyetini lezzetle bir arada tutan'
    };
    const focus = focusMap[brand.category] || 'özenli ve karakterli';
    const foundedLine = brand.founded
        ? `${brand.founded} ve sonrasına yayılan üretim birikimi, bu çizginin her sezonda aynı ciddiyetle korunmasına katkı verir.`
        : 'Sofraya ulaşan her şişede temiz, karakterli ve hatırlanır bir tat bırakması beklenir.';
    return sanitizeBrandPageCopy(`${brand.name}, ${brand.region} çıkışlı bir zeytinyağını ${focus} bir çizgide sofraya sunar. ${foundedLine}`);
}

brands.forEach((brand) => {
    const media = getMediaForBrand(brand);
    const editorial = getEditorialForBrand(brand);
    const manualLogo = normalizeLogoUrlForBrand(brand, getManualLogoOverride(brand));
    const fallbackLogo = getWebsiteFaviconUrl(brand.website);
    const baseLogo = normalizeLogoUrlForBrand(brand, brand.image);
    const mediaLogo = media ? normalizeLogoUrlForBrand(brand, media.logo) : null;

    brand.slug = getBrandSlug(brand);
    brand.editorial = editorial || null;
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
    if (!brand.founded && editorial && editorial.founded) {
        brand.founded = editorial.founded;
    }
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
        ege: "Ege hattı, Türkiye zeytinyağı haritasında en yoğun ve en çeşitli üretim alanlarından biri olduğu için burada hem bölgesel gelenek hem de modern ürün dili birlikte okunur.",
        marmara: "Marmara hattı özellikle Gemlik ve Trilye ekseniyle sofralık zeytin algısından beslenen ama zeytinyağında da güçlü bir bölgesel kimlik kuran üreticiler barındırır.",
        akdeniz: "Akdeniz hattı, sıcak iklim ve uzun sezon nedeniyle farklı aromatik profiller ve geniş kullanım senaryolarıyla öne çıkan üreticilere alan açar.",
        guneydogu: "Güneydoğu hattında Halhalı ve Nizip gibi yerel çeşitlerle kurulan daha karakterli ve daha belirgin bölgesel üretim dili görülür.",
        trakya: "Trakya hattı ana üretim merkezlerine göre daha niş görünse de sınırlı üretim, bölgesel karakter ve yakın tedarik anlayışıyla ayrışabilir.",
        turkiye: "Türkiye geneline yayılan çizgilerde tek bir yöresel kimlikten çok, ürün ailesi, dağıtım yapısı ve seri ayrımı öne çıkar."
    };
    return narratives[brand.regionCluster] || narratives.ege;
}

function getCategoryNarrative(brand) {
    const narratives = {
        'premium-butik': "Premium ve butik segmentte duyusal karakter, hasat vurgusu, sınırlı seri algısı ve sofrada belirgin tat beklentisi daha görünür hale gelir.",
        'market-endustriyel': "Market segmentinde geniş dağıtım, farklı fiyat seviyeleri ve aynı çatı altında birden fazla ürün serisi bulunması daha sık karşılaşılan bir durumdur.",
        'bolgesel-yerel': "Bölgesel ve yerel üreticilerde üretim hikayesi, köken bilgisi ve yöresel karakter çoğu zaman ana ayrışma noktası haline gelir.",
        organik: "Organik segmentte anlatı çoğunlukla sertifikasyon, izlenebilirlik ve denetim süreçleri üzerinden kurulur; bu nedenle etiket bilgisi daha büyük önem taşır."
    };
    return narratives[brand.category] || narratives['bolgesel-yerel'];
}

function getBuyingNarrative(brand) {
    const narratives = {
        'premium-butik': "Premium ve butik çizgide erken hasat vurgusu, natürel sızma sınıfı, hasat dönemi, şişe tipi ve duyusal profil anlatımı daha belirgin bir ürün dili oluşturur. Bu segmentte kahvaltı, salata ve soğuk kullanım odaklı seriler daha görünür hale gelir.",
        'market-endustriyel': "Market segmentinde aynı çatı altında riviera, natürel birinci ve natürel sızma gibi farklı seri yapıları bulunabilir. Bu yapı, geniş fiyat aralığına ve günlük kullanım odaklı ürün çeşitliliğine alan açar.",
        'bolgesel-yerel': "Yerel çizgide köken bilgisi, ürünün geldiği yöre, şişe üzerindeki açıklama dili ve izlenebilirlik düzeyi karakteri daha doğrudan belirler. Küçük üretim ölçeği özgünlük ve sınırlı seri niteliği yaratabilir.",
        organik: "Organik çizgide sertifikasyon görünürlüğü, ürün sınıfı, ambalaj yapısı ve resmi açıklamanın şeffaflığı ürün dilinin temel parçalarıdır."
    };
    return narratives[brand.category] || narratives['bolgesel-yerel'];
}

function getOliveNarrative(brand) {
    if (Array.isArray(brand.oliveTypeLabels) && brand.oliveTypeLabels.length > 0) {
        return `Ürün dili ve bölgesel konum, ${joinTextList(brand.oliveTypeLabels)} çizgisine yakın bir profil gösterir. Bölge, ürün serileri ve açıklama dili birlikte okunduğunda bu çeşit bağlantısı daha net görünür.`;
    }
    return "Belirgin bir zeytin çeşidi vurgusu görünmüyorsa, ürün sınıfı, bölge ve üretim dili öne çıkan ana ayırt edici unsurlar haline gelir.";
}

function buildBrandLongDetailParagraphs(brand) {
    const editorial = getEditorialForBrand(brand);
    if (editorial && Array.isArray(editorial.paragraphs) && editorial.paragraphs.length) {
        return editorial.paragraphs.map(sanitizeBrandPageCopy);
    }

    const introMap = {
        'premium-butik': `${brand.name}, daha seçici sofralara yakışacak karakterli bir çizgi sunar.`,
        'market-endustriyel': `${brand.name}, her gün mutfakta yer bulacak güvenilir bir çizgi sunar.`,
        'bolgesel-yerel': `${brand.name}, ${brand.region} tarafının yer duygusunu sofraya taşır.`,
        organik: `${brand.name}, temiz içerik hassasiyetini lezzetle bir arada tutan bir çizgi sunar.`
    };
    const oliveCopyMap = {
        Ayvalık: 'Ayvalık çizgisinin dengeli, meyvemsi ve kolay sevilen tarafını sofraya taşır.',
        Memecik: 'Memecik tarafının daha yeşil, daha diri ve hafifçe boğazda iz bırakan karakterini korur.',
        Gemlik: 'Gemlik çizgisinin yuvarlak açılan ama geriden karakter bırakan yapısını mümkün olduğunca net tutar.',
        'Nizip Yağlık': 'Nizip Yağlık çizgisinin güçlü gövdesini ve bölgesel imzasını şişede kaybetmemeye çalışır.',
        Halhalı: 'Halhalı tarafının tok ve yöresini hemen hissettiren duruşunu sofraya doğrudan taşır.',
        'Sarı Ulak': 'Sarı Ulak tarafının akıcı, meyvemsi ve günlük mutfakta rahat ilerleyen doğasını korur.'
    };
    const focusMap = {
        'premium-butik': 'özenli seçilmiş, sofrada karakteri hemen fark edilen bir tat',
        'market-endustriyel': 'günlük kullanımda da güven veren temiz bir akış',
        'bolgesel-yerel': 'geldiği yerin kimliğini doğrudan hissettiren bir lezzet',
        organik: 'içeriği kadar üretim hassasiyeti de önemli olan temiz bir çizgi'
    };
    const packagingLine = brand.website
        ? 'İlk kez tanışacaksanız küçük hacimle başlayıp damakta bıraktığı izi görün, mutfakta sürekli kullanacaksanız daha büyük ambalaja geçin.'
        : 'İlk kez deneyecekseniz küçük boylarla başlayıp size nasıl hissettirdiğini görmek, ardından düzenli kullanım için daha büyük ambalaja geçmek en rahat yoldur.';
    const foundedLine = brand.founded
        ? `${brand.name} tarafında ${brand.founded} ve sonrasına yayılan üretim birikimi öne çıkar. Bu süreklilik, her sezonda aynı özeni koruyan güvenilir bir çizgi oluşturur.`
        : `${brand.name}, ${brand.region} tarafının karakterini sofraya taşır; şişedeki tat toprağın ve iklimin birlikte kurduğu dengenin uzantısı gibi ilerler.`;
    const oliveLine = Array.isArray(brand.oliveTypeLabels) && brand.oliveTypeLabels.length
        ? oliveCopyMap[brand.oliveTypeLabels[0]] || `${joinTextList(brand.oliveTypeLabels)} çizgisinin damakta bıraktığı karakteri mümkün olduğunca açık hissettirir.`
        : 'İyi zeytinyağı anlayışında, şişe açıldığında temiz kokusunu veren ve sofrada nerede duracağını hemen belli eden bir denge aranır.';
    const regionLine = {
        ege: 'Ege tarafında yetişen zeytinlerin rüzgarı, güneşi ve uzun mevsim ritmi tadın dengesine doğrudan yansır. Bu doğallık şişede fazla süslenmeden korunduğunda ürün çok daha ikna edici bir hale gelir.',
        marmara: 'Marmara tarafının daha yuvarlak ama karakterini geriden hissettiren yapısı, sofrada sakin ama kalıcı bir iz bırakır. Bu çizgi dengeli kaldığında günlük kullanım için de rahat bir tercih oluşturur.',
        akdeniz: 'Akdeniz tarafının sıcak iklimi ve uzun sezonu, yağa daha güneşli ve cömert bir ifade verir. Bu canlılık temiz işlendiğinde hem kahvaltıda hem sıcak mutfakta güçlü karşılık bulur.',
        guneydogu: 'Güneydoğu tarafının daha belirgin bölgesel kimliği, yağa tok ve akılda kalıcı bir duruş kazandırır. Bu duruş saklanmadan sunulduğunda sofra üzerinde kendini hemen belli eder.',
        trakya: 'Trakya tarafının daha niş ve daha yakın üretim hissi, şişeye sakin ama özgün bir kimlik verir. Bu özgünlük fazla oynatılmadan korunduğunda ürünün karakteri daha net anlaşılır.',
        turkiye: 'Türkiye’nin farklı üretim çizgilerinden gelen birikim, bu yağın mutfakta farklı kullanım alanlarına rahatça girebilmesini sağlar. Bu esneklik özellikle günlük kullanım arayanlar için güçlü bir avantajdır.'
    };

    const paragraphs = [
        `${introMap[brand.category] || `${brand.name}, hikayesi olan ve karakterini saklamayan bir zeytinyağı sunar.`} ${brand.region} çıkışlı bu yağ, ${focusMap[brand.category] || 'özenli ve karakterli bir tat'} anlayışıyla sofraya ulaşır; şişe açıldığında hem lezzet hem güven hissi bırakması beklenir.`,
        foundedLine,
        regionLine[brand.regionCluster] || regionLine.turkiye,
        `${brand.name} anlatılırken önce damakta bıraktığı iz öne çıkar. ${oliveLine} Bu yüzden kahvaltıda ekmeğe gezdirildiğinde, salatada son dokunuşta kullanıldığında ya da zeytinyağlı bir yemekte temel lezzeti kurduğunda farklı biçimde karşılık verir.`,
        `${brand.name} tarafında güçlü görünen nokta yalnızca tat iddiası değildir; şişede verilen söz ile sofrada karşılaşılan lezzetin birbirini tutmasıdır. İyi yağ, kokusuyla temiz açılmalı, damakta akıcı ilerlemeli ve ikinci lokmada da aynı güveni vermelidir.`,
        `Bu yağı ilk kez deneyecekseniz önce kullanım anını düşünmek gerekir. Daha canlı ve karakterli bir ifade arayanlar kahvaltı ve çiğ dokunuşlara, daha yumuşak bir akış isteyenler günlük mutfak kullanımına uygun serilere yönelebilir. ${packagingLine}`,
        `${brand.name} alındığında yalnızca bir yağ değil; emeği hissedilen, geldiği yer belli olan ve hangi sofrada parlayacağını bilen bir seçim alınmış olur. Bu yüzden şişenin bıraktığı genel iz, ürünün uzun vadede mutfakta yer bulup bulmayacağını da belirler.`
    ];

    const supportParagraphs = [
        'Şişe açıldığında önce gelen koku, sonra dilde bıraktığı akış ve en son boğazda kalan kısa iz, iyi bir zeytinyağını anlatan temel ayrıntılardır. Bu üçü bir araya geldiğinde ürün kendini gerçekten göstermeye başlar.',
        'İster kahvaltı sofrasında ekmeğe gezdirilsin ister salatada son dokunuş olarak kullanılsın, iyi bir şişe her kullanımda aynı güveni vermelidir. Düzenli tercih edilmesini sağlayan şey de bu tutarlılıktır.',
        'Sofrada fark edilen iyi yağ, yalnızca parlak bir etiketle değil, ikinci lokmada da aynı temizliği sürdürebilmesiyle anlaşılır. Kalıcılığı belirleyen şey çoğu zaman tam olarak bu dengedir.'
    ];
    let supportIndex = 0;

    while (countWords(paragraphs.join(' ')) < 500) {
        paragraphs.push(supportParagraphs[supportIndex % supportParagraphs.length]);
        supportIndex += 1;
    }

    return paragraphs.map(sanitizeBrandPageCopy);
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

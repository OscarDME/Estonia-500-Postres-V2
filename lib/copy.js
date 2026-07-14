// AINUS NÄHTAVA SISU ALLIKAS — kogu maandumislehe tekst asub siin.
// Komponendid ei tohi sisaldada hardcode'itud sõnesid.
export const copy = {
  metadata: {
    title: "500 Tervislikku Küpsetist — Vanaema Maie",
    description:
      "500 retsepti pehmete, kohevate ja maitsvate küpsetiste jaoks, täiesti ilma gluteeni, piimatoodete ja suhkruta.",
    productName: "Raamat „Vanaema Maie 500 küpsetist“",
  },

  hero: {
    urgencyBar: "PAKKUMINE LÕPPEB TÄNA · 90% SOODSAMALT ainult täna",
    badge: "Uus retseptiraamat · +3200 rahuloleva õpilase",
    headline: {
      before: "KUI NÄED SEDA, EI OLE ",
      accent: "TERVISLIKUD MAIUSPALAD",
      after: " SINU JAOKS ENAM KUNAGI ENDISED.",
    },
    subheadline:
      "Sind ootab 500 retsepti pehmete, kohevate ja uskumatult maitsvate maiuspalade valmistamiseks – kõik täiesti gluteeni-, piima- ja suhkruvabad. Naudi iga ampsu ilma pingutuse, süütunde ja piiranguteta.",
    ctaLabel: "JAH, SOOVIN RETSEPTE",
    starsAriaLabel: "Hinnang 5 tärni 5-st",
    starsRating: "5.0",
    socialProof: "+3200 rahulolevat õpilast",
    trustChips: [
      { icon: "🌾", text: "Gluteenivaba" },
      { icon: "🥛", text: "Piimavaba" },
      { icon: "🍬", text: "Suhkruvaba" },
    ],
    image: {
      src: "/hero-mockup.webp",
      alt: "Vanaema Maie 500 tervisliku küpsetise raamat",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Valmib vaid", bottom: "20 minutiga" },
      discount: { icon: "🔥", top: "Täna", bottom: "90% SOODSAM" },
    },
  },

  preview: {
    kicker: "Kiirülevaade",
    headline: "VAATA MAIUSPALU, MIDA ÕPID VALMISTAMA",
    items: [
      { src: "/preview/3-6.webp", alt: "Tervislik küpsetis 1" },
      { src: "/preview/2-7.webp", alt: "Tervislik küpsetis 2" },
      { src: "/preview/4-3.webp", alt: "Tervislik küpsetis 3" },
      { src: "/preview/3-5-1.webp", alt: "Tervislik küpsetis 4" },
      { src: "/preview/1-7.webp", alt: "Tervislik küpsetis 5" },
      { src: "/preview/4-2.webp", alt: "Tervislik küpsetis 6" },
      { src: "/preview/7-1-2-2.webp", alt: "Tervislik küpsetis 7" },
      { src: "/preview/1-5-1.webp", alt: "Tervislik küpsetis 8" },
      { src: "/preview/3-3.webp", alt: "Tervislik küpsetis 9" },
      { src: "/preview/2-4.webp", alt: "Tervislik küpsetis 10" },
      { src: "/preview/1-4.webp", alt: "Tervislik küpsetis 11" },
      { src: "/preview/1-6-1.webp", alt: "Tervislik küpsetis 12" },
      { src: "/preview/2-3.webp", alt: "Tervislik küpsetis 13" },
      { src: "/preview/chocolate.webp", alt: "Tervislik šokolaadikook" },
      { src: "/preview/ce2f26de6ce5f6b237a4-1.webp", alt: "Tervislik küpsetis 15" },
      { src: "/preview/Design-sem-nome-5-1.webp", alt: "Tervislik küpsetis 16" },
      { src: "/preview/12-1-2.webp", alt: "Tervislik küpsetis 17" },
      { src: "/preview/2-6.webp", alt: "Tervislik küpsetis 18" },
      { src: "/preview/1-8.webp", alt: "Tervislik küpsetis 19" },
    ],
  },

  benefits: {
    kicker: "Miks sa seda armastama hakkad",
    headline: "Tervislikud küpsetised ilma maitse arvelt kompromisse tegemata",
    items: [
      { icon: "🎂", title: "500 maitset, et sul kunagi igav ei hakkaks" },
      { icon: "✨", title: "Täiuslik tekstuur isegi ilma gluteenita" },
      { icon: "🌾", title: "Spetsiaalseid jahusid pole vaja" },
      { icon: "⚡", title: "Kiirküpsetised kõigest 20 minutiga" },
      { icon: "💚", title: "Täiesti piima- ja suhkruvaba" },
      { icon: "📖", title: "Lihtsad samm-sammulised juhised" },
    ],
  },

  samples: {
    kicker: "Proovi neid esimesena",
    headline: "USKUMATULT MAITSVAD KÜPSETISED (TERVISLIKUD VERSIOONID):",
    badge: "Suhkru-, gluteeni- ja laktoosivaba",
    items: [
      {
        name: "ŠOKOLAADIKOOK",
        variant: "(TERVISLIK JA KOHEV)",
        kcal: "88",
        time: "20 min",
        src: "/samples/pastel-chocolate.gif",
        alt: "Tervislik šokolaadikook",
      },
      {
        name: "PORGANDIKOOK",
        variant: "(TERVISLIKU ŠOKOLAADIGLAZUURIGA)",
        kcal: "120",
        time: "20 min",
        src: "/samples/pastel-zanahoria.gif",
        alt: "Porgandikook šokolaadiga",
      },
      {
        name: "BANAANIKOOK",
        variant: "(TERVISLIK)",
        kcal: "90",
        time: "20 min",
        src: "/samples/pastel-platano.gif",
        alt: "Tervislik banaanikook",
      },
      {
        name: "TRES LECHES KOOK",
        variant: "(LAKTOOSIVABA)",
        kcal: "100",
        time: "20 min",
        src: "/samples/pastel-tres-leches.gif",
        alt: "Laktoosivaba Tres Leches kook",
      },
      {
        name: "ŠOKOLAADITORT",
        variant: "(5 KOOSTISOSAGA)",
        kcal: "108",
        time: "20 min",
        src: "/samples/chocotorta.gif",
        alt: "Tervislik šokolaaditort",
      },
      {
        name: "SIDRUNIKOOK",
        variant: "(BLENDERIS VALMISTATUD)",
        kcal: "100",
        time: "20 min",
        src: "/samples/pastel-limon.gif",
        alt: "Sidrunikook",
      },
      {
        name: "RED VELVET KOOK",
        variant: "(TERVISLIK)",
        kcal: "105",
        time: "19 min",
        src: "/samples/pastel-red-velvet.gif",
        alt: "Tervislik Red Velvet kook",
      },
    ],
    caloriesLabel: "Kalorid",
    timeLabel: "Aeg",
  },

  moreRecipesCta: {
    pretitle: "Ja veel üle",
    big: "493",
    post: "KÜPSETISERETSEPTI...",
    ctaLabel: "LAADI ALLA OMA EKSEMPLAR KOHE",
  },

  testimonials: {
    kicker: "Tõelised edulood",
    headline: "VAATA, MIDA ÜTLEVAD NEED, KES ON RAAMATU JUBA OSTNUD",
    subheadline: "Mida meie kliendid jagavad",
    studentsBadge: "+3200 rahulolevat õpilast",
    items: [
      {
        text: "Eile tegin šokolaadikooki ja sellest ei jäänud purugi alles 😍 Pere palus juba, et ma seda nädalavahetusel uuesti teeksin. Ilma suhkru ja gluteenita... lihtsalt uskumatu!!",
        time: "10:23",
      },
      {
        text: "Ma ei saanud aru, kuidas saab miski ilma piima ja suhkruta nii maitsev olla. Laktoosivaba Tres Leches jättis mind sõnatuks 🤯 Olen nüüd 3 päeva järjest küpsetanud.",
        time: "11:47",
      },
      {
        text: "Mul on tsöliaakia olnud 10 aastat ja ma pole kunagi saanud õiget kooki süüa. Tänu sellele raamatule saan lõpuks nautida samu asju mis teised 😭❤️",
        time: "14:02",
      },
      {
        text: "Porgandikook šokolaadiglatsuuriga tuli TÄPSELT selline nagu päris kondiitriäris, aga ilma jahu ja suhkruta. Viisin selle kontorisse ja keegi ei uskunud, et see on tervislik, hahaha.",
        time: "09:15",
      },
      {
        text: "Raamat on mul olnud kuu aega ja olen teinud juba üle 15 retsepti. Tervislik Red Velvet jääb nii kohev ja selle värv on lihtsalt imeline 🎂 Soovitan 100% kõigile!!",
        time: "16:38",
      },
      {
        text: "Alguses olin kahevahel... aga esimene kook võitis mu südame kohe. 20-minuti tervislik banaanikook on tõeline ime ⭐⭐⭐⭐⭐ Aitäh, et olemas olete!",
        time: "20:54",
      },
    ],
    mockup: {
      src: "/testimonials/mockup-grande.webp",
      alt: "Retseptiraamat telefonis, arvutis ja tahvelarvutis",
    },
  },

  categories: {
    kicker: "Sulle ei hakka kunagi igav",
    headline: "KATEGOORIATESSE JAGATUD RETSEPTID",
    groups: [
      {
        title: "100 Täidisega küpsetist",
        items: [
          { src: "/preview/1-4.webp", alt: "Täidisega küpsetis 1" },
          { src: "/preview/7-1-2-2.webp", alt: "Täidisega küpsetis 2" },
          { src: "/preview/12-1-2.webp", alt: "Täidisega küpsetis 3" },
          { src: "/preview/2-3.webp", alt: "Täidisega küpsetis 4" },
          { src: "/preview/7-1-2-1.webp", alt: "Täidisega küpsetis 5" },
        ],
      },
      {
        title: "100 Puuviljaküpsetist",
        items: [
          { src: "/preview/1-5-1.webp", alt: "Puuviljaküpsetis 1" },
          { src: "/preview/2-4.webp", alt: "Puuviljaküpsetis 2" },
          { src: "/preview/3-3.webp", alt: "Puuviljaküpsetis 3" },
          { src: "/preview/Design-sem-nome-5-1.webp", alt: "Puuviljaküpsetis 4" },
          { src: "/preview/Design-sem-nome-6-1.webp", alt: "Puuviljaküpsetis 5" },
        ],
      },
      {
        title: "100 Klassikalist küpsetist",
        items: [
          { src: "/preview/1-6-1.webp", alt: "Klassikaline küpsetis 1" },
          { src: "/preview/2-5-1.webp", alt: "Klassikaline küpsetis 2" },
          { src: "/preview/4-2.webp", alt: "Klassikaline küpsetis 3" },
        ],
      },
      {
        title: "100 Modernset küpsetist",
        items: [
          { src: "/preview/1-7.webp", alt: "Modernne küpsetis 1" },
          { src: "/preview/2-6.webp", alt: "Modernne küpsetis 2" },
          { src: "/preview/3-5-1.webp", alt: "Modernne küpsetis 3" },
          { src: "/preview/4-3.webp", alt: "Modernne küpsetis 4" },
        ],
      },
      {
        title: "100 Külma magustoitu",
        items: [
          { src: "/preview/1-8.webp", alt: "Külm magustoit 1" },
          { src: "/preview/2-7.webp", alt: "Külm magustoit 2" },
          { src: "/preview/3-6.webp", alt: "Külm magustoit 3" },
          { src: "/preview/4-4.webp", alt: "Külm magustoit 4" },
        ],
      },
    ],
    ctaLabel: "SOOVIN RETSEPTE",
  },

  story: {
    kicker: "Raamatu saamislugu",
    headline: "KUIDAS SEE RETSEPTIRAAMAT SÜNDIS?",
    paragraphs: [
      "Vanaema Maie täitis meie kodu alati küpsetiste lõhnaga, mis tõi terve pere kokku. Aga kui mu tütar Kadri sai teada, et ta ei tohi enam gluteeni süüa, muutus kõik.",
      "Toitumisspetsialistina otsustasin koos emaga muuta need vanad head retseptid kõigile ohutuks: ilma suhkru, gluteeni ja laktoosita. Pärast paljusid katsetusi saavutasime tulemused, mis üllatasid isegi vanaema Maiet ennast.",
      "Nii sündiski see raamat: maitsest ja armastusest pakatav perepärand, mis võib nüüd saada osaks ka sinu loost.",
    ],
    image: {
      src: "/story.webp",
      alt: "Vanaema Maie ja tema lapselaps köögis",
    },
  },

  bonuses: {
    kicker: "Kaasasolevad kingitused",
    headline: "SAAD 5 TASUTA BOONUST",
    items: [
      {
        label: "BOONUSRAAMAT 1",
        name: "KÜPSISED JA MUFFINID",
        desc: "20 vastupandamatut retsepti krõbedate küpsiste ja kohevate muffinide jaoks – maitsvad ja tervislikud.",
        price: "19,90 €",
        freeLabel: "TÄNA TASUTA",
        image: { src: "/bonuses/bonus-galletas.webp", alt: "Boonus: Küpsised ja muffinid" },
      },
      {
        label: "BOONUSRAAMAT 2",
        name: "VALGURIKKAD RETSEPTID KUUMAÕHUFRITÜÜRILE",
        desc: "20 retsepti kiireteks, tervislikeks ja valgurikasteks toitudeks, mis valmivad ainult kuumaõhufritüüris.",
        price: "19,90 €",
        freeLabel: "TÄNA TASUTA",
        image: { src: "/bonuses/bonus-freidora.webp", alt: "Boonus: Kuumaõhufritüür" },
      },
      {
        label: "BOONUSRAAMAT 3",
        name: "TERVISLIKUD SÕÕRIKUD",
        desc: "Krõbedad ja tervislikud ampsud, mida võid süüa ilma igasuguste süümepiinadeta.",
        price: "19,90 €",
        freeLabel: "TÄNA TASUTA",
        image: { src: "/bonuses/bonus-bunuelos.webp", alt: "Boonus: Tervislikud sõõrikud" },
      },
      {
        label: "BOONUSRAAMAT 4",
        name: "MAITSVATE SALATITE RETSEPTID",
        desc: "Värsked, lihtsad ja tervislikud salatid, et saaksid igapäevaselt maitseid ja tasakaalu nautida.",
        price: "19,90 €",
        freeLabel: "TÄNA TASUTA",
        image: { src: "/bonuses/bonus-ensaladas.webp", alt: "Boonus: Salatid" },
      },
      {
        label: "BOONUSRAAMAT 5",
        name: "67 DETOKS-MAHLA",
        desc: "Taasta oma energia 67 naturaalse, värskendava ja toitva detoks-mahla retseptiga.",
        price: "19,90 €",
        freeLabel: "TÄNA TASUTA",
        image: { src: "/bonuses/bonus-sucos.webp", alt: "Boonus: 67 detoks-mahla" },
      },
    ],
    secretBonus: {
      label: "+3 SALABOONUST",
      name: "Eksklusiivsed üllatused neile, kes soetavad retseptiraamatu täna.",
      price: "59,90 €",
      freeLabel: "TÄNA TASUTA",
      image: { src: "/bonuses/bonus-secreto.webp", alt: "Salaboonuste karp" },
    },
    ctaLabel: "SOOVIN RETSEPTE",
  },

  audience: {
    kicker: "Kas see on sulle?",
    headline: "INIMESTELE, KES OTSIVAD:",
    items: [
      "Tervislikumaid retseptilahendusi",
      "Muutust oma toitumisharjumustes",
      "Laktoositalumatuse lahendusi",
      "Tsöliaakiaga sobivaid toite",
      "Diabeetikutele sobivaid magustoite",
    ],
  },

  finalCta: {
    flagline: "Esimesed 100 ostjat saavad 20 tasuta videotundi",
    headline: "KÜPSETUSMEISTER MAIE 500 RETSEPTIGA RAAMAT ®",
    subheadline: "Kõik, mida vajad, et küpsetada süütundeta",
    includesTitle: "+5 TASUTA RAAMATUT:",
    includes: [
      "+ MAITSVATE SALATITE JA KASTMETE RETSEPTID",
      "+ TERVISLIKE SÕÕRIKUTE RETSEPTID",
      "+ KÜPSISTE JA MUFFINITRE RETSEPTID",
      "+ VALGURIKKAD RETSEPTID KUUMAÕHUFRITÜÜRILE",
      "+ 67 DETOKS-MAHLA RETSEPTI",
    ],
    secretTitle: "+3 SALABOONUST:",
    discountLabel: "90% SOODSAM",
    regularPriceLabel: "TAVAHIND",
    regularPrice: "59,90 €",
    regularPriceSuffix: "...",
    offerPriceLabel: "Ainult täna",
    offerCurrency: "",
    offerPrice: "9,90 €",
    button: "JAH, MA SOOVIN SEDA",
    urgencyNote: "**PAKKUMINE LÕPPEB TÄNA**",
    paymentLabel: "MAKSEVIISID",
    paymentImage: { src: "/payment-methods.webp", alt: "Makseviisid" },
    secureLabel: "100% TURVALINE LEHT",
    secureImage: { src: "/secure-site.webp", alt: "100% turvaline leht" },
    image: { src: "/final-mockup.webp", alt: "Retseptiraamatud kõikidel platvormidel" },
    bonusesBadge: "+8 tasuta boonust",
    discountStickerLabel: "Soodustus",
    discountStickerValue: "90% SOODSAM",
  },

  delivery: {
    kicker: "Kohaletoimetamine",
    headline: "KUIDAS MA RETSEPTID KÄTTE SAAN?",
    items: [
      { icon: "🖨️", text: "Võid need paberile printida." },
      { icon: "📱", text: "Saad neid telefonist vaadata." },
      { icon: "💻", text: "Võid neid arvutist lugeda." },
      { icon: "✅", text: "Saad neid ka tahvelarvutist vaadata." },
      { icon: "♾️", text: "Eluaegne ligipääs: sealhulgas uutele retseptidele." },
      { icon: "📩", text: "Kaotasid retsepti? Saadame sulle uuesti." },
      { icon: "📚", text: "Saa iga kuu uusi raamatuid." },
    ],
  },

  guarantee: {
    kicker: "Riskivaba",
    headline: "PROOVI RISKIVABALT — 14-päevane tingimusteta garantii.",
    body: "Sul on 14 päeva aega neid katsetada. Kui retseptid sind ei veena, tagastan su raha viimase kui sendini. Ilma liigsete küsimusteta. Ilma stressita.",
    alt: "14-päevase tingimusteta garantii märk",
    image: { src: "/guarantee-badge.webp", alt: "14-päevane garantii" },
  },

  faq: {
    kicker: "Küsimused ja vastused",
    headline: "KKK — mida kõik küsivad",
    items: [
      {
        q: "Kas koostisosad on kallid?",
        a: "Ei! Kasutame lihtsaid koostisosi, mis sul on juba kodus olemas: ei mingeid keerulisi ega kalleid tooteid.",
      },
      {
        q: "Kas ilma nisu, piima, laktoosi ja suhkruta kook saab üldse maitsev olla?",
        a: "Jah, ja mis kõige parem: selle valmistamine on imelihtne! Retseptid on loodud nii, et säiliks see tuttav maitse, mida sa armastad, kasutades kergeid ja kergesti kättesaadavaid koostisosi.",
      },
      {
        q: "Kas retseptid on sobivad algajatele (kellelegi, kes pole kunagi kooki küpsetanud)?",
        a: "Need sobivad ideaalselt algajatele! Kõik on samm-sammult lahti seletatud, tavaliste koostisosade ja lihtsate juhistega. Kui oskad ahju sisse lülitada, siis saad ka nende valmistamisega hakkama.",
      },
      {
        q: "Millega küpsetisi magustatakse?",
        a: "Võid valida endale meelepärase: kas puuviljadega (banaan või datlid), meega või magusainetega nagu stevia ja erütritool. Igas retseptis on toodud täpne kogus iga valiku jaoks.",
      },
      {
        q: "Kas ma saan suhkru puuviljadega (banaan, datlid) asendada? Kuidas see käib?",
        a: "Jah, saad küll! Ja see on lihtsam, kui tundub: retsept ütleb sulle täpselt, millist puuvilja kasutada, kui palju seda lisada ja kuidas teha täiuslik, mahlane ning magus magustoit.",
      },
      {
        q: "Milliseid jahusid te kasutate?",
        a: "Kasutame jahude segu, näiteks riisi-, kaera- või mandlijahu, mida leiad igast supermarketist ja mis on sageli isegi odavamad kui nisujahu.",
      },
      {
        q: "Mitu minutit kulub koogi valmimiseks?",
        a: "Enamiku valmistamiseks kulub 20 või 30 minutit. Kuni sa endale kohvi teed, täidab kook köögi juba imelise lõhnaga.",
      },
    ],
  },

  footer: {
    brand: "Vanaema Maie",
    links: [
      { label: "Privaatsuspoliitika", href: "https://grandmateresa.com/politica-de-privacidad/" },
      { label: "Kasutustingimused", href: "https://grandmateresa.com/condiciones-de-uso/" },
      { label: "Tagastuspoliitika", href: "https://grandmateresa.com/politica-de-devoluciones/" },
    ],
    copyright: "© 2026 / Vanaema Maie – Kõik õigused kaitstud.",
  },

  stickyCta: {
    priceLabel: "Täna",
    offerPrice: "9,90 €",
    strikePrice: "59,90 €",
    ctaLabel: "SOOVIN SEDA",
  },
};
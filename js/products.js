/* ============================================================
   PAPER BLOSSOM — PRODUCTS & CONFIG
   Handcrafted Paper Flowers & Artisan Bouquets
   ============================================================ */

const SITE = {
  brand: "Paper Blossom",
  tagline: "Handcrafted paper flowers, arranged with love",
  whatsappNumber: "918850818776",
  phoneDisplay: "8850818776",
  email: "paperblossom14@gmail.com",
  handledBy: "RUJUTA UTEKAR",
  instagramUrl: "https://www.instagram.com/paperblossom.14",
  instagramHandle: "@paperblossom.14",
  currency: "₹",
  deliveryNote: "All flowers are lovingly handmade with high-grade crepe paper. Forever in bloom!",
};

const PRODUCTS = [
  {
    "id": "crimson-rose",
    "name": "Crimson Velvet Rose",
    "hindi": "लाल गुलाब",
    "category": "rose",
    "price": 249,
    "unit": "1 handcrafted stem",
    "img": "images/logo.jpg",
    "colors": [
      "#b3123f",
      "#f4c542"
    ],
    "desc": "Our signature handmade crimson paper rose with delicate sculpted petals, wired green stem and leaves."
  },
  {
    "id": "scarlet-rose-stem",
    "name": "Classic Scarlet Rose",
    "hindi": "गहरा लाल गुलाब",
    "category": "rose",
    "price": 249,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_04-29-10.52.49.jpg",
    "colors": [
      "#c61a38",
      "#382414"
    ],
    "desc": "Vibrant red handcrafted paper rose with realistic sculpted petals, ideal for vases or gift boxes."
  },
  {
    "id": "ruby-rose-bud",
    "name": "Ruby Rose Blossom",
    "hindi": "रूबी गुलाब",
    "category": "rose",
    "price": 279,
    "unit": "1 bloom stem",
    "img": "images/products/PicsArt_04-29-10.51.44.jpg",
    "colors": [
      "#b01236",
      "#3a2015"
    ],
    "desc": "Handcrafted deep ruby paper rose in mid-bloom with detailed calyx and flexible stem."
  },
  {
    "id": "carmine-rose-trio",
    "name": "Carmine Rose Stems",
    "hindi": "कारमाइन गुलाब",
    "category": "rose",
    "price": 499,
    "unit": "bunch of 2 stems",
    "img": "images/products/PicsArt_06-09-10.22.57.jpg",
    "colors": [
      "#c2185b",
      "#2d4420"
    ],
    "desc": "Pair of lush handcrafted red roses, perfect for table vases, pooja thalis, and intimate gifting."
  },
  {
    "id": "sweetheart-rose",
    "name": "Sweetheart Paper Rose",
    "hindi": "स्वीटहार्ट गुलाब",
    "category": "rose",
    "price": 269,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_06-09-10.12.30.jpg",
    "colors": [
      "#d82b4a",
      "#3d4f26"
    ],
    "desc": "Delicate curved-petal red rose crafted from high-grade Italian crepe paper with realistic veining."
  },
  {
    "id": "wine-paper-rose",
    "name": "Royal Wine Rose",
    "hindi": "वाइन लाल गुलाब",
    "category": "rose",
    "price": 299,
    "unit": "1 large bloom",
    "img": "images/products/PicsArt_06-11-03.07.24.jpg",
    "colors": [
      "#88102a",
      "#415222"
    ],
    "desc": "Rich wine-tinted petals with handcrafted paper leaves, forever preserving your memorable moments."
  },
  {
    "id": "petite-red-rose",
    "name": "Petite Crimson Stem",
    "hindi": "छोटा लाल गुलाब",
    "category": "rose",
    "price": 199,
    "unit": "1 single stem",
    "img": "images/products/PicsArt_11-08-11.59.44.jpg",
    "colors": [
      "#bf1a35",
      "#405523"
    ],
    "desc": "Charming single-stem petite red rose, ideal for book gifts, dinner settings, and minimal vases."
  },
  {
    "id": "burgundy-bloom",
    "name": "Burgundy Garden Rose",
    "hindi": "गहरा गुलाब",
    "category": "rose",
    "price": 289,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_11-08-11.56.19.jpg",
    "colors": [
      "#7f1734",
      "#3a481c"
    ],
    "desc": "Full double-petal handcrafted rose inspired by traditional English garden blooms."
  },
  {
    "id": "golden-sunflower",
    "name": "Golden Sunlight Sunflower",
    "hindi": "सूरजमुखी",
    "category": "sunflower",
    "price": 349,
    "unit": "1 large handcrafted bloom",
    "img": "images/products/PicsArt_04-19-09.43.39.jpg",
    "colors": [
      "#f5b81c",
      "#5b3a1a"
    ],
    "desc": "Vibrant golden-yellow sunflower with textured dark centre and realistic handcrafted foliage."
  },
  {
    "id": "marigold-sunburst",
    "name": "Sunburst Marigold Bloom",
    "hindi": "गेंदा पुष्प",
    "category": "sunflower",
    "price": 229,
    "unit": "1 handcrafted flower",
    "img": "images/products/PicsArt_12-30-11.14.54.jpg",
    "colors": [
      "#ff9a00",
      "#804000"
    ],
    "desc": "Multi-layered ruffled paper flower in bright saffron and mustard tones, celebrating festive traditions."
  },
  {
    "id": "amber-sunflower-mini",
    "name": "Amber Sunflower Stem",
    "hindi": "छोटा सूरजमुखी",
    "category": "sunflower",
    "price": 299,
    "unit": "1 bloom stem",
    "img": "images/products/PicsArt_06-11-03.07.50.jpg",
    "colors": [
      "#f7b500",
      "#4e3015"
    ],
    "desc": "Warm yellow paper petals radiating around a detailed textured florets core."
  },
  {
    "id": "ochre-sunflower-duo",
    "name": "Ochre Sunflower Twig",
    "hindi": "पीला सूरजमुखी",
    "category": "sunflower",
    "price": 449,
    "unit": "set of 2 flowers",
    "img": "images/products/PicsArt_04-11-12.55.34.jpg",
    "colors": [
      "#e5a017",
      "#4b351d"
    ],
    "desc": "Sunny handcrafted paper flowers adding an enduring burst of optimism to any desk or mantelpiece."
  },
  {
    "id": "blush-oriental-lily",
    "name": "Blush Oriental Lily",
    "hindi": "गुलाबी कुमुद",
    "category": "lily",
    "price": 399,
    "unit": "1 handcrafted stem with bud",
    "img": "images/products/PicsArt_04-29-10.38.14.jpg",
    "colors": [
      "#e88299",
      "#d9b04f"
    ],
    "desc": "Graceful flared petals in soft blush rose with handcrafted stamens and realistic bud accent."
  },
  {
    "id": "coral-lily-bloom",
    "name": "Coral Dawn Lily",
    "hindi": "मूंगा कुमुद",
    "category": "lily",
    "price": 389,
    "unit": "1 handmade stem",
    "img": "images/products/PicsArt_04-29-10.38.32.jpg",
    "colors": [
      "#f27289",
      "#e29f3d"
    ],
    "desc": "Exquisite trumpet lily sculpted in warm coral and berry-pink tones with natural paper grain."
  },
  {
    "id": "pearl-white-lily",
    "name": "Pearl White Lily",
    "hindi": "सफेद कुमुद",
    "category": "lily",
    "price": 369,
    "unit": "1 pristine stem",
    "img": "images/products/PicsArt_04-29-10.39.26.jpg",
    "colors": [
      "#fffdf8",
      "#c9a24a"
    ],
    "desc": "Pure white handcrafted paper lily symbolizing elegance, renewal, and everlasting peace."
  },
  {
    "id": "petal-pink-lily",
    "name": "Petal Pink Lily",
    "hindi": "हल्का गुलाबी कुमुद",
    "category": "lily",
    "price": 349,
    "unit": "1 crafted stem",
    "img": "images/products/PicsArt_04-29-10.37.10.jpg",
    "colors": [
      "#f09cb0",
      "#deb258"
    ],
    "desc": "Delicate curved petals in tender rose quartz shades with long wired stem for custom positioning."
  },
  {
    "id": "misty-lily-bud",
    "name": "Misty Lilac Lily",
    "hindi": "लैवेंडर कुमुद",
    "category": "lily",
    "price": 379,
    "unit": "1 floral stem",
    "img": "images/products/PicsArt_04-29-10.40.43.jpg",
    "colors": [
      "#d195ba",
      "#cca146"
    ],
    "desc": "Subtle lavender-flushed paper petals with realistic botanical details and natural curl."
  },
  {
    "id": "royal-violet-orchid",
    "name": "Royal Indigo Orchid",
    "hindi": "नीलम ऑर्किड",
    "category": "exotic",
    "price": 429,
    "unit": "1 sculpted bloom",
    "img": "images/products/PicsArt_04-25-08.22.26.jpg",
    "colors": [
      "#4d3ea2",
      "#eed164"
    ],
    "desc": "Deep indigo and periwinkle paper petals crafted with sculptural precision and velvety depth."
  },
  {
    "id": "sapphire-orchid-stem",
    "name": "Sapphire Blossom Spray",
    "hindi": "नीला पुष्प",
    "category": "exotic",
    "price": 449,
    "unit": "1 floral branch",
    "img": "images/products/PicsArt_04-25-08.23.25.jpg",
    "colors": [
      "#3d4fb5",
      "#f4dc79"
    ],
    "desc": "Striking blue-violet handcrafted petals, an artistic centerpiece for contemporary home interiors."
  },
  {
    "id": "amethyst-paper-orchid",
    "name": "Amethyst Floral Bloom",
    "hindi": "बैंगनी पुष्प",
    "category": "exotic",
    "price": 399,
    "unit": "1 stem",
    "img": "images/products/PicsArt_04-25-08.23.45.jpg",
    "colors": [
      "#6742a8",
      "#f7e285"
    ],
    "desc": "Graceful arching exotic petals in vivid amethyst hues that never fade or wilt."
  },
  {
    "id": "magenta-peony",
    "name": "Magenta Velvet Peony",
    "hindi": "मजेंटा पियोनी",
    "category": "exotic",
    "price": 449,
    "unit": "1 full ruffled bloom",
    "img": "images/products/PicsArt_05-09-10.47.05.jpg",
    "colors": [
      "#ad1769",
      "#eac452"
    ],
    "desc": "Lavish handcrafted paper peony with dozens of gathered ruffles in rich royal magenta."
  },
  {
    "id": "orchid-plum-bloom",
    "name": "Plum Blossom Branch",
    "hindi": "प्लम पुष्प",
    "category": "exotic",
    "price": 389,
    "unit": "1 stem",
    "img": "images/products/PicsArt_05-09-10.45.58.jpg",
    "colors": [
      "#9c3475",
      "#f2d47b"
    ],
    "desc": "Soft orchid-plum paper flowers with handcrafted central stamen accents on botanical wire."
  },
  {
    "id": "flame-poppy-stem",
    "name": "Fiery Flame Poppy",
    "hindi": "अंगार पुष्प",
    "category": "exotic",
    "price": 349,
    "unit": "1 stem",
    "img": "images/products/PicsArt_06-11-03.04.02.jpg",
    "colors": [
      "#e64a19",
      "#2a1f18"
    ],
    "desc": "Vibrant tangerine and scarlet paper petals that make an instant statement in any room."
  },
  {
    "id": "apricot-wildflower",
    "name": "Apricot Wild Rose",
    "hindi": "खुबानी गुलाब",
    "category": "exotic",
    "price": 319,
    "unit": "1 branch",
    "img": "images/products/PicsArt_06-11-03.06.53.jpg",
    "colors": [
      "#e0714b",
      "#4d5a22"
    ],
    "desc": "Warm coral-apricot tones with textured leaves and organic handmade curves."
  },
  {
    "id": "cream-hydrangea-cluster",
    "name": "Cream Vanilla Cluster",
    "hindi": "सफेद पुष्पगुच्छ",
    "category": "exotic",
    "price": 359,
    "unit": "1 cluster stem",
    "img": "images/products/PicsArt_03-01-11.09.37.jpg",
    "colors": [
      "#f5eedc",
      "#788448"
    ],
    "desc": "Dense cluster of handmade paper florets in ivory and soft celadon greens."
  },
  {
    "id": "lavender-mist-cluster",
    "name": "Lavender Pastel Cluster",
    "hindi": "लैवेंडर गुच्छा",
    "category": "exotic",
    "price": 359,
    "unit": "1 cluster stem",
    "img": "images/products/PicsArt_03-01-11.10.49.jpg",
    "colors": [
      "#d1c4e9",
      "#6d558b"
    ],
    "desc": "Delicate pastel cluster of tiny hand-folded petals on a sturdy floral stem."
  },
  {
    "id": "emerald-filler-foliage",
    "name": "Handcrafted Botanical Greens",
    "hindi": "पत्ते और टहनी",
    "category": "exotic",
    "price": 219,
    "unit": "set of 3 leaf stems",
    "img": "images/products/PicsArt_04-11-12.56.39.jpg",
    "colors": [
      "#386b36",
      "#1d3b1c"
    ],
    "desc": "Wired botanical paper leaves and buds to accompany and accent any paper bouquet."
  },
  {
    "id": "sweet-romance-bouquet",
    "name": "Sweet Romance Paper Bouquet",
    "hindi": "प्रेम पुष्पगुच्छ",
    "category": "bouquet",
    "price": 1299,
    "unit": "hand-tied bouquet (7 blooms)",
    "img": "images/products/PicsArt_02-24-05.43.27.jpg",
    "colors": [
      "#d94f7b",
      "#f4c542"
    ],
    "desc": "Harmonious paper bouquet featuring handcrafted roses and lilies tied with satin ribbon."
  },
  {
    "id": "pure-elegance-bouquet",
    "name": "Pure Elegance Hand-Tied Bouquet",
    "hindi": "सफेद व गुलाबी गुलदस्ता",
    "category": "bouquet",
    "price": 1499,
    "unit": "deluxe bouquet (9 blooms)",
    "img": "images/products/PicsArt_02-24-05.38.41.jpg",
    "colors": [
      "#fce4ec",
      "#ad1457"
    ],
    "desc": "Statement handmade bouquet with layered wrapping, personalized note tag, and ribbon."
  },
  {
    "id": "vintage-rose-bouquet",
    "name": "Vintage Garden Bouquet",
    "hindi": "विंटेज गुलदस्ता",
    "category": "bouquet",
    "price": 1399,
    "unit": "medium bouquet (8 blooms)",
    "img": "images/products/PicsArt_02-24-05.46.34.jpg",
    "colors": [
      "#d87d6f",
      "#4a3f35"
    ],
    "desc": "Warm sunset tones and soft neutrals hand-arranged for anniversaries and birthdays."
  },
  {
    "id": "sunshine-celebration-bouquet",
    "name": "Sunshine Golden Bouquet",
    "hindi": "धूप गुलदस्ता",
    "category": "bouquet",
    "price": 1599,
    "unit": "grand bouquet (10 blooms)",
    "img": "images/products/PicsArt_06-11-02.58.42.jpg",
    "colors": [
      "#f5b81c",
      "#d94f7b"
    ],
    "desc": "Cheery sunflowers, poppies, and filler paper florals in premium craft wrapping paper."
  },
  {
    "id": "blossom-dream-bouquet",
    "name": "Blossom Dream Floral Wrap",
    "hindi": "स्वप्न पुष्पगुच्छ",
    "category": "bouquet",
    "price": 1199,
    "unit": "hand-tied bouquet",
    "img": "images/products/PicsArt_08-02-11.37.26.jpg",
    "colors": [
      "#e38ba8",
      "#5b3a1a"
    ],
    "desc": "Chic minimalist paper arrangement wrapped in matte eco-paper and jute twine."
  },
  {
    "id": "royal-artisan-bouquet",
    "name": "Artisan Luxe Paper Bouquet",
    "hindi": "शाही गुलदस्ता",
    "category": "bouquet",
    "price": 1899,
    "unit": "luxury bouquet (12 blooms)",
    "img": "images/products/PicsArt_08-19-01.20.47.jpg",
    "colors": [
      "#b3123f",
      "#4d3ea2"
    ],
    "desc": "Our premier handcrafted arrangement featuring roses, orchids, and custom textured fillers."
  },
  {
    "id": "warm-harmony-bouquet",
    "name": "Warm Harmony Bouquet",
    "hindi": "हार्मनी गुलदस्ता",
    "category": "bouquet",
    "price": 1249,
    "unit": "hand-tied bouquet",
    "img": "images/products/PicsArt_08-19-01.21.45.jpg",
    "colors": [
      "#e57373",
      "#ffd54f"
    ],
    "desc": "Thoughtfully balanced palette of pinks, corals, and soft paper greens."
  },
  {
    "id": "meadow-walk-bouquet",
    "name": "Meadow Walk Floral Cone",
    "hindi": "उपवन गुलदस्ता",
    "category": "bouquet",
    "price": 1099,
    "unit": "cone bouquet (6 blooms)",
    "img": "images/products/PicsArt_09-03-10.40.24.jpg",
    "colors": [
      "#f48fb1",
      "#81c784"
    ],
    "desc": "Compact paper bouquet wrapped in Korean floral cone paper, perfect for congratulations."
  },
  {
    "id": "serenity-white-bouquet",
    "name": "Serenity Pure White Bouquet",
    "hindi": "शांति पुष्पगुच्छ",
    "category": "bouquet",
    "price": 1349,
    "unit": "hand-tied bouquet",
    "img": "images/products/PicsArt_09-03-10.42.39.jpg",
    "colors": [
      "#ffffff",
      "#c9973b"
    ],
    "desc": "Everlasting white and ivory paper florals symbolizing hope, grace, and heartfelt purity."
  },
  {
    "id": "midnight-elegance-bouquet",
    "name": "Midnight Luxe Dark Wrap",
    "hindi": "मिडनाइट गुलदस्ता",
    "category": "bouquet",
    "price": 1449,
    "unit": "designer bouquet",
    "img": "images/products/PicsArt_09-03-10.45.25.jpg",
    "colors": [
      "#e91e63",
      "#212121"
    ],
    "desc": "Contrasting delicate blooms set against premium midnight black wrapping paper."
  },
  {
    "id": "ruby-heart-bouquet",
    "name": "Ruby Heart Velvet Bouquet",
    "hindi": "रूबी हार्ट गुलदस्ता",
    "category": "bouquet",
    "price": 1699,
    "unit": "grand rose bouquet",
    "img": "images/products/PicsArt_11-08-11.57.45.jpg",
    "colors": [
      "#d32f2f",
      "#ffebee"
    ],
    "desc": "All-red paper rose collection lovingly tied with satin ribbon for romantic gestures."
  },
  {
    "id": "sweet-tribute-bouquet",
    "name": "Sweet Tribute Garden Bouquet",
    "hindi": "स्नेह गुलदस्ता",
    "category": "bouquet",
    "price": 1399,
    "unit": "hand-tied bouquet",
    "img": "images/products/PicsArt_11-08-11.58.35.jpg",
    "colors": [
      "#f06292",
      "#aed581"
    ],
    "desc": "Artisan paper flowers in a soft pastel symphony, guaranteed to never wilt."
  },
  {
    "id": "forever-love-bouquet",
    "name": "Forever Love Bouquet",
    "hindi": "सदाबहार प्रेम गुलदस्ता",
    "category": "bouquet",
    "price": 1799,
    "unit": "deluxe arrangement",
    "img": "images/products/PicsArt_11-08-11.59.23.jpg",
    "colors": [
      "#c2185b",
      "#ffd54f"
    ],
    "desc": "Our most gifted handcrafted bouquet with handwritten greeting card included."
  },
  {
    "id": "rustic-twilight-bouquet",
    "name": "Rustic Twilight Bouquet",
    "hindi": "ट्वाइलाइट गुलदस्ता",
    "category": "bouquet",
    "price": 1149,
    "unit": "kraft paper wrap",
    "img": "images/products/PicsArt_12-28-10.06.04.jpg",
    "colors": [
      "#d7ccc8",
      "#5d4037"
    ],
    "desc": "Earthy kraft wrap with warm textured paper blooms for cozy home and workspace vibes."
  },
  {
    "id": "golden-sunset-bouquet",
    "name": "Golden Sunset Bouquet",
    "hindi": "गोल्डन सनसेट गुलदस्ता",
    "category": "bouquet",
    "price": 1299,
    "unit": "hand-tied bouquet",
    "img": "images/products/PicsArt_12-28-10.07.48.jpg",
    "colors": [
      "#ffa000",
      "#bf360c"
    ],
    "desc": "Warm mustard, terracotta, and ochre paper petals tied with golden thread."
  },
  {
    "id": "celestial-charm-bouquet",
    "name": "Celestial Charm Bouquet",
    "hindi": "दिव्य गुलदस्ता",
    "category": "bouquet",
    "price": 1249,
    "unit": "hand-tied bouquet",
    "img": "images/products/PicsArt_08-02-11.35.19.jpg",
    "colors": [
      "#ba68c8",
      "#4a148c"
    ],
    "desc": "Soft tones, whimsical textures, and enduring beauty in every hand-sculpted paper petal."
  },
  {
    "id": "berry-crush-bouquet",
    "name": "Berry Crush Bouquet",
    "hindi": "बेरी क्रश गुलदस्ता",
    "category": "bouquet",
    "price": 1349,
    "unit": "handcrafted bouquet",
    "img": "images/products/PicsArt_04-29-10.41.25.jpg",
    "colors": [
      "#880e4f",
      "#33691e"
    ],
    "desc": "Rich raspberry, cranberry, and deep green paper accents tied with soft cotton ribbon."
  }
];

const CATEGORIES = [
  ["all", "All"],
  ["bouquet", "Bouquets"],
  ["rose", "Roses"],
  ["lily", "Lilies"],
  ["sunflower", "Sunflowers"],
  ["exotic", "Exotic & Botanicals"],
];

/* Custom Bouquet Options for the interactive Builder */
const CUSTOM_BOUQUET_OPTIONS = {
  sizes: [
    { id: "mini", name: "Petite Bloom (5 Flowers)", price: 699, stems: 5 },
    { id: "classic", name: "Classic Harmony (8 Flowers)", price: 1099, stems: 8, popular: true },
    { id: "luxe", name: "Grand Luxe (12 Flowers)", price: 1599, stems: 12 },
    { id: "royal", name: "Royal Treasure (16 Flowers)", price: 2199, stems: 16 }
  ],
  flowers: [
    { id: "red-roses", name: "Crimson Velvet Roses", color: "#c61a38" },
    { id: "blush-roses", name: "Blush Pink Roses", color: "#f08aa8" },
    { id: "sunflowers", name: "Golden Sunflowers", color: "#f5b81c" },
    { id: "white-lilies", name: "Pearl White Lilies", color: "#ffffff" },
    { id: "blue-orchids", name: "Royal Blue Orchids", color: "#3d4fb5" },
    { id: "magenta-peonies", name: "Magenta Peonies", color: "#ad1769" }
  ],
  wraps: [
    { id: "korean-pink", name: "Korean Frosted Pastel Pink", desc: "Soft translucent matte paper with blush ribbon" },
    { id: "kraft-rustic", name: "Artisan Rustic Kraft & Twine", desc: "Eco-friendly vintage brown paper with jute rope" },
    { id: "midnight-gold", name: "Midnight Black & Golden Satin", desc: "Sophisticated dark matte wrap with gold trim" },
    { id: "cream-neutral", name: "Minimalist Cream & Silk", desc: "Warm off-white wrap with silk bow" }
  ],
  extras: [
    { id: "note", name: "Handwritten Greeting Card", price: 0, checked: true },
    { id: "lights", name: "Fairy LED Twinkle Lights", price: 99 },
    { id: "fragrance", name: "Infused Floral Fragrance Mist", price: 49 },
    { id: "gift-box", name: "Hardcover Premium Keepsake Box", price: 249 }
  ]
};

/* 'Every flower has a language' */
const FLOWER_LANGUAGE = [
  ["Rose", "Love & devotion"],
  ["Lily", "Purity & renewal"],
  ["Sunflower", "Joy & loyalty"],
  ["Marigold", "Auspicious beginnings"],
  ["Jasmine", "Grace & affection"],
  ["Lotus", "Peace & new life"],
];

const OCCASIONS = [
  ["Weddings", "Handmade varmalas, bridal paper bouquets and keepsake décor."],
  ["Birthdays & Anniversaries", "Custom forever bouquets with a handwritten wax-sealed note."],
  ["Pooja & Festivals", "Everlasting marigold, lotus and pooja florals."],
  ["Corporate & Gifting", "Long-lasting aesthetic desk flowers and executive hampers."],
];

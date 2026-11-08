/* ============================================================
   PAPER BLOSSOM — EDIT THIS FILE
   ============================================================ */

const SITE = {
  brand: "Paper Blossom",
  tagline: "Flowers, hand-arranged with love",
  whatsappNumber: "918850818776",
  phoneDisplay: "8850818776",
  email: "paperblossom14@gmail.com",
  handledBy: "RUJUTA UTEKAR",
  instagramUrl: "https://www.instagram.com/paperblossom.14",
  instagramHandle: "@paperblossom.14",
  currency: "₹",
  // Shown to customers on the order form
  deliveryNote: "We confirm delivery slot & payment on WhatsApp.",
};

/* ------------------------------------------------------------
   CATALOGUE
   These are SAMPLE items. Replace with the real flowers from the
   Instagram page:
     1. Save each photo into the /images folder (e.g. images/red-rose.jpg)
     2. Set  img: "images/red-rose.jpg"  on that item
   If img is empty, a drawn flower is shown instead.
   category: "rose" | "lily" | "sunflower" | "traditional" | "bouquet" | "exotic"
   colors: [petal colour, centre colour] — only used for the drawn fallback
   ------------------------------------------------------------ */
const PRODUCTS = [
  { id: "red-rose", name: "Crimson Rose", hindi: "गुलाब", category: "rose", price: 399, unit: "bunch of 10", img: "images/logo.jpg", colors: ["#b3123f", "#f4c542"], desc: "Deep velvet roses, long stems. A classic for love & celebration." },
  { id: "pink-rose", name: "Blush Rose", hindi: "गुलाबी गुलाब", category: "rose", price: 429, unit: "bunch of 10", img: "", colors: ["#f08aa8", "#f9e07a"], desc: "Soft pink roses that say thank you, softly." },
  { id: "white-lily", name: "Pearl Lily", hindi: "कुमुद", category: "lily", price: 549, unit: "5 stems", img: "", colors: ["#fff4f0", "#e9a53a"], desc: "Fragrant white lilies — elegant for weddings and gifting." },
  { id: "pink-lily", name: "Rose Lily", hindi: "गुलाबी कुमुद", category: "lily", price: 599, unit: "5 stems", img: "", colors: ["#e86c9a", "#f7d56b"], desc: "Oriental pink lilies with a rich, lingering scent." },
  { id: "sunflower", name: "Surya Sunflower", hindi: "सूरजमुखी", category: "sunflower", price: 349, unit: "5 stems", img: "", colors: ["#f7b500", "#5b3a1a"], desc: "Big, golden, happy. Instant brightness for any room." },
  { id: "mini-sun", name: "Mini Sunflower Bunch", hindi: "छोटा सूरजमुखी", category: "sunflower", price: 299, unit: "bunch of 8", img: "", colors: ["#ff9f1c", "#6b3f17"], desc: "Cheerful small sunflowers, perfect for desks and gifts." },
  { id: "marigold", name: "Genda Marigold Garland", hindi: "गेंदा", category: "traditional", price: 199, unit: "per metre", img: "", colors: ["#ff8a00", "#c25a00"], desc: "Fresh marigold toran for pooja, festivals and doorways." },
  { id: "jasmine", name: "Mogra Gajra", hindi: "मोगरा", category: "traditional", price: 149, unit: "per gajra", img: "", colors: ["#fffaf0", "#f1d98a"], desc: "Sweet-scented jasmine gajra, made fresh to order." },
  { id: "lotus", name: "Pink Lotus", hindi: "कमल", category: "traditional", price: 99, unit: "per flower", img: "", colors: ["#f27aa6", "#f9d64a"], desc: "Sacred lotus for pooja and decoration." },
  { id: "orchid", name: "Purple Orchid", hindi: "ऑर्किड", category: "exotic", price: 699, unit: "5 stems", img: "", colors: ["#9b4dca", "#f6e27a"], desc: "Long-lasting orchids with a graceful arch." },
  { id: "tulip", name: "Spring Tulip", hindi: "ट्यूलिप", category: "exotic", price: 649, unit: "bunch of 10", img: "", colors: ["#ff6b6b", "#3a2a1a"], desc: "Cup-shaped tulips in a bright mixed palette." },
  { id: "bouquet-love", name: "Love Letter Bouquet", hindi: "प्रेम पुष्पगुच्छ", category: "bouquet", price: 1199, unit: "1 bouquet", img: "", colors: ["#c2185b", "#f8d66d"], desc: "Roses & lilies hand-tied with wrapping and a note card." },
  { id: "bouquet-sun", name: "Sunshine Bouquet", hindi: "धूप पुष्पगुच्छ", category: "bouquet", price: 999, unit: "1 bouquet", img: "", colors: ["#ffb300", "#5b3a1a"], desc: "Sunflowers with seasonal fillers. Birthdays, get-well, just-because." },
  { id: "bouquet-garden", name: "Garden Mix Bouquet", hindi: "बाग पुष्पगुच्छ", category: "bouquet", price: 1399, unit: "1 bouquet", img: "", colors: ["#2a9d8f", "#f4e285"], desc: "Seasonal mixed flowers in fresh greens and blues." },
];

const CATEGORIES = [
  ["all", "All"], ["rose", "Roses"], ["lily", "Lilies"], ["sunflower", "Sunflowers"],
  ["traditional", "Pooja & Traditional"], ["bouquet", "Bouquets"], ["exotic", "Exotic"],
];

/* "Every flower has a language" — inspired by La Fiorellaia */
const FLOWER_LANGUAGE = [
  ["Rose", "Love & devotion"], ["Lily", "Purity & renewal"], ["Sunflower", "Joy & loyalty"],
  ["Marigold", "Auspicious beginnings"], ["Jasmine", "Grace & affection"], ["Lotus", "Peace & new life"],
];

const OCCASIONS = [
  ["Weddings", "Mandap, stage, varmala and car décor."],
  ["Pooja & Festivals", "Torans, garlands and fresh thali flowers."],
  ["Birthdays & Anniversaries", "Bouquets with a handwritten note."],
  ["Corporate & Gifting", "Bulk orders, lobby décor, event flowers."],
];

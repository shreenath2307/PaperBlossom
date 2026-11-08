/* ============================================================
   PAPER BLOSSOM — PRODUCTS & CONFIG
   Handcrafted Paper Flowers & Artisan Bouquets
   ============================================================ */

const SITE = {
  brand: "Paper Blossom",
  tagline: "Handcrafted paper flowers, arranged with love",
  whatsappNumber: "918850818776",
  phoneDisplay: "8850818776",
  email: "paperblossom.14@gmail.com",
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
    "id": "gerbera-daisy",
    "name": "Gerbera Daisy",
    "hindi": "जरबेरा",
    "category": "exotic",
    "price": 249,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_04-29-10.52.49.jpg",
    "colors": [
      "#c61a38",
      "#382414"
    ],
    "desc": "Vibrant handcrafted Gerbera Daisy paper bloom with detailed layered petals and flexible stem."
  },
  {
    "id": "hibiscus",
    "name": "Hibiscus",
    "hindi": "गुड़हल",
    "category": "exotic",
    "price": 349,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_06-09-10.22.57.jpg",
    "colors": [
      "#c2185b",
      "#2d4420"
    ],
    "desc": "Exquisite handcrafted paper hibiscus with sculpted crimson petals and prominent golden-tipped stamen."
  },
  {
    "id": "wine-rose",
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
    "desc": "Deep wine-red paper rose with velvety textured petals, wired stem and naturalistic sepals."
  },
  {
    "id": "red-tulip",
    "name": "RED TULIP",
    "hindi": "लाल ट्यूलिप",
    "category": "exotic",
    "price": 279,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_11-08-11.59.44.jpg",
    "colors": [
      "#d32f2f",
      "#388e3c"
    ],
    "desc": "Handcrafted graceful red tulip with smooth curved paper petals on a slender green stem."
  },
  {
    "id": "golden-champa",
    "name": "Golden Champa",
    "hindi": "सोनचाफा",
    "category": "exotic",
    "price": 299,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_04-19-09.43.39.jpg",
    "colors": [
      "#f5b81c",
      "#5c4033"
    ],
    "desc": "Artisan handcrafted Golden Champa (Sonchafa) bloom in warm golden paper with delicate curved petals."
  },
  {
    "id": "sunlight-sunflower",
    "name": "Sunlight sunflower",
    "hindi": "सूरजमुखी",
    "category": "sunflower",
    "price": 299,
    "unit": "1 large bloom stem",
    "img": "images/products/PicsArt_12-30-11.14.54.jpg",
    "colors": [
      "#fbc02d",
      "#3e2723"
    ],
    "desc": "Vibrant yellow paper sunflower with an intricate textured dark center disc and lifelike foliage."
  },
  {
    "id": "yellow-rose",
    "name": "Yellow rose",
    "hindi": "पीला गुलाब",
    "category": "rose",
    "price": 269,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_06-11-03.07.50.jpg",
    "colors": [
      "#fdd835",
      "#558b2f"
    ],
    "desc": "Radiant yellow handcrafted paper rose symbolizing warmth, friendship, and bright joy."
  },
  {
    "id": "daisy",
    "name": "Daisy",
    "hindi": "डेज़ी",
    "category": "sunflower",
    "price": 249,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_04-11-12.55.34.jpg",
    "colors": [
      "#ffffff",
      "#fbc02d"
    ],
    "desc": "Charming handcrafted paper daisy with neat white petals radiating from a sunny yellow center."
  },
  {
    "id": "anthurium",
    "name": "Anthurium (Plain Colour)",
    "hindi": "एन्थ्यूरियम",
    "category": "anthurium",
    "price": 320,
    "unit": "per flower (MOQ 5 pcs)",
    "moq": 5,
    "variantType": "Plain colour",
    "img": "images/products/PicsArt_04-29-10.38.14.jpg",
    "colors": [
      "#f06292",
      "#ffb74d"
    ],
    "desc": "High quality extra fine crepe paper with shiny coating on flower. Flower size: approx. 4.5″ × 3.5″, stem height: approx. 12″. Lightweight and forever vibrant. Available in all colours as per your preference.",
    "bulkPricing": [
      { "qty": "1–9 pcs", "price": 320, "min": 1, "max": 9 },
      { "qty": "10–49 pcs", "price": 300, "min": 10, "max": 49 },
      { "qty": "50+ pcs", "price": 280, "min": 50 }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper with shiny coating on flower",
      "size": "Approx. 4.5″ × 3.5″",
      "stem": "Approx. 12″",
      "moq": "5 piece (same colour and size)",
      "colors": "Available in all colours as per your preference"
    }
  },
  {
    "id": "red-anthurium",
    "name": "Red Anthurium (Plain Colour)",
    "hindi": "लाल एन्थ्यूरियम",
    "category": "anthurium",
    "price": 320,
    "unit": "per flower (MOQ 5 pcs)",
    "moq": 5,
    "variantType": "Plain colour",
    "img": "images/products/PicsArt_04-29-10.39.26.jpg",
    "colors": [
      "#d32f2f",
      "#ffeb3b"
    ],
    "desc": "Vibrant red plain colour anthurium in extra fine crepe paper with shiny coating. Flower: approx. 4.5″ × 3.5″, stem: approx. 12″. Available in all colours as per your preference.",
    "bulkPricing": [
      { "qty": "1–9 pcs", "price": 320, "min": 1, "max": 9 },
      { "qty": "10–49 pcs", "price": 300, "min": 10, "max": 49 },
      { "qty": "50+ pcs", "price": 280, "min": 50 }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper with shiny coating on flower",
      "size": "Approx. 4.5″ × 3.5″",
      "stem": "Approx. 12″",
      "moq": "5 piece (same colour and size)",
      "colors": "Available in all colours as per your preference"
    }
  },
  {
    "id": "pinkish-white-anthurium",
    "name": "pinkish white Anthurium (Shaded / Two tone)",
    "hindi": "गुलाबी सफेद एन्थ्यूरियम",
    "category": "anthurium",
    "price": 360,
    "unit": "per flower (MOQ 5 pcs)",
    "moq": 5,
    "variantType": "Shaded/Two tone",
    "img": "images/products/PicsArt_04-29-10.40.43.jpg",
    "colors": [
      "#fce4ec",
      "#ec407a"
    ],
    "desc": "Shaded two-tone paper anthurium blending soft pink and white with shiny coating. Flower: approx. 4.5″ × 3.5″, stem: approx. 12″. Available in all colours as per your preference.",
    "bulkPricing": [
      { "qty": "1–9 pcs", "price": 360, "min": 1, "max": 9 },
      { "qty": "10–49 pcs", "price": 340, "min": 10, "max": 49 },
      { "qty": "50+ pcs", "price": 320, "min": 50 }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper with shiny coating on flower",
      "size": "Approx. 4.5″ × 3.5″",
      "stem": "Approx. 12″",
      "moq": "5 piece (same colour and size)",
      "colors": "Available in all colours as per your preference"
    }
  },
  {
    "id": "butterfly-pea",
    "name": "Butterfly Pea",
    "hindi": "अपराजिता",
    "category": "exotic",
    "price": 289,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_04-25-08.22.26.jpg",
    "colors": [
      "#1a237e",
      "#3949ab"
    ],
    "desc": "Traditional Aparajita (Butterfly Pea) paper bloom in striking deep royal blue with sculpted petal form."
  },
  {
    "id": "magenta-velvet-rose",
    "name": "Magenta Velvet Rose",
    "hindi": "मजेंटा गुलाब",
    "category": "rose",
    "price": 299,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_05-09-10.47.05.jpg",
    "colors": [
      "#ad1457",
      "#2e7d32"
    ],
    "desc": "Rich magenta velvet paper rose with lush contoured petals handcrafted from premium crepe."
  },
  {
    "id": "fiery-rose",
    "name": "Fiery rose",
    "hindi": "अग्नि गुलाब",
    "category": "rose",
    "price": 289,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_06-11-03.04.02.jpg",
    "colors": [
      "#e65100",
      "#ff6f00"
    ],
    "desc": "Striking fiery reddish-orange paper rose blooming with energetic warm hues."
  },
  {
    "id": "apricot-wild-rose",
    "name": "Apricot Wild Rose",
    "hindi": "खुबानी गुलाब",
    "category": "rose",
    "price": 279,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_06-11-03.06.53.jpg",
    "colors": [
      "#ff8a65",
      "#4e342e"
    ],
    "desc": "Gentle peach-apricot paper rose with organic fluted petals and realistic leaves."
  },
  {
    "id": "white-lily",
    "name": "white lily",
    "hindi": "सफेद लिली",
    "category": "lily",
    "price": 329,
    "unit": "1 handcrafted stem",
    "img": "images/products/PicsArt_03-01-11.09.37.jpg",
    "colors": [
      "#ffffff",
      "#fbc02d"
    ],
    "desc": "Pure white handcrafted paper lily with delicate petals and elegant stamens."
  },
  {
    "id": "parijat",
    "name": "Parijat",
    "hindi": "पारिजात",
    "category": "exotic",
    "price": 349,
    "unit": "handcrafted arrangement",
    "img": "images/products/PicsArt_02-24-05.46.34.jpg",
    "colors": [
      "#ffffff",
      "#ff6f00"
    ],
    "desc": "Sacred night-blooming coral jasmine (Parijat / Harsingar) paper floral arrangement with distinctive orange stems and white petals."
  },
  {
    "id": "colorful-roses",
    "name": "Colorful roses",
    "hindi": "बहुरंगी गुलाब",
    "category": "rose",
    "price": 799,
    "unit": "handcrafted bunch",
    "img": "images/products/PicsArt_06-11-02.58.42.jpg",
    "colors": [
      "#e91e63",
      "#fdd835"
    ],
    "desc": "Joyful cluster of handcrafted paper roses in assorted lively colors tied with ribbon."
  },
  {
    "id": "cream-hibiscus",
    "name": "Cream Hibiscus",
    "hindi": "क्रीम गुड़हल",
    "category": "exotic",
    "price": 349,
    "unit": "1 handcrafted bloom",
    "img": "images/products/PicsArt_08-02-11.37.26.jpg",
    "colors": [
      "#fff8e1",
      "#8d6e63"
    ],
    "desc": "Subtle and graceful cream-colored handcrafted hibiscus paper flower with finely ruffled edges."
  },
  {
    "id": "mogra",
    "name": "Mogra",
    "hindi": "मोगरा",
    "category": "exotic",
    "price": 299,
    "unit": "handcrafted arrangement",
    "img": "images/products/PicsArt_09-03-10.40.24.jpg",
    "colors": [
      "#ffffff",
      "#388e3c"
    ],
    "desc": "Classic fragrant Indian jasmine (Mogra) blossom handcrafted with delicate white crepe paper petals."
  }
];

const CATEGORIES = [
  ["all", "All"],
  ["rose", "Roses"],
  ["anthurium", "Anthuriums"],
  ["lily", "Lilies"],
  ["sunflower", "Sunflowers & Daisies"],
  ["exotic", "Exotic & Traditional"]
];

/* Anthurium collection details & bulk pricing matrix */
const ANTHURIUM_INFO = {
  material: "High quality extra fine crepe paper with shiny coating on flower",
  size: "Approx. 4.5″ × 3.5″",
  stem: "Approx. 12″",
  description: "These lightweight, long-lasting flowers are perfect for home decor, gifting, event decoration, or DIY arrangements. Unlike real flowers, they stay fresh and vibrant forever.",
  colorsNote: "Available in all colours as per your preference",
  plain: {
    title: "Anthurium – Plain Colour",
    price: 320,
    moq: "5 piece (same colour and size)",
    tiers: [
      { qty: "1–9 pcs", rate: "₹320/- per pc", price: 320 },
      { qty: "10–49 pcs", rate: "₹300/- per pc", price: 300 },
      { qty: "50 or more pcs", rate: "₹280/- per pc", price: 280 }
    ]
  },
  shaded: {
    title: "Anthurium (Shaded / Two tone)",
    price: 360,
    moq: "5 piece (same colour and size)",
    tiers: [
      { qty: "1–9 pcs", rate: "₹360/- per pc", price: 360 },
      { qty: "10–49 pcs", rate: "₹340/- per pc", price: 340 },
      { qty: "50 or more pcs", rate: "₹320/- per pc", price: 320 }
    ]
  }
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

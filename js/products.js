/* ============================================================
   PAPER BLOSSOM — PRODUCTS & CONFIG
   Handcrafted Paper Flowers & Artisan Bouquets
   ============================================================ */

const SITE = {
  "brand": "Paper Blossom",
  "tagline": "Handcrafted paper flowers, arranged with love",
  "whatsappNumber": "918850818776",
  "phoneDisplay": "8850818776",
  "email": "paperblossom.14@gmail.com",
  "handledBy": "RUJUTA UTEKAR",
  "instagramUrl": "https://www.instagram.com/paperblossom.14",
  "instagramHandle": "@paperblossom.14",
  "currency": "₹",
  "deliveryNote": "All flowers are lovingly handmade with high-grade crepe paper. Forever in bloom!"
};

const PRODUCTS = [
  {
    "id": "crimson-rose",
    "name": "Crimson Velvet Rose",
    "hindi": "लाल गुलाब",
    "category": "rose",
    "price": 200,
    "unit": "per flower (MOQ 10)",
    "moq": 10,
    "img": "images/logo.jpg",
    "colors": [
      "#b3123f",
      "#f4c542"
    ],
    "desc": "Signature handmade crimson paper rose sculpted with Italian crepe paper. Available as single flower or with wired stem and leaf.",
    "options": [
      {
        "name": "Plain Colour Rose (Only Flower)",
        "price": 200,
        "unit": "flower",
        "moq": 10,
        "id": "plain-colour-rose-only-flower"
      },
      {
        "name": "Rose with One Leaf (Stem ~10″)",
        "price": 400,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-stem-10"
      },
      {
        "name": "Rose with One Leaf (U-Shape Stem)",
        "price": 400,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-u-shape-stem"
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 2″ (Only flower) / Approx. 3.5″ (With leaf)",
      "stem": "Approx. 2″ (Only flower) / Approx. 10″ (With leaf)",
      "moq": "Only flower: MOQ 10 pcs | With leaf: MOQ 5 pcs (same colour & size)",
      "colors": "Available in all colours as per preference",
      "uses": "Home decor, pooja setups, gifting, event decoration, and DIY arrangements"
    }
  },
  {
    "id": "gerbera-daisy",
    "name": "Gerbera",
    "hindi": "जरबेरा",
    "category": "exotic",
    "price": 400,
    "unit": "per flower (MOQ 4)",
    "moq": 4,
    "img": "images/products/PicsArt_04-29-10.52.49.jpg",
    "colors": [
      "#c61a38",
      "#382414"
    ],
    "desc": "Handcrafted Gerbera flowers with delicate petals and a realistic look. Lightweight and long-lasting.",
    "options": [
      {
        "name": "Plain Colour Gerbera",
        "price": 400,
        "unit": "flower",
        "moq": 4,
        "id": "plain-colour-gerbera",
        "bulkPricing": [
          { "qty": "4–9 pcs", "price": 400, "min": 4, "max": 9 },
          { "qty": "10–49 pcs", "price": 380, "min": 10, "max": 49 },
          { "qty": "50+ pcs", "price": 350, "min": 50 }
        ]
      },
      {
        "name": "Shaded Gerbera",
        "price": 450,
        "unit": "flower",
        "moq": 4,
        "id": "shaded-gerbera",
        "bulkPricing": [
          { "qty": "4–9 pcs", "price": 450, "min": 4, "max": 9 },
          { "qty": "10–49 pcs", "price": 430, "min": 10, "max": 49 },
          { "qty": "50+ pcs", "price": 400, "min": 50 }
        ]
      },
      {
        "name": "Gerbera Leaf (Olive / Leaf green)",
        "price": 200,
        "unit": "leaf",
        "moq": 4,
        "id": "gerbera-leaf-olive-leaf-green"
      }
    ],
    "bulkPricing": [
      {
        "qty": "4–9 pcs",
        "price": 400,
        "min": 4,
        "max": 9
      },
      {
        "qty": "10–49 pcs",
        "price": 380,
        "min": 10,
        "max": 49
      },
      {
        "qty": "50+ pcs",
        "price": 350,
        "min": 50
      }
    ],
    "specs": {
      "material": "High-quality extra fine crepe paper",
      "diameter": "Approx. 4″",
      "stem": "Approx. 10″–11″ (Leaf: approx. 6″–7″)",
      "moq": "4 flowers / leaves (same colour and size)",
      "colors": "Available in all colours as per your preference (Leaf: Leaf green / olive green)",
      "uses": "Home decor, gifting, event decoration, and floral arrangements"
    }
  },
  {
    "id": "hibiscus",
    "name": "Hibiscus Flower",
    "hindi": "गुड़हल",
    "category": "exotic",
    "price": 160,
    "unit": "per flower (MOQ 5)",
    "moq": 5,
    "img": "images/products/PicsArt_06-09-10.22.57.jpg",
    "colors": [
      "#c2185b",
      "#2d4420"
    ],
    "desc": "Exquisite handcrafted paper hibiscus with sculpted crimson petals and prominent golden-tipped stamen.",
    "options": [
      {
        "name": "Plain Colour (Red / Light Peach / others)",
        "price": 160,
        "unit": "flower",
        "id": "plain-colour-red-light-peach-others"
      },
      {
        "name": "Yellow-Orange Light Shaded",
        "price": 200,
        "unit": "flower",
        "id": "yellow-orange-light-shaded"
      },
      {
        "name": "Yellow-Reddish Pink / Dark Orange Shaded",
        "price": 300,
        "unit": "flower",
        "id": "yellow-reddish-pink-dark-orange-shaded"
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 4″",
      "stem": "Approx. 2″",
      "moq": "5 flowers (same colour and size)",
      "colors": "Red, Light Peach, Yellow-Orange shaded, Yellow-Reddish pink, Yellow-Dark orange",
      "uses": "Home decor, pooja setups, gifting, and table vases"
    }
  },
  {
    "id": "wine-rose",
    "name": "Royal Wine Rose",
    "hindi": "वाइन लाल गुलाब",
    "category": "rose",
    "price": 400,
    "unit": "per flower (MOQ 5)",
    "moq": 5,
    "img": "images/products/PicsArt_06-11-03.07.24.jpg",
    "colors": [
      "#88102a",
      "#415222"
    ],
    "desc": "Deep wine-red paper rose with velvety textured petals, wired stem and naturalistic sepals.",
    "options": [
      {
        "name": "Rose with One Leaf (Plain Colour)",
        "price": 400,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-plain-colour"
      },
      {
        "name": "Rose with One Leaf (Shaded)",
        "price": 700,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-shaded"
      },
      {
        "name": "Rose (Only Flower - Plain)",
        "price": 200,
        "unit": "flower",
        "moq": 10,
        "id": "rose-only-flower-plain"
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 3.5″ (With leaf) / Approx. 2″ (Only flower)",
      "stem": "Approx. 10″ (With leaf) / Approx. 2″ (Only flower)",
      "moq": "5 flowers with leaf (same colour & size)",
      "colors": "Available in all colours as per preference",
      "uses": "Home decor, luxury gifting, and floral arrangements"
    }
  },
  {
    "id": "red-tulip",
    "name": "RED TULIP (with 2 leaves)",
    "hindi": "लाल ट्यूलिप",
    "category": "exotic",
    "price": 500,
    "unit": "per stick (MOQ 5)",
    "moq": 5,
    "img": "images/products/PicsArt_11-08-11.59.44.jpg",
    "colors": [
      "#d32f2f",
      "#388e3c"
    ],
    "desc": "Graceful handcrafted red tulip with 2 sculpted leaves on a slender stem. Available in plain, shaded, or striped finish.",
    "options": [
      {
        "name": "Plain Colour Tulip (with 2 leaves)",
        "price": 500,
        "unit": "flower",
        "id": "plain-colour-tulip-with-2-leaves"
      },
      {
        "name": "Shaded Tulip (with 2 leaves)",
        "price": 700,
        "unit": "flower",
        "id": "shaded-tulip-with-2-leaves"
      },
      {
        "name": "Striped Tulip (with 2 leaves)",
        "price": 700,
        "unit": "flower",
        "id": "striped-tulip-with-2-leaves"
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "size": "Approx. 2″ × 2″",
      "stem": "Approx. 11″–12″",
      "moq": "5 sticks (same colour & same size)",
      "colors": "Plain, Shaded, Striped (custom colours on request)",
      "uses": "Vases, spring arrangements, and heartfelt gifting"
    }
  },
  {
    "id": "golden-champa",
    "name": "Sonchafa / Champa",
    "hindi": "सोनचाफा",
    "category": "exotic",
    "price": 60,
    "unit": "per piece (MOQ 20)",
    "moq": 20,
    "img": "images/products/PicsArt_04-19-09.43.39.jpg",
    "colors": [
      "#f5b81c",
      "#5c4033"
    ],
    "desc": "Crafted with high-quality crepe paper for a realistic and elegant look. Lightweight and long-lasting.",
    "bulkPricing": [
      {
        "qty": "1–99 pcs",
        "price": 60,
        "min": 1,
        "max": 99
      },
      {
        "qty": "100+ pcs",
        "price": 55,
        "min": 100
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "size": "Flower height: approx. 2″",
      "moq": "20 piece",
      "uses": "Pooja setups, urli decoration, home decor, gifting, and DIY arrangements"
    }
  },
  {
    "id": "sunlight-sunflower",
    "name": "Sunflower",
    "hindi": "सूरजमुखी",
    "category": "sunflower",
    "price": 1000,
    "unit": "per flower (MOQ 2)",
    "moq": 2,
    "img": "images/products/PicsArt_12-30-11.14.54.jpg",
    "colors": [
      "#fbc02d",
      "#3e2723"
    ],
    "desc": "Vibrant yellow paper sunflower with an intricate textured dark center disc and lifelike foliage.",
    "options": [
      {
        "name": "Sunflower (Only Flower)",
        "price": 1000,
        "unit": "flower",
        "id": "sunflower-only-flower"
      },
      {
        "name": "Sunflower with 3 Leaves",
        "price": 1800,
        "unit": "stick",
        "id": "sunflower-with-3-leaves"
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 5″–5.5″",
      "stem": "Approx. 12″",
      "moq": "2 sticks / flowers",
      "uses": "Statement decor, home styling, gifting, and photo props"
    }
  },
  {
    "id": "yellow-rose",
    "name": "Yellow Rose",
    "hindi": "पीला गुलाब",
    "category": "rose",
    "price": 400,
    "unit": "per flower (MOQ 5)",
    "moq": 5,
    "img": "images/products/PicsArt_06-11-03.07.50.jpg",
    "colors": [
      "#fdd835",
      "#558b2f"
    ],
    "desc": "Radiant yellow handcrafted paper rose symbolizing warmth, friendship, and bright joy.",
    "options": [
      {
        "name": "Rose with One Leaf (Plain)",
        "price": 400,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-plain"
      },
      {
        "name": "Rose with One Leaf (Shaded)",
        "price": 700,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-shaded"
      },
      {
        "name": "Rose with One Leaf (U-Shape)",
        "price": 400,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-u-shape"
      },
      {
        "name": "Rose (Only Flower - Plain)",
        "price": 200,
        "unit": "flower",
        "moq": 10,
        "id": "rose-only-flower-plain"
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 2.25″–3.5″",
      "stem": "Approx. 10″",
      "moq": "5 flowers with leaf (same colour & size)",
      "colors": "Available in all colours as per preference",
      "uses": "Home decor, gifting, friendship bouquets, and arrangements"
    }
  },
  {
    "id": "daisy",
    "name": "Daisy",
    "hindi": "डेज़ी",
    "category": "sunflower",
    "price": 125,
    "unit": "per flower (MOQ 10)",
    "moq": 10,
    "img": "images/products/PicsArt_04-11-12.55.34.jpg",
    "colors": [
      "#ffffff",
      "#fbc02d"
    ],
    "desc": "Handcrafted Daisy flowers with delicate white petals and bright yellow center.",
    "bulkPricing": [
      {
        "qty": "10–19 pcs",
        "price": 125,
        "min": 10,
        "max": 19
      },
      {
        "qty": "20–50 pcs",
        "price": 115,
        "min": 20,
        "max": 50
      },
      {
        "qty": "50+ pcs",
        "price": 105,
        "min": 51
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 2″",
      "stem": "Approx. 6″",
      "moq": "10 flowers (same colour and size)",
      "colors": "White with sunny yellow center",
      "uses": "Home decor, gifting, event decoration, and DIY arrangements"
    }
  },
  {
    "id": "anthurium",
    "name": "Anthurium (Plain Colour)",
    "hindi": "एन्थ्यूरियम",
    "category": "anthurium",
    "price": 320,
    "unit": "per flower (MOQ 5)",
    "moq": 5,
    "variantType": "Plain colour",
    "img": "images/products/PicsArt_04-29-10.38.14.jpg",
    "colors": [
      "#f06292",
      "#ffb74d"
    ],
    "desc": "High quality extra fine crepe paper with shiny coating on flower. Flower: approx. 4.5″ × 3.5″, stem: approx. 12″.",
    "bulkPricing": [
      {
        "qty": "1–9 pcs",
        "price": 320,
        "min": 1,
        "max": 9
      },
      {
        "qty": "10–49 pcs",
        "price": 300,
        "min": 10,
        "max": 49
      },
      {
        "qty": "50+ pcs",
        "price": 280,
        "min": 50
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper with shiny coating on flower",
      "size": "Approx. 4.5″ × 3.5″",
      "stem": "Approx. 12″",
      "moq": "5 piece (same colour and size)",
      "colors": "Available in all colours as per your preference",
      "uses": "Home decor, gifting, event decoration, or DIY arrangements"
    }
  },
  {
    "id": "red-anthurium",
    "name": "Red Anthurium (Plain Colour)",
    "hindi": "लाल एन्थ्यूरियम",
    "category": "anthurium",
    "price": 320,
    "unit": "per flower (MOQ 5)",
    "moq": 5,
    "variantType": "Plain colour",
    "img": "images/products/PicsArt_04-29-10.39.26.jpg",
    "colors": [
      "#d32f2f",
      "#ffeb3b"
    ],
    "desc": "Vivid red plain colour anthurium in extra fine crepe paper with shiny coating. Flower: approx. 4.5″ × 3.5″, stem: approx. 12″.",
    "bulkPricing": [
      {
        "qty": "1–9 pcs",
        "price": 320,
        "min": 1,
        "max": 9
      },
      {
        "qty": "10–49 pcs",
        "price": 300,
        "min": 10,
        "max": 49
      },
      {
        "qty": "50+ pcs",
        "price": 280,
        "min": 50
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper with shiny coating on flower",
      "size": "Approx. 4.5″ × 3.5″",
      "stem": "Approx. 12″",
      "moq": "5 piece (same colour and size)",
      "colors": "Available in all colours as per your preference",
      "uses": "Home decor, gifting, event decoration, or DIY arrangements"
    }
  },
  {
    "id": "pinkish-white-anthurium",
    "name": "pinkish white Anthurium (Shaded / Two tone)",
    "hindi": "गुलाबी सफेद एन्थ्यूरियम",
    "category": "anthurium",
    "price": 360,
    "unit": "per flower (MOQ 5)",
    "moq": 5,
    "variantType": "Shaded/Two tone",
    "img": "images/products/PicsArt_04-29-10.40.43.jpg",
    "colors": [
      "#fce4ec",
      "#ec407a"
    ],
    "desc": "Shaded two-tone paper anthurium blending soft pink and white with shiny coating. Flower: approx. 4.5″ × 3.5″, stem: approx. 12″.",
    "bulkPricing": [
      {
        "qty": "1–9 pcs",
        "price": 360,
        "min": 1,
        "max": 9
      },
      {
        "qty": "10–49 pcs",
        "price": 340,
        "min": 10,
        "max": 49
      },
      {
        "qty": "50+ pcs",
        "price": 320,
        "min": 50
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper with shiny coating on flower",
      "size": "Approx. 4.5″ × 3.5″",
      "stem": "Approx. 12″",
      "moq": "5 piece (same colour and size)",
      "colors": "Available in all colours as per your preference",
      "uses": "Home decor, gifting, event decoration, or DIY arrangements"
    }
  },
  {
    "id": "butterfly-pea",
    "name": "Asian pigeonwings / Aparajita",
    "hindi": "अपराजिता",
    "category": "exotic",
    "price": 50,
    "unit": "per flower (MOQ 10)",
    "moq": 10,
    "img": "images/products/PicsArt_04-25-08.22.26.jpg",
    "colors": [
      "#1a237e",
      "#3949ab"
    ],
    "desc": "Crafted with high-quality crepe paper for a realistic and elegant look. Lightweight and long-lasting.",
    "bulkPricing": [
      {
        "qty": "1–99 pcs",
        "price": 50,
        "min": 1,
        "max": 99
      },
      {
        "qty": "100+ pcs",
        "price": 45,
        "min": 100
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "size": "Approx. 1.5″ × 2.25″",
      "moq": "10 flowers",
      "colors": "Violet, Light purple, White",
      "uses": "Home decor, pooja setups, gifting, event decoration, and DIY arrangements"
    }
  },
  {
    "id": "magenta-velvet-rose",
    "name": "Magenta Velvet Rose",
    "hindi": "मजेंटा गुलाब",
    "category": "rose",
    "price": 200,
    "unit": "per flower (MOQ 10)",
    "moq": 10,
    "img": "images/products/PicsArt_05-09-10.47.05.jpg",
    "colors": [
      "#ad1457",
      "#2e7d32"
    ],
    "desc": "Rich magenta velvet paper rose with lush contoured petals handcrafted from premium Italian crepe.",
    "options": [
      {
        "name": "Plain Colour Rose (Only Flower)",
        "price": 200,
        "unit": "flower",
        "moq": 10,
        "id": "plain-colour-rose-only-flower"
      },
      {
        "name": "Rose with One Leaf (Plain Colour)",
        "price": 400,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-plain-colour"
      },
      {
        "name": "Rose with One Leaf (Shaded)",
        "price": 700,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-shaded"
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 2″ (Only flower) / Approx. 3.5″ (With leaf)",
      "stem": "Approx. 2″ (Only flower) / Approx. 10″ (With leaf)",
      "moq": "Only flower: MOQ 10 pcs | With leaf: MOQ 5 pcs",
      "colors": "Available in all colours as per preference",
      "uses": "Home decor, gifting, and arrangements"
    }
  },
  {
    "id": "fiery-rose",
    "name": "Fiery Rose",
    "hindi": "अग्नि गुलाब",
    "category": "rose",
    "price": 700,
    "unit": "per flower (MOQ 5)",
    "moq": 5,
    "img": "images/products/PicsArt_06-11-03.04.02.jpg",
    "colors": [
      "#e65100",
      "#ff6f00"
    ],
    "desc": "Striking fiery reddish-orange shaded paper rose blooming with energetic warm hues.",
    "options": [
      {
        "name": "Rose with One Leaf (Shaded)",
        "price": 700,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-shaded"
      },
      {
        "name": "Rose with One Leaf (Plain)",
        "price": 400,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-plain"
      },
      {
        "name": "Rose (Only Flower - Plain)",
        "price": 200,
        "unit": "flower",
        "moq": 10,
        "id": "rose-only-flower-plain"
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 3.5″",
      "stem": "Approx. 10″",
      "moq": "5 flowers with leaf (same colour & size)",
      "colors": "Shaded warm orange-red / Plain colours",
      "uses": "Home decor, gifting, and vibrant arrangements"
    }
  },
  {
    "id": "apricot-wild-rose",
    "name": "Apricot Wild Rose",
    "hindi": "खुबानी गुलाब",
    "category": "rose",
    "price": 400,
    "unit": "per flower (MOQ 5)",
    "moq": 5,
    "img": "images/products/PicsArt_06-11-03.06.53.jpg",
    "colors": [
      "#ff8a65",
      "#4e342e"
    ],
    "desc": "Gentle peach-apricot paper rose with organic fluted petals and realistic leaves.",
    "options": [
      {
        "name": "Rose with One Leaf (Plain)",
        "price": 400,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-plain"
      },
      {
        "name": "Rose with One Leaf (Shaded)",
        "price": 700,
        "unit": "flower",
        "moq": 5,
        "id": "rose-with-one-leaf-shaded"
      },
      {
        "name": "Rose (Only Flower - Plain)",
        "price": 200,
        "unit": "flower",
        "moq": 10,
        "id": "rose-only-flower-plain"
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 3.5″",
      "stem": "Approx. 10″",
      "moq": "5 flowers with leaf (same colour & size)",
      "colors": "Available in all colours as per preference",
      "uses": "Home decor, gifting, and arrangements"
    }
  },
  {
    "id": "white-lily",
    "name": "Lily",
    "hindi": "सफेद लिली",
    "category": "lily",
    "price": 500,
    "unit": "per flower (MOQ 3)",
    "moq": 3,
    "img": "images/products/PicsArt_03-01-11.09.37.jpg",
    "colors": [
      "#ffffff",
      "#fbc02d"
    ],
    "desc": "Pure white handcrafted paper lily with delicate sculpted petals. Available as single flower or full stick with bud and leaves.",
    "options": [
      {
        "name": "Lily Flower",
        "price": 500,
        "unit": "flower",
        "moq": 3,
        "id": "lily-flower"
      },
      {
        "name": "Lily with Bud and Leaves",
        "price": 900,
        "unit": "stick",
        "moq": 3,
        "id": "lily-with-bud-and-leaves"
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 5″",
      "stem": "Stem: approx. 8″ | Full stick: approx. 12″",
      "moq": "3 sticks (same colour and size)",
      "uses": "Statement vases, luxury gifting, and altar decor"
    }
  },
  {
    "id": "parijat",
    "name": "Parijat / Prajakta",
    "hindi": "पारिजात",
    "category": "exotic",
    "price": 24,
    "unit": "per flower (MOQ 50)",
    "moq": 50,
    "img": "images/products/PicsArt_02-24-05.46.34.jpg",
    "colors": [
      "#ffffff",
      "#ff6f00"
    ],
    "desc": "Crafted with crepe paper for a realistic and elegant look. Lightweight and long-lasting.",
    "bulkPricing": [
      {
        "qty": "50–99 pcs",
        "price": 24,
        "min": 50,
        "max": 99
      },
      {
        "qty": "100+ pcs",
        "price": 20,
        "min": 100
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 1″",
      "moq": "50 flowers",
      "uses": "Pooja setups, urli decoration, home decor, gifting, and DIY arrangements"
    }
  },
  {
    "id": "star-jasmine",
    "name": "Common Jasmine (Star Jasmine)",
    "hindi": "चमेली / कुंद",
    "category": "exotic",
    "price": 24,
    "unit": "per flower (MOQ 50)",
    "moq": 50,
    "img": "images/products/PicsArt_09-03-10.42.39.jpg",
    "colors": [
      "#ffffff",
      "#388e3c"
    ],
    "desc": "Crafted with crepe paper for a realistic and elegant look. Lightweight and long-lasting.",
    "bulkPricing": [
      {
        "qty": "50–99 pcs",
        "price": 24,
        "min": 50,
        "max": 99
      },
      {
        "qty": "100+ pcs",
        "price": 20,
        "min": 100
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 1″",
      "moq": "50 flowers",
      "uses": "Home decor, pooja setups, gifting, event decoration, and DIY arrangements"
    }
  },
  {
    "id": "colorful-roses",
    "name": "Colorful Roses",
    "hindi": "बहुरंगी गुलाब",
    "category": "rose",
    "price": 799,
    "unit": "handcrafted bunch",
    "img": "images/products/PicsArt_06-11-02.58.42.jpg",
    "colors": [
      "#e91e63",
      "#fdd835"
    ],
    "desc": "Joyful cluster of handcrafted paper roses in assorted lively colors tied with ribbon.",
    "specs": {
      "material": "High quality extra fine crepe paper",
      "uses": "Bouquets, celebration gifting, and tabletop accents"
    }
  },
  {
    "id": "cream-hibiscus",
    "name": "Cream Hibiscus",
    "hindi": "क्रीम गुड़हल",
    "category": "exotic",
    "price": 160,
    "unit": "per flower (MOQ 5)",
    "moq": 5,
    "img": "images/products/PicsArt_08-02-11.37.26.jpg",
    "colors": [
      "#fff8e1",
      "#8d6e63"
    ],
    "desc": "Subtle and graceful cream-colored handcrafted hibiscus paper flower with finely ruffled edges.",
    "options": [
      {
        "name": "Plain Colour (Cream / Light Peach)",
        "price": 160,
        "unit": "flower",
        "id": "plain-colour-cream-light-peach"
      },
      {
        "name": "Yellow-Orange Light Shaded",
        "price": 200,
        "unit": "flower",
        "id": "yellow-orange-light-shaded"
      },
      {
        "name": "Yellow-Reddish Pink / Dark Orange Shaded",
        "price": 300,
        "unit": "flower",
        "id": "yellow-reddish-pink-dark-orange-shaded"
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 4″",
      "stem": "Approx. 2″",
      "moq": "5 flowers (same colour and size)",
      "colors": "Cream, Light Peach, Yellow-Orange, Shaded",
      "uses": "Home decor, pooja setups, gifting, and table vases"
    }
  },
  {
    "id": "mogra",
    "name": "Mogara (Mogra)",
    "hindi": "मोगरा",
    "category": "exotic",
    "price": 60,
    "unit": "per piece (MOQ 25)",
    "moq": 25,
    "img": "images/products/PicsArt_09-03-10.40.24.jpg",
    "colors": [
      "#ffffff",
      "#388e3c"
    ],
    "desc": "Crafted with crepe paper for a realistic and elegant look. Lightweight and long-lasting.",
    "bulkPricing": [
      {
        "qty": "25–49 pcs",
        "price": 60,
        "min": 25,
        "max": 49
      },
      {
        "qty": "50–99 pcs",
        "price": 55,
        "min": 50,
        "max": 99
      },
      {
        "qty": "100+ pcs",
        "price": 50,
        "min": 100
      }
    ],
    "specs": {
      "material": "High quality extra fine crepe paper",
      "diameter": "Approx. 1″",
      "moq": "25 piece",
      "uses": "Home decor, pooja setups, gifting, event decoration, and DIY arrangements"
    }
  }
];

const CATEGORIES = [
  [
    "all",
    "All"
  ],
  [
    "rose",
    "Roses"
  ],
  [
    "anthurium",
    "Anthuriums"
  ],
  [
    "lily",
    "Lilies"
  ],
  [
    "sunflower",
    "Sunflowers & Daisies"
  ],
  [
    "exotic",
    "Exotic & Traditional"
  ]
];

const ANTHURIUM_INFO = {
  "material": "High quality extra fine crepe paper with shiny coating on flower",
  "size": "Approx. 4.5″ × 3.5″",
  "stem": "Approx. 12″",
  "description": "These lightweight, long-lasting flowers are perfect for home decor, gifting, event decoration, or DIY arrangements. Unlike real flowers, they stay fresh and vibrant forever.",
  "colorsNote": "Available in all colours as per your preference",
  "plain": {
    "title": "Anthurium – Plain Colour",
    "price": 320,
    "moq": "5 piece (same colour and size)",
    "tiers": [
      {
        "qty": "1–9 pcs",
        "rate": "₹320/- per pc",
        "price": 320
      },
      {
        "qty": "10–49 pcs",
        "rate": "₹300/- per pc",
        "price": 300
      },
      {
        "qty": "50 or more pcs",
        "rate": "₹280/- per pc",
        "price": 280
      }
    ]
  },
  "shaded": {
    "title": "Anthurium (Shaded / Two tone)",
    "price": 360,
    "moq": "5 piece (same colour and size)",
    "tiers": [
      {
        "qty": "1–9 pcs",
        "rate": "₹360/- per pc",
        "price": 360
      },
      {
        "qty": "10–49 pcs",
        "rate": "₹340/- per pc",
        "price": 340
      },
      {
        "qty": "50 or more pcs",
        "rate": "₹320/- per pc",
        "price": 320
      }
    ]
  }
};

const FLOWER_LANGUAGE = [
  [
    "Rose",
    "Love & devotion"
  ],
  [
    "Lily",
    "Purity & renewal"
  ],
  [
    "Sunflower",
    "Joy & loyalty"
  ],
  [
    "Marigold",
    "Auspicious beginnings"
  ],
  [
    "Jasmine",
    "Grace & affection"
  ],
  [
    "Lotus",
    "Peace & new life"
  ]
];

const OCCASIONS = [
  [
    "Weddings",
    "Handmade varmalas, bridal paper bouquets and keepsake décor."
  ],
  [
    "Birthdays & Anniversaries",
    "Custom forever bouquets with a handwritten wax-sealed note."
  ],
  [
    "Pooja & Festivals",
    "Everlasting marigold, lotus and pooja florals."
  ],
  [
    "Corporate & Gifting",
    "Long-lasting aesthetic desk flowers and executive hampers."
  ]
];

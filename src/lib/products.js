import { discountedAmount, formatPrice } from "./offers";
import image7 from "../assets/img7 (4).jpeg";
import image8 from "../assets/img 8.jpeg";
import image9 from "../assets/img 9.jpeg";
import image10 from "../assets/img 10.jpeg";
import image11 from "../assets/img 11.jpeg";
import image12 from "../assets/img 12.jpeg";
import image13 from "../assets/img 13.jpeg";
import image14 from "../assets/img 14.jpeg";
import image15 from "../assets/img 15.jpeg";
import image16 from "../assets/img 16.jpeg";
import image17 from "../assets/img17.jpeg";
import image18 from "../assets/img18.png";
import image19 from "../assets/img19.png";
import image20 from "../assets/img20.png";
import image21 from "../assets/img 21.png";
import image22 from "../assets/img 22.png";
import image23 from "../assets/img 23.png";
import image24 from "../assets/img 24.png";

export const COLOR_OPTIONS = [
  { name: "Black", hex: "#1c1c1c" },
  { name: "Brown", hex: "#6b3f1f" },
  { name: "Beige", hex: "#d4b896" },
  { name: "Pink", hex: "#c97b8a" },
];

const OLD_PRICE = 3000;

const withMedia = (product) => {
  const salePrice = discountedAmount(OLD_PRICE, product.discount);

  return {
    ...product,
    images: [product.image],
    oldPrice: formatPrice(OLD_PRICE),
    price: formatPrice(salePrice),
    priceValue: salePrice,
    oldPriceValue: OLD_PRICE,
    inStock: true,
    colors: COLOR_OPTIONS.map((color) => ({
      ...color,
      image: product.image,
    })),
  };
};

const rawProducts = [
  {
    id: 1,
    sku: "ZC-HB-01",
    name: "The Daily Edit",
    category: "Handbags",
    badge: "Bestseller",
    discount: 50,
    image: image7,
    material: "Structured vegan leather",
    dimensions: "28 × 20 × 11 cm",
    strap: "Detachable shoulder strap",
    description:
      "A clean everyday handbag with a structured body, enough room for a wallet, phone, and compact pouch. Built for workdays in Lahore and weekends out.",
  },
  {
    id: 2,
    sku: "ZC-SH-02",
    name: "Mila Shoulder Bag",
    category: "Shoulder Bags",
    badge: "New arrival",
    discount: 30,
    image: image8,
    material: "Soft grain finish",
    dimensions: "26 × 18 × 9 cm",
    strap: "Fixed shoulder strap",
    description:
      "A slim shoulder bag with a soft drop and easy open-close. Sits close to the body and keeps daily essentials in one place.",
  },
  {
    id: 3,
    sku: "ZC-HB-03",
    name: "Noir Structure",
    category: "Handbags",
    badge: "Editor's pick",
    discount: 20,
    image: image9,
    material: "Firm vegan leather",
    dimensions: "30 × 22 × 12 cm",
    strap: "Top handles plus optional strap",
    description:
      "A structured silhouette with a defined frame. The kind of piece that looks finished with both western wear and a simple black outfit.",
  },
  {
    id: 4,
    sku: "ZC-SH-04",
    name: "The Weekender",
    category: "Shoulder Bags",
    badge: "Limited",
    discount: 20,
    image: image10,
    material: "Durable grain leather-look",
    dimensions: "32 × 21 × 13 cm",
    strap: "Wide shoulder strap",
    description:
      "A roomier shoulder bag for longer days. Holds a small water bottle, makeup pouch, and a light wrap without losing shape.",
  },
  {
    id: 5,
    sku: "ZC-TT-05",
    name: "Avery Mini Tote",
    category: "Tote Bags",
    badge: "New arrival",
    discount: 50,
    image: image11,
    material: "Smooth vegan leather",
    dimensions: "27 × 23 × 10 cm",
    strap: "Twin top handles",
    description:
      "A compact tote with an open, easy carry. Light enough for campus or the office, structured enough to stand on a table.",
  },
  {
    id: 6,
    sku: "ZC-CB-06",
    name: "Luna Crossbody",
    category: "Crossbody Bags",
    badge: "Bestseller",
    discount: 30,
    image: image12,
    material: "Soft compact finish",
    dimensions: "22 × 16 × 7 cm",
    strap: "Adjustable crossbody strap",
    description:
      "Hands-free and city-ready. The Luna sits at the hip, keeps your phone and cards close, and works for markets, travel, and evenings.",
  },
  {
    id: 7,
    sku: "ZC-CV-07",
    name: "Atlas Canvas Carryall",
    category: "Canvas Bags",
    badge: "Exclusive",
    discount: 20,
    image: image13,
    material: "Heavy canvas with contrast trim",
    dimensions: "36 × 28 × 14 cm",
    strap: "Shoulder straps with inner pocket",
    description:
      "A sturdy canvas carryall for errands and day trips. Tough enough for daily use, still tailored enough for the Zeccora look.",
  },
  {
    id: 8,
    sku: "ZC-SH-08",
    name: "Cleo Shoulder Bag",
    category: "Shoulder Bags",
    badge: "New arrival",
    discount: 20,
    image: image14,
    material: "Soft structured finish",
    dimensions: "25 × 17 × 8 cm",
    strap: "Chain-and-leather shoulder strap",
    description:
      "A slightly dressier shoulder bag with a compact body. Easy to take from daytime plans into dinner without changing bags.",
  },
  {
    id: 9,
    sku: "ZC-HB-09",
    name: "Aurelia Smart Bag",
    category: "Handbags",
    badge: "Premium",
    discount: 50,
    image: image15,
    material: "Premium vegan leather",
    dimensions: "29 × 21 × 11 cm",
    strap: "Detachable strap and top handle",
    description:
      "A refined handbag with organised inner space. Designed for women who carry a little more — keys, compact, notebook — and still want a clean line.",
  },
  {
    id: 10,
    sku: "ZC-CV-10",
    name: "Monarch Classic Tote",
    category: "Canvas Bags",
    badge: "New arrival",
    discount: 30,
    image: image16,
    material: "Canvas with leather-look handles",
    dimensions: "38 × 30 × 15 cm",
    strap: "Long handles for shoulder carry",
    description:
      "A classic canvas tote with a generous opening. Packs a laptop sleeve, water bottle, and a day's worth of bits without looking bulky.",
  },
  {
    id: 11,
    sku: "ZC-CB-11",
    name: "Elara Mini Bag",
    category: "Crossbody Bags",
    badge: "Bestseller",
    discount: 20,
    image: image17,
    material: "Compact vegan leather",
    dimensions: "20 × 14 × 6 cm",
    strap: "Adjustable slim strap",
    description:
      "A mini crossbody for evenings and travel days. Holds the essentials and leaves your hands free.",
  },
  {
    id: 12,
    sku: "ZC-CL-12",
    name: "Marais Evening Bag",
    category: "Clutches",
    badge: "Exclusive",
    discount: 20,
    image: image18,
    material: "Smooth evening finish",
    dimensions: "24 × 14 × 5 cm",
    strap: "Optional slim chain",
    description:
      "An evening clutch with a clean face and just enough room for phone, lipstick, and cards. Made for dinners, weddings, and events.",
  },
  {
    id: 13,
    sku: "ZC-HB-13",
    name: "Serena Quilted Bag",
    category: "Handbags",
    badge: "Limited",
    discount: 50,
    image: image19,
    material: "Quilted vegan leather",
    dimensions: "27 × 19 × 10 cm",
    strap: "Chain shoulder strap",
    description:
      "Soft quilting with a structured base. A statement everyday bag that still sits neatly under the arm.",
  },
  {
    id: 14,
    sku: "ZC-CV-14",
    name: "Ophelia Canvas Tote",
    category: "Canvas Bags",
    badge: "Premium",
    discount: 30,
    image: image20,
    material: "Washed canvas",
    dimensions: "35 × 29 × 13 cm",
    strap: "Twin handles",
    description:
      "A lighter canvas tote with a relaxed drape. Easy to fold into a larger bag, then open out for shopping or university days.",
  },
  {
    id: 15,
    sku: "ZC-CB-15",
    name: "Soleil Chain Bag",
    category: "Crossbody Bags",
    badge: "New arrival",
    discount: 20,
    image: image21,
    material: "Polished vegan leather",
    dimensions: "23 × 15 × 7 cm",
    strap: "Decorative chain strap",
    description:
      "A chain crossbody with a bright, finished look. Small, secure, and made to lift a simple outfit.",
  },
  {
    id: 16,
    sku: "ZC-HB-16",
    name: "Camille Structured Bag",
    category: "Handbags",
    badge: "Editor's pick",
    discount: 20,
    image: image22,
    material: "Firm structured finish",
    dimensions: "31 × 22 × 12 cm",
    strap: "Top handle and long strap",
    description:
      "A defined handbag with a stable base. Stands on its own, photographs cleanly, and carries a full daily kit.",
  },
  {
    id: 17,
    sku: "ZC-SH-17",
    name: "Arden Everyday Bag",
    category: "Shoulder Bags",
    badge: "Bestseller",
    discount: 30,
    image: image23,
    material: "Everyday grain finish",
    dimensions: "27 × 18 × 9 cm",
    strap: "Comfort shoulder strap",
    description:
      "The easy daily shoulder bag. Soft enough to wear for hours, structured enough to keep its shape in the car or office.",
  },
  {
    id: 18,
    sku: "ZC-CL-18",
    name: "Vivienne Luxe Bag",
    category: "Clutches",
    badge: "Exclusive",
    discount: 20,
    image: image24,
    material: "Luxe evening finish",
    dimensions: "25 × 15 × 6 cm",
    strap: "Detachable evening chain",
    description:
      "A luxe clutch for formal plans. Compact, polished, and finished to match Zeccora’s gold-and-cream world.",
  },
];

export const products = rawProducts.map(withMedia);

export const findProduct = (productId) =>
  products.find((item) => item.id === Number(productId));

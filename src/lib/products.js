import { discountedAmount, formatPrice } from "./offers";
import image7 from "../assets/img7 (4).jpeg";
import image8 from "../assets/img8.jpeg";
import image10 from "../assets/img 10.jpeg";
import image18 from "../assets/img18.png";
import bag1 from "../assets/bag1.png";
import bag2 from "../assets/bag2.png";
import bag3 from "../assets/bag3.png";
import bag4 from "../assets/bag4.png";

export const COLOR_OPTIONS = [
  { name: "Black", hex: "#1c1c1c" },
  { name: "Brown", hex: "#6b3f1f" },
  { name: "Beige", hex: "#d4b896" },
  { name: "Pink", hex: "#c97b8a" },
];

const OLD_PRICE = 3143;

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
    discount: 30,
    image: image7,
    material: "Structured vegan leather",
    dimensions: "28 × 20 × 11 cm",
    strap: "Detachable shoulder strap",
    description:
      "A clean everyday handbag with a structured body, enough room for a wallet, phone, and compact pouch. Built for workdays in Lahore and weekends out.",
  },
 {
    id: 17,
    sku: "ZC-SH-17",
    name: "Arden Everyday Bag",
    category: "Shoulder Bags",
    badge: "Bestseller",
    discount: 30,
    image: bag4,
    material: "Everyday grain finish",
    dimensions: "27 × 18 × 9 cm",
    strap: "Comfort shoulder strap",
    description:
      "The easy daily shoulder bag. Soft enough to wear for hours, structured enough to keep its shape in the car or office.",
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
    id: 13,
    sku: "ZC-HB-13",
    name: "Serena Quilted Bag",
    category: "Handbags",
    badge: "Limited",
    discount: 30,
    image: bag1,
    material: "Quilted vegan leather",
    dimensions: "27 × 19 × 10 cm",
    strap: "Chain shoulder strap",
    description:
      "Soft quilting with a structured base. A statement everyday bag that still sits neatly under the arm.",
  },
  {
    id: 4,
    sku: "ZC-SH-04",
    name: "The Weekender",
    category: "Shoulder Bags",
    badge: "Limited",
    discount: 30,
    image: image10,
    material: "Durable grain leather-look",
    dimensions: "32 × 21 × 13 cm",
    strap: "Wide shoulder strap",
    description:
      "A roomier shoulder bag for longer days. Holds a small water bottle, makeup pouch, and a light wrap without losing shape.",
  },
  
    {
    id: 15,
    sku: "ZC-CB-15",
    name: "Soleil Chain Bag",
    category: "Crossbody Bags",
    badge: "New arrival",
    discount: 30,
    image: bag2,
    material: "Polished vegan leather",
    dimensions: "23 × 15 × 7 cm",
    strap: "Decorative chain strap",
    description:
      "A chain crossbody with a bright, finished look. Small, secure, and made to lift a simple outfit.",
  },
 
  {
    id: 12,
    sku: "ZC-CL-12",
    name: "Marais Evening Bag",
    category: "Clutches",
    badge: "Exclusive",
    discount: 30,
    image: image18,
    material: "Smooth evening finish",
    dimensions: "24 × 14 × 5 cm",
    strap: "Optional slim chain",
    description:
      "An evening clutch with a clean face and just enough room for phone, lipstick, and cards. Made for dinners, weddings, and events.",
  },
 
  

  {
    id: 16,
    sku: "ZC-HB-16",
    name: "Camille Structured Bag",
    category: "Handbags",
    badge: "Editor's pick",
    discount: 30,
    image: bag3,
    material: "Firm structured finish",
    dimensions: "31 × 22 × 12 cm",
    strap: "Top handle and long strap",
    description:
      "A defined handbag with a stable base. Stands on its own, photographs cleanly, and carries a full daily kit.",
  },
 
 
];

export const products = rawProducts.map(withMedia);

export const findProduct = (productId) =>
  products.find((item) => item.id === Number(productId));

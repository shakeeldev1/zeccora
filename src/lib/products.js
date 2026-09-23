import { discountedAmount, formatPrice } from "./offers";
import image9 from "../assets/img 9.jpeg";
import image7 from "../assets/img7 (4).jpeg";
import image11 from "../assets/img 11.jpeg";
import image8 from "../assets/img8.jpeg";
import image10 from "../assets/img 10.jpeg";
import image13 from "../assets/img 13.jpeg";
import image16 from "../assets/img 16.jpeg";
import image18 from "../assets/img18.png";
import image21 from "../assets/img 21.png";
import image22 from "../assets/img 22.png";
import image17 from "../assets/img17.jpeg";
import img07 from "../assets/img07.png";
import img007 from "../assets/img007.png";
import img010 from "../assets/img010.png";
import img0010 from "../assets/img0010.png";
import bag1 from "../assets/bag1.png";
import bag2 from "../assets/bag2.png";
import bag3 from "../assets/bag3.png";
import bag4 from "../assets/bag4.png";
import bag04 from "../assets/bag04.png";
import white1 from "../assets/white1.png";
import white2 from "../assets/white2.png";
import white from "../assets/white.jpeg";

export const COLOR_OPTIONS = [
  { name: "Black", hex: "#1c1c1c" },
  { name: "Brown", hex: "#6b3f1f" },
  { name: "Beige", hex: "#d4b896" },
  { name: "Pink", hex: "#c97b8a" },
];

const OLD_PRICE = 3143;

const productGalleries = new Map([
  [image9, [image7, img07, img007]],
  [bag4, [white1, white2, white]],
  [image8, [image8, image16, bag2]],
  [image10, [image10, img010, img0010]],
  [bag1, [bag1, image9, image11]],
  [bag2, [bag2, image13, image16]],
  [image18, [image18, image21, image22]],
  [bag3, [bag4, bag04, image17]],
]);

const withMedia = (product) => {
  const salePrice = discountedAmount(OLD_PRICE, product.discount);
  const images = productGalleries.get(product.image) || [product.image];

  return {
    ...product,
    images,
    oldPrice: formatPrice(OLD_PRICE),
    price: formatPrice(salePrice),
    priceValue: salePrice,
    oldPriceValue: OLD_PRICE,
    inStock: true,
    colors: COLOR_OPTIONS.map((color, colorIndex) => {
      const colorImages = images;

      return {
        ...color,
        image: colorImages[0],
        images: colorImages,
      };
    }),
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
    image: image9,
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



];

export const products = rawProducts.map(withMedia);

export const findProduct = (productId) =>
  products.find((item) => item.id === Number(productId));

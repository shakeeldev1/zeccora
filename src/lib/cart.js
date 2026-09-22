export const CART_STORAGE_KEY = "zeccora-cart";
const LEGACY_CART_KEY = "urban-bazaar-cart";

export const cartLineKey = (item) => `${item.id}::${item.color || "default"}`;

const parseCart = (value) => {
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const readCart = () => {
  const current = localStorage.getItem(CART_STORAGE_KEY);
  if (current) return parseCart(current);

  const legacy = localStorage.getItem(LEGACY_CART_KEY);
  if (legacy) {
    localStorage.setItem(CART_STORAGE_KEY, legacy);
    localStorage.removeItem(LEGACY_CART_KEY);
    return parseCart(legacy);
  }

  return [];
};

export const writeCart = (nextCart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextCart));
  window.dispatchEvent(new Event("cart-updated"));
};

export const addItemToCart = (product, quantity = 1) => {
  const savedCart = readCart();
  const lineKey = cartLineKey(product);
  const existingProduct = savedCart.find((item) => cartLineKey(item) === lineKey);
  const nextCart = existingProduct
    ? savedCart.map((item) =>
        cartLineKey(item) === lineKey
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    : [...savedCart, { ...product, quantity }];

  writeCart(nextCart);
  return nextCart;
};

export const clearCart = () => writeCart([]);

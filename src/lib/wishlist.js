import { useEffect, useState } from "react";

export const WISHLIST_STORAGE_KEY = "zeccora-wishlist";

export const readWishlist = () => {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

export const writeWishlist = (ids) => {
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event("wishlist-updated"));
};

export const toggleWishlistId = (id) => {
  const current = readWishlist();
  const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
  writeWishlist(next);
  return next;
};

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() => readWishlist());

  useEffect(() => {
    const sync = () => setWishlist(readWishlist());
    window.addEventListener("wishlist-updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("wishlist-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = (id) => setWishlist(toggleWishlistId(id));

  return { wishlist, toggle };
};

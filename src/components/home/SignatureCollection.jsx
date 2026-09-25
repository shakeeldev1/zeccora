import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products as catalogProducts } from "../../lib/products";
import { addItemToCart } from "../../lib/cart";
import { useWishlist } from "../../lib/wishlist";
import ProductCard from "../products/ProductCard";

const SignatureCollection = () => {
  const navigate = useNavigate();
  const { wishlist, toggle } = useWishlist();
  const [addedProduct, setAddedProduct] = useState(null);

  const visibleProducts = catalogProducts.slice(0, 8);

  return (
    <section className="bg-[#f7f2ec] pb-20 pt-8 text-[#1a120c] sm:pb-20 sm:pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 px-2 text-center sm:px-0">
          <p className="section-kicker">The Zeccora Collection</p>
          <h2 className="display-font mt-3 text-3xl sm:text-4xl md:text-5xl">Our Signature Collection</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6b5b4e]">
            Hand-selected premium products crafted for everyday luxury.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-2.5 gap-y-7 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              wishlist={wishlist}
              onToggleWishlist={toggle}
              added={addedProduct === product.id}
              onAddToCart={(item) => {
                addItemToCart({
                  ...item,
                  color: item.colors?.[0]?.name || "Black",
                  image: item.image,
                }, 1);
                window.dispatchEvent(new Event("cart-open"));
                setAddedProduct(item.id);
                window.setTimeout(() => setAddedProduct(null), 1600);
              }}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9F6324] transition hover:text-[#8a541c]"
          >
            View all products
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;

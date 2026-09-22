import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products as catalogProducts } from "../../lib/products";
import { addItemToCart } from "../../lib/cart";
import { useWishlist } from "../../lib/wishlist";
import ProductCard from "../products/ProductCard";

const SignatureCollection = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const { wishlist, toggle } = useWishlist();
  const [addedProduct, setAddedProduct] = useState(null);

  const filters = ["All", "Handbags", "Crossbody Bags", "Tote Bags", "Canvas Bags"];
  const filteredProducts =
    activeFilter === "All"
      ? catalogProducts
      : catalogProducts.filter((product) => product.category === activeFilter);
  const visibleProducts = filteredProducts.slice(0, 8);

  return (
    <section className="bg-[#f7f2ec] pb-16  text-[#1a120c] sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-kicker">The Zeccora Collection</p>
          <h2 className="display-font mt-3 text-3xl sm:text-5xl">Our Signature Collection</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6b5b4e]">
            Hand-selected premium products crafted for everyday luxury.
          </p>
        </div>

        <div className="chip-row mb-8 sm:mb-10 sm:flex-wrap sm:justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-3.5 py-2 text-xs capitalize transition sm:px-4 sm:text-sm ${
                activeFilter === filter ? "bg-[#9F6324] text-white" : "bg-white text-[#5c4c40] hover:text-[#9F6324]"
              }`}
            >
              {filter === "All" ? "All" : filter.replace(" Bags", "").toLowerCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
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

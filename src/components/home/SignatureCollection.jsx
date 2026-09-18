import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Check,
  Heart,
  ShoppingBag,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";

import image7 from "../../assets/img7 (4).jpeg";
import image8 from "../../assets/img 8.jpeg";
import image9 from "../../assets/img 9.jpeg";
import image10 from "../../assets/img 10.jpeg";
import image11 from "../../assets/img 11.jpeg";
import image13 from "../../assets/img 13.jpeg";
import image14 from "../../assets/img 14.jpeg";
import image15 from "../../assets/img 15.jpeg";
import image16 from "../../assets/img 16.jpeg";
import image17 from "../../assets/img17.jpeg";
import image18 from "../../assets/img18.png";
import image19 from "../../assets/img19.png";
import image20 from "../../assets/img20.png";
import image21 from "../../assets/img 21.png";
import image22 from "../../assets/img 22.png";
import image23 from "../../assets/img 23.png";
import image24 from "../../assets/img 24.png";

const SignatureCollection = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All Products");
  const [wishlist, setWishlist] = useState([]);
  const [addedProduct, setAddedProduct] = useState(null);

  const filters = [
    "All Products",
    "New Arrivals",
    "Best Sellers",
    "Limited Edition",
  ];

  const products = [
    {
      id: 1,
      name: "Elegant Premium Collection",
      image: image7,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "Best Sellers",
      badge: "Bestseller",
      discount: "-20%",
      reviews: 12,
    },
    {
      id: 2,
      name: "Luxury Everyday Essential",
      image: image8,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "New Arrivals",
      badge: "New",
      discount: "-15%",
      reviews: 28,
    },
    {
      id: 3,
      name: "Premium Modern Collection",
      image: image9,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "Best Sellers",
      badge: "Bestseller",
      discount: "-20%",
      reviews: 45,
    },
    {
      id: 4,
      name: "Exclusive Luxury Essential",
      image: image10,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "Limited Edition",
      badge: "Exclusive",
      discount: "-16%",
      reviews: 19,
    },
    {
      id: 5,
      name: "Signature Premium Product",
      image: image11,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "New Arrivals",
      badge: "New",
      discount: "-20%",
      reviews: 36,
    },
    {
      id: 7,
      name: "Premium Exclusive Product",
      image: image13,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "Limited Edition",
      badge: "Exclusive",
      discount: "-15%",
      reviews: 42,
    },
    {
      id: 8,
      name: "Modern Luxury Collection",
      image: image14,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "New Arrivals",
      badge: "New",
      discount: "-19%",
      reviews: 25,
    },
    {
      id: 9,
      name: "Ultimate Signature Collection",
      image: image15,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "Best Sellers",
      badge: "Bestseller",
      discount: "-18%",
      reviews: 50,
    },
    {
      id: 10,
      name: "Monarch Classic Tote",
      image: image16,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "New Arrivals",
      badge: "New",
      discount: "-27%",
      reviews: 24,
    },
    {
      id: 11,
      name: "Elara Mini Bag",
      image: image17,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "Best Sellers",
      badge: "Bestseller",
      discount: "-27%",
      reviews: 18,
    },
    {
      id: 12,
      name: "Marais Evening Bag",
      image: image18,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "Limited Edition",
      badge: "Exclusive",
      discount: "-27%",
      reviews: 22,
    },
    {
      id: 13,
      name: "Serena Quilted Bag",
      image: image19,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "New Arrivals",
      badge: "New",
      discount: "-27%",
      reviews: 16,
    },
    {
      id: 14,
      name: "Ophelia Top Handle",
      image: image20,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "Best Sellers",
      badge: "Bestseller",
      discount: "-27%",
      reviews: 29,
    },
    {
      id: 15,
      name: "Soleil Chain Bag",
      image: image21,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "Limited Edition",
      badge: "Exclusive",
      discount: "-27%",
      reviews: 14,
    },
    {
      id: 16,
      name: "Camille Structured Bag",
      image: image22,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "New Arrivals",
      badge: "New",
      discount: "-27%",
      reviews: 21,
    },
    {
      id: 17,
      name: "Arden Everyday Bag",
      image: image23,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "Best Sellers",
      badge: "Bestseller",
      discount: "-27%",
      reviews: 33,
    },
    {
      id: 18,
      name: "Vivienne Luxe Bag",
      image: image24,
      price: "2,200 PKR",
      oldPrice: "3,000 PKR",
      category: "Limited Edition",
      badge: "Exclusive",
      discount: "-27%",
      reviews: 27,
    },
  ];

  const stats = [
    { number: "150", symbol: "+", label: "Premium Products" },
    { number: "15K", symbol: "+", label: "Happy Customers" },
    { number: "12", symbol: "+", label: "Countries Served" },
    { number: "4.9", symbol: "", label: "Customer Rating" },
  ];

  const filteredProducts =
    activeFilter === "All Products"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const visibleProducts = filteredProducts.slice(0, 6);

  const toggleWishlist = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const savedCart = JSON.parse(
      localStorage.getItem("urban-bazaar-cart") || "[]"
    );
    const existingProduct = savedCart.find((item) => item.id === product.id);
    const nextCart = existingProduct
      ? savedCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...savedCart, { ...product, quantity: 1 }];

    localStorage.setItem("urban-bazaar-cart", JSON.stringify(nextCart));
    window.dispatchEvent(new Event("cart-updated"));
    window.dispatchEvent(new Event("cart-open"));
    setAddedProduct(product.id);
    window.setTimeout(() => setAddedProduct(null), 1600);
  };

  return (
    <section className="bg-[#f7f2ec] pb-14 pt-5 text-gray-900 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#9F6324]/20 bg-[#9F6324]/10 px-4 py-2 shadow-sm shadow-[#9F6324]/10">
            <Sparkles size={14} className="text-[#9F6324]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F6324]">
              Our Signature Collection
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-5xl">
            Our Signature <span className="text-[#9F6324]">Collection</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            Hand-selected premium products crafted for everyday luxury.
          </p>
        </div>

        {/* FILTERS */}
        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 sm:text-sm ${
                  isActive
                    ? "bg-[#9F6324] text-white shadow-lg shadow-[#9F6324]/30"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-[#9F6324]/50 hover:bg-[#9F6324]/5 hover:text-[#9F6324]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* PRODUCTS GRID (3 CARDS PER ROW WITH ULTRA-CLEAR IMAGES) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => {
            const isAdded = addedProduct === product.id;
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                onClick={() => navigate(`/products/${product.id}`)}
                className="group flex flex-col justify-between overflow-hidden rounded-[30px] border border-zinc-800/80 bg-gradient-to-br from-[#120805] via-[#1a0c07] to-[#000000] text-white shadow-[0_25px_55px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:border-[#9F6324]/70 hover:shadow-[0_30px_60px_rgba(159,99,36,0.18)]"
              >
                <div>
                  {/* High Clarity Image Container */}
                  <div className="relative aspect-[4/4] w-full overflow-hidden bg-zinc-950 ">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105 [image-rendering:crisp-edges]"
                    />

                    {/* Subtle Overlay Shadow */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60" />

                    {/* Badges */}
                    <div className="absolute left-6 top-6 flex gap-2">
                      <span className="rounded-full border border-white/10 bg-[#9F6324] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md backdrop-blur-sm">
                        {product.badge}
                      </span>
                      <span className="rounded-full border border-white/10 bg-red-600 px-3 py-1 text-[10px] font-bold tracking-widest text-white shadow-md backdrop-blur-sm">
                        {product.discount}
                      </span>
                    </div>

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleWishlist(e, product.id)}
                      className="absolute right-6 top-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#9F6324]"
                      aria-label="Add to Wishlist"
                    >
                      <Heart
                        size={18}
                        fill={isWishlisted ? "#9F6324" : "none"}
                        className={isWishlisted ? "text-[#9F6324]" : "text-white"}
                      />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="mb-3 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="fill-[#9F6324] text-[#9F6324]"
                        />
                      ))}
                      <span className="ml-1.5 text-xs font-medium text-gray-400">
                        ({product.reviews} Reviews)
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="line-clamp-2 min-h-[48px] text-base font-bold leading-6 text-white transition-colors duration-300 group-hover:text-[#9F6324]">
                      {product.name}
                    </h3>

                    {/* Price Tag */}
                    <div className="mt-4 flex items-baseline gap-3">
                      <span className="text-xl font-extrabold text-[#9F6324]">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={(e) => addToCart(e, product)}
                    className={`group/btn flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg ${
                      isAdded
                        ? "border-emerald-500 bg-emerald-600 text-white"
                        : "border-[#9F6324]/40 bg-[#9F6324]/10 text-[#FFFFC9] hover:border-[#9F6324] hover:bg-[#9F6324] hover:text-black"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check size={16} className="animate-bounce" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingBag
                          size={15}
                          className="transition-transform duration-300 group-hover/btn:-translate-y-0.5"
                        />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => navigate("/products")}
            className="group flex cursor-pointer items-center gap-3 rounded-full border border-[#9F6324]/40 bg-zinc-950 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition duration-300 hover:border-[#9F6324] hover:bg-[#9F6324] hover:text-black hover:shadow-[0_10px_25px_rgba(159,99,36,0.3)]"
          >
            View More Products
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* STATISTICS SECTION */}
        <div className="mt-16 rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#120805] via-[#1a0c07] to-[#000000] px-6 py-12 text-white shadow-2xl sm:px-10 lg:px-16 lg:py-14">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className=" text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {stat.number}
                  <span className="ml-1 text-[#9F6324]">{stat.symbol}</span>
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-gray-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SignatureCollection;
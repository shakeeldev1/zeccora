import React, { useState } from "react";
import {
  Heart,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";

const SignatureCollection = () => {
  const [activeFilter, setActiveFilter] = useState("All Products");
  const [wishlist, setWishlist] = useState([]);

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
      image:
        "https://i.pinimg.com/736x/57/24/0d/57240d170e51084f532c50078ea5545f.jpg",
      price: "2,500 PKR",
      oldPrice: "3,200 PKR",
      category: "Best Sellers",
      badge: "Bestseller",
      discount: "-20%",
    },
    {
      id: 2,
      name: "Luxury Everyday Essential",
      image:
        "https://i.pinimg.com/736x/94/45/ca/9445cabb9d13a5509b69ad91d13e043c.jpg",
      price: "3,500 PKR",
      oldPrice: "4,000 PKR",
      category: "New Arrivals",
      badge: "New",
      discount: "-15%",
    },
    {
      id: 3,
      name: "Premium Modern Collection",
      image:
        "https://i.pinimg.com/736x/1f/03/aa/1f03aac3946fe68ed7874d5e279cf0f8.jpg",
      price: "2,800 PKR",
      oldPrice: "3,500 PKR",
      category: "Best Sellers",
      badge: "Bestseller",
      discount: "-20%",
    },
    {
      id: 4,
      name: "Exclusive Luxury Essential",
      image:
        "https://i.pinimg.com/736x/84/bb/98/84bb984d12cc9ee1919d3ffc04bdb466.jpg",
      price: "4,200 PKR",
      oldPrice: "5,000 PKR",
      category: "Limited Edition",
      badge: "Exclusive",
      discount: "-16%",
    },
    {
      id: 5,
      name: "Signature Premium Product",
      image:
        "https://i.pinimg.com/1200x/05/ec/f5/05ecf537305ef3c09141756ed949031e.jpg",
      price: "3,000 PKR",
      oldPrice: "3,800 PKR",
      category: "New Arrivals",
      badge: "New",
      discount: "-20%",
    },
    {
      id: 6,
      name: "Luxury Collection Special",
      image:
        "https://i.pinimg.com/736x/35/88/e1/3588e1b2673842fb57438be48bf2b670.jpg",
      price: "2,700 PKR",
      oldPrice: "3,400 PKR",
      category: "Best Sellers",
      badge: "Bestseller",
      discount: "-18%",
    },
    {
      id: 7,
      name: "Premium Exclusive Product",
      image:
        "https://i.pinimg.com/736x/c0/6c/a6/c06ca61ce59dc9dd0b134c430c121f01.jpg",
      price: "3,800 PKR",
      oldPrice: "4,500 PKR",
      category: "Limited Edition",
      badge: "Exclusive",
      discount: "-15%",
    },
    {
      id: 8,
      name: "Modern Luxury Collection",
      image:
        "https://i.pinimg.com/736x/94/7c/db/947cdb97223ac77de90276536b686b5c.jpg",
      price: "2,900 PKR",
      oldPrice: "3,600 PKR",
      category: "New Arrivals",
      badge: "New",
      discount: "-19%",
    },
    {
      id: 9,
      name: "Ultimate Signature Collection",
      image:
        "https://i.pinimg.com/736x/e0/33/ae/e033ae3efb24a661b40493d9d1bf2455.jpg",
      price: "4,500 PKR",
      oldPrice: "5,500 PKR",
      category: "Best Sellers",
      badge: "Bestseller",
      discount: "-18%",
    },
  ];

  const stats = [
    {
      number: "150",
      symbol: "+",
      label: "Premium Products",
    },
    {
      number: "15K",
      symbol: "+",
      label: "Happy Customers",
    },
    {
      number: "12",
      symbol: "+",
      label: "Countries Served",
    },
    {
      number: "4.9",
      symbol: "",
      label: "Customer Rating",
    },
  ];

  const filteredProducts =
    activeFilter === "All Products"
      ? products
      : products.filter(
          (product) => product.category === activeFilter
        );

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="bg-[#1b1b1b] py-1 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <div className="mb-12 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 px-4 py-2">
            <Sparkles
              size={14}
              className="text-[#d4af37]"
            />

            <span className="text-xs font-semibold text-[#d4af37]">
              Our Signature Collection
            </span>
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our Signature{" "}
            <span className="text-[#d4af37]">
              Collection
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400 sm:text-base">
            Hand-selected premium products loved by our
            distinguished clients.
          </p>

        </div>

        {/* ================= FILTERS ================= */}

        <div className="mb-12 flex flex-wrap justify-center gap-3">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm
                ${
                  activeFilter === filter
                    ? "border-[#d4af37] bg-[#d4af37] text-[#1b1b1b] shadow-lg shadow-[#d4af37]/20"
                    : "border-white/15 bg-white/[0.02] text-gray-300 hover:border-[#d4af37]/60 hover:text-[#d4af37]"
                }
              `}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* ================= PRODUCTS ================= */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#202020] transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37]/40 hover:shadow-2xl hover:shadow-black/40"
            >

              {/* Product Image */}

              <div className="relative h-[230px] overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Badges */}

                <div className="absolute left-3 top-3 flex gap-2">

                  <span className="rounded-md bg-[#e7a51b] px-2 py-1 text-[9px] font-bold text-white">
                    {product.badge}
                  </span>

                  <span className="rounded-md bg-[#ef4444] px-2 py-1 text-[9px] font-bold text-white">
                    {product.discount}
                  </span>

                </div>

                {/* Wishlist */}

                <button
                  onClick={() =>
                    toggleWishlist(product.id)
                  }
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-[#d4af37] hover:text-black"
                >
                  <Heart
                    size={15}
                    fill={
                      wishlist.includes(product.id)
                        ? "#d4af37"
                        : "none"
                    }
                    className={
                      wishlist.includes(product.id)
                        ? "text-[#d4af37]"
                        : ""
                    }
                  />
                </button>

              </div>

              {/* ================= PRODUCT DETAILS ================= */}

              <div className="p-4">

                {/* Rating */}

                <div className="mb-3 flex items-center gap-1">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                      key={star}
                      size={10}
                      className="fill-[#d4af37] text-[#d4af37]"
                    />

                  ))}

                  <span className="ml-1 text-[10px] text-gray-500">
                    (12)
                  </span>

                </div>

                {/* Product Name */}

                <h3 className="min-h-[42px] text-sm font-semibold leading-5 text-white">
                  {product.name}
                </h3>

                {/* Price & Button */}

                <div className="mt-4 flex items-end justify-between gap-2">

                  <div>

                    <p className="text-sm font-bold text-[#d4af37]">
                      {product.price}
                    </p>

                    <p className="mt-1 text-[10px] text-gray-500 line-through">
                      {product.oldPrice}
                    </p>

                  </div>

                  {/* Add Button */}

                  <button className="flex items-center gap-1 rounded-lg bg-[#d4af37] px-3 py-2 text-xs font-bold text-[#1b1b1b] transition hover:bg-[#f0c84b]">

                    <ShoppingBag size={13} />

                    Add

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ================= VIEW ALL BUTTON ================= */}

        <div className="mt-12 flex justify-center">

          <button className="rounded-full border border-[#d4af37]/30 bg-black px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black">
            View All Products →
          </button>

        </div>


        {/* ================= STATISTICS SECTION ================= */}

        <div className="mt-20 rounded-[22px] border border-white/5 bg-[#202b3d] px-6 py-12 sm:px-10 lg:px-16 lg:py-14">

          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-6">

            {stats.map((stat, index) => (

              <div
                key={index}
                className="text-center"
              >

                {/* Number */}

                <h3 className="font-serif text-3xl font-bold text-white sm:text-4xl">

                  {stat.number}

                  <span className="ml-1 text-[#d4af37]">
                    {stat.symbol}
                  </span>

                </h3>

                {/* Label */}

                <p className="mt-2 text-sm text-gray-300">
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
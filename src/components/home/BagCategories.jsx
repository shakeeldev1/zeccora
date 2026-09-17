import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import image7 from "../../assets/img7 (4).jpeg";
import image8 from "../../assets/img 8.jpeg";
import image21 from "../../assets/img 21.png";
import image10 from "../../assets/img 10.jpeg";
import image24 from "../../assets/img 24.png";
import image18 from "../../assets/img18.png";

const BagCategories = () => {
  const categories = [
    {
      id: "cat-handbags",
      title: "Handbags",
      description:
        "Elegant handcrafted handbags for everyday elegance and statement styling.",
      image: image7,
      products: "Premium Edit",
      href: "/products?category=Handbags",
    },
    {
      id: "cat-shoulder",
      title: "Shoulder Bags",
      description:
        "Modern shoulder bags designed for effortless comfort and luxury appeal.",
      image: image8,
      products: "New Collection",
      href: "/products?category=Shoulder%20Bags",
    },
    {
      id: "cat-totes",
      title: "Tote Bags",
      description:
        "Spacious, sophisticated silhouettes crafted to elevate your daily wardrobe.",
      image: image21,
      products: "Luxury Edit",
      href: "/products?category=Tote%20Bags",
    },
    {
      id: "cat-crossbody",
      title: "Crossbody Bags",
      description:
        "Chic and practical hands-free designs made for modern luxury living.",
      image: image10,
      products: "Trending",
      href: "/products?category=Crossbody%20Bags",
    },
    {
      id: "cat-clutches",
      title: "Clutches & Mini",
      description:
        "Refined evening designs that blend premium craftsmanship with compact style.",
      image: image24,
      products: "Exclusive",
      href: "/products?category=Clutches",
    },
    {
      id: "cat-travel",
      title: "Travel & Duffles",
      description:
        "Statement-making luxury carriers that complement every journey effortlessly.",
      image: image18,
      products: "Designer Picks",
      href: "/products?category=Travel",
    },
  ];

  return (
    <section className="bg-white py-12 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#9F6324]/20 bg-[#9F6324]/10 px-4 py-2">
            <Sparkles size={14} className="text-[#9F6324]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9F6324]">
              Explore Our Collection
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Shop by <span className="text-[#9F6324]">Bag Category</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Discover our carefully selected collection of stylish, practical,
            and premium bags for every occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-[#120805] via-[#1a0c07] to-[#000000] text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#9F6324]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              <div>
                {/* Image */}
                <div className="relative h-[250px] overflow-hidden bg-zinc-900">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Badge */}
                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#FFFFC9] backdrop-blur-md shadow-md">
                    {category.products}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#9F6324]">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* MODERN EXPLORE BUTTON FOOTER */}
              <div className="px-6 pb-6 pt-2">
                <div className="inline-flex w-full items-center justify-between rounded-full border border-[#9F6324]/20 bg-[#9F6324]/10 py-2.5 pl-5 pr-2 backdrop-blur-sm transition-all duration-300 group-hover:border-[#9F6324]/50 group-hover:bg-[#9F6324]/20 group-hover:shadow-[0_0_15px_rgba(159,99,36,0.2)]">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FFFFC9] transition-colors duration-300 group-hover:text-white">
                    Explore Collection
                  </span>

                  {/* Circular Animated Arrow Icon */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9F6324] text-black shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-[#9F6324] group-hover:scale-105">
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Action Button */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/products"
            className="group flex items-center gap-3 rounded-full border border-[#9F6324]/40 bg-zinc-950 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition duration-300 hover:border-[#9F6324] hover:bg-[#9F6324] hover:text-black hover:shadow-[0_10px_25px_rgba(159,99,36,0.3)]"
          >
            View All Bags
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BagCategories;
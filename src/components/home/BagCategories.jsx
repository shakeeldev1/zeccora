import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const BagCategories = () => {
  const categories = [
    {
      title: "Handbags",
      description:
        "Elegant handcrafted handbags for everyday elegance and statement styling.",
      image:
        "https://i.pinimg.com/736x/c9/52/a9/c952a9e0c2b2a1e69beb0695257c6c38.jpg",
      products: "Premium Bags",
      href: "/products?category=Handbags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Modern shoulder bags designed for effortless comfort and luxury appeal.",
      image:
        "https://i.pinimg.com/736x/d2/11/7a/d2117a0aadb0207d3d44af2c57aa9f9c.jpg",
      products: "New Collection",
      href: "/products?category=Shoulder%20Bags",
    },
    {
      title: "Handbags",
      description:
        "Sophisticated silhouettes crafted to elevate your everyday wardrobe.",
      image:
        "https://i.pinimg.com/736x/a3/17/83/a3178351ad9741a09cd6862bd1ec22d9.jpg",
      products: "Luxury Edit",
      href: "/products?category=Handbags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Chic and practical shoulder bags made for modern luxury living.",
      image:
        "https://i.pinimg.com/736x/4e/bf/c1/4ebfc19ff153ac3722a5e473f76a6040.jpg",
      products: "Trending",
      href: "/products?category=Shoulder%20Bags",
    },
    {
      title: "Handbags",
      description:
        "Refined designs that blend premium craftsmanship with everyday comfort.",
      image:
        "https://i.pinimg.com/736x/71/bc/88/71bc880af7e9f299e7e23d5d9d267b67.jpg",
      products: "Exclusive",
      href: "/products?category=Handbags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Statement-making shoulder bags that complement every occasion effortlessly.",
      image:
        "https://i.pinimg.com/736x/03/ed/d2/03edd2a337e41fe42626938b79076cba.jpg",
      products: "Designer Picks",
      href: "/products?category=Shoulder%20Bags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Effortless elegance with a soft structured silhouette for daily styling.",
      image:
        "https://i.pinimg.com/1200x/d9/bb/66/d9bb661622e723d4e56bd9ef62fe4100.jpg",
      products: "Signature Style",
      href: "/products?category=Shoulder%20Bags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Premium statement shoulder bags designed for polished daily carry.",
      image:
        "https://i.pinimg.com/736x/61/db/b0/61dbb05a4d3325be65b113bfd91440ac.jpg",
      products: "Luxury Pick",
      href: "/products?category=Shoulder%20Bags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Minimal silhouettes with luxe texture and a refined premium finish.",
      image:
        "https://i.pinimg.com/736x/d0/ae/b1/d0aeb1c43c5192ebc7400c68929b8922.jpg",
      products: "Modern Edit",
      href: "/products?category=Shoulder%20Bags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Elegant everyday essentials that bring sophistication to every outfit.",
      image:
        "https://i.pinimg.com/1200x/ac/ff/18/acff181097bb81e5a4eaf5922fcc089f.jpg",
      products: "Daily Luxe",
      href: "/products?category=Shoulder%20Bags",
    },
    {
      title: "Shoulder Bags",
      description:
        "High-fashion detailing paired with functional everyday practicality.",
      image:
        "https://i.pinimg.com/736x/04/37/67/04376712ed5499b46fff0618f7e46ddc.jpg",
      products: "Fashion Forward",
      href: "/products?category=Shoulder%20Bags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Luxury-inspired forms with a sleek finish built for effortless style.",
      image:
        "https://i.pinimg.com/736x/4c/97/c3/4c97c3695224755c49c09897ff95159b.jpg",
      products: "Elegant Wardrobe",
      href: "/products?category=Shoulder%20Bags",
    },
  ];

  return (
    <section className="bg-[#1b1b1b] py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 px-4 py-2">
            <Sparkles size={14} className="text-[#d4af37]" />

            <span className="text-xs font-semibold text-[#d4af37]">
              Explore Our Collection
            </span>
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Shop by{" "}
            <span className="text-[#d4af37]">
              Bag Category
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400">
            Discover our carefully selected collection of stylish,
            practical and premium bags for every occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#222222] transition duration-300 hover:-translate-y-2 hover:border-[#d4af37]/50"
            >

              {/* Image */}
              <div className="relative h-[230px] overflow-hidden">

                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Badge */}
                <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
                  {category.products}
                </div>

              </div>

              {/* Text Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-white transition group-hover:text-[#d4af37]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {category.description}
                </p>

                {/* Explore */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#d4af37]">
                  Explore Collection

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>

              </div>

            </a>
          ))}

        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="/products"
            className="group flex items-center gap-3 rounded-full border border-[#d4af37]/30 bg-black px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
          >
            View All Bags

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
};

export default BagCategories;
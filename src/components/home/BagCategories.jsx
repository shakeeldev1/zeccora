import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import image7 from "../../assets/img7 (4).jpeg";
import image8 from "../../assets/img 8.jpeg";
import imag21 from "../../assets/img 21.png"
import image10 from "../../assets/img 10.jpeg";
import image24 from "../../assets/img 24.png";
import image18 from "../../assets/img18.png";




const BagCategories = () => {
  const categories = [
    {
      title: "Handbags",
      description:
        "Elegant handcrafted handbags for everyday elegance and statement styling.",
      image: image7,
      products: "Premium Bags",
      href: "/products?category=Handbags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Modern shoulder bags designed for effortless comfort and luxury appeal.",
      image: image8,
      products: "New Collection",
      href: "/products?category=Shoulder%20Bags",
    },
    {
      title: "Handbags",
      description:
        "Sophisticated silhouettes crafted to elevate your everyday wardrobe.",
      image: imag21,
      products: "Luxury Edit",
      href: "/products?category=Handbags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Chic and practical shoulder bags made for modern luxury living.",
      image: image10,
      products: "Trending",
      href: "/products?category=Shoulder%20Bags",
    },
    {
      title: "Handbags",
      description:
        "Refined designs that blend premium craftsmanship with everyday comfort.",
      image: image24,
      products: "Exclusive",
      href: "/products?category=Handbags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Statement-making shoulder bags that complement every occasion effortlessly.",
      image: image18,
      products: "Designer Picks",
      href: "/products?category=Shoulder%20Bags",
    },
  
  ]

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
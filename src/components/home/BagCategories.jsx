import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const BagCategories = () => {
  const categories = [
    {
      title: "Handbags",
      description:
        "Elegant handbags designed for everyday style and sophistication.",
      image:
        "https://i.pinimg.com/736x/85/58/7d/85587df3621ebb67ff3ea92a7a4ed9e8.jpg",
      products: "Premium Bags",
    },
    {
      title: "Shoulder Bags",
      description:
        "Stylish and comfortable bags perfect for your everyday essentials.",
      image:
        "https://i.pinimg.com/736x/9c/36/69/9c3669d46a206965c048a37e5e17c751.jpg",
      products: "New Collection",
    },
    {
      title: "Crossbody Bags",
      description:
        "Modern crossbody bags combining comfort, fashion and functionality.",
      image:
        "https://i.pinimg.com/736x/4d/84/ee/4d84ee24de42e34454896691ea7c4a7a.jpg",
      products: "Trending",
    },
    {
      title: "Travel Bags",
      description:
        "Spacious and durable bags designed for every journey.",
      image:
        "https://i.pinimg.com/736x/6d/b3/23/6db323804a9f4645979497746c845ef4.jpg",
      products: "Travel Essentials",
    },
    {
      title: "Luxury Bags",
      description:
        "Premium bags crafted to elevate your style and make a statement.",
      image:
        "https://i.pinimg.com/736x/db/64/97/db64977bd8d6a0b458e2e2bfc162bbec.jpg",
      products: "Exclusive",
    },
    {
      title: "Designer Bags",
      description:
        "Beautiful designer bags created to bring elegance and luxury to your style.",
      image:
        "https://i.pinimg.com/736x/a2/2d/d5/a22dd52e29962ca247b7b518dd69a8f9.jpg",
      products: "Designer Collection",
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
              href="/products"
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
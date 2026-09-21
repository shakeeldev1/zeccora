import React from "react";
import { Link } from "react-router-dom";

import image7 from "../../assets/img7 (4).jpeg";
import image21 from "../../assets/img 21.png";
import image10 from "../../assets/img 10.jpeg";
import image18 from "../../assets/img18.png";

const BagCategories = () => {
  const categories = [
    {
      id: "cat-handbags",
      title: "handbags",
      image: image7,
      href: "/products?category=Handbags",
    },
    {
      id: "cat-crossbody",
      title: "crossbody",
      image: image10,
      href: "/products?category=Crossbody%20Bags",
    },
    {
      id: "cat-totes",
      title: "tote bags",
      image: image21,
      href: "/products?category=Tote%20Bags",
    },
    {
      id: "cat-canvas",
      title: "canvas bags",
      image: image18,
      href: "/products?category=Canvas%20Bags",
    },
  ];

  return (
    <section className="bg-[#f7f2ec] py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <p className="section-kicker">Start shopping</p>
          <h2 className="display-font mt-3 text-3xl text-[#1a120c] sm:text-5xl">
            Shop by category
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={category.href} className="group block text-center">
              <div className="overflow-hidden rounded-2xl bg-[#efe6dc] shadow-[0_12px_32px_rgba(26,18,12,0.08)] transition duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_48px_rgba(26,18,12,0.14)] sm:rounded-[28px]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="display-font mt-3 text-lg capitalize tracking-wide text-[#1a120c] transition group-hover:text-[#9F6324] sm:mt-4 sm:text-2xl">
                {category.title}
              </h3>
              <span className="mx-auto mt-2 block h-px w-8 bg-[#9F6324]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[#9F6324]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BagCategories;

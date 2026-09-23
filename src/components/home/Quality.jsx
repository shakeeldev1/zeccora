import React from "react";
import {
  Truck,
  ShieldCheck,
  CreditCard,
  Clock3,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import bgImage from "/hero/bag-fixed.png";

const qualityItems = [
  {
    icon: Truck,
    title: "Rs. 300 delivery",
    subtitle: "Paid first, then COD",
  },
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    subtitle: "Verified Products",
  },
  {
    icon: CreditCard,
    title: "Cash on delivery",
    subtitle: "Pay when it arrives",
  },
  {
    icon: Clock3,
    title: "Fast Delivery",
    subtitle: "Nationwide Coverage",
  },
];

const Quality = () => {
  return (
    <>
      {/* Hero Section with Dark Fixed Background */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-scroll py-14 sm:py-20 lg:bg-fixed lg:py-24"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark Shaded Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Deep Ambient Gold Glows */}
        <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#A46A2A]/20 blur-[120px]" />

        <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#A46A2A]/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A46A2A]">
            Zeccora
          </p>

          <h1 className="mx-auto max-w-4xl display-font text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Shop Quality Products at{" "}
            <span className="italic text-[#E8C27A]">Zeccora</span>
          </h1>

          <h2 className="mt-3 text-xl font-medium text-gray-200 sm:text-2xl lg:text-3xl">
            Experience True Arabian Luxury
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Discover our curated collection of quality products designed for
            every need and budget.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            
            {/* Shop Now */}
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#A46A2A] px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-[#A46A2A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFFFC9]"
            >
              Shop Now

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#A46A2A]/60 bg-black/40 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#A46A2A] hover:bg-[#A46A2A] hover:text-black"
            >
              <Phone size={17} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Features Strip */}
      <section className="w-full bg-[#efe6dc] text-[#1a120c]">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualityItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 rounded-[28px] bg-white px-4 py-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f7f2ec] text-[#9F6324]">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 text-xs text-[#8a7b70]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quality;
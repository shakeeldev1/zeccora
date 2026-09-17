import React from "react";
import {
  Truck,
  ShieldCheck,
  CreditCard,
  Clock3,
  ArrowRight,
  Phone,
} from "lucide-react";

import bgImage from "/hero/bag-fixed.png";

const qualityItems = [
  {
    icon: Truck,
    title: "Free Shipping",
    subtitle: "On All Orders",
  },
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    subtitle: "Verified Products",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    subtitle: "SSL Protected",
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
        className="relative overflow-hidden bg-cover bg-fixed bg-center py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark Shaded Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#120805]/85 to-black/90 backdrop-blur-[2px]" />

        {/* Deep Ambient Gold Glows */}
        <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#A46A2A]/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#A46A2A]/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A46A2A]">
            Zeccora
          </p>

          <h1 className="mx-auto max-w-4xl  text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Shop Quality Products at{" "}
            <span className="text-[#A46A2A]">Zeccora</span>
          </h1>

          <h2 className="mt-3  text-xl font-medium text-gray-200 sm:text-2xl lg:text-3xl">
            Experience True Arabian Luxury
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Discover our curated collection of quality products designed for
            every need and budget.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#A46A2A] px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-[#A46A2A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFFFC9]"
            >
              Shop Now
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#A46A2A]/60 bg-black/40 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#A46A2A] hover:bg-[#A46A2A] hover:text-black"
            >
              <Phone size={17} />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Dark Quality Features Strip */}
      <section className="w-full border-b border-t border-[#A46A2A]/30 bg-[#0d0705] text-white">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 divide-y divide-[#A46A2A]/20 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:divide-[#A46A2A]/20">
            {qualityItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 px-4 py-5 first:pt-0 last:pb-0 sm:px-6 sm:py-4 lg:py-2"
                >
                  {/* Icon Box */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#A46A2A]/30 bg-[#A46A2A]/10 text-[#A46A2A] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#A46A2A] group-hover:text-black">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className=" text-sm font-bold text-white transition-colors duration-300 group-hover:text-[#A46A2A]">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 text-xs text-gray-400">
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
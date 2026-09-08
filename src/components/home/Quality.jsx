import React from "react";
import {
  Truck,
  ShieldCheck,
  CreditCard,
  Clock3,
  ArrowRight,
  Phone,
} from "lucide-react";

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
      {/* Hero Content */}
      <section className="w-full bg-[#151515]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-8 lg:px-10 lg:py-20">
          
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#d6af35]">
            Urban Bazaar
          </p>

          <h1 className="mx-auto max-w-4xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Shop Quality Products at{" "}
            <span className="text-[#d6af35]">
              Urban Bazaar
            </span>
          </h1>

          <h2 className="mt-4 font-serif text-xl font-medium text-gray-200 sm:text-2xl lg:text-3xl">
            Experience True Arabian Luxury
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Discover our curated collection of quality products designed
            for every need and budget.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            <a
              href="https://urbanbazaaronline.store/shop"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#d6af35] px-7 py-3 text-sm font-semibold text-[#151515] transition-all duration-300 hover:scale-105 hover:bg-[#e5bd45]"
            >
              Shop Now
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://urbanbazaaronline.store/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#d6af35]/60 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#d6af35] hover:text-[#151515]"
            >
              <Phone size={17} />
              Contact Us
            </a>

          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="w-full border-t border-[#8b701d]/40 bg-[#151515]">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          
          <div className="grid grid-cols-1 divide-y divide-[#8b701d]/20 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:divide-[#8b701d]/25">
            
            {qualityItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 px-4 py-5 first:pt-0 last:pb-0 sm:px-6 sm:py-5 lg:py-2"
                >
                  {/* Icon */}
                  <div
                    className="
                      flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-lg
                      border border-[#a88422]/50
                      bg-[#292716]
                      transition-all duration-300
                      group-hover:border-[#d6af35]
                      group-hover:bg-[#342d15]
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      className="text-[#d6af35] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-serif text-[15px] font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 font-serif text-xs text-gray-300">
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
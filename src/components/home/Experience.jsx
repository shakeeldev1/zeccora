import React from "react";
import {
  Star,
  Truck,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import experienceImage from "/hero/zecorabout.png";

const Experience = () => {
  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery with safe handling.",
    },
    {
      icon: ShieldCheck,
      title: "Authentic Products",
      description: "Carefully curated items with verified quality.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated service team ready to assist anytime.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f2ec] py-10 text-[#1a120c] sm:py-10 lg:py-10">
      {/* Soft Ambient Gold Glows */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#A46A2A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#A46A2A]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A46A2A]/30 bg-[#A46A2A]/10 px-4 py-2">
              <Sparkles size={14} className="text-[#A46A2A]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A46A2A]">
                Premium Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="display-font max-w-xl text-3xl leading-tight text-[#1a120c] sm:text-5xl">
              Experience True{" "}
              <span className="block italic text-[#9F6324]">Luxury & Quality</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Explore premium products carefully selected for quality, style, and everyday elegance. Designed to fit seamlessly into modern lifestyles.
            </p>

            {/* Features (White Cards with Borders) */}
            <div className="mt-8 space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#A46A2A] hover:shadow-md hover:shadow-[#A46A2A]/15"
                  >
                    {/* Icon Box */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#A46A2A]/20 bg-[#A46A2A]/10 text-[#A46A2A] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#A46A2A] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#A46A2A]">
                        {feature.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#A46A2A] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#A46A2A]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900"
              >
                Shop Now
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 shadow-sm transition-all duration-300 hover:border-[#A46A2A] hover:bg-[#A46A2A]/5 hover:text-[#A46A2A]"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative pb-8">
            {/* Soft Ambient Glow */}
            <div className="absolute -inset-4 rounded-[30px] bg-[#A46A2A]/10 blur-3xl" />

            {/* Image Box */}
            <div className="relative overflow-hidden rounded-[30px] border border-[#A46A2A]/20 bg-white p-2 shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
              <img
                src={experienceImage}
                alt="Premium Collection"
                className="h-[280px] w-full rounded-[22px] object-cover transition-transform duration-700 hover:scale-105 sm:h-[450px] lg:h-[480px]"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 right-3 flex max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-2xl border border-gray-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-bottom-5 sm:right-8 sm:px-5 sm:py-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#A46A2A]/10 text-[#A46A2A]">
                <Star size={18} className="fill-[#A46A2A]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Guaranteed
                </p>
                <p className="text-sm font-bold text-gray-900">
                  Trusted Quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
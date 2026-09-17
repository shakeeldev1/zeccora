import React from "react";
import {
  ShieldCheck,
  Package,
  Truck,
  Crown,
  HeartHandshake,
  Star,
  Sparkles,
  Gem,
  ArrowUpRight,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      title: "Quality Products",
      description:
        "We carefully select premium products to ensure quality, style, and reliability.",
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "Elegant Packaging",
      description:
        "Every order is beautifully packed to provide a premium unboxing experience.",
      icon: Package,
    },
    {
      number: "03",
      title: "Fast Delivery",
      description:
        "Enjoy quick and reliable delivery with safe handling of your orders.",
      icon: Truck,
    },
    {
      number: "04",
      title: "Exclusive Collections",
      description:
        "Explore unique and carefully selected collections designed for modern lifestyles.",
      icon: Crown,
    },
    {
      number: "05",
      title: "Trusted Service",
      description:
        "Our dedicated service ensures a smooth and reliable shopping experience.",
      icon: HeartHandshake,
    },
    {
      number: "06",
      title: "Premium Experience",
      description:
        "From browsing to delivery, we focus on making every experience exceptional.",
      icon: Gem,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#000000] via-[#120805] to-[#000000] py-12 text-white ">
      {/* Background Decorative Ambient Lights */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#A46A2A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#A46A2A]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* ================= TOP CONTENT ================= */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A46A2A]/30 bg-[#A46A2A]/10 px-4 py-2 backdrop-blur-md">
            <Sparkles size={14} className="text-[#A46A2A]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A46A2A]">
              Why Choose Us
            </span>
          </div>

          {/* Heading */}
          <h2 className=" text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Choose <span className="text-[#A46A2A]">Zeccora</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Premium products, trusted service, and an elevated shopping experience tailored exclusively for you.
          </p>

          {/* Stats Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {/* Customers */}
            <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 backdrop-blur-sm">
              <div className="flex -space-x-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#000000] bg-[#A46A2A] text-[10px] font-bold text-black">
                  Z
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#000000] bg-zinc-800 text-[10px] font-bold text-white">
                  K
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#000000] bg-zinc-700 text-[10px] font-bold text-white">
                  A
                </div>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white sm:text-sm">15K+ Happy Customers</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 backdrop-blur-sm">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={14}
                    className="fill-[#A46A2A] text-[#A46A2A]"
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-white sm:text-sm">
                4.9 / 5.0 Rating
              </span>
            </div>
          </div>
        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#160b07]/80 via-[#0d0604]/90 to-[#000000] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#A46A2A]/50 hover:shadow-[0_20px_40px_rgba(164,106,42,0.15)]"
              >
                {/* Background Decorative Glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#A46A2A]/10 blur-3xl transition-all duration-500 group-hover:bg-[#A46A2A]/20" />

                {/* Card Top Section */}
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    {/* Icon Container */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#A46A2A]/30 bg-[#A46A2A]/10 text-[#A46A2A] shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:border-[#A46A2A] group-hover:bg-[#A46A2A] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(164,106,42,0.4)]">
                      <Icon size={26} />
                    </div>

                    {/* Card Number & Hover Icon */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-2xl font-bold tracking-widest text-white/20 transition-colors duration-500 group-hover:text-[#A46A2A]/60">
                        {feature.number}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-white/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#A46A2A]"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#A46A2A]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Line Accent */}
                <div className="mt-8 h-[2px] w-12 rounded-full bg-[#A46A2A]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#A46A2A]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
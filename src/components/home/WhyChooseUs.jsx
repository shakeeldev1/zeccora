
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
    <section className="overflow-hidden bg-[#1b1b1b] py-10   text-white sm:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* ================= TOP CONTENT ================= */}

        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/15 bg-[#d4af37]/10 px-4 py-2">
            <Sparkles
              size={14}
              className="text-[#d4af37]"
            />

            <span className="text-xs font-semibold text-[#d4af37]">
              Why Choose Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="text-[#d4af37]">
              Urban Bazaar
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            Premium products, trusted service, and a shopping experience
            designed for you.
          </p>

          {/* Stats */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-7">

            {/* Customers */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="h-9 w-9 rounded-full border-2 border-[#1b1b1b] bg-[#d4af37]" />
                <div className="h-9 w-9 rounded-full border-2 border-[#1b1b1b] bg-[#e6bf4b]" />
                <div className="h-9 w-9 rounded-full border-2 border-[#1b1b1b] bg-[#f0cf67]" />
              </div>

              <p className="text-sm font-bold text-white">
                15K+ Customers
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={14}
                    className="fill-[#d4af37] text-[#d4af37]"
                  />
                ))}
              </div>

              <span className="text-sm font-semibold text-white">
                4.9/5
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
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#202020] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-black/40"
              >

                {/* Background Decorative Glow */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d4af37]/5 blur-3xl transition-all duration-500 group-hover:bg-[#d4af37]/10" />

                {/* Feature Number */}
                <span className="absolute right-6 top-5 text-4xl font-bold text-white/[0.04] transition-all duration-500 group-hover:text-[#d4af37]/10">
                  {feature.number}
                </span>


                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-[#1b1b1b]">
                  <Icon size={26} />
                </div>


                {/* Content */}
                <div className="relative">

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#d4af37]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {feature.description}
                  </p>

                </div>


                {/* Bottom Line */}
                <div className="relative mt-6 h-[2px] w-10 bg-[#d4af37]/40 transition-all duration-500 group-hover:w-full group-hover:bg-[#d4af37]" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;


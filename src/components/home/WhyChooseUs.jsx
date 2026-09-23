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
      description: "We carefully select premium products to ensure quality, style, and reliability.",
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "Elegant Packaging",
      description: "Every order is beautifully packed to provide a premium unboxing experience.",
      icon: Package,
    },
            {
      number: "03",
      title: "Nationwide delivery",
      description: "Rs. 300 delivery paid first, then cash on delivery. Most orders arrive in 2 to 5 working days.",
      icon: Truck,
    },
    {
      number: "04",
      title: "Exclusive Collections",
      description: "Explore unique and carefully selected collections designed for modern lifestyles.",
      icon: Crown,
    },
    {
      number: "05",
      title: "Trusted Service",
      description: "Our dedicated service ensures a smooth and reliable shopping experience.",
      icon: HeartHandshake,
    },
    {
      number: "06",
      title: "Premium Experience",
      description: "From browsing to delivery, we focus on making every experience exceptional.",
      icon: Gem,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f2ec] py-10 text-[#1a120c] sm:py-10">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
            {/* <Sparkles size={14} className="text-[#9F6324]" /> */}
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9F6324]">Why Choose Us</span>
          </div>
          <h2 className="display-font text-3xl leading-tight sm:text-5xl lg:text-6xl">
            Why Choose <span className="italic text-[#9F6324]">Zeccora</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#6b5b4e] sm:text-base">
            Premium products, trusted service, and an elevated shopping experience tailored exclusively for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold sm:text-sm">
              Johar Town, Lahore
            </div>
            <div className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={item} size={14} className="fill-[#9F6324] text-[#9F6324]" />
                ))}
              </div>
              <span className="text-xs font-semibold sm:text-sm">Cash on delivery</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="group flex flex-col rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(26,18,12,0.04)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,18,12,0.1)]">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#efe6dc] text-[#9F6324]">
                    <Icon size={26} />
                  </div>
                  <span className="font-mono text-2xl font-bold tracking-widest text-[#d7c9bb]">{feature.number}</span>
                </div>
                <h3 className="display-font text-xl tracking-tight group-hover:text-[#9F6324]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6b5b4e]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

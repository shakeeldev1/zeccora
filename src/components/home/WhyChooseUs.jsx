import React from "react";
import {
  ShieldCheck,
  Package,
  Truck,
  Crown,
  HeartHandshake,
  Star,
  Sparkles,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Quality Products",
      description:
        "Every product is sourced from trusted suppliers with verified authenticity and quality assurance.",
      icon: ShieldCheck,
      image:
        "https://i.pinimg.com/736x/ff/ca/c4/ffcac45121a1dba8dab5d71ffee9ae04.jpg",
    },
    {
      title: "Elegant Packaging",
      description:
        "Luxury packaging that reflects the premium quality of our products, perfect for gifting.",
      icon: Package,
      image:
        "https://i.pinimg.com/1200x/40/2d/13/402d13d169defc55bb84b20ebe64a8aa.jpg",
    },
    {
      title: "Fast Delivery Across Pakistan",
      description:
        "Complimentary delivery across Pakistan on orders above 500 PKR with secure and reliable packaging.",
      icon: Truck,
      image:
        "https://i.pinimg.com/1200x/d9/24/60/d92460efa3d6f277476779df8883e0da.jpg",
    },
    {
      title: "Exclusive Collections",
      description:
        "Access exclusive product collections and limited edition items available only at Urban Bazaar.",
      icon: Crown,
      image:
        "https://i.pinimg.com/736x/15/4c/81/154c81dc4356c4f8f69094fbd5f33f2c.jpg",
    },
    {
      title: "Trusted by Thousands",
      description:
        "Thousands of satisfied customers trust Urban Bazaar for quality products and reliable service.",
      icon: HeartHandshake,
      image:
        "https://i.pinimg.com/1200x/c4/30/ed/c430ede3f012ab9c9b3c03235eec2628.jpg",
    },
  ];

  const FeatureCard = ({ feature, large = false }) => {
    const Icon = feature.icon;

    return (
      <div
        className={`group relative overflow-hidden rounded-[22px] border border-white/15 ${
          large ? "min-h-[320px]" : "min-h-[300px]"
        } transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/70 hover:shadow-2xl hover:shadow-black/50`}
      >
        {/* Background Image - Full Clear */}
        <img
          src={feature.image}
          alt={feature.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Bottom Dark Gradient for Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* Gold Hover Overlay */}
        <div className="absolute inset-0 bg-[#d4af37]/0 transition-all duration-500 group-hover:bg-[#d4af37]/5" />

        {/* Content - Bottom */}
        <div className="absolute bottom-0 left-0 z-10 w-full p-6">
          {/* Icon */}
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-black/50 text-[#d4af37] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-[#1b1b1b]">
            <Icon size={22} />
          </div>

          {/* Heading */}
          <h3 className="font-serif text-xl font-bold text-white">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm leading-6 text-gray-200">
            {feature.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="overflow-hidden bg-[#1b1b1b] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:sticky lg:top-28">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/10 bg-[#d4af37]/10 px-4 py-2">
              <Sparkles size={14} className="text-[#d4af37]" />

              <span className="text-xs font-semibold text-[#d4af37]">
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-lg font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Why Choose{" "}
              <span className="text-[#d4af37]">
                Urban Bazaar
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300">
              Urban Bazaar is Pakistan's trusted online marketplace
              providing quality products with excellent service and
              the best prices.
            </p>

            {/* Statistics */}
            <div className="mt-8 flex flex-wrap items-center gap-8">

              {/* Happy Customers */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="h-9 w-9 rounded-full border-2 border-[#1b1b1b] bg-[#d4af37]" />
                  <div className="h-9 w-9 rounded-full border-2 border-[#1b1b1b] bg-[#e6bf4b]" />
                  <div className="h-9 w-9 rounded-full border-2 border-[#1b1b1b] bg-[#f0cf67]" />
                  <div className="h-9 w-9 rounded-full border-2 border-[#1b1b1b] bg-[#d4af37]" />
                </div>

                <p className="text-sm font-bold text-white">
                  15K+ Happy Customers
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={15}
                      className="fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}
                </div>

                <span className="text-sm font-semibold text-white">
                  4.9/5 Rating
                </span>
              </div>

            </div>
          </div>

          {/* ================= RIGHT CARDS ================= */}
          <div className="space-y-5">

            {/* TOP ROW - 2 CARDS */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.slice(0, 2).map((feature) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  large
                />
              ))}
            </div>

            {/* BOTTOM ROW - 3 CARDS */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {features.slice(2, 5).map((feature) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
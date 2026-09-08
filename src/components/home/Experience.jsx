import React from "react";
import {
  Star,
  Truck,
  ShieldCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";

const Experience = () => {
  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same day delivery available",
    },
    {
      icon: ShieldCheck,
      title: "Authentic Products",
      description: "100% authentic guaranteed",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "24 hours available for assistance",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#1b1b1b] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Content */}
          <div>
            
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/10 bg-[#d4af37]/10 px-4 py-2">
              <Star
                size={16}
                className="text-[#d4af37]"
              />

              <span className="text-sm font-semibold text-[#d4af37]">
                Premium Experience
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Discover Our{" "}
              <span className="text-[#d4af37]">
                Premium
              </span>

              <br />

              <span className="text-[#d4af37]">
                Collection
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Experience the finest products from around the world.
              Specializing in authentic premium products and international
              selections. Guaranteed quality and competitive prices.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">
              
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4"
                  >
                    
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-[#1b1b1b]">
                      <Icon size={21} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-sm font-bold text-white sm:text-base">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-400">
                        {feature.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              
              <a
                href="/products"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#d4af37] px-7 py-3.5 text-sm font-bold text-[#1b1b1b] shadow-lg shadow-[#d4af37]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0c84b]"
              >
                Shop Now

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#d4af37]/70 px-7 py-3.5 text-sm font-bold text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#1b1b1b]"
              >
                Contact Us
              </a>

            </div>

          </div>


          {/* Right Image */}
          <div className="relative">
            
            {/* Background Glow */}
            <div className="absolute -inset-4 rounded-[30px] bg-[#d4af37]/10 blur-3xl" />

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-[#202020] shadow-2xl">
              
              <img
                src="https://i.pinimg.com/1200x/a8/db/a9/a8dba967cfe9b76257cbe44dada13066.jpg"
                alt="Urban Bazaar Premium Store"
                className="h-[350px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[450px] lg:h-[500px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 right-6 rounded-xl border border-[#d4af37]/30 bg-[#d4af37] px-5 py-4 shadow-xl sm:right-10">
              
              <p className="text-sm font-bold text-[#1b1b1b]">
                Trusted Store
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
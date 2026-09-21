import React from "react";
import { Package, Users, ShieldCheck } from "lucide-react";

const stats = [
  {
    number: "25+",
    label: "Curated Styles",
    icon: Package,
  },
  {
    number: "5K+",
    label: "Happy Customers",
    icon: Users,
  },
  {
    number: "100%",
    label: "Quality Checked",
    icon: ShieldCheck,
  },
];

const Journey = () => {
  return (
    <section className="w-full bg-[#f7f2ec] py-16 text-[#1a120c] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Image Side */}
          <div className="relative overflow-hidden">
            
            {/* Golden Border */}
            <div className="absolute -left-3 -top-3 h-full w-full border border-[#A46A2A]/40" />

            <div className="relative overflow-hidden">
              <img
                src="/hero/hero3.png"
                alt="Zeccora Journey"
                className="h-[300px] w-full object-cover object-center transition-transform duration-700 hover:scale-105 sm:h-[550px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* 15+ Experience Badge */}
              <div className="absolute bottom-4 right-3 rounded-2xl bg-white px-4 py-3 sm:bottom-5 sm:right-5 sm:px-5 sm:py-4">
                <span className="block text-2xl font-bold text-[#9F6324] sm:text-3xl">15+</span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-[#6b5b4e]">
                  Years of Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            
            {/* Small Heading */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A46A2A]">
              Our Journey
            </p>

            {/* Main Heading */}
            <h2 className="display-font text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Defining Everyday{" "}
              <span className="italic text-[#9F6324]">
                Luxury
              </span>
            </h2>

            {/* Decorative Line */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-px w-12 bg-[#A46A2A]" />
              <div className="h-2 w-2 rotate-45 bg-[#A46A2A]" />
            </div>

            {/* Description */}
            <div className="mt-7 space-y-4 text-sm leading-7 text-[#5c4c40]">
              
              <p>
                Zeccora began with a simple belief: the bag you carry
                should feel as considered as the life you carry with it.
              </p>

              <p>
                Our collection brings together elegant handbags and versatile
                shoulder bags for polished days, spontaneous plans, and every
                chapter in between.
              </p>

              <p>
                Each piece is selected for its silhouette, finish, and
                everyday usefulness. We look for thoughtful details that make
                a bag feel special long after the first look.
              </p>

              <p>
                From structured top handles to relaxed shoulder styles, we
                keep the collection refined, wearable, and in step with your style.
              </p>

              <p>
                We believe premium design should feel approachable, with
                fair pricing and a shopping experience built around trust.
              </p>

              <p className="border-l-2 border-[#9F6324] pl-4 text-[#1a120c]">
                At Zeccora, we focus on more than the product. We care
                about the feeling it brings to your everyday ritual.
                <span className="ml-1 font-semibold text-[#A46A2A]">
                  Carry your elegance, your way.
                </span>
              </p>

            </div>

            {/* Small Stats - Only Under Text */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#9F6324]/20 pt-6">
              
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group text-center"
                  >
                    
                    {/* Icon */}
                    <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-white">
                      <Icon
                        size={16}
                        className="text-[#A46A2A]"
                      />
                    </div>

                    {/* Number */}
                    <h3 className="text-lg font-bold text-[#A46A2A] sm:text-xl">
                      {item.number}
                    </h3>

                    {/* Label */}
                    <p className="mt-1 text-[10px] leading-4 text-[#8a7b70] sm:text-xs">
                      {item.label}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;
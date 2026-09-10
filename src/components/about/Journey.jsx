import React from "react";
import { Award, Package, Users, ShieldCheck } from "lucide-react";

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
    <section className="w-full bg-[#151515] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Image Side */}
          <div className="relative">
            
            {/* Golden Border */}
            <div className="absolute -left-3 -top-3 h-full w-full border border-[#d6af35]/40" />

            <div className="relative overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/28/87/c7/2887c712f8ac7adc7dec2c3f6e889040.jpg"
                alt="Urban Bazaar Journey"
                className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[550px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* 15+ Experience Badge */}
              <div className="absolute bottom-5 right-5 border border-[#d6af35]/60 bg-[#151515]/95 px-5 py-4 backdrop-blur-sm">
                
                <span className="block text-3xl font-bold text-[#d6af35]">
                  15+
                </span>

                <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-gray-200">
                  Years of Excellence
                </span>

              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            
            {/* Small Heading */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d6af35]">
              Our Journey
            </p>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Defining Everyday{" "}
              <span className="text-[#d6af35]">
                Luxury
              </span>
            </h2>

            {/* Decorative Line */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-px w-12 bg-[#d6af35]" />
              <div className="h-2 w-2 rotate-45 bg-[#d6af35]" />
            </div>

            {/* Description */}
            <div className="mt-7 space-y-4 text-sm leading-7 text-gray-300">
              
              <p>
                Urban Bazaar began with a simple belief: the bag you carry
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
                keep the edit refined, wearable, and in step with your style.
              </p>

              <p>
                We believe premium design should feel approachable, with
                fair pricing and a shopping experience built around trust.
              </p>

              <p className="border-l-2 border-[#d6af35] pl-4 text-gray-200">
                At Urban Bazaar, we focus on more than the product. We care
                about the feeling it brings to your everyday ritual.
                <span className="ml-1 font-semibold text-[#d6af35]">
                  Carry your elegance, your way.
                </span>
              </p>

            </div>

            {/* Small Stats - Only Under Text */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#d6af35]/20 pt-6">
              
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group text-center"
                  >
                    
                    {/* Icon */}
                    <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-md border border-[#d6af35]/30 bg-[#292716] transition-all duration-300 group-hover:border-[#d6af35]">
                      <Icon
                        size={16}
                        className="text-[#d6af35]"
                      />
                    </div>

                    {/* Number */}
                    <h3 className="text-lg font-bold text-[#d6af35] sm:text-xl">
                      {item.number}
                    </h3>

                    {/* Label */}
                    <p className="mt-1 text-[10px] leading-4 text-gray-400 sm:text-xs">
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
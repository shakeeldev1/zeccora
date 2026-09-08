import React from "react";
import { Award, Package, Users, ShieldCheck } from "lucide-react";

const stats = [
  {
    number: "10K+",
    label: "Product Varieties",
    icon: Package,
  },
  {
    number: "50K+",
    label: "Happy Customers",
    icon: Users,
  },
  {
    number: "100%",
    label: "Authentic Products",
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
              Building Trust{" "}
              <span className="text-[#d6af35]">
                One Order at a Time
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
                Founded with a vision to revolutionize online shopping in
                Pakistan, Urban Bazaar began its journey by focusing on
                quality, reliability, and customer satisfaction.
              </p>

              <p>
                We believe in empowering customers with access to quality
                products at competitive prices. Our mission is to make online
                shopping safe, convenient, and enjoyable for every Pakistani
                household.
              </p>

              <p>
                At Urban Bazaar, we carefully source and verify every product
                to ensure authenticity and quality. We work with trusted
                suppliers and partners to bring you the best selection across
                all categories.
              </p>

              <p>
                With a deep understanding of the Pakistani market and
                commitment to excellence, Urban Bazaar delivers products that
                meet the highest standards of quality and reliability.
              </p>

              <p>
                We master the balance between affordability and quality—
                providing genuine products at fair prices while maintaining
                strict quality control standards.
              </p>

              <p className="border-l-2 border-[#d6af35] pl-4 text-gray-200">
                At Urban Bazaar, we focus not just on the products you buy,
                but on the entire shopping experience you have with us.
                <span className="ml-1 font-semibold text-[#d6af35]">
                  Quality, Service, and Trust—redefined.
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
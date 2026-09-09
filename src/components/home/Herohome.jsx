
import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import heroImage from "../../assets/image2.png";

const Herohome = () => {
  return (
    <section className="relative min-h-[420px] w-full overflow-hidden sm:min-h-[500px] lg:min-h-[560px]">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury Ladies Bag Collection"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-5xl items-center justify-center px-5 text-center sm:min-h-[500px] sm:px-8 lg:min-h-[560px]">

        <div className="flex max-w-3xl flex-col items-center">

          {/* Premium Label */}
          <div className="mb-5 inline-flex items-center gap-2 border border-[#d4af37]/60 bg-white/10 px-4 py-2 backdrop-blur-md">
            <Sparkles size={14} className="text-[#d4af37]" />

            <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#d4af37]">
              New Luxury Collection
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Carry Your
            <span className="block italic font-light text-[#d4af37]">
              Elegance.
            </span>
          </h1>

          {/* Short Description */}
          <p className="mb-7 max-w-xl text-sm leading-7 text-white sm:text-base">
            Discover premium handbags designed to elevate
            your everyday style.
          </p>

          {/* Button */}
          <a
            href="/products"
            className="group inline-flex items-center gap-3 bg-[#d4af37] px-7 py-3.5 text-xs font-bold uppercase tracking-[2px] text-black shadow-[0_10px_35px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f2d36d]"
          >
            Explore Collection

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>
      </div>

      {/* Decorative Gold Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

    </section>
  );
};

export default Herohome;


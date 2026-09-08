import React from "react";
import { Home, ChevronRight } from "lucide-react";

const HeroAbout = () => {
  return (
    <section
      className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/e1/7d/c5/e17dc5df898c035ee3e2187c6d9b8a03.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/90 via-[#151515]/60 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-10">
        
        {/* Breadcrumb */}
        <div className="mb-7 flex items-center justify-center gap-2 text-sm">
          <a
            href="/"
            className="flex items-center gap-1.5 text-gray-300 transition-colors duration-300 hover:text-[#d6af35]"
          >
            <Home size={16} />
            Home
          </a>

          <ChevronRight size={16} className="text-[#d6af35]" />

          <span className="text-[#d6af35]">
            About Us
          </span>
        </div>

        {/* Small Heading */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#d6af35]">
          About Urban Bazaar
        </p>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Our <span className="text-[#d6af35]">Story</span>
        </h1>

        {/* Decorative Line */}
        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-[#d6af35]"></div>

          <div className="h-2.5 w-2.5 rotate-45 border border-[#d6af35]"></div>

          <div className="h-px w-12 bg-[#d6af35]"></div>
        </div>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg">
          Urban Bazaar - Pakistan's most trusted online marketplace
          where quality meets convenience.
        </p>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#151515] to-transparent"></div>
    </section>
  );
};

export default HeroAbout;
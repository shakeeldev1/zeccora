import React from "react";
import { Home, ChevronRight } from "lucide-react";

const HeroAbout = () => {
  return (
    <section className="relative isolate flex min-h-[20rem] w-full items-center justify-center overflow-hidden bg-[#1a120c] sm:min-h-[28rem] md:min-h-[34rem] lg:min-h-[40rem]">
      <img
          src="/hero/hero1.png"
          alt="Zeccora collection"
          className="absolute inset-0 -z-20 block h-full w-full object-cover object-[72%_35%] md:object-[center_35%]"
        />

      <div className="absolute inset-0 -z-10 bg-black/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#000000]/90 via-[#000000]/60 to-black/50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 text-center sm:px-8 sm:py-16 md:py-20 lg:px-10">
        <div className="mb-5 flex items-center justify-center gap-2 text-sm sm:mb-7">
          <a
            href="/"
            className="flex items-center gap-1.5 text-gray-300 transition-colors duration-300 hover:text-[#A46A2A]"
          >
            <Home size={16} />
            Home
          </a>
          <ChevronRight size={16} className="text-[#A46A2A]" />
          <span className="text-[#A46A2A]">About Us</span>
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#A46A2A] sm:mb-4 sm:text-sm sm:tracking-[0.3em]">
          The Zeccora Collection
        </p>

        <h1 className="display-font text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Made to Carry Your{" "}
          <span className="italic text-[#E8C27A]">Story</span>
        </h1>

        <div className="mx-auto mt-5 flex items-center justify-center gap-3 sm:mt-6">
          <div className="h-px w-10 bg-[#A46A2A] sm:w-12" />
          <div className="h-2.5 w-2.5 rotate-45 border border-[#A46A2A]" />
          <div className="h-px w-10 bg-[#A46A2A] sm:w-12" />
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-200 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
          A considered collection of premium handbags and shoulder bags,
          selected for the way modern women live, work, and move.
        </p>
      </div>
    </section>
  );
};

export default HeroAbout;

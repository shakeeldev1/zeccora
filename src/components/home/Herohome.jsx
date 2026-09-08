import React from "react";

const Herohome = () => {
  return (
    <section className="relative min-h-[650px] w-full overflow-hidden bg-[#080808]">
      
      {/* Background Image */}
      <img
        src="https://i.pinimg.com/736x/a6/2e/56/a62e560a3d26ec76f03981cba1bce43e.jpg"
        alt="Premium Urban Beauty Collection"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-end justify-center px-4 pb-8 sm:px-6 lg:px-8">
        
        <div className="text-center">
          
          {/* Small Text */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-[5px] text-[#d4af37]">
            Premium Collection
          </p>

          {/* Heading */}
          <h1 className="mb-5 text-3xl font-bold tracking-wide text-white sm:text-5xl lg:text-6xl">
            Elevate Your Everyday
          </h1>

          {/* Description */}
          <p className="mx-auto mb-7 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
            Discover premium essentials designed to bring style,
            innovation and quality into your everyday life.
          </p>

          {/* Button */}
          <a
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold text-[#1b1b1b] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0c84b] hover:shadow-[#d4af37]/30"
          >
            Shop Collection
          </a>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/50 to-transparent" />

    </section>
  );
};

export default Herohome;
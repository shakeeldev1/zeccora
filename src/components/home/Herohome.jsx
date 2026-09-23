import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const heroSlides = [
  {
    src: "/hero/hero1.png",
    mobileSrc: "/hero/hero1-mobile.png",
    alt: "Luxury ladies bag collection",
    subtitle: "The Zeccora Collection",
    heading: "Timeless",
    highlight: "by design",
    text: "Premium handbags, crafted to elevate every day.",
  },
  {
    src: "/hero/hero2.png",
    mobileSrc: "/hero/hero2-mobile.png",
    alt: "Featured Zeccora handbag",
    subtitle: "New season edit",
    heading: "Your style.",
    highlight: "Your signature.",
    text: "Refined silhouettes for every moment that matters.",
  },
  {
    src: "/hero/hero3.png",
    mobileSrc: "/hero/hero3-mobile.png",
    alt: "Elegant handbag styling",
    subtitle: "Made for everyday",
    heading: "Effortless",
    highlight: "elegance",
    text: "From morning to evening, carry pieces that move with you.",
  },
  {
    src: "/hero/hero4.png",
    mobileSrc: "/hero/hero4-mobile.png",
    alt: "Zeccora signature bag",
    subtitle: "Your next essential",
    heading: "Carry",
    highlight: "confidence",
    text: "Style, function, and modern luxury in perfect balance.",
  },
];

const offerLinks = [
  // { label: "50% Off", href: "/products?offer=50" },
  { label: "30% Off", href: "/products?offer=30" },
  // { label: "20% Off", href: "/products?offer=20" },
  { label: "15% Off", href: "/coming-soon", soon: true },
];

const Herohome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[calc(100svh-6rem)] min-h-[32rem] w-full overflow-hidden bg-[#1a120c] sm:h-[calc(100svh-122px)] sm:min-h-[640px]">
      <Swiper
        modules={[Autoplay]}
        speed={900}
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => {
          const isActive = activeIndex === index;
          return (
            <SwiperSlide key={slide.src} className="relative h-full w-full">
              <div className="absolute inset-0 overflow-hidden">
                <picture>
                  <source media="(max-width: 639px)" srcSet={slide.mobileSrc} />
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    className="hero-image h-full w-full object-contain object-center sm:object-cover sm:object-center"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/15 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/25 sm:to-transparent" />
              </div>

              <div className="relative z-20 flex h-full items-end pb-24 sm:items-center sm:pb-0">
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-10 lg:px-16">
                  <div
                    key={isActive ? `active-${index}` : `inactive-${index}`}
                    className={`max-w-xl sm:rounded-[28px] sm:bg-black/45 sm:p-8 sm:backdrop-blur-md lg:p-9 ${isActive ? "animate-heroTextIn" : "opacity-0"}`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E8C27A] sm:text-[11px] sm:tracking-[0.32em]">
                      {slide.subtitle}
                    </p>

                    <h1 className="display-font mt-3 text-[2.75rem] leading-[0.9] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)] sm:mt-4 sm:text-7xl">
                      {slide.heading}
                      <span className="mt-1 block italic text-[#E8C27A]">{slide.highlight}</span>
                    </h1>

                    <p className="mt-4 max-w-md text-sm leading-6 text-white/88 sm:mt-6 sm:text-base sm:leading-7">
                      {slide.text}
                    </p>

                    <div className="mt-6 flex gap-2.5 sm:mt-8 sm:gap-3">
                      <Link
                        to="/products"
                        className="hero-shine group inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#9F6324] px-4 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_36px_rgba(159,99,36,0.45)] transition hover:bg-[#8a541c] sm:flex-none sm:px-8 sm:text-[11px] sm:tracking-[0.2em]"
                      >
                        Shop collection
                        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>

                    <div className="mt-6 hidden flex-wrap gap-2 sm:flex">
                      {offerLinks.map((offer) => (
                        <Link
                          key={offer.label}
                          to={offer.href}
                          className={`rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm transition ${offer.soon
                            ? "border-white/30 bg-white/10 text-white/80 hover:text-white"
                            : "border-white/40 bg-white/15 text-white hover:bg-white hover:text-[#1a120c]"
                            }`}
                        >
                          {offer.soon ? `${offer.label} · Soon` : offer.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="pointer-events-none absolute bottom-6 left-5 z-30 flex gap-2 sm:bottom-8 sm:left-10 lg:left-16">
        {heroSlides.map((slide, index) => (
          <span
            key={slide.src}
            className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === index ? "w-8 bg-[#E8C27A]" : "w-1.5 bg-white/55"
              }`}
          />
        ))}
      </div>

      <style>{`
        .hero-image {
          transform: scale(1);
          filter: saturate(1.1) contrast(1.05);
          transition: transform 9s cubic-bezier(0.2, 0.6, 0.2, 1);
        }
        .swiper-slide-active .hero-image {
          transform: scale(1);
        }
        @media (min-width: 640px) {
          .hero-image { transform: scale(1.1); }
          .swiper-slide-active .hero-image { transform: scale(1); }
        }
        .animate-heroTextIn {
          animation: heroTextIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes heroTextIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-shine { position: relative; }
        .hero-shine::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.38) 45%, transparent 70%);
          transform: translateX(-120%);
          animation: heroShine 3.2s ease-in-out infinite;
        }
        @keyframes heroShine {
          0%, 55% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </section>
  );
};

export default Herohome;

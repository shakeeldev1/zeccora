import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const heroSlides = [
  {
    src: "/hero/hero1.png",
    alt: "Luxury ladies bag collection",
    subtitle: " ZECCORA ",
    heading: "TIMELESS",
    highlight: "BY DESIGN",
    text: "Discover a considered collection of premium handbags made to elevate every day.",
  },
  {
    src: "/hero/hero2.png",
    alt: "Featured Zeccora handbag",
    subtitle: "NEW SEASON",
    heading: "YOUR STYLE",
    highlight: "YOUR SIGNATURE",
    text: "Refined silhouettes and thoughtful details for every moment that matters.",
  },
  {
    src: "/hero/hero3.png",
    alt: "Elegant handbag styling",
    subtitle: "MADE FOR EVERYDAY",
    heading: "EFFORTLESS",
    highlight: "ELEGANCE",
    text: "Versatile handbags designed to move seamlessly from morning to evening.",
  },
  {
    src: "/hero/hero4.png",
    alt: "Zeccora signature bag",
    subtitle: "YOUR NEXT ESSENTIAL",
    heading: "CARRY",
    highlight: "CONFIDENCE",
    text: "Find the perfect balance of refined style, everyday function, and modern luxury.",
  },
];

const Herohome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="relative h-screen sm:h-[100dvh] min-h-[650px] w-full overflow-hidden bg-gradient-to-b from-[#000000] via-[#120805] to-[#000000] font-sans">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={1200}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop
        navigation={{
          prevEl,
          nextEl,
        }}
        pagination={{
          el: ".custom-swiper-pagination",
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => {
          const isActive = activeIndex === index;
          return (
            <SwiperSlide key={index} className="relative h-full w-full">
              {/* ================= IMAGE ================= */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  className="hero-image h-full w-full object-cover object-center"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.5)_100%)]" />
              </div>

              {/* ================= DECORATIVE FRAME ================= */}
              <div className="pointer-events-none absolute inset-5 z-10 border border-white/10 sm:inset-7 lg:inset-10" />

              {/* ================= CONTENT ================= */}
              <div className="relative z-20 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-20">
                  <div
                    key={isActive ? `active-${index}` : `inactive-${index}`}
                    className={`max-w-2xl pb-16 sm:pb-12 ${isActive ? "animate-heroTextIn" : "opacity-0"}`}
                  >
                    {/* Eyebrow / Subtitle */}
                    <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
                      <span className="h-px w-8 bg-[#A46A2A] sm:w-10" />
                      <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#FFFFC9] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-xs">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-sans leading-[1.02]">
                      <span className="block text-3xl font-semibold  text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] sm:text-5xl lg:text-6xl">
                        {slide.heading}
                      </span>
                      <span className="mt-1 block text-3xl font-bold tracking-[0.06em] text-[#A46A2A] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] sm:text-5xl lg:text-6xl">
                        {slide.highlight}
                      </span>
                    </h1>

                    {/* Divider */}
                    <div className="my-5 flex items-center gap-3 sm:my-7">
                      <span className="h-px w-12 bg-[#A46A2A] sm:w-16" />
                      <span className="h-1.5 w-1.5 rotate-45 bg-[#A46A2A]" />
                      <span className="h-px w-6 bg-white/30" />
                    </div>

                    {/* Description */}
                    <p className="max-w-lg font-sans text-xs font-medium leading-6 tracking-wide text-zinc-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-sm sm:leading-7 lg:text-base">
                      {slide.text}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-7 flex flex-wrap items-center gap-5 sm:mt-9 sm:gap-6">
                      <Link
                        to="/products"
                        className="group relative inline-flex items-center gap-4 overflow-hidden border-2 border-[#A46A2A] bg-[#A46A2A] px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.25em] text-black shadow-lg transition-all duration-500 hover:bg-black hover:text-[#A46A2A] sm:px-8 sm:py-4"
                      >
                        <span className="relative z-10">Shop Collection</span>
                        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                      </Link>

                      <Link
                        to="/about"
                        className="group hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/90 drop-shadow-md transition-colors duration-300 hover:text-[#A46A2A] sm:flex"
                      >
                        Discover Zeccora
                        <span className="h-px w-8 bg-white/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[#A46A2A]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= SIDE LABEL ================= */}
              <div className="absolute bottom-28 right-8 z-20 hidden rotate-90 items-center gap-3 lg:flex">
                <span className="text-[9px] font-bold tracking-[0.4em] text-white/50">
                  ZECCORA
                </span>
                <span className="h-px w-8 bg-white/30" />
                <span className="text-[9px] font-bold tracking-[0.3em] text-white/50">
                  LUXURY
                </span>
              </div>
            </SwiperSlide>
          );
        })}

        {/* ================= NAVIGATION BUTTONS ================= */}
        <button
          ref={(node) => setPrevEl(node)}
          className="group absolute bottom-10 left-8 z-30 hidden h-12 w-12 items-center justify-center border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-[#A46A2A] hover:bg-[#A46A2A] hover:text-black sm:flex lg:left-12"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
        </button>

        <button
          ref={(node) => setNextEl(node)}
          className="group absolute bottom-10 left-24 z-30 hidden h-12 w-12 items-center justify-center border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-[#A46A2A] hover:bg-[#A46A2A] hover:text-black sm:flex lg:left-28"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {/* ================= SLIDE COUNTER ================= */}
        <div className="absolute bottom-10 right-8 z-30 flex items-center gap-3 text-white lg:right-12">
          <span className="text-sm font-bold tracking-widest text-[#A46A2A]">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-10 bg-white/30" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/50">
            {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>

        {/* ================= PAGINATION ================= */}
        <div className="custom-swiper-pagination absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2 sm:bottom-11" />
      </Swiper>

      {/* ================= CUSTOM STYLES ================= */}
      <style>{`
        .hero-image {
          transform: scale(1.06);
          transition: transform 7s cubic-bezier(0.2, 0.6, 0.2, 1);
        }

        .swiper-slide-active .hero-image {
          transform: scale(1);
        }

        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          margin: 0 5px !important;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.4s ease;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 9999px;
          background: #A46A2A;
          box-shadow: 0 0 12px rgba(164, 106, 42, 0.8);
        }

        .animate-heroTextIn {
          animation: heroTextIn 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes heroTextIn {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Herohome;
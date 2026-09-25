import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const HERO_SLIDES = [
  {
    src: "/hero/hero1.png",
    alt: "Luxury ladies bag collection",
    subtitle: "The Zeccora Collection",
    heading: "Timeless",
    highlight: "by design",
    text: "Premium handbags, crafted to elevate every day.",
  },
  {
    src: "/hero/hero2.png",
    alt: "Featured Zeccora handbag",
    subtitle: "New season edit",
    heading: "Your style.",
    highlight: "Your signature.",
    text: "Refined silhouettes for every moment that matters.",
  },
  {
    src: "/hero/hero3.png",
    alt: "Elegant handbag styling",
    subtitle: "Made for everyday",
    heading: "Effortless",
    highlight: "elegance",
    text: "From morning to evening, carry pieces that move with you.",
  },
  {
    src: "/hero/hero4.png",
    alt: "Zeccora signature bag",
    subtitle: "Your next essential",
    heading: "Carry",
    highlight: "confidence",
    text: "Style, function, and modern luxury in perfect balance.",
  },
];

const OFFER_LINKS = [
  { label: "30% Off", href: "/products?offer=30" },
  { label: "15% Off", href: "/coming-soon", soon: true },
];

const Herohome = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[min(58svh,32rem)] min-h-[22rem] w-full overflow-hidden bg-[#1a120c] sm:h-[min(64svh,38rem)] sm:min-h-[28rem] md:h-[min(100svh,54rem)] md:min-h-[36rem] lg:h-[calc(100svh-7.5rem)] lg:min-h-[42rem]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper h-full w-full"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.src} className="relative !h-full w-full overflow-hidden">
            <img
              src={slide.src}
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="hero-image absolute inset-0 h-full w-full object-cover object-[72%_35%] sm:object-[70%_40%] md:object-[60%_center] lg:object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 md:bg-gradient-to-r md:from-black/80 md:via-black/35 md:to-transparent" />

            <div className="relative z-20 flex h-full items-end pb-5 sm:pb-8 md:items-center md:pb-0">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-10 lg:px-16">
                <div className="mx-auto max-w-xl text-center md:mx-0 md:rounded-[28px] md:bg-black/40 md:p-7 md:text-left md:backdrop-blur-md lg:p-9">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E8C27A] md:text-[11px] md:tracking-[0.32em]">
                    {slide.subtitle}
                  </p>

                  <h1 className="display-font mt-2 text-[2rem] leading-[0.95] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] sm:mt-3 sm:text-4xl md:mt-4 md:text-6xl lg:text-7xl">
                    {slide.heading}
                    <span className="mt-1 block italic text-[#E8C27A]">{slide.highlight}</span>
                  </h1>

                  <p className="mx-auto mt-3 hidden max-w-md text-sm leading-6 text-white/90 sm:block md:mx-0 md:mt-5 md:text-base md:leading-7">
                    {slide.text}
                  </p>

                  <div className="mx-auto mt-5 flex max-w-[19.5rem] justify-center gap-2 sm:mt-6 sm:max-w-none sm:gap-2.5 md:mx-0 md:mt-8 md:justify-start">
                    <Link
                      to="/products"
                      className="hero-shine group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 overflow-hidden rounded-full bg-[#9F6324] px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_12px_28px_rgba(159,99,36,0.4)] transition duration-300 hover:bg-[#8a541c] sm:flex-none sm:gap-2 sm:px-6 sm:py-3.5 sm:text-[11px] sm:tracking-[0.14em] md:px-8"
                    >
                      Shop Now
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      to="/products?offer=30"
                      className="inline-flex min-w-0 flex-1 items-center justify-center rounded-full bg-white px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1a120c] transition duration-300 hover:bg-[#E8C27A] sm:flex-none sm:px-6 sm:py-3.5 sm:text-[11px] sm:tracking-[0.14em] md:px-7"
                    >
                      30% Off
                    </Link>
                  </div>

                  <div className="mt-4 flex justify-center gap-1.5 md:hidden">
                    {HERO_SLIDES.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        type="button"
                        onClick={() => swiperRef.current?.slideToLoop(dotIndex)}
                        aria-label={`Go to slide ${dotIndex + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          activeIndex === dotIndex ? "w-6 bg-[#E8C27A]" : "w-1.5 bg-white/55"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="mt-5 hidden flex-wrap gap-2 md:mt-6 md:flex">
                    {OFFER_LINKS.map((offer) => (
                      <Link
                        key={offer.label}
                        to={offer.href}
                        className={`rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm transition duration-300 ${
                          offer.soon
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
        ))}
      </Swiper>

      {/* Interactive Desktop Pagination Dots */}
      <div className="absolute bottom-8 left-10 z-30 hidden gap-2.5 md:flex lg:left-16">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => swiperRef.current?.slideToLoop(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              activeIndex === index ? "w-8 bg-[#E8C27A]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Embedded Styles */}
      <style>{`
        .hero-swiper,
        .hero-swiper .swiper-wrapper,
        .hero-swiper .swiper-slide {
          height: 100% !important;
        }
        .hero-image {
          transform: scale(1.08);
          filter: saturate(1.05) contrast(1.02);
          transition: transform 9s cubic-bezier(0.2, 0.6, 0.2, 1);
        }
        .swiper-slide-active .hero-image {
          transform: scale(1);
        }
        .hero-shine {
          position: relative;
        }
        .hero-shine::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.35) 45%, transparent 70%);
          transform: translateX(-120%);
          animation: heroShine 3.5s ease-in-out infinite;
        }
        @keyframes heroShine {
          0%, 60% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </section>
  );
};

export default Herohome;
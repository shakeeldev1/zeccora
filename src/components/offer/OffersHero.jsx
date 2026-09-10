import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const OffersHero = () => {
    return (
        <section className="relative isolate overflow-hidden border-b border-white/10">
            <img
                src="https://i.pinimg.com/1200x/25/66/78/25667880f4bade590e43b99f6152df4f.jpg"
                alt="Exclusive offers from Urban Bazaar"
                className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,14,14,.97)_0%,rgba(14,14,14,.82)_46%,rgba(14,14,14,.28)_100%)]" />
            <div className="absolute inset-0 -z-10 bg-black/10" />

            <div className="mx-auto flex min-h-107.5 max-w-7xl items-center justify-center px-4 py-16 text-center sm:min-h-125 sm:px-6 lg:px-8">
                <div className="flex max-w-2xl flex-col items-center">
                    <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-center gap-2 text-xs font-medium text-gray-300 sm:text-sm">
                        <a href="/" className="transition hover:text-[#f0c84b]">Home</a>
                        <span className="text-gray-500">/</span>
                        <span className="text-[#f0c84b]">Offers</span>
                        <span className="text-gray-500">/</span>
                        <span className="text-gray-400">Special Deals</span>
                    </nav>

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/35 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f0c84b] backdrop-blur-sm">
                        <Sparkles size={14} />
                        Limited-time edit
                    </div>
                    <h1 className="font-serif text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
                        Exclusive
                        <span className="block text-[#d4af37]">Offers</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-200 sm:text-base">
                        Discover amazing deals on our premium products. Limited time offers you don&apos;t want to miss!
                    </p>
                    <a
                        href="#special-deals"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d4af37] px-6 py-3.5 text-sm font-bold text-[#171717] transition hover:-translate-y-0.5 hover:bg-[#f0c84b]"
                    >
                        Shop special deals
                        <ArrowRight size={17} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OffersHero;

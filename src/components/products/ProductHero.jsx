import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "../../assets/image4.png";

const ProductHero = () => {
    return (
        <section className="relative isolate min-h-107.5 overflow-hidden border-b border-white/10 sm:min-h-125">
            <img
                src={heroImage}
                alt="Premium collection at Zeccora"
                className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,15,15,.96)_0%,rgba(15,15,15,.75)_48%,rgba(15,15,15,.22)_100%)]" />
            <div className="absolute inset-0 -z-10 bg-black/15" />

            <div className="mx-auto flex min-h-107.5 max-w-7xl items-center justify-center px-4 py-16 text-center sm:min-h-125 sm:px-6 lg:px-8">
                <div className="flex max-w-2xl flex-col items-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f0c84b] backdrop-blur-sm">
                        <Sparkles size={14} />
                        The Zeccora Edit
                    </div>
                    <h1 className="font-serif text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
                        Pieces that make
                        <span className="block text-[#d4af37]">everyday iconic.</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-gray-200 sm:text-base">
                        Discover a considered edit of premium bags, made for the moments
                        that deserve a little more style.
                    </p>
                    <a
                        href="#collection"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d4af37] px-6 py-3.5 text-sm font-bold text-[#171717] transition hover:-translate-y-0.5 hover:bg-[#f0c84b]"
                    >
                        Explore collection
                        <ArrowDown size={17} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;

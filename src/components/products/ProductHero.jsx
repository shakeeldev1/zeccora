import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "../../assets/image4.png";

const ProductHero = () => {
    return (
        <section className="relative isolate min-h-[420px] overflow-hidden border-b border-[#A46A2A]/20 sm:min-h-[500px]">
            <img
                src={heroImage}
                alt="Premium collection at Zeccora"
                className="absolute inset-0 -z-20 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(164,106,42,0.18),rgba(0,0,0,0.42)_36%,rgba(0,0,0,0.78)_100%)]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.58)_36%,rgba(0,0,0,0.45)_100%)]" />

            <div className="mx-auto flex min-h-[420px] max-w-[1600px] items-center justify-center px-4 py-16 text-center sm:min-h-[500px] sm:px-6 lg:px-10">
                <div className="flex max-w-3xl flex-col items-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A46A2A]/60 bg-[#A46A2A]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFFFC9] backdrop-blur-sm">
                        <Sparkles size={12} className="text-[#A46A2A]" />
                        The Zeccora Edit
                    </div>

                    <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.2rem]">
                        Pieces that make
                        <span className="mt-2 block text-[#A46A2A]">everyday iconic.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base">
                        Discover a considered edit of premium bags, made for the moments that deserve a little more style, intention, and confidence.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#collection"
                            className="inline-flex items-center gap-3 rounded-full bg-[#A46A2A] px-6 py-3.5 text-sm font-bold text-[#000000] shadow-lg shadow-[#A46A2A]/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFFFC9]"
                        >
                            Explore collection
                            <ArrowDown size={17} />
                        </a>

                        <a
                            href="/offers"
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-[#A46A2A] hover:text-[#A46A2A]"
                        >
                            See offers
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const OffersHero = () => {
    return (
        <section className="relative isolate overflow-hidden border-b border-[#A46A2A]/20">
            <img
                src="https://i.pinimg.com/736x/8a/16/47/8a1647f900a974b524237331e9fc0cdb.jpg"
                alt="Exclusive offers from Zeccora"
                className="absolute inset-0 -z-20 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(164,106,42,0.15),rgba(0,0,0,0.38)_35%,rgba(0,0,0,0.78)_100%)]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.74)_0%,rgba(0,0,0,0.62)_36%,rgba(0,0,0,0.55)_100%)]" />

            <div className="mx-auto flex min-h-[420px] max-w-[1600px] items-center justify-center px-4 py-16 text-center sm:min-h-[500px] sm:px-6 lg:px-10">
                <div className="flex max-w-3xl flex-col items-center">
                    <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-center gap-2 text-xs font-medium text-gray-300 sm:text-sm">
                        <a href="/" className="transition hover:text-[#FFFFC9]">Home</a>
                        <span className="text-[#A46A2A]">/</span>
                        <span className="text-[#FFFFC9]">Offers</span>
                        <span className="text-[#A46A2A]">/</span>
                        <span className="text-gray-400">Special Deals</span>
                    </nav>

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A46A2A]/60 bg-[#A46A2A]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFFFC9] backdrop-blur-sm">
                        <Sparkles size={12} className="text-[#A46A2A]" />
                        Limited-time edit
                    </div>

                    <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                        Luxury,
                        <span className="mt-2 block text-[#A46A2A]">For Less</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base">
                        Discover premium essentials, seasonal edits, and curated offers designed to make your next style moment feel even more special.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#special-deals"
                            className="inline-flex items-center gap-3 rounded-full bg-[#A46A2A] px-6 py-3.5 text-sm font-bold text-[#000000] shadow-lg shadow-[#A46A2A]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFFFC9]"
                        >
                            Explore offers
                            <ArrowRight size={17} />
                        </a>

                        <a
                            href="/products"
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/25 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-[#A46A2A] hover:text-[#A46A2A]"
                        >
                            View collection
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OffersHero;

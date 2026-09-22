import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { OFFERS } from "../../lib/offers";

const OffersHero = () => {
    return (
        <section className="relative isolate min-h-[360px] overflow-hidden bg-[#efe6dc] sm:min-h-[540px]">
            <img
                src="/hero/hero4.png"
                alt="Exclusive offers from Zeccora"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_20%] sm:object-center"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a120c]/35 via-transparent to-transparent" />
            <div className="pointer-events-none absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-[#9F6324]/20 blur-3xl" />

            <div className="mx-auto flex min-h-[360px] max-w-7xl items-end px-4 py-8 sm:min-h-[540px] sm:items-center sm:px-8 sm:py-10 lg:px-12">
                <div className="relative max-w-xl overflow-hidden rounded-[24px] border border-white/70 bg-white/80 p-4 shadow-[0_30px_80px_rgba(26,18,12,0.2)] backdrop-blur-xl sm:rounded-[32px] sm:p-9 lg:p-10">
                    <div className="absolute inset-x-8 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#9F6324] to-transparent" />

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#9F6324]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9F6324]">
                        <Sparkles size={12} />
                        Limited-time edit
                    </div>

                    <h1 className="display-font text-[2.15rem] leading-[0.94] text-[#1a120c] sm:text-6xl">
                        Luxury,
                        <span className="mt-1 block italic text-[#9F6324]">for less.</span>
                    </h1>

                    <p className="mt-5 max-w-md text-sm leading-7 text-[#5c4c40]">
                      Shop 30% OFF on the Zeccora Collection - available now. 15% OFF coming soon! Sale prices are applied to products and in your cart.

                    </p>

                    <div className="chip-row mt-5 sm:mt-7 sm:flex-wrap">
                        {OFFERS.map((offer) => (
                            <Link
                                key={offer.percent}
                                to={offer.href}
                                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                                    offer.comingSoon
                                        ? "bg-[#f7f2ec] text-[#8a7b70] hover:text-[#9F6324]"
                                        : "bg-[#9F6324] text-white hover:bg-[#8a541c]"
                                }`}
                            >
                                {offer.comingSoon ? `${offer.value} · Soon` : `Shop ${offer.value}`}
                                {!offer.comingSoon ? <ArrowRight size={14} /> : null}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OffersHero;

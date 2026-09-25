import React from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const offerLinks = [
    { label: "30% Off", href: "/products?offer=30" },
    { label: "15% Off", href: "/coming-soon", soon: true },
];

const ProductHero = () => {
    return (
        <section className="relative isolate min-h-[22rem] overflow-hidden bg-[#efe6dc] sm:min-h-[28rem] md:min-h-[34rem] lg:min-h-[40rem]">
            <img
                src="/hero/hero2.png"
                alt="Zeccora collection"
                className="absolute inset-0 -z-20 block h-full w-full object-cover object-[72%_35%] md:object-center"
            />

            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(26,18,12,0.55)_0%,rgba(26,18,12,0.28)_55%,rgba(26,18,12,0.12)_100%)] md:bg-gradient-to-r md:from-[#1a120c]/50 md:via-[#1a120c]/18 md:to-transparent" />
            <div className="pointer-events-none absolute -left-16 top-1/4 -z-10 h-64 w-64 rounded-full bg-[#9F6324]/20 blur-3xl" />

            <div className="mx-auto flex min-h-[22rem] max-w-7xl items-end px-4 py-8 sm:min-h-[28rem] sm:px-6 md:min-h-[34rem] md:items-center md:px-8 md:py-10 lg:min-h-[40rem] lg:px-12">
                <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_30px_80px_rgba(26,18,12,0.2)] backdrop-blur-xl sm:rounded-[28px] sm:p-7 md:p-9 lg:p-10">
                    <div className="absolute inset-x-8 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#9F6324] to-transparent" />

                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#9F6324]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9F6324] sm:mb-4">
                        Shop the collection
                    </div>

                    <h1 className="display-font text-[2rem] leading-[0.94] text-[#1a120c] sm:text-4xl md:text-5xl lg:text-6xl">
                        Pieces that make
                        <span className="mt-1 block italic text-[#9F6324]">
                            everyday iconic.
                        </span>
                    </h1>

                    <p className="mt-4 max-w-md text-sm leading-6 text-[#5c4c40] sm:mt-5 sm:leading-7">
                        Curated everyday pieces with live 30% off, and 15% off coming soon.
                    </p>

                    <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                        <a
                            href="#collection"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#9F6324] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_12px_28px_rgba(159,99,36,0.32)] transition hover:bg-[#8a541c] sm:w-auto"
                        >
                            Explore collection
                            <ArrowDown size={15} />
                        </a>

                        <Link
                            to="/offers"
                            className="inline-flex w-full items-center justify-center rounded-full border border-[#9F6324]/30 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1a120c] transition hover:border-[#9F6324] hover:text-[#9F6324] sm:w-auto"
                        >
                            See offers
                        </Link>
                    </div>

                    <div className="chip-row mt-4 sm:mt-5 sm:flex-wrap">
                        {offerLinks.map((offer) => (
                            <Link
                                key={offer.label}
                                to={offer.href}
                                className={`rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                                    offer.soon
                                        ? "bg-[#f7f2ec] text-[#8a7b70] hover:text-[#9F6324]"
                                        : "bg-[#1a120c] text-white hover:bg-[#9F6324]"
                                }`}
                            >
                                {offer.soon ? `${offer.label} · Soon` : offer.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;

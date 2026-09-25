import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Gift, Percent, ShieldCheck, BadgePercent, Tag } from "lucide-react";
import { OFFERS } from "../../lib/offers";

import image7 from "../../assets/img7 (4).jpeg";
import image10 from "../../assets/img 10.jpeg";
import image21 from "../../assets/img 21.png";
import image18 from "../../assets/img18.png";

const offerIcons = {
    50: Percent,
    30: Tag,
    20: BadgePercent,
    15: Gift,
};

const offerVisuals = {
    30: { image: image10, oldPrice: "3,143 PKR", salePrice: "2,200 PKR" },
    15: { image: image18, oldPrice: "3,143 PKR", salePrice: "2,550 PKR" },
};

const perks = [
    { icon: ShieldCheck, label: "Cash on delivery" },
    { icon: BadgePercent, label: "Sale price already applied" },
    { icon: Clock3, label: "2–5 day dispatch" },
];
const SpecialOffers = () => {
    const [copiedCode, setCopiedCode] = useState("");

    const copyCode = async (event, code) => {
        event.preventDefault();
        event.stopPropagation();
        await navigator.clipboard.writeText(code);
        setCopiedCode(code);
        window.setTimeout(() => setCopiedCode(""), 1600);
    };

    return (
        <section id="special-deals" className="bg-[#f7f2ec] py-12 text-[#1a120c] sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center sm:mb-10">
                    <p className="section-kicker">Special deals</p>
                    <h2 className="display-font mt-3 text-3xl sm:text-4xl md:text-5xl">A little more luxury, for less</h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6b5b4e]">
                        Click any offer to shop that discount. Sale prices are already applied on the product page and in your cart.
                    </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                    {perks.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-[#5c4c40] shadow-[0_10px_30px_rgba(26,18,12,0.04)] sm:rounded-[28px]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#efe6dc] text-[#9F6324]">
                                <Icon size={18} />
                            </div>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {OFFERS.map((offer) => {
                        const Icon = offerIcons[offer.percent];
                        const visual = offerVisuals[offer.percent];
                        return (
                            <article
                                key={offer.title}
                                className="group overflow-hidden rounded-[32px] bg-white shadow-[0_10px_30px_rgba(26,18,12,0.04)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,18,12,0.1)]"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-[#efe6dc]">
                                    <img
                                        src={visual.image}
                                        alt={offer.title}
                                        className={`h-full w-full object-cover object-center transition duration-700 group-hover:scale-105 ${offer.comingSoon ? "grayscale-[0.2]" : ""}`}
                                    />
                                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9F6324]">
                                        {offer.comingSoon ? "Coming soon" : "Online exclusive"}
                                    </span>
                                </div>

                                <div className="p-6 sm:p-8">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9F6324] text-white">
                                            <Icon size={20} />
                                        </div>
                                        <p className="text-sm font-medium text-[#6b5b4e]">{offer.title}</p>
                                    </div>

                                    <h3 className="display-font mt-4 text-4xl text-[#9F6324] sm:text-5xl">{offer.value}</h3>
                                    <div className="mt-2 flex items-center gap-2 text-sm">
                                        <span className="font-semibold text-[#1a120c]">{visual.salePrice}</span>
                                        <span className="text-[#8a7b70] line-through">{visual.oldPrice}</span>
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-[#6b5b4e]">{offer.detail}</p>

                                    <div className="mt-6 flex flex-wrap items-center gap-3">
                                        {offer.comingSoon ? (
                                            <Link
                                                to={offer.href}
                                                className="inline-flex items-center gap-2 rounded-full bg-[#efe6dc] px-5 py-2.5 text-sm font-semibold text-[#9F6324]"
                                            >
                                                View coming soon <ArrowRight size={16} />
                                            </Link>
                                        ) : (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={(event) => copyCode(event, offer.code)}
                                                    className="rounded-full bg-[#efe6dc] px-4 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#1a120c] transition hover:text-[#9F6324]"
                                                >
                                                    {copiedCode === offer.code ? "COPIED" : `CODE: ${offer.code}`}
                                                </button>
                                                <Link
                                                    to={offer.href}
                                                    className="inline-flex items-center gap-2 rounded-full bg-[#9F6324] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#8a541c]"
                                                >
                                                    Shop {offer.value} <ArrowRight size={16} />
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[32px] bg-white p-7 shadow-[0_10px_30px_rgba(26,18,12,0.04)] sm:flex-row sm:items-center sm:p-9">
                    <div>
                        <p className="section-kicker">More to discover</p>
                        <h3 className="display-font mt-2 text-2xl sm:text-3xl">Your next signature piece is waiting.</h3>
                        <p className="mt-2 text-sm text-[#6b5b4e]">Browse the complete collection and find the bag that completes your day.</p>
                    </div>
                    <Link to="/products" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#9F6324] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8a541c]">
                        View collection <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;

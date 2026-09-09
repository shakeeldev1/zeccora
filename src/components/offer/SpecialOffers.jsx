import React from "react";
import { ArrowRight, Clock3, Gift, Tag } from "lucide-react";

const offers = [
    {
        title: "First Order Privilege",
        value: "15% OFF",
        detail: "Make your first purchase a memorable one with an exclusive welcome saving.",
        code: "WELCOME15",
        icon: Gift,
        tone: "bg-[#302817]",
    },
    {
        title: "The Weekend Edit",
        value: "UP TO 30% OFF",
        detail: "Refresh your collection with selected premium pieces at special prices.",
        code: "WEEKEND30",
        icon: Tag,
        tone: "bg-[#292320]",
    },
];

const SpecialOffers = () => {
    return (
        <section id="special-deals" className="bg-[#1b1b1b] py-16 text-white sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Special deals</p>
                        <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">A little more luxury, for less</h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                            Enjoy carefully selected offers designed to bring your next favorite piece closer.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock3 size={16} className="text-[#d4af37]" />
                        Limited availability
                    </div>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {offers.map((offer) => {
                        const Icon = offer.icon;
                        return (
                            <article key={offer.title} className={`group relative overflow-hidden rounded-2xl border border-[#d4af37]/20 ${offer.tone} p-7 sm:p-9`}>
                                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#d4af37]/15 transition duration-500 group-hover:scale-125" />
                                <div className="relative">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4af37] text-[#171717]">
                                            <Icon size={22} />
                                        </div>
                                        <span className="rounded-full border border-[#d4af37]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0c84b]">Online exclusive</span>
                                    </div>
                                    <p className="mt-8 text-sm font-semibold text-gray-300">{offer.title}</p>
                                    <h3 className="mt-2 font-serif text-4xl font-bold text-[#f0c84b] sm:text-5xl">{offer.value}</h3>
                                    <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">{offer.detail}</p>
                                    <div className="mt-7 flex flex-wrap items-center gap-4">
                                        <span className="border border-dashed border-[#d4af37]/50 bg-black/20 px-4 py-2 text-xs font-bold tracking-wider text-white">CODE: {offer.code}</span>
                                        <a href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-[#f0c84b] transition hover:gap-3">
                                            Shop offer <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-[#232323] p-7 sm:flex-row sm:items-center sm:p-9">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">More to discover</p>
                        <h3 className="mt-2 font-serif text-2xl font-bold">Your next signature piece is waiting.</h3>
                        <p className="mt-2 text-sm text-gray-400">Browse the complete collection and find your perfect match.</p>
                    </div>
                    <a href="/products" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#d4af37]/60 px-5 py-3 text-sm font-bold text-[#f0c84b] transition hover:bg-[#d4af37] hover:text-[#171717]">
                        View collection <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;

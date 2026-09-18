import React from "react";
import { ArrowRight, Clock3, Gift, ShieldCheck, Sparkles, Tag } from "lucide-react";

const offers = [
    {
        title: "First Order Privilege",
        value: "15% OFF",
        detail: "Make your first purchase feel even more special with an exclusive welcome discount on your next signature piece.",
        code: "WELCOME15",
        icon: Gift,
        tone: "bg-[#2a1d11]",
    },
    {
        title: "The Weekend Edit",
        value: "UP TO 30% OFF",
        detail: "Refresh your collection with premium essentials and seasonal favorites selected for refined everyday styling.",
        code: "WEEKEND30",
        icon: Tag,
        tone: "bg-[#1d1714]",
    },
];

const perks = [
    { icon: ShieldCheck, label: "Secure checkout" },
    { icon: Sparkles, label: "Curated luxury picks" },
    { icon: Clock3, label: "Limited stock" },
];

const SpecialOffers = () => {
    return (
        <section id="special-deals" className="bg-gradient-to-b from-[#000000] via-[#120805] to-[#000000] py-16 text-white sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A46A2A]">Special deals</p>
                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A little more luxury, for less</h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                            Enjoy carefully selected offers designed to bring your next favorite piece closer while keeping the experience elevated and effortless.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock3 size={16} className="text-[#A46A2A]" />
                        Limited availability
                    </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {perks.map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-gray-200"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#A46A2A]/40 bg-[#A46A2A]/10 text-[#A46A2A]">
                                <Icon size={18} />
                            </div>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {offers.map((offer) => {
                        const Icon = offer.icon;
                        return (
                            <article key={offer.title} className={`group relative overflow-hidden rounded-[28px] border border-[#A46A2A]/25 ${offer.tone} p-7 shadow-[0_20px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#A46A2A]/50 sm:p-9`}>
                                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#A46A2A]/20 transition duration-500 group-hover:scale-125" />
                                <div className="relative">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A46A2A] text-[#000000] shadow-lg shadow-[#A46A2A]/25">
                                            <Icon size={22} />
                                        </div>
                                        <span className="rounded-full border border-[#A46A2A]/30 bg-black/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFFFC9]">Online exclusive</span>
                                    </div>

                                    <p className="mt-8 text-sm font-semibold text-gray-300">{offer.title}</p>
                                    <h3 className="mt-2 text-4xl font-bold text-[#FFFFC9] sm:text-5xl">{offer.value}</h3>
                                    <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">{offer.detail}</p>

                                    <div className="mt-7 flex flex-wrap items-center gap-4">
                                        <span className="border border-dashed border-[#A46A2A]/60 bg-black/20 px-4 py-2 text-xs font-bold tracking-[0.2em] text-white">CODE: {offer.code}</span>
                                        <a href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-[#FFFFC9] transition hover:gap-3">
                                            Shop offer <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[28px] border border-[#A46A2A]/20 bg-gradient-to-br from-[#160b05] via-[#120805] to-[#000000] p-7 shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:flex-row sm:items-center sm:p-9">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A46A2A]">More to discover</p>
                        <h3 className="mt-2 text-2xl font-bold text-white">Your next signature piece is waiting.</h3>
                        <p className="mt-2 text-sm text-gray-400">Browse the complete collection and find the bag that completes your day effortlessly.</p>
                    </div>
                    <a href="/products" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#A46A2A]/60 bg-[#A46A2A]/10 px-5 py-3 text-sm font-bold text-[#FFFFC9] transition duration-300 hover:bg-[#A46A2A] hover:text-[#000000]">
                        View collection <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;

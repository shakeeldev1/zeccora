import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";

const ComingSoon = () => {
    return (
        <section className="relative min-h-[80vh] bg-[#f7f2ec] px-4 py-20 text-[#1a120c] sm:px-6 lg:px-8">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <p className="section-kicker">15% Off</p>
                <h1 className="display-font mt-4 text-4xl sm:text-7xl">Coming Soon</h1>
                <p className="mt-6 max-w-xl text-sm leading-7 text-[#6b5b4e] sm:text-base">
                    Our first-order 15% welcome offer is not live yet. 50% off, 30% off, and 20% off are available now while this deal is being prepared.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#5c4c40]">
                    <Clock3 size={16} className="text-[#9F6324]" />
                    Launching shortly
                </div>

                <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
                    <Link
                        to="/products?offer=50"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9F6324] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8a541c]"
                    >
                        Shop 50% Off <ArrowRight size={16} />
                    </Link>
                    <Link
                        to="/offers"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#5c4c40] transition hover:text-[#9F6324]"
                    >
                        View live offers
                    </Link>
                    <Link
                        to="/products"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#5c4c40] transition hover:text-[#9F6324]"
                    >
                        Browse collection
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;

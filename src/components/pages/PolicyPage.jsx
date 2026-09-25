import React from "react";
import { Link } from "react-router-dom";

const PolicyPage = ({ eyebrow, title, intro, sections }) => {
    return (
        <section className="min-h-[70vh] bg-[#f7f2ec] px-4 py-10 text-[#1a120c] sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9F6324]">{eyebrow}</p>
                <h1 className="mt-3 display-font text-3xl sm:text-5xl md:text-6xl">{title}</h1>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6b5b4e] sm:text-base">{intro}</p>

                <div className="mt-10 space-y-6">
                    {sections.map((section) => (
                        <article key={section.heading} className="rounded-[28px] bg-white p-6 sm:p-8">
                            <h2 className="text-xl font-semibold text-[#9F6324]">{section.heading}</h2>
                            <p className="mt-3 text-sm leading-7 text-[#5c4c40]">{section.body}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4 text-sm">
                    <Link to="/shipping" className="font-medium text-[#9F6324] transition hover:underline">Shipping</Link>
                    <Link to="/returns" className="font-medium text-[#9F6324] transition hover:underline">Returns</Link>
                    <Link to="/size-guide" className="font-medium text-[#9F6324] transition hover:underline">Size guide</Link>
                    <Link to="/faqs" className="font-medium text-[#9F6324] transition hover:underline">FAQs</Link>
                    <Link to="/contact" className="font-medium text-[#9F6324] transition hover:underline">Contact info@zeccora.com</Link>
                </div>
            </div>
        </section>
    );
};

export default PolicyPage;

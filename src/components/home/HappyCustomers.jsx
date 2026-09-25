import React from "react";
import { Quote, Star } from "lucide-react";

const reviews = [
    {
        name: "Ayesha Malik",
        city: "Bahawalpur",
        rating: 5,
        text: "The bag looks even better in person. Packaging was premium and delivery was quick.",
    },
    {
        name: "Hira Khan",
        city: "Lahore",
        rating: 5,
        text: "Loved the color options. I ordered black and pink, and both finished beautifully.",
    },
    {
        name: "Fatima Noor",
        city: "Multan",
        rating: 5,
        text: "Quality stitching, elegant shape, and it fits everything I need for work days.",
    },
    {
        name: "Sana Raza",
        city: "Karachi",
        rating: 4,
        text: "Exactly as shown in the photo. The size notes made it easy to choose.",
    },
];

const HappyCustomers = () => {
    return (
        <section className="bg-[#f7f2ec] py-12 text-[#1a120c] sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="mb-8 text-center sm:mb-12">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#9F6324]/20 bg-[#9F6324]/10 px-4 py-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F6324]">
                            Happy Customers
                        </span>
                    </div>

                    <h2 className="display-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        What our{" "}
                        <span className="italic text-[#9F6324]">
                            customers
                        </span>{" "}
                        say
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6b5b4e] sm:text-base">
                        Notes from shoppers across Pakistan after they received
                        their Zeccora bags.
                    </p>
                </div>

                {/* Reviews */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {reviews.map((review) => (
                        <article
                            key={review.name}
                            className="flex h-full min-h-0 flex-col rounded-2xl bg-white p-5 text-[#1a120c] shadow-[0_10px_30px_rgba(26,18,12,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(26,18,12,0.1)] sm:min-h-[300px] sm:rounded-[28px] sm:p-6"
                        >
                            {/* Top */}
                            <div className="flex items-center justify-between">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9F6324]/10 text-xs font-semibold text-[#9F6324]">
                                    {review.name
                                        .split(" ")
                                        .map((part) => part[0])
                                        .join("")}
                                </span>

                                <Quote
                                    size={18}
                                    className="text-[#9F6324]"
                                />
                            </div>

                            {/* Rating */}
                            <div className="mt-5 flex gap-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star
                                        key={index}
                                        size={14}
                                        className={
                                            index < review.rating
                                                ? "fill-[#9F6324] text-[#9F6324]"
                                                : "text-[#d7c9bb]"
                                        }
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="mt-5 flex-1 text-sm leading-7 text-[#5c4c40]">
                                {review.text}
                            </p>

                            {/* Customer */}
                            <div className="mt-6 border-t border-black/5 pt-4">
                                <p className="text-sm font-semibold">
                                    {review.name}
                                </p>

                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#9F6324]">
                                    {review.city} · Verified order
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HappyCustomers;
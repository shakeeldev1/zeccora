import React from "react";

const Contacthero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#f7f2ec]">

            {/* Full Image - No Crop */}
            <picture>
                <source media="(max-width: 639px)" srcSet="/hero/hero2-mobile.png" />
                <img
                    src="/hero/hero2.png"
                    alt="Luxury contact page hero"
                    className="block h-auto w-full object-contain"
                />
            </picture>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
                <div className="flex max-w-5xl flex-col items-center text-center">

                    {/* Breadcrumb */}
                    <div className="mb-5 flex items-center justify-center gap-3 text-sm font-medium text-[#A46A2A] sm:mb-7 sm:text-xl">
                        <span className="text-white/90">
                            Home
                        </span>

                        <span className="text-[#A46A2A]">
                            &gt;
                        </span>

                        <span>
                            Contact
                        </span>
                    </div>

                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A46A2A]/60 bg-[#A46A2A]/15 px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-[#FFFFC9] shadow-[0_0_25px_rgba(164,106,42,0.15)] backdrop-blur-sm sm:mb-8 sm:px-6 sm:py-3 sm:text-sm">
                        CONNECT WITH US
                    </div>

                    {/* Heading */}
                    <h1 className="display-font text-4xl tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.5rem]">
                        Connect{" "}
                        <span className="italic text-[#E8C27A]">
                            With Us
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-200 sm:mt-6 sm:text-lg">
                        Have a question or need a custom order? Our team is
                        ready to assist you with the perfect luxury choice.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Contacthero;
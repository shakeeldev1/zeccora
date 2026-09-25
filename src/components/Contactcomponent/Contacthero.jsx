import React from "react";

const Contacthero = () => {
    return (
        <section className="relative isolate flex min-h-[18rem] w-full items-center justify-center overflow-hidden bg-[#1a120c] sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem]">
            <img
                src="/hero/hero2.png"
                alt="Luxury contact page hero"
                className="absolute inset-0 -z-20 block h-full w-full object-cover object-[72%_35%] md:object-center"
            />

            <div className="absolute inset-0 -z-10 bg-black/55" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(26,18,12,0.72)_0%,rgba(26,18,12,0.45)_45%,rgba(26,18,12,0.25)_100%)]" />

            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-10">
                <div className="mb-4 flex items-center justify-center gap-3 text-sm font-medium text-[#A46A2A] sm:mb-6 sm:text-lg">
                    <span className="text-white/90">Home</span>
                    <span>&gt;</span>
                    <span>Contact</span>
                </div>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#A46A2A]/60 bg-[#A46A2A]/15 px-4 py-2 text-[10px] font-semibold tracking-[0.12em] text-[#FFFFC9] backdrop-blur-sm sm:mb-7 sm:px-6 sm:py-2.5 sm:text-xs">
                    CONNECT WITH US
                </div>

                <h1 className="display-font text-3xl tracking-[-0.04em] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl lg:text-[5rem]">
                    Connect{" "}
                    <span className="italic text-[#E8C27A]">With Us</span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
                    Have a question or need a custom order? Our team is ready to assist you with the perfect luxury choice.
                </p>
            </div>
        </section>
    );
};

export default Contacthero;

import React from "react";
import { Sparkles } from "lucide-react";

const Contacthero = () => {
    return (
        <section className="relative isolate overflow-hidden bg-[#f7f2ec]">
            <img
                src="/hero/hero2.png"
                alt="Luxury contact page hero"
                className="absolute inset-0 -z-20 h-full w-full object-cover opacity-90"
            />

            <div className="absolute inset-0 -z-10 bg-black/40" />

            <div className="mx-auto flex min-h-[320px] max-w-[1600px] items-center justify-center px-4 py-12 sm:min-h-[500px] sm:px-6 sm:py-16 lg:px-10">
                <div className="flex max-w-5xl flex-col items-center text-center">
                    <div className="mb-5 flex items-center justify-center gap-3 text-sm font-medium text-[#A46A2A] sm:mb-7 sm:text-2xl">
                        <span className="text-white/90">Home</span>
                        <span className="text-[#A46A2A]">&gt;</span>
                        <span>Contact</span>
                    </div>

                    <button
                        type="button"
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#A46A2A]/60 bg-[#A46A2A]/15 px-6 py-3 text-sm font-semibold tracking-[0.12em] text-[#FFFFC9] shadow-[0_0_25px_rgba(164,106,42,0.15)] backdrop-blur-sm transition hover:bg-[#A46A2A]/20"
                    >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#A46A2A] text-[5px]">
                            <Sparkles size={10} />
                        </span>
                        CONNECT WITH US
                    </button>

                    <h1 className="display-font text-4xl tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.5rem]">
                        Connect <span className="italic text-[#E8C27A]">With Us</span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-200 sm:text-lg">
                        Have a question or need a custom order? Our team is ready to assist you with the perfect luxury choice.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contacthero;

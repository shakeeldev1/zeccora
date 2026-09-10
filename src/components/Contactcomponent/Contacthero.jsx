import React from "react";
import { Sparkles } from "lucide-react";

const Contacthero = () => {
    return (
        <section className="relative isolate overflow-hidden border-b border-[#d4af37]/20 bg-[#0d0d0d]">
            <img
                src="https://i.pinimg.com/1200x/8d/25/03/8d25030a99691b729e055b49d29fbac7.jpg"
                alt="Luxury contact page hero"
                className="absolute inset-0 -z-20 h-full w-full object-cover opacity-90"
            />

            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),rgba(0,0,0,0.38)_35%,rgba(0,0,0,0.8)_100%)]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.52)_30%,rgba(0,0,0,0.6)_100%)]" />

            <div className="mx-auto flex min-h-[420px] max-w-[1600px] items-center justify-center px-4 py-16 sm:min-h-[500px] sm:px-6 lg:px-10">
                <div className="flex max-w-5xl flex-col items-center text-center">
                    <div className="mb-7 flex items-center justify-center gap-3 text-lg font-medium text-[#d4af37] sm:text-2xl">
                        <span className="text-white/90">Home</span>
                        <span className="text-[#d4af37]">&gt;</span>
                        <span>Contact</span>
                    </div>

                    <button
                        type="button"
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 bg-[#d4af37]/15 px-6 py-3 text-sm font-semibold tracking-[0.12em] text-[#f0c84b] shadow-[0_0_25px_rgba(212,175,55,0.15)] backdrop-blur-sm transition hover:bg-[#d4af37]/20"
                    >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#d4af37] text-[5px]">
                            <Sparkles size={10} />
                        </span>
                        CONNECT WITH US
                    </button>

                    <h1 className="font-serif text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-[7.5rem] lg:leading-[0.9]">
                        Connect <span className="text-[#d4af37]">With Us</span>
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

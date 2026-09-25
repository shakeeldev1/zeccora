import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "../../lib/site";

const WhatsAppButton = () => {
    const handleWhatsApp = () => {
        window.open(whatsappUrl("Hello, I would like to know more about your products."), "_blank", "noopener,noreferrer");
    };

    return (
        <button
            onClick={handleWhatsApp}
            aria-label="Chat on WhatsApp"
            title="Chat with us on WhatsApp"
            className="fixed bottom-[max(1.25rem,calc(env(safe-area-inset-bottom)+1rem))] right-3 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        >
            <FaWhatsapp className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
    );
};

export default WhatsAppButton;

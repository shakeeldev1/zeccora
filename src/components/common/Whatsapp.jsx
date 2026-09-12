import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "923126263348";
    const message = "Hello, I would like to know more about your products. Could you please share the details with me?";

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <button
            onClick={handleWhatsApp}
            aria-label="Chat on WhatsApp"
            title="Chat with us on WhatsApp"
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 sm:bottom-6 sm:right-6"
        >
            <FaWhatsapp size={32} />
        </button>
    );
};

export default WhatsAppButton;
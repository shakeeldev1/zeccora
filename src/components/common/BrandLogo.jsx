import React from "react";

const BrandLogo = ({ size = "nav" }) => {
    const isFooter = size === "footer";

    return (
        <span className={`inline-flex flex-col items-center text-[#1a120c] ${isFooter ? "gap-1.5" : "gap-0.5"}`}>
            <span className={`brand-word ${isFooter ? "text-[44px] sm:text-[64px]" : "text-[32px] sm:text-[46px]"}`}>
                Zeccora
            </span>
            <span className={`brand-tag ${isFooter ? "text-[11px] sm:text-[13px]" : "text-[8px] sm:text-[10px]"}`}>
                Carry your elegance.
            </span>
        </span>
    );
};

export default BrandLogo;

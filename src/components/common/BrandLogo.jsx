import React from "react";

const BrandLogo = ({ size = "nav" }) => {
    const isFooter = size === "footer";

    return (
        <span className={`inline-flex flex-col items-center text-[#1a120c] ${isFooter ? "gap-1.5" : "gap-0.5"}`}>
            <span className={`brand-word ${isFooter ? "text-[36px] sm:text-[52px] lg:text-[64px]" : "text-[26px] sm:text-[34px] md:text-[42px] lg:text-[46px]"}`}>
                Zeccora
            </span>
            <span className={`brand-tag ${isFooter ? "text-[10px] sm:text-[12px] lg:text-[13px]" : "text-[7px] sm:text-[9px] md:text-[10px]"}`}>
                Carry your elegance.
            </span>
        </span>
    );
};

export default BrandLogo;

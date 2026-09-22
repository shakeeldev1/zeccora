import React from "react";
import PolicyPage from "./PolicyPage";

const SizeGuide = () => (
    <PolicyPage
        eyebrow="Customer care"
        title="Size guide"
        intro="Use these measurements as a guide when choosing handbags, totes, crossbody bags, and travel pieces."
        sections={[
            {
                heading: "Mini & clutches",
                body: "About 18 to 22 cm wide. Best for phone, cards, and a compact everyday kit.",
            },
            {
                heading: "Shoulder & crossbody",
                body: "About 24 to 30 cm wide. Comfortable for daily use with an adjustable strap.",
            },
            {
                heading: "Handbags & totes",
                body: "About 32 to 40 cm wide. Enough room for a tablet, wallet, and daily essentials.",
            },
            {
                heading: "Travel & duffles",
                body: "About 45 cm and above. Designed for short trips and extra carry space.",
            },
        ]}
    />
);

export default SizeGuide;

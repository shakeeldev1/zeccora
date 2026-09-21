import React from "react";
import PolicyPage from "./PolicyPage";

const Returns = () => (
    <PolicyPage
        eyebrow="Customer care"
        title="Returns"
        intro="Simple returns and exchanges if a piece is not the right fit."
        sections={[
            {
                heading: "Return window",
                body: "Unused items can be returned within 7 days of delivery if they are in original condition, with tags attached and no signs of wear.",
            },
            {
                heading: "How to start a return",
                body: "Email info@zeccora.com with your name, phone number, order details, and the reason for return. Our team will confirm the next step.",
            },
            {
                heading: "Return shipping",
                body: "Return shipping is arranged after we confirm your request. Please do not send the parcel back until you receive confirmation.",
            },
            {
                heading: "Exchanges",
                body: "Color or size exchanges are available while stock lasts. Mention the selected color so we can match the exact piece you received.",
            },
        ]}
    />
);

export default Returns;

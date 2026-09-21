import React from "react";
import PolicyPage from "./PolicyPage";
import { SITE } from "../../lib/site";

const Terms = () => (
    <PolicyPage
        eyebrow="Legal"
        title="Terms of service"
        intro="These terms cover browsing zeccora.com-style pages and placing a cash-on-delivery order with the Johar Town studio."
        sections={[
            {
                heading: "Orders",
                body: "An order is confirmed after you send checkout details on WhatsApp and we reply to accept it. Sale prices shown on the product page are the prices we honour while that offer is live.",
            },
            {
                heading: "Payment and delivery",
                body: `Rs. ${SITE.deliveryFee} delivery is paid first. The remaining product amount is collected as cash on delivery. Dispatch usually takes ${SITE.deliveryWindow} after confirmation.`,
            },
            {
                heading: "Colours",
                body: "Each listing uses the real photograph of that design. Black, brown, beige, and pink can be selected; we dispatch the colour you choose, which may differ slightly from screen to screen.",
            },
            {
                heading: "Returns",
                body: `Unused items can be returned within ${SITE.returnDays} days if they are in original condition. Email ${SITE.email} before sending anything back.`,
            },
        ]}
    />
);

export default Terms;

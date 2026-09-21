import React from "react";
import PolicyPage from "./PolicyPage";
import { SITE } from "../../lib/site";

const Faqs = () => (
    <PolicyPage
        eyebrow="Customer care"
        title="FAQs"
        intro={`Quick answers before you place an order. Still unsure? Email ${SITE.email} or WhatsApp ${SITE.phoneDisplay}.`}
        sections={[
            {
                heading: "How do I place an order?",
                body: "Add a bag and color to cart, go to checkout, and book on WhatsApp. We confirm packing, then dispatch.",
            },
            {
                heading: "Do products come in more than one color?",
                body: "Yes. Most pieces are available in black, brown, beige, and pink. The photo shows the design; we send the color you select.",
            },
            {
                heading: "Is the photo the real product?",
                body: "Yes. Each listing uses the client photograph of that piece, with size, material, and SKU listed on the product page.",
            },
            {
                heading: "What discounts are live right now?",
                body: "Current live offers are 50% off, 30% off, and 20% off. 15% off is coming soon.",
            },
            {
                heading: "How do I pay?",
                body: `We accept cash on delivery. Delivery charges of Rs. ${SITE.deliveryFee} are paid first, then the remaining amount is paid when the order arrives.`,
            },
            {
                heading: "Where are you based?",
                body: `${SITE.address}. We ship nationwide, usually within ${SITE.deliveryWindow}.`,
            },
        ]}
    />
);

export default Faqs;

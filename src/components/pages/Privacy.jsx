import React from "react";
import PolicyPage from "./PolicyPage";
import { SITE } from "../../lib/site";

const Privacy = () => (
    <PolicyPage
        eyebrow="Legal"
        title="Privacy policy"
        intro={`How Zeccora handles the details you share when you browse, message, or place an order. Questions: ${SITE.email}.`}
        sections={[
            {
                heading: "What we collect",
                body: "When you book an order or send a message we receive your name, phone, email, delivery address, and the products you chose. Newsletter sign-up stores the email you enter on this device and forwards it on WhatsApp so we can confirm.",
            },
            {
                heading: "How we use it",
                body: "We use your details only to confirm orders, arrange delivery, answer enquiries, and share drops you asked for. We do not sell customer lists.",
            },
            {
                heading: "Where it is stored",
                body: "Your cart and saved pieces stay in your browser. Order details are sent to our WhatsApp business number so the studio can pack and dispatch.",
            },
            {
                heading: "Contact",
                body: `To update or remove your details, email ${SITE.email} or message ${SITE.phoneDisplay}.`,
            },
        ]}
    />
);

export default Privacy;

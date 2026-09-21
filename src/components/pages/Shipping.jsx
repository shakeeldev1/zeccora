import React from "react";
import PolicyPage from "./PolicyPage";

const Shipping = () => (
    <PolicyPage
        eyebrow="Customer care"
        title="Shipping"
        intro="How Zeccora delivers across Pakistan, from order booking to your door."
        sections={[
            {
                heading: "Delivery area",
                body: "We ship nationwide across Pakistan, including Lahore, Karachi, Islamabad, Multan, and surrounding cities.",
            },
            {
                heading: "Delivery time",
                body: "Standard delivery takes 2 to 5 working days after your order is confirmed on WhatsApp. Big-city orders often arrive sooner.",
            },
            {
                heading: "Delivery charges",
                body: "Rs. 300 delivery charges are paid first. The remaining product amount is collected as cash on delivery when the parcel arrives.",
            },
            {
                heading: "Order tracking",
                body: "After your order is booked, our team shares packing and dispatch updates on WhatsApp. For extra help email info@zeccora.com.",
            },
        ]}
    />
);

export default Shipping;

export const SITE = {
  name: "Zeccora",
  tagline: "Carry your elegance.",
  email: "info@zeccora.com",
  phoneDisplay: "+92 312 626 3348",
  phoneWhatsApp: "923126263348",
  address: "Johar Town, Lahore, Pakistan",
  hours: "Monday – Saturday: 10AM – 7PM",
  deliveryFee: 300,
  deliveryWindow: "2–5 working days",
  returnDays: 7,
};

export const whatsappUrl = (text) =>
  `https://wa.me/${SITE.phoneWhatsApp}?text=${encodeURIComponent(text)}`;

export const mailtoUrl = (subject, body) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

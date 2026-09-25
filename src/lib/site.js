export const SITE = {
  name: "Zeccora",
  tagline: "Carry your elegance.",
  email: "info@zeccora.com",
  phoneDisplay: "+92 301 5293278",
  phoneWhatsApp: "923015293278",
  address: "Johar Town, Lahore, Pakistan",
  hours: "Monday – Saturday: 10AM – 7PM",
  deliveryFee: 300,
  deliveryWindow: "2–5 working days",
  returnDays: 7,
  social: {
    instagram: "https://www.instagram.com/zeccora_",
    tiktok: "https://www.tiktok.com/@zeccora_",
    facebook: "https://www.facebook.com/share/1K33TmtN5M/",
  },
};

export const whatsappUrl = (text) =>
  `https://wa.me/${SITE.phoneWhatsApp}?text=${encodeURIComponent(text)}`;

export const mailtoUrl = (subject, body) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

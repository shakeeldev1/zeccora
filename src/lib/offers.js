export const OFFERS = [
    {
        percent: 50,
        title: "Launch Privilege",
        value: "50% OFF",
        detail: "Biggest seasonal cut on selected signature pieces while stocks last.",
        code: "LAUNCH50",
        href: "/products?offer=50",
    },
    {
        percent: 30,
        title: "The Weekend Edit",
        value: "30% OFF",
        detail: "Refresh your collection with premium essentials selected for everyday styling.",
        code: "WEEKEND30",
        href: "/products?offer=30",
    },
    {
        percent: 20,
        title: "Midweek Edit",
        value: "20% OFF",
        detail: "A refined discount on bestsellers made to complete your next look.",
        code: "EDIT20",
        href: "/products?offer=20",
    },
    {
        percent: 15,
        title: "First Order Privilege",
        value: "15% OFF",
        detail: "This welcome discount is not live yet. Check back soon for the first-order offer.",
        code: "WELCOME15",
        href: "/coming-soon",
        comingSoon: true,
    },
];

export const parsePrice = (value) => Number(String(value || 0).replace(/[^0-9]/g, "")) || 0;

export const formatPrice = (amount) => `${Number(amount).toLocaleString()} PKR`;

export const discountedAmount = (oldPrice, percent) =>
    Math.round(parsePrice(oldPrice) * (1 - Number(percent) / 100));

export const findOffer = (percent) =>
    OFFERS.find((offer) => offer.percent === Number(percent));

export const isOfferPercent = (value) =>
    OFFERS.some((offer) => offer.percent === Number(value) && !offer.comingSoon);

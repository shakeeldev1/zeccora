import React from "react";
import ProductHero from "../products/ProductHero";
import ProductGrid from "../products/ProductGrid";

const products = [
    {
        id: 1,
        name: "The Daily Edit",
        category: "Handbags",
        badge: "Bestseller",
        price: "8,500 PKR",
        oldPrice: "10,500 PKR",
        image: "https://i.pinimg.com/736x/c9/52/a9/c952a9e0c2b2a1e69beb0695257c6c38.jpg",
    },
    {
        id: 2,
        name: "Mila Shoulder Bag",
        category: "Shoulder Bags",
        badge: "New arrival",
        price: "7,200 PKR",
        oldPrice: "9,000 PKR",
        image: "https://i.pinimg.com/736x/d2/11/7a/d2117a0aadb0207d3d44af2c57aa9f9c.jpg",
    },
    {
        id: 3,
        name: "Noir Structure",
        category: "Handbags",
        badge: "Editor's pick",
        price: "6,800 PKR",
        oldPrice: "8,500 PKR",
        image: "https://i.pinimg.com/736x/a3/17/83/a3178351ad9741a09cd6862bd1ec22d9.jpg",
    },
    {
        id: 4,
        name: "The Weekender",
        category: "Shoulder Bags",
        badge: "Limited",
        price: "7,900 PKR",
        oldPrice: "9,800 PKR",
        image: "https://i.pinimg.com/736x/cf/a3/99/cfa399ddc701a7da18937db2d6e2f450.jpg",
    },
    {
        id: 5,
        name: "Avery Mini Tote",
        category: "Handbags",
        badge: "New arrival",
        price: "5,600 PKR",
        oldPrice: "7,200 PKR",
        image: "https://i.pinimg.com/736x/cf/a3/99/cfa399ddc701a7da18937db2d6e2f450.jpg",
    },
    {
        id: 6,
        name: "Luna Crossbody",
        category: "Shoulder Bags",
        badge: "Bestseller",
        price: "4,800 PKR",
        oldPrice: "6,300 PKR",
        image: "https://i.pinimg.com/736x/71/bc/88/71bc880af7e9f299e7e23d5d9d267b67.jpg",
    },
    {
        id: 7,
        name: "Atlas Carryall",
        category: "Shoulder Bags",
        badge: "Exclusive",
        price: "5,900 PKR",
        oldPrice: "7,500 PKR",
        image: "https://i.pinimg.com/736x/71/bc/88/71bc880af7e9f299e7e23d5d9d267b67.jpg",
    },
    {
        id: 8,
        name: "Cleo Shoulder Bag",
        category: "Shoulder Bags",
        badge: "New arrival",
        price: "6,400 PKR",
        oldPrice: "8,200 PKR",
        image: "https://i.pinimg.com/736x/36/93/32/369332bf157adee82c2c0b969e7ba21b.jpg",
    },
    {
        id: 9,
        name: "Aurelia Smart Bag",
        category: "Handbags",
        badge: "Premium",
        price: "8,300 PKR",
        oldPrice: "10,700 PKR",
        image: "https://i.pinimg.com/736x/ab/c7/ee/abc7ee140ff4f033c1151217a31aac24.jpg",
    },
    {
        id: 10,
        name: "Classic Deep Blue",
        category: "Handbags",
        badge: "New arrival",
        price: "9,200 PKR",
        oldPrice: "11,500 PKR",
        image: "https://i.pinimg.com/736x/45/87/3b/45873b2a11b135b379f98deb61c53cc6.jpg",
    },
    {
        id: 11,
        name: "Amber Luxe Tote",
        category: "Handbags",
        badge: "Editor's pick",
        price: "8,900 PKR",
        oldPrice: "11,000 PKR",
        image: "https://i.pinimg.com/736x/01/8c/0a/018c0ad5f510aa5cbfd24d77564e23c8.jpg",
    },
    {
        id: 12,
        name: "Royal Charm Bag",
        category: "Handbags",
        badge: "Exclusive",
        price: "9,700 PKR",
        oldPrice: "12,200 PKR",
        image: "https://i.pinimg.com/736x/a1/21/0e/a1210ef85adb00e4dcaf935caef98c00.jpg",
    },
     {
        id: 13,
        name: "Royal Charm Bag",
        category: "Handbags",
        badge: "Exclusive",
        price: "9,700 PKR",
        oldPrice: "12,200 PKR",
        image: "https://i.pinimg.com/736x/60/9e/d5/609ed5d7b656ad666a88712be4490769.jpg",
    },

     {
        id: 14,
        name: "Royal Charm Bag",
        category: "Handbags",
        badge: "Exclusive",
        price: "9,700 PKR",
        oldPrice: "12,200 PKR",
        image: "https://i.pinimg.com/1200x/34/00/3d/34003d4b35f2dee6f00daf6efa8a9956.jpg",
    },
    {
        id: 15,
        name: "Lumiere Structured Bag",
        category: "Handbags",
        badge: "New arrival",
        price: "9,400 PKR",
        oldPrice: "11,800 PKR",
        image: "https://i.pinimg.com/736x/21/98/b4/2198b4219b0b80744150643ca63f55c9.jpg",
    },
    {
        id: 16,
        name: "Celeste Classic Bag",
        category: "Handbags",
        badge: "Premium",
        price: "10,200 PKR",
        oldPrice: "12,500 PKR",
        image: "https://i.pinimg.com/736x/9d/20/14/9d2014c3262032dd952616265ec8d4db.jpg",
    },
    {
        id: 17,
        name: "Rosette Top Handle",
        category: "Handbags",
        badge: "Editor's pick",
        price: "8,800 PKR",
        oldPrice: "10,900 PKR",
        image: "https://i.pinimg.com/736x/07/c0/1b/07c01b1d80de040582de0817a328b09e.jpg",
    },
    // {
    //     id: 18,
    //     name: "Rosette Signature Bag",
    //     category: "Handbags",
    //     badge: "Bestseller",
    //     price: "9,100 PKR",
    //     oldPrice: "11,300 PKR",
    //     image: "https://i.pinimg.com/736x/07/c0/1b/07c01b1d80de040582de0817a328b09e.jpg",
    // },
    // {
    //     id: 19,
    //     name: "Rosette Luxe Edition",
    //     category: "Handbags",
    //     badge: "Exclusive",
    //     price: "9,600 PKR",
    //     oldPrice: "12,000 PKR",
    //     image: "https://i.pinimg.com/736x/07/c0/1b/07c01b1d80de040582de0817a328b09e.jpg",
    // },
    {
        id: 20,
        name: "Amara Leather Tote",
        category: "Handbags",
        badge: "Limited",
        price: "11,500 PKR",
        oldPrice: "14,000 PKR",
        image: "https://i.pinimg.com/1200x/05/8b/a1/058ba18f3f459d25a49210bdc6ce969e.jpg",
    },
    {
        id: 21,
        name: "Valentina Carryall",
        category: "Handbags",
        badge: "Luxury pick",
        price: "10,800 PKR",
        oldPrice: "13,200 PKR",
        image: "https://i.pinimg.com/736x/34/fe/fa/34fefa274946690b74d36087749f6256.jpg",
    },
    {
        id: 22,
        name: "Sienna Shoulder Bag",
        category: "Shoulder Bags",
        badge: "New arrival",
        price: "7,800 PKR",
        oldPrice: "9,800 PKR",
        image: "https://i.pinimg.com/736x/fe/10/d0/fe10d0f8733589ae7b064f0ffb1c9779.jpg",
    },
    {
        id: 23,
        name: "Marbella Shoulder Bag",
        category: "Shoulder Bags",
        badge: "Premium",
        price: "8,600 PKR",
        oldPrice: "10,700 PKR",
        image: "https://i.pinimg.com/1200x/c9/9b/cd/c99bcdeb6986b8f5a551b88c90b84e3b.jpg",
    },
    {
        id: 24,
        name: "Rosalie Shoulder Bag",
        category: "Shoulder Bags",
        badge: "Editor's pick",
        price: "7,400 PKR",
        oldPrice: "9,300 PKR",
        image: "https://i.pinimg.com/736x/10/d9/5d/10d95dd3af56577fb044763d47e48873.jpg",
    },
    {
        id: 25,
        name: "Celine Shoulder Bag",
        category: "Shoulder Bags",
        badge: "Exclusive",
        price: "9,200 PKR",
        oldPrice: "11,500 PKR",
        image: "https://i.pinimg.com/736x/09/e0/b4/09e0b488371ecad8d18942b92644d68c.jpg",
    },
    {
        id: 26,
        name: "Aveline Shoulder Bag",
        category: "Shoulder Bags",
        badge: "New arrival",
        price: "8,100 PKR",
        oldPrice: "10,200 PKR",
        image: "https://i.pinimg.com/736x/23/30/19/23301962c0fdc8c85406a961940bb4bb.jpg",
    },
    {
        id: 27,
        name: "Elara Shoulder Bag",
        category: "Shoulder Bags",
        badge: "Premium",
        price: "8,700 PKR",
        oldPrice: "10,900 PKR",
        image: "https://i.pinimg.com/736x/3d/cc/75/3dcc75d2195d4000e3a0b8de88a494b1.jpg",
    },
];

const Products = () => {
    const addToCart = (product) => {
        const savedCart = JSON.parse(localStorage.getItem("urban-bazaar-cart") || "[]");
        const existingProduct = savedCart.find((item) => item.id === product.id);
        const nextCart = existingProduct
            ? savedCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            : [...savedCart, { ...product, quantity: 1 }];

        localStorage.setItem("urban-bazaar-cart", JSON.stringify(nextCart));
        window.dispatchEvent(new Event("cart-updated"));
    };

    return (
        <>
            <ProductHero />
            <ProductGrid products={products} onAddToCart={addToCart} />
        </>
    );
};

export default Products

import React from "react";
import ProductHero from "../products/ProductHero";
import ProductGrid from "../products/ProductGrid";

const products = [
    {
        id: 1,
        name: "The Daily Edit",
        category: "Handbags",
        badge: "Bestseller",
        price: "2,500 PKR",
        oldPrice: "3,200 PKR",
        image: "https://i.pinimg.com/736x/57/24/0d/57240d170e51084f532c50078ea5545f.jpg",
    },
    {
        id: 2,
        name: "Mila Shoulder Bag",
        category: "Shoulder Bags",
        badge: "New arrival",
        price: "3,500 PKR",
        oldPrice: "4,000 PKR",
        image: "https://i.pinimg.com/736x/94/45/ca/9445cabb9d13a5509b69ad91d13e043c.jpg",
    },
    {
        id: 3,
        name: "Noir Structure",
        category: "Handbags",
        badge: "Editor's pick",
        price: "2,800 PKR",
        oldPrice: "3,500 PKR",
        image: "https://i.pinimg.com/736x/1f/03/aa/1f03aac3946fe68ed7874d5e279cf0f8.jpg",
    },
    {
        id: 4,
        name: "The Weekender",
        category: "Travel Bags",
        badge: "Limited",
        price: "4,200 PKR",
        oldPrice: "5,000 PKR",
        image: "https://i.pinimg.com/736x/84/bb/98/84bb984d12cc9ee1919d3ffc04bdb466.jpg",
    },
    {
        id: 5,
        name: "Avery Mini Tote",
        category: "Handbags",
        badge: "New arrival",
        price: "3,000 PKR",
        oldPrice: "3,800 PKR",
        image: "https://i.pinimg.com/1200x/05/ec/f5/05ecf537305ef3c09141756ed949031e.jpg",
    },
    {
        id: 6,
        name: "Luna Crossbody",
        category: "Shoulder Bags",
        badge: "Bestseller",
        price: "2,700 PKR",
        oldPrice: "3,400 PKR",
        image: "https://i.pinimg.com/736x/35/88/e1/3588e1b2673842fb57438be48bf2b670.jpg",
    },
    {
        id: 7,
        name: "Atlas Carryall",
        category: "Travel Bags",
        badge: "Exclusive",
        price: "3,800 PKR",
        oldPrice: "4,500 PKR",
        image: "https://i.pinimg.com/736x/c0/6c/a6/c06ca61ce59dc9dd0b134c430c121f01.jpg",
    },
    {
        id: 8,
        name: "Cleo Shoulder Bag",
        category: "Shoulder Bags",
        badge: "New arrival",
        price: "2,900 PKR",
        oldPrice: "3,600 PKR",
        image: "https://i.pinimg.com/736x/94/7c/db/947cdb97223ac77de90276536b686b5c.jpg",
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

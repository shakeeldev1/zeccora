import React from "react";
import ProductHero from "../products/ProductHero";
import ProductGrid from "../products/ProductGrid";
import image7 from "../../assets/img7 (4).jpeg";
import image8 from "../../assets/img 8.jpeg";
import image9 from "../../assets/img 9.jpeg";
import image10 from "../../assets/img 10.jpeg";
import image11 from "../../assets/img 11.jpeg";
import image12 from "../../assets/img 12.jpeg";
import image13 from "../../assets/img 13.jpeg";
import image14 from "../../assets/img 14.jpeg";
import image15 from "../../assets/img 15.jpeg";
import image16 from "../../assets/img 16.jpeg";
import image17 from "../../assets/img17.jpeg";
import image18 from "../../assets/img18.png";
import image19 from "../../assets/img19.png";
import image20 from "../../assets/img20.png";
import image21 from "../../assets/img 21.png";
import image22 from "../../assets/img 22.png";
import image23 from "../../assets/img 23.png";
import image24 from "../../assets/img 24.png";

const products = [
    {
        id: 1,
        name: "The Daily Edit",
        category: "Handbags",
        badge: "Bestseller",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image7,
    },
    {
        id: 2,
        name: "Mila Shoulder Bag",
        category: "Shoulder Bags",
        badge: "New arrival",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image8,
    },
    {
        id: 3,
        name: "Noir Structure",
        category: "Handbags",
        badge: "Editor's pick",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image9,
    },
    {
        id: 4,
        name: "The Weekender",
        category: "Shoulder Bags",
        badge: "Limited",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image10,
    },
    {
        id: 5,
        name: "Avery Mini Tote",
        category: "Handbags",
        badge: "New arrival",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image11,
    },
    {
        id: 6,
        name: "Luna Crossbody",
        category: "Shoulder Bags",
        badge: "Bestseller",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image12,
    },
    {
        id: 7,
        name: "Atlas Carryall",
        category: "Shoulder Bags",
        badge: "Exclusive",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image13,
    },
    {
        id: 8,
        name: "Cleo Shoulder Bag",
        category: "Shoulder Bags",
        badge: "New arrival",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image14,
    },
    {
        id: 9,
        name: "Aurelia Smart Bag",
        category: "Handbags",
        badge: "Premium",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image15,
    },
    {
        id: 10,
        name: "Monarch Classic Tote",
        category: "Handbags",
        badge: "New arrival",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image16,
    },
    {
        id: 11,
        name: "Elara Mini Bag",
        category: "Shoulder Bags",
        badge: "Bestseller",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image17,
    },
    {
        id: 12,
        name: "Marais Evening Bag",
        category: "Shoulder Bags",
        badge: "Exclusive",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image18,
    },
    {
        id: 13,
        name: "Serena Quilted Bag",
        category: "Handbags",
        badge: "Limited",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image19,
    },
    {
        id: 14,
        name: "Ophelia Top Handle",
        category: "Handbags",
        badge: "Premium",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image20,
    },
    {
        id: 15,
        name: "Soleil Chain Bag",
        category: "Shoulder Bags",
        badge: "New arrival",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image21,
    },
    {
        id: 16,
        name: "Camille Structured Bag",
        category: "Handbags",
        badge: "Editor's pick",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image22,
    },
    {
        id: 17,
        name: "Arden Everyday Bag",
        category: "Shoulder Bags",
        badge: "Bestseller",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image23,
    },
    {
        id: 18,
        name: "Vivienne Luxe Bag",
        category: "Handbags",
        badge: "Exclusive",
        price: "2,200 PKR",
        oldPrice: "3,000 PKR",
        image: image24,
    },






















































































]

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

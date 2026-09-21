import React from "react";
import ProductHero from "../products/ProductHero";
import ProductGrid from "../products/ProductGrid";
import { addItemToCart } from "../../lib/cart";
import { products } from "../../lib/products";

const Products = () => {
    const addToCart = (product) => {
        addItemToCart(product, 1);
        window.dispatchEvent(new Event("cart-open"));
    };

    return (
        <>
            <ProductHero />
            <ProductGrid products={products} onAddToCart={addToCart} />
        </>
    );
};

export default Products;

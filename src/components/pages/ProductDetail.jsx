import React, { useState } from "react";
import { ArrowLeft, Globe2, Heart, MessageCircle, Share2, ShoppingBag } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "./Products";

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const product = products.find((item) => item.id === Number(productId));
    const [quantity, setQuantity] = useState(1);
    const [copied, setCopied] = useState(false);

    if (!product) {
        return <section className="min-h-[60vh] bg-[#1b1b1b] px-6 py-24 text-center text-white"><h1 className="font-serif text-4xl font-bold">Product not found</h1><Link to="/products" className="mt-6 inline-block text-[#f0c84b]">Back to products</Link></section>;
    }

    const shareBaseUrl = (import.meta.env.VITE_PUBLIC_BASE_URL || window.location.origin).replace(/\/$/, "");
    const productUrl = `${shareBaseUrl}/products/${product.id}`;
    const shareText = `Check out ${product.name} from Zeccora`;
    const addToCart = (redirectToCheckout = false) => {
        const savedCart = JSON.parse(localStorage.getItem("urban-bazaar-cart") || "[]");
        const existingProduct = savedCart.find((item) => item.id === product.id);
        const nextCart = existingProduct
            ? savedCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
            : [...savedCart, { ...product, quantity }];
        localStorage.setItem("urban-bazaar-cart", JSON.stringify(nextCart));
        window.dispatchEvent(new Event("cart-updated"));
        navigate(redirectToCheckout ? "/cart?checkout=1" : "/cart");
    };

    const shareProduct = async () => {
        if (navigator.share) {
            await navigator.share({ title: product.name, text: shareText, url: productUrl });
        } else {
            await navigator.clipboard.writeText(productUrl);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        }
    };

    const socialLinks = [
        { label: "WhatsApp", icon: MessageCircle, url: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${productUrl}`)}` },
        { label: "Facebook", icon: Globe2, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}` },
        { label: "X", icon: Share2, url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(productUrl)}` },
    ];

    const suggestedProducts = products.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 4);

    return (
        <section className="min-h-[70vh] bg-[#1b1b1b] px-4 py-12 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <Link to="/products" className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#f0c84b]"><ArrowLeft size={16} /> Back to collection</Link>
                <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="overflow-hidden border border-white/10 bg-[#232323] p-3"><img src={product.image} alt={product.name} className="aspect-square w-full object-cover" /></div>
                    <div className="flex flex-col justify-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">{product.category} / {product.badge}</p>
                        <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">{product.name}</h1>
                        <div className="mt-5 flex items-center gap-3"><span className="text-2xl font-bold text-[#f0c84b]">{product.price}</span><span className="text-sm text-gray-500 line-through">{product.oldPrice}</span></div>
                        <p className="mt-6 leading-7 text-gray-400">A refined Zeccora piece designed for effortless everyday elegance. Thoughtful structure, premium finish, and enough room for the moments that matter.</p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <div className="flex items-center border border-white/15"><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 text-gray-300 hover:text-[#f0c84b]">-</button><span className="w-8 text-center">{quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 text-gray-300 hover:text-[#f0c84b]">+</button></div>
                            <button type="button" onClick={addToCart} className="flex flex-1 items-center justify-center gap-2 border border-[#d4af37] px-5 py-3 font-bold text-[#f0c84b] transition hover:bg-[#d4af37] hover:text-[#171717]"><ShoppingBag size={17} /> Add to cart</button>
                            <button type="button" onClick={() => addToCart(true)} className="w-full bg-[#d4af37] px-5 py-3 font-bold text-[#171717] transition hover:bg-[#f0c84b] sm:w-auto">Buy now</button>
                        </div>
                        <div className="mt-8 border-t border-white/10 pt-6"><p className="mb-3 flex items-center gap-2 text-sm font-semibold"><Share2 size={16} className="text-[#d4af37]" /> Share this piece</p><div className="flex flex-wrap gap-2"><button type="button" onClick={shareProduct} className="flex items-center gap-2 border border-white/15 px-3 py-2 text-xs text-gray-300 hover:border-[#d4af37] hover:text-[#f0c84b]"><Share2 size={14} /> {copied ? "Link copied" : "Share link"}</button>{socialLinks.map(({ label, icon: Icon, url }) => <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={`Share on ${label}`} className="flex items-center gap-2 border border-white/15 px-3 py-2 text-xs text-gray-300 hover:border-[#d4af37] hover:text-[#f0c84b]"><Icon size={14} /> {label}</a>)}</div></div>
                        <div className="mt-6 flex items-center gap-2 text-xs text-gray-500"><Heart size={15} className="text-[#d4af37]" /> Carefully packed and delivered across Pakistan</div>
                    </div>
                </div>
                <div className="mt-20 border-t border-white/10 pt-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">You may also like</p>
                    <h2 className="mt-3 font-serif text-3xl font-bold">More from the collection</h2>
                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {suggestedProducts.map((suggestedProduct) => (
                            <Link key={suggestedProduct.id} to={`/products/${suggestedProduct.id}`} className="group overflow-hidden border border-white/10 bg-[#232323] transition hover:-translate-y-1 hover:border-[#d4af37]/60">
                                <div className="h-56 overflow-hidden bg-[#2c2c2c]"><img src={suggestedProduct.image} alt={suggestedProduct.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                                <div className="p-4"><p className="text-[10px] uppercase tracking-[0.18em] text-gray-500">{suggestedProduct.category}</p><h3 className="mt-2 font-bold group-hover:text-[#f0c84b]">{suggestedProduct.name}</h3><p className="mt-3 text-sm font-bold text-[#f0c84b]">{suggestedProduct.price}</p></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
import React, { useEffect, useState } from "react";
import { Heart, MessageCircle, Share2, ShoppingBag, Truck, Undo2, ShieldCheck, ZoomIn, X } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findProduct, products } from "../../lib/products";
import { addItemToCart } from "../../lib/cart";
import { SITE, whatsappUrl } from "../../lib/site";
import { useWishlist } from "../../lib/wishlist";
import ProductCard from "../products/ProductCard";

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const product = findProduct(productId);
    const { wishlist, toggle } = useWishlist();
    const [quantity, setQuantity] = useState(1);
    const [copied, setCopied] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || "Black");
    const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || product?.image);
    const [zoomOpen, setZoomOpen] = useState(false);

    useEffect(() => {
        setQuantity(1);
        setSelectedColor(product?.colors?.[0]?.name || "Black");
        setSelectedImage(product?.images?.[0] || product?.image);
        setZoomOpen(false);
    }, [productId, product]);

    useEffect(() => {
        document.title = product ? `${product.name} | Zeccora` : "Product not found | Zeccora";
    }, [product]);

    if (!product) {
        return (
            <section className="min-h-[60vh] bg-[#f7f2ec] px-6 py-24 text-center text-[#1a120c]">
                <h1 className="display-font text-4xl">Product not found</h1>
                <Link to="/products" className="mt-6 inline-block text-[#9F6324]">Back to products</Link>
            </section>
        );
    }

    const productUrl = `${(import.meta.env.VITE_PUBLIC_BASE_URL || window.location.origin).replace(/\/$/, "")}/products/${product.id}`;
    const shareText = `Check out ${product.name} from Zeccora`;
    const suggestedProducts = products.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 4);
    const saved = wishlist.includes(product.id);

    const addToCart = (redirectToCheckout = false) => {
        addItemToCart({ ...product, image: product.image, color: selectedColor }, quantity);
        navigate(redirectToCheckout ? "/cart?checkout=1" : "/cart");
    };

    return (
        <section className="min-h-[70vh] bg-[#f7f2ec] px-3 py-8 text-[#1a120c] sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <nav className="flex flex-wrap items-center gap-1.5 text-xs text-[#6b5b4e] sm:gap-2 sm:text-sm">
                    <Link to="/" className="transition hover:text-[#9F6324]">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="transition hover:text-[#9F6324]">Collection</Link>
                    <span>/</span>
                    <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="transition hover:text-[#9F6324]">{product.category}</Link>
                    <span>/</span>
                    <span className="text-[#1a120c]">{product.name}</span>
                </nav>

                <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <button
                            type="button"
                            onClick={() => setZoomOpen(true)}
                            className="group relative w-full overflow-hidden rounded-2xl bg-[#efe6dc] sm:rounded-[28px]"
                            aria-label={`Zoom ${product.name}`}
                        >
                            <img src={selectedImage} alt={product.name} className="aspect-[4/5] h-full w-full object-cover object-center" />
                            <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[#1a120c]">
                                <ZoomIn size={12} /> View
                            </span>
                        </button>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-sm capitalize text-[#8a7b70]">{product.category} · {product.sku}</p>
                        <h1 className="display-font mt-2 text-3xl sm:mt-3 sm:text-6xl">{product.name}</h1>
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                            <span className="text-2xl font-semibold text-[#9F6324]">{product.price}</span>
                            <span className="text-sm text-[#8a7b70] line-through">{product.oldPrice}</span>
                            {product.discount ? <span className="rounded-full bg-[#9F6324]/10 px-3 py-1 text-sm font-medium text-[#9F6324]">{product.discount}% off</span> : null}
                        </div>
                        <p className="mt-6 leading-7 text-[#6b5b4e]">{product.description}</p>

                        <div className="mt-8">
                            <p className="text-sm">Product images</p>
                            <p className="mt-1 text-xs text-[#8a7b70]">Select an image to view this product from another angle.</p>
                            <div className="mt-3 flex flex-wrap gap-3">
                                {product.images.map((image, imageIndex) => (
                                    <button
                                        key={`${product.id}-detail-image-${imageIndex}`}
                                        type="button"
                                        onClick={() => setSelectedImage(image)}
                                        className={`h-20 w-16 overflow-hidden rounded-xl bg-white p-1 transition sm:h-24 sm:w-20 ${selectedImage === image ? "ring-2 ring-[#9F6324]" : "ring-1 ring-black/5 hover:ring-[#9F6324]/50"}`}
                                        aria-label={`View product image ${imageIndex + 1}`}
                                    >
                                        <img src={image} alt={`${product.name} thumbnail ${imageIndex + 1}`} className="h-full w-full rounded-lg object-cover object-center" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <dl className="mt-8 grid grid-cols-2 gap-3 text-sm">
                            <div className="rounded-2xl bg-white p-4">
                                <dt className="text-xs uppercase tracking-[0.14em] text-[#8a7b70]">Material</dt>
                                <dd className="mt-1 text-[#1a120c]">{product.material}</dd>
                            </div>
                            <div className="rounded-2xl bg-white p-4">
                                <dt className="text-xs uppercase tracking-[0.14em] text-[#8a7b70]">Size</dt>
                                <dd className="mt-1 text-[#1a120c]">{product.dimensions}</dd>
                            </div>
                            <div className="rounded-2xl bg-white p-4">
                                <dt className="text-xs uppercase tracking-[0.14em] text-[#8a7b70]">Strap</dt>
                                <dd className="mt-1 text-[#1a120c]">{product.strap}</dd>
                            </div>
                            <div className="rounded-2xl bg-white p-4">
                                <dt className="text-xs uppercase tracking-[0.14em] text-[#8a7b70]">Availability</dt>
                                <dd className="mt-1 text-emerald-700">Ready to dispatch</dd>
                            </div>
                        </dl>

                        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
                            <div className="flex items-center justify-between rounded-full bg-white sm:justify-start">
                                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 py-3">-</button>
                                <span className="w-8 text-center">{quantity}</span>
                                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)} className="px-5 py-3">+</button>
                            </div>
                            <div className="flex gap-3">
                                <button type="button" onClick={() => addToCart()} className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-[#9F6324] px-5 py-3 font-semibold text-white">
                                    <ShoppingBag size={17} /> Add to cart
                                </button>
                                <button type="button" onClick={() => toggle(product.id)} className={`shrink-0 rounded-full border px-4 py-3 ${saved ? "border-[#9F6324] text-[#9F6324]" : "border-black/10 text-[#5c4c40]"}`} aria-label="Save for later">
                                    <Heart size={17} fill={saved ? "#9F6324" : "none"} />
                                </button>
                            </div>
                            <button type="button" onClick={() => addToCart(true)} className="w-full rounded-full border border-[#9F6324] px-5 py-3 font-semibold text-[#9F6324] sm:w-auto">
                                Buy now
                            </button>
                        </div>

                        <div className="mt-8 grid gap-3 text-xs text-[#5c4c40] sm:grid-cols-3">
                            <p className="flex items-center gap-2 rounded-2xl bg-white p-3"><Truck size={14} className="text-[#9F6324]" /> {SITE.deliveryWindow} · Rs. {SITE.deliveryFee} delivery</p>
                            <p className="flex items-center gap-2 rounded-2xl bg-white p-3"><Undo2 size={14} className="text-[#9F6324]" /> {SITE.returnDays}-day returns</p>
                            <p className="flex items-center gap-2 rounded-2xl bg-white p-3"><ShieldCheck size={14} className="text-[#9F6324]" /> Cash on delivery</p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4 text-sm">
                            <Link to="/size-guide" className="text-[#9F6324]">Size guide</Link>
                            <Link to="/shipping" className="text-[#9F6324]">Shipping</Link>
                            <Link to="/returns" className="text-[#9F6324]">Returns</Link>
                        </div>

                        <button type="button" onClick={async () => {
                            if (navigator.share) await navigator.share({ title: product.name, text: shareText, url: productUrl });
                            else {
                                await navigator.clipboard.writeText(productUrl);
                                setCopied(true);
                                window.setTimeout(() => setCopied(false), 1800);
                            }
                        }} className="mt-6 inline-flex items-center gap-2 text-sm text-[#6b5b4e] hover:text-[#9F6324]">
                            <Share2 size={14} /> {copied ? "Link copied" : "Share"}
                        </button>
                        <a href={whatsappUrl(`${shareText} ${productUrl}`)} className="mt-3 inline-flex items-center gap-2 text-xs text-[#6b5b4e] hover:text-[#9F6324]">
                            <MessageCircle size={14} /> Ask on WhatsApp
                        </a>
                    </div>
                </div>

                {suggestedProducts.length > 0 ? (
                    <div className="mt-20">
                        <h2 className="display-font text-center text-3xl sm:text-5xl">You may also like</h2>
                        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-20 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
                            {suggestedProducts.map((suggestedProduct) => (
                                <ProductCard key={suggestedProduct.id} product={suggestedProduct} />
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>

            {zoomOpen ? (
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4">
                    <button type="button" aria-label="Close image" onClick={() => setZoomOpen(false)} className="absolute right-5 top-5 text-white"><X size={28} /></button>
                    <img src={selectedImage} alt={product.name} className="max-h-[90vh] max-w-full rounded-2xl object-contain" />
                </div>
            ) : null}
        </section>
    );
};

export default ProductDetail;

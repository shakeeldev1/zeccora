import React from "react";
import { Link } from "react-router-dom";
import { Check, Heart, ShoppingBag } from "lucide-react";

const ProductCard = ({
    product,
    onAddToCart,
    wishlist = [],
    onToggleWishlist,
    added = false,
}) => {
    return (
        <article className="group">
            <Link to={`/products/${product.id}`} className="block">
                <div className="relative overflow-hidden rounded-2xl bg-[#efe6dc] shadow-[0_10px_30px_rgba(26,18,12,0.04)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_rgba(26,18,12,0.1)] sm:rounded-[28px]">
                    <div className="aspect-[4/5] overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 translate-y-2 rounded-full bg-white/95 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1a120c] opacity-0 shadow-sm transition duration-500 sm:block group-hover:translate-y-0 group-hover:opacity-100">
                        Shop now
                    </span>
                    {product.discount ? (
                        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[#9F6324] shadow-sm">
                            {product.discount}% off
                        </span>
                    ) : null}
                    {onToggleWishlist ? (
                        <button
                            type="button"
                            onClick={(event) => {
                                event.preventDefault();
                                onToggleWishlist(product.id);
                            }}
                            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#1a120c] shadow-sm transition hover:text-[#9F6324] sm:right-3 sm:top-3 sm:h-9 sm:w-9"
                            aria-label={`Save ${product.name}`}
                        >
                            <Heart size={16} fill={wishlist.includes(product.id) ? "#9F6324" : "none"} className={wishlist.includes(product.id) ? "text-[#9F6324]" : ""} />
                        </button>
                    ) : null}
                </div>
                <div className="mt-3 text-center sm:mt-4">
                    <p className="text-[10px] capitalize tracking-[0.14em] text-[#8a7b70] sm:text-[11px]">{product.category}</p>
                    <h3 className="display-font mt-1 line-clamp-2 text-base font-medium tracking-wide text-[#1a120c] transition group-hover:text-[#9F6324] sm:text-xl">
                        {product.name}
                    </h3>
                    <div className="mt-2 flex items-center justify-center gap-2 text-sm">
                        <span className="font-semibold text-[#9F6324]">{product.price}</span>
                        {product.oldPrice ? <span className="text-[#8a7b70] line-through">{product.oldPrice}</span> : null}
                    </div>
                    {product.colors?.length ? (
                        <div className="mt-2 flex justify-center gap-1.5">
                            {product.colors.map((color) => (
                                <span key={color.name} className="h-2.5 w-2.5 rounded-full border border-black/10" style={{ backgroundColor: color.hex }} title={color.name} />
                            ))}
                        </div>
                    ) : null}
                </div>
            </Link>
            {onAddToCart ? (
                <div className="mt-3 text-center">
                    <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                            added ? "text-emerald-700" : "text-[#1a120c] hover:text-[#9F6324]"
                        }`}
                    >
                        {added ? <Check size={14} /> : <ShoppingBag size={14} />}
                        {added ? "Added" : "Add to cart"}
                    </button>
                </div>
            ) : null}
        </article>
    );
};

export default ProductCard;

import React, { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { findOffer, isOfferPercent, OFFERS } from "../../lib/offers";
import { useWishlist } from "../../lib/wishlist";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAddToCart }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const { wishlist, toggle } = useWishlist();
    const [addedProduct, setAddedProduct] = useState(null);
    const [sortBy, setSortBy] = useState("featured");

    const offerPercent = Number(searchParams.get("offer"));
    const activeOffer = isOfferPercent(offerPercent) ? findOffer(offerPercent) : null;
    const searchTerm = searchParams.get("q") || "";

    useEffect(() => {
        if (searchParams.get("category")) {
            const nextParams = new URLSearchParams(searchParams);
            nextParams.delete("category");
            setSearchParams(nextParams, { replace: true });
        }
    }, [searchParams, setSearchParams]);

    const filteredProducts = useMemo(() => {
        const offerProducts = activeOffer
            ? products.filter((product) => Number(product.discount) === activeOffer.percent)
            : products;
        const searched = offerProducts.filter((product) => {
            const searchValue = searchTerm.trim().toLowerCase();
            return !searchValue || [product.name, product.category, product.badge, product.sku]
                .some((value) => String(value).toLowerCase().includes(searchValue));
        });

        const sorted = [...searched];
        if (sortBy === "price-asc") sorted.sort((a, b) => a.priceValue - b.priceValue);
        if (sortBy === "price-desc") sorted.sort((a, b) => b.priceValue - a.priceValue);
        if (sortBy === "discount") sorted.sort((a, b) => b.discount - a.discount);
        return sorted;
    }, [products, activeOffer, searchTerm, sortBy]);

    const setParam = (key, value) => {
        const nextParams = new URLSearchParams(searchParams);
        if (!value) nextParams.delete(key);
        else nextParams.set(key, String(value));
        setSearchParams(nextParams, { replace: true });
    };

    const addProduct = (product) => {
        onAddToCart({
            ...product,
            color: product.colors?.[0]?.name || "Black",
            image: product.image,
        });
        setAddedProduct(product.id);
        window.setTimeout(() => setAddedProduct(null), 1600);
    };

    const chipClass = (active) =>
        `rounded-full px-3.5 py-2 text-xs capitalize transition sm:px-4 sm:text-sm ${active ? "bg-[#9F6324] text-white" : "bg-white text-[#5c4c40] hover:text-[#9F6324]"
        }`;

    return (
        <section id="collection" className="bg-[#f7f2ec] py-12 text-[#1a120c] sm:py-20">
            <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
                <div className="mb-8 text-center sm:mb-10">
                    <p className="section-kicker">{activeOffer ? "Limited offer" : "Zeccora Collection"}</p>
                    <h2 className="display-font mt-3 text-3xl sm:text-5xl">
                        {activeOffer ? `${activeOffer.value} collection` : "Shop the collection"}
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6b5b4e]">
                        {activeOffer
                            ? `Sale prices are already applied. Mention code ${activeOffer.code} on WhatsApp if you like.`
                            : "Explore the complete collection, with every listing shown using its real product photo."}
                    </p>
                    <p className="mt-3 text-sm text-[#8a7b70]">{filteredProducts.length} pieces</p>
                </div>

                <div className="chip-row mb-4 sm:mb-6 sm:flex-wrap sm:justify-center">
                    <button type="button" onClick={() => setParam("offer")} className={chipClass(!activeOffer)}>
                        All deals
                    </button>
                    {OFFERS.map((offer) => (
                        <button
                            key={offer.percent}
                            type="button"
                            onClick={() => offer.comingSoon ? navigate("/coming-soon") : setParam("offer", offer.percent)}
                            className={chipClass(!offer.comingSoon && activeOffer?.percent === offer.percent)}
                        >
                            {offer.comingSoon ? "15% soon" : offer.value.toLowerCase()}
                        </button>
                    ))}
                </div>

                <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:items-center sm:gap-4 lg:flex-row lg:justify-end">
                    <div className="flex w-full flex-col gap-3 sm:max-w-xl sm:flex-row">
                        <div className="relative flex-1">
                            <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9F6324]" />
                            <input
                                type="search"
                                value={searchTerm}
                                onChange={(event) => setParam("q", event.target.value)}
                                placeholder="Search by name or SKU..."
                                aria-label="Search products"
                                className="w-full rounded-full border-0 bg-white py-3 pl-11 pr-11 text-base text-[#1a120c] outline-none placeholder:text-[#8a7b70] sm:text-sm"
                            />
                            {searchTerm ? (
                                <button type="button" aria-label="Clear product search" onClick={() => setParam("q")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a7b70]">
                                    <X size={16} />
                                </button>
                            ) : null}
                        </div>
                        <label className="sr-only" htmlFor="sort-products">Sort products</label>
                      
                    </div>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="px-6 py-16 text-center">
                        <SlidersHorizontal size={28} className="mx-auto text-[#9F6324]" />
                        <h3 className="mt-4 text-2xl font-semibold">No products found</h3>
                        <p className="mt-2 text-sm text-[#6b5b4e]">Try another name, category, or offer.</p>
                        <button
                            type="button"
                            onClick={() => setSearchParams({}, { replace: true })}
                            className="mt-6 text-sm font-semibold text-[#9F6324]"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={addProduct}
                                wishlist={wishlist}
                                onToggleWishlist={toggle}
                                added={addedProduct === product.id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;

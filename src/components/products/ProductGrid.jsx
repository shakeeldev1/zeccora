import React, { useEffect, useState } from "react";
import { Check, Heart, Search, ShoppingBag, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductGrid = ({ products, onAddToCart }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [wishlist, setWishlist] = useState([]);
    const [addedProduct, setAddedProduct] = useState(null);

    const filters = ["All", "Handbags", "Shoulder Bags"];

    useEffect(() => {
        const selectedCategory = searchParams.get("category");

        if (!selectedCategory) {
            setActiveFilter("All");
            return;
        }

        const validCategory = filters.includes(selectedCategory) ? selectedCategory : "All";
        setActiveFilter(validCategory);
    }, [searchParams]);

    const categoryProducts = activeFilter === "All"
        ? products
        : products.filter((product) => product.category === activeFilter);
    const filteredProducts = categoryProducts.filter((product) => {
        const searchValue = searchTerm.trim().toLowerCase();
        return !searchValue || [product.name, product.category, product.badge]
            .some((value) => value.toLowerCase().includes(searchValue));
    });

    const addProduct = (product) => {
        onAddToCart(product);
        setAddedProduct(product.id);
        window.setTimeout(() => setAddedProduct(null), 1600);
    };

    const toggleWishlist = (id) => {
        setWishlist((current) => current.includes(id)
            ? current.filter((item) => item !== id)
            : [...current, id]);
    };

    return (
        <section id="collection" className="bg-[#1b1b1b] py-16 text-white sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Curated for you</p>
                        <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Find your signature piece</h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                            Premium silhouettes, thoughtful details, and everyday versatility in one refined collection.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <SlidersHorizontal size={16} className="text-[#d4af37]" />
                        <span>{filteredProducts.length} pieces</span>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => {
                                    setActiveFilter(filter);
                                    const nextParams = new URLSearchParams(searchParams);

                                    if (filter === "All") {
                                        nextParams.delete("category");
                                    } else {
                                        nextParams.set("category", filter);
                                    }

                                    setSearchParams(nextParams, { replace: true });
                                }}
                                className={`rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${activeFilter === filter
                                    ? "border-[#d4af37] bg-[#d4af37] text-[#171717]"
                                    : "border-white/15 text-gray-300 hover:border-[#d4af37]/60 hover:text-[#d4af37]"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                <div className="relative w-full max-w-xl lg:ml-6 lg:flex-1">
                    <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#d4af37]" />
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Search products..."
                        aria-label="Search products"
                        className="w-full rounded-xl border border-white/15 bg-[#232323] py-3 pl-11 pr-11 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#d4af37]"
                    />
                    {searchTerm && (
                        <button
                            type="button"
                            aria-label="Clear product search"
                            onClick={() => setSearchTerm("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 transition hover:text-[#d4af37]"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="mt-8 border border-dashed border-white/15 bg-[#232323] px-6 py-16 text-center">
                        <Search size={28} className="mx-auto text-[#d4af37]" />
                        <h3 className="mt-4 font-serif text-2xl font-bold text-white">Product not found</h3>
                        <p className="mt-2 text-sm text-gray-400">Try another product name or category.</p>
                    </div>
                ) : (
                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredProducts.map((product) => (
                        <article
                            key={product.id}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#232323] transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-black/30"
                        >
                            <Link to={`/products/${product.id}`} className="relative block h-72 overflow-hidden bg-[#2c2c2c]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent" />
                                <span className="absolute left-3 top-3 rounded-md bg-[#d4af37] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#171717]">
                                    {product.badge}
                                </span>
                                <button
                                    type="button"
                                    aria-label={`Add ${product.name} to wishlist`}
                                    onClick={() => toggleWishlist(product.id)}
                                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-[#d4af37] hover:text-[#171717]"
                                >
                                    <Heart size={16} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                                </button>
                            </Link>

                            <div className="p-5">
                                <Link to={`/products/${product.id}`} className="block">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">{product.category}</p>
                                    <h3 className="mt-2 min-h-12 text-base font-bold text-white transition hover:text-[#f0c84b]">{product.name}</h3>
                                </Link>
                                <div className="mt-4 flex items-end gap-2">
                                    <span className="text-lg font-bold text-[#f0c84b]">{product.price}</span>
                                    <span className="text-xs text-gray-500 line-through">{product.oldPrice}</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => addProduct(product)}
                                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#d4af37]/60 px-4 py-3 text-sm font-bold text-[#f0c84b] transition hover:bg-[#d4af37] hover:text-[#171717]"
                                >
                                    {addedProduct === product.id ? <Check size={17} /> : <ShoppingBag size={17} />}
                                    {addedProduct === product.id ? "Added to cart" : "Add to cart"}
                                </button>
                            </div>
                        </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;

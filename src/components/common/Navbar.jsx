import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";

const Navbar = () => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("urban-bazaar-cart") || "[]"));

    useEffect(() => {
        const updateCart = () => {
            const nextCart = JSON.parse(localStorage.getItem("urban-bazaar-cart") || "[]");
            setCart(nextCart);
            setCartCount(nextCart.reduce((total, item) => total + (item.quantity || 0), 0));
        };
        const openCart = () => setCartOpen(true);

        updateCart();
        window.addEventListener("cart-updated", updateCart);
        window.addEventListener("cart-open", openCart);
        window.addEventListener("storage", updateCart);

        return () => {
            window.removeEventListener("cart-updated", updateCart);
            window.removeEventListener("cart-open", openCart);
            window.removeEventListener("storage", updateCart);
        };
    }, []);

    // Prevent body scrolling when side-drawer is open
    useEffect(() => {
        if (cartOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [cartOpen]);

    const updateCartStorage = (nextCart) => {
        setCart(nextCart);
        localStorage.setItem("urban-bazaar-cart", JSON.stringify(nextCart));
        window.dispatchEvent(new Event("cart-updated"));
    };

    const changeQuantity = (id, amount) => {
        updateCartStorage(
            cart
                .map((item) => (item.id === id ? { ...item, quantity: item.quantity + amount } : item))
                .filter((item) => item.quantity > 0)
        );
    };

    const total = cart.reduce((sum, item) => {
        const priceNum = Number(String(item.price || 0).replace(/[^0-9]/g, "")) || 0;
        return sum + priceNum * item.quantity;
    }, 0);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Offers", href: "/offers", badge: "Sale" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#9F6324]/25 bg-gradient-to-b from-[#000000] via-[#120805] to-[#000000] text-white shadow-[0_12px_35px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9F6324] to-transparent opacity-80" />
            <div className="mx-auto flex h-[86px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">

                {/* Logo */}
                <NavLink to="/" className="group flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <img
                        src="/hero/zeccora-logo.jpg"
                        alt="Zeccora"
                        className="h-16 w-[114px] rounded-sm object-contain brightness-110 contrast-110 ring-1 ring-[#9F6324]/20 transition duration-300 group-hover:scale-[1.03] group-hover:ring-[#9F6324]/60"
                    />
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) => `group relative flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition duration-300 hover:bg-white/[0.06] hover:text-[#FFFFC9] ${isActive ? "bg-[#9F6324]/12 text-[#FFFFC9] shadow-[inset_0_0_0_1px_rgba(159,99,36,0.18)]" : "text-gray-300"}`}
                        >
                            {link.name}

                            {link.badge && (
                                <span className="absolute -right-7 -top-3 rounded-full border border-[#f06a7d]/40 bg-[#d91f3c] px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide leading-none text-white shadow-lg">
                                    {link.badge}
                                </span>
                            )}

                            <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#9F6324] transition-all duration-300 group-hover:w-1/2" />
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Right Side */}
                <div className="hidden items-center gap-4 lg:flex">
                    <button
                        type="button"
                        onClick={() => setCartOpen(true)}
                        className="group flex items-center gap-2 rounded-full border border-[#9F6324]/60 bg-[#120805] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#FFFFC9] shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition duration-300 hover:border-white hover:bg-white hover:text-[#000000] hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)]"
                    >
                        <ShoppingBag
                            size={18}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                        Cart {cartCount > 0 && `(${cartCount})`}
                    </button>
                </div>

                {/* Mobile Right */}
                <div className="flex items-center gap-3 lg:hidden">
                    <button
                        type="button"
                        onClick={() => setCartOpen(true)}
                        className="relative rounded-full border border-[#9F6324]/40 bg-white/[0.04] p-2 text-[#FFFFC9] transition hover:bg-[#9F6324] hover:text-[#000000]"
                        aria-label="Open Cart"
                    >
                        <ShoppingBag size={20} />
                        {cartCount > 0 && (
                            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9F6324] px-1 text-[9px] font-bold text-[#000000]">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-gray-300 transition hover:border-[#9F6324]/50 hover:text-[#9F6324]"
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t border-[#9F6324]/15 bg-gradient-to-b from-[#000000] via-[#120805] to-[#000000] px-6 py-6 shadow-2xl lg:hidden">
                    <div className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between border-b border-white/[0.06] py-2 text-sm font-semibold uppercase tracking-[0.12em] text-gray-300 transition hover:text-[#9F6324]"
                            >
                                {link.name}
                                {link.badge && (
                                    <span className="rounded-full border border-[#f06a7d]/40 bg-[#d91f3c] px-1.5 py-0.5 text-[8px] font-medium uppercase tracking-wide leading-none text-white shadow-sm">
                                        Sale
                                    </span>
                                )}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}

            {/* Cart Drawer */}
            {cartOpen && (
                <>
                    <button
                        type="button"
                        aria-label="Close shopping cart"
                        onClick={() => setCartOpen(false)}
                        className="fixed inset-0 z-40 bg-black/60"
                    />
                    <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[420px] flex-col bg-gradient-to-br from-[#120805] to-[#000000] text-white shadow-2xl">
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                            <div>
                                <h2 className=" text-xl font-bold">Shopping Cart</h2>
                                <p className="text-xs text-gray-400">{cartCount} items</p>
                            </div>
                            <button type="button" aria-label="Close shopping cart" onClick={() => setCartOpen(false)} className="text-gray-300 transition hover:text-[#9F6324]"><X size={22} /></button>
                        </div>

                        {cart.length === 0 ? (
                            <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                                <ShoppingBag size={58} className="text-gray-200" />
                                <h3 className="mt-6  text-xl font-bold">Your cart is empty</h3>
                                <p className="mt-2 text-sm text-gray-400">Explore our collection and add your favorites</p>
                                <button
                                    type="button"
                                    onClick={() => { setCartOpen(false); navigate("/products"); }}
                                    className="mt-9  text-base font-semibold text-white hover:text-[#9F6324]"
                                >
                                    Browse Products
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex-1 space-y-4 overflow-y-auto p-6">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex gap-3 border-b border-white/10 pb-4">
                                            <img src={item.image} alt={item.name} className="h-20 w-16 object-cover" />
                                            <div className="min-w-0 flex-1">
                                                <h3 className="truncate text-sm font-semibold">{item.name}</h3>
                                                <p className="mt-1 text-sm text-[#FFFFC9]">{item.price}</p>
                                                <div className="mt-2 flex items-center gap-2">
                                                    <button type="button" aria-label="Decrease quantity" onClick={() => changeQuantity(item.id, -1)} className="border border-white/15 p-1 hover:text-[#9F6324]"><Minus size={13} /></button>
                                                    <span className="w-5 text-center text-xs">{item.quantity}</span>
                                                    <button type="button" aria-label="Increase quantity" onClick={() => changeQuantity(item.id, 1)} className="border border-white/15 p-1 hover:text-[#9F6324]"><Plus size={13} /></button>
                                                    <button type="button" aria-label={`Remove ${item.name}`} onClick={() => updateCartStorage(cart.filter((cartItem) => cartItem.id !== item.id))} className="ml-auto text-gray-500 hover:text-red-400"><Trash2 size={15} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-white/10 p-6">
                                    <div className="flex justify-between text-lg font-bold"><span>Total</span><span className="text-[#FFFFC9]">{total.toLocaleString()} PKR</span></div>
                                    <NavLink to="/cart" onClick={() => setCartOpen(false)} className="mt-5 block w-full bg-[#9F6324] px-5 py-3 text-center text-sm font-bold text-[#000000] transition hover:bg-[#FFFFC9]">View Cart</NavLink>
                                </div>
                            </>
                        )}
                    </aside>
                </>
            )}
        </nav>
    );
};

export default Navbar;
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("urban-bazaar-cart") || "[]"));

    useEffect(() => {
        const updateCart = () => {
            const nextCart = JSON.parse(localStorage.getItem("urban-bazaar-cart") || "[]");
            setCart(nextCart);
            setCartCount(nextCart.reduce((total, item) => total + item.quantity, 0));
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

    const updateCartStorage = (nextCart) => {
        setCart(nextCart);
        localStorage.setItem("urban-bazaar-cart", JSON.stringify(nextCart));
        window.dispatchEvent(new Event("cart-updated"));
    };

    const changeQuantity = (id, amount) => {
        updateCartStorage(cart
            .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
            .filter((item) => item.quantity > 0));
    };

    const total = cart.reduce((sum, item) => sum + Number(item.price.replace(/[^0-9]/g, "")) * item.quantity, 0);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Offers", href: "/offers", badge: "Sale" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#c9a227]/20 bg-[#1b1b1b] text-white shadow-lg">
            <div className="mx-auto flex h-[78px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">

                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex h-12 w-14 flex-col items-center justify-center border border-[#c9a227]/30 bg-[#202020]">
                        <span className="font-serif text-xl font-bold tracking-[3px] text-[#d4af37]">
                            ZC
                        </span>

                        <span className="mt-[-2px] text-[6px] tracking-[3px] text-gray-400">
                            ZECCORA
                        </span>
                    </div>
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) => `group relative flex items-center gap-1 text-sm font-medium transition duration-300 hover:text-[#d4af37] ${isActive ? "text-[#d4af37]" : "text-gray-300"}`}
                        >
                            {link.name}

                            {link.badge && (
                                <span className="absolute -right-7 -top-3 rounded-full border border-[#f06a7d]/40 bg-[#d91f3c] px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide leading-none text-white shadow-lg">
                                    {link.badge}
                                </span>
                            )}

                            {/* Hover Line */}
                            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                        </NavLink>
                    ))}
                </div>

                {/* Desktop Right Side */}
                <div className="hidden items-center gap-4 lg:flex">
                    {/* Cart */}
                    <NavLink
                        to="/cart"
                        className="group flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#4a2020] px-5 py-3 text-sm font-semibold text-[#d4af37] transition duration-300 hover:bg-[#d4af37] hover:text-[#1b1b1b]"
                    >
                        <ShoppingBag
                            size={18}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />

                        Cart {cartCount > 0 && `(${cartCount})`}
                    </NavLink>
                </div>

                {/* Mobile Right */}
                <div className="flex items-center gap-3 lg:hidden">

                    {/* Cart Mobile */}
                    <NavLink
                        to="/cart"
                        className="relative rounded-full border border-[#d4af37]/30 p-2 text-[#d4af37]"
                    >
                        <ShoppingBag size={20} />
                        {cartCount > 0 && (
                            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#d4af37] px-1 text-[9px] font-bold text-[#171717]">
                                {cartCount}
                            </span>
                        )}
                    </NavLink>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-gray-300 transition hover:text-[#d4af37]"
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t border-white/10 bg-[#202020] px-6 py-6 lg:hidden">
                    <div className="flex flex-col gap-5">

                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between text-sm font-medium text-gray-300 transition hover:text-[#d4af37]"
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
            {cartOpen && (
                <>
                    <button
                        type="button"
                        aria-label="Close shopping cart"
                        onClick={() => setCartOpen(false)}
                        className="fixed inset-0 z-40 bg-black/60"
                    />
                    <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[420px] flex-col bg-[#202020] text-white shadow-2xl">
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                            <div>
                                <h2 className="font-serif text-xl font-bold">Shopping Cart</h2>
                                <p className="text-xs text-gray-400">{cartCount} items</p>
                            </div>
                            <button type="button" aria-label="Close shopping cart" onClick={() => setCartOpen(false)} className="text-gray-300 transition hover:text-[#d4af37]"><X size={22} /></button>
                        </div>

                        {cart.length === 0 ? (
                            <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                                <ShoppingBag size={58} className="text-gray-200" />
                                <h3 className="mt-6 font-serif text-xl font-bold">Your cart is empty</h3>
                                <p className="mt-2 text-sm text-gray-400">Explore our collection and add your favorites</p>
                                <button type="button" onClick={() => { setCartOpen(false); window.location.href = "/products"; }} className="mt-9 font-serif text-base font-semibold text-white hover:text-[#d4af37]">Browse Products</button>
                            </div>
                        ) : (
                            <>
                                <div className="flex-1 space-y-4 overflow-y-auto p-6">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex gap-3 border-b border-white/10 pb-4">
                                            <img src={item.image} alt={item.name} className="h-20 w-16 object-cover" />
                                            <div className="min-w-0 flex-1">
                                                <h3 className="truncate text-sm font-semibold">{item.name}</h3>
                                                <p className="mt-1 text-sm text-[#f0c84b]">{item.price}</p>
                                                <div className="mt-2 flex items-center gap-2">
                                                    <button type="button" aria-label="Decrease quantity" onClick={() => changeQuantity(item.id, -1)} className="border border-white/15 p-1 hover:text-[#d4af37]"><Minus size={13} /></button>
                                                    <span className="w-5 text-center text-xs">{item.quantity}</span>
                                                    <button type="button" aria-label="Increase quantity" onClick={() => changeQuantity(item.id, 1)} className="border border-white/15 p-1 hover:text-[#d4af37]"><Plus size={13} /></button>
                                                    <button type="button" aria-label={`Remove ${item.name}`} onClick={() => updateCart(cart.filter((cartItem) => cartItem.id !== item.id))} className="ml-auto text-gray-500 hover:text-red-400"><Trash2 size={15} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-white/10 p-6">
                                    <div className="flex justify-between text-lg font-bold"><span>Total</span><span className="text-[#f0c84b]">{total.toLocaleString()} PKR</span></div>
                                    <NavLink to="/cart" onClick={() => setCartOpen(false)} className="mt-5 block w-full bg-[#d4af37] px-5 py-3 text-center text-sm font-bold text-[#171717] transition hover:bg-[#f0c84b]">View Cart</NavLink>
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
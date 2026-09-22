import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { cartLineKey, readCart, writeCart } from "../../lib/cart";
import BrandLogo from "./BrandLogo";

const Navbar = () => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useState(() => readCart());

    useEffect(() => {
        const updateCart = () => {
            const nextCart = readCart();
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

    useEffect(() => {
        document.body.style.overflow = cartOpen || mobileMenuOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [cartOpen, mobileMenuOpen]);

    const updateCartStorage = (nextCart) => {
        setCart(nextCart);
        writeCart(nextCart);
    };

    const changeQuantity = (item, amount) => {
        const lineKey = cartLineKey(item);
        updateCartStorage(
            cart
                .map((cartItem) => (cartLineKey(cartItem) === lineKey ? { ...cartItem, quantity: cartItem.quantity + amount } : cartItem))
                .filter((cartItem) => cartItem.quantity > 0)
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
        <nav className="sticky top-0 z-50 w-full border-b border-[#9F6324]/10 bg-[#f7f2ec]/90 text-[#1a120c] shadow-[0_8px_30px_rgba(26,18,12,0.04)] backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-2 px-3 sm:h-[86px] sm:px-6 lg:px-10">
                <NavLink to="/" className="group shrink-0" onClick={() => setMobileMenuOpen(false)} aria-label="Zeccora home">
                    <BrandLogo size="nav" />
                </NavLink>

                <div className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) => `relative px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition hover:text-[#9F6324] ${isActive ? "text-[#9F6324]" : "text-[#5c4c40]"}`}
                        >
                            {link.name}
                            {link.badge && (
                                <span className="absolute -right-4 -top-1.5 rounded-full bg-[#9F6324] px-1.5 py-0.5 text-[8px] font-semibold uppercase leading-none tracking-normal text-white">
                                    {link.badge}
                                </span>
                            )}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden items-center gap-3 lg:flex">
                    <button
                        type="button"
                        onClick={() => setCartOpen(true)}
                        className="inline-flex items-center gap-2 rounded-full bg-[#9F6324] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white shadow-[0_8px_20px_rgba(159,99,36,0.25)] transition hover:bg-[#8a541c]"
                    >
                        <ShoppingBag size={15} />
                        Cart {cartCount > 0 && `(${cartCount})`}
                    </button>
                </div>

                <div className="flex shrink-0 items-center gap-2 lg:hidden">
                    <button
                        type="button"
                        onClick={() => setCartOpen(true)}
                        className="relative rounded-full bg-white p-2.5 text-[#1a120c]"
                        aria-label="Open Cart"
                    >
                        <ShoppingBag size={18} />
                        {cartCount > 0 && (
                            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9F6324] px-1 text-[9px] font-bold text-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => {
                            setMobileMenuOpen(!mobileMenuOpen);
                        }}
                        className="rounded-full bg-white p-2.5 text-[#1a120c]"
                        aria-label="Menu"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="border-t border-black/5 bg-[#f7f2ec] px-6 py-6 lg:hidden">
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex min-h-11 items-center justify-between py-2 text-sm tracking-wide text-[#5c4c40] hover:text-[#9F6324]"
                            >
                                {link.name}
                                {link.badge && (
                                    <span className="rounded-full bg-[#9F6324] px-1.5 py-0.5 text-[8px] font-medium uppercase leading-none text-white">
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
                        className="fixed inset-0 z-40 bg-black/40"
                    />
                    <aside className="fixed inset-y-0 right-0 z-50 flex h-[100dvh] w-full max-w-[420px] flex-col bg-[#f7f2ec] pb-[env(safe-area-inset-bottom)] text-[#1a120c] shadow-2xl">
                        <div className="flex items-center justify-between border-b border-black/5 px-6 py-5">
                            <div>
                                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                                <p className="text-xs text-[#8a7b70]">{cartCount} items</p>
                            </div>
                            <button type="button" aria-label="Close shopping cart" onClick={() => setCartOpen(false)} className="text-[#5c4c40] transition hover:text-[#9F6324]"><X size={22} /></button>
                        </div>

                        {cart.length === 0 ? (
                            <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                                <ShoppingBag size={58} className="text-[#d7c9bb]" />
                                <h3 className="mt-6 text-xl font-semibold">Your cart is empty</h3>
                                <p className="mt-2 text-sm text-[#8a7b70]">Explore our collection and add your favorites</p>
                                <button
                                    type="button"
                                    onClick={() => { setCartOpen(false); navigate("/products"); }}
                                    className="mt-9 text-base font-semibold text-[#9F6324]"
                                >
                                    Browse Products
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex-1 space-y-4 overflow-y-auto p-6">
                                    {cart.map((item) => (
                                        <div key={cartLineKey(item)} className="flex gap-3 border-b border-black/5 pb-4">
                                            <img src={item.image} alt={item.name} className="h-20 w-16 rounded-xl object-cover object-center" />
                                            <div className="min-w-0 flex-1">
                                                <h3 className="truncate text-sm font-semibold">{item.name}</h3>
                                                {item.color && <p className="mt-1 text-xs text-[#8a7b70]">{item.color}</p>}
                                                <p className="mt-1 text-sm text-[#9F6324]">{item.price}</p>
                                                <div className="mt-2 flex items-center gap-2">
                                                    <button type="button" aria-label="Decrease quantity" onClick={() => changeQuantity(item, -1)} className="rounded-full bg-white p-1 hover:text-[#9F6324]"><Minus size={13} /></button>
                                                    <span className="w-5 text-center text-xs">{item.quantity}</span>
                                                    <button type="button" aria-label="Increase quantity" onClick={() => changeQuantity(item, 1)} className="rounded-full bg-white p-1 hover:text-[#9F6324]"><Plus size={13} /></button>
                                                    <button type="button" aria-label={`Remove ${item.name}`} onClick={() => updateCartStorage(cart.filter((cartItem) => cartLineKey(cartItem) !== cartLineKey(item)))} className="ml-auto text-[#8a7b70] hover:text-red-500"><Trash2 size={15} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-black/5 p-4 sm:p-6">
                                    <div className="flex justify-between text-lg font-semibold"><span>Total</span><span className="text-[#9F6324]">{total.toLocaleString()} PKR</span></div>
                                    <NavLink to="/cart" onClick={() => setCartOpen(false)} className="mt-4 block w-full rounded-full bg-[#9F6324] px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#8a541c]">View Cart</NavLink>
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

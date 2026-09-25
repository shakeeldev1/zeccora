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
        <>
        <nav className="fixed inset-x-0 top-0 z-50 w-full border-b border-[#9F6324]/10 bg-[#f7f2ec]/95 text-[#1a120c] shadow-[0_8px_30px_rgba(26,18,12,0.04)] backdrop-blur-xl">
            <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-2 px-3 sm:h-16 sm:px-5 md:h-20 md:px-6 lg:h-[86px] lg:px-10">
                <NavLink to="/" className="group shrink-0" onClick={() => setMobileMenuOpen(false)} aria-label="Zeccora home">
                    <BrandLogo size="nav" />
                </NavLink>

                <div className="hidden items-center gap-0.5 md:flex lg:gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) => `relative px-2.5 py-2 text-[10px] font-medium uppercase tracking-[0.16em] transition hover:text-[#9F6324] lg:px-4 lg:text-[11px] lg:tracking-[0.2em] ${isActive ? "text-[#9F6324]" : "text-[#5c4c40]"}`}
                        >
                            {link.name}
                            {link.badge && (
                                <span className="absolute -right-1 -top-1.5 rounded-full bg-[#9F6324] px-1.5 py-0.5 text-[8px] font-semibold uppercase leading-none tracking-normal text-white lg:-right-3">
                                    {link.badge}
                                </span>
                            )}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    <button
                        type="button"
                        onClick={() => setCartOpen(true)}
                        className="inline-flex items-center gap-2 rounded-full bg-[#9F6324] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_rgba(159,99,36,0.25)] transition hover:bg-[#8a541c] lg:px-5 lg:text-[11px] lg:tracking-[0.16em]"
                    >
                        <ShoppingBag size={15} />
                        Cart {cartCount > 0 && `(${cartCount})`}
                    </button>
                </div>

                <div className="flex shrink-0 items-center gap-2 md:hidden">
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
                <div className="max-h-[min(70dvh,28rem)] overflow-y-auto border-t border-black/5 bg-[#f7f2ec] px-4 py-4 sm:px-6 sm:py-6 md:hidden">
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex min-h-11 items-center justify-between rounded-xl px-2 py-2 text-sm tracking-wide text-[#5c4c40] hover:bg-white hover:text-[#9F6324]"
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
        <div className="h-14 shrink-0 sm:h-16 md:h-20 lg:h-[86px]" aria-hidden="true" />
        </>
    );
};

export default Navbar;

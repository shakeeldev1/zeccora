import React, { useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("urban-bazaar-cart") || "[]"));
    const [searchParams] = useSearchParams();
    const [checkoutOpen, setCheckoutOpen] = useState(() => searchParams.get("checkout") === "1");
    const [customer, setCustomer] = useState({ name: "", email: "", phone: "", address: "" });

    const updateCart = (nextCart) => {
        setCart(nextCart);
        localStorage.setItem("urban-bazaar-cart", JSON.stringify(nextCart));
        window.dispatchEvent(new Event("cart-updated"));
    };

    const changeQuantity = (id, amount) => {
        const nextCart = cart
            .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
            .filter((item) => item.quantity > 0);
        updateCart(nextCart);
    };

    const total = cart.reduce((sum, item) => sum + Number(item.price.replace(/[^0-9]/g, "")) * item.quantity, 0);

    const handleCustomerChange = (event) => {
        const { name, value } = event.target;
        setCustomer((current) => ({ ...current, [name]: value }));
    };

    const handleOrderBook = (event) => {
        event.preventDefault();
        const orderItems = cart.map((item) => `${item.name} x${item.quantity} - ${item.price}`).join("\n");
        const message = [
            "New Zeccora Order",
            "",
            `Name: ${customer.name}`,
            `Email: ${customer.email}`,
            `Phone: ${customer.phone}`,
            `Address: ${customer.address}`,
            "Payment: Cash on Delivery",
            "Note: Rs. 300 delivery charges must be paid first.",
            "",
            "Items:",
            orderItems,
            "",
            `Product total: ${total.toLocaleString()} PKR`,
        ].join("\n");

        window.open(`https://wa.me/923126263348?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
        setCheckoutOpen(false);
    };

    return (
        <section className="min-h-[60vh] bg-[#1b1b1b] px-4 py-16 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Your selection</p>
                <h1 className="mt-3 font-serif text-4xl font-bold">Shopping cart</h1>
                {cart.length === 0 ? (
                    <div className="mt-10 border border-dashed border-white/15 px-6 py-16 text-center">
                        <ShoppingBag className="mx-auto text-[#d4af37]" size={34} />
                        <p className="mt-4 text-gray-400">Your cart is currently empty. Add products from the collection to get started.</p>
                    </div>
                ) : (
                    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
                        <div className="space-y-3">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-4 border border-white/10 bg-[#232323] p-4">
                                    <img src={item.image} alt={item.name} className="h-24 w-20 object-cover" />
                                    <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-center">
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-gray-500">{item.category}</p>
                                            <h2 className="mt-1 font-bold">{item.name}</h2>
                                            <p className="mt-1 text-sm text-[#f0c84b]">{item.price}</p>
                                        </div>
                                        <div className="mt-4 flex items-center gap-3 sm:mt-0">
                                            <div className="flex items-center border border-white/15">
                                                <button type="button" aria-label="Decrease quantity" onClick={() => changeQuantity(item.id, -1)} className="p-2 text-gray-300 hover:text-[#d4af37]"><Minus size={14} /></button>
                                                <span className="w-8 text-center text-sm">{item.quantity}</span>
                                                <button type="button" aria-label="Increase quantity" onClick={() => changeQuantity(item.id, 1)} className="p-2 text-gray-300 hover:text-[#d4af37]"><Plus size={14} /></button>
                                            </div>
                                            <button type="button" aria-label={`Remove ${item.name}`} onClick={() => updateCart(cart.filter((cartItem) => cartItem.id !== item.id))} className="p-2 text-gray-500 hover:text-red-400"><Trash2 size={17} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <aside className="h-fit border border-[#d4af37]/30 bg-[#232323] p-6">
                            <h2 className="font-serif text-2xl font-bold">Order summary</h2>
                            <div className="mt-6 flex justify-between border-b border-white/10 pb-4 text-sm text-gray-400"><span>Subtotal</span><span>{total.toLocaleString()} PKR</span></div>
                            <div className="mt-4 flex justify-between text-lg font-bold"><span>Total</span><span className="text-[#f0c84b]">{total.toLocaleString()} PKR</span></div>
                            <button type="button" onClick={() => setCheckoutOpen(true)} className="mt-6 w-full bg-[#d4af37] px-5 py-3.5 text-sm font-bold text-[#171717] transition hover:bg-[#f0c84b]">Proceed to checkout</button>
                        </aside>
                    </div>
                )}
            </div>

            {checkoutOpen && (
                <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/75 px-4 py-8 sm:py-10">
                    <div className="my-2 max-h-[calc(100vh-4rem)] w-full max-w-xl overflow-y-auto border border-[#d4af37]/30 bg-[#232323] p-6 shadow-2xl sm:my-0 sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">Complete your order</p>
                                <h2 className="mt-2 font-serif text-3xl font-bold">Checkout details</h2>
                            </div>
                            <button type="button" aria-label="Close checkout" onClick={() => setCheckoutOpen(false)} className="text-gray-400 transition hover:text-white"><X size={22} /></button>
                        </div>

                        <form onSubmit={handleOrderBook} className="mt-7 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="text-sm text-gray-300">
                                    Full name
                                    <input required name="name" value={customer.name} onChange={handleCustomerChange} type="text" className="mt-2 w-full border border-white/15 bg-[#1b1b1b] px-3 py-3 text-white outline-none transition focus:border-[#d4af37]" placeholder="Your name" />
                                </label>
                                <label className="text-sm text-gray-300">
                                    Email
                                    <input required name="email" value={customer.email} onChange={handleCustomerChange} type="email" className="mt-2 w-full border border-white/15 bg-[#1b1b1b] px-3 py-3 text-white outline-none transition focus:border-[#d4af37]" placeholder="you@example.com" />
                                </label>
                            </div>
                            <label className="block text-sm text-gray-300">
                                Phone number
                                <input required name="phone" value={customer.phone} onChange={handleCustomerChange} type="tel" className="mt-2 w-full border border-white/15 bg-[#1b1b1b] px-3 py-3 text-white outline-none transition focus:border-[#d4af37]" placeholder="03XX XXXXXXX" />
                            </label>
                            <label className="block text-sm text-gray-300">
                                Delivery address
                                <textarea required name="address" value={customer.address} onChange={handleCustomerChange} rows="3" className="mt-2 w-full resize-none border border-white/15 bg-[#1b1b1b] px-3 py-3 text-white outline-none transition focus:border-[#d4af37]" placeholder="House, street, city" />
                            </label>

                            <fieldset>
                                <legend className="text-sm font-semibold text-white">Payment method</legend>
                                <div className="mt-3 space-y-3">
                                    <label className="flex items-start gap-3 border border-[#d4af37]/50 bg-[#1b1b1b] p-3 text-sm text-gray-300">
                                        <input type="radio" name="payment" checked readOnly className="mt-1 accent-[#d4af37]" />
                                        <span><strong className="block text-white">Cash on Delivery</strong><span className="text-xs text-gray-500">Pay when your order arrives.</span></span>
                                    </label>
                                    <div className="border border-[#d4af37]/25 bg-[#d4af37]/10 p-3 text-sm text-gray-300">
                                        <strong className="block text-[#f0c84b]">Important delivery note</strong>
                                        <span className="mt-1 block text-xs text-gray-400">Rs. 300 delivery charges must be paid first. The remaining product amount is paid on delivery.</span>
                                    </div>
                                </div>
                            </fieldset>

                            <button type="submit" className="flex w-full items-center justify-center gap-2 bg-[#d4af37] px-5 py-3.5 text-sm font-bold text-[#171717] transition hover:bg-[#f0c84b]">Order Book </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Cart

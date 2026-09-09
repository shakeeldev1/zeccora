import React, { useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

const Cart = () => {
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("urban-bazaar-cart") || "[]"));

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
                            <button type="button" className="mt-6 w-full bg-[#d4af37] px-5 py-3.5 text-sm font-bold text-[#171717] transition hover:bg-[#f0c84b]">Proceed to checkout</button>
                        </aside>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart

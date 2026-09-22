import React, { useState } from "react";
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { cartLineKey, clearCart, readCart, writeCart } from "../../lib/cart";
import { SITE, whatsappUrl } from "../../lib/site";

const Cart = () => {
    const [cart, setCart] = useState(() => readCart());
    const [searchParams] = useSearchParams();
    const [checkoutOpen, setCheckoutOpen] = useState(() => searchParams.get("checkout") === "1" && readCart().length > 0);
    const [customer, setCustomer] = useState({ name: "", email: "", phone: "", address: "" });
    const [error, setError] = useState("");
    const [order, setOrder] = useState(null);

    const updateCart = (nextCart) => {
        setCart(nextCart);
        writeCart(nextCart);
    };

    const changeQuantity = (item, amount) => {
        const lineKey = cartLineKey(item);
        const nextCart = cart
            .map((cartItem) => cartLineKey(cartItem) === lineKey ? { ...cartItem, quantity: cartItem.quantity + amount } : cartItem)
            .filter((cartItem) => cartItem.quantity > 0);
        updateCart(nextCart);
    };

    const parseAmount = (value) => Number(String(value || 0).replace(/[^0-9]/g, "")) || 0;
    const subtotal = cart.reduce((sum, item) => sum + parseAmount(item.price) * item.quantity, 0);
    const delivery = cart.length ? SITE.deliveryFee : 0;
    const grandTotal = subtotal + delivery;

    const handleCustomerChange = (event) => {
        const { name, value } = event.target;
        setCustomer((current) => ({ ...current, [name]: value }));
    };

    const validPhone = (value) => {
        const digits = value.replace(/\D/g, "");
        return /^(92)?3\d{9}$/.test(digits) || /^03\d{9}$/.test(digits);
    };

    const handleOrderBook = (event) => {
        event.preventDefault();
        setError("");

        if (!validPhone(customer.phone)) {
            setError("Enter a valid Pakistani mobile number.");
            return;
        }

        const orderId = `ZC-${Date.now().toString().slice(-8)}`;
        const orderItems = cart.map((item) => `${item.name}${item.color ? ` (${item.color})` : ""}${item.sku ? ` · ${item.sku}` : ""}${item.discount ? ` [${item.discount}% OFF]` : ""} x${item.quantity} - ${item.price}`).join("\n");
        const message = [
            `New Zeccora Order ${orderId}`,
            "",
            `Name: ${customer.name}`,
            `Email: ${customer.email}`,
            `Phone: ${customer.phone}`,
            `Address: ${customer.address}`,
            "Payment: Cash on Delivery",
            `Delivery: ${SITE.deliveryFee} PKR paid first`,
            "",
            "Items:",
            orderItems,
            "",
            `Product total: ${subtotal.toLocaleString()} PKR`,
            `Delivery: ${delivery.toLocaleString()} PKR`,
            `Grand total: ${grandTotal.toLocaleString()} PKR`,
        ].join("\n");

        window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
        setOrder({ id: orderId, total: grandTotal });
        clearCart();
        setCart([]);
        setCheckoutOpen(false);
    };

    const fieldClass = "mt-2 w-full rounded-2xl bg-[#f7f2ec] px-3 py-3 text-[#1a120c] outline-none transition focus:ring-1 focus:ring-[#9F6324]";

    return (
        <section className="min-h-[60vh] bg-[#f7f2ec] px-3 py-10 text-[#1a120c] sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9F6324]">Your selection</p>
                <h1 className="mt-3 display-font text-4xl sm:text-5xl">Shopping cart</h1>

                {order ? (
                    <div className="mt-10 rounded-[28px] bg-white px-6 py-16 text-center">
                        <CheckCircle2 className="mx-auto text-[#9F6324]" size={40} />
                        <h2 className="display-font mt-4 text-4xl">Order booked</h2>
                        <p className="mt-3 text-[#6b5b4e]">WhatsApp should now be open with order {order.id}. If it did not open, message us on {SITE.phoneDisplay}.</p>
                        <p className="mt-2 text-sm text-[#8a7b70]">Grand total {order.total.toLocaleString()} PKR including delivery.</p>
                        <Link to="/products" className="mt-8 inline-block rounded-full bg-[#9F6324] px-6 py-3 text-sm font-semibold text-white">Continue shopping</Link>
                    </div>
                ) : cart.length === 0 ? (
                    <div className="mt-10 rounded-[28px] bg-[#efe6dc] px-6 py-16 text-center">
                        <ShoppingBag className="mx-auto text-[#9F6324]" size={34} />
                        <p className="mt-4 text-[#6b5b4e]">Your cart is currently empty. Add products from the collection to get started.</p>
                        <Link to="/products" className="mt-6 inline-block text-sm font-semibold text-[#9F6324]">Browse the collection</Link>
                    </div>
                ) : (
                    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
                        <div className="space-y-3">
                            {cart.map((item) => (
                                <div key={cartLineKey(item)} className="flex gap-3 rounded-2xl bg-white p-3 sm:gap-4 sm:rounded-[28px] sm:p-4">
                                    <img src={item.image} alt={item.name} className="h-20 w-16 shrink-0 rounded-2xl object-cover object-center sm:h-24 sm:w-20" />
                                    <div className="flex min-w-0 flex-1 flex-col justify-between sm:flex-row sm:items-center">
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-[#8a7b70]">{item.category}{item.sku ? ` · ${item.sku}` : ""}</p>
                                            <h2 className="mt-1 font-semibold">{item.name}</h2>
                                            {item.color && <p className="mt-1 text-xs text-[#8a7b70]">Color: {item.color}</p>}
                                            <p className="mt-1 text-sm text-[#9F6324]">{item.price}</p>
                                            {item.discount ? <p className="mt-1 text-xs text-[#9F6324]">{item.discount}% OFF</p> : null}
                                        </div>
                                        <div className="mt-4 flex items-center gap-3 sm:mt-0">
                                            <div className="flex items-center rounded-full bg-[#f7f2ec]">
                                                <button type="button" aria-label="Decrease quantity" onClick={() => changeQuantity(item, -1)} className="p-2 hover:text-[#9F6324]"><Minus size={14} /></button>
                                                <span className="w-8 text-center text-sm">{item.quantity}</span>
                                                <button type="button" aria-label="Increase quantity" onClick={() => changeQuantity(item, 1)} className="p-2 hover:text-[#9F6324]"><Plus size={14} /></button>
                                            </div>
                                            <button type="button" aria-label={`Remove ${item.name}`} onClick={() => updateCart(cart.filter((cartItem) => cartLineKey(cartItem) !== cartLineKey(item)))} className="p-2 text-[#8a7b70] hover:text-red-500"><Trash2 size={17} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <aside className="h-fit rounded-[28px] bg-white p-6">
                            <h2 className="text-2xl font-semibold">Order summary</h2>
                            <div className="mt-6 flex justify-between border-b border-black/5 pb-4 text-sm text-[#6b5b4e]"><span>Subtotal</span><span>{subtotal.toLocaleString()} PKR</span></div>
                            <div className="mt-4 flex justify-between border-b border-black/5 pb-4 text-sm text-[#6b5b4e]"><span>Delivery</span><span>{delivery.toLocaleString()} PKR</span></div>
                            <div className="mt-4 flex justify-between text-lg font-semibold"><span>Total</span><span className="text-[#9F6324]">{grandTotal.toLocaleString()} PKR</span></div>
                            <p className="mt-3 text-xs leading-5 text-[#8a7b70]">Rs. {SITE.deliveryFee} delivery is paid first. Product amount is collected as cash on delivery.</p>
                            <button type="button" onClick={() => setCheckoutOpen(true)} className="mt-6 w-full rounded-full bg-[#9F6324] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8a541c]">Proceed to checkout</button>
                        </aside>
                    </div>
                )}
            </div>

            {checkoutOpen && cart.length > 0 && (
                <div className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-black/40 sm:items-start sm:px-4 sm:py-10">
                    <div className="max-h-[92dvh] w-full max-w-xl overflow-y-auto rounded-t-[28px] bg-white p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-2xl sm:my-0 sm:rounded-[28px] sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9F6324]">Complete your order</p>
                                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Checkout details</h2>
                            </div>
                            <button type="button" aria-label="Close checkout" onClick={() => setCheckoutOpen(false)} className="text-[#8a7b70] transition hover:text-[#1a120c]"><X size={22} /></button>
                        </div>

                        <form onSubmit={handleOrderBook} className="mt-7 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="text-sm text-[#5c4c40]">
                                    Full name
                                    <input required name="name" value={customer.name} onChange={handleCustomerChange} type="text" className={fieldClass} placeholder="Your name" />
                                </label>
                                <label className="text-sm text-[#5c4c40]">
                                    Email
                                    <input required name="email" value={customer.email} onChange={handleCustomerChange} type="email" className={fieldClass} placeholder="you@example.com" />
                                </label>
                            </div>
                            <label className="block text-sm text-[#5c4c40]">
                                Phone number
                                <input required name="phone" value={customer.phone} onChange={handleCustomerChange} type="tel" className={fieldClass} placeholder="03XX XXXXXXX" />
                            </label>
                            <label className="block text-sm text-[#5c4c40]">
                                Delivery address
                                <textarea required name="address" value={customer.address} onChange={handleCustomerChange} rows="3" className={`${fieldClass} resize-none`} placeholder="House, street, city" />
                            </label>

                            <fieldset>
                                <legend className="text-sm font-semibold">Payment method</legend>
                                <div className="mt-3 space-y-3">
                                    <label className="flex items-start gap-3 rounded-2xl bg-[#f7f2ec] p-3 text-sm text-[#5c4c40]">
                                        <input type="radio" name="payment" checked readOnly className="mt-1 accent-[#9F6324]" />
                                        <span><strong className="block text-[#1a120c]">Cash on Delivery</strong><span className="text-xs text-[#8a7b70]">Pay the remaining amount when your order arrives.</span></span>
                                    </label>
                                    <div className="rounded-2xl bg-[#efe6dc] p-3 text-sm text-[#5c4c40]">
                                        <strong className="block text-[#9F6324]">Important delivery note</strong>
                                        <span className="mt-1 block text-xs">Rs. {SITE.deliveryFee} delivery charges must be paid first. Product total {subtotal.toLocaleString()} PKR + delivery {delivery.toLocaleString()} PKR = {grandTotal.toLocaleString()} PKR.</span>
                                    </div>
                                </div>
                            </fieldset>

                            {error ? <p className="text-sm text-red-600">{error}</p> : null}

                            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#9F6324] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8a541c]">Book order on WhatsApp</button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Cart;

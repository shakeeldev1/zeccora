import React, { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                            UB
                        </span>

                        <span className="mt-[-2px] text-[6px] tracking-[3px] text-gray-400">
                            URBAN
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
                                <span className="absolute -right-8 -top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#d91f3c] text-[9px] font-semibold text-white shadow-lg">
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

                        Cart
                    </NavLink>
                </div>

                {/* Mobile Right */}
                <div className="flex items-center gap-3 lg:hidden">

                    {/* Cart Mobile */}
                    <NavLink
                        to="/cart"
                        className="rounded-full border border-[#d4af37]/30 p-2 text-[#d4af37]"
                    >
                        <ShoppingBag size={20} />
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
                                    <span className="rounded-full bg-[#d91f3c] px-3 py-1 text-[10px] text-white">
                                        Sale
                                    </span>
                                )}
                            </NavLink>
                        ))}

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
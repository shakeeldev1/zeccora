import React from 'react'
import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-[#9F6324]/20 bg-gradient-to-b from-[#000000] via-[#120805] to-[#000000] text-gray-300">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#9F6324]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#9F6324]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-8 pt-16 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.3fr]">
          
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-flex">
              <img
                src="/hero/zeccora-logo.jpg"
                alt="Zeccora"
                className="h-[88px] w-[156px] object-contain brightness-110 contrast-110 transition-transform duration-300 hover:scale-105"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              Curated fashion for people who make their own statement. Discover timeless style with a modern edge.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: FiInstagram, label: 'Instagram' },
                { icon: FiFacebook, label: 'Facebook' },
                { icon: FiTwitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#social"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9F6324] hover:bg-[#9F6324] hover:text-black hover:shadow-lg hover:shadow-[#9F6324]/20"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9F6324]">
              <Sparkles size={13} /> Explore
            </h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              {[
                { label: 'Our story', path: '/about' },
                { label: 'Shop collection', path: '/products' },
                { label: 'Current offers', path: '/offers' },
                { label: 'Contact us', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="w-fit text-gray-400 transition-colors duration-200 hover:text-[#9F6324]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9F6324]">
              <Sparkles size={13} /> Customer Care
            </h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link to="/cart" className="w-fit text-gray-400 transition-colors duration-200 hover:text-[#9F6324]">
                Shopping bag
              </Link>
              <a href="mailto:hello@zeccora.store" className="w-fit text-gray-400 transition-colors duration-200 hover:text-[#9F6324]">
                Shipping & returns
              </a>
              <a href="mailto:hello@zeccora.store" className="w-fit text-gray-400 transition-colors duration-200 hover:text-[#9F6324]">
                Size guide
              </a>
              <a href="mailto:hello@zeccora.store" className="w-fit text-gray-400 transition-colors duration-200 hover:text-[#9F6324]">
                FAQs
              </a>
            </div>
          </div>

          {/* Newsletter & Contact Detail Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#9F6324]">
              Stay in the loop
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-gray-400">
              Get first access to new drops, private offers, and style notes.
            </p>

            <form
              className="mt-4 flex items-center rounded-xl border border-white/15 bg-black/40 px-3 py-2 transition-all focus-within:border-[#9F6324]"
              onSubmit={(event) => event.preventDefault()}
            >
              <Mail size={16} className="mr-2 shrink-0 text-[#9F6324]" />
              <input
                type="email"
                required
                placeholder="Your email address"
                aria-label="Your email address"
                className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-gray-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#9F6324] text-black transition-all hover:scale-105 hover:bg-white"
              >
                <ArrowUpRight size={16} />
              </button>
            </form>

            <div className="mt-6 space-y-2.5 text-xs text-gray-400">
              <p className="flex items-center gap-2.5">
                <MapPin size={14} className="shrink-0 text-[#9F6324]" /> Bahawalpur, Pakistan
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={14} className="shrink-0 text-[#9F6324]" /> +92 312 626 3348
              </p>
              <a
                href="mailto:info@zeccora.com"
                className="flex items-center gap-2.5 transition-colors hover:text-[#9F6324]"
              >
                <Mail size={14} className="shrink-0 text-[#9F6324]" /> info@zeccora.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 pt-7 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Zeccora. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="transition-colors hover:text-[#9F6324]">Privacy Policy</a>
            <a href="#terms" className="transition-colors hover:text-[#9F6324]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
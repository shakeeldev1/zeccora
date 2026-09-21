import React, { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import { SITE, whatsappUrl } from '../../lib/site'

const Footer = () => {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event) => {
    event.preventDefault()
    const saved = JSON.parse(localStorage.getItem('zeccora-newsletter') || '[]')
    localStorage.setItem('zeccora-newsletter', JSON.stringify([...new Set([...saved, email])]))
    window.open(whatsappUrl(`Please add ${email} to Zeccora updates.`), '_blank', 'noopener,noreferrer')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-[#efe6dc] text-[#5c4c40]">
      <div className="relative mx-auto max-w-[1400px] px-4 pb-24 pt-12 sm:px-6 sm:pb-8 sm:pt-16 lg:px-10">
        <div className="grid gap-12 border-b border-black/5 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.3fr]">
          <div>
            <Link to="/" className="inline-flex w-fit" aria-label="Zeccora home">
              <BrandLogo size="footer" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Premium bags from Johar Town, Lahore. Cash on delivery across Pakistan.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={whatsappUrl('Hello Zeccora, I would like to know more.')}
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#5c4c40] transition hover:bg-[#9F6324] hover:text-white"
              >
                <FaWhatsapp size={17} />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#5c4c40] transition hover:bg-[#9F6324] hover:text-white"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F6324]">
              Explore
            </h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              {[
                { label: 'Our story', path: '/about' },
                { label: 'Shop collection', path: '/products' },
                { label: 'Current offers', path: '/offers' },
                { label: 'Contact us', path: '/contact' },
              ].map((item) => (
                <Link key={item.label} to={item.path} className="w-fit transition hover:text-[#9F6324]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F6324]">
              Customer Care
            </h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link to="/cart" className="w-fit transition hover:text-[#9F6324]">Shopping bag</Link>
              <Link to="/shipping" className="w-fit transition hover:text-[#9F6324]">Shipping</Link>
              <Link to="/returns" className="w-fit transition hover:text-[#9F6324]">Returns</Link>
              <Link to="/size-guide" className="w-fit transition hover:text-[#9F6324]">Size guide</Link>
              <Link to="/faqs" className="w-fit transition hover:text-[#9F6324]">FAQs</Link>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F6324]">
              Stay in the loop
            </h2>
            <p className="mt-3 text-xs leading-relaxed">
              Get first access to new drops, private offers, and style notes.
            </p>
            {subscribed ? (
              <p className="mt-4 text-sm text-[#9F6324]">Saved. WhatsApp will confirm your updates.</p>
            ) : (
              <form className="mt-4 flex items-center rounded-full bg-[#f7f2ec] px-3 py-2" onSubmit={handleSubscribe}>
                <Mail size={16} className="mr-2 shrink-0 text-[#9F6324]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  aria-label="Your email address"
                  className="min-w-0 flex-1 bg-transparent text-base text-[#1a120c] outline-none placeholder:text-[#8a7b70] sm:text-xs"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#9F6324] text-white"
                >
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
            <div className="mt-6 space-y-2.5 text-xs">
              <p className="flex items-center gap-2.5">
                <MapPin size={14} className="shrink-0 text-[#9F6324]" /> {SITE.address}
              </p>
              <a href={whatsappUrl('Hello Zeccora')} className="flex items-center gap-2.5 transition hover:text-[#9F6324]">
                <Phone size={14} className="shrink-0 text-[#9F6324]" /> {SITE.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 transition hover:text-[#9F6324]">
                <Mail size={14} className="shrink-0 text-[#9F6324]" /> {SITE.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Zeccora. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition hover:text-[#9F6324]">Privacy Policy</Link>
            <Link to="/terms" className="transition hover:text-[#9F6324]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#d4af37]/20 bg-[#151515] text-gray-300">
      <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-14 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.3fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-14 flex-col items-center justify-center border border-[#c9a227]/30 bg-[#202020]">
                <span className="font-serif text-xl font-bold tracking-[3px] text-[#d4af37]">UB</span>
                <span className="mt-[-2px] text-[6px] tracking-[3px] text-gray-400">URBAN</span>
              </span>
              <span className="text-lg font-semibold tracking-[0.2em] text-white">BOUTIQUE</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-6 text-gray-400">
              Curated fashion for people who make their own statement. Discover timeless style with a modern edge.
            </p>
            <div className="mt-6 flex gap-3">
              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#social"
                  aria-label={['Instagram', 'Facebook', 'Twitter'][index]}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-gray-400 transition hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Explore</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link to="/about" className="transition hover:text-[#d4af37]">Our story</Link>
              <Link to="/products" className="transition hover:text-[#d4af37]">Shop collection</Link>
              <Link to="/offers" className="transition hover:text-[#d4af37]">Current offers</Link>
              <Link to="/contact" className="transition hover:text-[#d4af37]">Contact us</Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Customer care</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link to="/cart" className="transition hover:text-[#d4af37]">Shopping bag</Link>
              <a href="mailto:hello@urbanboutique.com" className="transition hover:text-[#d4af37]">Shipping & returns</a>
              <a href="mailto:hello@urbanboutique.com" className="transition hover:text-[#d4af37]">Size guide</a>
              <a href="mailto:hello@urbanboutique.com" className="transition hover:text-[#d4af37]">FAQs</a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Stay in the loop</h2>
            <p className="mt-5 text-sm leading-6 text-gray-400">Get first access to new drops, private offers, and style notes.</p>
            <form className="mt-5 flex border-b border-white/25 pb-2" onSubmit={(event) => event.preventDefault()}>
              <Mail size={17} className="mr-3 mt-1 shrink-0 text-[#d4af37]" />
              <input type="email" required placeholder="Your email address" aria-label="Your email address" className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-500" />
              <button type="submit" aria-label="Subscribe" className="text-[#d4af37] transition hover:text-white">
                <ArrowUpRight size={19} />
              </button>
            </form>
            <div className="mt-6 space-y-2 text-xs text-gray-400">
              <p className="flex items-center gap-2"><MapPin size={14} className="text-[#d4af37]" /> 24 Style Street, New York</p>
              <p className="flex items-center gap-2"><Phone size={14} className="text-[#d4af37]" /> +1 (212) 555-0198</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Urban Boutique. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#privacy" className="transition hover:text-[#d4af37]">Privacy</a>
            <a href="#terms" className="transition hover:text-[#d4af37]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

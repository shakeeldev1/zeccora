import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from './components/pages/Products'
import Offers from './components/pages/Offers'
import Contact from './components/pages/Contact'
import Cart from './components/pages/Cart'
import NotFound from './components/pages/NotFound'
import ProductDetail from './components/pages/ProductDetail'
import Shipping from './components/pages/Shipping'
import Returns from './components/pages/Returns'
import SizeGuide from './components/pages/SizeGuide'
import Faqs from './components/pages/Faqs'
import ComingSoon from './components/pages/ComingSoon'
import Privacy from './components/pages/Privacy'
import Terms from './components/pages/Terms'
import WhatsAppButton from './components/common/Whatsapp'

const PAGE_TITLES = {
  '/': 'Zeccora | Carry your elegance.',
  '/products': 'Shop the collection | Zeccora',
  '/about': 'Our story | Zeccora',
  '/offers': 'Current offers | Zeccora',
  '/contact': 'Contact | Zeccora',
  '/cart': 'Shopping cart | Zeccora',
  '/shipping': 'Shipping | Zeccora',
  '/returns': 'Returns | Zeccora',
  '/size-guide': 'Size guide | Zeccora',
  '/faqs': 'FAQs | Zeccora',
  '/coming-soon': '15% off coming soon | Zeccora',
  '/privacy': 'Privacy policy | Zeccora',
  '/terms': 'Terms of service | Zeccora',
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.startsWith('/products/') && pathname !== '/products') return
    document.title = PAGE_TITLES[pathname] || 'Zeccora'
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DocumentTitle />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="min-h-screen bg-[#f7f2ec] text-[#1a120c]">
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from './components/pages/Products'
import Offers from './components/pages/Offers'
import Contact from './components/pages/Contact'
import Cart from './components/pages/Cart'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#1b1b1b] text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Herohome from '../home/Herohome'
import BagCategories from '../home/BagCategories'
import SignatureCollection from '../home/SignatureCollection'
import Experience from '../home/Experience'
import WhyChooseUs from '../home/WhyChooseUs'
import HappyCustomers from '../home/HappyCustomers'
import Quality from '../home/Quality'

const tickerItems = [
  '50% Off live now',
  '30% & 20% Off also available',
  'Johar Town, Lahore',
  'Cash on delivery across Pakistan',
]

const Home = () => {
  return (
    <div>
      <div className="flex h-8 items-center overflow-hidden bg-[#1a120c] text-[10px] font-medium uppercase tracking-[0.16em] text-[#E8C27A] sm:h-9 sm:text-[11px] sm:tracking-[0.2em]">
        <div className="home-marquee flex shrink-0 items-center">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-4 px-4">
              <span className="whitespace-nowrap">{item}</span>
              <span className="h-1 w-1 rotate-45 bg-[#E8C27A]/80" />
            </span>
          ))}
        </div>
      </div>
      <Herohome/>
      <BagCategories/>
      <SignatureCollection/>
      <HappyCustomers/>
      <WhyChooseUs/>
      <Experience/>
      <Quality/>
    </div>
  )
}

export default Home

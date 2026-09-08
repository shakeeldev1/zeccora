import React from 'react'
import Herohome from '../home/Herohome'
import BagCategories from '../home/BagCategories'
import SignatureCollection from '../home/SignatureCollection'
import Experience from '../home/Experience'
import WhyChooseUs from '../home/WhyChooseUs'
import Quality from '../home/Quality'

const Home = () => {
  return (
    <div>
      <Herohome/> 
      <BagCategories/>
      <SignatureCollection/>
      <Experience/>
      <WhyChooseUs/>
      <Quality/>
    </div>
  )
}

export default Home

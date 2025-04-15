import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import ProductPhotos from '../components/ProductPhotos'

const Home = () => {
  return (
    <div>
      <Hero />
      
      <LatestCollection/>
      <ProductPhotos />
      <BestSeller/>
    </div>
  )
}

export default Home

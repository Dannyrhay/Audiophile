import React from 'react'
import Hero from '../Components/Hero'
import Products from '../Components/Products'
import ZX9Speaker from '../Components/ZX9Speaker'
import ZX7Speaker from '../Components/ZX7Speaker'
import YX1Earphones from '../Components/YX1Earphones'
import BestAudioGear from '../Components/BestAudioGear'

const Landing = () => {
  return (
    <div>
        <Hero/>
        <Products/>
        <ZX9Speaker/>     
        <ZX7Speaker/>
        <YX1Earphones/>
        <BestAudioGear/>
    
    </div>
  )
}

export default Landing
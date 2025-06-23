import React from 'react'
import ProductCategories from '../Components/Products'
import EarphoneDetailPage from '../Components/Earphones/EarphoneDetailPage'
import BestAudioGear from '../Components/BestAudioGear'
import EarphoneGallery from '../Components/Earphones/EarphoneGallery'
import EarphoneLike from '../Components/Earphones/EarphoneLike'

const EarphonesDetail = () => {
  return (
    <div>
        
        <EarphoneDetailPage/>
        <EarphoneGallery/>
        <EarphoneLike/>
        <ProductCategories/>
        <BestAudioGear/>
        

    </div>
  )
}

export default EarphonesDetail
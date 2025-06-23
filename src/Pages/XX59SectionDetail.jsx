import React from 'react'
import XX59Gallery from '../Components/HeadphoneDetail/XX59Gallery'
import XX59Like from '../Components/HeadphoneDetail/XX59Like'
import XX59DetailedPage from '../Components/HeadphoneDetail/XX59DetailedPage'
import ProductCategories from '../Components/Products'
import BestAudioGear from '../Components/BestAudioGear'

const XX59SectionDetail = () => {
  return (
    <div>
        <XX59DetailedPage/>
        <XX59Gallery/>
        <XX59Like/>
        <ProductCategories/>
        <BestAudioGear/>
    </div>
  )
}

export default XX59SectionDetail
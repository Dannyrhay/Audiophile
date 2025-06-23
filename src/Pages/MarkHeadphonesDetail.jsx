import React from "react";
import MarkHeadphonesDetailPage from "../Components/HeadphoneDetail/MarkHeadphonesDetailPage";
import ProductCategories from "../Components/Products";
import MarkLike from "../Components/HeadphoneDetail/MarkLike";
import BestAudioGear from "../Components/BestAudioGear";
import MarkGallery from "../Components/HeadphoneDetail/MarkGallery";



const MarkHeadphonesDetail = () => {
  return (
    <div>
    
      <MarkHeadphonesDetailPage/>
      <MarkGallery/>
      <MarkLike/>
      <ProductCategories/>
      <BestAudioGear/>
     
    </div>
  );
};

export default MarkHeadphonesDetail;

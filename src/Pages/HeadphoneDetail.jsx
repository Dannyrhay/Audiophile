import React from "react";
import HeadphoneDetailPage from "../Components/HeadphoneDetail/HeadphoneDetailPage";
import ProductGallery from "../Components/HeadphoneDetail/ProductGallery";
import Like from "../Components/HeadphoneDetail/Like";
import ProductCategories from "../Components/Products";
import BestAudioGear from "../Components/BestAudioGear";

const HeadphoneDetail = () => {
  return (
    <div>
      <HeadphoneDetailPage />
      <ProductGallery />
      <Like />
      <ProductCategories />
      <BestAudioGear />
    </div>
  );
};

export default HeadphoneDetail;

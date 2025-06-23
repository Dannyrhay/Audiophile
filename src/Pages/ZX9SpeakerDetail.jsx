import React from "react";
import ZX9SpeakerDetailPage from "../Components/Speaker/ZX9SpeakerDetailPage";
import ZX9Like from "../Components/Speaker/ZX9Like";
import ZX7Gallery from "../Components/Speaker/ZX7Gallery";
import ProductCategories from "../Components/Products";
import BestAudioGear from "../Components/BestAudioGear";

const ZX9SpeakerDetail = () => {
  return (
    <div>
      <ZX9SpeakerDetailPage />
      <ZX7Gallery />
      <ZX9Like />
      <ProductCategories />
      <BestAudioGear />
    </div>
  );
};

export default ZX9SpeakerDetail;

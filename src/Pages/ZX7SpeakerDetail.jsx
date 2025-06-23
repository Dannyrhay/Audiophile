import React from "react";


import ProductCategories from "../Components/Products";
import BestAudioGear from "../Components/BestAudioGear";
import ZX7Gallery from "../Components/Speaker/ZX7Gallery";
import ZX7SpeakerDetailPage from "../Components/Speaker/ZX7SpeakerDetailPage";
import ZX7Like from "../Components/Speaker/ZX7Like";

const ZX7SpeakerDetail = () => {
  return (
    <div>
      <ZX7SpeakerDetailPage/>
      <ZX7Gallery/>
      <ZX7Like/>
      <ProductCategories />
      <BestAudioGear />
    </div>
  );
};

export default ZX7SpeakerDetail;

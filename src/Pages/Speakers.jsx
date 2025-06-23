import React from "react";
import ZX9SpeakerSection from "../Components/Speakers/ZX9SpeakerSection";

import ZX7SpeakerSection from "../Components/Speakers/ZX7SpeakerSection";
import ProductCategories from "../Components/Products";
import BestAudioGear from "../Components/BestAudioGear";

const Speakers = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="text-center py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
            SPEAKERS
          </h1>
        </div>
      </div>
      <ZX9SpeakerSection />
      <ZX7SpeakerSection />
      <ProductCategories/>
      <BestAudioGear/>
    </div>
  );
};

export default Speakers;

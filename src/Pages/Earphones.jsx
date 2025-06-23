import React from "react";
import ProductCategories from "../Components/Products";
import BestAudioGear from "../Components/BestAudioGear";
import WirelessEarphones from "../Components/Earphones/WirelessEarphones";

const Earphones = () => {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="text-center py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
            EARPHONES
          </h1>
        </div>
      </div>
    <WirelessEarphones/>
      <ProductCategories />
      <BestAudioGear />
    </div>
  );
};

export default Earphones;

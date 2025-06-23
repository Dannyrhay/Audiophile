import React from "react";
import ProductSection from "../Components/Headphones/Productsection";
import Mark1Section from "../Components/Headphones/Mark1Section";
import XX59Section from "../Components/Headphones/XX59Section";
import ProductCategories from "../Components/Products";
import BestAudioGear from "../Components/BestAudioGear";

const Headphones = () => {
  return (
    <div className="bg-black text-white">
      <div className="text-center py-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
          HEADPHONES
        </h1>
      </div>
      <ProductSection />
      <Mark1Section />
      <XX59Section/>
      <ProductCategories/>
      <BestAudioGear/>
    </div>
  );
};

export default Headphones;

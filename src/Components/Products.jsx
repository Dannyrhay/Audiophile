import React from "react";
import headPhones from '../assets/images/Headphones.png';
import speaKer from '../assets/images/Speaker.png';
import earPhones from '../assets/images/Earphones.png';
import { Link } from "react-router-dom";

export default function ProductCategories() {
  const categories = [
    {
      id: "headphones",
      title: "HEADPHONES",
      image: headPhones,
      to:'/headphones'
    },
    {
      id: "speakers",
      title: "SPEAKERS",
      image: speaKer,
      to:'/speakers'
    },
    {
      id: "earphones",
      title: "EARPHONES",
      image: earPhones,
      to:'/earphones'
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 pt-10">
          {categories.map((category) => (
            <Link 
              to={category.to}
              key={category.id}
              className="block group rounded-lg text-center hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-visible bg-[#F1F1F1] w-full max-w-sm mx-auto px-4 py-6"
            >
              {/* Product Image */}
              <div className="relative flex justify-center items-center mb-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg -mt-12"
                />
              </div>

              {/* Product Title */}
              <h3 className="text-base font-bold text-black tracking-wide mb-4">
                {category.title}
              </h3>

              {/* Shop Link */}
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm font-bold text-gray-600 hover:text-[#D87D4A] transition-colors">
                  SHOP
                </span>
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M1.322 1l5 5-5 5" 
                    stroke="#D87D4A" 
                    strokeWidth="2" 
                    fill="none" 
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

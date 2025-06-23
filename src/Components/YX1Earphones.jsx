import React from 'react';
import earphonesyx1 from '../assets/images/earphonesyx1.jpg'; 
import { Link } from 'react-router';

export default function YX1Earphones() {
  return (
    <section className="px-6 md:px-8 lg:px-12 xl:px-24 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Earphones Image */}
          <div className="relative rounded-lg overflow-hidden bg-gray-100 h-[300px] lg:h-[320px]">
            <img
              src={earphonesyx1}
              alt="YX1 Earphones"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.9) contrast(1.1)' }}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center bg-gray-100 rounded-lg px-8 md:px-12 lg:px-16 py-12 lg:py-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-8 tracking-wide">
              YX1 EARPHONES
            </h2>
            <Link to='/earphoneDetail' className="border border-black bg-transparent text-black hover:bg-black hover:text-white px-6 py-2.5 font-medium tracking-wide transition-all duration-300 uppercase text-sm w-fit">
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
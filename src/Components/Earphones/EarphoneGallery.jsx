import React from 'react';
import ear1 from '../../assets/images/ear1.png';
import ear2 from '../../assets/images/ear2.png';
import ear3 from '../../assets/images/ear3.png';

export default function EarphoneGallery() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 mb-20">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[500px]">
        
        {/* Left Column - Two stacked images */}
        <div className="flex flex-col gap-4">
          
          {/* Top Left Image - Person with headphones */}
          <div className="bg-gray-100 rounded-xl overflow-hidden flex-1">
            <img 
              src={ear1}
              alt="earphones"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
          {/* Bottom Left Image - Headphones on desk */}
          <div className="bg-gray-100 rounded-xl overflow-hidden flex-1">
            <img 
              src={ear2}
              alt="earphones"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
        </div>
        
        {/* Right Column - Large single image taking full height */}
        <div className="bg-black rounded-xl overflow-hidden">
          <img 
            src={ear3}
            alt="earphones"
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        
      </div>
    </div>
  );
}
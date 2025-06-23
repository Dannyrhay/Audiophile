import React from 'react';
import Bitmap from '../../assets/images/Bitmap.png';
import Bitmap2 from '../../assets/images/Bitmap2.png';
import Bitmap1 from '../../assets/images/Bitmap1.png';

export default function ProductGallery() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 mb-20">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[500px]">
        
        {/* Left Column - Two stacked images */}
        <div className="flex flex-col gap-4">
          
          {/* Top Left Image - Person with headphones */}
          <div className="bg-gray-100 rounded-xl overflow-hidden flex-1">
            <img 
              src={Bitmap}
              alt="Person wearing headphones"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
          {/* Bottom Left Image - Headphones on desk */}
          <div className="bg-gray-100 rounded-xl overflow-hidden flex-1">
            <img 
              src={Bitmap1}
              alt="Headphones on desk setup"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
        </div>
        
        {/* Right Column - Large single image taking full height */}
        <div className="bg-black rounded-xl overflow-hidden">
          <img 
            src={Bitmap2}
            alt="Close-up view of headphones"
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        
      </div>
    </div>
  );
}
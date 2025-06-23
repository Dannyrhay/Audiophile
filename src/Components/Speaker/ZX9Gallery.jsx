import React from 'react';
import speaker1 from '../../assets/images/speaker1.png';
import speaker2 from '../../assets/images/speaker2.png';
import speaker3 from '../../assets/images/speaker3.png';

export default function ZX9Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 mb-20">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[500px]">
        
        {/* Left Column - Two stacked images */}
        <div className="flex flex-col gap-4">
          
          {/* Top Left Image - Person with headphones */}
          <div className="bg-gray-100 rounded-xl overflow-hidden flex-1">
            <img 
              src={speaker1}
              alt="Person wearing headphones"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
          {/* Bottom Left Image - Headphones on desk */}
          <div className="bg-gray-100 rounded-xl overflow-hidden flex-1">
            <img 
              src={speaker2}
              alt="Headphones on desk setup"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
        </div>
        
        {/* Right Column - Large single image taking full height */}
        <div className="bg-black rounded-xl overflow-hidden">
          <img 
            src={speaker3}
            alt="Close-up view of headphones"
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        
      </div>
    </div>
  );
}
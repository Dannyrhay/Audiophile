import React from 'react';
import audio1 from '../../assets/images/Audio1.png';
import audio2 from '../../assets/images/audio2.png';
import audio3 from '../../assets/images/audio3.png';

export default function MarkGallery() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 mb-20">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[500px]">
        
        {/* Left Column - Two stacked images */}
        <div className="flex flex-col gap-4">
          
          {/* Top Left Image - Person with headphones */}
          <div className="bg-gray-100 rounded-xl overflow-hidden flex-1">
            <img 
              src={audio1}
              alt="Person wearing headphones"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
          {/* Bottom Left Image - Headphones on desk */}
          <div className="bg-gray-100 rounded-xl overflow-hidden flex-1">
            <img 
              src={audio2}
              alt="Headphones on desk setup"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          
        </div>
        
        {/* Right Column - Large single image taking full height */}
        <div className="bg-black rounded-xl overflow-hidden">
          <img 
            src={audio3}
            alt="Close-up view of headphones"
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        
      </div>
    </div>
  );
}
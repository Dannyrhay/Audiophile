
import React from 'react';
import speakerTable from '../assets/images/speaker_nobg.png';
import { Link } from 'react-router';

export default function ZX7Speaker() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative rounded-lg overflow-hidden h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] xl:h-[300px] flex items-center"
          style={{
            backgroundColor: '#E0E0E0',
            backgroundImage: `url(${speakerTable})`,
            backgroundSize: window.innerWidth < 768 ? 'cover' : 'contain',
            backgroundPosition: window.innerWidth < 768 ? 'center' : 'center right',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Mobile overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
          
          {/* Content positioned on the left */}
          <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-wide leading-tight">
              ZX7 SPEAKER
            </h2>
            <Link to='/ZX7SpeakerDetail' className="border border-black bg-transparent text-black hover:bg-black hover:text-white px-4 sm:px-6 py-2 sm:py-2.5 font-medium tracking-wide transition-all duration-300 uppercase text-xs sm:text-sm">
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import bestGear from '../assets/images/bestgear.jpg'; 

export default function BestAudioGear() {
  return (
    <section className="bg-white px-6 md:px-8 lg:px-12 xl:px-24 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
              BRINGING YOU THE{' '}
              <span className="text-[#D87D4A]">BEST</span>{' '}
              AUDIO GEAR
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
              earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
              rooms available for you to browse and experience a wide range of our products. Stop by our store 
              to meet some of the fantastic people who make Audiophile the best place to buy your portable 
              audio equipment.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={bestGear}
                alt="Person enjoying audio gear"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.1)' }}
              />
              {/* Hexagonal Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
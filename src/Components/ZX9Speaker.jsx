import React from 'react';
import speaKer from '../assets/images/Speaker.png';
import { Link } from 'react-router';

export default function ZX9Speaker() {
  return (
    <section className="px-6 md:px-8 lg:px-12 xl:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-lg overflow-hidden flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between px-6 py-16 lg:py-20"
          style={{
            background: 'linear-gradient(135deg, #D87D4A 0%, #CD6A35 100%)',
            minHeight: '560px',
          }}
        >
          {/* Circles Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[600px] h-[600px] rounded-full border border-white/20 top-[-100px] left-[-100px]"></div>
            <div className="absolute w-[800px] h-[800px] rounded-full border border-white/10 top-[-200px] left-[-200px]"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5 top-[-50px] left-[-50px]"></div>
          </div>

          {/* Speaker Image */}
          <div className="relative z-10 w-full flex justify-center items-center lg:w-1/2 mb-10 lg:mb-0">
            <img
              src={speaKer}
              alt="ZX9 Speaker"
              className="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[350px] object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ZX9<br />
              SPEAKER
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-md mx-auto lg:mx-0 opacity-90">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/ZX9SpeakerDetail"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 font-bold tracking-wider transition-colors duration-300 uppercase"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

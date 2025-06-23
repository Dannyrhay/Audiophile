import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white">
      {/* Orange accent line */}
      <div className="h-1 bg-[#D87D4A] w-24 mx-6 md:mx-8 lg:mx-12 xl:mx-24"></div>
      
      <div className="px-6 md:px-8 lg:px-12 xl:px-24 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12">
            {/* Logo */}
            <div className="mb-8 lg:mb-0">
              <h1 className="text-2xl md:text-3xl font-bold">audiophile</h1>
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              <Link to="/" className="text-white  hover:text-[#D87D4A] transition-colors duration-300 font-medium tracking-wide">
                HOME
              </Link>
              <Link to="/headphones" className="text-white  hover:text-[#D87D4A] transition-colors duration-300 font-medium tracking-wide">
                HEADPHONES
              </Link>
              <Link to="/speakers" className="text-white  hover:text-[#D87D4A] transition-colors duration-300 font-medium tracking-wide">
                SPEAKERS
              </Link>
              <Link to="/earphones" className="text-white  hover:text-[#D87D4A] transition-colors duration-300 font-medium tracking-wide">
                EARPHONES
              </Link>
            </nav>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
            {/* Description */}
            <div>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team 
                of music lovers and sound specialists who are devoted to helping you get the 
                most out of personal audio. Come and visit our demo facility - we're open 7 
                days a week.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start lg:justify-end items-end">
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="text-white  hover:text-[#D87D4A] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-white  hover:text-[#D87D4A] transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-white  hover:text-[#D87D4A] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
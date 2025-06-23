import { Link } from 'react-router';
import heRo from '../assets/images/headphonenoBg.png'

export default function Hero() {
  return (
    <section className="bg-[#000000] text-white">
      <div className="px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center min-h-[600px] lg:min-h-[700px]">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 py-12 lg:py-0">
            <p className="text-[#D87D4A] tracking-[10px] text-sm font-normal mb-4 uppercase">
              NEW PRODUCT
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              XX99 MARK II<br />
              HEADPHONES
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link to='/headphoneDetail' className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-8 py-4 font-bold tracking-wider transition-colors duration-300 uppercase">
              SEE PRODUCT
            </Link>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end py-8 lg:py-0">
            <div className="relative">
              {/* Headphone image container - Made significantly larger */}
              <div className="relative z-10 w-full h-96 md:w-full md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] flex items-center justify-center">
                {/* Replace this img src with your headphone image */}
                <img 
                  src={heRo} 
                  alt="XX99 Mark II Headphones" 
                  className="w-full h-full max-w-[500px] max-h-[500px] md:max-w-[600px] md:max-h-[600px] lg:max-w-[700px] lg:max-h-[700px] object-contain filter drop-shadow-2xl"
                  onError={(e) => {
                    // Fallback placeholder if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Placeholder fallback - Also made larger */}
                <div className="w-full h-full max-w-[500px] max-h-[500px] md:max-w-[600px] md:max-h-[600px] lg:max-w-[700px] lg:max-h-[700px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-full items-center justify-center text-gray-400 text-center p-8 hidden">
                  <div>
                    <div className="text-6xl mb-4">🎧</div>
                    <p className="text-sm">Replace with your headphone image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
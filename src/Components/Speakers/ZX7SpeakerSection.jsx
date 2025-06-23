import { Link } from 'react-router';
import ZX7speaker from '../../assets/images/ZX7speaker.png';

export default function ZX7SpeakerSection() {
  return (
    <div className="bg-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Product Details */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            {/* Product Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ZX7<br />
              SPEAKER
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
            </p>

            {/* CTA Button */}
            <Link to='/ZX7SpeakerDetail' className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 px-8 tracking-wider text-sm transition-colors duration-300 uppercase">
              See Product
            </Link>
          </div>

          {/* Product Image */}
          <div className="order-2 lg:order-2">
            <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center overflow-hidden p-8">
              <img 
                src={ZX7speaker}
                alt="ZX7 Speaker"
                className="w-full h-full object-contain max-w-[280px] max-h-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
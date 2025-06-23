import { Link } from 'react-router';
import earPhones from '../../assets/images/Earphones.png';

export default function YX1EarphonesSection() {
  return (
    <div className="bg-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center overflow-hidden p-8">
              <img 
                src={earPhones}
                alt="YX1 Wireless Earphones"
                className="w-full h-full object-contain max-w-[280px] max-h-[280px]"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* New Product Badge */}
            <div className="mb-4">
              <span className="text-[#D87D4A] text-sm font-normal tracking-[0.5em] uppercase">
                New Product
              </span>
            </div>

            {/* Product Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              YX1 WIRELESS<br />
              EARPHONES
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
            </p>

            {/* CTA Button */}
            <Link to='/earphoneDetail' className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 px-8 tracking-wider text-sm transition-colors duration-300 uppercase">
              See Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
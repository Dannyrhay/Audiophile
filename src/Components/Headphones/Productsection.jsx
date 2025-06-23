import { Link } from 'react-router';
import headphoneImg from '../../assets/images/HeadphoneImg.png';

export default function ProductSection() {
  return (
    <div className="bg-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center overflow-hidden">
              <img 
                src={headphoneImg} 
                alt="XX99 Mark II Headphones"
                className="w-full h-full object-contain max-w-[320px] max-h-[320px]"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* New Product Label */}
            <p className="text-sm text-[#D87D4A] tracking-widest font-light mb-4 uppercase">
              New Product
            </p>

            {/* Product Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              XX99 MARK II<br />
              HEADPHONES
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>

            {/* CTA Button */}
            <Link to='/headphoneDetail'className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 px-8 tracking-wider text-sm transition-colors duration-300 uppercase">
              See Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
// Import your headphones image
import { Link } from 'react-router';
import headPhone1 from '../../assets/images/Headphone1.png';

export default function Mark1Section() {
  return (
    <div className="bg-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Details */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            {/* Product Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              XX99 MARK I<br />
              HEADPHONES
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
            </p>

            {/* CTA Button */}
            <Link to='/markheadphoneDetail' className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 px-8 tracking-wider text-sm transition-colors duration-300 uppercase">
              See Product
            </Link>
          </div>

          {/* Product Image */}
          <div className="order-2 lg:order-2">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center overflow-hidden p-8">
              <img 
                src={headPhone1} 
                alt="XX99 Mark I Headphones"
                className="w-full h-full object-contain max-w-[320px] max-h-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
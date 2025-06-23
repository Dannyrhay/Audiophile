import { Link } from 'react-router';
import whiteHeadphones from '../../assets/images/whiteHeadphones.png';


export default function XX59Section() {
  return (
    <div className="bg-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center overflow-hidden">
              {/* Replace with your actual image */}
              <img 
                src={whiteHeadphones}
                alt="XX59 Headphones"
                className="w-full h-full object-contain max-w-[320px] max-h-[320px]"
              />
             
            </div>
          </div>

          {/* Product Details */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Product Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              XX59<br />
              HEADPHONES
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0 ">
              Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
            </p>

            {/* CTA Button */}
            <Link to='/XX59DetailedPage' className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 px-8 tracking-wider text-sm transition-colors duration-300 uppercase">
              See Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
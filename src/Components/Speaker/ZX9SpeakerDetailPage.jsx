import React, { useState } from "react";
import { Link } from "react-router";
import ZX7speakerImg from "../../assets/images/Speaker.png";
import { useCart } from "../../contexts/CartContext";

export default function ZX9SpeakerDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, setIsCartOpen } = useCart();

  const handleQuantityChange = (increment) => {
    if (increment && quantity < 99) {
      setQuantity(quantity + 1);
    } else if (!increment && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const product = {
      id: "zx9",
      name: "ZX9 SPEAKER",
      price: 4500,
      image: ZX7speakerImg,
      slug: "zx9"
    };
    
    addToCart(product, quantity);
    setIsCartOpen(true);
    // Reset quantity after adding to cart
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Go Back Button */}
        <Link
          to="/speakers"
          className="text-gray-500 hover:text-gray-700 mb-12 text-sm font-medium transition-colors"
        >
          Go Back
        </Link>

        {/* Product Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg p-16 flex items-center justify-center">
            <div className="w-80 h-80 flex items-center justify-center">
              <img
                src={ZX7speakerImg}
                alt="ZX9 Speaker"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* New Product Badge */}
            <div className="text-[#D87D4A] text-sm font-medium tracking-[0.6em] uppercase">
              New Product
            </div>

            {/* Product Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              ZX9
              <br />
              SPEAKER
            </h1>

            {/* Product Description */}
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity, creating new possibilities for more pleasing and practical audio setups.
            </p>

            {/* Price */}
            <div className="text-2xl font-bold text-gray-900 tracking-wide">
              $ 4,500
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4">
              {/* Quantity Selector */}
              <div className="flex items-center bg-gray-100">
                <button
                  onClick={() => handleQuantityChange(false)}
                  className="px-4 py-3 text-gray-500 hover:text-[#FBAF85] font-bold transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-3 font-bold text-gray-900 min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(true)}
                  className="px-4 py-3 text-gray-500 hover:text-[#FBAF85] font-bold transition-colors"
                >
                  +
                </button>
              </div>
              {/* Add to Cart Button */}
              <button 
                onClick={handleAddToCart}
                className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white px-8 py-3 font-bold tracking-widest uppercase transition-colors duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </section>

        {/* Features and In The Box Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-wide">
              FEATURES
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p>
                Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and XLR inputs, allowing you to connect up to five different sources. The built-in Bluetooth 5.0 technology ensures seamless wireless connectivity with your devices.
              </p>
              <p>
                The ZX9 features high-end components including a 6.5" aluminum dome tweeter and a proprietary midrange driver. The specially designed speaker suspension reduces distortion for enhanced clarity. The multi-way ported enclosure is crafted from MDF and features a high-gloss finish that complements any room's decor.
              </p>
            </div>
          </div>

          {/* In The Box */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-wide">
              IN THE BOX
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-[#D87D4A] font-bold mr-8 min-w-[30px]">
                  2x
                </span>
                <span className="text-gray-500">Speaker Unit</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D87D4A] font-bold mr-8 min-w-[30px]">
                  2x
                </span>
                <span className="text-gray-500">Speaker Cloth Panel</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D87D4A] font-bold mr-8 min-w-[30px]">
                  1x
                </span>
                <span className="text-gray-500">User Manual</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D87D4A] font-bold mr-8 min-w-[30px]">
                  1x
                </span>
                <span className="text-gray-500">3.5mm 10m Audio Cable</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D87D4A] font-bold mr-8 min-w-[30px]">
                  1x
                </span>
                <span className="text-gray-500">10m Optical Cable</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import React from 'react';
import headPhone from '../../assets/images/HeadphoneImg.png';
import headPhone1 from '../../assets/images/Headphone1.png';
import speaKer from '../../assets/images/Speaker.png';

export default function XX59Like() {
  const products = [
    {
      id: 1,
      name: "XX99 MARK II",
      image: headPhone,
      alt: "XX99 Mark I Headphones"
    },
    {
      id: 2,
      name: "XX99 MARK I",
      image: headPhone1,
      alt: "XX59 Headphones"
    },
    {
      id: 3,
      name: "ZX9 SPEAKER",
      image: speaKer,
      alt: "ZX9 Speaker"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 tracking-wider">
        YOU MAY ALSO LIKE
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {products.map((product, index) => {
          // Define specific dimensions for each image
          const imageDimensions = [
            { width: '148.31px', height: '193px' }, // First image
            { width: '190.81px', height: '199px' }, // Second image
            { width: '143.12px', height: '172px' }  // Third image
          ];
          
          return (
            <div key={product.id} className="text-center">
              
              {/* Product Image */}
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-8 h-80 flex items-center justify-center p-12">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="object-contain"
                  style={{
                    width: imageDimensions[index].width,
                    height: imageDimensions[index].height
                  }}
                />
              </div>

              {/* Product Name */}
              <h3 className="text-lg md:text-xl font-bold mb-8 tracking-wider">
                {product.name}
              </h3>

              {/* See Product Button */}
              <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 px-8 tracking-wider transition-colors duration-200">
                SEE PRODUCT
              </button>

            </div>
          );
        })}
      </div>
    </section>
  );
}
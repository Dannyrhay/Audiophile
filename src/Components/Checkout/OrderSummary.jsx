import React from 'react';

const OrderSummary = ({ items, subtotal, shipping, vat, grandTotal }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-bold text-black mb-6">SUMMARY</h2>
      
      {/* Cart Items */}
      <div className="space-y-6 mb-8">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-4">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-300 items-center justify-center text-gray-500 text-xs">
                    No Image
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-black text-sm">{item.name}</h3>
                  <p className="text-gray-500 text-sm font-medium">${item.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="text-gray-500 text-sm font-bold">
                x{item.quantity}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">Your cart is empty</p>
        )}
      </div>

      {/* Order Totals */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-sm">Total</span>
          <span className="font-bold text-black">${subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-sm">Shipping</span>
          <span className="font-bold text-black">${shipping.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 uppercase text-sm">VAT (Included)</span>
          <span className="font-bold text-black">${vat.toLocaleString()}</span>
        </div>
      </div>

      {/* Grand Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-500 uppercase text-sm">Grand Total</span>
        <span className="text-[#D87D4A] font-bold text-lg">${grandTotal.toLocaleString()}</span>
      </div>

      {/* Continue & Pay Button */}
      <button
        type="submit"
        form="checkout-form"
        className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 px-6 transition-colors duration-200 text-sm tracking-wider"
        disabled={items.length === 0}
        onClick={(e) => {
          // If the form is not valid, prevent default to show validation errors
          const form = document.getElementById('checkout-form');
          if (form && !form.checkValidity()) {
            e.preventDefault();
            form.reportValidity();
          }
        }}
      >
        CONTINUE & PAY
      </button>
    </div>
  );
};

export default OrderSummary;

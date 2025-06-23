import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const CheckoutConfirmation = ({ orderDetails, onClose }) => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    clearCart();
    onClose();
    navigate('/');
  };

  if (!orderDetails) return null;

  const grandTotal = orderDetails.grandTotal || 0;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
      {/* Semi-transparent gray overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(150, 150, 150, 0.5)' }}
        onClick={onClose}
      />

      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl relative z-10">
        <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6 mx-auto">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl font-bold mb-2 text-left">THANK YOU</h2>
        <h3 className="text-3xl font-bold mb-6 text-left">FOR YOUR ORDER</h3>
        <p className="text-gray-500 mb-8 text-left">You will receive an email confirmation shortly.</p>

        <div className="grid grid-cols-2 gap-0 rounded-lg overflow-hidden mb-8">
          <div className="bg-gray-100 p-6">
            {cartItems.length > 0 && (
              <>
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-white rounded-full mr-4 flex items-center justify-center shadow-sm">
                    <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM9 12a3 3 0 0 0 6 0V4a3 3 0 0 0-6 0v8zm12 0a1 1 0 0 0-2 0 7 7 0 0 1-14 0 1 1 0 0 0-2 0 9 9 0 0 0 8 8.94V23a1 1 0 0 0 2 0v-2.06A9 9 0 0 0 21 12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg text-gray-900">{cartItems[0].name}</p>
                        <p className="text-gray-500 text-base">${cartItems[0].price.toLocaleString()}</p>
                      </div>
                      <span className="text-gray-500 text-lg">x{cartItems[0].quantity}</span>
                    </div>
                  </div>
                </div>

                {cartItems.length > 1 && (
                  <div className="text-left">
                    <p className="text-gray-500">
                      and {cartItems.length - 1} other item{cartItems.length > 2 ? 's' : ''}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="bg-black text-white p-6 flex flex-col justify-center">
            <span className="text-gray-400 uppercase text-sm mb-2">GRAND TOTAL</span>
            <span className="font-bold text-2xl">${grandTotal.toLocaleString()}</span>
          </div>
        </div>

        <button
          onClick={handleBackToHome}
          className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-4 px-6 rounded-lg transition-colors uppercase tracking-wide"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default CheckoutConfirmation;

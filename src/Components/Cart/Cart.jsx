import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    getCartTotal,
    clearCart 
  } = useCart();

  const handleCheckout = () => {
    console.log('Proceed to checkout');
    
    // Check if cart is empty
    if (cartItems.length === 0) {
      console.log('Cart is empty, not navigating');
      return;
    }
    
    // Close the cart modal
    setIsCartOpen(false);
    
    // Navigate to checkout page
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Semi-transparent overlay - enhanced */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart modal */}
      <div className="absolute top-24 right-4 md:right-8 w-11/12 max-w-sm bg-white rounded-lg p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-bold tracking-wider">CART ({cartItems.length})</h2>
          {cartItems.length > 0 && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                clearCart();
              }}
              className="text-gray-500 hover:text-[#D87D4A] text-sm font-medium transition-colors"
            >
              Remove all
            </button>
          )}
        </div>
        
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-6 mb-8 max-h-96 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {item.name.split(' ')[0]} <span className="text-gray-500">x{item.quantity}</span>
                      </h3>
                      <p className="text-gray-500 text-sm">${item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQuantity(item.id, item.quantity - 1);
                      }}
                      className="px-3 py-1 text-gray-500 hover:text-[#D87D4A] font-bold"
                    >
                      -
                    </button>
                    <span className="mx-2 w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        updateQuantity(item.id, item.quantity + 1);
                      }}
                      className="px-3 py-1 text-gray-500 hover:text-[#D87D4A] font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Total</span>
                <span className="text-lg font-bold text-gray-900">${getCartTotal().toLocaleString()}</span>
              </div>
              <button 
                className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-3 px-6 font-bold rounded-md transition-colors duration-200 flex items-center justify-center"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                CHECKOUT
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
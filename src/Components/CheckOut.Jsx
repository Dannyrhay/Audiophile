import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CheckOut = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, clearCart } = useCart();
  
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({
      ...acc,
      [item.id]: item.quantity
    }), {})
  );

  const updateItemQuantity = (id, change) => {
    const newQuantity = Math.max(1, (quantities[id] || 0) + change);
    setQuantities(prev => ({
      ...prev,
      [id]: newQuantity
    }));
    updateQuantity(id, newQuantity);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * (quantities[item.id] || 0));
    }, 0);
  };

  const removeAll = () => {
    clearCart();
    setQuantities({});
  };

  const handleCheckout = () => {
    console.log('Checkout clicked, current cart:', cartItems);
    console.log('Cart items length:', cartItems.length);
    
    // Check if cart is empty
    if (cartItems.length === 0) {
      console.log('Cart is empty, not navigating');
      return;
    }
    
    console.log('Closing modal and navigating...');
    
    // Close the cart modal first
    if (onClose) {
      onClose();
    }
    
    // Navigate immediately without setTimeout to avoid timing issues
    console.log('Navigating to /checkout');
    navigate('/checkout');
  };

  if (!isOpen) return null;

  const total = calculateTotal();
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="fixed top-20 right-4 bg-white rounded-lg shadow-2xl w-96 p-6 z-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-black">CART ({cartItems.reduce((sum, item) => sum + (quantities[item.id] || 0), 0)})</h2>
        <button
          onClick={removeAll}
          className="text-gray-500 hover:text-gray-700 text-sm underline"
          disabled={isCartEmpty}
        >
          Remove all
        </button>
      </div>

      <div className="space-y-6 mb-8 max-h-96 overflow-y-auto">
        {isCartEmpty ? (
          <p className="text-gray-500 text-center py-4">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.alt || item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-200 items-center justify-center text-gray-400 text-xs">
                    No Image
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-100">
                <button 
                  onClick={() => updateItemQuantity(item.id, -1)}
                  className="px-3 py-1 text-gray-500 hover:text-orange-500"
                >
                  -
                </button>
                <span className="px-2">{quantities[item.id] || 0}</span>
                <button 
                  onClick={() => updateItemQuantity(item.id, 1)}
                  className="px-3 py-1 text-gray-500 hover:text-orange-500"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-500">TOTAL</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout}
          disabled={isCartEmpty}
          className={`w-full py-3 text-white font-bold text-sm tracking-wider uppercase transition-colors duration-200 ${
            isCartEmpty ? 'bg-gray-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
          }`}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CheckoutForm from '../Components/Checkout/CheckoutForm';
import OrderSummary from '../Components/Checkout/OrderSummary';
import CheckoutConfirmation from '../Components/Checkout/CheckoutConfirmation';
import { CheckCircle } from 'lucide-react';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const shippingFee = 50;
  const vatRate = 0.2;
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const vat = Math.floor(subtotal * vatRate);
  const grandTotal = subtotal + shippingFee + vat;

  const handleSubmit = async (formData) => {
    try {
      const orderData = {
        customer: formData,
        items: cartItems,
        subtotal,
        shipping: shippingFee,
        vat,
        grandTotal,
        orderNumber: `#${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
        orderDate: new Date().toISOString()
      };

      console.log('Order submitted:', orderData);
      setOrderDetails(orderData);
      setShowConfirmation(true);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const handleConfirmOrder = () => {
    // Clear the cart and close the modal
    clearCart();
    setShowConfirmation(false);
    // Optionally show a success message or navigate to a thank you page
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (cartItems.length === 0 && !showConfirmation) {
        navigate('/');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [cartItems, showConfirmation, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="text-gray-500 hover:text-orange-500 mb-10 inline-flex items-center"
        >
          Go Back
        </button>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-8">CHECKOUT</h1>
            <CheckoutForm onSubmit={handleSubmit} />
          </div>
          
          <div className="md:col-span-1">
            <OrderSummary 
              items={cartItems} 
              subtotal={subtotal}
              shipping={shippingFee}
              vat={vat}
              grandTotal={grandTotal}
            />
          </div>
        </div>
      </div>

      {/* Checkout Confirmation Modal */}
      {showConfirmation && orderDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">THANK YOU FOR YOUR ORDER</h2>
            <p className="text-gray-500 mb-6">You will receive an email confirmation shortly.</p>
            
            <div className="rounded-lg overflow-hidden mb-6">
              <div className="bg-gray-50 p-4">
                {cartItems.length > 0 && (
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded mr-4 overflow-hidden">
                        <img 
                          src={cartItems[0].image} 
                          alt={cartItems[0].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold">{cartItems[0].name}</p>
                        <p className="text-gray-500">${cartItems[0].price.toLocaleString()}</p>
                      </div>
                    </div>
                    <p className="text-gray-500">x{cartItems[0].quantity}</p>
                  </div>
                )}
                
                {cartItems.length > 1 && (
                  <div className="pt-3 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-500">
                      and {cartItems.length - 1} other item{cartItems.length > 2 ? 's' : ''}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-black text-white p-6">
                <div className="flex flex-col">
                  <span className="text-gray-400 uppercase text-sm mb-2">Grand Total</span>
                  <span className="font-bold text-lg">${grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleConfirmOrder}
              className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
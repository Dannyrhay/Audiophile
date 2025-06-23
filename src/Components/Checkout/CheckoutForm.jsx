import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 'eMoney',
    eMoneyNumber: '',
    eMoneyPIN: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['name', 'email', 'phone', 'address', 'zipCode', 'city', 'country'];
    
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    if (formData.paymentMethod === 'eMoney') {
      if (!formData.eMoneyNumber) newErrors.eMoneyNumber = 'Required';
      if (!formData.eMoneyPIN) newErrors.eMoneyPIN = 'Required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form 
      id="checkout-form" 
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      {/* Billing Details */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-[#D87D4A] uppercase tracking-wider mb-4">Billing Details</h2>
        
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]`}
              placeholder="Alexei Ward"
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]`}
              placeholder="alexei@mail.com"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>
        
        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]`}
            placeholder="+1 202-555-0136"
            required
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>
      
      {/* Shipping Info */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-[#D87D4A] uppercase tracking-wider mb-4">Shipping Info</h2>
        
        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-bold mb-2">Your Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]`}
            placeholder="1137 Williams Avenue"
            required
          />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
        </div>
        
        {/* ZIP Code and City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="zipCode" className="block text-sm font-bold mb-2">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]`}
              placeholder="10001"
              required
            />
            {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
          </div>
          
          <div>
            <label htmlFor="city" className="block text-sm font-bold mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]`}
              placeholder="New York"
              required
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>
        </div>
        
        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-bold mb-2">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]`}
            placeholder="United States"
            required
          />
          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
        </div>
      </div>
      
      {/* Payment Details */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-[#D87D4A] uppercase tracking-wider mb-4">Payment Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-sm font-bold">Payment Method</p>
          
          <div className="space-y-4">
            <label className={`flex items-center p-4 border ${formData.paymentMethod === 'eMoney' ? 'border-[#D87D4A] ring-2 ring-[#D87D4A]' : 'border-gray-300'} rounded-lg cursor-pointer`}>
              <input
                type="radio"
                name="paymentMethod"
                value="eMoney"
                checked={formData.paymentMethod === 'eMoney'}
                onChange={handleChange}
                className="h-5 w-5 text-[#D87D4A] focus:ring-[#D87D4A]"
              />
              <span className="ml-3 text-sm font-medium">e-Money</span>
            </label>
            
            <label className={`flex items-center p-4 border ${formData.paymentMethod === 'cash' ? 'border-[#D87D4A] ring-2 ring-[#D87D4A]' : 'border-gray-300'} rounded-lg cursor-pointer`}>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === 'cash'}
                onChange={handleChange}
                className="h-5 w-5 text-[#D87D4A] focus:ring-[#D87D4A]"
              />
              <span className="ml-3 text-sm font-medium">Cash on Delivery</span>
            </label>
          </div>
        </div>
        
        {formData.paymentMethod === 'eMoney' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="eMoneyNumber" className="block text-sm font-bold mb-2">e-Money Number</label>
              <input
                type="text"
                id="eMoneyNumber"
                name="eMoneyNumber"
                value={formData.eMoneyNumber}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.eMoneyNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]`}
                placeholder="238521993"
                required={formData.paymentMethod === 'eMoney'}
              />
              {errors.eMoneyNumber && <p className="text-red-500 text-xs mt-1">{errors.eMoneyNumber}</p>}
            </div>
            
            <div>
              <label htmlFor="eMoneyPIN" className="block text-sm font-bold mb-2">e-Money PIN</label>
              <input
                type="password"
                id="eMoneyPIN"
                name="eMoneyPIN"
                value={formData.eMoneyPIN}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.eMoneyPIN ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D87D4A]`}
                placeholder="6891"
                required={formData.paymentMethod === 'eMoney'}
              />
              {errors.eMoneyPIN && <p className="text-red-500 text-xs mt-1">{errors.eMoneyPIN}</p>}
            </div>
          </div>
        )}
      </div>
      
      {/* Hidden submit button for form submission from OrderSummary */}
      <button type="submit" className="hidden">Submit</button>
    </form>
  );
};

export default CheckoutForm;

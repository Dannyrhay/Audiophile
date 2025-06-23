import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import { useCart } from '../contexts/CartContext';
import Cart from '../Components/Cart/Cart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, isCartOpen, setIsCartOpen } = useCart();

  // Calculate total items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="bg-[#000000] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 border-b border-neutral-700">
          <div className="flex items-center justify-between h-24">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="text-white text-2xl font-bold tracking-wider">
              audiophile
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                HOME
              </Link>
              <Link to="/headphones" className="text-white hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                HEADPHONES
              </Link>
              <Link to="/speakers" className="text-white hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                SPEAKERS
              </Link>
              <Link to="/earphones" className="text-white hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                EARPHONES
              </Link>
            </div>

            {/* Cart icon */}
            <div 
              className="relative text-white cursor-pointer hover:text-[#D87D4A] transition-colors duration-300"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart size={23} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D87D4A] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-24 left-0 right-0 bg-white z-50 border-t">
              <div className="flex flex-col space-y-4 p-6">
                <Link to="/" className="text-black hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                  HOME
                </Link>
                <Link to="/headphones" className="text-black hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                  HEADPHONES
                </Link>
                <Link to="/speakers" className="text-black hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                  SPEAKERS
                </Link>
                <Link to="/earphones" className="text-black hover:text-[#D87D4A] transition-colors duration-300 font-bold tracking-wider text-sm">
                  EARPHONES
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Cart Dropdown */}
      <Cart />
    </>
  );
}
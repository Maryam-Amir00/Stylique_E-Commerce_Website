import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { HashLink as NavLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { FiShoppingCart, FiX, FiMenu } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { useWishlist } from '../context/WishlistContext';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const { cart } = useCart();
  const totalItems = Array.isArray(cart) ? cart.length : 0;
  const { wishlist } = useWishlist();
  const totalWishlistItems = wishlist.length;


  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/#shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const shopSection = document.getElementById('shop');
      const scrollY = window.scrollY;
      const shopTop = shopSection?.offsetTop || 0;

      if (location.pathname === '/') {
        if (scrollY + 100 >= shopTop) {
          setActiveSection('shop');
        } else {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const isActive = (itemPath, itemName) => {
    if (location.pathname === '/' && (itemName === 'Home' || itemName === 'Shop')) {
      return activeSection.toLowerCase() === itemName.toLowerCase();
    }

    if (itemPath === location.pathname) {
      return true;
    }

    return false;
  };

  const handleHomeClick = (e, item) => {
    if (item.name === 'Home' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname);
      }

      setActiveSection('home');
    }
  };

  return (
    <header className="bg-slate-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Stylique Logo" className="h-12 w-auto" />
            <span className="text-2xl font-serif italic tracking-wide">Stylique</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                smooth
                to={item.path}
                className={`hover:text-slate-400 transition duration-300 ${
                  isActive(item.path, item.name) ? 'font-bold ' : ''
                }`}
                onClick={(e) => handleHomeClick(e, item)}
              >
                {item.name}
              </NavLink>
            ))}
            <Link to="/cart" className={`relative ${location.pathname === '/cart' ? 'text-slate-300' : ''}`}>
              <FiShoppingCart
                size={22}
                className="cursor-pointer hover:text-slate-400 transition duration-300"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/wishlist" className={`relative ${location.pathname === '/wishlist' ? 'text-slate-300' : ''}`}>
                <FiHeart size={22} className="cursor-pointer hover:text-slate-400 transition duration-300" />
                {totalWishlistItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalWishlistItems}
                  </span>
                )}
              </Link>


          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-700 px-4 pt-2 pb-4 space-y-2 transition-all duration-300 ease-in-out">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              smooth
              to={item.path}
              className={`block text-white hover:text-slate-400 transition duration-300 ${
                isActive(item.path, item.name) ? 'font-bold underline' : ''
              }`}
              onClick={(e) => {
                handleHomeClick(e, item);
                setMenuOpen(false);
              }}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-600 flex  gap-6 relative">
            <Link to="/cart" className={`relative ${location.pathname === '/cart' ? 'text-slate-300' : ''}`}>
              <FiShoppingCart className="hover:text-slate-400" size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <Link to="/wishlist" className={`relative ${location.pathname === '/wishlist' ? 'text-slate-300' : ''}`}>
              <FiHeart size={22} className="cursor-pointer hover:text-slate-400 transition duration-300" />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalWishlistItems}
                </span>
              )}
            </Link>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;

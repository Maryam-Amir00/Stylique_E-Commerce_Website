import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FiShoppingCart, FiX, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ['Home', 'Shop', 'Categories', 'About', 'Contact'];

  return (
    <header className="bg-slate-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16">

          
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Stylique Logo" className="h-12 w-auto" />
            <span className="text-2xl font-serif italic tracking-wide">Stylique</span>
          </div>

          
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-slate-400 transition duration-300"
              >
                {item}
              </a>
            ))}
            <FiShoppingCart
              size={22}
              className="cursor-pointer hover:text-slate-400 transition duration-300"
            />
          </div>

          
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

      
      {menuOpen && (
        <div className="md:hidden bg-slate-700 px-4 pt-2 pb-4 space-y-2 transition-all duration-300 ease-in-out">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white hover:text-slate-400 transition duration-300"
            >
              {item}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-600 flex">
            <FiShoppingCart className="hover:text-slate-400" size={22} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

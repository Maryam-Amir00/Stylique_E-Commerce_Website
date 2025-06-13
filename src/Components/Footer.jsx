import React from 'react';
import { HashLink as NavLink } from "react-router-hash-link";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/#shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleHomeClick = (e) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };

  return (
    <footer className="bg-slate-700 text-white/90 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
            <span className="text-xl font-serif italic tracking-wide">Stylique</span>
          </div>
          <p className="text-sm max-w-xs text-gray-300">
            Stylique is your one-stop destination for elegant fashion and timeless style. Shop smart, stay chic!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  smooth
                  to={item.path}
                  onClick={item.name === 'Home' ? handleHomeClick : undefined}
                  className="hover:text-slate-400 transition duration-300"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              support@stylique.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-lg" />
              +92 300 1234567
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg" />
              123 Stylique Street
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
  <div className="flex space-x-4 text-slate-900">
    <button
      disabled
      className="p-2 bg-white rounded-full cursor-not-allowed "
    >
      <FaFacebookF />
    </button>
    <button
      disabled
      className="p-2 bg-white rounded-full cursor-not-allowed "
    >
      <FaTwitter />
    </button>
    <button
      disabled
      className="p-2 bg-white rounded-full cursor-not-allowed "
    >
      <FaInstagram />
    </button>
  </div>
</div>
      </div>
      <div className="border-t text-center py-4 text-sm text-gray-400">
        &copy; 2025 Stylique. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

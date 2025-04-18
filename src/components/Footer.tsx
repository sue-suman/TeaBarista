import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">TeaBarista</h3>
            <p className="text-sm">Bringing the finest Indian teas to your cup.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
              <li><Link to="/encyclopedia" className="hover:text-white">Tea Guide</Link></li>
              <li><Link to="/recipes" className="hover:text-white">Recipes</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-white">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-white">Returns</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-amber-800 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} TeaBarista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
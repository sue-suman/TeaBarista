import React from 'react';
import { Link } from 'react-router-dom';
import { CupSoda as TeaCup, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <TeaCup className="h-8 w-8" />
            <span className="text-xl font-bold">TeaBarista</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="hover:text-amber-200">Shop</Link>
            <Link to="/encyclopedia" className="hover:text-amber-200">Tea Guide</Link>
            <Link to="/recipes" className="hover:text-amber-200">Recipes</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="hover:text-amber-200">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/account" className="hover:text-amber-200">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
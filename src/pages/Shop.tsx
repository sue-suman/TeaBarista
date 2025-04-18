import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface TeaProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  origin: string;
}

const products: TeaProduct[] = [
  {
    id: '1',
    name: 'Assam Orthodox Black Tea',
    description: 'A full-bodied black tea with rich malty flavor and deep amber color. Perfect for a strong morning brew.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80',
    origin: 'Assam'
  },
  {
    id: '2',
    name: 'Darjeeling First Flush',
    description: 'Light, floral, and aromatic tea with muscatel notes. Known as the "Champagne of Teas".',
    price: 499,
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&q=80',
    origin: 'West Bengal'
  },
  {
    id: '3',
    name: 'Masala Chai Blend',
    description: 'Traditional Indian spiced tea blend with cardamom, cinnamon, ginger, and black pepper.',
    price: 249,
    image: 'https://images.unsplash.com/photo-1561336526-2914f13ceb36?auto=format&fit=crop&q=80',
    origin: 'Mumbai'
  },
  {
    id: '4',
    name: 'Nilgiri Blue Mountain',
    description: 'Fragrant and subtle tea with bright flavor and floral undertones from the Blue Mountains.',
    price: 349,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80',
    origin: 'Tamil Nadu'
  },
  {
    id: '5',
    name: 'Kashmiri Kahwa Green Tea',
    description: 'Exotic green tea blend with saffron, almonds, and cardamom. A royal treat from Kashmir.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&q=80',
    origin: 'Kashmir'
  },
  {
    id: '6',
    name: 'Bengal Rose Tea',
    description: 'Fragrant black tea blend with natural rose petals. A delicate and aromatic experience.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1597318181408-ea9c3fd4f846?auto=format&fit=crop&q=80',
    origin: 'West Bengal'
  }
];

const Shop = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product: TeaProduct) => {
    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Add new item
    existingCart.push({
      ...product,
      quantity: 1,
      addedAt: new Date().toISOString()
    });
    
    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // Update cart count
    setCartCount(existingCart.length);
    
    // Show notification
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <Toaster position="top-right" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Our Tea Collection</h1>
          <p className="text-lg text-amber-800">Discover the finest Indian teas, carefully curated for your pleasure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-amber-900">{product.name}</h3>
                  <span className="text-lg font-bold text-amber-600">₹{product.price}</span>
                </div>
                
                <p className="text-sm text-amber-700 mb-2">Origin: {product.origin}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-amber-700 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
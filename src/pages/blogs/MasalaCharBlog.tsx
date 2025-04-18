import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Clock, Heart, Leaf, Coffee } from 'lucide-react';

const MasalaCharBlog = () => {
  return (
    <article className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1561336526-2914f13ceb36?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Masala Chai: India's Beloved Spiced Tea</h1>
            <div className="flex items-center space-x-4 text-amber-200">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                7 min read
              </span>
              <span>•</span>
              <span>March 15, 2024</span>
              <span>•</span>
              <span>By Tea Master Amit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-amber mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            Masala Chai, a harmonious blend of aromatic spices and robust black tea, is more than 
            just a beverage in India—it's a cultural institution. From bustling street corners to 
            family gatherings, this spiced tea brings people together and warms both body and soul.
          </p>

          <div className="my-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Essential Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Leaf className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="font-medium">Base</p>
                  <p className="text-gray-600">Strong Black Tea</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Coffee className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="font-medium">Spices</p>
                  <p className="text-gray-600">Cardamom, Ginger, etc.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="font-medium">Style</p>
                  <p className="text-gray-600">Rich & Creamy</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">The Art of Spice Blending</h2>
          <p>
            The magic of masala chai lies in its perfectly balanced spice mixture. Traditional 
            recipes typically include:
          </p>
          <ul>
            <li>Cardamom - The signature flavor</li>
            <li>Fresh Ginger - For warmth and zing</li>
            <li>Cinnamon - Sweet and woody notes</li>
            <li>Cloves - Deep, aromatic punch</li>
            <li>Black Peppercorns - Subtle heat</li>
          </ul>

          <div className="my-8">
            <img 
              src="https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&q=80" 
              alt="Masala chai ingredients"
              className="rounded-lg w-full h-[400px] object-cover"
            />
            <p className="text-sm text-gray-600 mt-2">
              Fresh spices ready for chai preparation
            </p>
          </div>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">Cultural Significance</h2>
          <p>
            In India, chai is more than just a drink—it's a daily ritual and a symbol of 
            hospitality. The preparation and serving of chai brings people together, from family 
            breakfast tables to workplace tea breaks.
          </p>

          <div className="bg-amber-100 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Health Benefits</h3>
            <p className="text-amber-900">
              The spices in masala chai aren't just for flavor—they offer numerous health benefits:
            </p>
            <ul className="text-amber-900 mt-2">
              <li>Aids digestion</li>
              <li>Boosts immunity</li>
              <li>Reduces inflammation</li>
              <li>Improves circulation</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">Regional Variations</h2>
          <p>
            Every region in India has its own twist on masala chai. Some add black salt for a 
            unique taste, while others might include saffron or rose petals for special occasions.
          </p>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-amber-200">
            <Link 
              to="/recipes" 
              className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700"
            >
              <span>See full recipe & brewing guide</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
            
            <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700">
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MasalaCharBlog;
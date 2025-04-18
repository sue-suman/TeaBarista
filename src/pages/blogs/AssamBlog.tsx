import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Clock, MapPin, Thermometer } from 'lucide-react';

const AssamBlog = () => {
  return (
    <article className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Assam Tea: India's Liquid Gold</h1>
            <div className="flex items-center space-x-4 text-amber-200">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                5 min read
              </span>
              <span>•</span>
              <span>March 15, 2024</span>
              <span>•</span>
              <span>By Tea Master Raj</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-amber mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            In the lush valleys of Northeast India lies the world's largest tea-growing region, 
            where the story of Assam tea unfolds. This full-bodied black tea, known for its rich 
            malty flavor and deep amber color, has become a cornerstone of tea culture worldwide.
          </p>

          <div className="my-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Quick Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="font-medium">Region</p>
                  <p className="text-gray-600">Brahmaputra Valley</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Thermometer className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="font-medium">Climate</p>
                  <p className="text-gray-600">Tropical & Humid</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="font-medium">Best Season</p>
                  <p className="text-gray-600">Second Flush</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">The Perfect Growing Conditions</h2>
          <p>
            Assam's unique terroir creates the perfect environment for tea cultivation. The region's 
            low elevation (around 100 meters above sea level), combined with high rainfall and warm 
            temperatures, produces tea leaves with distinctive characteristics.
          </p>

          <div className="my-8">
            <img 
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80" 
              alt="Assam tea plantation"
              className="rounded-lg w-full h-[400px] object-cover"
            />
            <p className="text-sm text-gray-600 mt-2">
              Lush tea gardens in the Brahmaputra Valley
            </p>
          </div>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">Harvesting Seasons</h2>
          <p>
            While Assam tea is harvested throughout the year, the second flush (June-August) is 
            particularly prized. This period produces tea with an intense malty flavor and rich 
            amber color that tea connoisseurs worldwide cherish.
          </p>

          <div className="bg-amber-100 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Did You Know?</h3>
            <p className="text-amber-900">
              Assam is the world's largest tea-growing region, producing over 500 million kilograms 
              of tea annually. The region's tea industry employs over a million people!
            </p>
          </div>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">Usage & Blends</h2>
          <p>
            Assam tea forms the base of many popular breakfast blends, including English Breakfast 
            and Irish Breakfast teas. Its robust character makes it perfect for morning consumption, 
            often enjoyed with milk and sugar.
          </p>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-amber-200">
            <Link 
              to="/recipes" 
              className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700"
            >
              <span>Learn how to brew it perfectly</span>
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

export default AssamBlog;
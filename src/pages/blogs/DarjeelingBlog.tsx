import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, Clock, MapPin, Mountain, Award } from 'lucide-react';

const DarjeelingBlog = () => {
  return (
    <article className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571934811356-5cc819f525dc?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 h-full flex items-end pb-12">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Darjeeling Tea: The Champagne of Teas</h1>
            <div className="flex items-center space-x-4 text-amber-200">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                6 min read
              </span>
              <span>•</span>
              <span>March 15, 2024</span>
              <span>•</span>
              <span>By Tea Master Priya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-amber mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            Nestled in the foothills of the Himalayas, Darjeeling produces what is widely 
            considered the finest tea in the world. Its unique combination of climate, altitude, 
            and soil creates a tea with an incomparable muscatel flavor and exquisite bouquet.
          </p>

          <div className="my-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Quick Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Mountain className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="font-medium">Altitude</p>
                  <p className="text-gray-600">2000m Above Sea Level</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="font-medium">Region</p>
                  <p className="text-gray-600">West Bengal, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="font-medium">Distinction</p>
                  <p className="text-gray-600">GI Protected</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">The Perfect Environment</h2>
          <p>
            The magic of Darjeeling tea lies in its unique growing conditions. The cool, misty 
            climate and high altitude create a slow-growing environment that develops complex 
            flavors in the tea leaves.
          </p>

          <div className="my-8">
            <img 
              src="https://images.unsplash.com/photo-1582793988301-77e8b955c3ce?auto=format&fit=crop&q=80" 
              alt="Darjeeling tea plantation"
              className="rounded-lg w-full h-[400px] object-cover"
            />
            <p className="text-sm text-gray-600 mt-2">
              Misty morning in a Darjeeling tea estate
            </p>
          </div>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">The Four Flushes</h2>
          <p>
            Darjeeling tea has four distinct harvesting seasons, each producing tea with unique 
            characteristics:
          </p>
          <ul>
            <li>First Flush (Spring) - Light, floral, and astringent</li>
            <li>Second Flush (Summer) - Full-bodied with muscatel flavor</li>
            <li>Monsoon Flush - Darker and stronger</li>
            <li>Autumn Flush - Light but full-bodied</li>
          </ul>

          <div className="bg-amber-100 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Did You Know?</h3>
            <p className="text-amber-900">
              Darjeeling tea was the first Indian product to receive the Geographical Indication (GI) 
              tag, protecting its unique identity and ensuring only tea produced in this region can 
              be called "Darjeeling Tea."
            </p>
          </div>

          <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">The Art of Appreciation</h2>
          <p>
            To truly appreciate Darjeeling tea, it should be brewed carefully and consumed without 
            milk. This allows you to experience its complex flavor profile, which can include notes 
            of flowers, fruits, and almonds.
          </p>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-amber-200">
            <Link 
              to="/recipes" 
              className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700"
            >
              <span>Explore recipes for Darjeeling</span>
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

export default DarjeelingBlog;
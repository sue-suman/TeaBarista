import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Award, Coffee } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Discover the Finest Indian Teas</h1>
            <p className="text-xl mb-8">Experience the rich heritage and exquisite flavors of premium teas sourced directly from India's finest estates.</p>
            <Link 
              to="/shop"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Assam Tea",
                image: "https://images.unsplash.com/photo-1571934811356-5cc819f525dc?auto=format&fit=crop&q=80",
                description: "Bold and malty black tea from the fertile valleys of Assam"
              },
              {
                title: "Darjeeling Tea",
                image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80",
                description: "The champagne of teas with delicate muscatel flavor"
              },
              {
                title: "Masala Chai",
                image: "https://images.unsplash.com/photo-1561336526-2914f13ceb36?auto=format&fit=crop&q=80",
                description: "Traditional spiced tea blend for the perfect chai experience"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link 
                    to={`/shop/${category.title.toLowerCase().replace(' ', '-')}`}
                    className="text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Leaf className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ethically Sourced</h3>
              <p className="text-gray-600">Direct partnerships with India's finest tea estates</p>
            </div>
            <div className="p-6">
              <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Hand-picked and carefully processed teas</p>
            </div>
            <div className="p-6">
              <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Curation</h3>
              <p className="text-gray-600">Curated selection of the finest varieties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Tea Community</h2>
          <p className="mb-8">Subscribe to receive updates, special offers, and tea brewing tips</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="bg-amber-600 px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
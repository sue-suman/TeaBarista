import React, { useState } from 'react';
import { Clock, Users, ChefHat, Star, Share2, MessageCircle } from 'lucide-react';

interface RecipeStep {
  title: string;
  description: string;
  image: string;
  tips?: string;
}

interface RecipeVariant {
  name: string;
  ingredients: string[];
}

const recipeSteps: RecipeStep[] = [
  {
    title: "Boil Fresh Water",
    description: "Start with fresh, cold water. Bring it to a rolling boil in a kettle or pot. The oxygen content in fresh water helps to bring out the tea's full flavor.",
    image: "https://images.unsplash.com/photo-1517481705099-72660903e569?auto=format&fit=crop&q=80",
    tips: "For best results, use filtered water to avoid any mineral taste interference."
  },
  {
    title: "Add Tea Leaves",
    description: "Add 2 teaspoons of loose tea leaves per cup (240ml) of water. If using whole spices for masala chai, add them at this stage.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80",
    tips: "Adjust the quantity based on your preferred strength. Start with less - you can always add more."
  },
  {
    title: "Steep the Tea",
    description: "Let the tea steep for 3-5 minutes, depending on desired strength. For masala chai, let it simmer for 5-7 minutes to allow spices to release their flavors.",
    image: "https://images.unsplash.com/photo-1571934811356-5cc819f525dc?auto=format&fit=crop&q=80",
    tips: "Don't steep for too long as it can make the tea bitter. Time it carefully!"
  },
  {
    title: "Add Milk (Optional)",
    description: "For traditional Indian chai, add milk and let it come to a gentle boil. The ratio should be 1 part milk to 2 parts water.",
    image: "https://images.unsplash.com/photo-1561336526-2914f13ceb36?auto=format&fit=crop&q=80",
    tips: "Whole milk creates the richest taste, but any milk or milk alternative works well."
  }
];

const recipeVariants: RecipeVariant[] = [
  {
    name: "Simple Chai",
    ingredients: [
      "2 tsp loose black tea leaves",
      "2 cups water",
      "½ cup milk",
      "Sugar to taste"
    ]
  },
  {
    name: "Masala Chai",
    ingredients: [
      "2 tsp loose black tea leaves",
      "2 cups water",
      "½ cup milk",
      "4 green cardamom pods",
      "2 cloves",
      "1 cinnamon stick",
      "½ inch ginger, crushed",
      "2-3 black peppercorns",
      "Sugar to taste"
    ]
  }
];

const Recipe = () => {
  const [selectedVariant, setSelectedVariant] = useState<string>("Simple Chai");
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1561336526-2914f13ceb36?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">How to Brew the Perfect Indian Tea</h1>
            <div className="flex items-center space-x-4 text-amber-200">
              <span>By Tea Master Priya</span>
              <span>•</span>
              <span>March 15, 2024</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="prose prose-amber mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            The art of brewing Indian tea is a time-honored tradition that transforms simple ingredients into a soul-warming beverage. 
            Whether you're craving a simple cup of chai or the aromatic complexity of masala chai, the key lies in the brewing technique. 
            This guide will walk you through the essential steps to create the perfect cup of Indian tea.
          </p>
        </div>

        {/* Recipe Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Clock className="text-amber-600 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-600">Prep Time</p>
                <p className="font-semibold">5 mins</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ChefHat className="text-amber-600 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-600">Cook Time</p>
                <p className="font-semibold">10 mins</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-amber-600 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-600">Servings</p>
                <p className="font-semibold">2 cups</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="text-amber-600 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-600">Difficulty</p>
                <p className="font-semibold">Easy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Variant Selector */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Choose Your Style</h2>
          <div className="flex space-x-4">
            {recipeVariants.map((variant) => (
              <button
                key={variant.name}
                onClick={() => setSelectedVariant(variant.name)}
                className={`px-4 py-2 rounded-lg ${
                  selectedVariant === variant.name
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-amber-600 hover:bg-amber-50'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>

        {/* Ingredients */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2">
            {recipeVariants.find(v => v.name === selectedVariant)?.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-8">Instructions</h2>
          {recipeSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-700 mb-4">{step.description}</p>
                {step.tips && (
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-amber-800 font-semibold">Pro Tip:</p>
                    <p className="text-amber-700">{step.tips}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Rating and Share Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Rate this recipe</h3>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-6 w-6 cursor-pointer ${
                      star <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700">
                <MessageCircle className="h-5 w-5" />
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
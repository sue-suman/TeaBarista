import React, { useState } from 'react';
import { MapPin, Thermometer, Cloud, Mountain, Leaf, Calendar } from 'lucide-react';

interface TeaInfo {
  id: string;
  name: string;
  region: string;
  regionImage: string;
  soil: string;
  altitude: string;
  temperature: string;
  rainfall: string;
  seasons: string[];
  flavor: string;
  uses: string[];
  plantationImage: string;
}

const teas: TeaInfo[] = [
  {
    id: 'assam',
    name: 'Assam Black Tea',
    region: 'Brahmaputra Valley, Assam',
    regionImage: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80',
    soil: 'Deep, rich loamy soil with high organic matter content',
    altitude: '45-60 meters above sea level',
    temperature: '20°C to 35°C',
    rainfall: '2,500-3,000mm annually with high humidity',
    seasons: ['First Flush (March-May)', 'Second Flush (June-August)', 'Autumn Flush (October-November)'],
    flavor: 'Full-bodied, brisk, malty with a deep amber color',
    uses: ['English Breakfast Blend', 'Irish Breakfast Tea', 'Masala Chai Base'],
    plantationImage: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80'
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling Tea',
    region: 'Darjeeling, West Bengal',
    regionImage: 'https://images.unsplash.com/photo-1571934811356-5cc819f525dc?auto=format&fit=crop&q=80',
    soil: 'Well-drained, acidic soil rich in minerals',
    altitude: '600-2,000 meters above sea level',
    temperature: '15°C to 25°C',
    rainfall: '2,000-4,000mm annually with morning mist',
    seasons: ['First Flush (March-April)', 'Second Flush (May-June)', 'Monsoon Flush (July-September)', 'Autumn Flush (October-November)'],
    flavor: 'Light, floral with distinctive muscatel notes',
    uses: ['Pure Single-Origin Tea', 'Afternoon Tea Blends', 'Premium Tea Blends'],
    plantationImage: 'https://images.unsplash.com/photo-1582793988301-77e8b955c3ce?auto=format&fit=crop&q=80'
  },
  {
    id: 'nilgiri',
    name: 'Nilgiri Tea',
    region: 'Nilgiri Hills, Tamil Nadu',
    regionImage: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80',
    soil: 'Well-drained, fertile forest soil',
    altitude: '1,000-2,500 meters above sea level',
    temperature: '10°C to 25°C',
    rainfall: '1,500-2,500mm annually, well-distributed',
    seasons: ['Year-round production with peak quality between December-March'],
    flavor: 'Brisk, fragrant, and subtle with a golden yellow liquor',
    uses: ['Iced Tea Blends', 'Flavored Tea Base', 'Pure Black Tea'],
    plantationImage: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&q=80'
  },
  {
    id: 'kangra',
    name: 'Kangra Tea',
    region: 'Kangra Valley, Himachal Pradesh',
    regionImage: 'https://images.unsplash.com/photo-1561336526-2914f13ceb36?auto=format&fit=crop&q=80',
    soil: 'Well-drained, sandy-loam soil',
    altitude: '900-1,400 meters above sea level',
    temperature: '12°C to 25°C',
    rainfall: '1,500-2,500mm annually',
    seasons: ['Spring Flush (March-April)', 'Summer Flush (May-July)', 'Autumn Flush (September-November)'],
    flavor: 'Delicate, sweet with a light color and distinctive aroma',
    uses: ['Pure Green Tea', 'Light Black Tea', 'Traditional Himachali Tea'],
    plantationImage: 'https://images.unsplash.com/photo-1597318181408-ea9c3fd4f846?auto=format&fit=crop&q=80'
  }
];

const TeaGuide = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [expandedTea, setExpandedTea] = useState<string | null>(null);

  const filteredTeas = selectedRegion === 'all' 
    ? teas 
    : teas.filter(tea => tea.id === selectedRegion);

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Indian Tea Guide</h1>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Discover the rich diversity of Indian teas, from the malty Assam to the delicate Darjeeling,
            each shaped by its unique terroir and growing conditions.
          </p>
        </div>

        {/* Region Filter */}
        <div className="mb-8">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 rounded-lg border-2 border-amber-200 bg-white text-amber-900 focus:outline-none focus:border-amber-400"
          >
            <option value="all">All Regions</option>
            {teas.map(tea => (
              <option key={tea.id} value={tea.id}>{tea.name}</option>
            ))}
          </select>
        </div>

        {/* Tea Cards */}
        <div className="space-y-8">
          {filteredTeas.map((tea) => (
            <div 
              key={tea.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div 
                className="relative h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${tea.regionImage})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{tea.name}</h2>
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {tea.region}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mountain className="w-5 h-5 text-amber-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Altitude</p>
                        <p className="font-medium">{tea.altitude}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Thermometer className="w-5 h-5 text-amber-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Temperature</p>
                        <p className="font-medium">{tea.temperature}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Cloud className="w-5 h-5 text-amber-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Rainfall</p>
                        <p className="font-medium">{tea.rainfall}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={tea.plantationImage}
                      alt={`${tea.name} plantation`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setExpandedTea(expandedTea === tea.id ? null : tea.id)}
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  {expandedTea === tea.id ? 'Show Less' : 'Learn More'}
                </button>

                {expandedTea === tea.id && (
                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="font-semibold text-amber-900 mb-2">Soil Conditions</h3>
                      <p className="text-gray-700">{tea.soil}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-amber-900 mb-2">Harvest Seasons</h3>
                      <ul className="list-disc list-inside text-gray-700">
                        {tea.seasons.map((season, index) => (
                          <li key={index}>{season}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-amber-900 mb-2">Flavor Profile</h3>
                      <p className="text-gray-700">{tea.flavor}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-amber-900 mb-2">Common Uses</h3>
                      <ul className="list-disc list-inside text-gray-700">
                        {tea.uses.map((use, index) => (
                          <li key={index}>{use}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeaGuide;
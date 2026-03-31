import { motion } from 'motion/react';
import { GlassWater, Utensils, Music, Clock } from 'lucide-react';

export default function Bar() {
  return (
    <div className="bg-cream min-h-screen pt-24 pb-16 font-sans">
      {/* Header */}
      <div className="relative bg-brown-dark text-cream py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/barhero/1920/1080?blur=4" 
            alt="Bar Hero" 
            className="w-full h-full object-cover opacity-30" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-gold mb-4"
          >
            Bar & Restaurant
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Savor the finest local and international flavors, and experience Obudu's most vibrant nightlife.
          </motion.p>
        </div>
      </div>

      {/* Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Utensils, title: 'Gourmet Dining', desc: 'Expertly crafted dishes using fresh, local ingredients.' },
            { icon: GlassWater, title: 'Signature Cocktails', desc: 'A curated selection of premium spirits and wines.' },
            { icon: Music, title: 'Live Entertainment', desc: 'Enjoy live bands and DJs every weekend.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-xl border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-dark mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Menu Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-4">A Taste of SugarLand</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our diverse menu designed to satisfy every palate.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Food Menu */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-8 border-b border-gray-200 pb-4">Main Courses</h3>
            <div className="space-y-8">
              {[
                { name: 'Grilled Obudu Steak', price: '₦15,000', desc: 'Prime cut beef, garlic mashed potatoes, seasonal vegetables.' },
                { name: 'Spicy Catfish Pepper Soup', price: '₦8,500', desc: 'A local favorite, served hot with yam or plantain.' },
                { name: 'Creamy Garlic Pasta', price: '₦12,000', desc: 'Fettuccine in a rich garlic parmesan sauce with grilled chicken.' },
                { name: 'Jollof Rice Special', price: '₦9,000', desc: 'Classic Nigerian Jollof served with grilled turkey and plantains.' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start group">
                  <div className="pr-4">
                    <h4 className="text-lg font-bold text-brown-dark group-hover:text-gold transition-colors">{item.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                  <div className="text-lg font-bold text-gold whitespace-nowrap">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Drinks Menu */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-8 border-b border-gray-200 pb-4">Signature Drinks</h3>
            <div className="space-y-8">
              {[
                { name: 'SugarLand Sunset', price: '₦5,000', desc: 'Vodka, peach schnapps, orange juice, cranberry.' },
                { name: 'Obudu Breeze', price: '₦4,500', desc: 'White rum, fresh mint, lime, soda water.' },
                { name: 'Classic Old Fashioned', price: '₦6,000', desc: 'Bourbon, bitters, sugar, orange twist.' },
                { name: 'Tropical Mocktail', price: '₦3,000', desc: 'A refreshing blend of seasonal fruits and juices.' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start group">
                  <div className="pr-4">
                    <h4 className="text-lg font-bold text-brown-dark group-hover:text-gold transition-colors">{item.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                  <div className="text-lg font-bold text-gold whitespace-nowrap">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://picsum.photos/seed/bar1/600/600" alt="Bar Vibe" className="w-full h-64 object-cover rounded-xl" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/food1/600/600" alt="Delicious Food" className="w-full h-64 object-cover rounded-xl" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/drink1/600/600" alt="Cocktail" className="w-full h-64 object-cover rounded-xl" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/party1/600/600" alt="Nightlife" className="w-full h-64 object-cover rounded-xl" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  );
}

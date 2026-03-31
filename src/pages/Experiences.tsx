import { motion } from 'motion/react';
import { Map, Mountain, Camera, Sun } from 'lucide-react';

export default function Experiences() {
  return (
    <div className="bg-cream min-h-screen pt-24 pb-16 font-sans">
      {/* Header */}
      <div className="bg-cream text-brown-dark py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold text-gold mb-4"
        >
          Discover Obudu
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Unforgettable adventures and serene moments await you in the heart of nature.
        </motion.p>
      </div>

      {/* Activities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: 'Obudu Mountain Resort',
              desc: 'Just a 15-minute drive from SugarLand, experience the breathtaking views, cool climate, and the famous cable car ride.',
              icon: Mountain,
              img: 'mountain'
            },
            {
              title: 'Agbokim Waterfalls',
              desc: 'A stunning seven-faced waterfall cascading over steep cliffs. A perfect spot for photography and picnics.',
              icon: Camera,
              img: 'waterfall'
            },
            {
              title: 'Nature Hiking Trails',
              desc: 'Explore the lush greenery and diverse wildlife of the Obudu plateau with guided hiking tours.',
              icon: Map,
              img: 'hiking'
            },
            {
              title: 'Canopy Walkway',
              desc: 'Walk among the treetops and experience the forest from a unique perspective, suspended high above the ground.',
              icon: Sun,
              img: 'canopy'
            }
          ].map((activity, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row group"
            >
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${activity.img}/600/800`} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <activity.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brown-dark mb-3">{activity.title}</h3>
                <p className="text-gray-600 mb-6">{activity.desc}</p>
                <a 
                  href="https://wa.me/2348000000000?text=I'd like to book a tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-white px-6 py-2 rounded-full font-semibold transition-colors text-center"
                >
                  Book Tour
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="bg-brown-dark text-cream py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold mb-16">Exclusive Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Romantic Getaway', price: '₦150,000', desc: '2 Nights in Honeymoon Suite, romantic dinner, couples massage, and a guided nature walk.', features: ['2 Nights Stay', 'Romantic Dinner', 'Couples Massage', 'Guided Tour'] },
              { title: 'Adventure Seeker', price: '₦120,000', desc: '2 Nights in Deluxe Room, full-day guided hiking, packed lunch, and cable car tickets.', features: ['2 Nights Stay', 'Guided Hiking', 'Packed Lunch', 'Cable Car Tickets'] },
              { title: 'Weekend Escape', price: '₦90,000', desc: '2 Nights in Standard Twin, complimentary breakfast, and VIP access to the bar.', features: ['2 Nights Stay', 'Breakfast Included', 'VIP Bar Access', 'Late Checkout'] }
            ].map((pkg, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{pkg.title}</h3>
                <div className="text-3xl font-bold text-gold mb-4">{pkg.price}</div>
                <p className="text-gray-300 mb-6 flex-grow">{pkg.desc}</p>
                <ul className="space-y-2 mb-8 text-left">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-gray-200">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/2348000000000?text=I'm interested in the ${pkg.title} package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold hover:bg-yellow-500 text-white py-3 rounded-xl font-semibold transition-colors text-center"
                >
                  Inquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wifi, Tv, Coffee, Wind, ChevronRight } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Suite',
    price: '₦45,000',
    size: '35 sqm',
    img: 'hotelroom1',
    description: 'A cozy and elegant room perfect for solo travelers or couples, featuring a king-size bed and modern amenities.',
    amenities: ['Free WiFi', 'Smart TV', 'Air Conditioning', 'Room Service']
  },
  {
    id: 2,
    name: 'Executive Room',
    price: '₦60,000',
    size: '50 sqm',
    img: 'hotelroom2',
    description: 'Spacious room with a dedicated seating area, ideal for business travelers or those seeking extra comfort.',
    amenities: ['Free WiFi', 'Smart TV', 'Air Conditioning', 'Mini Bar', 'Work Desk']
  },
  {
    id: 3,
    name: 'Presidential Villa',
    price: '₦120,000',
    size: '120 sqm',
    img: 'hotelroom3',
    description: 'The ultimate luxury experience. Features a separate living room, dining area, and panoramic views of the mountains.',
    amenities: ['Free WiFi', 'Smart TV', 'Air Conditioning', 'Private Balcony', 'Jacuzzi', 'Butler Service']
  },
  {
    id: 4,
    name: 'Family Suite',
    price: '₦85,000',
    size: '80 sqm',
    img: 'hotelroom4',
    description: 'Perfect for families, offering two interconnected rooms and ample space for everyone to relax.',
    amenities: ['Free WiFi', '2 Smart TVs', 'Air Conditioning', 'Kitchenette']
  },
  {
    id: 5,
    name: 'Honeymoon Suite',
    price: '₦95,000',
    size: '65 sqm',
    img: 'hotelroom5',
    description: 'Romantic and secluded, designed specifically for couples looking for a memorable getaway.',
    amenities: ['Free WiFi', 'Smart TV', 'Air Conditioning', 'Romantic Setup', 'Complimentary Wine']
  },
  {
    id: 6,
    name: 'Standard Twin',
    price: '₦40,000',
    size: '30 sqm',
    img: 'hotelroom6',
    description: 'Comfortable room with two single beds, great for friends traveling together.',
    amenities: ['Free WiFi', 'Smart TV', 'Air Conditioning']
  }
];

export default function Rooms() {
  return (
    <div className="bg-cream min-h-screen pt-24 pb-16 font-sans">
      {/* Header */}
      <div className="bg-cream text-brown-dark py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold text-gold mb-4"
        >
          Our Rooms & Suites
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4"
        >
          Discover the perfect sanctuary for your stay in Obudu, blending luxury with the tranquility of nature.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
        >
          🔥 High demand: Limited rooms available for upcoming weekends!
        </motion.div>
      </div>

      {/* Filters (Mock) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="px-6 py-2 rounded-full bg-gold text-white font-medium">All Rooms</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 hover:border-gold hover:text-gold transition-colors">Suites</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 hover:border-gold hover:text-gold transition-colors">Family</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 hover:border-gold hover:text-gold transition-colors">Couples</button>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room, i) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={`https://picsum.photos/seed/${room.img}/800/600`} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-semibold text-brown-dark shadow-md">
                  {room.price} <span className="text-sm font-normal text-gray-500">/ night</span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif font-bold text-brown-dark">{room.name}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{room.size}</span>
                </div>
                
                <p className="text-gray-600 mb-6 flex-grow">{room.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, j) => (
                      <span key={j} className="text-xs text-gray-600 bg-cream px-3 py-1 rounded-full border border-gray-200">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={`https://wa.me/2348000000000?text=I'm interested in booking the ${room.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-brown-dark hover:bg-brown text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Book This Room
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

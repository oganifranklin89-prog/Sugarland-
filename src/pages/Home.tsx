import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Users, ChevronRight, Star, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-cream min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/luxuryhotel/1920/1080?blur=2"
            alt="SugarLand Hotel Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Escape to Comfort in Obudu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 font-light"
          >
            Luxury stays, unforgettable nights
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/rooms" className="bg-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Your Stay
            </Link>
            <Link to="/bar" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brown-dark px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Explore the Bar
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Booking Bar */}
      <section className="relative z-20 -mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 w-full flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-500 mb-2">Check-in</label>
              <div className="flex items-center border-b border-gray-300 pb-2">
                <Calendar className="w-5 h-5 text-gold mr-3" />
                <input type="date" className="w-full focus:outline-none text-brown-dark bg-transparent" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-500 mb-2">Check-out</label>
              <div className="flex items-center border-b border-gray-300 pb-2">
                <Calendar className="w-5 h-5 text-gold mr-3" />
                <input type="date" className="w-full focus:outline-none text-brown-dark bg-transparent" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-500 mb-2">Guests</label>
              <div className="flex items-center border-b border-gray-300 pb-2">
                <Users className="w-5 h-5 text-gold mr-3" />
                <select className="w-full focus:outline-none text-brown-dark bg-transparent appearance-none">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </div>
          </div>
          <button className="w-full md:w-auto bg-brown-dark hover:bg-brown text-white px-8 py-4 rounded-xl font-semibold transition-colors whitespace-nowrap">
            Check Availability
          </button>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-4">Our Premium Rooms</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience unparalleled comfort and luxury in our thoughtfully designed rooms, perfect for relaxation after a day of adventure.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Deluxe Suite', price: '₦45,000', img: 'hotelroom1' },
            { name: 'Executive Room', price: '₦60,000', img: 'hotelroom2' },
            { name: 'Presidential Villa', price: '₦120,000', img: 'hotelroom3' }
          ].map((room, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={`https://picsum.photos/seed/${room.img}/600/400`} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-semibold text-brown-dark">
                  {room.price} <span className="text-sm font-normal text-gray-500">/ night</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-brown-dark mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">Spacious and elegantly furnished, offering the perfect blend of comfort and style for your stay.</p>
                <Link to="/rooms" className="flex items-center text-gold font-semibold hover:text-yellow-600 transition-colors">
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/rooms" className="inline-block border-2 border-brown-dark text-brown-dark hover:bg-brown-dark hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
            View All Rooms
          </Link>
        </div>
      </section>

      {/* Bar & Restaurant */}
      <section className="py-24 bg-brown-dark text-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold mb-6">Unforgettable Nightlife & Dining</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Savor exquisite local and international cuisine at our restaurant, then transition into the vibrant energy of our premium bar. Enjoy signature cocktails, live music, and a sophisticated social atmosphere.
              </p>
              <ul className="space-y-4 mb-10">
                {['Signature Cocktails & Fine Wines', 'Gourmet Local & Continental Dishes', 'Live Band & DJ Weekends', 'Exclusive VIP Lounge'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <div className="w-2 h-2 bg-gold rounded-full mr-4"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/bar" className="bg-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center">
                Explore the Bar <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/cocktail/400/500" alt="Cocktails" className="rounded-2xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/restaurant/400/500" alt="Dining" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-4">Things to do in Obudu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover the natural beauty and thrilling adventures that await you just minutes from our hotel.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Nature Hiking', img: 'hiking' },
            { title: 'Cable Car Rides', img: 'cablecar' },
            { title: 'Waterfalls Tour', img: 'waterfall' }
          ].map((exp, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden h-80 group">
              <img src={`https://picsum.photos/seed/${exp.img}/600/800`} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-serif font-bold text-white">{exp.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-green-dark text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold mb-16">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Chinedu O.', review: 'The perfect blend of luxury and nature. The bar was incredibly lively at night!' },
              { name: 'Sarah & Mark', review: 'We spent our honeymoon here and it was magical. The staff went above and beyond.' },
              { name: 'Amina Y.', review: 'Best hotel near Obudu Ranch. The rooms are spotless and the food is amazing.' }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-gold fill-current" />)}
                </div>
                <p className="text-gray-300 mb-6 italic">"{t.review}"</p>
                <p className="font-semibold text-white">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-6">Your Perfect Getaway Awaits</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Located just 15 minutes from the famous Obudu Mountain Resort, SugarLand offers the ideal base camp for your adventures.
            </p>
            <div className="flex items-center text-gray-700 mb-8">
              <MapPin className="w-6 h-6 text-gold mr-4" />
              <span>123 Resort Road, Obudu, Cross River State</span>
            </div>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="bg-brown-dark hover:bg-brown text-white text-center px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg">
              Book Your Escape Now
            </a>
          </div>
          <div className="lg:w-1/2 h-96 lg:h-auto relative">
            <img src="https://picsum.photos/seed/map/800/800" alt="Map Location" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

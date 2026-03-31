import { motion } from 'motion/react';
import { Heart, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-cream min-h-screen pt-24 pb-16 font-sans">
      {/* Header */}
      <div className="bg-cream text-brown-dark py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold text-gold mb-4"
        >
          Our Story
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          A legacy of hospitality, nestled in the serene landscapes of Obudu.
        </motion.p>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="https://picsum.photos/seed/hotelstory/800/1000" 
              alt="SugarLand History" 
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-6">Welcome to SugarLand</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded with a vision to provide a luxurious yet affordable escape for travelers visiting the Obudu Mountain Resort, SugarLand Hotel & Bar has grown into a premier destination for comfort and entertainment.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We believe that every guest deserves an unforgettable experience. From our meticulously designed rooms to our vibrant nightlife and exceptional dining, every detail is crafted to ensure your stay is nothing short of perfect.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Heart className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown-dark mb-2">Passion for Hospitality</h3>
                  <p className="text-gray-600 text-sm">Our team is dedicated to making you feel at home, anticipating your needs before you even ask.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown-dark mb-2">Uncompromised Quality</h3>
                  <p className="text-gray-600 text-sm">From the linens on your bed to the ingredients in your meal, we source only the best.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brown-dark mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'David O.', role: 'General Manager', img: 'manager' },
              { name: 'Chef Amina', role: 'Head Chef', img: 'chef' },
              { name: 'Samuel K.', role: 'Guest Relations', img: 'concierge' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-xl border-4 border-cream">
                  <img 
                    src={`https://picsum.photos/seed/${member.img}/400/400`} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brown-dark mb-2">{member.name}</h3>
                <p className="text-gold font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

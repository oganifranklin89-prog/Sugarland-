import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-cream min-h-screen pt-24 pb-16 font-sans">
      {/* Header */}
      <div className="bg-cream text-brown-dark py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold text-gold mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          We're here to help you plan your perfect stay in Obudu.
        </motion.p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-dark mb-8">Contact Information</h2>
            <p className="text-gray-600 mb-12 text-lg">
              Whether you have a question about our rooms, want to book a table at the restaurant, or need assistance planning your itinerary, our team is ready to assist you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown-dark mb-2">Our Location</h3>
                  <p className="text-gray-600">123 Resort Road, Obudu<br />Cross River State, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown-dark mb-2">Phone Number</h3>
                  <p className="text-gray-600">+234 800 000 0000<br />+234 801 111 1111</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brown-dark mb-2">Email Address</h3>
                  <p className="text-gray-600">info@sugarlandobudu.com<br />bookings@sugarlandobudu.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/2348000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-brown-dark mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white">
                  <option>Room Booking Inquiry</option>
                  <option>Restaurant Reservation</option>
                  <option>Event Hosting</option>
                  <option>General Question</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-brown-dark hover:bg-brown text-white py-4 rounded-xl font-semibold transition-colors text-lg shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-96 bg-gray-200 relative mt-16">
        <img 
          src="https://picsum.photos/seed/mapobudu/1920/600" 
          alt="Map Location" 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
          <div className="bg-white p-4 rounded-xl shadow-2xl flex items-center pointer-events-auto">
            <MapPin className="w-8 h-8 text-gold mr-3" />
            <div>
              <h4 className="font-bold text-brown-dark">SugarLand Hotel & Bar</h4>
              <p className="text-sm text-gray-600">Obudu, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

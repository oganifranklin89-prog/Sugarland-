import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-gold mb-4">SugarLand</h3>
            <p className="text-sm text-gray-300 mb-6">
              Luxury stays and unforgettable nights in the heart of Obudu, Nigeria. Your perfect getaway in nature.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/rooms" className="text-sm text-gray-300 hover:text-gold transition-colors">Our Rooms</Link></li>
              <li><Link to="/bar" className="text-sm text-gray-300 hover:text-gold transition-colors">Bar & Restaurant</Link></li>
              <li><Link to="/experiences" className="text-sm text-gray-300 hover:text-gold transition-colors">Experiences</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-lg mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  123 Resort Road, Obudu, Cross River State, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">+234 800 000 0000</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@sugarlandobudu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SugarLand Hotel & Bar. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

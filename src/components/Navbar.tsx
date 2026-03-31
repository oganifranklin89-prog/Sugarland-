import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Bar & Dining', path: '/bar' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || !isHome ? 'bg-cream shadow-md py-3' : 'bg-transparent py-5'
  }`;

  const textClass = scrolled || !isHome ? 'text-brown-dark' : 'text-white';
  const logoTextClass = scrolled || !isHome ? 'text-gold' : 'text-gold';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className={`font-serif text-2xl font-bold ${logoTextClass}`}>
              SugarLand
            </span>
            <span className={`ml-2 text-sm tracking-widest uppercase hidden sm:block ${textClass}`}>
              Hotel & Bar
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium hover:text-gold transition-colors ${textClass}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-yellow-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textClass} hover:text-gold focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-cream shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-3 text-base font-medium text-brown-dark hover:text-gold hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 bg-gold hover:bg-yellow-500 text-white px-5 py-3 rounded-md text-base font-semibold transition-colors"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

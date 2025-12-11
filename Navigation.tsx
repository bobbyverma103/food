import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl font-serif font-bold transition-colors ${
                isScrolled ? 'text-amber-600' : 'text-white'
              }`}
            >
              Savoria
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Call Us</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors mt-4"
            >
              <Phone size={16} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Savoria</h3>
            <p className="text-stone-400 mb-4 max-w-md">
              Experience culinary excellence where every dish tells a story and every meal
              becomes a cherished memory.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#home" className="hover:text-amber-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-600 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-600 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-amber-600 transition-colors">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-stone-400">
              <li>Monday - Friday</li>
              <li className="text-white">11:00 AM - 10:00 PM</li>
              <li className="mt-3">Saturday - Sunday</li>
              <li className="text-white">10:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-stone-400">
          <p>&copy; 2024 Savoria Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

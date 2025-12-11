import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      ></div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
          Experience Culinary Excellence
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-stone-200 max-w-2xl mx-auto">
          Where every dish tells a story and every meal becomes a cherished memory
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#menu"
            className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all hover:scale-105 shadow-xl"
          >
            View Our Menu
          </a>
          <a
            href="#reservations"
            className="bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-all hover:scale-105 shadow-xl"
          >
            Make a Reservation
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}

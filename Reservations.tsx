import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function Reservations() {
  return (
    <section id="reservations" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              Make a Reservation
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Book your table and experience unforgettable dining. We look forward to
              serving you.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-stone-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-stone-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-stone-700 mb-2"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-stone-700 mb-2"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Number of Guests
                </label>
                <select
                  id="guests"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-700 mb-2"
                >
                  Special Requests
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Any special requirements or dietary restrictions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-4 rounded-lg font-medium hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Book Table
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Address</h4>
                    <p className="text-stone-600">
                      123 Culinary Avenue
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Phone</h4>
                    <p className="text-stone-600">+1 (234) 567-8900</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Email</h4>
                    <p className="text-stone-600">reservations@savoria.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Hours</h4>
                    <p className="text-stone-600">
                      Monday - Friday: 11:00 AM - 10:00 PM
                      <br />
                      Saturday - Sunday: 10:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-stone-900 mb-3">Need Help?</h4>
              <p className="text-stone-600 mb-4">
                Our team is here to assist you with your reservation or any questions you
                may have.
              </p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700"
              >
                <Phone size={18} />
                Call us now
              </a>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-8 rounded-lg text-white">
              <h4 className="text-2xl font-serif font-bold mb-3">Private Events</h4>
              <p className="mb-4 opacity-90">
                Planning a special celebration? We offer private dining rooms and
                customized menus for your events.
              </p>
              <button className="bg-white text-amber-600 px-6 py-2 rounded-full font-medium hover:bg-stone-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Award, Heart, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: 'Award Winning',
      description: 'Recognized for culinary excellence and outstanding service',
    },
    {
      icon: <Heart className="w-8 h-8 text-amber-600" />,
      title: 'Made with Love',
      description: 'Every dish crafted with passion and the finest ingredients',
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: 'Family Tradition',
      description: 'Three generations of culinary expertise and hospitality',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              Founded in 1985, Savoria has been a cornerstone of fine dining, bringing
              together traditional recipes with modern culinary techniques. Our passion for
              food is matched only by our commitment to creating unforgettable dining
              experiences.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              We source the freshest local ingredients and work with artisan producers to
              ensure every dish that leaves our kitchen is a masterpiece. Our team of
              talented chefs brings creativity, skill, and heart to every plate.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-1">35+</div>
                <div className="text-sm text-stone-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-1">50K+</div>
                <div className="text-sm text-stone-600">Happy Guests</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-1">15+</div>
                <div className="text-sm text-stone-600">Awards Won</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Restaurant interior"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-xl max-w-xs">
              <p className="text-sm font-medium">
                "The best dining experience I've ever had. Absolutely exceptional!"
              </p>
              <p className="text-xs mt-2 opacity-90">- Sarah Johnson</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-stone-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

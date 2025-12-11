import { useState } from 'react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' },
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Truffle Bruschetta',
        description: 'Artisan bread topped with wild mushrooms and truffle oil',
        price: '$14',
      },
      {
        name: 'Seared Scallops',
        description: 'Pan-seared scallops with citrus butter and microgreens',
        price: '$18',
      },
      {
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, heirloom tomatoes, and basil',
        price: '$12',
      },
      {
        name: 'Crispy Calamari',
        description: 'Lightly fried with lemon aioli and marinara',
        price: '$15',
      },
    ],
    mains: [
      {
        name: 'Filet Mignon',
        description: '8oz prime beef with roasted vegetables and red wine reduction',
        price: '$42',
      },
      {
        name: 'Pan-Seared Salmon',
        description: 'Atlantic salmon with lemon herb butter and asparagus',
        price: '$32',
      },
      {
        name: 'Lobster Risotto',
        description: 'Creamy arborio rice with fresh lobster and parmesan',
        price: '$38',
      },
      {
        name: 'Mushroom Ravioli',
        description: 'Handmade pasta with wild mushrooms and sage brown butter',
        price: '$28',
      },
    ],
    desserts: [
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with vanilla ice cream',
        price: '$10',
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic French custard with caramelized sugar',
        price: '$9',
      },
      {
        name: 'Tiramisu',
        description: 'Traditional Italian dessert with espresso and mascarpone',
        price: '$11',
      },
      {
        name: 'Berry Tart',
        description: 'Fresh seasonal berries with vanilla cream',
        price: '$10',
      },
    ],
    beverages: [
      {
        name: 'House Red Wine',
        description: 'Selection of premium red wines',
        price: '$12',
      },
      {
        name: 'House White Wine',
        description: 'Selection of premium white wines',
        price: '$12',
      },
      {
        name: 'Craft Cocktails',
        description: 'Mixologist curated cocktails',
        price: '$14',
      },
      {
        name: 'Specialty Coffee',
        description: 'Espresso, cappuccino, or latte',
        price: '$5',
      },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, each prepared with the
            finest ingredients and utmost care
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'bg-white text-stone-700 hover:bg-stone-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-stone-900">{item.name}</h3>
                <span className="text-xl font-bold text-amber-600">{item.price}</span>
              </div>
              <p className="text-stone-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-stone-500 mb-4">
            Menu items and prices subject to change
          </p>
          <a
            href="#reservations"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-700 transition-colors"
          >
            Reserve Your Table
          </a>
        </div>
      </div>
    </section>
  );
}

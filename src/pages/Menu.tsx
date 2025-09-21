import React, { useState } from 'react';
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}
export function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const menuItems: MenuItem[] = [
  // Bread
  {
    id: 1,
    name: 'Sourdough Bread',
    description: 'Traditional sourdough with a crispy crust and soft interior',
    price: '$6.00',
    image: 'https://images.unsplash.com/photo-1585478259715-4d3f99f57f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'bread'
  }, {
    id: 2,
    name: 'Multigrain Loaf',
    description: 'Hearty loaf with a blend of nutritious grains and seeds',
    price: '$7.50',
    image: 'https://images.unsplash.com/photo-1551278889-ff28f5d54935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'bread'
  }, {
    id: 3,
    name: 'Baguette',
    description: 'Classic French bread with a crispy exterior and light interior',
    price: '$5.00',
    image: 'https://images.unsplash.com/photo-1603379954992-24af6d9b9a47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'bread'
  },
  // Pastries
  {
    id: 4,
    name: 'Chocolate Croissant',
    description: 'Flaky pastry filled with rich chocolate',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'pastries'
  }, {
    id: 5,
    name: 'Almond Croissant',
    description: 'Buttery croissant filled with almond cream and topped with sliced almonds',
    price: '$4.75',
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'pastries'
  }, {
    id: 6,
    name: 'Cinnamon Roll',
    description: 'Soft roll with cinnamon sugar and cream cheese frosting',
    price: '$4.25',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'pastries'
  },
  // Cakes
  {
    id: 7,
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with smooth ganache frosting',
    price: '$38.00',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cakes'
  }, {
    id: 8,
    name: 'Carrot Cake',
    description: 'Moist cake with carrots, walnuts, and cream cheese frosting',
    price: '$36.00',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cakes'
  }, {
    id: 9,
    name: 'Strawberry Shortcake',
    description: 'Light vanilla cake with fresh strawberries and whipped cream',
    price: '$40.00',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cakes'
  },
  // Cookies
  {
    id: 10,
    name: 'Chocolate Chip Cookie',
    description: 'Classic cookie with semi-sweet chocolate chips',
    price: '$2.50',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cookies'
  }, {
    id: 11,
    name: 'Oatmeal Raisin Cookie',
    description: 'Chewy cookie with oats, raisins, and a hint of cinnamon',
    price: '$2.50',
    image: 'https://images.unsplash.com/photo-1490567674331-72de84996cdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cookies'
  }, {
    id: 12,
    name: 'Macaron',
    description: 'Delicate French cookie with a variety of fillings',
    price: '$3.00',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'cookies'
  }];
  const categories = [{
    id: 'all',
    name: 'All Items'
  }, {
    id: 'bread',
    name: 'Bread'
  }, {
    id: 'pastries',
    name: 'Pastries'
  }, {
    id: 'cakes',
    name: 'Cakes'
  }, {
    id: 'cookies',
    name: 'Cookies'
  }];
  const filteredItems = activeCategory === 'all' ? menuItems : menuItems.filter(item => item.category === activeCategory);
  return <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-peach bg-opacity-30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brown text-center mb-6">
            Our Menu
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Explore our selection of freshly baked goods made with the finest
            ingredients
          </p>
        </div>
      </section>
      {/* Menu Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-6 py-2 rounded-full transition-all ${activeCategory === category.id ? 'bg-brown text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
      </section>
      {/* Menu Items */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-brown">
                      {item.name}
                    </h3>
                    <span className="font-bold text-pink">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Special Orders */}
      <section className="py-16 mt-8 bg-mint bg-opacity-30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-brown mb-4">
            Special Orders
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Need a custom cake for a special occasion? Want to place a large
            order for an event? We're happy to accommodate special requests with
            advance notice.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us for Special Orders
          </a>
        </div>
      </section>
    </div>;
}
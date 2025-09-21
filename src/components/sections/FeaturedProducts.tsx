import React, { useEffect } from 'react';
import { ProductCard } from '../ui/ProductCard';
export function FeaturedProducts() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const reveal = () => {
      revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
  const products = [{
    id: 1,
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Chocolate Croissant',
    description: 'Flaky pastry filled with rich chocolate',
    price: '$4.50'
  }, {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Blueberry Muffin',
    description: 'Moist muffin packed with fresh blueberries',
    price: '$3.75'
  }, {
    id: 3,
    image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Strawberry Tart',
    description: 'Buttery crust with fresh strawberries and cream',
    price: '$5.25'
  }, {
    id: 4,
    image: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Sourdough Bread',
    description: 'Traditional sourdough with a crispy crust',
    price: '$6.00'
  }, {
    id: 5,
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Cinnamon Roll',
    description: 'Soft roll with cinnamon sugar and cream cheese frosting',
    price: '$4.25'
  }, {
    id: 6,
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    name: 'Vanilla Cupcake',
    description: 'Light vanilla cake with buttercream frosting',
    price: '$3.50'
  }];
  return <section className="py-16 bg-mint bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown text-center mb-4">
          Our Featured Products
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Handcrafted with the finest ingredients and baked fresh daily
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => <div key={product.id} className="reveal">
              <ProductCard {...product} />
            </div>)}
        </div>
      </div>
    </section>;
}
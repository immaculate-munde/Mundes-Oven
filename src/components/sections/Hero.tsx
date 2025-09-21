import React from 'react';
import { Button } from '../ui/Button';
export function Hero() {
  return <section className="h-screen relative flex items-center justify-center" style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          Munde's Oven
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Delicious baked goods made with love
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button to="/menu" variant="primary">
            Explore Menu
          </Button>
          <Button to="/contact" variant="secondary">
            Order Now
          </Button>
        </div>
      </div>
    </section>;
}
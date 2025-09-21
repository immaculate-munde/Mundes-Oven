import React from 'react';
import { Button } from '../ui/Button';
export function AboutPreview() {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 reveal">
            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Bakers at work" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="lg:w-1/2 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown mb-4">
              About Munde's Oven
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Munde's Oven is a family-owned bakery dedicated
              to creating delicious, high-quality baked goods using traditional
              recipes and the finest ingredients. Our passionate team of bakers
              wake up at dawn every day to ensure our products are always fresh
              and delightful.
            </p>
            <p className="text-gray-600 mb-6">
              We believe that baking is an art form that brings joy and comfort
              to people's lives. From our signature sourdough bread to our
              decadent pastries, every item is crafted with love and attention
              to detail.
            </p>
            <Button to="/about" variant="primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>;
}
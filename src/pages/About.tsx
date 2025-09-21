import React from 'react';
import { Button } from '../components/ui/Button';
export function About() {
  return <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-mint bg-opacity-30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brown text-center mb-6">
            Our Story
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Learn about our journey, our passion for baking, and the people
            behind Munde's Oven
          </p>
        </div>
      </section>
      {/* Our Beginning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 reveal">
              <img src="https://images.unsplash.com/photo-1591118563809-3240c5f35783?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Bakery beginnings" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="lg:w-1/2 reveal">
              <h2 className="text-3xl font-serif font-bold text-brown mb-4">
                Our Beginning
              </h2>
              <p className="text-gray-600 mb-4">
                Munde's Oven was founded in 2010 by Jane Munde, a passionate
                baker with a dream to create a warm, welcoming space where
                people could enjoy fresh, high-quality baked goods made with
                love and attention to detail.
              </p>
              <p className="text-gray-600">
                What started as a small operation with just three recipes has
                grown into a beloved neighborhood bakery offering dozens of
                delicious treats. Through the years, our commitment to quality
                ingredients and traditional baking methods has never wavered.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="py-16 bg-peach bg-opacity-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-brown text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md reveal">
              <h3 className="text-xl font-serif font-bold text-brown mb-3">
                Quality
              </h3>
              <p className="text-gray-600">
                We use only the finest ingredients, sourced locally whenever
                possible, to create our delicious baked goods. No shortcuts, no
                compromises.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md reveal">
              <h3 className="text-xl font-serif font-bold text-brown mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                We're proud to be part of our local community. We support local
                farmers, participate in community events, and strive to create a
                welcoming space for all.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md reveal">
              <h3 className="text-xl font-serif font-bold text-brown mb-3">
                Tradition
              </h3>
              <p className="text-gray-600">
                We honor traditional baking methods while embracing innovation.
                Many of our recipes have been passed down through generations
                and perfected over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-brown text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center reveal">
              <div className="mb-4 overflow-hidden rounded-full">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Jane Munde" className="w-48 h-48 object-cover mx-auto rounded-full" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brown">
                Jane Munde
              </h3>
              <p className="text-pink">Founder & Head Baker</p>
            </div>
            <div className="text-center reveal">
              <div className="mb-4 overflow-hidden rounded-full">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Mark Johnson" className="w-48 h-48 object-cover mx-auto rounded-full" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brown">
                Mark Johnson
              </h3>
              <p className="text-pink">Pastry Chef</p>
            </div>
            <div className="text-center reveal">
              <div className="mb-4 overflow-hidden rounded-full">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Sarah Williams" className="w-48 h-48 object-cover mx-auto rounded-full" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brown">
                Sarah Williams
              </h3>
              <p className="text-pink">Bread Specialist</p>
            </div>
            <div className="text-center reveal">
              <div className="mb-4 overflow-hidden rounded-full">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="David Chen" className="w-48 h-48 object-cover mx-auto rounded-full" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brown">
                David Chen
              </h3>
              <p className="text-pink">Cake Decorator</p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-pink bg-opacity-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-brown mb-4">
            Come Visit Us Today!
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Experience the delicious taste of our freshly baked goods and the
            warm atmosphere of our bakery.
          </p>
          <Button to="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </section>
    </div>;
}
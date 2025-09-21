import React, { useEffect, useState } from 'react';
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}
export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const images: GalleryImage[] = [
  // Bread
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1585478259715-4d3f99f57f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Freshly baked sourdough bread',
    category: 'bread'
  }, {
    id: 2,
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Artisan bread loaves',
    category: 'bread'
  }, {
    id: 3,
    src: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Bread making process',
    category: 'bread'
  },
  // Pastries
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Assorted pastries',
    category: 'pastries'
  }, {
    id: 5,
    src: 'https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Almond croissants',
    category: 'pastries'
  }, {
    id: 6,
    src: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Cinnamon rolls',
    category: 'pastries'
  },
  // Cakes
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Chocolate cake',
    category: 'cakes'
  }, {
    id: 8,
    src: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Carrot cake',
    category: 'cakes'
  }, {
    id: 9,
    src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Strawberry shortcake',
    category: 'cakes'
  },
  // Events
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Bakery workshop',
    category: 'events'
  }, {
    id: 11,
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Baking class',
    category: 'events'
  }, {
    id: 12,
    src: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'Holiday special event',
    category: 'events'
  }];
  const categories = [{
    id: 'all',
    name: 'All Photos'
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
    id: 'events',
    name: 'Events'
  }];
  const filteredImages = activeCategory === 'all' ? images : images.filter(image => image.category === activeCategory);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          setSelectedImage(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);
  return <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-pink bg-opacity-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brown text-center mb-6">
            Our Gallery
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Take a look at our delicious creations and special moments
          </p>
        </div>
      </section>
      {/* Gallery Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-6 py-2 rounded-full transition-all ${activeCategory === category.id ? 'bg-brown text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
      </section>
      {/* Gallery Grid */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map(image => <div key={image.id} className="overflow-hidden rounded-lg shadow-md cursor-pointer reveal" onClick={() => setSelectedImage(image)}>
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" />
              </div>)}
          </div>
        </div>
      </section>
      {/* Lightbox */}
      {selectedImage && <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[90vh] object-contain" onClick={e => e.stopPropagation()} />
            <button className="absolute top-4 right-4 bg-white rounded-full p-2" onClick={() => setSelectedImage(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brown">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>}
    </div>;
}
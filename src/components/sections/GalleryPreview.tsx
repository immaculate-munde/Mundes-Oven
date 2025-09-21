import React from 'react';
import { Button } from '../ui/Button';
export function GalleryPreview() {
  const images = [{
    id: 1,
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    alt: 'Assorted pastries'
  }, {
    id: 2,
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    alt: 'Bread loaves'
  }, {
    id: 3,
    src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    alt: 'Chocolate cake'
  }, {
    id: 4,
    src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    alt: 'Cupcakes'
  }, {
    id: 5,
    src: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    alt: 'Cinnamon rolls'
  }, {
    id: 6,
    src: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    alt: 'Macarons'
  }];
  return <section className="py-16 bg-peach bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown text-center mb-4">
          Our Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Take a peek at our delicious creations and special moments
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {images.map(image => <div key={image.id} className="reveal overflow-hidden rounded-lg shadow-md">
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" />
            </div>)}
        </div>
        <div className="text-center">
          <Button to="/gallery" variant="secondary">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>;
}
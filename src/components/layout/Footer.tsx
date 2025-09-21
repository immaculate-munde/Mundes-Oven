import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-mint py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-serif font-bold text-brown mb-2">
              Munde's <span className="text-pink">Oven</span>
            </h3>
            <p className="text-brown">Delicious baked goods made with love</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brown hover:text-pink transition-colors" aria-label="Instagram">
              <InstagramIcon size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-brown hover:text-pink transition-colors" aria-label="Facebook">
              <FacebookIcon size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-brown hover:text-pink transition-colors" aria-label="Twitter">
              <TwitterIcon size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-brown border-opacity-20 pt-6 text-center">
          <p className="text-brown text-sm">
            &copy; {currentYear} Munde's Oven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}
import React from 'react';
import { Link } from 'react-router-dom';
interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  link?: string;
}
export function ProductCard({
  image,
  name,
  description,
  price,
  link = '/menu'
}: ProductCardProps) {
  return <div className="card-hover bg-white rounded-lg overflow-hidden shadow">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-serif font-bold text-brown mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-brown font-bold">{price}</span>
          <Link to={link} className="text-pink hover:text-brown transition-colors text-sm font-medium">
            View Details
          </Link>
        </div>
      </div>
    </div>;
}
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { FeaturedProducts } from '../components/sections/FeaturedProducts';
import { AboutPreview } from '../components/sections/AboutPreview';
import { GalleryPreview } from '../components/sections/GalleryPreview';
import { ContactInfo } from '../components/sections/ContactInfo';
export function Home() {
  return <>
      <Hero />
      <FeaturedProducts />
      <AboutPreview />
      <GalleryPreview />
      <ContactInfo />
    </>;
}
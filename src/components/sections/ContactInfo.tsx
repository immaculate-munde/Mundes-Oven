import React from 'react';
import { ContactForm } from '../ui/ContactForm';
import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon } from 'lucide-react';
export function ContactInfo() {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Have questions or want to place an order? Get in touch with us!
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 reveal">
            <ContactForm />
          </div>
          <div className="lg:w-1/2 reveal">
            <div className="bg-mint bg-opacity-30 p-6 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-serif font-bold text-brown mb-6">
                Visit Our Bakery
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="text-pink mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-brown">Location</h4>
                    <p className="text-gray-600">
                      123 Bakery Street
                      <br />
                      Sweet Town, CA 90210
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="text-pink mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-brown">Opening Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 7:00 AM - 7:00 PM
                      <br />
                      Saturday: 8:00 AM - 6:00 PM
                      <br />
                      Sunday: 8:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="text-pink mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-brown">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="text-pink mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-brown">Email</h4>
                    <p className="text-gray-600">info@mundesoven.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
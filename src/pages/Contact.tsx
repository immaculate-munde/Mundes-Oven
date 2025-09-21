import React from 'react';
import { ContactForm } from '../components/ui/ContactForm';
import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
export function Contact() {
  return <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-mint bg-opacity-30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brown text-center mb-6">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Get in touch with us for questions,
            orders, or feedback.
          </p>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-brown mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Have questions about our products or want to place a special
                order? Fill out the form below and we'll get back to you as soon
                as possible.
              </p>
              <ContactForm />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-brown mb-6">
                Visit Our Bakery
              </h2>
              <div className="bg-peach bg-opacity-30 p-6 rounded-lg shadow-md mb-8">
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
              <h3 className="text-2xl font-serif font-bold text-brown mb-4">
                Connect With Us
              </h3>
              <p className="text-gray-600 mb-4">
                Follow us on social media for updates, special offers, and
                behind-the-scenes content.
              </p>
              <div className="flex space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-brown hover:text-pink transition-colors">
                  <InstagramIcon size={24} className="mr-2" />
                  <span>@mundesoven</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-brown hover:text-pink transition-colors">
                  <FacebookIcon size={24} className="mr-2" />
                  <span>MundesOven</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-brown hover:text-pink transition-colors">
                  <TwitterIcon size={24} className="mr-2" />
                  <span>@mundesoven</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-brown text-center mb-8">
            Find Us
          </h2>
          <div className="h-96 bg-gray-300 rounded-lg shadow-md overflow-hidden">
            {/* In a real project, you would embed a Google Map here */}
            <div className="w-full h-full flex items-center justify-center bg-mint bg-opacity-30">
              <div className="text-center">
                <MapPinIcon size={48} className="text-pink mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-brown">
                  Munde's Oven
                </h3>
                <p className="text-gray-600">
                  123 Bakery Street, Sweet Town, CA 90210
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
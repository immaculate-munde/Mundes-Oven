import React, { useState } from 'react';
import { Button } from './Button';
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  return <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      {isSubmitted && <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          Thank you for your message! We'll get back to you soon.
        </div>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-brown font-medium mb-1">
          Name
        </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-brown font-medium mb-1">
          Email
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-brown font-medium mb-1">
          Message
        </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink" />
      </div>
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>;
}
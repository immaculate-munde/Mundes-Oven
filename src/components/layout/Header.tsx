import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Menu',
    path: '/menu'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl md:text-3xl font-serif font-bold text-brown">
            Munde's <span className="text-pink">Oven</span>
          </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => <Link key={link.name} to={link.path} className={`nav-link ${location.pathname === link.path ? 'text-pink' : ''}`}>
              {link.name}
            </Link>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-brown" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col py-4">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`nav-link py-2 px-6 ${location.pathname === link.path ? 'text-pink' : ''}`}>
                {link.name}
              </Link>)}
          </nav>
        </div>}
    </header>;
}
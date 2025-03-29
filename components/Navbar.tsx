"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="font-greatVibes text-3xl text-primary">Brunchy DZ</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/stores" className="nav-link">
              Stores
            </Link>
            <Link href="/menu" className="nav-link">
              Menu
            </Link>
            <Link href="/reservations" className="nav-link">
              Reservations
            </Link>
            <Link href="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <div className="px-4 py-2 space-y-2">
              <Link
                href="/stores"
                className="block py-2 text-primary hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Stores
              </Link>
              <Link
                href="/menu"
                className="block py-2 text-primary hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                href="/reservations"
                className="block py-2 text-primary hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservations
              </Link>
              <Link
                href="/gallery"
                className="block py-2 text-primary hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-primary hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
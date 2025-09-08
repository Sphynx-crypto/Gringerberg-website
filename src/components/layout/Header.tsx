import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">É</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-serif font-semibold text-primary">
                L'écurie du Gringerberg
              </span>
              <p className="text-xs text-neutral-900 -mt-1">La nature à cheval</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive(item.href) ? 'text-primary border-b-2 border-primary' : 'text-neutral-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/infos"
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Nous contacter</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-900 hover:text-primary transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-primary ${
                    isActive(item.href) ? 'text-primary bg-primary/5' : 'text-neutral-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:0778708112"
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-primary hover:bg-primary/5 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>07 78 70 81 12</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
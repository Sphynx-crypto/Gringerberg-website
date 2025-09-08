import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">É</span>
              </div>
              <div>
                <span className="text-xl font-serif font-semibold">
                  L'écurie du Gringerberg
                </span>
                <p className="text-sm text-gray-400 -mt-1">La nature à cheval</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Notre écurie vous accueille pour des balades à cheval en pleine nature et propose des pensions de qualité pour le bien-être de vos compagnons.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-gray-300 text-sm">
                  150 rue Brühl<br />
                  57915 Woustviller
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:0778708112" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  07 78 70 81 12
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:yannick.faypam@hotmail.fr" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  yannick.faypam@hotmail.fr
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Nos services
              </Link>
              <Link to="/a-propos" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                À propos
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Contact
              </Link>
              <Link to="/mentions" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Mentions légales
              </Link>
              <Link to="/cookies" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Politique de cookies
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 L'écurie du Gringerberg. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Mentions légales
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { schoolInfo } from '../data/content';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Activities', path: '/activities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">R&R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">{schoolInfo.name}</span>
                <span className="text-sm text-gray-400">Preschool</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A nurturing preschool where children learn through play, creativity, and care. Building strong foundations for lifelong learning.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {schoolInfo.address.line1}<br />
                  {schoolInfo.address.line2}<br />
                  {schoolInfo.address.line3}<br />
                  {schoolInfo.address.city}, {schoolInfo.address.state} {schoolInfo.address.pin}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href={`tel:${schoolInfo.phone}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {schoolInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@rhythmnrhymez.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@rhythmnrhymez.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Working Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p className="font-medium text-white mb-1">Monday - Saturday</p>
                  <p>8:00 AM onwards</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p className="font-medium text-white mb-1">Sunday</p>
                  <p>Closed</p>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-bold text-xl">{schoolInfo.rating}</p>
                  <p className="text-xs text-gray-400">{schoolInfo.reviews} Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {schoolInfo.name} Preschool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

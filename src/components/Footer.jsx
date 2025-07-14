import React from 'react';
import { GraduationCap, Facebook, MessageCircle, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-fredoka-one">Harmony Heights Montessori Academy, Inc.</h3>
                <p className="text-gray-400 text-sm font-fredoka">Montessori Education Excellence</p>
              </div>
            </div>
            <p className="font-fredoka text-gray-300 mb-6 leading-relaxed">
              Committed to nurturing young minds and building character through exceptional 
              Montessori education, innovative programs, and a supportive community environment.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://messenger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-500 p-3 rounded-lg transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-fredoka-one mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Academics', 'Gallery', 'Faculty'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="font-fredoka text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-fredoka-one mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="font-fredoka text-gray-300 text-sm">
                  123 Education Street<br />
                  Learning City, LC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="font-fredoka text-gray-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="font-fredoka text-gray-300 text-sm">info@harmonyheightsmontessori.edu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-fredoka text-gray-400 text-sm">
              © {currentYear} Harmony Heights Montessori Academy, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="font-fredoka text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="font-fredoka text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#accessibility" className="font-fredoka text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
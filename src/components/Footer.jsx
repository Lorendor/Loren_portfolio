import React from 'react';
import { social } from '../data/social.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Projects', href: '/projects' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand info */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <span className="text-white text-xl font-semibold">YourName</span>
            </div>
            <p className="text-gray-400 text-base">
              Building digital experiences that matter.
            </p>
            <div className="flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-8 w-8 hover:scale-110 transition-all duration-300 hover:text-green " aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-400 hover:text-green transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Contact
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="mailto:hello@example.com"
                    className="text-base text-gray-400 hover:text-green transition-colors"
                  >
                    lorenbjelokosic1@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/cnJd3Z1YUyMNhfav7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-400 hover:text-green transition-colors"
                  >
                    Dubrovnik, Croatia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {currentYear} Loren Bjelokosic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
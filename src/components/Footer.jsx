import React from 'react';
import { social } from '../data/social.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigation = {
    main: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Work', href: '#work' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="dark:bg-darkgray bg-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="dark:text-white text-darkgray text-xl font-semibold">Loren Bjelokosic</span>
            </div>
            <p className="text-darkgray dark:text-white text-base">
              Building digital experiences that matter.
            </p>
            <div className="flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-darkgray dark:text-white hover:text-purple transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-8 w-8 hover:scale-110 transition-all duration-300 hover:text-purple " aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-darkgray dark:text-white tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-7 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-darkgray dark:text-white hover:text-purple transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-darkgray dark:text-white tracking-wider uppercase">
                Contact
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="mailto:lorenbjelokosic1@gmail.com"
                    className="text-base text-darkgray dark:text-white hover:text-purple transition-colors"
                  >
                    lorenbjelokosic1@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/cnJd3Z1YUyMNhfav7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-darkgray dark:text-white hover:text-purple transition-colors"
                  >
                    Dubrovnik, Croatia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 border-t border-darkgray dark:border-white pt-8">
          <p className="text-base text-darkgray dark:text-white text-center">
            &copy; {currentYear} Loren Bjelokosic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
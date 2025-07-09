import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const LightMod = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border-2 border-purple bg-white dark:bg-darkgray transition-colors duration-300 hover:bg-gray-200/10"
      aria-label="Toggle light/dark mode"
    >
      {theme === 'light' ? (
        <FiSun size={24} className="text-yellow-500" />
      ) : (
        <FiMoon size={24} className="text-gray-200" />
      )}
    </button>
  );
};

export default LightMod;

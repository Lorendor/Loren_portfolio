import React, { useState, useEffect } from 'react'

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    if (!isVisible) return null;
  
    return (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 bg-darkgray dark:bg-white hover:bg-purple text-white dark:text-darkgray p-3 rounded-full shadow-lg transition-all duration-300"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-7.5 7.5m7.5-7.5l7.5 7.5" />
        </svg>
      </button>
    );
  };

export default ScrollTopButton
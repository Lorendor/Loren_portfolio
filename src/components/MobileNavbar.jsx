import { useState } from 'react';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false); // Close menu on tab click
    
    // Smooth scroll to the section
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-4 left-4 z-50 flex flex-col justify-center items-center w-12 h-12 bg-black/80 rounded-full border border-white/10 shadow-lg focus:outline-none hover:bg-gray-200"
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-label="Open menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}/>
        <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}/>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}/>
      </button>

      {/* Overlay with blur */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="fixed top-0 left-0 right-0 p-0 pt-0 z-50 animate-slideDown">
          <div className="mx-4 mt-4 rounded-2xl shadow-2xl bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/30 backdrop-blur-md">
              <span className="font-bold text-lg text-white tracking-wide">Loren's Portfolio</span>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200/10 text-white focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            {/* Tabs */}
            <ul className="flex flex-col gap-1 py-2">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    className={`w-full flex items-center gap-4 px-6 py-4 text-lg rounded-lg transition-all duration-200 font-medium
                      ${activeTab === tab.id ? 'text-white bg-purple-600 shadow-md' : 'text-gray-200 hover:bg-gray-200/10 hover:text-white'}`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <span>{tab.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {/* Slide-down animation keyframes */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.35s cubic-bezier(.25,.8,.25,1);
        }
      `}</style>
    </>
  );
};

export default MobileNavbar;
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tabPositions, setTabPositions] = useState({});
  const navRef = useRef(null);

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  // Update tab positions on resize
  useEffect(() => {
    const updateTabPositions = () => {
      if (navRef.current) {
        const positions = {};
        const buttons = navRef.current.querySelectorAll('button');
        buttons.forEach((button, index) => {
          const rect = button.getBoundingClientRect();
          positions[tabs[index].id] = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          };
        });
        setTabPositions(positions);
      }
    };

    updateTabPositions();
    window.addEventListener('resize', updateTabPositions);
    return () => window.removeEventListener('resize', updateTabPositions);
  }, []);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Calculate transform style based on mouse position
  const getTransformStyle = (tabId) => {
    if (hoveredTab !== tabId || !tabPositions[tabId]) {
      return {
        transform: 'translate(0px, 0px)',
        transition: 'transform 0.3s ease-out',
      };
    }

    const tabCenter = tabPositions[tabId];
    const deltaX = mousePosition.x - tabCenter.x;
    const deltaY = mousePosition.y - tabCenter.y;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 200;
    const moveDistance = Math.min(distance * 0.25, maxDistance);
    
    const directionX = deltaX / distance;
    const directionY = deltaY / distance;
    
    const translateX = directionX * moveDistance;
    const translateY = directionY * moveDistance;

    return {
      transform: `translate(${translateX}px, ${translateY}px)`,
      transition: 'transform 0.2s ease-out',
    };
  };

  return (
    <nav 
      ref={navRef}
      className="fixed bottom-8 md:bottom-8 left-1/2 transform -translate-x-1/2 px-3 md:px-6 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 z-50 shadow-xl"
      onMouseMove={handleMouseMove}
    >
      <div className="flex justify-between items-center gap-4 md:gap-8 mx-auto py-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            style={getTransformStyle(tab.id)}
            className={`
              relative flex flex-col items-center font-medium px-2 md:px-4 py-1 md:py-2 rounded-full 
              transition-all duration-300 ease-out
              ${activeTab === tab.id 
                ? 'text-black bg-green shadow-md' 
                : 'text-white hover:gradient-to-r from-green-400 to-green-500 hover:bg-white/5'
              }
              ${hoveredTab === tab.id ? 'scale-105' : 'scale-100'}
            `}
          >
            <span className="text-md md:text-md whitespace-nowrap">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
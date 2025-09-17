import { useState, useRef, useEffect } from 'react';
import MobileNavbar from './MobileNavbar';

// Custom hook to detect mobile screen
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

const Navbar = () => {
  const isMobile = useIsMobile();

  // Desktop hooks
  const [activeTab, setActiveTab] = useState('home');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [hoveredTabMouse, setHoveredTabMouse] = useState({ x: 0, y: 0 });
  const [buttonRects, setButtonRects] = useState([]);
  const navRef = useRef(null);
  const buttonRefs = useRef([]);

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => document.getElementById(tab.id));
      const scrollPosition = window.scrollY + 150; // Offset for navbar

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveTab(tabs[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateRects = () => {
      setButtonRects(
        buttonRefs.current.map((ref) =>
          ref ? ref.getBoundingClientRect() : null
        )
      );
    };
    updateRects();
    window.addEventListener('resize', updateRects);
    return () => window.removeEventListener('resize', updateRects);
  }, []);

  // Calculate 3D transform style based on mouse position relative to button
  const getTransformStyle = (tabId, buttonRect) => {
    if (hoveredTab !== tabId || !buttonRect) {
      return {
        transform: 'perspective(600px) translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: 'transform 0.4s cubic-bezier(.25,.8,.25,1)',
      };
    }

    // Mouse position relative to button center
    const relX = hoveredTabMouse.x - buttonRect.width / 2;
    const relY = hoveredTabMouse.y - buttonRect.height / 2;
    // Normalize to [-1, 1] range
    const normX = Math.max(-1, Math.min(1, relX / (buttonRect.width / 2)));
    const normY = Math.max(-1, Math.min(1, relY / (buttonRect.height / 2)));
    // Set max values
    const maxRotate = 15; // degrees
    const maxTranslate = 18; // px
    // Calculate rotation and translation
    const rotateY = normX * maxRotate;
    const rotateX = -normY * maxRotate;
    const translateX = normX * maxTranslate;
    const translateY = normY * maxTranslate;

    return {
      transform: `perspective(600px) translate(${translateX}px, ${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)` ,
      transition: 'transform 0.18s cubic-bezier(.25,.8,.25,1)',
      zIndex: 2,
    };
  };

  if (isMobile) {
    return <MobileNavbar />;
  }

  return (
    <nav 
      ref={navRef}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 px-3 md:px-6 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 z-50 shadow-xl"
    >
      <div className="flex items-center justify-between gap-2 md:gap-6 mx-auto py-1 w-full">
        {/* Navbar buttons */}
        <div className="flex justify-between items-center gap-4 md:gap-8">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              ref={el => buttonRefs.current[idx] = el}
              onClick={() => {
                setActiveTab(tab.id);
                scrollToSection(tab.id);
              }}
              onMouseEnter={(e) => {
                setHoveredTab(tab.id);
                if (buttonRects[idx]) {
                  setHoveredTabMouse({
                    x: e.clientX - buttonRects[idx].left,
                    y: e.clientY - buttonRects[idx].top,
                  });
                }
              }}
              onMouseMove={(e) => {
                if (buttonRects[idx]) {
                  setHoveredTab(tab.id);
                  setHoveredTabMouse({
                    x: e.clientX - buttonRects[idx].left,
                    y: e.clientY - buttonRects[idx].top,
                  });
                }
              }}
              onMouseLeave={() => setHoveredTab(null)}
              style={getTransformStyle(tab.id, buttonRects[idx])}
              className={`
                relative flex flex-col items-center font-medium px-2 md:px-4 py-1 md:py-2 rounded-full 
                transition-all duration-300 ease-out cursor-pointer
                ${activeTab === tab.id 
                  ? 'text-white bg-purple shadow-md' 
                  : 'text-white hover:bg-white/20'
                }
              `}
            >
              <span className="text-md md:text-md whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
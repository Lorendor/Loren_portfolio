import React from 'react';
import { techs } from '../../data/techs.jsx';

const HeroPicture = () => {
  return (
    <div className="relative mb-10 lg:mb-0">
      <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-90 md:h-90 mx-auto">
        {/* Orbiting Icons */}
        {techs.map((tech, index) => {
          const angle = (index / techs.length) * 360;
          const radius = 110;
          return (
            <div
              key={tech.name}
              className="absolute left-1/2 top-1/2 animate-orbit text-2xl sm:text-3xl opacity-80 hover:opacity-100 hover:scale-110 transition-all"
              style={{
                '--orbit-angle': `${angle}deg`,
                '--orbit-radius': `${radius}px`,
                'animationDelay': `${index * 0.5}s`,
              }}
            >
              <div
                style={{
                  transform: `rotate(var(--orbit-angle)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--orbit-angle)))`,
                }}
              >
                <i className={tech.icon} />
              </div>
            </div>
          );
        })}

        {/* Hero Image */}
        <div className="absolute inset-6 sm:inset-8 bg-gradient-to-br from-purple to-lightpurple dark:from-darkgray dark:to-purple rounded-full flex items-center justify-center border-4 border-darkpurple dark:border-purple-400/40 overflow-hidden">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPicture;
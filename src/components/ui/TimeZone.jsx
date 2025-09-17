import React, { useState, useEffect } from 'react';

const CroatiaTimezone = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: 'Europe/Zagreb',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      timeZone: 'Europe/Zagreb',
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  return (
    <a
      href="https://maps.app.goo.gl/cnJd3Z1YUyMNhfav7"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-current no-underline group"
      title="Current time in Dubrovnik, Croatia"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-10 w-24 flex items-center justify-center">
        
        <div className={`absolute inset-0 rounded-md bg-gradient-to-br ${isHovered ? 'bg-white dark:bg-darkgray/80' : 'bg-white dark:bg-darkgray'} shadow-md transition-all duration-500`}></div>
        
        <div className="relative z-10 text-center">
          <div className={`text-xs font-bold ${isHovered ? 'text-purple dark:text-white' : 'text-black dark:text-gray-200'} transition-colors duration-300`}>
            {formatTime(currentTime)}
          </div>
          <div className={`text-[0.6rem] ${isHovered ? 'text-purple dark:text-white' : 'text-black dark:text-gray-300'} transition-colors duration-300`}>
            {formatDate(currentTime)}
          </div>
        </div>
        
        <div className={`absolute inset-0 rounded-md border-2 ${isHovered ? 'border-black dark:border-white' : 'border-purple dark:border-purple-400'} transition-all duration-500`}></div>
      </div>

      <span className="text-white/80 text-sm"> - </span>
      <span className="text-md font-bold hover:text-purple text-black dark:text-white transition-colors duration-300 group-hover:text-purple">
        Dubrovnik, Croatia
      </span>
    </a>
  );
};

export default CroatiaTimezone;
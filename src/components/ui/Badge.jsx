import React from "react";
import TimeZone from "./TimeZone";

const Badge = () => {
  return (
    <div className="flex items-center justify-end gap-10 font-bold pt-2 pr-10 relative z-20">
      <div className="flex items-center text-black dark:bg-white/10 dark:text-white bg-white/15 backdrop-blur-md shadow-purple/30 border font-inter border-white/10 rounded-full px-5 py-2 gap-4 w-fit shadow-lg hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300">
        <span className="font-medium text-sm">OPEN TO WORK</span>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-4 w-4 -top-1 -left-1 animate-ping rounded-full bg-green opacity-80"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green shadow-sm"></span>
        </span>
      </div>
    </div>
  );
};

export default Badge;
import React from "react";
import TimeZone from "./TimeZone";

const Badge = () => {
  return (
    <div className="flex items-center justify-end gap-10 font-bold pt-2 pr-10 relative z-20">
      <a>
        <TimeZone/>
      </a>
      <div className="flex items-center text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 gap-4 w-fit shadow-lg hover:bg-white/15 transition-all duration-300">
        <span className="font-medium text-sm">OPEN TO WORK</span>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-4 w-4 -top-1 -left-1 animate-ping rounded-full bg-green-400 opacity-80"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 shadow-sm"></span>
        </span>
      </div>
    </div>
  );
};

export default Badge;
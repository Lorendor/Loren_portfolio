import React from "react";

const Badge = () => {
  return (
    <div className="flex items-center justify-end gap-10 font-bold pt-2 pr-10 relative z-20">
      <a
        href="https://maps.app.goo.gl/cnJd3Z1YUyMNhfav7"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-current no-underline group"
        title="Croatia"
      >
        <img
          src="src/assets/croatia.png"
          width="20"
          alt="Croatian Flag"
          className="h-7 w-12 object-cover rounded hover:scale-110 transition-all duration-300 shadow-lg"
        />
        <span className="text-white/80 text-sm"> - </span>
        <span className="text-md font-medium hover:text-green-400 text-white transition-colors duration-300 group-hover:text-green-400">Dubrovnik,Croatia</span>
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
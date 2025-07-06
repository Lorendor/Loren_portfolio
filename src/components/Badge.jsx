import React from "react";

const Badge = () => {
  return (
    <div className="flex items-center justify-end gap-10 font-bold pt-10 pr-10">
      <a
        href="https://maps.app.goo.gl/cnJd3Z1YUyMNhfav7"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-current no-underline"
        title="Croatia"
      >
        <img
          src="src/assets/croatia.png"
          width="20"
          alt="Croatian Flag"
          className="h-7 w-12 object-cover rounded hover:scale-110 transition-all duration-300"
        />
        <span className="text-white text-sm"> - </span>
        <span className="text-md font-medium hover:text-green-400 text-white ">Dubrovnik,Croatia</span>
      </a>

      <div className="flex items-center text-white border border-white/50 rounded-full px-5 py-1 gap-4 w-fit">
        <span className="font-normal text-md">OPEN TO WORK</span>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-4 w-4 -top-1 -left-1 animate-ping rounded-full bg-green-400 opacity-80"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
      </div>
    </div>
  );
};

export default Badge;
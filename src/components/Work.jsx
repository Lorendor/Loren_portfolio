import React from 'react';

const Work = ({ projects }) => {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row gap-12 bg-darkgray/50 border border-white/20 rounded-xl items-center
                      transition-all duration-500 ease-out hover:shadow-xl hover:shadow-green-500/20
                      group/card transform-gpu hover:-translate-y-1 md:hover:rotate-y-1 md:hover:rotate-x-0.5"
            style={{
              backdropFilter: 'blur(12px)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Image Container */}
            <div className="w-full md:w-1/2 group overflow-hidden rounded-xl">
              <div className="relative h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full rounded-xl shadow-xl transition-transform duration-700 ease-out
                            group-hover/card:scale-105 transform-gpu"
                  style={{
                    transform: 'translateZ(30px)',
                  }}
                />
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Content Container */}
            <div 
              className="w-full md:w-1/2 py-8 px-6 md:pl-12 md:pr-8 transform-gpu"
              style={{
                transform: 'translateZ(40px)',
              }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-green mb-4 transition-colors duration-500 group-hover/card:text-green-300">
                {project.title}
              </h3>
              <p className="text-lg text-green mb-6 leading-relaxed transition-colors duration-500 group-hover/card:text-green-200">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                {/* 3D Button */}
                <a
                  href={project.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center px-8 py-4 bg-gradient-to-br from-green-500 to-green-600 text-white font-semibold rounded-lg overflow-hidden 
                            transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40 group/button
                            transform-gpu hover:translate-z-10"
                >
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-green-400/30 blur-xl scale-0 group-hover/button:scale-100 transition-transform duration-700 ease-out"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-2">
                    {project.links[0].text}
                    <svg 
                      className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                  
                  {/* Pulsing animation */}
                  <div className="absolute inset-0 rounded-lg border-2 border-green-400/50 animate-pulse opacity-0 group-hover/button:opacity-100 transition-opacity duration-500"></div>
                </a>
                
                {/* GitHub icon link (if exists) */}
                {project.links[1] && (
                  <a
                    href={project.links[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/60 text-3xl pl-2 transition-all duration-300 hover:scale-110 transform-gpu"
                    title="View on GitHub"
                  >
                    <i className="devicon-github-plain"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
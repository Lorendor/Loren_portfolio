import React, { useState } from 'react'; // Add useState import
import { ExtraProjects } from '../data/ExtraProjects';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? ExtraProjects : ExtraProjects.slice(0, 5);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h1 className='text-3xl sm:text-4xl md:text-4xl font-inter font-bold text-black dark:text-white mb-6 text-center px-4'>Additional Projects & Research</h1>
      <div className="w-40 h-1.5 bg-gradient-to-r from-purple to-darkpurple rounded-full mx-auto mb-30"></div>
      
      {/* Change ExtraProjects to displayedProjects here ↓ */}
      <div className="grid grid-cols-1 gap-4">
        {displayedProjects.map((project) => ( // Fixed: use displayedProjects instead of ExtraProjects
          <div 
            key={project.id}
            className="bg-white dark:bg-darkgray/50 rounded-xl p-4 border border-gray-100 dark:border-purple/20 dark:hover:border-purple/60 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
              <h5 className="font-semibold text-gray-800 dark:text-white flex-1">
                {project.title}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {project.date}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {ExtraProjects.length > 5 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 rounded-full bg-purple text-white font-medium shadow-md hover:bg-purple/80 transition-all"
          >
            {showAll ? 'See Less' : `See More (+${ExtraProjects.length - 5})`}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
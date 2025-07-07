import React from 'react'
import { techs } from '../data/techs.jsx'

const TechTree = () => {
  return (
    <div className="w-screen h-[60vh] overflow-hidden p-40 flex flex-col items-center justify-center gap-8 bg-white dark:bg-darkgray">
      <div className='flex flex-col items-center justify-center pt-5'>
        <h1 className='text-5xl font-bold text-black dark:text-white'>Tech Tree</h1>
      </div>
      <div className="flex flex-wrap gap-6 pt-4 justify-center max-w-3xl">
        {techs.map((tech, idx) => (
          <div 
            className={`w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center shadow-lg border border-gray/20 transition-all duration-300 ${tech.glow}`}
            key={idx} 
            title={tech.name}
          >
            {tech.logo}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechTree

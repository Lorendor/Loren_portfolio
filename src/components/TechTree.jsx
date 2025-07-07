import React from 'react'
import { techs } from '../data/techs.jsx'

const TechTree = () => {
  return (
    <div className="w-screen h-[40vh] overflow-hidden p-40 flex flex-col items-center justify-center gap-8 bg-darkgray">
      <div className='flex flex-col items-center justify-center pt-5'>
        <h1 className='text-5xl font-bold text-green'>Tech Tree</h1>
      </div>
      <div className="flex flex-wrap gap-6 pt-4 justify-center max-w-2xl">
        {techs.map((tech, idx) => (
          <div 
            className={`w-24 h-24 bg-[#181818] rounded-2xl flex items-center justify-center shadow-lg border border-white/20 transition-all duration-300 ${tech.glow}`}
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

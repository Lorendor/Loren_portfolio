import React from 'react'

const Work = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">My Work</h1>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <img src="/projekt1.jpg" alt="Project 1" className="w-full h-full object-cover" />
          <h2 className="text-2xl font-bold">Project 1</h2>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
      </div>
    </div>
      
  )
}

export default Work
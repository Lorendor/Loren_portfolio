import React from 'react'
import FlipCard from './ui/FlipCard'
import { projects } from '../data/projects'

const Work = () => {
  return (
    <div className='w-full min-h-screen bg-white dark:bg-darkgray flex flex-col items-center justify-center py-20'>
      <h1 className='text-5xl font-work-sans text-black dark:text-white mb-30'>Check out my work</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4'>
        {projects.map((project, index) => (
          <FlipCard
            key={index}
            frontContent={
              <div className="flex flex-col w-full h-full items-center">
                <img
                  src={project.image.replace('/public', '')}
                  alt={`${project.title} Screenshot`}
                  className="rounded-lg w-full h-70 object-fill"
                />
                <div className="flex items-start pt-10 space-x-4">
                  {project.techs.map((tech, techIndex) => (
                    <i 
                      key={techIndex}
                      className={`${tech.icon} colored text-5xl`}
                      title={tech.name}
                    ></i>
                  ))}
                </div>
              </div>
            }
            backContent={
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="font-bold text-center text-lg mb-4">{project.title}</h3>
                  <p className="text-md">
                    {project.description}
                  </p>
                </div>
                <div className="mt-5 space-y-2">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-white hover:text-black"
                    >
                      <i className="devicon-vercel-plain text-3xl mr-2"></i>
                      View website
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-white hover:text-black"
                  >
                    <i className="devicon-github-original text-3xl mr-2"></i>
                    View on GitHub
                  </a>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  )
}

export default Work

import React from 'react'
import FlipCard from './ui/FlipCard'
import { projects } from '../data/projects'

const Work = () => {
  return (
    <div className='w-full min-h-screen bg-white dark:bg-darkgray flex flex-col items-center justify-center py-50 pt-50'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-inter font-bold text-black dark:text-white mb-6 text-center px-4'>Check out my work</h1>
      <div className="w-40 h-1.5 bg-gradient-to-r from-purple to-darkpurple rounded-full mx-auto mb-30"></div>
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
                    tech.icon.startsWith('public/') ? (
                      <img
                        key={techIndex}
                        src={tech.icon.replace('public/', '/')}
                        alt={tech.name}
                        className="w-12 h-12 object-contain"
                        title={tech.name}
                      />
                    ) : (
                      <i 
                        key={techIndex}
                        className={`${tech.icon} colored text-5xl`}
                        title={tech.name}
                      ></i>
                    )
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
                    className="flex items-center justify-center text-white hover:text-black pt-2"
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

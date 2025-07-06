import React from 'react'

const techs = [
  {
    name: 'HTML',
    logo: <i className="devicon-html5-plain colored text-5xl"></i>,
    glow: 'hover-shadow-html-glow'
  },
  {
    name: 'CSS',
    logo: <i className="devicon-css3-plain colored text-5xl"></i>,
    glow: 'hover-shadow-css-glow'
  },
  {
    name: 'JS',
    logo: <i className="devicon-javascript-plain colored text-5xl"></i>,
    glow: 'hover-shadow-js-glow'
  },
  {
    name: 'Typescript',
    logo: <i className="devicon-typescript-plain colored text-5xl"></i>,
    glow: 'hover-shadow-ts-glow'
  },
  {
    name: 'React',
    logo: <i className="devicon-react-original colored text-5xl"></i>,
    glow: 'hover-shadow-react-glow'
  },
  {
    name: 'TailwindCSS',
    logo: <i className="devicon-tailwindcss-plain colored text-5xl"></i>,
    glow: 'hover-shadow-css-glow'
  },
  {
    name: 'Astro',
    logo: <i className="devicon-astro-plain colored text-5xl"></i>,
    glow: 'hover-shadow-js-glow'
  },
  {
    name: 'NPM ',
    logo: <i className="devicon-npm-original-wordmark colored text-5xl"></i>,
    glow: 'hover-shadow-html-glow'
  },
  {
    name: 'MySQL',
    logo: <i className="devicon-mysql-plain colored text-5xl"></i>,
    glow: 'hover-shadow-js-glow'
  },
  {
    name: 'Git',
    logo: <i className="devicon-git-plain colored text-5xl"></i>,
    glow: 'hover-shadow-html-glow'
  },
];

const TechTree = () => {
  return (
    <div className="w-screen h-[40vh] overflow-hidden p-40 flex flex-col items-center justify-center gap-8">
      <div className='flex flex-col items-center justify-center pt-5'>
        <h1 className='text-5xl font-bold text-palegreen'>Tech Tree</h1>
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

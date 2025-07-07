import React from 'react'
import { AnimatedHeading } from './AnimatedHeading'
import Badge from './Badge'
import TimeZone from './TimeZone' 
import HeroPicture from './HeroPicture'
import LightMod from './LightMod'
import { social } from '../data/social.jsx'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen relative overflow-hidden bg-white dark:bg-darkgray px-2 sm:px-4'>
      {/* Mobile: LightMod in top right */}
      <div className=' top-4 right-4'>
        <LightMod />
      </div>
      {/* Top left and right overlays for large screens */}
      <div className="hidden lg:flex w-full absolute top-0 left-0 z-20 justify-between px-8 pt-6 pointer-events-none">
        <div className="pointer-events-auto">
          <TimeZone />
        </div>
        <div className="pointer-events-auto">
          <Badge />
        </div>
      </div>
      {/* Main content container */}
      <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-8 sm:gap-12 z-10 relative w-full pt-24 sm:pt-32'>
        {/* Hero image on the left for large screens */}
        <div className='flex justify-center items-center w-full lg:w-auto'>
          <HeroPicture />
        </div>
        {/* Text content */}
        <div className='text-center lg:text-left max-w-xl w-full px-2 sm:px-0'>
          <AnimatedHeading phrases={["Frontend Developer", "UI Designer", "React Developer"]} />
          <p className='text-black dark:text-white text-base font-inter sm:text-lg mt-4 sm:mt-6 leading-relaxed'>
            I develop visually appealing and user-friendly websites with a strong focus on accessibility, responsiveness and performance.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start'>
            <button className='px-6 sm:px-8 py-3 bg-purple text-white rounded-full font-semibold hover:bg-white hover:text-black border-purple border-2 hover:border-purple transition-all duration-300 transform hover:scale-105 text-sm sm:text-base'>
              Hire me
            </button>
            <button className='px-6 sm:px-8 py-3 border-2 border-purple text-black dark:text-white rounded-full font-semibold hover:border-purple/40 hover:text-white hover:bg-purple transition-all duration-300 text-sm sm:text-base'>
              Download CV
            </button>
          </div>
          {/* Social icons under the buttons */}
          <div className="flex space-x-14 pt-10 justify-center lg:justify-start">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-white hover:text-purple transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-8 w-8 hover:scale-110 transition-all duration-300 hover:text-purple " aria-hidden="true" />
                </a>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

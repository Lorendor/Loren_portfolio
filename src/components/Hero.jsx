import React from 'react'
import { AnimatedHeading } from './AnimatedHeading'
import Badge from './Badge'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen relative overflow-hidden bg-black px-2 sm:px-4'>
      {/* Badge positioned at the top */}
      <div className='absolute top-0 left-0 right-0 z-20 pt-2 sm:pt-4'>
        <Badge />
      </div>

      {/* Main content container */}
      <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-8 sm:gap-12 z-10 relative w-full pt-24 sm:pt-32'>
        
        {/* Text content */}
        <div className='text-center lg:text-left max-w-xl w-full px-2 sm:px-0'>
          <AnimatedHeading phrases={["Frontend Dev", "UI Designer", "React Developer"]} />
          <p className='text-gray-300 text-base sm:text-lg mt-4 sm:mt-6 leading-relaxed'>
            I develop visually appealing and user-friendly websites with a strong focus on accessibility, responsiveness and performance.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start'>
            <button className='px-6 sm:px-8 py-3 bg-gradient-to-r from-green-500 to-green-500 text-black rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 text-sm sm:text-base'>
              View My Work
            </button>
            <button className='px-6 sm:px-8 py-3 border-2 border-green-400/30 text-green-100 rounded-full font-semibold hover:border-green-400/50 hover:text-white hover:bg-green-700/30 transition-all duration-300 text-sm sm:text-base'>
              Get In Touch
            </button>
          </div>
        </div>

        {/* Hero image with animated circle */}
        <div className='relative mb-8 lg:mb-0'>
          {/* Animated rotating circle */}
          <div className='relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80'>
            {/* Outer rotating circle */}
            <div className='absolute inset-0 border-2 border-dashed border-green-400/30 rounded-full animate-spin-slow'></div>
            
            {/* Inner pulsing circle */}
            <div className='absolute inset-4 border border-green-300/40 rounded-full animate-pulse'></div>
            
            {/* Orbiting dots */}
            <div className='absolute inset-0 animate-spin-slow'>
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50'></div>
              <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50'></div>
              <div className='absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50'></div>
              <div className='absolute right-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50'></div>
            </div>
            
            {/* Hero image with profile picture */}
            <div className='absolute inset-6 sm:inset-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full flex items-center justify-center border-4 border-green-400/20 shadow-2xl overflow-hidden'>
              <img
                src="/profile.jpg"
                alt='Profile'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 left-10 sm:left-20 w-2 h-2 bg-green-400 rounded-full animate-bounce'></div>
        <div className='absolute top-40 right-10 sm:right-32 w-1 h-1 bg-emerald-400 rounded-full animate-bounce delay-300'></div>
        <div className='absolute bottom-32 left-10 sm:left-32 w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce delay-700'></div>
        <div className='absolute bottom-20 right-10 sm:right-20 w-1 h-1 bg-teal-400 rounded-full animate-bounce delay-1000'></div>
      </div>
    </div>
  )
}

export default Hero

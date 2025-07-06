import React from 'react'
import { AnimatedHeading } from './AnimatedHeading'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen relative overflow-hidden bg-gradient-to-br from-blackish via-darkblue to-blackish'>
      {/* Animated background circles */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      {/* Main content container */}
      <div className='flex flex-col lg:flex-row items-center justify-center gap-12 z-10 relative'>
        
        {/* Text content */}
        <div className='text-center lg:text-left max-w-2xl'>
          <AnimatedHeading phrases={["Frontend Developer", "UI Designer", "React Developer"]} />
          <p className='text-gray-300 text-lg mt-6 leading-relaxed'>
            Crafting beautiful, responsive web experiences with modern technologies and creative design solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start'>
            <button className='px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25'>
              View My Work
            </button>
            <button className='px-8 py-3 border-2 border-blue-400/30 text-blue-100 rounded-full font-semibold hover:border-blue-400/50 hover:text-white hover:bg-blue-900/30 transition-all duration-300'>
              Get In Touch
            </button>
          </div>
        </div>

        {/* Hero image with animated circle */}
        <div className='relative'>
          {/* Animated rotating circle */}
          <div className='relative w-80 h-80'>
            {/* Outer rotating circle */}
            <div className='absolute inset-0 border-2 border-dashed border-blue-400/30 rounded-full animate-spin-slow'></div>
            
            {/* Inner pulsing circle */}
            <div className='absolute inset-4 border border-blue-300/40 rounded-full animate-pulse'></div>
            
            {/* Orbiting dots */}
            <div className='absolute inset-0 animate-spin-slow'>
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50'></div>
              <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50'></div>
              <div className='absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50'></div>
              <div className='absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50'></div>
            </div>
            
            {/* Hero image placeholder */}
            <div className='absolute inset-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border-4 border-blue-400/20 shadow-2xl'>
              <div className='text-center text-blue-100'>
                <div className='w-24 h-24 bg-gradient-to-br from-green to-palegreen rounded-full mx-auto mb-4 flex items-center justify-center'>
                  <svg className='w-12 h-12 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
                  </svg>
                </div>
                <p className='text-sm font-medium'>Add Your Photo</p>
                <p className='text-xs opacity-50'>500x500px recommended</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce'></div>
        <div className='absolute top-40 right-32 w-1 h-1 bg-indigo-400 rounded-full animate-bounce delay-300'></div>
        <div className='absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-700'></div>
        <div className='absolute bottom-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-1000'></div>
      </div>
    </div>
  )
}

export default Hero

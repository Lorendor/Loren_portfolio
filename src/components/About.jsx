import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen dark:bg-darkgray bg-white'>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-work-sans text-black dark:text-white'>About</h1>
        <p className='text-lg font-work-sans pt-4 text-black dark:text-white'>
          I am a software engineer with a passion for building web applications.
        </p>
      </div>
    </div>
  )
}

export default About
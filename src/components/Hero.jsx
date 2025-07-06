import React from 'react'
import { AnimatedHeading } from './AnimatedHeading'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-start h-screen mr-[40%] pt-40'>
    <AnimatedHeading phrases={["Frontend Developer", "UI Designer", "React Developer"]} />
    </div>
  )
}

export default Hero

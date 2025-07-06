import React from 'react'
import Navbar from './components/Navbar'  
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import TechTree from './components/TechTree'
import AboutUs from './components/About'

const App = () => {
  return (
    <main className="bg-black">
      <div className="pb-5">
      <Navbar />
      </div>
      <Hero />
      <div className="mt-10">
        <Marquee words={["About me", "Contact"]} />
      </div>
      <AboutUs/>
      <TechTree/>
      <Work/>
    </main>
  )
}

export default App

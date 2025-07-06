import React from 'react'
import Navbar from './components/Navbar'  
import Hero from './components/Hero'
import Badge from './components/Badge'

const App = () => {
  return (
    <main className='bg-darkgray'>
      <Badge/>
      <div className="pb-20">
      <Navbar />
      </div>
      <Hero />
    </main>
  )
}

export default App

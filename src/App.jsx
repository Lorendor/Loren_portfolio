import React from 'react'
import Navbar from './components/Navbar'  
import Hero from './components/Hero'
import Work from './components/Work'
import AboutUs from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTopButton from './components/ui/ScrollTopButton'
import Experience from './components/Experience'
import Projects from './components/Projects'

const App = () => {
  return (
    <main className="bg-white dark:bg-darkgray overflow-x-hidden">

      <div className="pb-5">
        <Navbar />
      </div>
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <div>
          <AboutUs/> 
        </div>
      </section>
         
      <section id="work">
        <div>
          <Work/>
        </div>
      </section>

       <section id="projects">
        <div>
          <Projects/>
        </div>
      </section>
      
      <section id="experience">
        <div className="pt-30">
          <Experience/>
        </div>
      </section>
   
      <section id="contact">
        <div className="pt-30">
          <Contact/>
        </div>
      </section>

      <div className="pt-50">
        <Footer/>
      </div>
      <ScrollTopButton />
    </main>
  )
}

export default App

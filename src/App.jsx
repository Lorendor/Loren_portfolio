import React from 'react'
import Navbar from './components/Navbar'  
import Hero from './components/Hero'
import Work from './components/Work'
import AboutUs from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTopButton from './components/ui/ScrollTopButton'
import Experience from './components/Experience'

const App = () => {
  return (
    <main className="bg-white dark:bg-darkgray">
      <div className="pb-5">
        <Navbar />
      </div>
      
      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about">
        <div>
          <AboutUs/> 
        </div>
      </section>
      
      {/* Work Section */}
      <section id="work">
        <div>
          <Work/>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div>
          <Experience/>
        </div>
      </section>

      {/* Contact Section */}
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

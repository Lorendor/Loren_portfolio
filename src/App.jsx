import React from 'react'
import Navbar from './components/Navbar'  
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import AboutUs from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTopButton from './components/ScrollTopButton'

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
        <Marquee words={["About me", "Information"]}/>
        <div>
          <AboutUs/> 
        </div>
      </section>
      
      {/* Work Section */}
      <section id="work">
        <div>
          <Marquee words={["My work", "Check out"]} />
        </div>
        <div>
          <Work/>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <div>
          <Marquee words={["Let's talk", "Contact me"]} />
        </div>
        <div className="pt-50">
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

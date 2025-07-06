import React from 'react'
import Navbar from './components/Navbar'  
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import TechTree from './components/TechTree'
import AboutUs from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const projects = [
  {
    title: "Tours Service",
    description: "Project for a taxi service that organizes tours around Croatia.",
    image: "public/projekt1.jpg",
    links: [
      { text: "View", url: "https://malamaretours.com", isButton: false },
      { text: "GitHub", url: "https://github.com/Lorendor/Tours", isButton: true }
    ]
  },
  {
    title: "Movie App",
    description: "Movie app that allows you to search for trending movies and see their ratings.",
    image: "public/projekt2.jpg",
    links: [
      { text: "Play Game", url: "https://game.example.com", isButton: true },
      { text: "GitHub", url: "https://github.com/yourusername/clicker", isButton: false }
    ]
  },
  {
    title: "Cocktail bar site",
    description: "Fully GSAP animated cocktail bar site.",
    image: "public/projekt3.jpg",
    links: [
      { text: "View App", url: "https://croatia.example.com", isButton: false },
      { text: "GitHub", url: "https://github.com/Lorendor/Cocktail_site", isButton: false }
    ]
  }
];

const App = () => {
  return (
    <main className="bg-black">
      <div className="pb-5">
      <Navbar />
      </div>
      <Hero />
      <div className="pt-10">
        <AboutUs/>
      </div>
      <div className="pt-30">
        <Marquee words={["About me", "Contact"]} />
      </div>
      <div className="pt-10">
        <Work projects={projects}/>
      </div>
      <div className="pt-10">
        <TechTree/>
      </div>
      <div className="pt-50">
        <Contact/>
      </div>
      <div className="pt-50 pb-30">
        <Footer/>
      </div>
    </main>
  )
}

export default App

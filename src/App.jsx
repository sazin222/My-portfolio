
import './App.css'
import Navbar from './Components/Navber/Navber'
import About from './Components/Section/About/About'
import AboutLg from './Components/Section/About/AboutLg'
import Experience from './Components/Section/Expreience/Expraience'
import Hero from './Components/Section/Hero/Hero'
import CreativeStudy from './Components/Section/Projects/CreativeStudy/CreativeStudy'

import Skills from './Components/Section/Skills/Skills'
import Contact from './Components/Shared/Contact'
import Education from './Components/Shared/Education'

function App() {
 

  return (
    <div className="max-w-[1440px] mx-auto relative">
       <Hero></Hero>
      <section className="sticky top-0 z-10 bg-white dark:bg-[#141616]">
        <Navbar />
        <About></About>
        <AboutLg></AboutLg>
        <Experience></Experience>
        <Skills></Skills>
        <CreativeStudy></CreativeStudy>
        <Education></Education>
        <Contact></Contact>
       
      </section>
    </div>
  )
}

export default App

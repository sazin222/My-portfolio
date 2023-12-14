
import './App.css'
import Navbar from './Components/Navber/Navber'
import Hero from './Components/Section/Hero/Hero'

function App() {
 

  return (
    <div className="max-w-[1440px] mx-auto relative">
       <Hero></Hero>
      <section className="sticky top-0 z-10 bg-white dark:bg-[#141616]">
        <Navbar />
       
      </section>
    </div>
  )
}

export default App

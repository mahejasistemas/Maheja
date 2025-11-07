import Navbar from './navbar'
import Hero from './hero'
import Stats from './estadisticas.jsx'
import Services from './services.jsx'
import Footer from './footer'
import Contact from './contact'

import './scrollAnimations.js'
import './App.css'
// Removed duplicate Servicios import to avoid rendering it twice on the page

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

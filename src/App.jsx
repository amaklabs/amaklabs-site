import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Portfolio } from './components/Portfolio'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Portfolio />
      <Stats />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App

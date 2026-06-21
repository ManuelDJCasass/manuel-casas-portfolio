import AsciiBackground from './components/AsciiBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ExpertiseSelector from './components/ExpertiseSelector'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <AsciiBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <ExpertiseSelector />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
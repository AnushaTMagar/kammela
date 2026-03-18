import { useState, useEffect } from 'react'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import HowItWorks from './components/HowItWorks'
import Services  from './components/Services'
import VideoGuide from './components/VideoGuide'
import Download  from './components/Download'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <VideoGuide />
        <Services />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

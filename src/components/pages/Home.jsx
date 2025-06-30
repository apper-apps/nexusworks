import React from 'react'
import Navigation from '@/components/molecules/Navigation'
import Hero from '@/components/organisms/Hero'
import Services from '@/components/organisms/Services'
import Portfolio from '@/components/organisms/Portfolio'
import About from '@/components/organisms/About'
import Testimonials from '@/components/organisms/Testimonials'
import Contact from '@/components/organisms/Contact'
import Footer from '@/components/organisms/Footer'

const Home = () => {
return (
    <div className="min-h-screen">
      <Navigation />
      <main className="flowing-sections">
        <Hero />
        <div className="section-divider">
          <Services />
        </div>
        <div className="flowing-section">
          <Portfolio />
        </div>
        <div className="section-divider">
          <About />
        </div>
        <div className="flowing-section">
          <Testimonials />
        </div>
        <div className="curved-bottom">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
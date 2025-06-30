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
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden morphing-bg">
      {/* Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ff6b6b%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-70"></div>
      
      {/* Creative floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-creative-purple to-creative-pink rounded-full blur-2xl floating-animation"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-creative-orange to-creative-teal rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full blur-xl floating-animation" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-secondary to-creative-indigo rounded-full blur-2xl floating-animation" style={{ animationDelay: '6s' }}></div>
      <div className="container-custom relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
>
            <motion.span 
              className="inline-block bg-gradient-to-r from-primary via-secondary to-accent text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🎨 Creative Portfolio Studio
            </motion.span>
          </motion.div>
          
<motion.h1
            initial={{ opacity: 0, y: 30, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-dark mb-8 leading-none"
          >
            Transform Your Vision
            <span className="gradient-text block font-creative text-6xl md:text-7xl lg:text-8xl xl:text-9xl transform rotate-2">Into Creative Magic</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Nexus Pro delivers cutting-edge consulting, development, and strategic services 
            that drive measurable results for modern enterprises. Let's build something extraordinary together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              size="lg"
              icon="ArrowRight"
              iconPosition="right"
              onClick={() => scrollToSection('#contact')}
            >
              Get Started Today
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon="Play"
              onClick={() => scrollToSection('#services')}
            >
              View Our Services
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: 'Users', value: '500+', label: 'Happy Clients' },
              { icon: 'Award', value: '15+', label: 'Years Experience' },
              { icon: 'CheckCircle', value: '1000+', label: 'Projects Completed' },
              { icon: 'Star', value: '4.9/5', label: 'Client Rating' }
].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 5 : -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 floating-animation shadow-2xl" style={{ animationDelay: `${index * 0.5}s` }}>
                  <ApperIcon name={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-dark mb-2 font-display">{stat.value}</div>
                <div className="text-sm text-gray-600 font-body">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
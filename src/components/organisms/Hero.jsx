import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Modern office workspace"
    },
    {
      url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Creative team collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Digital innovation"
    }
  ];

return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Fullscreen Background Slider */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
<button className="swiper-button-prev-custom absolute left-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300">
          <ApperIcon name="ChevronLeft" className="w-6 h-6 text-white" />
        </button>
        <button className="swiper-button-next-custom absolute right-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300">
          <ApperIcon name="ChevronRight" className="w-6 h-6 text-white" />
        </button>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3"></div>
      </div>

      {/* Left Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full lg:w-1/2 xl:w-2/5">
<div className="bg-white/95 backdrop-blur-sm px-8 py-12 sm:px-12 lg:px-16 ml-0 lg:ml-8 xl:ml-12 rounded-r-4xl lg:rounded-l-none lg:rounded-r-5xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="mb-6 relative z-10"
            >
              <motion.span 
                className="inline-block bg-primary-50 text-primary px-8 py-3 text-sm font-medium rounded-full shadow-elevation-1"
              >
                🎨 Creative Portfolio Studio
              </motion.span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-medium text-dark mb-6 leading-tight"
            >
              Transform Your Vision
              <span className="gradient-text block">Into Creative Magic</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Nexus Pro delivers cutting-edge consulting, development, and strategic services 
              that drive measurable results for modern enterprises. Let's build something extraordinary together.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
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
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: 'Users', value: '500+', label: 'Happy Clients' },
                { icon: 'Award', value: '15+', label: 'Years Experience' },
                { icon: 'CheckCircle', value: '1000+', label: 'Projects Completed' },
                { icon: 'Star', value: '4.9/5', label: 'Client Rating' }
].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-elevation-3 flex items-center justify-center mx-auto mb-2 hover:scale-110 transition-transform duration-300">
                    <ApperIcon name={stat.icon} className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl font-medium text-dark mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-8 z-30"
      >
        <div className="flex flex-col items-center text-white drop-shadow-lg">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
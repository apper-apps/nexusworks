import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TestimonialCard from '@/components/molecules/TestimonialCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import ApperIcon from '@/components/ApperIcon'
import { getTestimonials } from '@/services/api/testimonialService'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)

  const loadTestimonials = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getTestimonials()
      setTestimonials(data)
    } catch (err) {
      setError('Failed to load testimonials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTestimonials()
  }, [])

  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadTestimonials} />
  if (testimonials.length === 0) return <Empty title="No testimonials available" />
return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-material-indigo/10 to-transparent rounded-full transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent-100/20 to-transparent rounded-full transform translate-x-40 translate-y-40"></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-material-indigo to-material-purple text-white px-8 py-3 text-sm font-medium mb-4 rounded-full shadow-elevation-2">
            💫 Creative Reviews
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-dark mb-8 leading-tight">
            What Creative Minds
            <span className="gradient-text block">Say About Our Art</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we've inspired creators, transformed visions, and pushed the boundaries 
            of what's possible through our experimental and innovative creative approach.
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.Id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </motion.div>
          </div>

{/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full shadow-elevation-3 flex items-center justify-center hover:shadow-elevation-4 hover:scale-110 transition-all duration-300"
          >
            <ApperIcon name="ChevronLeft" className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full shadow-elevation-3 flex items-center justify-center hover:shadow-elevation-4 hover:scale-110 transition-all duration-300"
          >
            <ApperIcon name="ChevronRight" className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
<button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide ? 'bg-primary shadow-elevation-2 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-center text-gray-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-60">
            {[
              'TechCorp', 'InnovateLabs', 'GlobalSoft', 'DataFlow', 'CloudSync', 'NextGen'
            ].map((company, index) => (
<div
                key={index}
className="material-card p-4 flex items-center justify-center h-12"
              >
                <span className="font-bold text-gray-500 text-lg">{company}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
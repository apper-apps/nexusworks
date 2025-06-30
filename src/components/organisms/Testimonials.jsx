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
    <section className="section-padding bg-neumorphic-base">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
className="text-center mb-16"
>
<span className="inline-block bg-neumorphic-base text-creative-indigo px-8 py-4 text-lg font-bold mb-6 rounded-2xl shadow-neumorph-inset">
            💫 Creative Reviews
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-dark mb-8 leading-none">
            What Creative Minds
<span className="gradient-text block font-creative text-6xl md:text-7xl lg:text-8xl">Say About Our Art</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-body">
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-16 h-16 bg-neumorphic-base rounded-2xl shadow-neumorph flex items-center justify-center hover:shadow-neumorph-inset transition-all duration-300"
          >
            <ApperIcon name="ChevronLeft" className="w-8 h-8 text-primary" />
          </button>
<button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-16 h-16 bg-neumorphic-base rounded-2xl shadow-neumorph flex items-center justify-center hover:shadow-neumorph-inset transition-all duration-300"
          >
            <ApperIcon name="ChevronRight" className="w-8 h-8 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
<button
                key={index}
onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-neumorphic-base shadow-neumorph-inset' : 'bg-neumorphic-base shadow-neumorph'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-gray-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              'TechCorp', 'InnovateLabs', 'GlobalSoft', 'DataFlow', 'CloudSync', 'NextGen'
            ].map((company, index) => (
<div
                key={index}
className="bg-neumorphic-base p-6 rounded-2xl shadow-neumorph flex items-center justify-center h-16"
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
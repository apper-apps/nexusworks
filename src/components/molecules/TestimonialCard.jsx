import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
viewport={{ once: true }}
className="bg-neumorphic-base p-10 rounded-3xl shadow-neumorph"
    >
      <div className="text-primary opacity-30 mb-4">
        <ApperIcon name="Quote" className="w-12 h-12" />
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <ApperIcon
            key={i}
            name="Star"
            className={`w-5 h-5 ${
              i < testimonial.rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic mb-6 leading-relaxed">
        "{testimonial.quote}"
      </p>
      
<div className="flex items-center">
        <img
src={testimonial.photo}
          alt={testimonial.clientName}
          className="w-12 h-12 object-cover rounded-2xl shadow-neumorph-inset mr-4"
        />
        <div>
          <h4 className="font-semibold text-dark">{testimonial.clientName}</h4>
          <p className="text-sm text-gray-600">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
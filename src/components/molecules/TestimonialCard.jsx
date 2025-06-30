import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const TestimonialCard = ({ testimonial, index }) => {
  return (
<motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: [0.4, 0.0, 0.2, 1] }}
viewport={{ once: true }}
className="material-card-elevated p-6"
    >
      <div className="text-primary opacity-30 mb-4">
        <ApperIcon name="Quote" className="w-10 h-10" />
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <ApperIcon
            key={i}
            name="Star"
            className={`w-4 h-4 ${
              i < testimonial.rating 
                ? 'text-yellow-500 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        "{testimonial.quote}"
      </p>
      
<div className="flex items-center">
        <img
src={testimonial.photo}
          alt={testimonial.clientName}
          className="w-10 h-10 object-cover rounded-lg shadow-elevation-1 mr-3"
        />
        <div>
          <h4 className="font-medium text-dark">{testimonial.clientName}</h4>
          <p className="text-sm text-gray-600">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
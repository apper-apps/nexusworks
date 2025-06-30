import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const ServiceCard = ({ service, index, onLearnMore }) => {
return (
<motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: [0.4, 0.0, 0.2, 1] }}
      viewport={{ once: true }}
      className="group material-card-elevated p-6 hover:shadow-elevation-3 transition-all duration-150"
    >
      <div className="w-14 h-14 bg-primary rounded-lg shadow-elevation-2 flex items-center justify-center mb-6">
        <ApperIcon name={service.icon} className="w-7 h-7 text-white" />
      </div>
      
<h3 className="text-xl font-medium text-dark mb-4">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <ApperIcon name="Check" className="w-4 h-4 text-material-green mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
<div className="pt-4 border-t border-gray-100">
        <button 
          onClick={() => onLearnMore(service.Id)}
          className="text-primary font-medium hover:text-primary-dark transition-colors duration-150 inline-flex items-center group"
        >
          Learn More
          <ApperIcon name="ArrowRight" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-150" />
        </button>
      </div>
    </motion.div>
  )
}

export default ServiceCard
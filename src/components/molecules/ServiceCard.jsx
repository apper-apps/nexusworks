import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const ServiceCard = ({ service, index, onLearnMore }) => {
return (
<motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group neumorph-card p-10 hover:shadow-neumorph-inset transition-all duration-300"
    >
      <div className="w-20 h-20 bg-neumorphic-base rounded-3xl shadow-neumorph-inset flex items-center justify-center mb-8">
        <ApperIcon name={service.icon} className="w-10 h-10 text-primary" />
      </div>
      
<h3 className="text-2xl font-black text-dark mb-6 font-display">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <ApperIcon name="Check" className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
<div className="mt-6 pt-6 border-t border-gray-100">
        <button 
          onClick={() => onLearnMore(service.Id)}
          className="text-primary font-medium hover:text-primary-dark transition-colors duration-200 inline-flex items-center group"
        >
          Learn More
          <ApperIcon name="ArrowRight" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </motion.div>
  )
}

export default ServiceCard
import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <ApperIcon name={service.icon} className="w-8 h-8 text-primary" />
      </div>
      
      <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
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
        <button className="text-primary font-medium hover:text-primary-dark transition-colors duration-200 inline-flex items-center group">
          Learn More
          <ApperIcon name="ArrowRight" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </motion.div>
  )
}

export default ServiceCard
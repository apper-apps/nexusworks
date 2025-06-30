import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const ServiceCard = ({ service, index }) => {
return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        rotate: Math.random() > 0.5 ? 2 : -2,
        y: -10
      }}
      className="group bg-gradient-to-br from-white via-primary/5 to-secondary/10 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-primary/20 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-2xl"></div>
      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl floating-animation">
        <ApperIcon name={service.icon} className="w-10 h-10 text-white" />
      </div>
      
<h3 className="text-2xl font-black text-dark mb-6 group-hover:text-primary transition-colors duration-300 font-display">
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
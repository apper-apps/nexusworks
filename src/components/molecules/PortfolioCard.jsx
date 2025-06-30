import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const PortfolioCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
viewport={{ once: true }}
      whileHover={{ 
        scale: 1.03, 
        rotate: Math.random() > 0.5 ? 1 : -1,
        y: -5
      }}
      className="group relative bg-gradient-to-br from-white via-primary/5 to-secondary/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
/>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-gradient-to-r from-accent to-primary text-white text-sm px-4 py-2 rounded-full mb-3 font-bold shadow-xl">
              {item.category}
            </span>
          </div>
        </div>
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <motion.button 
            className="w-12 h-12 bg-gradient-to-r from-primary to-secondary backdrop-blur-sm rounded-full flex items-center justify-center hover:from-accent hover:to-primary transition-all duration-300 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <ApperIcon name="ExternalLink" className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default PortfolioCard
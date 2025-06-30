import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const PortfolioCard = ({ item, index }) => {
  return (
<motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: [0.4, 0.0, 0.2, 1] }}
viewport={{ once: true }}
className="group relative material-card-elevated overflow-hidden hover:shadow-elevation-3 transition-all duration-150"
    >
      <div className="relative overflow-hidden">
        <img
src={item.image}
          alt={item.title}
className="w-full h-48 object-cover"
/>
<div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block bg-white text-primary text-xs px-3 py-1 font-medium rounded-full">
              {item.category}
            </span>
</div>
        </div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-150">
<button 
            className="w-10 h-10 bg-white rounded-full shadow-elevation-2 flex items-center justify-center hover:shadow-elevation-3 transition-all duration-150"
          >
            <ApperIcon name="ExternalLink" className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
<h3 className="text-base font-medium text-dark mb-2">
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
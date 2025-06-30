import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const PortfolioCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
viewport={{ once: true }}
className="group relative neumorph-card overflow-hidden hover:shadow-neumorph-inset transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
src={item.image}
          alt={item.title}
className="w-full h-64 object-cover"
/>
<div className="absolute inset-0 bg-neumorphic-base/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-neumorphic-base text-primary text-sm px-4 py-2 mb-3 font-bold rounded-xl shadow-neumorph-inset">
              {item.category}
            </span>
</div>
        </div>
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
<button 
            className="w-12 h-12 bg-neumorphic-base rounded-2xl shadow-neumorph flex items-center justify-center hover:shadow-neumorph-inset transition-all duration-300"
          >
            <ApperIcon name="ExternalLink" className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
<h3 className="text-lg font-bold text-dark mb-2">
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
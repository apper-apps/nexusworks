import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
className="group text-center"
    >
<div className="relative mb-8">
        <div className="w-40 h-40 mx-auto overflow-hidden rounded-3xl shadow-neumorph">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
<h3 className="text-xl font-black text-dark mb-2 font-display">
        {member.name}
      </h3>
      
      <p className="text-primary font-medium mb-3">
        {member.position}
      </p>
      
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {member.bio}
      </p>
      
      <div className="flex justify-center space-x-3">
        {Object.entries(member.social).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
rel="noopener noreferrer"
className="w-8 h-8 bg-neumorphic-base rounded-xl shadow-neumorph flex items-center justify-center hover:shadow-neumorph-inset transition-all duration-300"
          >
            <ApperIcon 
              name={platform === 'linkedin' ? 'Linkedin' : platform === 'twitter' ? 'Twitter' : 'Globe'}
              name={platform === 'linkedin' ? 'Linkedin' : platform === 'twitter' ? 'Twitter' : 'Globe'} 
              className="w-4 h-4" 
            />
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default TeamCard
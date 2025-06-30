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
<div className="relative mb-6">
        <div className="w-32 h-32 mx-auto overflow-hidden rounded-2xl shadow-elevation-2">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
<h3 className="text-lg font-medium text-dark mb-2">
        {member.name}
      </h3>
      
      <p className="text-primary font-medium mb-3">
        {member.position}
      </p>
      
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {member.bio}
      </p>
      
      <div className="flex justify-center space-x-2">
        {Object.entries(member.social).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
rel="noopener noreferrer"
className="w-8 h-8 bg-gray-100 rounded-lg shadow-elevation-1 flex items-center justify-center hover:shadow-elevation-2 hover:bg-primary hover:text-white transition-all duration-150"
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
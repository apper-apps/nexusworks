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
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <h3 className="text-lg font-bold text-dark mb-1 group-hover:text-primary transition-colors duration-300">
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
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
          >
            <ApperIcon 
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
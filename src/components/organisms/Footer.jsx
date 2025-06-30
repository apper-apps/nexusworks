import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Services': [
      'Business Consulting',
      'Digital Transformation',
      'Custom Development',
      'Strategic Planning',
      'Technology Integration'
    ],
    'Company': [
      'About Us',
      'Our Team',
      'Careers',
      'Partners',
      'Press Kit'
    ],
    'Resources': [
      'Case Studies',
      'Blog',
      'Whitepapers',
      'Webinars',
      'Support'
    ]
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
<div className="w-10 h-10 bg-primary flex items-center justify-center">
                <ApperIcon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold">Nexus Pro</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses with innovative solutions that drive growth, 
              efficiency, and competitive advantage in the digital age.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'Linkedin', href: '#' },
                { name: 'Twitter', href: '#' },
                { name: 'Facebook', href: '#' },
                { name: 'Instagram', href: '#' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <ApperIcon name={social.name} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-gray-300 hover:text-primary transition-colors duration-200 text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest insights and updates from Nexus Pro delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-4">
<input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nexus Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-primary transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-primary transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
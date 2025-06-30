import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '@/components/molecules/ContactForm'
import ApperIcon from '@/components/ApperIcon'

const Contact = () => {
  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Visit Our Office',
      details: ['123 Business Center Drive', 'Suite 500, New York, NY 10001']
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      details: ['hello@nexuspro.com', 'support@nexuspro.com']
    },
    {
      icon: 'Clock',
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM']
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
>
          <motion.span 
            className="inline-block bg-gradient-to-r from-creative-teal to-creative-indigo text-white px-8 py-4 rounded-full text-lg font-bold mb-6 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🚀 Let's Create Together
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-dark mb-8 leading-none">
            Ready to Bring Your
            <span className="gradient-text block font-creative text-6xl md:text-7xl lg:text-8xl transform -rotate-1">Creative Vision to Life?</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-body">
            Let's collaborate on something extraordinary. Share your creative dreams and let's 
            transform them into stunning realities that push boundaries and inspire wonder.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
<motion.div 
                key={index} 
                className="flex items-start space-x-6"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl floating-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                  <ApperIcon name={info.icon} className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-dark mb-3 text-lg font-display">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-base font-body mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-dark mb-4">Follow Us</h3>
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
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    <ApperIcon name={social.name} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-200 rounded-2xl h-64 md:h-80 flex items-center justify-center">
            <div className="text-center">
              <ApperIcon name="MapPin" className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-500">123 Business Center Drive, Suite 500</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
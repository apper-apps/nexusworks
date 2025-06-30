import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import ContactForm from "@/components/molecules/ContactForm";

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
<span className="inline-block bg-secondary text-white px-6 py-2 text-sm font-medium mb-4 rounded-full">
            🚀 Let's Create Together
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-dark mb-8 leading-tight">
            Ready to Bring Your
<span className="gradient-text block">Creative Vision to Life?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Let's collaborate on something extraordinary. Share your creative dreams and let's 
            transform them into stunning realities that push boundaries and inspire wonder.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
{contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-primary rounded-lg shadow-elevation-2 flex items-center justify-center flex-shrink-0">
<ApperIcon name={info.icon} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-dark mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-medium text-dark mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {[
                  { name: 'Linkedin', href: '#' },
                  { name: 'Twitter', href: '#' },
                  { name: 'Facebook', href: '#' },
                  { name: 'Instagram', href: '#' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
className="w-10 h-10 bg-gray-100 rounded-lg shadow-elevation-1 flex items-center justify-center hover:bg-primary hover:text-white hover:shadow-elevation-2 transition-all duration-150"
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
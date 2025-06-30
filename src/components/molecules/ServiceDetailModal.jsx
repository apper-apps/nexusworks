import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from 'react-modal'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { getServiceById } from '@/services/api/serviceService'

// Set app element for accessibility
if (typeof document !== 'undefined') {
  Modal.setAppElement(document.getElementById('root') || document.body)
}

const ServiceDetailModal = ({ isOpen, onClose, serviceId }) => {
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const loadServiceDetails = async () => {
    if (!serviceId) return
    
    try {
      setLoading(true)
      setError('')
      const data = await getServiceById(serviceId)
      setService(data)
    } catch (err) {
      setError('Failed to load service details. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen && serviceId) {
      loadServiceDetails()
    }
  }, [isOpen, serviceId])

  const handleClose = () => {
    onClose()
    // Reset state when modal closes
    setTimeout(() => {
      setService(null)
      setError('')
    }, 300)
  }

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(4px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    },
    content: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      border: 'none',
      background: 'transparent',
      overflow: 'visible',
      borderRadius: '0',
      outline: 'none',
      padding: '0',
      maxWidth: '90vw',
      maxHeight: '90vh',
      width: '100%'
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={modalStyles}
      closeTimeoutMS={300}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto relative overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <ApperIcon name="X" className="w-5 h-5 text-gray-600" />
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              {loading && (
                <div className="flex justify-center py-16">
                  <Loading />
                </div>
              )}

              {error && (
                <div className="py-8">
                  <Error message={error} onRetry={loadServiceDetails} />
                </div>
              )}

              {service && !loading && !error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-neumorphic-base rounded-3xl shadow-neumorph-inset flex items-center justify-center flex-shrink-0">
                      <ApperIcon name={service.icon} className="w-10 h-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-black text-dark mb-2 font-display">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-dark mb-6">What's Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl"
                        >
                          <ApperIcon name="CheckCircle" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-neumorphic-base p-6 md:p-8 rounded-3xl shadow-neumorph">
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-bold text-dark mb-3">
                        Ready to Get Started?
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Let's discuss how {service.title.toLowerCase()} can help transform your business.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary"
                          onClick={() => {
                            handleClose()
                            setTimeout(() => {
                              const element = document.querySelector('#contact')
                              if (element) element.scrollIntoView({ behavior: 'smooth' })
                            }, 300)
                          }}
                        >
                          Start Your Project
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-secondary"
                          onClick={handleClose}
                        >
                          Browse More Services
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  )
}

export default ServiceDetailModal
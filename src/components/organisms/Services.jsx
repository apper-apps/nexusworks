import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '@/components/molecules/ServiceCard'
import ServiceDetailModal from '@/components/molecules/ServiceDetailModal'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { getServices } from '@/services/api/serviceService'

const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedServiceId, setSelectedServiceId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const loadServices = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getServices()
      setServices(data)
    } catch (err) {
      setError('Failed to load services. Please try again.')
    } finally {
      setLoading(false)
    }
}

  const handleServiceSelect = (serviceId) => {
    setSelectedServiceId(serviceId)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedServiceId(null)
  }

  useEffect(() => {
    loadServices()
  }, [])

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadServices} />
  if (services.length === 0) return <Empty title="No services available" />

  return (
<section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
className="text-center mb-16"
        >
<span className="inline-block bg-primary-50 text-primary px-6 py-2 text-sm font-medium mb-4 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-dark mb-6">
            Expert Solutions for
            <span className="gradient-text block">Every Business Need</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From strategic consulting to cutting-edge development, we provide comprehensive 
            solutions that drive growth and innovation for businesses of all sizes.
          </p>
        </motion.div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.Id}
              service={service}
              index={index}
              onLearnMore={handleServiceSelect}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
className="text-center mt-16"
        >
<div className="material-card-elevated p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can create a tailored solution 
              that perfectly fits your specific requirements and goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Let's Talk
            </motion.button>
          </div>
</motion.div>
      </div>

      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        serviceId={selectedServiceId}
      />
    </section>
  )
}

export default Services
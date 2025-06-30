import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PortfolioCard from '@/components/molecules/PortfolioCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { getPortfolioItems } from '@/services/api/portfolioService'

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadPortfolio = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getPortfolioItems()
      setPortfolioItems(data)
      setFilteredItems(data)
    } catch (err) {
      setError('Failed to load portfolio items. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPortfolio()
  }, [])

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))]

  const handleFilterChange = (category) => {
    setActiveFilter(category)
    if (category === 'All') {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === category))
    }
  }

  if (loading) return <Loading type="portfolio" />
  if (error) return <Error message={error} onRetry={loadPortfolio} />
  if (portfolioItems.length === 0) return <Empty title="No portfolio items available" />

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
            Featured Projects &
            <span className="gradient-text block">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects and see how we've helped 
            businesses transform their operations and achieve remarkable results.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={item.Id}
              item={item}
              index={index}
            />
          ))}
        </div>

        {filteredItems.length === 0 && activeFilter !== 'All' && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found in the "{activeFilter}" category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
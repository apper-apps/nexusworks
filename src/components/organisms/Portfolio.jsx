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
    <section id="portfolio" className="section-padding morphing-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="floating-animation absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-creative-purple to-creative-pink rounded-full blur-xl"></div>
        <div className="floating-animation absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-creative-orange to-creative-teal rounded-full blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating-animation absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-accent to-secondary rounded-full blur-2xl" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-primary via-secondary to-accent text-white px-8 py-3 rounded-full text-sm font-bold mb-6 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ✨ Creative Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-dark mb-8 leading-none">
            Experimental Projects &
            <span className="gradient-text block font-creative text-6xl md:text-7xl lg:text-8xl transform rotate-1">Artistic Visions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-body">
            Dive into our creative universe where innovation meets artistry. Each project 
            tells a unique story of bold experimentation and boundary-pushing design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleFilterChange(category)}
              whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 2 : -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-2xl transform rotate-1'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gradient-to-r hover:from-accent/20 hover:to-primary/20 hover:text-primary border-2 border-transparent hover:border-primary/30 hover:shadow-xl'
              }`}
            >
              {category}
            </motion.button>
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
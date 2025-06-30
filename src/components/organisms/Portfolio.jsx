import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PortfolioCard from "@/components/molecules/PortfolioCard";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import Loading from "@/components/ui/Loading";
import { getPortfolioItems } from "@/services/api/portfolioService";
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
<section id="portfolio" className="section-padding bg-surface">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
className="text-center mb-16"
        >
<span className="inline-block bg-secondary-50 text-secondary px-6 py-2 text-sm font-medium mb-4 rounded-full">
            ✨ Creative Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-dark mb-8 leading-tight">
            Experimental Projects &
<span className="gradient-text block">Artistic Visions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dive into our creative universe where innovation meets artistry. Each project 
            tells a unique story of bold experimentation and boundary-pushing design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, staggerChildren: 0.05, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
{categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.15, delay: index * 0.05, ease: [0.4, 0.0, 0.2, 1] }}
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2 font-medium rounded-full transition-all duration-150 ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-elevation-2'
                  : 'bg-surface text-gray-600 shadow-elevation-1 hover:shadow-elevation-2 hover:bg-primary-50'
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
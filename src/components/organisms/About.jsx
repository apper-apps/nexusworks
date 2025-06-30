import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TeamCard from '@/components/molecules/TeamCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import ApperIcon from '@/components/ApperIcon'
import { getTeamMembers } from '@/services/api/teamService'

const About = () => {
  const [teamMembers, setTeamMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadTeam = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getTeamMembers()
      setTeamMembers(data)
    } catch (err) {
      setError('Failed to load team members. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTeam()
  }, [])

  const stats = [
    { icon: 'Trophy', value: '15+', label: 'Years of Excellence' },
    { icon: 'Users', value: '500+', label: 'Satisfied Clients' },
    { icon: 'Globe', value: '25+', label: 'Countries Served' },
    { icon: 'Award', value: '50+', label: 'Industry Awards' }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Nexus Pro
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
            Building Tomorrow's
            <span className="gradient-text block">Business Solutions Today</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Founded with a vision to transform how businesses operate in the digital age, 
            Nexus Pro has been at the forefront of innovation for over 15 years. We combine 
            strategic thinking with cutting-edge technology to deliver solutions that drive 
            sustainable growth and competitive advantage.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ApperIcon name={stat.icon} className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-dark mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mission & Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <ApperIcon name="Target" className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with innovative solutions that drive sustainable growth, 
              enhance operational efficiency, and create lasting competitive advantages in 
              an ever-evolving digital landscape.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <ApperIcon name="Heart" className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-dark mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in excellence, integrity, and innovation. Our commitment to these 
              core values drives everything we do, from client relationships to solution 
              development and ongoing support.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Meet Our Expert Team
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of professionals brings together decades of experience 
            across various industries and technologies.
          </p>
        </motion.div>

        {loading && <Loading type="team" />}
        {error && <Error message={error} onRetry={loadTeam} />}
        {!loading && !error && teamMembers.length === 0 && (
          <Empty title="No team members available" />
        )}
        {!loading && !error && teamMembers.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.Id}
                member={member}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default About
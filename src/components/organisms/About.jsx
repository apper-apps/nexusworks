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
          <motion.span 
            className="inline-block bg-gradient-to-r from-creative-purple to-creative-pink text-white px-8 py-4 rounded-full text-lg font-bold mb-6 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🎨 Creative Studio
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-dark mb-8 leading-none">
            Crafting Tomorrow's
            <span className="gradient-text block font-creative text-6xl md:text-7xl lg:text-8xl transform -rotate-2">Creative Experiences</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-16 font-body">
            Born from a passion for pushing creative boundaries, our studio has been pioneering 
            experimental design for over a decade. We blend artistic vision with cutting-edge 
            technology to create experiences that inspire, engage, and transform perceptions.
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
            <motion.div 
              key={index} 
              className="text-center"
              whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 3 : -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-creative-orange to-creative-teal rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl floating-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                <ApperIcon name={stat.icon} className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-black text-dark mb-3 font-display">{stat.value}</div>
              <div className="text-gray-600 font-body">{stat.label}</div>
            </motion.div>
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
          <motion.div 
            className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-creative-pink/20 to-transparent rounded-full blur-2xl"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-8 floating-animation">
              <ApperIcon name="Target" className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black text-dark mb-6 font-display">Creative Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg font-body">
              To revolutionize creative expression through experimental design, innovative technology, 
              and boundary-pushing artistry that challenges conventions and inspires new possibilities 
              in the digital creative landscape.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-secondary/10 via-white to-accent/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-creative-teal/20 to-transparent rounded-full blur-2xl"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-creative-orange rounded-2xl flex items-center justify-center mb-8 floating-animation" style={{ animationDelay: '1s' }}>
              <ApperIcon name="Heart" className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black text-dark mb-6 font-display">Creative Values</h3>
            <p className="text-gray-700 leading-relaxed text-lg font-body">
              We embrace experimentation, celebrate uniqueness, and push creative boundaries. 
              Our commitment to artistic innovation drives every project, fostering environments 
              where creativity flourishes and bold ideas become reality.
            </p>
          </motion.div>
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
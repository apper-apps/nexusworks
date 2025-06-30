import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import TeamCard from "@/components/molecules/TeamCard";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import Loading from "@/components/ui/Loading";
import { getTeamMembers } from "@/services/api/teamService";

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
<span className="inline-block bg-accent-50 text-accent px-6 py-2 text-sm font-medium mb-4 rounded-full">
            🎨 Creative Studio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-dark mb-8 leading-tight">
            Crafting Tomorrow's
<span className="gradient-text block">Creative Experiences</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Born from a passion for pushing creative boundaries, our studio has been pioneering 
            experimental design for over a decade. We blend artistic vision with cutting-edge 
            technology to create experiences that inspire, engage, and transform perceptions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-material-orange to-accent-600 rounded-full shadow-elevation-3 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
              <ApperIcon name={stat.icon} className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-medium text-dark mb-2">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
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
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
className="material-card-elevated p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100/40 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full shadow-elevation-3 flex items-center justify-center mb-6 relative z-10">
              <ApperIcon name="Target" className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-medium text-dark mb-4 relative z-10">Creative Mission</h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              To revolutionize creative expression through experimental design, innovative technology, 
              and boundary-pushing artistry that challenges conventions and inspires new possibilities 
              in the digital creative landscape.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }}
            viewport={{ once: true }}
            className="material-card-elevated p-8 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-secondary-100/40 to-transparent rounded-full transform -translate-x-14 translate-y-14"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full shadow-elevation-3 flex items-center justify-center mb-6 relative z-10">
              <ApperIcon name="Heart" className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-medium text-dark mb-4 relative z-10">Creative Values</h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
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
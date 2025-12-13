'use client'

import { motion } from 'framer-motion'

export const ServicesSection = () => {
  const services = [
    {
      title: 'Premium Signals',
      description: 'High-quality binary and forex signals with proven success rates. Our expert team analyzes the markets 24/7 to deliver profitable opportunities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'text-primary-500'
    },
    {
      title: 'One-on-One Mentoring',
      description: 'Personalized mentoring sessions with our expert traders. Get direct guidance tailored to your trading style and goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'text-secondary-500'
    },
    {
      title: 'Market Analysis',
      description: 'Daily market analysis and insights from our team of experts. Stay ahead of market trends with our comprehensive reports.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'text-primary-500'
    },
    {
      title: 'VIP Community',
      description: 'Join our exclusive community of traders. Share strategies, get feedback, and network with like-minded professionals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'text-secondary-500'
    }
  ]

  return (
    <section id="services" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-primary-500">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive trading services designed to help you achieve consistent profitability
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-dark-800 rounded-xl p-8 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-full bg-opacity-10 mb-6 flex items-center justify-center ${service.color === 'text-primary-500' ? 'bg-primary-500' : 'bg-secondary-500'}`}>
                <div className={service.color}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <div className="mt-6">
                <button className={`text-sm font-semibold ${service.color} hover:underline`}>
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-10 border border-dark-700 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Trading Packages</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Choose from our premium trading packages designed to match your experience level and investment goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 w-full sm:w-64">
                  <h4 className="text-lg font-bold text-white mb-2">Starter</h4>
                  <div className="text-3xl font-bold text-primary-500 mb-4">$99<span className="text-sm text-gray-400">/mo</span></div>
                  <ul className="text-gray-400 text-sm mb-6 space-y-2">
                    <li>Basic Signals</li>
                    <li>Email Support</li>
                    <li>Market Analysis</li>
                  </ul>
                  <button className="w-full py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-xl p-6 border border-primary-500/30 w-full sm:w-64 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white text-xs px-4 py-1 rounded-full">
                    POPULAR
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Professional</h4>
                  <div className="text-3xl font-bold text-primary-500 mb-4">$299<span className="text-sm text-gray-400">/mo</span></div>
                  <ul className="text-gray-400 text-sm mb-6 space-y-2">
                    <li>Premium Signals</li>
                    <li>One-on-One Mentoring</li>
                    <li>Market Analysis</li>
                    <li>Community Access</li>
                  </ul>
                  <button className="w-full py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 w-full sm:w-64">
                  <h4 className="text-lg font-bold text-white mb-2">Elite</h4>
                  <div className="text-3xl font-bold text-primary-500 mb-4">$499<span className="text-sm text-gray-400">/mo</span></div>
                  <ul className="text-gray-400 text-sm mb-6 space-y-2">
                    <li>All Professional Features</li>
                    <li>Custom Strategies</li>
                    <li>Priority Support</li>
                    <li>VIP Community</li>
                  </ul>
                  <button className="w-full py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
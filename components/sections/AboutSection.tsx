'use client'

import { motion } from 'framer-motion'

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-primary-500">Meeru-72-fx</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-500/10 rounded-2xl rotate-3"></div>
              <div className="relative bg-dark-700 rounded-2xl p-8 border border-dark-600">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">7+ Years Experience</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Founded in 2017, Meeru-72-fx has been at the forefront of premium binary and forex trading services.
                  Our team of expert traders and analysts have consistently delivered high-quality signals and mentoring.
                </p>
                <p className="text-gray-300">
                  We&#39;ve helped thousands of traders achieve their financial goals through our proven strategies
                  and personalized mentoring programs.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">98%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 text-center">
                <div className="text-3xl font-bold text-secondary-500 mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
              <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">5K+</div>
                <div className="text-gray-400">Active Members</div>
              </div>
              <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 text-center">
                <div className="text-3xl font-bold text-secondary-500 mb-2">$30k+</div>
                <div className="text-gray-400">Traded</div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl p-6 border border-dark-600">
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300">
                To empower traders with premium signals, expert mentoring, and a supportive community that drives
                consistent profitability in binary and forex markets.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
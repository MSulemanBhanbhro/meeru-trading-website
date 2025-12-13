'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 to-dark-800 pt-16 sm:pt-20">
      <div className="container mx-auto px-4 py-8 sm:py-16 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Premium <span className="text-primary-500">Binary & Forex</span> Trading
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Professional signals, mentoring & community for aspiring and pro traders.
            Experience the luxury of premium trading services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-primary-500 text-white rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20">
              Get Started
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-secondary-500 text-secondary-500 rounded-lg text-lg font-semibold hover:bg-secondary-500/10 transition-colors">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-lg h-96 rounded-2xl overflow-hidden">
            {/* Placeholder for trader image/video */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-secondary-900/30 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="inline-block p-6 bg-dark-800/50 backdrop-blur-sm rounded-xl mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary-500/20 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Professional Trading</h3>
                  <p className="text-gray-300">Premium signals & analytics</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolioData'

export default function HeroText() {
  const { personalInfo } = portfolioData

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      className="mt-8"
    >
      <h1 className="text-6xl font-extrabold leading-none md:text-7xl">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {personalInfo.heroTitle}
        </span>
      </h1>

      <p className="mt-5 max-w-[30ch] text-gray-400 md:text-lg">
        {personalInfo.heroBioCn}
      </p>
    </motion.div>
  )
}


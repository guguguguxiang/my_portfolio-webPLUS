import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolioData'

export default function HeroText() {
  const { personalInfo } = portfolioData

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      className="mt-8 space-y-5"
    >
      <h1 className="text-5xl font-black leading-tight text-white md:text-6xl">
        {personalInfo.heroTitle}
      </h1>

      <p className="max-w-[34ch] text-base text-gray-400">
        {personalInfo.heroBioCn}
      </p>
    </motion.div>
  )
}


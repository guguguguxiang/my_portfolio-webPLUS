import { motion } from 'framer-motion'
import { portfolioData } from '../../data/portfolioData'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function StatsBlock() {
  const { stats } = portfolioData

  return (
    <motion.section
      className="mt-8"
      initial="hidden"
      animate="show"
      variants={{}}
      transition={{ delayChildren: 0.5, staggerChildren: 0.1 }}
    >
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {stats.map((item) => (
          <motion.div
            key={item.label}
            variants={itemVariants}
            className="flex flex-col items-center justify-center rounded-2xl bg-white/0 p-4 text-center shadow-lg shadow-white/10"
          >
            <div className="font-mono text-5xl font-semibold text-white/90 md:text-6xl">
              [{item.value}]
            </div>
            <div className="mt-2 text-sm font-medium text-gray-500 md:text-base">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}


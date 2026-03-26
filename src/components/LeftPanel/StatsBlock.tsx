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
      <div className="grid grid-cols-3 gap-2 pt-8 md:gap-3">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            variants={itemVariants}
            className="relative flex flex-col items-center justify-center p-4 text-center"
          >
            <div className="font-mono text-4xl font-bold text-white md:text-5xl">
              [{item.value}]
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-400 md:text-sm">
              {item.label.replace(' EXP.', '')}
            </div>
            {index < stats.length - 1 && (
              <span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-white/15 md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}


'use client'
import { motion } from 'framer-motion'

export const Overview = ({ overview = "No overview available." }: { overview?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-auto h-auto mt-[50px] px-4 ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-24 2xl:ml-32 text-2xl sm:text-3xl font-bold lg:mt-4 rounded-lg"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center lg:text-left">Overview</h2>
      <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground text-center lg:text-left">
       {overview}
      </p>
    </motion.div>
  )
}
'use client'
import { motion } from 'framer-motion'

export const Overview = ({ overview = "No overview available." }: { overview?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-auto h-full mt-[50px] mx-4 sm:mx-6 md:mx-10 lg:mx-48 rounded-lg"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center lg:text-left">Overview</h2>
      <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground text-center lg:text-left">
        {overview}
      </p>
    </motion.div>
  )
}
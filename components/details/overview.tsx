'use client'
import { motion } from 'framer-motion'

export const Overview = ({ overview = "No overview available." }: { overview?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full h-auto mt-[50px] px-0 lg:px-4 mx-auto text-2xl sm:text-3xl font-bold lg:mt-4 rounded-lg max-w-screen-res"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-left mx-4">
        Overview
      </h2>
      <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground  text-justify mx-4">
        {overview}
      </p>
    </motion.div>
  )
}

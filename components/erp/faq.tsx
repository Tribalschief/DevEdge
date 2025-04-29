// components/FAQSection.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type FAQ = {
  question: string
  answer: string
}

export  function ERPFAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index)

  return (
    
      

      <div className="space-y-5">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <motion.div
              key={i}
              layout
              initial={{ borderRadius: 12 }}
              className="bg-white shadow-sm rounded-md border overflow-hidden"
            >
              <div className="flex justify-between items-start sm:items-center">
                <div className="p-4 pr-2 w-full">
                  <p className="font-semibold text-base sm:text-lg">
                    {String(i + 1).padStart(2, '0')} {faq.question}
                  </p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-2 text-gray-600 text-sm sm:text-base"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  onClick={() => toggle(i)}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl transition-colors duration-300 ${
                    isOpen ? 'bg-purple-700 text-white' : 'bg-gray-300 text-black'
                  }`}
                >
                  {isOpen ? '−' : '+'}
                </motion.button>
              </div>
            </motion.div>
          )
        })}
      </div>
  )
}

// components/FAQSection.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type FAQ = {
  question: string;
  answer: string;
};

// **Ensure this index is correct for the "What industries..." question**
const TARGET_FAQ_INDEX = 6; // 7th item is index 6

export function ERPFAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 sm:mb-10">
        <span className="text-black">Frequently Asked </span>
        <span className="text-purple-600 block">Questions</span>
      </h2>
      <div className="space-y-5">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          const isTargetFaq = i === TARGET_FAQ_INDEX;

          // Process lines only if it's the target FAQ and it's open
          // No need to process otherwise
          const answerLines = isOpen && isTargetFaq
            ? faq.answer.split('\n').filter(line => line.trim().length > 0)
            : [];

          return (
            <motion.div
              key={i}
              layout
              initial={{ borderRadius: 12 }}
              className="bg-white shadow-sm rounded-md border overflow-hidden"
            >
              <div className="flex justify-between items-start sm:items-center">
                {/* Content Area */}
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
                        className="overflow-hidden mt-4 text-gray-600 text-sm sm:text-base" // Added more top margin (mt-4)
                      >
                        {/* ---- Conditional Rendering Logic ---- */}
                        {isTargetFaq ? (
                          <div className="space-y-2"> {/* Vertical spacing between lines */}
                            {answerLines.map((line, lineIndex) => {
                              const isListItem = line.trim().startsWith('•');
                              const textContent = line.replace(/^•\s*/, '').trim();

                              if (isListItem) {
                                // --- Bullet Item Layout ---
                                return (
                                  <div
                                    key={lineIndex}
                                    className="flex justify-between items-start w-full" // Use flex justify-between
                                  >
                                    {/* Text aligned left (default) */}
                                    <span className="pr-4">• {textContent} </span> {/* Add padding-right to text */}

                                    
                                  </div>
                                );
                              } else {
                                // --- Centered Paragraph/Header Layout ---
                                return (
                                  <div key={lineIndex} className="text-center w-full py-1"> {/* Center align text, add padding */}
                                    {textContent}
                                  </div>
                                );
                              }
                            })}
                          </div>
                        ) : (
                          // Render other FAQs normally (preserving line breaks)
                          <p className="whitespace-pre-line">{faq.answer}</p>
                        )}
                        {/* ---- End Conditional Rendering Logic ---- */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Button Area */}
                <motion.button
                  onClick={() => toggle(i)}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl transition-colors duration-300 ${
                    isOpen
                      ? 'bg-purple-700 text-white'
                      : 'bg-gray-300 text-black'
                  }`}
                >
                  {isOpen ? '−' : '+'}
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
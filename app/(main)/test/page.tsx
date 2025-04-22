'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import core01 from "@/public/core/core01.png"
import core02 from "@/public/core/core02.png"
import core03 from "@/public/core/core03.png"
import core04 from "@/public/core/core04.png"
import core05 from "@/public/core/core05.png"
import core06 from "@/public/core/core06.png"
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Try(){
  return (
    <main className="min-h-screen p-4 md:p-8">


    <section>
      Test
    </section>
  </main>
  )
}

'use client'

import { motion } from 'framer-motion'

const SectionHeading = ({ children, className = "" }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold text-center mb-12 relative text-light
        before:content-[''] before:absolute before:bottom-[-10px] before:left-1/2
        before:w-20 before:h-1 before:bg-primary before:transform before:-translate-x-1/2
        ${className}`}
    >
      {children}
    </motion.h2>
  )
}

export default SectionHeading 
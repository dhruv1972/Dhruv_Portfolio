'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 pb-6 px-8">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-primary">Hello, I'm</span>
            <br />
            Dhruv Chavda
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium mb-6 text-gray-600 dark:text-gray-400"
          >
            Software Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
          >
            Based in Toronto, Canada (open to relocation). Specialized in building exceptional digital experiences
            with a focus on responsive design and clean code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/#contact"
              className="bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary/80 transition-all"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-primary/20 rounded-full overflow-hidden">
            <Image
              src="/img/profile.jpg"
              alt="Dhruv Chavda"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <Link href="/#about" aria-label="Scroll to About section">
          <FaArrowDown className="text-primary text-2xl" />
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero 
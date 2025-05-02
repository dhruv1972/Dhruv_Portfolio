'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="border-t border-solid border-primary/20 py-8 px-8 bg-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-light">DHRUV CHAVDA</h2>
          <p className="text-gray-300 mb-4">
            Software Developer based in Toronto, Canada.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/dhruv-chavda"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-primary"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/dhruv-chavda"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-primary"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:chavda.dhruv@gmail.com"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-primary"
            >
              <FaEnvelope size={24} />
            </motion.a>
            <motion.a
              href="tel:4378588128"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-primary"
            >
              <FaPhone size={24} />
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col md:items-end">
          <nav className="flex flex-col gap-2 mb-4">
            <Link href="/#about" className="text-gray-300 hover:text-primary">
              About
            </Link>
            <Link href="/#experience" className="text-gray-300 hover:text-primary">
              Experience
            </Link>
            <Link href="/#projects" className="text-gray-300 hover:text-primary">
              Projects
            </Link>
            <Link href="/#skills" className="text-gray-300 hover:text-primary">
              Skills
            </Link>
            <Link href="/#education" className="text-gray-300 hover:text-primary">
              Education
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="mt-8 border-t border-solid border-primary/20 pt-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Dhruv Chavda. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 
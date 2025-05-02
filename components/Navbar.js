'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname()

  return (
    <Link href={href} className={`${className} relative group px-3 py-2`}>
      {title}
      <span className={`absolute left-0 bottom-0 h-[2px] bg-primary inline-block
        group-hover:w-full transition-[width] duration-300 ease
        ${pathname === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={`w-full fixed top-0 z-50 px-8 py-4 font-medium flex items-center justify-between text-light
      transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-sm shadow-lg' : ''}`}>

      <button
        className="lg:hidden flex flex-col justify-center items-center z-50 text-light"
        onClick={handleClick}
      >
        {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <Link href="/" className="font-bold text-xl text-light">
          DHRUV CHAVDA
        </Link>

        <nav className="flex items-center justify-center flex-wrap gap-4">
          <motion.a
            href="https://github.com/dhruv1972"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 text-light hover:text-primary"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/dhruv-chavda-220775214/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 text-light hover:text-primary"
          >
            <FaLinkedin size={30} />
          </motion.a>
        </nav>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex w-full justify-between items-center">
        <Link href="/" className="font-bold text-xl text-light">
          DHRUV CHAVDA
        </Link>

        <nav className="flex items-center justify-center flex-wrap text-light">
          <CustomLink href="/#about" title="About" />
          <CustomLink href="/#experience" title="Experience" />
          <CustomLink href="/#projects" title="Projects" />
          <CustomLink href="/#skills" title="Skills" />
          <CustomLink href="/#education" title="Education" />
          <CustomLink href="/#contact" title="Contact" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-4">
          <motion.a
            href="https://github.com/dhruv1972"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 text-light hover:text-primary"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/dhruv-chavda-220775214/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 text-light hover:text-primary"
          >
            <FaLinkedin size={30} />
          </motion.a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="min-w-[70vw] fixed top-0 left-0 h-screen z-40 bg-dark/90 backdrop-blur-md flex flex-col justify-between items-center py-20 text-light"
        >
          <nav className="flex flex-col items-center justify-center gap-6">
            <CustomLink
              href="/#about"
              title="About"
              className="text-xl"
              onClick={() => setIsOpen(false)}
            />
            <CustomLink
              href="/#experience"
              title="Experience"
              className="text-xl"
              onClick={() => setIsOpen(false)}
            />
            <CustomLink
              href="/#projects"
              title="Projects"
              className="text-xl"
              onClick={() => setIsOpen(false)}
            />
            <CustomLink
              href="/#skills"
              title="Skills"
              className="text-xl"
              onClick={() => setIsOpen(false)}
            />
            <CustomLink
              href="/#education"
              title="Education"
              className="text-xl"
              onClick={() => setIsOpen(false)}
            />
            <CustomLink
              href="/#contact"
              title="Contact"
              className="text-xl"
              onClick={() => setIsOpen(false)}
            />
          </nav>
        </motion.div>
      ) : null}
    </header>
  )
}

export default Navbar 
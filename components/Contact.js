'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    // In a real implementation, you would send the form data to a server
    // This is a simulation for the portfolio
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Contact Me</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-light">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-primary mt-1" />
                  <div>
                    <p className="font-medium text-light">Email</p>
                    <a href="mailto:chavda.dhruv@gmail.com" className="text-gray-300 hover:text-primary">
                      chavda.dhruv@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhone className="text-primary mt-1" />
                  <div>
                    <p className="font-medium text-light">Phone</p>
                    <a href="tel:4378588128" className="text-gray-300 hover:text-primary">
                      437-858-8128
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary mt-1" />
                  <div>
                    <p className="font-medium text-light">Location</p>
                    <p className="text-gray-300">
                      Toronto, Canada (open to relocation)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3 text-light">Connect with me:</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/dhruv1972"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 hover:text-primary"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/dhruv-chavda-220775214/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-300 hover:text-primary"
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-light">Send Me a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-light">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-700 text-light"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-light">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-700 text-light"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1 text-light">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-700 text-light"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-light">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-700 text-light resize-none"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/80 transition-all
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitSuccess && (
                  <p className="mt-3 text-green-600 dark:text-green-400">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}

                {submitError && (
                  <p className="mt-3 text-red-600 dark:text-red-400">
                    Oops! Something went wrong. Please try again later.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 

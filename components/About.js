'use client'

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const About = () => {
  return (
    <section id="about" className="py-16 px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>About Me</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-lg text-gray-300"
        >
          <p>
            Hi there! I'm Dhruv Chavda, a Software Developer based in Toronto, Canada with a strong passion for creating
            efficient and user-friendly applications. I have experience working with various technologies including
            Node.js, React, Next.js, and more.
          </p>

          <p>
            I'm currently pursuing a Post-Graduate diploma in Web Development at Humber College, expected to graduate in December 2025.
            Prior to that, I completed a PG diploma in Business Analysis from Sheridan College and hold a Bachelor's degree in
            Computer Engineering from Gujarat Technological University.
          </p>

          <p>
            My professional experience includes working as a Software Developer at Royal Technosoft Pvt. Ltd., where I engineered
            secure authentication systems, developed REST APIs, and created reusable components for high-traffic platforms. I'm
            passionate about building scalable applications and improving user experiences through clean, maintainable code.
          </p>

          <p>
            I'm open to new opportunities and challenges that will allow me to further develop my skills and contribute to
            innovative projects. Feel free to reach out if you'd like to discuss potential collaborations or just have a chat
            about technology!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-light">Contact Details</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="font-medium min-w-24">Location:</span>
                <span>Toronto, Canada</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium min-w-24">Email:</span>
                <a href="mailto:chavda.dhruv@gmail.com" className="text-primary hover:underline">
                  chavda.dhruv@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="font-medium min-w-24">Phone:</span>
                <a href="tel:4378588128" className="text-primary hover:underline">
                  437-858-8128
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-light">Key Interests</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="font-medium min-w-24">Frontend:</span>
                <span>React, Next.js, Angular</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium min-w-24">Backend:</span>
                <span>Node.js, Nest.js, Express</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium min-w-24">Cloud:</span>
                <span>AWS, Docker, Kubernetes</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 
'use client'

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaGraduationCap } from 'react-icons/fa'

const educationData = [
  {
    institution: "Humber College",
    degree: "PG diploma in Web Development",
    location: "Toronto, CA",
    period: "Jan. 2025 – Dec. 2025",
    gpa: "3.7"
  },
  {
    institution: "Sheridan College",
    degree: "PG diploma in Business analysis",
    location: "Toronto, CA",
    period: "Jan. 2024 – Aug. 2024",
    gpa: "3.5"
  },
  {
    institution: "Gujarat Technological University",
    degree: "Bachelor of Engineering in Computer Engineering",
    location: "Ahmedabad, India",
    period: "Aug. 2018 – May. 2022",
    gpa: "3.40"
  }
]

const EducationItem = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4 mb-12 last:mb-0"
    >
      <div className="hidden md:flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <FaGraduationCap size={20} />
        </div>
        <div className="w-1 h-full bg-primary/20 rounded-full"></div>
      </div>

      <div className="flex-1 bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-light">{education.institution}</h3>
            <p className="text-primary">{education.degree}</p>
          </div>
          <div className="mt-2 md:mt-0 md:text-right">
            <p className="text-gray-300">{education.location}</p>
            <p className="text-gray-400">{education.period}</p>
          </div>
        </div>

        <p className="text-gray-300">
          <span className="font-medium">GPA:</span> {education.gpa}
        </p>
      </div>
    </motion.div>
  )
}

const Education = () => {
  return (
    <section id="education" className="py-16 px-8 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Education</SectionHeading>

        <div className="mt-16">
          {educationData.map((edu, index) => (
            <EducationItem key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 
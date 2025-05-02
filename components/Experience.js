'use client'

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaBriefcase } from 'react-icons/fa'

const experienceData = [
  {
    title: "Software Developer",
    company: "Royal Technosoft Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "Jun. 2022 – Jun. 2023",
    description: [
      "Engineered a secure user authentication and authorization system using Auth0 and event-driven architecture, enhancing user data integration efficiency by 30% across internal and external platforms.",
      "Created REST APIs for end-to-end user onboarding and business registration processes, enabling seamless data flow and reducing user onboarding time by 20%.",
      "Developed APIs to provide efficient data access for frontend applications, improving data handling speed by 40%.",
      "Developed reusable common components using React and Bootstrap for a high-traffic banking platform serving millions of users.",
      "Configured Redux Toolkit for efficient state management and established RxJS-based API integration, ensuring seamless communication between the frontend and backend services.",
      "Reduced front-end page load time by 30% via code-splitting and lazy loading, leading to a 15% increase in user engagement and a 10% decrease in bounce rate.",
      "Achieved 90% test coverage with comprehensive unit testing using Jest, reducing post-release defects by 25% and ensuring robust frontend reliability.",
      "Streamlined deployment processes by setting up a custom CI/CD pipeline and deploying the app to Azure, facilitating efficient development and testing."
    ],
    technologies: "Node.js, Nest.js, Docker, React, RxJs, Bootstrap, Typescript"
  },
  {
    title: "Software Developer Intern",
    company: "Unnati informatics LLP",
    location: "Ahmedabad, India",
    period: "Jan. 2022 – May. 2022",
    description: [
      "Developed and integrated frontend reusable UI components with backend APIs, enhancing overall system modularity and maintainability.",
      "Applied object-oriented programming principles to design and implement scalable, maintainable software solutions in a collaborative development environment.",
      "Collaborated with clients to gather requirements and provide technical solutions resulting in a 100% satisfaction rate."
    ],
    technologies: ""
  }
]

const ExperienceItem = ({ experience, index }) => {
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
          <FaBriefcase size={20} />
        </div>
        <div className="w-1 h-full bg-primary/20 rounded-full"></div>
      </div>

      <div className="flex-1 bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-light">{experience.title}</h3>
            <p className="text-primary">{experience.company}</p>
          </div>
          <div className="mt-2 md:mt-0 md:text-right">
            <p className="text-gray-300">{experience.location}</p>
            <p className="text-gray-400">{experience.period}</p>
          </div>
        </div>

        {experience.technologies && (
          <p className="text-gray-300 italic mb-4">
            <span className="font-medium">Technologies:</span> {experience.technologies}
          </p>
        )}

        <ul className="ml-5 space-y-2">
          {experience.description.map((item, idx) => (
            <li key={idx} className="list-disc text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-8 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Experience</SectionHeading>

        <div className="mt-16">
          {experienceData.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 
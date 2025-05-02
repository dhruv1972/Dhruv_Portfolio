'use client'

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { FaCode, FaServer, FaDatabase, FaCloud, FaBrain, FaProjectDiagram } from 'react-icons/fa'

const skillsData = [
  {
    category: "Programming Languages",
    icon: <FaCode />,
    skills: ["C++", "Java(Object Oriented Programming)", "Python", "TypeScript", "JavaScript", "PHP", "Go", "SQL", "HTML", "CSS"]
  },
  {
    category: "Frontend",
    icon: <FaCode />,
    skills: ["Angular", "React", "Next.js", "Material UI", "Tailwind CSS", "Bootstrap", "Webpack", "Babel", "Jest"]
  },
  {
    category: "Backend",
    icon: <FaServer />,
    skills: ["Node.js", "Django", "Flask", "Nest.js", "Express.js", "Spring Boot", "GraphQL", "REST", "JUnit", "Mocha", "Swagger"]
  },
  {
    category: "Database / Cloud",
    icon: <FaDatabase />,
    skills: ["Amazon Web Services(AWS)", "PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    category: "Machine Learning",
    icon: <FaBrain />,
    skills: ["TensorFlow", "NLP", "LLM", "PyTorch", "Keras", "OpenCV", "Pandas", "Numpy"]
  },
  {
    category: "Project Management & Tools",
    icon: <FaProjectDiagram />,
    skills: ["Jira", "Agile", "Scrum", "Confluence", "Git", "Github", "Version Control", "VS Code", "Slack"]
  },
  {
    category: "DevOps",
    icon: <FaCloud />,
    skills: ["Docker", "Kubernetes", "Jenkins", "Apache Kafka", "GitHub Actions", "SonarQube", "Linux", "OpenAPI"]
  }
]

const SkillCategory = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-primary text-xl">{category.icon}</span>
        <h3 className="text-xl font-semibold text-light">{category.category}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionHeading>Skills</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


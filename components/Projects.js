'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from './SectionHeading'

const projectsData = [
  {
    title: "SnapBrief",
    description: "Designed and built a full-stack SaaS platform for video summarization, leveraging OpenAI APIs to convert video content into text for enhanced accessibility. Integrated Stripe for secure payments, ensuring smooth and reliable transactions.",
    tags: ["Next.js", "Sass", "Tailwind CSS", "OpenAI", "Stripe"],
    imageUrl: "/img/project1.jpg"
  },
  {
    title: "ResourceHub",
    description: "Created a web app to match resources with project requirements using the Hungarian algorithm, ensuring optimal team allocation. Added an intelligent search feature to query resource data, improving onboarding speed by 30% and providing enhanced visibility into resource availability and project status.",
    tags: ["React.js", "Python", "Flask", "Material UI", "Clerk", "LangChain", "Google Palm", "ChromaDB"],
    imageUrl: "/img/project2.jpeg"
  }
]

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative w-full h-64">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-light">{project.title}</h3>

        <p className="text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-primary/20 text-primary text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <SectionHeading>My Projects</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 
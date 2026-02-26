"use client";
import { motion } from "framer-motion";import FadeIn from "../components/FadeIn";
export default function Projects() {
  const projects = [
  {
    title: "Smart Demand Optimization System",
    description:
      "AI-powered demand forecasting and stock optimization system using Python, SQL, and Power BI.",
    tech: ["Python", "SQL", "Airflow", "Power BI"],
    github: "#",
    live: "#",
  },
  {
    title: "Asset Mapping for Disaster Management",
    description:
      "GIS-based real-time asset mapping and analytics platform for disaster response and insurance support.",
    tech: ["GIS", "Python", "Mapping APIs", "Cloud"],
    github: "#",
    live: "#",
  },
  {
    title: "AgriGenix",
    description:
      "AI-powered plant disease detection and farmer support platform built for Smart India Hackathon.",
    tech: ["Machine Learning", "NLP", "Full Stack"],
    github: "#",
    live: "#",
  },
];

  return (
    <FadeIn>
    <section
      id="projects"
      className="py-28 bg-black text-white px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Projects
        </h2>

<motion.div
  className="grid md:grid-cols-2 gap-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
  {projects.map((project, index) => (
    <motion.div
      key={index}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-white hover:-translate-y-1 transition-all duration-300"
    >
      <h3 className="text-2xl font-semibold mb-4">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((techItem, i) => (
          <span
            key={i}
            className="text-xs bg-neutral-800 px-3 py-1 rounded-full text-gray-300"
          >
            {techItem}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        <a
          href={project.github}
          className="border border-neutral-700 px-4 py-2 rounded-lg hover:border-white transition"
        >
          GitHub
        </a>

        <a
          href={project.live}
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
    </FadeIn>
  );
}
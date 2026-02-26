"use client";

import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

export default function Projects() {
  const projects = [
    {
      title: "SteamSAGE – Steam Semantic Search",
      description:
        "A deployed semantic search engine for Steam games that retrieves results based on meaning rather than keywords. Built using NLP embeddings and deployed for live inference.",
      tech: [
        "Semantic Search",
        "NLP",
        "Embeddings",
        "Hugging Face",
        "FastAPI",
        "Vercel",
      ],
      live: "https://steamsage.vercel.app/",
      github: "https://github.com/sarvadnyaKatode",
      highlights: [
        "Search games using natural language queries",
        "Retrieve semantically similar games & review scores",
        "Live deployed semantic model",
      ],
      learnings: [
        "Raw Steam data requires heavy transformation before analytics",
        "Outliers distort gaming metrics",
        "Semantic embeddings unlock insights beyond SQL",
        "BI + NLP together provide explanation + context",
      ],
      future: [
        "Real-time ingestion & streaming analytics",
        "Game Success Predictor",
      ],
    },
    {
      title: "Smart Demand Optimization System",
      description:
        "End-to-end ETL pipeline with SQL warehousing and Airflow orchestration. Built time-series forecasting system for retail stock optimization.",
      tech: ["Python", "SQL", "Apache Airflow", "Forecasting"],
      github: "https://github.com/sarvadnyaKatode",
    },
    {
      title: "Driver Drowsiness Detection",
      description:
        "Real-time deep learning system using CNN + LSTM. Integrated OpenCV for live inference and optimized model for deployment readiness.",
      tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      github: "https://github.com/sarvadnyaKatode",
    },
  ];

  return (
    <FadeIn>
      <section id="projects" className="py-24 bg-neutral-950 text-white px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center">
            Projects
          </h2>

          <motion.div
            className="grid md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-white hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="text-gray-400 text-sm space-y-2 mb-6">
                    {project.highlights.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                )}

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="text-xs bg-neutral-800 px-3 py-1 rounded-md text-gray-300 border border-neutral-800"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Learnings */}
                {project.learnings && (
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                      Key Learnings
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {project.learnings.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Future */}
                {project.future && (
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                      Future Enhancements
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {project.future.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border border-neutral-700 px-4 py-2 rounded-lg hover:border-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/sarvadnyaKatode"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Explore More Projects
            </a>
          </div>

        </div>
      </section>
    </FadeIn>
  );
}
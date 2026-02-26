"use client";

import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

export default function Projects() {
  const projects = [
    {
      title: "Steam Gaming Analytics Platform",
      description:
        "Built a Spark-based data processing pipeline to analyze large-scale gaming datasets. Designed transformations, optimized Parquet storage, and generated engagement insights using cloud-based architecture.",
      tech: ["Apache Spark", "AWS S3", "PySpark", "Power BI"],
      github: "https://github.com/sarvadnyaKatode",
    },
    {
      title: "Smart Demand Optimization System",
      description:
        "Developed an end-to-end ETL pipeline with SQL warehousing and Airflow orchestration. Implemented time-series forecasting to improve inventory planning and reduce stockouts.",
      tech: ["Python", "SQL", "Apache Airflow", "Forecasting"],
      github: "https://github.com/sarvadnyaKatode",
    },
    {
      title: "Driver Drowsiness Detection",
      description:
        "Designed a real-time deep learning system using CNN and LSTM models. Integrated OpenCV for live inference and evaluated performance for deployment readiness.",
      tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      github: "https://github.com/sarvadnyaKatode",
    },
  ];

  return (
    <FadeIn>
      <section
        id="projects"
        className="py-24 bg-neutral-950 text-white px-6"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center">
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
                transition: { staggerChildren: 0.15 },
              },
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

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

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

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-neutral-700 px-4 py-2 rounded-lg hover:border-white transition"
                >
                  View on GitHub
                </a>
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
              Explore More Projects on GitHub
            </a>
          </div>

        </div>
      </section>
    </FadeIn>
  );
}
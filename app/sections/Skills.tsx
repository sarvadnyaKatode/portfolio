"use client";

import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

export default function Skills() {
  const skillGroups = [
    {
      category: "Data Engineering",
      skills: [
        "Apache Spark",
        "PySpark",
        "SQL",
        "ETL Pipelines",
        "Data Modeling",
        "Airflow",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        "AWS S3",
        "EC2",
        "IAM",
        "CloudFront",
        "CI/CD",
        "Terraform",
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Time-Series Forecasting",
        "Deep Learning",
        "NLP",
        "TensorFlow",
      ],
    },
    {
      category: "Systems & Tooling",
      skills: [
        "Git",
        "Linux",
        "Docker (Learning)",
        "Power BI",
        "Distributed Systems",
      ],
    },
  ];

  return (
    <FadeIn>
      <section id="skills" className="text-4xl md:text-5xl font-semibold tracking-tight py-28 bg-neutral-950 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Skills
          </h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
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
            {skillGroups.map((group, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-6 text-gray-300 tracking-wide">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm bg-neutral-900 px-3 py-1.5 rounded-md text-gray-400 border border-neutral-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </FadeIn>
  );
}
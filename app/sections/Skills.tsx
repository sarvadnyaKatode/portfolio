"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      category: "Programming",
      skills: ["Python", "SQL", "TypeScript", "JavaScript"],
    },
    {
      category: "AI / Data",
      skills: ["Machine Learning", "NLP", "Pandas", "Scikit-Learn"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Terraform", "CI/CD", "CloudFront", "S3"],
    },
    {
      category: "Tools & Systems",
      skills: ["Git", "Linux", "Airflow", "Power BI"],
    },
  ];

  return (
    <section id="skills" className="py-28 bg-neutral-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Skills
        </h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
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
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-300">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm bg-neutral-800 px-3 py-1 rounded-full text-gray-400"
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
  );
}
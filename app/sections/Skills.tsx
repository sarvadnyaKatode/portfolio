"use client";

import { motion } from "framer-motion";
import { Database, BrainCircuit, Cloud, Wrench, ChevronRight } from "lucide-react";

const skillsData = [
  {
    category: "Data Engineering",
    icon: <Database className="w-7 h-7" />,
    color: "primary",
    items: [
      { name: "Apache Spark / PySpark", level: 90 },
      { name: "SQL & Data Warehousing", level: 95 },
      { name: "ETL Pipelines / Airflow", level: 85 },
    ],
    tags: ["Spark", "PostgreSQL", "Airflow", "dbt"],
    project: "AI Retail Intelligence Platform",
  },
  {
    category: "AI & Machine Learning",
    icon: <BrainCircuit className="w-7 h-7" />,
    color: "secondary",
    items: [
      { name: "TensorFlow / PyTorch", level: 85 },
      { name: "Prophet & Time-Series", level: 92 },
      { name: "NLP & Transformers", level: 80 },
    ],
    tags: ["Scikit-learn", "Prophet", "HuggingFace", "OpenCV"],
    project: "Driver Drowsiness, SteamSAGE",
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud className="w-7 h-7" />,
    color: "primary",
    items: [
      { name: "AWS (S3, EC2, IAM)", level: 80 },
      { name: "Docker & Containers", level: 78 },
      { name: "Streamlit & FastAPI", level: 88 },
    ],
    tags: ["AWS", "Docker", "FastAPI", "Streamlit"],
    project: "SteamSAGE, Retail Platform",
  },
  {
    category: "Languages & Tools",
    icon: <Wrench className="w-7 h-7" />,
    color: "secondary",
    items: [
      { name: "Python", level: 96 },
      { name: "TypeScript / React", level: 75 },
      { name: "Linux / Git / Bash", level: 85 },
    ],
    tags: ["Python", "TypeScript", "Git", "Linux"],
    project: "All Projects, Portfolio",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-secondary font-mono text-sm mb-3 tracking-widest uppercase">// what I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expertise</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group glass p-7 rounded-2xl border border-white/5 relative overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2 ${
                group.color === "primary"
                  ? "hover:border-primary/40 hover:shadow-[0_15px_50px_rgba(0,245,212,0.12)]"
                  : "hover:border-secondary/40 hover:shadow-[0_15px_50px_rgba(123,97,255,0.12)]"
              }`}
            >
              {/* Corner glow */}
              <div className={`absolute -top-6 -right-6 w-32 h-32 rounded-full blur-2xl transition-all duration-500 ${
                group.color === "primary" ? "bg-primary/15 group-hover:bg-primary/30" : "bg-secondary/15 group-hover:bg-secondary/30"
              }`} />

              {/* Header */}
              <div className="flex items-center gap-4 mb-7 relative z-10">
                <div className={`p-3 rounded-xl border transition-all duration-500 group-hover:scale-110 ${
                  group.color === "primary"
                    ? "border-primary/30 bg-primary/10 text-primary group-hover:shadow-[0_0_20px_rgba(0,245,212,0.3)]"
                    : "border-secondary/30 bg-secondary/10 text-secondary group-hover:shadow-[0_0_20px_rgba(123,97,255,0.3)]"
                }`}>
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{group.category}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-5 relative z-10">
                {group.items.map((item, j) => (
                  <div key={j}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-300 font-mono text-xs">{item.name}</span>
                      <span className={`font-mono text-xs ${group.color === "primary" ? "text-primary" : "text-secondary"}`}>
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.15 + 0.6, duration: 1.2, ease: "easeOut" }}
                        className={`h-full rounded-full relative ${
                          group.color === "primary"
                            ? "bg-gradient-to-r from-primary/80 to-primary"
                            : "bg-gradient-to-r from-secondary/80 to-secondary"
                        }`}
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-6 bg-white/30 blur-sm" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-6 pt-5 border-t border-white/5 relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {group.tags.map((tag, k) => (
                    <span key={k} className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                      group.color === "primary"
                        ? "border-primary/20 bg-primary/5 text-primary/80"
                        : "border-secondary/20 bg-secondary/5 text-secondary/80"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-3 h-3 text-primary" />
                  <span>Used in: <span className="text-white">{group.project}</span></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
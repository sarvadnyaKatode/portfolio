"use client";

import { motion } from "framer-motion";
import { Database, BrainCircuit, Cloud, Wrench, ChevronRight, BarChart3 } from "lucide-react";

const skillsData = [
  {
    category: "Programming",
    icon: <Code2 className="w-7 h-7" />,
    color: "primary",
    items: [
      { name: "Python (NumPy, Pandas, Scikit-learn)", level: 95 },
      { name: "SQL (Complex Queries, Joins)", level: 90 },
      { name: "R Programming", level: 75 },
    ],
    tags: ["Python", "SQL", "R", "C++"],
    project: "Driver Drowsiness, Steam Analytics",
  },
  {
    category: "Data Analytics & Tools",
    icon: <BarChart3 className="w-7 h-7" />,
    color: "secondary",
    items: [
      { name: "Statistics & Time-Series", level: 88 },
      { name: "Power BI & MS Excel", level: 92 },
      { name: "Data Storytelling", level: 90 },
    ],
    tags: ["Statistics", "Power BI", "Excel", "EDA"],
    project: "Smart Demand Optimization",
  },
  {
    category: "Big Data & Engineering",
    icon: <Database className="w-7 h-7" />,
    color: "primary",
    items: [
      { name: "Hadoop & Apache Spark", level: 85 },
      { name: "PySpark & Hive", level: 88 },
      { name: "Kafka & Airflow Pipelines", level: 80 },
    ],
    tags: ["Spark", "PySpark", "Hadoop", "Kafka"],
    project: "Steam Gaming Platform, ETL Project",
  },
  {
    category: "Machine Learning & AI",
    icon: <BrainCircuit className="w-7 h-7" />,
    color: "secondary",
    items: [
      { name: "Regression, Classification, NLP", level: 90 },
      { name: "Deep Learning (CNN-LSTM)", level: 85 },
      { name: "Model Evaluation & Metrics", level: 92 },
    ],
    tags: ["TensorFlow", "Keras", "NLP", "Computer Vision"],
    project: "Driver Drowsiness detection",
  },
  {
    category: "Cloud & Infrastructure",
    icon: <Cloud className="w-7 h-7" />,
    color: "primary",
    items: [
      { name: "AWS (S3, EC2, Lambda, Glue)", level: 85 },
      { name: "Git & Linux Bash", level: 88 },
      { name: "Docker & CI/CD Basics", level: 75 },
    ],
    tags: ["AWS", "S3", "EC2", "Git", "Linux"],
    project: "Cloud Analytics Platform",
  },
];

// Helper to keep imports clean
function Code2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                <h3 className="text-xl font-bold text-white leading-tight">{group.category}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-5 relative z-10">
                {group.items.map((item, j) => (
                  <div key={j}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-300 font-mono text-[10px] md:text-xs">{item.name}</span>
                      <span className={`font-mono text-[10px] ${group.color === "primary" ? "text-primary" : "text-secondary"}`}>
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
                    <span key={k} className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                      group.color === "primary"
                        ? "border-primary/20 bg-primary/5 text-primary/80"
                        : "border-secondary/20 bg-secondary/5 text-secondary/80"
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-3 h-3 text-primary" />
                  <span>Key Project: <span className="text-white">{group.project}</span></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
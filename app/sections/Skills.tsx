"use client";

import { motion } from "framer-motion";
import { Database, BrainCircuit, Cloud, Wrench } from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      category: "Data Engineering",
      icon: <Database className="w-8 h-8 text-primary" />,
      items: [
        { name: "Apache Spark / PySpark", proficiency: 90 },
        { name: "SQL & Data Warehousing", proficiency: 95 },
        { name: "ETL / Airflow", proficiency: 85 },
      ],
      projects: "Smart Demand Optimization, SteamSAGE",
    },
    {
      category: "AI & Machine Learning",
      icon: <BrainCircuit className="w-8 h-8 text-secondary" />,
      items: [
        { name: "Deep Learning (TensorFlow/PyTorch)", proficiency: 85 },
        { name: "Time-Series Forecasting (Prophet)", proficiency: 90 },
        { name: "NLP & Computer Vision", proficiency: 80 },
      ],
      projects: "Retail AI Platform, Driver Drowsiness",
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="w-8 h-8 text-primary" />,
      items: [
        { name: "AWS (S3, EC2, IAM)", proficiency: 80 },
        { name: "Docker & Docker Compose", proficiency: 75 },
        { name: "CI/CD & Deployment", proficiency: 70 },
      ],
      projects: "SteamSAGE Live Model, Personal Projects",
    },
    {
      category: "Languages & Tools",
      icon: <Wrench className="w-8 h-8 text-secondary" />,
      items: [
        { name: "Python", proficiency: 95 },
        { name: "TypeScript & React", proficiency: 75 },
        { name: "Linux / Git / Bash", proficiency: 85 },
      ],
      projects: "Portfolio, Formula Bharat Telemetry",
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-deep">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-white mb-4">
            <span className="text-primary">System</span>.Settings.Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-2xl relative group overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,245,212,0.15)]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 glass rounded-xl border border-white/10 group-hover:border-primary/30 group-hover:scale-110 transition-transform duration-500">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">{group.category}</h3>
              </div>

              <div className="space-y-6">
                {group.items.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300 font-mono">{item.name}</span>
                      <span className="text-primary/80 font-mono">{item.proficiency}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                      >
                         <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-[2px]"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reveal info on hover */}
              <div className="mt-8 pt-6 border-t border-white/10 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-text-muted font-mono uppercase tracking-widest mb-1 text-primary">Key Implementations</p>
                <p className="text-sm text-gray-300">{group.projects}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
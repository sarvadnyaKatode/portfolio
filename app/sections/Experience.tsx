"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Data Engineering / AI Intern",
      company: "Tech Solutions Inc.",
      location: "Mumbai, India",
      date: "Jun 2024 - Present",
      type: "work",
      description: "Building scalable data architectures and machine learning proofs-of-concept. Developed an automated ETL pipeline that reduced data processing time by 40%.",
      tech: ["Apache Spark", "Python", "AWS", "Airflow"],
    },
    {
      title: "CDAC DBDA Postgraduate",
      company: "Centre for Development of Advanced Computing",
      location: "Mumbai, India",
      date: "Sep 2023 - Mar 2024",
      type: "education",
      description: "Specialized in Big Data Analytics. Completed an intensive program covering Hadoop, Spark, Machine Learning, and Cloud architectures. Mentored juniors in Data Science.",
      tech: ["Hadoop", "Spark", "Scala", "Machine Learning"],
    },
    {
      title: "AI Systems Lead",
      company: "Formula Bharat Team",
      location: "India",
      date: "2022 - 2023",
      type: "work",
      description: "Developed telemetry and predictive systems for racing performance. Led a team of 4 to design an intelligent sensor data ingestion pipeline.",
      tech: ["Python", "TensorFlow", "IoT", "Data Engineering"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-bg-deep overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-white mb-4">
            <span className="text-primary">Timeline</span>.Log()
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-none space-y-12">
          {/* Central line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-secondary to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-[-20px] md:static md:left-auto flex items-center justify-center w-10 h-10 rounded-full border-2 border-bg-deep bg-primary text-bg-deep z-10 shadow-[0_0_15px_rgba(0,245,212,0.5)] md:mx-auto">
                {exp.type === "work" ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
              </div>

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 w-full md:w-[calc(50%-3rem)] glass p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors duration-300 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <div className={`flex flex-col mb-4 ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                  <span className="text-secondary font-mono text-sm mb-1">{exp.date}</span>
                  <h3 className="text-2xl font-bold text-white tracking-wide">{exp.title}</h3>
                  <div className="flex items-center gap-1 text-gray-400 mt-1">
                     <span className="text-primary font-medium">{exp.company}</span>
                     <span className="hidden md:inlinemx-1">•</span>
                     <span className="flex items-center gap-1 text-xs"><MapPin className="w-3 h-3"/> {exp.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                  {exp.description}
                </p>

                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono bg-white/5 px-2.5 py-1 rounded border border-white/10 text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

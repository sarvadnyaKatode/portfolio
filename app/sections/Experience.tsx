"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Engineering / AI Intern",
    company: "Tech Solutions Inc.",
    location: "Mumbai, India",
    period: "Jun 2024 – Present",
    type: "work",
    highlights: [
      "Built automated ETL pipeline reducing processing time by 40%",
      "Developed ML proof-of-concepts for predictive analytics",
      "Deployed scalable data architectures on AWS S3 + EC2",
    ],
    tech: ["Apache Spark", "Python", "AWS", "Airflow"],
  },
  {
    title: "Post-Graduate Diploma — Big Data Analytics",
    company: "CDAC (DBDA Program)",
    location: "Mumbai, India",
    period: "Sep 2023 – Mar 2024",
    type: "education",
    highlights: [
      "Specialized in Hadoop, Spark, Scala and Cloud architectures",
      "Completed capstone project on real-time streaming analytics",
      "Mentored junior batch in Data Science fundamentals",
    ],
    tech: ["Hadoop", "Spark", "Scala", "ML", "Cloud"],
  },
  {
    title: "AI Systems Lead",
    company: "Formula Bharat Racing Team",
    location: "India",
    period: "2022 – 2023",
    type: "achievement",
    highlights: [
      "Led team of 4 engineers to build telemetry ingestion system",
      "Designed intelligent sensor data pipeline for race performance",
      "Achieved measurable lap time reduction via predictive modelling",
    ],
    tech: ["Python", "TensorFlow", "IoT Sensors", "Pandas"],
  },
];

const iconMap = {
  work: <Briefcase className="w-5 h-5" />,
  education: <GraduationCap className="w-5 h-5" />,
  achievement: <Award className="w-5 h-5" />,
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">// where I&apos;ve been</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Achievements</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot (mobile: left, desktop: center) */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                    exp.type === "work"
                      ? "border-primary bg-bg-deep text-primary shadow-[0_0_20px_rgba(0,245,212,0.5)]"
                      : exp.type === "education"
                      ? "border-secondary bg-bg-deep text-secondary shadow-[0_0_20px_rgba(123,97,255,0.5)]"
                      : "border-yellow-400 bg-bg-deep text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                  }`}>
                    {iconMap[exp.type as keyof typeof iconMap]}
                  </div>
                </div>

                {/* Spacer for desktop centering */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content card (full on mobile, half on desktop) */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-14" : "md:pr-14"}`}>
                  <div className="group glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,245,212,0.08)]">
                    {/* Period badge */}
                    <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted mb-3">
                      <Calendar className="w-3 h-3 text-primary" />
                      {exp.period}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-sm mb-4">
                      <span className="text-primary font-medium">{exp.company}</span>
                      <span className="text-text-muted text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3" />{exp.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5 mb-5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-text-muted text-sm flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t, k) => (
                        <span key={k} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

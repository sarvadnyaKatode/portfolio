"use client";

import { motion } from "framer-motion";
import { Briefcase, Milestone, Award, MapPin, Calendar, Users, Cpu } from "lucide-react";

const experiences = [
  {
    title: "Data Scientist Intern",
    company: "Affordable AI",
    location: "Remote / Hybrid",
    period: "Aug 2024 – Jan 2025",
    type: "work",
    highlights: [
      "Developed data visualization dashboards to present analytical results to stakeholders.",
      "Performed data cleaning, EDA, and analysis using Python, SQL, Pandas, NumPy.",
      "Built basic ML models and visualizations to support business insights and decision-making.",
      "Gained expertise in AI/ML concepts, data manipulation, and storytelling.",
    ],
    tech: ["Python", "SQL", "Pandas", "Matplotlib", "Scikit-Learn"],
  },
  {
    title: "Race Engineering Intern",
    company: "Indian Motorsports Academy (IMA)",
    location: "Indian F4 Championship",
    period: "2025 – Present",
    type: "work",
    highlights: [
      "Selected as Top 30 Trackside Intern after a nationwide assessment.",
      "Supported real-time data acquisition, telemetry analysis, and reporting in high-pressure environments.",
      "Worked with structured datasets, system checks, and cross-functional coordination.",
      "Ensuring data accuracy and timely execution during race events.",
    ],
    tech: ["Telemetry Analysis", "Structured Datasets", "Live Reporting"],
  },
  {
    title: "Vehicle Integration Lead",
    company: "Formula Ashwariders (Formula Student Team)",
    location: "Nagpur, India",
    period: "2023 – 2025",
    type: "achievement",
    highlights: [
      "Led real-time telemetry dashboard development and optimized vehicle subsystem performance.",
      "Delivered strategic presentations leveraging expertise in Vehicle Dynamics and project management.",
      "Integrated control electronics and data acquisition systems across multiple subsystems.",
      "Applied analytical thinking and agile teamwork to deliver optimal race performance.",
    ],
    tech: ["Vehicle Dynamics", "Telemetry", "Git", "Project Management"],
  },
];

const iconMap = {
  work: <Briefcase className="w-5 h-5" />,
  education: <Milestone className="w-5 h-5" />,
  achievement: <Cpu className="w-5 h-5" />,
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
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">// professional history</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Roles</span>
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
                {/* Dash dot (mobile: left, desktop: center) */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                    exp.type === "work"
                      ? "border-primary bg-bg-deep text-primary shadow-[0_0_20px_rgba(0,245,212,0.5)]"
                      : "border-secondary bg-bg-deep text-secondary shadow-[0_0_20px_rgba(123,97,255,0.5)]"
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

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-sm mb-4">
                      <span className="text-primary font-medium">{exp.company}</span>
                      <span className="text-text-muted text-[10px] flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />{exp.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5 mb-5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-text-muted text-xs leading-relaxed flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0 w-1 h-1 rounded-full bg-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t, k) => (
                        <span key={k} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-gray-400">
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

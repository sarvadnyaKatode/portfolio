"use client";

import { motion } from "framer-motion";
import { Award, Code2, Briefcase, MapPin, GraduationCap } from "lucide-react";

const education = [
  {
    year: "2025 – Jan 2026",
    title: "PG Diploma in Big Data Analytics (DBDA)",
    institution: "CDAC – SM VITA, Mumbai",
    score: "76.8%",
    icon: <GraduationCap className="w-4 h-4" />,
    color: "primary",
  },
  {
    year: "2021 – 2025",
    title: "Bachelor of Technology – IT",
    institution: "St. Vincent Pallotti College of Engineering, Nagpur",
    icon: <Code2 className="w-4 h-4" />,
    color: "secondary",
  },
  {
    year: "2021",
    title: "HSC (Class 12th)",
    institution: "Kamla Nehru College, Nagpur",
    score: "91.20%",
    icon: <Award className="w-4 h-4" />,
    color: "primary",
  },
  {
    year: "2019",
    title: "SSC (Class 10th)",
    institution: "Tejswini Vidya Mandir, Nagpur",
    score: "80.40%",
    icon: <Award className="w-4 h-4" />,
    color: "secondary",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">// professional overview</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left: Avatar + Bio (2/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col items-center text-center gap-8"
          >
            {/* Glowing Avatar */}
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-glow" />
              <div className="relative w-56 h-56 rounded-full p-1 bg-gradient-to-r from-primary to-secondary animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-bg-deep">
                  <img
                    src="/profile.jpg"
                    alt="Sarvadnya Katode"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=Sarvadnya+Katode&size=400&background=0B0F19&color=00F5D4&bold=true";
                    }}
                  />
                </div>
              </div>
              {/* Status badge */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-bg-deep border border-primary/30 rounded-full px-3 py-1.5 text-xs font-mono text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { label: "Predictive Models", value: "4+" },
                { label: "HSC Score", value: "91.2%" },
                { label: "Data Mastery", value: "SQL/PY" },
                { label: "Location", value: <><MapPin className="w-3 h-3 inline" /> Nagpur</> },
              ].map((stat, i) => (
                <div key={i} className="glass p-3 rounded-xl border border-white/5 text-center">
                  <div className="text-lg font-bold text-primary font-mono">{stat.value}</div>
                  <div className="text-xs text-text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Story + Education Timeline (3/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-10"
          >
            {/* Bio card */}
            <div className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
              <p className="text-text-main text-lg leading-relaxed mb-5">
                Detail-oriented engineering graduate with strong foundations in <span className="text-primary font-semibold">Data Analytics, Python, SQL, and Big Data</span> technologies.
              </p>
              <p className="text-text-muted leading-relaxed">
                Backed by hands-on internship experience and a <span className="text-white font-medium">PG Diploma in Big Data Analytics (CDAC Mumbai)</span>. 
                I specialize in data cleaning, EDA, predictive modeling, and insight generation, with a growing exposure to risk analytics and business-driven decision making.
              </p>
            </div>

            {/* Education Timeline */}
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-6">// Academic Journey</p>
              <div className="relative space-y-6">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative flex gap-5 pl-3"
                  >
                    {/* Circle */}
                    <div className={`relative z-10 w-10 h-10 shrink-0 rounded-full flex items-center justify-center border-2 ${
                      edu.color === "primary"
                        ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(0,245,212,0.4)]"
                        : "border-secondary bg-secondary/10 text-secondary shadow-[0_0_15px_rgba(123,97,255,0.4)]"
                    }`}>
                      {edu.icon}
                    </div>

                    {/* Content */}
                    <div className="glass p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <h4 className="text-white font-bold text-sm md:text-base">{edu.title}</h4>
                          <p className="text-primary text-xs md:text-sm font-medium">{edu.institution}</p>
                        </div>
                        <span className="text-[10px] md:text-xs font-mono text-text-muted bg-white/5 px-2 py-1 rounded shrink-0">{edu.year}</span>
                      </div>
                      {edu.score && (
                        <p className="text-text-muted text-xs mt-2">Achievement: <span className="text-secondary font-mono">{edu.score}</span></p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
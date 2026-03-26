"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const GithubIconLg = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "AI Retail Supply Intelligence Platform",
    emoji: "🛒",
    impact: "Prevents stockouts & overstock for 100 SKUs across 10 major stores.",
    problem: "Retail networks lose revenue to stockouts while over-ordering excess inventory with no intelligent forecasting system.",
    solution: "Prophet-powered 7-day forecasting engine with dynamic safety stock and a real-time geospatial Streamlit dashboard.",
    metric: "85–92% forecast accuracy",
    tech: ["Python", "Prophet", "FastAPI", "Streamlit", "Docker"],
    github: "https://github.com/sarvadnyaKatode",
    live: "https://ai-retail-supply-intelligence-platform.streamlit.app/",
    color: "primary",
  },
  {
    title: "SteamSAGE — Semantic Game Search",
    emoji: "🎮",
    impact: "Retrieves games by meaning, not keywords — live NLP deployment.",
    problem: "Traditional game discovery relies solely on keyword matching, missing nuanced user intent.",
    solution: "Engineered a transformer embedding pipeline bridging natural language queries to semantically similar Steam games, deployed via FastAPI.",
    metric: "10k+ game embeddings",
    tech: ["NLP", "HuggingFace", "FastAPI", "Embeddings", "Vercel"],
    live: "https://steamsage.vercel.app/",
    github: "https://github.com/sarvadnyaKatode",
    color: "secondary",
  },
  {
    title: "Driver Drowsiness Detection",
    emoji: "🚗",
    impact: "Real-time CV system to detect fatigue and prevent road accidents.",
    problem: "Standard vehicles lack affordable real-time fatigue monitoring systems for drivers.",
    solution: "Trained a CNN + LSTM architecture integrated with OpenCV for high-speed live webcam inference and alert triggers.",
    metric: "< 200ms inference",
    tech: ["Python", "TensorFlow", "OpenCV", "CNN", "LSTM"],
    github: "https://github.com/sarvadnyaKatode",
    color: "primary",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-secondary font-mono text-sm mb-3 tracking-widest uppercase">// what I&apos;ve built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group glass rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer ${
                expanded === i
                  ? proj.color === "primary"
                    ? "border-primary/60 shadow-[0_0_50px_rgba(0,245,212,0.2)]"
                    : "border-secondary/60 shadow-[0_0_50px_rgba(123,97,255,0.2)]"
                  : "border-white/5 hover:border-white/15 hover:-translate-y-1"
              } ${i === 2 ? "lg:col-span-2 lg:max-w-2xl lg:mx-auto" : ""}`}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="p-7">
                {/* Impact row */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{proj.emoji}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">{proj.impact}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-text-muted mt-1 shrink-0"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Metric badge */}
                <div className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border mb-4 ${
                  proj.color === "primary"
                    ? "border-primary/30 bg-primary/5 text-primary"
                    : "border-secondary/30 bg-secondary/5 text-secondary"
                }`}>
                  ⚡ {proj.metric}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map((t, j) => (
                    <span key={j} className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/8">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expandable content */}
                <motion.div
                  initial={false}
                  animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/5 space-y-4">
                    <div className="p-4 rounded-xl bg-bg-deep/60 border border-white/5">
                      <p className="text-xs font-mono text-secondary uppercase tracking-wider mb-2">🔍 The Problem</p>
                      <p className="text-sm text-gray-300">{proj.problem}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-bg-deep/60 border border-white/5">
                      <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">⚙️ The Solution</p>
                      <p className="text-sm text-gray-300">{proj.solution}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl border transition-all ${
                            proj.color === "primary"
                              ? "bg-primary/10 text-primary border-primary/40 hover:bg-primary hover:text-bg-deep"
                              : "bg-secondary/10 text-secondary border-secondary/40 hover:bg-secondary hover:text-white"
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl border border-white/10 text-gray-300 hover:border-white/30 hover:text-white transition-all"
                      >
                        <GithubIcon /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>

                {!expanded && (
                  <p className="text-xs text-text-muted mt-3 opacity-40">Click to expand →</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/sarvadnyaKatode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass border border-white/10 text-white rounded-xl font-medium hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,245,212,0.15)] transition-all duration-300"
          >
            <GithubIconLg />
            Explore more on GitHub
            <ArrowUpRight className="w-4 h-4 opacity-50" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
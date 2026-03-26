"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

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
    impact: "Production-grade demand forecasting & inventory optimization across 100 SKUs (10 stores × 10 products).",
    problem: "Hyperlocal retail lacked data-driven inventory forecasting, causing costly stockouts and overstock situations.",
    solution: "Built time-series forecasting with Facebook Prophet (85–92% accuracy), a restock optimization engine, FastAPI backend with 8 REST APIs, and a Streamlit dashboard with geo-maps and smart alerts.",
    metric: "85–92% Forecast Accuracy",
    tech: ["Python", "FastAPI", "Streamlit", "Prophet", "Docker", "Plotly"],
    github: "https://github.com/sarvadnyaKatode/AI-Retail-Supply-Intelligence-Platform",
    demo: "https://ai-retail-supply-intelligence-platform.streamlit.app",
    color: "primary",
  },
  {
    title: "SteamSAGE – Semantic Search & Analytics",
    emoji: "🎮",
    impact: "Cloud-based big data analytics & semantic search platform on 239K+ games and 1M+ reviews.",
    problem: "Processing massive semi-structured datasets required a scalable cloud architecture with NLP-driven discovery.",
    solution: "Built AWS S3 & Glue data pipeline, developed semantic search with Sentence Transformers, processed data with Apache Spark/PySpark, and built interactive Power BI dashboards for player sentiment and engagement insights.",
    metric: "239K Games · 1M+ Reviews",
    tech: ["AWS S3", "AWS Glue", "Apache Spark", "PySpark", "NLP", "Sentence Transformers", "Power BI"],
    github: "https://github.com/sarvadnyaKatode/SteamSAGE",
    demo: "https://steamsage.vercel.app/",
    color: "secondary",
  },
  {
    title: "Driver Drowsiness Detection System",
    emoji: "🚗",
    impact: "Real-time fatigue monitoring using CNN–LSTM architecture.",
    problem: "Standard detection lacks temporal sequence modeling for accurate blink patterns.",
    solution: "Developed integrated CNN-LSTM model with OpenCV for live video stream inference.",
    metric: "89% Accuracy",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Deep Learning"],
    github: "https://github.com/sarvadnyaKatode",
    color: "primary",
  },
  {
    title: "Apache Airflow ETL Project",
    emoji: "☁️",
    impact: "Automated real-time weather data ingestion using Docker.",
    problem: "Manual data ingestion for Open-Meteo API was error-prone and non-scheduled.",
    solution: "Modular Python DAGs in Airflow to pull and process weather data automatically.",
    metric: "Real-time Pipeline",
    tech: ["Apache Airflow", "Docker", "Python", "API"],
    github: "https://github.com/sarvadnyaKatode",
    color: "secondary",
  },
];

export default function Projects() {
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group glass rounded-2xl border overflow-hidden transition-all duration-500 border-white/5 hover:border-white/15 hover:-translate-y-1 ${
                proj.color === "primary"
                  ? "hover:shadow-[0_0_50px_rgba(0,245,212,0.1)]"
                  : "hover:shadow-[0_0_50px_rgba(123,97,255,0.1)]"
              }`}
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
                </div>

                {/* Metric badge */}
                <div className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-3 py-1.5 rounded-full border mb-4 ${
                  proj.color === "primary"
                    ? "border-primary/30 bg-primary/5 text-primary"
                    : "border-secondary/30 bg-secondary/5 text-secondary"
                }`}>
                  ⚡ {proj.metric}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map((t, j) => (
                    <span key={j} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/8">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Always visible details */}
                <div className="pt-4 border-t border-white/5 space-y-4">
                  <div className="p-4 rounded-xl bg-bg-deep/60 border border-white/5">
                    <p className="text-xs font-mono text-secondary uppercase tracking-wider mb-2">🔍 Challenge</p>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{proj.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-bg-deep/60 border border-white/5">
                    <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">⚙️ Solution</p>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{proj.solution}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl border border-white/10 text-gray-300 hover:border-white/30 hover:text-white transition-all"
                    >
                      <GithubIcon /> Review Code
                    </a>
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl border transition-all ${
                          proj.color === "primary"
                            ? "border-primary/30 bg-primary/5 text-primary hover:bg-primary/15 hover:border-primary/60"
                            : "border-secondary/30 bg-secondary/5 text-secondary hover:bg-secondary/15 hover:border-secondary/60"
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
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
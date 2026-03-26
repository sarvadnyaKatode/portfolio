"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Retail Supply Intelligence Platform 🛒",
      impact: "Optimizes demand forecasting to prevent stockouts and minimize overstock.",
      problem: "Retail networks suffer 'Revenue at Risk' due to stockouts and hold excess inventory.",
      solution: "Developed a Prophet-powered 7-day forecasting engine with dynamic safety stock calculations and a geospatial dashboard.",
      tech: ["Python", "FastAPI", "Streamlit", "Prophet", "Docker"],
      github: "https://github.com/sarvadnyaKatode",
      live: "https://ai-retail-supply-intelligence-platform.streamlit.app/",
    },
    {
      title: "SteamSAGE – Semantic Search",
      impact: "Retrieves Steam games based on semantic meaning rather than keywords.",
      problem: "Traditional game discovery relies on exact keyword matching, missing user intent.",
      solution: "Engineered an NLP embedding pipeline bridging raw user queries to semantically similar games, deployed via FastAPI.",
      tech: ["NLP", "Hugging Face", "FastAPI", "Embeddings", "Vercel"],
      live: "https://steamsage.vercel.app/",
      github: "https://github.com/sarvadnyaKatode",
    },
    {
      title: "Driver Drowsiness Detection",
      impact: "Real-time deep learning system to detect driver fatigue and prevent accidents.",
      problem: "Lack of affordable, real-time monitors for driver fatigue in standard vehicles.",
      solution: "Trained a custom CNN + LSTM pipeline integrated with OpenCV for high-speed live inference.",
      tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      github: "https://github.com/sarvadnyaKatode",
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-bg-deep overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-white mb-4">
            <span className="text-secondary">import</span> Projects <span className="text-secondary">from</span> './portfolio'
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative glass border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(123,97,255,0.2)]"
            >
              {/* Content Container */}
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6 font-medium">
                    {project.impact}
                  </p>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8 hidden group-hover:flex transition-all duration-500">
                    {project.tech.map((techItem, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono bg-white/5 px-3 py-1 rounded-md text-primary border border-primary/20"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Expand on hover content */}
                  <div className="space-y-4 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    <div className="p-4 rounded-xl bg-bg-deep/50 border border-white/5">
                      <p className="text-xs text-secondary font-mono uppercase mb-1">The Problem</p>
                      <p className="text-sm text-gray-400">{project.problem}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-bg-deep/50 border border-white/5">
                      <p className="text-xs text-primary font-mono uppercase mb-1">The Solution</p>
                      <p className="text-sm text-gray-400">{project.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Always visible base badges (Fade out on hover to show expanded content) */}
                <div className="flex flex-wrap gap-2 group-hover:hidden transition-all duration-500 mt-auto pt-6 border-t border-white/10">
                    {project.tech.slice(0, 3).map((techItem, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/5 px-3 py-1 rounded-md text-gray-400 border border-white/10"
                      >
                        {techItem}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 text-gray-500">...</span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-white/10 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-sm bg-primary/10 text-primary border border-primary/30 px-4 py-2.5 rounded-xl font-medium hover:bg-primary hover:text-bg-deep transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-sm bg-white/5 text-white border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>

              </div>
              
              {/* Overlay glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/sarvadnyaKatode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <Github className="w-5 h-5" /> Explore GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
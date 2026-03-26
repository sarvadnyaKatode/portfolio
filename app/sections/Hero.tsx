"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal, ChevronRight } from "lucide-react";

export default function Hero() {
  const roles = ["AI Engineer", "Data Enthusiast", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-bg-deep text-text-main px-6 overflow-hidden pt-28 pb-16">
      {/* Background glow elements */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center relative z-10 space-y-16">
        
        {/* Top: Text & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-primary text-sm mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Sarvadnya Katode
            </span>
          </h1>

          <div className="h-12 overflow-hidden flex items-center justify-center text-xl md:text-3xl font-mono text-text-muted">
            <ChevronRight className="w-6 h-6 text-primary mr-2 inline" />
            <motion.span
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="font-medium text-white"
            >
              {roles[currentRoleIndex]}
            </motion.span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1 w-3 h-8 bg-primary block"
            />
          </div>

          <p className="text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
            Building scalable AI systems and real-world data solutions. 
            Transforming complex challenges into elegant, predictive models and intelligent architectures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary/10 text-primary border border-primary/50 rounded-xl font-medium hover:bg-primary hover:text-bg-deep transition-all duration-300 shadow-[0_0_15px_rgba(0,245,212,0.3)] hover:shadow-[0_0_30px_rgba(0,245,212,0.6)] flex items-center justify-center gap-2"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-white border border-secondary/50 rounded-xl hover:border-secondary transition-all duration-300 hover:shadow-[0_0_20px_rgba(123,97,255,0.4)] glass flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Bottom: Terminal UI */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group w-full max-w-3xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl bg-[#0B0F19] border border-white/10 overflow-hidden shadow-2xl h-[350px] flex flex-col text-left">
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <p className="ml-4 text-xs font-mono text-gray-400 flex items-center gap-2">
                <Terminal className="w-3 h-3" /> sarvadnya@ai-core ~
              </p>
            </div>
            <div className="p-6 font-mono text-sm sm:text-base text-gray-300 flex-1 overflow-hidden relative">
              <div className="space-y-4">
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.5 }}
                >
                  <span className="text-primary">❯</span> <span className="text-secondary">import</span> Brain <span className="text-secondary">from</span> 'intelligence-framework'
                </motion.div>
                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1.5 }}
                >
                  <span className="text-primary">❯</span> <span className="text-secondary">const</span> <span className="text-white">engineer</span> = <span className="text-primary">new</span> Brain({"{ role: 'AI Developer' }"})
                </motion.div>
                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 2.5 }}
                >
                  <span className="text-primary">❯</span> <span className="text-white">engineer</span>.<span className="text-[#00F5D4]">buildModels</span>()
                </motion.div>
                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 3.5 }}
                   className="text-green-400 pl-4 border-l-2 border-white/10"
                >
                  [OK] Initializing neural networks... <br/>
                  [OK] Processing 1TB data lake... <br/>
                  [OK] Model accuracy: 99.9%
                </motion.div>
                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 4.5 }}
                >
                  <span className="text-primary">❯</span> <span className="text-secondary">System ready. Awaiting input</span> <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-primary align-middle ml-1"></motion.span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal, ChevronRight, ArrowDown, Zap } from "lucide-react";

const roles = ["AI Engineer", "Data Enthusiast", "Problem Solver", "ML Architect"];

const terminalLines = [
  { delay: 0.5, content: <><span className="text-primary">❯</span> <span className="text-secondary">import</span> <span className="text-white">Brain</span> <span className="text-secondary">from</span> <span className="text-primary">&apos;intelligence-framework&apos;</span></> },
  { delay: 1.5, content: <><span className="text-primary">❯</span> <span className="text-secondary">const</span> <span className="text-white">engineer</span> = <span className="text-primary">new</span> <span className="text-[#00F5D4]">Brain</span>(<span className="text-yellow-300">&#123; role: &apos;AI Developer&apos; &#125;</span>)</> },
  { delay: 2.5, content: <><span className="text-primary">❯</span> <span className="text-white">engineer</span>.<span className="text-[#00F5D4]">loadModels</span>(<span className="text-yellow-300">&apos;production&apos;</span>)</> },
  { delay: 3.5, content: null, isOutput: true },
  { delay: 4.5, content: <><span className="text-primary">❯</span> <span className="text-secondary">// System ready. Awaiting input&hellip;</span></> },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-bg-deep text-text-main overflow-hidden pt-20 pb-16">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px] pointer-events-none animate-float" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[130px] pointer-events-none" style={{animationDelay: "3s"}} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-10">

        {/* Dynamic greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-primary/30 text-primary text-sm font-mono"
        >
          <Zap className="w-3.5 h-3.5 animate-pulse" />
          {greeting}, I&apos;m building the future with AI
          <span className="relative flex h-2.5 w-2.5 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            Hi, I&apos;m
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient">
              Sarvadnya Katode
            </span>
          </h1>
        </motion.div>

        {/* Animated Role Switcher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 h-12 font-mono text-xl md:text-2xl text-text-muted"
        >
          <ChevronRight className="w-5 h-5 text-primary shrink-0" />
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="text-white font-semibold"
          >
            {roles[roleIndex]}
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity }}
            className="w-[3px] h-7 bg-primary rounded-full"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Building scalable AI systems and real-world data solutions.
          Turning complex challenges into elegant, predictive models and intelligent architectures.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-primary text-bg-deep rounded-xl font-bold hover:shadow-[0_0_40px_rgba(0,245,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Projects
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-white border border-white/10 rounded-xl hover:border-secondary/60 hover:bg-secondary/10 transition-all duration-300 glass flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(123,97,255,0.3)]"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="w-full max-w-3xl group"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700" />
            <div className="relative rounded-2xl bg-[#080C14] border border-white/10 overflow-hidden shadow-2xl text-left">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-400 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-400 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80 hover:bg-green-400 transition-colors cursor-pointer" />
                </div>
                <p className="text-xs font-mono text-gray-500 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3" /> sarvadnya@ai-core ~ — zsh
                </p>
                <div className="w-12" />
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm text-gray-300 space-y-3 min-h-[200px]">
                {terminalLines.map((line, i) =>
                  line.isOutput ? (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: line.delay }}
                      className="text-green-400 pl-4 border-l-2 border-green-500/30 space-y-0.5"
                    >
                      <p>[✓] Initializing neural networks...</p>
                      <p>[✓] Loading 1TB data lake...</p>
                      <p>[✓] Model accuracy: <span className="text-primary">99.9%</span></p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: line.delay }}
                    >
                      {line.content}
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 text-text-muted text-xs font-mono"
        >
          <span>scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
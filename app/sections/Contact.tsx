"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { useState } from "react";

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socials = [
  { icon: <GithubIcon />, label: "GitHub", href: "https://github.com/sarvadnyaKatode", color: "hover:text-white hover:border-white/40" },
  { icon: <LinkedinIcon />, href: "https://linkedin.com/in/sarvadnya-katode", label: "LinkedIn", color: "hover:text-[#0077B5] hover:border-[#0077B5]/40" },
  { icon: <Mail className="w-5 h-5" />, href: "mailto:sarvadnyakatode@gmail.com", label: "Email", color: "hover:text-primary hover:border-primary/40" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-secondary/10 rounded-t-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">// get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connect</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mt-4">
            Whether it&apos;s a job opportunity, project collaboration, or just a hello — my inbox is always open.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-lg font-bold text-white font-mono">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-text-muted">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  Mumbai, Maharashtra, India
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  sarvadnyakatode@gmail.com
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Open to AI & Data Engineering roles
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-text-muted uppercase tracking-widest">Find me on</p>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 glass rounded-xl border border-white/5 text-text-muted transition-all duration-300 ${s.color} group`}
                >
                  {s.icon}
                  <span className="text-sm font-medium group-hover:text-white transition-colors">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass p-8 rounded-2xl border border-white/5">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="text-5xl">🎉</div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-text-muted">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2 text-sm border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-primary uppercase tracking-wider">Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-primary uppercase tracking-wider">Email</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-primary uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      placeholder="Project collaboration, job opportunity..."
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-primary uppercase tracking-wider">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hello Sarvadnya, I'd like to..."
                      className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-bg-deep font-bold py-4 rounded-xl hover:shadow-[0_0_40px_rgba(0,245,212,0.4)] transition-all duration-300 disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-bg-deep/30 border-t-bg-deep rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

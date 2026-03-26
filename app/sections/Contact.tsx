"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-bg-deep overflow-hidden">
       {/* Background glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/10 rounded-t-full blur-[120px] pointer-events-none" />

       <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-12"
         >
           <h2 className="text-5xl md:text-6xl font-bold font-mono tracking-tight text-white mb-6">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Let's Connect</span>
           </h2>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Whether you have a question, a project idea, or just want to say hi, my inbox is always open. 
             I'll try my best to get back to you!
           </p>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="glass p-8 md:p-12 rounded-3xl border border-white/10 max-w-2xl mx-auto"
         >
            <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-mono text-primary">Name</label>
                   <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-mono text-primary">Email</label>
                   <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors" placeholder="john@example.com" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-mono text-primary">Message</label>
                 <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors resize-none" placeholder="Hello..." />
               </div>

               <button className="w-full group mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-bg-deep font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(123,97,255,0.4)] transition-all duration-300">
                 Send Message <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
               </button>
            </form>

            <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-white/10">
               <a href="mailto:sarvadnya.katode@example.com" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                 <Mail className="w-5 h-5" />
               </a>
               <a href="https://github.com/sarvadnyaKatode" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                 <Github className="w-5 h-5" />
               </a>
               <a href="https://linkedin.com/in/sarvadnya-katode" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors hover:shadow-[0_0_15px_rgba(0,245,212,0.3)]">
                 <Linkedin className="w-5 h-5" />
               </a>
            </div>
         </motion.div>
       </div>
    </section>
  );
}

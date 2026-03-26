"use client";

import { motion } from "framer-motion";
import { Award, Code2, Briefcase } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "2024",
      title: "Data Engineering / AI Intern",
      desc: "Built scalable data architectures and machine learning proofs-of-concept.",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      year: "2023",
      title: "Formula Bharat AI Systems",
      desc: "Developed telemetry and predictive systems for racing performance.",
      icon: <Award className="w-5 h-5" />,
    },
    {
      year: "2022",
      title: "Core AI Projects",
      desc: "Created deep learning vision models and intelligent automation scripts.",
      icon: <Code2 className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-white mb-4">
            <span className="text-primary">&lt;</span> About_Me <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Glowing Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 glass border-2 border-primary/30 z-10 transition-transform duration-500 group-hover:scale-[1.02]">
               <div className="w-full h-full rounded-full overflow-hidden bg-bg-deep border-[4px] border-[#0B0F19]">
                 <img 
                    src="/profile.jpg" 
                    alt="Sarvadnya Katode" 
                    className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=Sarvadnya+Katode&size=512&background=0B0F19&color=00F5D4";
                    }}
                 />
               </div>
            </div>
          </motion.div>

          {/* Right: Short Story & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <p className="text-text-main text-lg leading-relaxed mb-4">
                I am an <span className="text-primary font-semibold">AI Engineer</span> and <span className="text-secondary font-semibold">Data Enthusiast</span> obsessed with turning raw data into intelligent, scalable systems. 
              </p>
              <p className="text-text-muted leading-relaxed">
                Rather than just building models in notebooks, I engineer complete production-ready solutions—from robust data pipelines on AWS to optimizing complex inference engines. 
                Whether it's predicting retail demand or creating deep learning vision systems, I focus on the intersection of speed, scale, and intelligence.
              </p>
            </div>

            {/* Visual Timeline */}
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
              {milestones.map((milestone, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-bg-deep text-primary group-hover:bg-primary group-hover:text-bg-deep shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(0,245,212,0.5)] transition-colors z-10 ml-0 md:ml-auto">
                    {milestone.icon}
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-5 rounded-xl border border-white/5 group-hover:border-primary/50 transition-colors ml-4 md:ml-0">
                    <div className="flex flex-col mb-1">
                      <span className="text-secondary font-mono text-sm">{milestone.year}</span>
                      <h4 className="text-white font-bold text-lg">{milestone.title}</h4>
                    </div>
                    <p className="text-text-muted text-sm">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
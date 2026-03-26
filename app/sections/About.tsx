"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-white mb-4">
            <span className="text-primary">&lt;</span> About_Me <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col items-center space-y-16">
          
          {/* Centered Glowing Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 glass border-2 border-primary/30 z-10 transition-transform duration-500 group-hover:scale-[1.02]">
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

          {/* Centered Short Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="glass p-8 md:p-12 rounded-3xl">
              <p className="text-text-main text-lg md:text-xl leading-relaxed mb-6 font-medium">
                I am an <span className="text-primary font-bold">AI Engineer</span> and <span className="text-secondary font-bold">Data Enthusiast</span> obsessed with turning raw data into intelligent, scalable systems. 
              </p>
              <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                Rather than just building models in notebooks, I engineer complete production-ready solutions—from robust data pipelines on AWS to optimizing complex inference engines. 
                Whether it's predicting retail demand or creating deep learning vision systems, I focus on the intersection of speed, scale, and intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
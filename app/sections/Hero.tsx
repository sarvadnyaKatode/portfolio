"use client";

import FadeIn from "../components/FadeIn";

export default function Hero() {
  return (
    <FadeIn>
      <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-6">

        <p className="text-sm text-gray-500 mb-6 tracking-widest uppercase">
          Data Engineer • Cloud Infrastructure • AI Systems • Distributed Architecture
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mb-8">
          Designing scalable data platforms and AI systems powered by 
          <span className="text-gray-400"> cloud-native infrastructure.</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mb-10">
          I build production-ready data pipelines, distributed processing systems,
          and intelligent architectures using Spark, AWS, and modern DevOps practices.
        </p>

        <div className="flex gap-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
          >
            View Work
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 border border-gray-700 rounded-lg hover:border-white transition"
          >
            Download Resume
          </a>
        </div>

      </section>
    </FadeIn>
  );
}
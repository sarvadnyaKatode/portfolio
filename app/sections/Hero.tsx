"use client";

import FadeIn from "../components/FadeIn";

export default function Hero() {
  return (
    <FadeIn>
      <section className="py-24 bg-neutral-950 text-white px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-xs md:text-sm text-gray-500 mb-6 tracking-widest uppercase">
            Data Engineer • Cloud Infrastructure • AI Systems • Distributed Architecture
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8">
            Designing scalable data platforms and AI systems powered by
            <span className="text-gray-400"> cloud-native infrastructure.</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
            I build production-ready data pipelines, distributed processing systems,
            and intelligent architectures using Spark, AWS, and modern DevOps practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
            >
              View Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-700 rounded-lg hover:border-white transition"
            >
              Download Resume
            </a>
          </div>

        </div>
      </section>
    </FadeIn>
  );
}
"use client";

import FadeIn from "../components/FadeIn";

export default function Hero() {
  return (
    <FadeIn>
      <section className="py-28 bg-neutral-950 text-white px-6">

        <p className="text-sm text-gray-500 mb-6 tracking-widest uppercase">
          Data Engineering • Cloud Systems • Applied AI
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-4xl mb-8">
          Data Engineer focused on building
          <span className="text-gray-400"> scalable data pipelines</span> and
          <span className="text-gray-400"> cloud-based analytics systems.</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mb-10 text-lg">
          I work with Python, Spark, and AWS to build data systems,
          machine learning workflows, and real-world analytics projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
          >
            View Projects
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

      </section>
    </FadeIn>
  );
}
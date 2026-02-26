"use client";

import FadeIn from "../components/FadeIn";

export default function CoreExpertise() {
  return (
    <FadeIn>
      <section className="py-20 bg-neutral-950 text-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Scalable Data Engineering
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Designing ETL pipelines, distributed data processing systems,
              and optimized Spark workloads for large-scale datasets.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Cloud-Native Infrastructure
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Building AWS-based data lakes, CI/CD pipelines, and
              infrastructure-as-code deployments for production-ready systems.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Applied AI Systems
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Integrating machine learning models into scalable,
              fault-tolerant data architectures.
            </p>
          </div>

        </div>
      </section>
    </FadeIn>
  );
}
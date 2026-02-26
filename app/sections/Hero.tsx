import FadeIn from "../components/FadeIn";
export default function Hero() {
  return (
    <FadeIn>
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-6">
      
      <p className="text-sm text-gray-500 mb-6 tracking-widest uppercase">
        Data Engineer • Big Data • Apache Spark • AWS • ETL Pipelines • AI Engineer • Cloud Systems • Infrastructure
      </p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mb-8">
        Building scalable AI-powered systems with 
        <span className="text-gray-400"> production-grade infrastructure.</span>
      </h1>

      <p className="text-gray-400 max-w-2xl mb-10">
        I design and deploy intelligent systems using modern cloud architecture,
        infrastructure-as-code, and data-driven engineering practices.
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
          className="px-6 py-3 border border-gray-700 rounded-lg hover:border-white transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  </FadeIn>
    );
}
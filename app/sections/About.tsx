import FadeIn from "../components/FadeIn";
export default function About() {
  return (
    <FadeIn>
    <section
      id="about"
      className="py-28 bg-neutral-950 text-white px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 tracking-tight">
          About Me
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          
          I am a Data Engineer specializing in distributed data systems,
          Apache Spark optimization, and cloud-native data architecture on AWS. 
          With hands-on experience in ETL pipeline development,
          data lake implementation, and workflow orchestration, 
          I focus on building scalable analytics systems that transform
          raw data into intelligent business decisions.

        </p>

        <p className="text-gray-500 text-lg leading-relaxed">
          Based in Mumbai, I combine Big Data engineering, machine learning integration,
          and infrastructure-as-code principles to design production-ready data platforms..
        </p>
      </div>
    </section>
    </FadeIn>
  );
}
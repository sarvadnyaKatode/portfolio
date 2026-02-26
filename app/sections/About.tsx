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
          I am an AI and Data Engineer with strong foundations in systems
          thinking, cloud-native deployment, and real-world problem solving.
          I focus on building intelligent systems that are scalable,
          production-ready, and architected with long-term reliability in mind.
        </p>

        <p className="text-gray-500 text-lg leading-relaxed">
          With leadership experience in Formula Bharat and hands-on
          development across AI, GIS, and cloud infrastructure, I bring
          engineering discipline, structured execution, and deployment-level
          thinking into every project I build.
        </p>
      </div>
    </section>
    </FadeIn>
  );
}
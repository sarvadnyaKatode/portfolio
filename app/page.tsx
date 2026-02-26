import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import CoreExpertise from "./sections/CoreExpertise";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreExpertise />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
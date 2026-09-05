import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import Manifesto from "./components/Manifesto";
import Journey from "./components/Journey";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingDock from "./components/FloatingDock";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="bg-bg text-white min-h-screen selection:bg-white/20">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <TechMarquee />
        <Manifesto />
        <Journey />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  );
}

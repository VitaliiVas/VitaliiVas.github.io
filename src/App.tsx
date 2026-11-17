import Navbar from "./components/Navbar";
import LapProgress from "./components/LapProgress";
import TimingTower from "./components/TimingTower";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <LapProgress />
      <Navbar />
      <TimingTower />
      <main>
        <Hero />
        <div className="kerb-wide" aria-hidden />
        <About />
        <Projects />
        <Resume />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

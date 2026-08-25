import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Approach from "./components/Approach";
import Services from "./components/Services";
import FoundingCohort from "./components/FoundingCohort";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-noise bg-bg min-h-screen selection:bg-border-strong">
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <Process />
        <Approach />
        <Services />
        <FoundingCohort />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

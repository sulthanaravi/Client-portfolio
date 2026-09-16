import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TheatreResponse from "./components/MashupResponse";
import ViewersFeedback from "./components/viewers-feedback";

import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <TheatreResponse />
        <ViewersFeedback />
        <Contact />
      </main>
    </>
  );
}

export default App;

/** @format */
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};

export default App;

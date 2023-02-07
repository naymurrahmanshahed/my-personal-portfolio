import About from "./About";
import Bio from "./Bio";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <About />
    </div>
  );
};

export default Home;

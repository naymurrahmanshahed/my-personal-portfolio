import About from "./About";
import Bio from "./Bio";
import Contacts from "./Contacts";
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
      <Contacts />
    </div>
  );
};

export default Home;

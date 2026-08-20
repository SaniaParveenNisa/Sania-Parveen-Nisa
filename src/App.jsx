import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import AboutMe from "./Components/AboutMe";
import Educationskills from "./Components/Educationskills";
import Project from "./Components/Project";
import "./App.css";
import Contact from "./Components/Contact";

function App() {


  return (
    <>
      <Navbar />

      <section id="home">
        <Introduction />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Educationskills />
      </section>

      <section id="portfolio">
        <Project />
      </section>

      <section id="contact"><Contact/></section>
    </>
  );
}

export default App;

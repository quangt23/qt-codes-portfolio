import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Experience from "./components/Experience/exp";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
        <Intro/>
        <NavBar/>
      <Fade>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </Fade>
        <Footer/>
    </div>
  );
}
export default App;

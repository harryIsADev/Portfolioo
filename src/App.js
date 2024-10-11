import "./App.css";
import Asteriods from "./components/Asteriods";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
function App() {
  return (
    <div className="container">
      <Asteriods />
      <NavBar />
      <HeroSection />
      <About />
      <Skills />
      <ProjectSection/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

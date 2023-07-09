import "./App.css";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App bg-slate-500 dark:bg-dark-secondary overflow-hidden" >
      <Navbar />
      <HeroSection/>
      <Experience/>
      <Projects/>
      <Activities/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;

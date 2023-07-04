import "./App.css";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App bg-slate-900 overflow-hidden m-5" >
      <Navbar />
      <HeroSection/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;

import "./App.css";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App bg-slate-900 overflow-hidden">
      <Navbar />
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;

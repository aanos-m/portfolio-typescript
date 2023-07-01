import "./App.css";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;

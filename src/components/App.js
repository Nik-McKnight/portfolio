import "../style/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

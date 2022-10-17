import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Social from "./components/Home/Social";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
// // import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <header>
          <NavBar className="m-2" />
          <Home />
        </header>
        <div id="content">
          <About />
          <Experience />
          <Projects />
          <Social />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import "./App.css";

import Header from './Header'
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />

      <About />

      <Experience />

      <Projects />

      <Education />

      <Contact />

      <ScrollTop />

      <Footer />
    </>
  );
};

export default App;
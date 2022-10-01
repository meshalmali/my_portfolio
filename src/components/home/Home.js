import React from "react";
import "../../App.css";
import About from "../about/About";
import Projects from "../projects/Projects";
import Footer from "../footer/Footer";
import Skills from "../skills/Skills";

function Home() {
  return (
    <>
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default Home;

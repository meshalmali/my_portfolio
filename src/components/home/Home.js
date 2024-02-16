import React from "react";
import "../../App.css";
import About from "../about/About";
import Projects from "../projects/Projects";
import Footer from "../footer/Footer";
import Skills from "../skills/Skills";

function Home() {
  return (
    <div className="font-OakSans">
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;

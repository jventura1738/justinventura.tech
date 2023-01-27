// React:
import React from "react";

// My react components:
import Layout from "../components/Layout";
import About from "../components/Portfolio/About";
import Experience from "../components/Portfolio/Experience";
import Projects from "../components/Portfolio/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Portfolio/Skills";

import bgImage from "../assets/nightsky.jpeg";
import "../css/App.css";

const Home = () => {
  const backgroundStyles = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "top center",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    // position: "relative",
    // position: "fixed",
    zIndex: -1,
  };

  return (
    <div style={backgroundStyles}>
      <Layout>
        {/* <div style={backgroundStyles}> */}
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </div>
  );
};

export default Home;

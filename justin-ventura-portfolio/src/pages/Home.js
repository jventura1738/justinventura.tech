// React:
import React from "react";

// My react components:
import Layout from "../components/Layout";
import About from "../components/Portfolio/About";
import Bio from "../components/Portfolio/Bio";
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
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return (
    <div style={backgroundStyles}>
      <Layout>
        <About />
        <hr className="w-48 h-1 mx-auto mt-20 mb-8 bg-gray-100 border-0 rounded dark:bg-orange-700" />
        <Bio />
        <hr className="w-48 h-1 mx-auto mt-20 mb-8 bg-gray-100 border-0 rounded dark:bg-orange-700" />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </div>
  );
};

export default Home;

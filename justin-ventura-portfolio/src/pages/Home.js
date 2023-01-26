// React:
import React from "react";

// My react components:
import Layout from "../components/Layout";
import About from "../components/Portfolio/About";
import Experience from "../components/Portfolio/Experience";
import Projects from "../components/Portfolio/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Portfolio/Skills";

const Home = () => {
  return (
    <Layout>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Home;

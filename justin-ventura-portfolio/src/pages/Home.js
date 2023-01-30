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

import "../css/App.css";

const Home = ({ theme, toggleTheme, themeStyles }) => {
  const backgroundStyles = {
    backgroundImage: themeStyles[theme].backgroundImage,
    backgroundSize: "cover",
    backgroundRepear: "no-repeat",
    position: "fixed",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return (
    <div>
      <div style={backgroundStyles}></div>
      <Layout
        className="absolute"
        theme={theme}
        toggleTheme={toggleTheme}
        themeStyles={themeStyles}
      >
        <About />
        <hr
          className={`w-48 h-1 mx-auto mt-20 mb-8 border-0 rounded ${themeStyles[theme].horizontalRule}`}
        />
        <Bio emphasis={themeStyles[theme].bioEmphasis} />
        <hr
          id="skills-section"
          className={`w-48 h-1 mx-auto mt-20 mb-8 border-0 rounded ${themeStyles[theme].horizontalRule}`}
        />
        <Skills />
        <hr
          className={`w-48 h-1 mx-auto mt-20 mb-8 border-0 rounded ${themeStyles[theme].horizontalRule}`}
        />
        <Experience
          theme={theme}
          toggleTheme={toggleTheme}
          themeStyles={themeStyles}
        />
        <hr
          className={`w-48 h-1 mx-auto mt-20 mb-8 border-0 rounded ${themeStyles[theme].horizontalRule}`}
        />
        <Projects
          theme={theme}
          toggleTheme={toggleTheme}
          themeStyles={themeStyles}
        />
      </Layout>
    </div>
  );
};

export default Home;

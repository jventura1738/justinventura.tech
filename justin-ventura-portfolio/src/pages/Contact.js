import React from "react";

import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import "../css/App.css";

function Contact({ theme, toggleTheme, themeStyles }) {
  // FIXME: this is low IQ, i know, refactor later
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
    <div className="text-white">
      <div style={backgroundStyles}></div>
      <Layout theme={theme} toggleTheme={toggleTheme} themeStyles={themeStyles}>
        <div className="col-span-1 text-center">
          <h1 className="text-6xl mt-10 mb-6">Contact Me.</h1>
          <p className="text-xl">
            Leave your information below and I will get back to you ASAP!
          </p>
        </div>
        <ContactForm
          theme={theme}
          toggleTheme={toggleTheme}
          themeStyles={themeStyles}
        />
      </Layout>
    </div>
  );
}

export default Contact;

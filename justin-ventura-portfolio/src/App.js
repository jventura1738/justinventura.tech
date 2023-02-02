// React:
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// My react components:
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// CSS:
import "./css/App.css";

// Other:
import darkBgImage from "./assets/nightsky.jpeg";
import lightBgImage from "./assets/daysky.jpeg";

function App() {
  // Handle themes:
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(">debug< Theme: ", theme);
  };
  const themeStyles = {
    dark: {
      backgroundImage: `url(${darkBgImage})`,
      headerHover: "text-purple-400",
      bioEmphasis: "text-orange-400",
      experienceHover: "text-orange-400",
      experienceGradient: "from-purple-600/50 to-orange-400/50",
      horizontalRule: "bg-orange-400",
      contactFormBox: "bg-gray-500/50",
      radioButton: "orange-500",
    },
    light: {
      backgroundImage: `url(${lightBgImage})`,
      headerHover: "text-orange-400",
      bioEmphasis: "text-purple-400",
      experienceHover: "text-purple-400",
      experienceGradient: "from-orange-600/50 to-purple-400/50",
      horizontalRule: "bg-purple-500",
      contactFormBox: "bg-theme/50",
      radioButton: "purple-500",
    },
  };
  const themeProps = { theme, toggleTheme, themeStyles };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home {...themeProps} />}></Route>
          {/* <Route path="/contact" element={<Contact {...themeProps} />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

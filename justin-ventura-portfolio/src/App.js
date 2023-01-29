// React:
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// My react components:
import Home from "./pages/Home";

// CSS:
import "./css/App.css";

// Other:
import darkBgImage from "./assets/nightsky.jpeg";
import lightBgImage from "./assets/daysky.jpeg";

function App() {
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
    },
    light: {
      backgroundImage: `url(${lightBgImage})`,
      headerHover: "text-orange-400",
      bioEmphasis: "text-purple-400",
      experienceHover: "text-purple-400",
      experienceGradient: "from-orange-600/50 to-purple-400/50",
      horizontalRule: "bg-purple-500",
    },
  };
  const themeProps = { theme, toggleTheme, themeStyles };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home {...themeProps} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

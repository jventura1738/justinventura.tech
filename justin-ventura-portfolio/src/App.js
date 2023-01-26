// React:
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

// My react components:
import Layout from "./components/Layout";
import Home from "./pages/Home";

// CSS:
import "./css/App.css";

// Others:
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <p>Justin Ventura Portfolio</p>
    //     <p>Hi</p>
    //   </header>
    // </div>
  );
}

export default App;

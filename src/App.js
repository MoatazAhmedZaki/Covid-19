import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Navbaar from "./components/Navbaar";
import Footer from "./components/Footer";
import Home from "./Pages/Home.js";
import Tracker from "./Pages/Tracker";

function App() {
  window.onload = function () {
    var openMenu = document.getElementById("open-menu");
    var navLinks = document.getElementById("nav-links");

    openMenu.addEventListener("click", () => {
      navLinks.classList.toggle("nav-open");
    });
  };

  return (
    <Router>
      <div className="App">
        <Navbaar />
        <Route exact path="/Covid-19" component={Home} />
        <Route exact path="/Tracker" component={Tracker} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

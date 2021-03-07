import React from "react";
import { Route ,HashRouter } from "react-router-dom";

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
    <HashRouter basename="/">
      <div className="App">
        <Navbaar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Tracker" component={Tracker} />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

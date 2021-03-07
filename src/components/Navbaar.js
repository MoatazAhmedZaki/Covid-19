import React from "react";
import { Link } from "react-router-dom";

export default function Navbaar() {
  return (
    <header class="header">
      <div class="container">
        <div class="nav-frame">
          <figure class="pageLogo">
            <img
              src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/page-logo.svg"
              class="pageLogo__image"
              alt="LOGO"
            />
          </figure>
          <div class="open-menu" id="open-menu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <nav class="nav-links" id="nav-links">
            <Link to="/" class="nav-link ">
              Home
            </Link>
            {/* <a href="#Contagion" class="nav-link">
              Contagion
            </a>
            <a href="#Symptoms" class="nav-link">
              Symptoms
            </a>
            <a href="#" class="nav-link">
              Prevention
            </a> */}
            <Link to="/Tracker" class="nav-link">
              Tracker
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

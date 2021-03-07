import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row align-center">
          <div class="col-12 col-md-3 col-lg-3">
            <figure class="logo-figure">
              <img
                src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/page-logo.svg"
                class="footer__logo"
                alt=""
              />
            </figure>
          </div>
          <div class="col-12 col-md-6 col-lg-6r">
            <Link to="/Covid-19" class="footer__link">
              Home
            </Link>

            <Link to="/Tracker" class="footer__link">
              Tracker
            </Link>

            {/* <a href="#" class="footer__link">Symptomps</a>
                    <a href="#" class="footer__link">Prevention</a>
                    <a href="#" class="footer__link">Treatment</a> */}
          </div>
          <div class="col-12 col-md-3 col-lg-3">
            <figure class="social-figure">
              <a href="https://www.facebook.com/">
                <img
                  src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/facebook-icon.svg"
                  alt="Facebook"
                />
              </a>
              <a href="https://www.youtube.com/">
                <img
                  src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/youtube-icon.svg"
                  alt="Youtube"
                />
              </a>
              <a href="https://www.vimeo.com/">
                <img
                  src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/vimeo-icon.svg"
                  alt="Vimeo"
                />
              </a>
              <a href="https://www.twitter.com/">
                <img
                  src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/twitter-icon.svg"
                  alt="Twitter"
                />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
}

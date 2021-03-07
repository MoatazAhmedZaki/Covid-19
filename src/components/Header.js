import React from "react";

export default function Header() {
  return (
    <section class="section hero">
      <div class="container">
        <div class="row direction">
          <div class="col-12 col-md-6 col-lg-6 text-position">
            <h2 class="section__title">COVID-19 Alert</h2>
            <span class="section__span">
              Stay at Home quarantine To stop Corona virus
            </span>
            <p class="section__desc">
              There is no specific medicine to prevent or treat coronavirus
              disease (COVID-19). People may need supportive care to .
            </p>
            <a href="#What" class="section__button seciton__button--center">
              Let Us Help
            </a>
          </div>
          <div class="col-12 col-md-6 col-lg-6 text-position">
            <img
              src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/section-image.svg"
              class="section__image"
              alt="Quarantine"
            />
            <img
              src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/section-virus.svg"
              class="section__virus1"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/section-virus.svg"
              class="section__virus2"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/4c233460e18c1a8cfba4f7c4830e8da0e7c5e8e9/Covid-19/img/section-virus.svg"
              class="section__virus3"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

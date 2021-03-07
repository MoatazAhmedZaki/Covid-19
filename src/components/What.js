import React from "react";

export default function What() {
  return (
    <section class="section coronavirus" id="What">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 text-position">
            <figure class="covidImage">
              <img
                src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/main/Covid-19/img/covid-image.png"
                class="covidImage__image"
                alt="Corona Virus"
              />
            </figure>
          </div>
          <div class="col-12 col-md-6 col-lg-6 text-position">
            <h1 class="coronavirus__title">What Is Covid-19</h1>
            <span class="coronavirus__span">Coronavirus</span>
            <p class="coronavirus__desc">
              Corona viruses are a type of virus. There are many different
              kinds, and some cause disease. A newly identified type has caused
              a recent outbreak of respiratory illness now called
              COVID-19.Lauren Sauer, M.S., the director of operations with the
              Johns Hopkins Office of Critical Event Preparedness and Response
            </p>
            <a href="#contagion" class="coronavirus__button">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

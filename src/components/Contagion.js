import React from "react";

export default function Contagion() {
  return (
    <section class="section contagion" id="contagion">
      <div class="container">
        <div class="upside upside--top">
          <h2 class="upside__title">Covid-19</h2>
          <span class="upside__span">Contagion</span>
          <p class="upside__desc">
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type
          </p>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <figure class="card__figure">
                <img
                  src="https://raw.githubusercontent.com/alaattinerby/Covid-19-Website/main/Covid-19/img/card1-image.png"
                  class="card__image"
                  alt=""
                />
              </figure>
              <h3 class="card__title">Air Transmission</h3>
              <p class="card__desc">
                {" "}
                Objectively evolve tactical before extensible initiatives.
                Efficiently simplify
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <figure class="card__figure">
                <img
                  src="https://github.com/alaattinerby/Covid-19-Website/blob/main/Covid-19/img/card2-image.png?raw=true"
                  class="card__image"
                  alt=""
                />
              </figure>
              <h3 class="card__title">Human Contacts</h3>
              <p class="card__desc">
                Washing your hands is one of thesimplest ways you can protect
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <figure class="card__figure">
                <img
                  src="https://github.com/alaattinerby/Covid-19-Website/blob/main/Covid-19/img/card3-image.png?raw=true"
                  class="card__image"
                  alt=""
                />
              </figure>
              <h3 class="card__title">Contained Objects</h3>
              <p class="card__desc">
                Use the tissue while sneezing,In this way, you can protect your
                droplets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

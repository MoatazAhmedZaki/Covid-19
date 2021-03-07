import React, { Component } from "react";
import axios from "axios";
import ReactFlagsSelect from "react-flags-select";

import { Row, Col, Container } from "react-bootstrap";

import "../styles/Tracker.css";
export default class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Country: "",
      AllCountries: [],
      CountryData: [null],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.Country !== this.state.Country) {
      axios
        .get(`https://api.covid19api.com/live/country/${this.state.Country}`)
        .then((res) => {
          if (res.data.length !== 0) {
            this.setState({
              CountryData: res.data[res.data.length - 1],
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    return (
      <div class="container-fluid ">
        <ReactFlagsSelect
          selected={this.state.Country}
          onSelect={(code) => this.setState({ Country: code })}
        />

        <Row>
          <Col lg={3} sm={12}>
            <div class="card card-stats">
              {/* <!-- Card body --> */}
              <div class="card-body">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted">
                    Total Cases
                  </h5>
                  <span class="h2 font-weight-bold total_cases color-red count">
                    {!this.state.CountryData.Confirmed
                      ? 0
                      : this.state.CountryData.Confirmed}{" "}
                  </span>
                </div>
                <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                  <i class="fas fa-users"></i>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={12}>
            <div class="card card-stats">
              {/* <!-- Card body --> */}
              <div class="card-body">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted">Deaths</h5>
                  <span class="h2 font-weight-bold deaths color-blue count">
                    {!this.state.CountryData.Deaths
                      ? 0
                      : this.state.CountryData.Deaths}
                  </span>
                </div>
                <div class="icon icon-shape bg-gradient-blue text-white rounded-circle shadow">
                  <i class="fas fa-procedures"></i>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={12}>
            <div class="card card-stats">
              {/* <!-- Card body --> */}
              <div class="card-body">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted">
                    Recovered
                  </h5>
                  <span class="h2 font-weight-bold recovered color-green count">
                    {!this.state.CountryData.Recovered
                      ? 0
                      : this.state.CountryData.Recovered}
                  </span>
                </div>
                <div class="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                  <i class="fas fa-child"></i>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={12}>
            <div class="card card-stats">
              {/* <!-- Card body --> */}
              <div class="card-body">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted">
                    Active Cases
                  </h5>
                  <span class="h2 font-weight-bold new_cases color-orange count">
                    {!this.state.CountryData.Active
                      ? 0
                      : this.state.CountryData.Active}
                  </span>
                </div>
                <div class="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                  <i class="fas fa-bell"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Container className="d-flex align-items-center justify-content-center">
          <img
            src={require("../imgs/Prevent.png")}
            className="img-fluid"
            alt="Contagion "
          />
        </Container>
      </div>
    );
  }
}

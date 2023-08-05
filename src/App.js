import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>12:19 Mo. 16.01</h1>
        <h2>Omsk</h2>
        <hr />

        <h3>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="rgb(86, 47, 47)"
            size={60}
            animate={true}
          />
        </h3>
        <br />
        <ul>
          <li>Sunny</li>
          <li>UV index 5</li>
        </ul>

        <h4 className="currently">5°C/°F</h4>
        <br />
        <ul>
          <li>
            <ReactAnimatedWeather
              icon="SLEET"
              color="rgb(86, 47, 47)"
              size={20}
              animate={true}
            />
            11%
          </li>
          <li>
            <ReactAnimatedWeather
              icon="WIND"
              color="rgb(86, 47, 47)"
              size={20}
              animate={true}
            />
            10km/h
          </li>
        </ul>
        <hr />
        <hr />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="nextDay">
      <p>
        Tue <br />
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="rgb(86, 47, 47)"
          size={30}
          animate={true}
        />{" "}
        <br />
        5°
      </p>

      <p>
        Wed <br />
        <ReactAnimatedWeather
          icon="SLEET"
          color="rgb(86, 47, 47)"
          size={30}
          animate={true}
        />{" "}
        <br />
        0°
      </p>

      <p>
        Thu <br />
        <ReactAnimatedWeather
          icon="FOG"
          color="rgb(86, 47, 47)"
          size={30}
          animate={true}
        />{" "}
        <br />
        5°
      </p>

      <p>
        Fri <br />
        <ReactAnimatedWeather
          icon="WIND"
          color="rgb(86, 47, 47)"
          size={30}
          animate={true}
        />
        <br />
        7°
      </p>

      <p>
        Sat <br />
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="rgb(86, 47, 47)"
          size={30}
          animate={true}
        />{" "}
        <br />
        2°
      </p>
    </div>
  );
}

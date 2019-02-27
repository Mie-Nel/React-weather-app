import React, { Component } from "react";
import classes from "./WeatherDetail.module.css";

function toCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

class WeatherDetail extends Component {
  render() {
    const {
      name,
      sys: info,
      main: mainWeather,
      wind,
      weather: [detail]
    } = this.props.data;

    const urlIcon = "http://openweathermap.org/img/w/" + detail.icon + ".png";
    return (
      <div className={classes.WeatherDetail}>
        <h2>
          Weather in {name}, &nbsp; {info.country}
        </h2>
        <p>{detail.description}</p>
        <img src={urlIcon} alt={name} />
        <span>{toCelsius(mainWeather.temp)} &deg;C </span>
        <table>
          <tbody>
            <tr>
              <td>Wind:</td>
              <td>{wind.speed}</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{mainWeather.pressure}</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{mainWeather.humidity}</td>
            </tr>
            <tr>
              <td>Temperature min</td>
              <td>{toCelsius(mainWeather.temp_min)} &deg;C</td>
            </tr>
            <tr>
              <td>Temperature max</td>
              <td>{toCelsius(mainWeather.temp_max)} &deg;C</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeatherDetail;

import React, { Component } from "react";
import SearchCity from "../../components/SearchCity/SearchCity";
import WeatherDetail from "../../components/WeatherDetail/WeatherDetail";
import classes from "./Weather.module.css";

class Weather extends Component {
  state = {
    data: [],
    loading: true,
    error: null,
    message: "",
    value: ""
  };

  updateValue(value) {
    this.setState({
      value
    });
  }

  resetState = () => {
    this.setState({
      data: [],
      loading: true,
      error: null,
      message: ""
    });
  };

  fetchCity = evt => {
    evt.preventDefault();

    const city = this.state.value;

    const URL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";

    fetch(URL)
      .then(response => {
        switch (response.status) {
          case 404:
            this.setState({ message: "City not found" });
            break;
          case 400:
            this.setState({ message: "Field is empty" });
            break;
          default:
            return response.json();
        }
      })
      .then(data => {
        this.setState({ data: data, loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });

    this.resetState();
  };

  render() {
    return (
      <div className={classes.Weather}>
        <SearchCity
          fetchCity={this.fetchCity}
          onChangeInput={this.updateValue.bind(this)}
        />
        {this.state.loading ? null : !!this.state.message ? (
          <p>{this.state.message}</p>
        ) : (
          <WeatherDetail data={this.state.data} />
        )}
      </div>
    );
  }
}

export default Weather;

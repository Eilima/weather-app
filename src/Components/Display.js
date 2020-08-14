import React from "react";
import { Form } from "./Form/Form";
import { TemperatureSwitch } from "./TemperatureSwitch/TemperatureSwitch";

export class Display extends React.Component {
  state = {
    location: null,
    temperature: null,
    humidity: null,
    cityName: null,
    unitValue: "metric",
    icon: null,
    description: null,
    error: false,
    forecast: "current",
  };

  apiCall = async () => {
    this.setState({ error: false });
    const apiKey = "3515eb54a10f2ef0d46d3777bab42cae";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=${this.state.unitValue}&appid=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    if (data.cod === "404" || data.cod === "400") {
      console.log(`${data.cod} error`);
      this.setState({
        error: true,
        location: null,
        temperature: null,
        humidity: null,
        cityName: null,
        unitValue: "metric",
        icon: null,
        description: null,
      });
    } else {
      this.setState({
        location: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
      });
    }
  };

  updateCityName = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.apiCall();
  };

  changeUnit = () => {
    this.state.unitValue === "metric"
      ? this.setState({ unitValue: "imperial" })
      : this.setState({ unitValue: "metric" });
  };

  switchFlip = (e) => {
    if (this.state.temperature === null) this.changeUnit();
    if (
      this.state.unitValue === "imperial" &&
      this.state.temperature !== null
    ) {
      this.changeUnit();
      this.setState({
        temperature: ((this.state.temperature - 32) * (5 / 9)).toFixed(2),
      });
    } else if (
      this.state.temperature !== null &&
      this.state.unitValue !== "imperial"
    ) {
      this.changeUnit();
      this.setState({
        temperature: ((this.state.temperature * 9) / 5 + 32).toFixed(2),
      });
    }
  };

  metricOrFaren = () => {
    if (this.state.unitValue === "metric") return "C";
    else return "F";
  };

  infoDisplay = () => {
    if (this.state.error === true) {
      return (
        <p className="no-call">
          {" "}
          <span style={{ color: "#cc0000" }}>Invalid city name</span>
        </p>
      );
    } else if (this.state.humidity !== null) {
      return (
        <div>
          <img
            alt={`Scene of ${this.state.description}`}
            src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
          />
          <p className="weather-info-title">{this.state.description}</p>
          <h4 className="weather-info-title">Location</h4>
          <p className="weather-info">{this.state.location}</p>
          <h4 className="weather-info-title">Temperature</h4>
          <p className="weather-info">
            {`${this.state.temperature}° ${this.metricOrFaren()}`}{" "}
          </p>
          <h4 className="weather-info-title">Humidity</h4>
          <p
            className="weather-info"
            id="sun-icon"
          >{`${this.state.humidity}%`}</p>
        </div>
      );
    } else
      return (
        <p className="no-call">
          No weather to display<i className="material-icons">wb_sunny</i>
        </p>
      );
  };

  render() {
    return (
      <div>
        <div className="infoBox">
          <Form onChange={this.updateCityName} formSubmit={this.formSubmit} />
          <TemperatureSwitch switchFlip={this.switchFlip} />
          {this.infoDisplay()}
        </div>
      </div>
    );
  }
}

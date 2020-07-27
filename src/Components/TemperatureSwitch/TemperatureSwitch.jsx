import React from "react";
import "./TemperatureSwitch.css";

export class TemperatureSwitch extends React.Component {
  render() {
    return (
      <div className="switch-slider">
        C
        <label className="switch">
          <input onChange={(e) => this.props.switchFlip(e)} type="checkbox" />
          <span className="slider round"></span>
        </label>
        F
      </div>
    );
  }
}

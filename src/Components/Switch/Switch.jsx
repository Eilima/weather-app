import React from "react";
import "./Switch.css";

export class Switch extends React.Component {
  render() {
    return (
      <div className="forecast-switch">
        <button className="tablink" id="current">
          {this.props.forecast} Forecast
        </button>
      </div>
    );
  }
}

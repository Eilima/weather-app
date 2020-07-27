import React from "react";
import "./form.css";

export class Form extends React.Component {
  render() {
    return (
      <form>
        <div className="weather-header">
          <input
            className="inputField"
            placeholder="City"
            type="text"
            onChange={this.props.onChange}
          ></input>
          <button className="search-icon" onClick={this.props.formSubmit}>
            <i className="material-icons">search</i>
          </button>
        </div>
      </form>
    );
  }
}

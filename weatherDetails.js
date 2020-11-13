import React, { Component } from "react";

export default class WeatherDetails extends Component {
  render() {
    return (
      <div>
        <span>
          <p>Current Data</p>
          <span> {new Date().toLocaleDateString()}</span>
        </span>
        <span>
          <p>Current Time</p>
          <span> {new Date().toLocaleTimeString()}</span>
        </span>
        <span>
          <p>City Name</p>
          <span> {this.props.weatherData.name}</span>
        </span>
        <span>
          <p>Temperature Details</p>
          <span> {this.props.weatherData.temperature}</span>
        </span>
      </div>
    );
  }
}

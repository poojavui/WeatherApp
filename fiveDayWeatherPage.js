import React, { Component } from "react";

export default class FiveDayWeatherPage extends Component {
  render() {
    return (
      <div>
        <p>{this.props.weatherData.name} Weather Details</p>
        <table>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Temperature</th>
            <th>Feels</th>
          </tr>
          {this.props.weatherData.forecast.map((details, index) => {
            return (
              <tr key={index}>
                <td>{details.Date}</td>
                <td>{details.Time}</td>
                <td>{details.temprature}</td>
                <td>{details.feels}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

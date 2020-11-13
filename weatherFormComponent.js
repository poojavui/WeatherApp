import React, { Component } from "react";
import Button from "./button";

export default class WeatherForm extends Component {
  constructor(props) {
    super();
    this.state = {
      cityName: "",
    };
  }

  goToParent = () => {
    this.props.getDetails(this.state.cityName);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.cityName}
          onChange={(e) => this.setState({ cityName: e.target.value })}
        />
        <Button value="Submit" onClick={() => this.goToParent()} />
      </div>
    );
  }
}

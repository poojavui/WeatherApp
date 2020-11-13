import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherForm from "./weatherFormComponent";
import { data } from "./data";
import WeatherDetails from "./weatherDetails";
import Button from "./button";
import FiveDayWeatherPage from "./fiveDayWeatherPage";

class App extends Component {
  //   componentDidMount = () => {
  //     const user = {
  //       name: "Leizl",
  //     };
  //     this.props.setWeatherData(user);
  //   };

  constructor() {
    super();
    this.state = {
      showDetails: false,
      showFiveDayWeather: false,
    };
  }

  saveCityData = (city) => {
    console.log(city);
    let details = {};
    Object.keys(data.States).map((item) => {
      data.States[item].cities.map((key) => {
        if (key.name.toLowerCase() === city.toLowerCase()) {
          details = key;
        }
      });
    });

    if (Object.keys(details).length > 1) {
      details.temperature = 56;
    }

    console.log("deta", details);

    this.props.setWeatherData(details);
    this.setState({ showDetails: true });
  };

  openFiveDayWeatherPAge = () => {
    this.setState({
      showFiveDayWeather: true,
    });
  };

  render() {
    console.log("weatherData", this.props.weatherData);
    return (
      <div>
        Enter City Name:<WeatherForm
          getDetails={(city) => this.saveCityData(city)}
          {...this.props}
        />
        {this.state.showDetails ? (
          Object.keys(this.props.weatherData).length > 0 ? (
            <div>
              {" "}
              <WeatherDetails {...this.props} />{" "}
              <Button
                value="5 Day Weather"
                onClick={() => this.openFiveDayWeatherPAge()}
              />{" "}
            </div>
          ) : (
            <div> No data Found </div>
          )
        ) : (
          ""
        )}

        {this.state.showFiveDayWeather ? (
          <FiveDayWeatherPage {...this.props} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weatherData: state.weatherData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setWeatherData: (weatherObj) => {
      dispatch({ type: "UPDATE_WEATHER_DETAILS", payload: weatherObj });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

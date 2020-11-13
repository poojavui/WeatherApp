const initialState = {
  weatherData: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_WEATHER_DETAILS":
      // debugger

      return {
        ...state,
        weatherData: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;

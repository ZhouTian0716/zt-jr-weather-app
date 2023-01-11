import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./scss/index.scss";

// Redux Setup
import { store } from "./redux/store";
import { Provider } from "react-redux";

// Initial Data loading for better UX
import {
  fetchLocalWeather,
  fetchWeatherBySavedCities,
} from "./redux/reducers/weatherSlice";
// STEP 1: Fetch localweather
store.dispatch(fetchLocalWeather());
// STEP 2: Fetch saved cities
const savedCities = JSON.parse(localStorage.getItem("saved-cities"));
savedCities && store.dispatch(fetchWeatherBySavedCities(savedCities));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

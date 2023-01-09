import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./scss/index.scss";


// Redux Setup
import { store } from "./redux/store";
import { Provider } from "react-redux";
// User local weather fetched on App loading
import { fetchLocalWeather } from "./redux/reducers/weatherSlice";
store.dispatch(fetchLocalWeather());




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

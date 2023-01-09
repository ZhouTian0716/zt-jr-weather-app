import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./reducers/displaySlice";
import searchReducer from "./reducers/searchSlice";
import weatherReducer from "./reducers/weatherSlice";


export const store = configureStore({
  reducer: {
    display: displayReducer,
    search: searchReducer,
    weather: weatherReducer,
  },

  // devTools:false
  // This setup can close devtool in browser for security reasons.
});

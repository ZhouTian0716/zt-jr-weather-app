import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchSlice";


export const store = configureStore({
  reducer: {
    search: searchReducer,
  },

  // devTools:false
  // This setup can close devtool in browser for security reasons.
});

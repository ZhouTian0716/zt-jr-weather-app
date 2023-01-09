import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchModal: false,
  //isLoggedIn: false,
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    searchModalToggle: (state) => {
      state.searchModal = !state.searchModal;
    },
    // isLoggedInToggle: (state) => {
    //   state.isLoggedIn = !state.isLoggedIn;
    // },
    // persistToggle: (state) => {
    //   state.persist = !state.persist;
    // },
  },
});

// exported for easier useSelector call from components
export const searchModalStatus = (state) => state.display.searchModal;
// export const LoggedInStatus = (state) => state.display.isLoggedIn;
// export const persistStatus = (state) => state.display.persist;

// Action creators are generated for each case reducer function
export const { searchModalToggle } =
  displaySlice.actions;

export default displaySlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../../api/index";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Search_Route = `/search.json?key=${API_KEY}`;

const initialState = {
  cities: [],
  status: "idle", //'idle' | 'fetching' | 'succeeded' | 'failed'
  error: null,
};

export const fetchCities = createAsyncThunk(
  "search/fetchCities",
  async (keywords) => {
    const response = await API.get(`${Search_Route}&q=${keywords}`);
    return response.data;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state, action) => {
      state.cities=[];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCities.pending, (state, action) => {
        state.status = "fetching";
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedCities = action.payload;
        // console.log(loadedCities);
        state.cities = loadedCities;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

// Action creators are generated for each case of reducers
export const { clearSearch } = searchSlice.actions;

// This is easier for component to call useSelector, if our state shape change in the future
export const getSearchResults = (state) => state.search.cities;
export const getSearchStatus = (state) => state.search.status;

export default searchSlice.reducer;

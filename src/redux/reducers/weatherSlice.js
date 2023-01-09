import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/index";

import { getIP } from "../../api/getIP";

// LEGEND: IMPORTANT, THIS STATE SHAPE
const initialState = {
  local_weather: null,
  city_new_search: null,
  cities_user_saved: [],
  weather_selected_city: null,
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const Route_Forecast_Weather = `/forecast.json?key=${
  import.meta.env.VITE_WEATHER_API_KEY
}`;

// Forcast Options
const days = 7;
const airQuality = "yes";
const alerts = "yes";

export const fetchLocalWeather = createAsyncThunk(
  "weather/fetchLocalWeather",
  async () => {
    // step 1: fetch user ip address
    // FEATURE: using IPDATA IP check
    const IPdata = await getIP(
      `https://api.ipdata.co?api-key=${import.meta.env.VITE_IPDATA_API_KEY}`
    );
    const IP_Search_Route = `/ip.json?key=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`;
    const resIP = await API.get(`${IP_Search_Route}&q=${IPdata.ip}`);
    const {
      data: { lat: userLat, lon: userLon },
    } = resIP;
    // step 2: construct weather fetching options in url
    const resWeather = await API.get(
      `${Route_Forecast_Weather}&q=${userLat},${userLon}&days=${days}&aqi=${airQuality}&alerts=${alerts}`
    );
    return resWeather.data;
  }
);

export const fetchWeatherByCity = createAsyncThunk(
  "search/fetchWeatherByCity",
  async (payload) => {
    const resWeather = await API.get(
      `${Route_Forecast_Weather}&q=${payload.lat},${payload.lon}&days=${days}&aqi=${airQuality}&alerts=${alerts}`
    );
    return resWeather.data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSelectedCity: (state, action) => {
      state.city_new_search = action.payload;
    },
    // more
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLocalWeather.pending, (state, action) => {
        state.status = "fetching";
      })
      .addCase(fetchLocalWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.local_weather = action.payload;
      })
      .addCase(fetchLocalWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchWeatherByCity.pending, (state, action) => {
        state.status = "fetching";
      })
      .addCase(fetchWeatherByCity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weather_selected_city = action.payload;
      })
      .addCase(fetchWeatherByCity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// exported for easier useSelector call from components
export const getSelectedCity = (state) => state.weather.city_new_search;
export const getLocalWeather = (state) => state.weather.local_weather;
export const getWeatherByCity = (state) => state.weather.weather_selected_city;
export const getFetchStatus = (state) => state.weather.status;
export const getFetchError = (state) => state.weather.error;

// Action creators are generated for each case reducer function
export const { setSelectedCity } = weatherSlice.actions;

export default weatherSlice.reducer;

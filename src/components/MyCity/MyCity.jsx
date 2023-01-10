// Redux Hooks
import { useSelector, useDispatch } from "react-redux";

import {
  getLocalWeather,
  getWeatherByCity,
  getFetchStatus,
  getFetchError,
} from "../../redux/reducers/weatherSlice";

import styles from "./MyCity.module.scss";
const {
  container,
  main_data,
  desc,
  temp_range,
  min,
  max,
  secondary_data,
  days_data,
  hourly_data,
  container_sliders,
  hourly_condition,
  message,
} = styles;

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MyCity = () => {
  const localWeather = useSelector(getLocalWeather);
  const weatherBySelectedCity = useSelector(getWeatherByCity);
  const loadingStatus = useSelector(getFetchStatus);
  const error = useSelector(getFetchError);

  let content;
  if (loadingStatus === "fetching") {
    content = <p className={message}>"Loading..."</p>;
  } else if (loadingStatus === "succeeded") {
    const weatherData = weatherBySelectedCity || localWeather;
    // destructure data a little bit
    const daysData = weatherData.forecast.forecastday;
    const hoursData = daysData[0].hour;

    content = (
      <>
        <div className={main_data}>
          <div>
            <h3>{weatherData.location.name}</h3>
            <p>
              <span>{weatherData.location.region},</span>
              <span>{weatherData.location.country}</span>
            </p>
            <p>{weatherData.location.localtime}</p>
          </div>

          <div>
            <h2>{weatherData.current.temp_c}</h2>
            <img src={weatherData.current.condition.icon} alt="weather-icon" />
            <p class={desc}>{weatherData.current.condition.text}</p>
          </div>

          <div className={temp_range}>
            <span className={min}>
              {weatherData.forecast.forecastday[0].day.mintemp_c}
            </span>
            <span className={max}>
              {weatherData.forecast.forecastday[0].day.maxtemp_c}
            </span>
          </div>
        </div>
        <div className={secondary_data}>
          <h3>Today Details</h3>
          <ul>
            <li>
              <span>Humidity</span>
              <span>{weatherData.current.humidity}%</span>
            </li>
            <li>
              <span>UV Index</span>
              <span>{weatherData.current.uv}</span>
            </li>
            <li>
              <span>Wind Speed</span>
              <span>{weatherData.current.wind_mph}/mph</span>
            </li>
            <li>
              <span>Feels</span>
              <span>{weatherData.current.feelslike_c}°</span>
            </li>
          </ul>
          <h3>Today Forecast</h3>
          <ul>
            <li>
              <span>Sunrise</span>
              <span>{weatherData.forecast.forecastday[0].astro.sunrise}</span>
            </li>
            <li>
              <span>Sunset</span>
              <span>{weatherData.forecast.forecastday[0].astro.sunset}</span>
            </li>
            <li>
              <span>Moon Phase</span>
              <span>
                {weatherData.forecast.forecastday[0].astro.moon_phase}
              </span>
            </li>
            <li>
              <span>Rain Rate</span>
              <span>
                {weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%
              </span>
            </li>
          </ul>
        </div>
        <div className={days_data}>
          <h3>7 Days Forecast</h3>
          <ul>
            {daysData.map((e, i) => (
              <li key={i}>
                <span>{weekday[new Date(e.date).getDay()]}</span>
                <img src={e.day.condition.icon} alt="weather-icon" />
                <span>{e.day.mintemp_c}°</span>
                <span>{e.day.maxtemp_c}°</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={hourly_data}>
          <h3>Hourly Forecast</h3>
          <div className={container_sliders}>
            {hoursData.map((e, i) => (
              <div className={hourly_condition} key={i}>
                <span>{e.time.split(" ")[1]}</span>
                <img src={e.condition.icon} alt="weather-icon" />
                <span>{e.temp_c}°</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else if (loadingStatus === "failed") {
    content = <p className={message}>{error}</p>;
  }

  return <div className={container}>{content}</div>;
};

export default MyCity;

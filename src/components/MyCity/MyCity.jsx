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
  secondary_data,
  days_data,
  hourly_data,
  container_sliders,
  hourly_condition,
  message,
} = styles;

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
          <h3>{weatherData.location.name}</h3>
          <p>
            <span>{weatherData.location.country}</span>
          </p>
          <h2>{weatherData.current.temp_c}°</h2>
          <p>{weatherData.current.condition.text}</p>
        </div>
        <div className={secondary_data}></div>
        <div className={days_data}>
          <h3>7 Days Forecast</h3>
          <ul>
            {daysData.map((e, i) => (
              <li key={i}>
                <span>{e.date}</span>
                <img src={e.day.condition.icon} alt="" />
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
                <img src={e.condition.icon} alt="" />
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

import styles from "./Card.module.scss";
const { card, desc, temp_range, min, max } = styles;
// Redux Hooks
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedCity,
  fetchWeatherByCity,
} from "../../redux/reducers/weatherSlice";

const Card = ({ data }) => {
  const city = data.location;

  const dispatch = useDispatch();
  return (
    <div
      className={card}
      onClick={() => {
        dispatch(setSelectedCity(city));
        dispatch(fetchWeatherByCity(city));
      }}
    >
      <div>
        <h3>{data.location.name}</h3>
        <p>
          <span>{data.location.region},</span>
          <span>{data.location.country}</span>
        </p>
      </div>

      <div>
        <h2>{data.current.temp_c}</h2>
        <img src={data.current.condition.icon} alt="weather-icon" />
        <p className={desc}>{data.current.condition.text}</p>
      </div>
      <div className={temp_range}>
        <span className={min}>
          {data.forecast.forecastday[0].day.mintemp_c}
        </span>
        <span className={max}>
          {data.forecast.forecastday[0].day.maxtemp_c}
        </span>
      </div>
    </div>
  );
};

export default Card;

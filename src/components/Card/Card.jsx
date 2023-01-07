import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ data }) => {
  const {
    container,
    city,
    weather_icon,
    temp_current,
    condition,
    temp_min,
    temp_max,
    flex_between,
  } = styles;
  return (
    <Link to={`city/${data.location.name}`} className={container}>
      <h3 className={city}>{data.location.name}</h3>
      <img
        className={weather_icon}
        src={data.current.condition.icon}
        alt="weather-icon"
      />
      <span className={temp_current}>{data.current.temp_c}</span>
      <span className={condition}>{data.current.condition.text}</span>
      <div className={flex_between}>
        <span className={temp_min}>
          {data.forecast.forecastday[0].day.mintemp_c}
        </span>
        <span className={temp_max}>
          {data.forecast.forecastday[0].day.maxtemp_c}
        </span>
      </div>
    </Link>
  );
};

export default Card;

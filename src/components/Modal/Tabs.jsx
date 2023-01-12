import { useState, useEffect } from "react";

// Redux Hooks
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchStatus,
  getSearchResults,
  getSearchStatus,
  clearSearch,
} from "../../redux/reducers/searchSlice";
import { searchModalToggle } from "../../redux/reducers/displaySlice";
import {
  setSelectedCity,
  fetchWeatherByCity,
} from "../../redux/reducers/weatherSlice";

// Styles
import styles from "./Tabs.module.scss";
const { container, tab, tab__city, tab__region, tab__country } = styles;

const Tabs = () => {
  // useSeletor can cause component rerender?
  const cities = useSelector(getSearchResults);
  //   const citiesFromStore = useSelector(getSearchResults);
  //   const [cities,setCities]=useState(citiesFromStore)

  const searchStatus = useSelector(getSearchStatus);

  const dispatch = useDispatch();

  const onSearchByCity = (city) => {
    dispatch(clearSearch());
    dispatch(setSearchStatus('idle'));
    dispatch(searchModalToggle());
    dispatch(setSelectedCity(city));
    dispatch(fetchWeatherByCity(city));
    //
  };

  const notFound = searchStatus === "succeeded" && cities.length === 0;
  const loading = searchStatus === "loading";

  return (
    <div className={container}>
      {cities.length > 0 &&
        cities.map((city, i) => (
          <p className={tab} key={i} onClick={() => onSearchByCity(city)}>
            <span className={tab__city}>{city.name},</span>
            <span className={tab__region}>{city.region},</span>
            <span className={tab__country}>{city.country}</span>
          </p>
        ))}
      {notFound && <p className={tab}>City Not Found</p>}
      {loading && <p className={tab}>Loading on your search</p>}
    </div>
  );
};

export default Tabs;

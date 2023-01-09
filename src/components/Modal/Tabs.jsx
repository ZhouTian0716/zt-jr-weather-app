import { useState, useEffect } from "react";

// Redux Hooks
import { useSelector, useDispatch } from "react-redux";
import {
  getSearchResults,
  getSearchStatus,
  clearSearch,
} from "../../redux/reducers/searchSlice";
import { searchModalToggle } from "../../redux/reducers/displaySlice";
import { setSelectedCity,fetchWeatherByCity } from "../../redux/reducers/weatherSlice";

// Styles
import styles from "./Tabs.module.scss";
const { container, tab, tab__city, tab__region, tab__country } = styles;

const Tabs = () => {
  // useSeletor can cause component rerender?
  const cities = useSelector(getSearchResults);
  //   const citiesFromStore = useSelector(getSearchResults);
  //   const [cities,setCities]=useState(citiesFromStore)

  const Status = useSelector(getSearchStatus);

  const dispatch = useDispatch();



  const onSearchByCity=(city)=>{
    dispatch(clearSearch());
    dispatch(searchModalToggle());
    dispatch(setSelectedCity(city));
    dispatch(fetchWeatherByCity(city));
  }

  return (
    <div className={container}>
      {cities ? (
        cities.map((city, i) => (
          <p
            className={tab}
            key={i}
            onClick={()=>onSearchByCity(city)}
          >
            <span className={tab__city}>{city.name},</span>
            <span className={tab__region}>{city.region},</span>
            <span className={tab__country}>{city.country}</span>
          </p>
        ))
      ) : (
        <p>City Not Found</p>
      )}
      
    </div>
  );
};

export default Tabs;

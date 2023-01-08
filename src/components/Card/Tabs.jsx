import { useState, useEffect } from "react";
import styles from "./Tabs.module.scss";

// Redux Hooks
import { useSelector } from "react-redux";
import {
  getSearchResults,
  getSearchStatus,
} from "../../redux/reducers/searchSlice";

const Tabs = () => {
  const cities = useSelector(getSearchResults);
  const Status = useSelector(getSearchStatus);
  return (
    <div>
      {cities ? (
        cities.map((e, i) => (
          <p>
            <span key={i}>{e.name},</span>
            <span key={i}>{e.region},</span>
            <span key={i}>{e.country}</span>
          </p>
        ))
      ) : (
        <p>City Not Found</p>
      )}
    </div>
  );
};

export default Tabs;

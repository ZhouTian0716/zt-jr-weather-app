import Tabs from './Tabs';

import { useState, useEffect } from "react";
import styles from "./Search.module.scss";
// Redux
import { useDispatch } from "react-redux";
import { fetchCities } from "../../redux/reducers/searchSlice";

const Search = () => {
  const { container, search__input } = styles;
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const addCityHandler = () => {
    console.log("hi");
  };

  const handleSearch = (e) => {
    setKeyword(e.target.value)
    dispatch(fetchCities(keyword));
  };
  return (
    <div className={container}>
      <input
        className={search__input}
        type="text"
        value={keyword}
        placeholder="Enter A City Name"
        onChange={handleSearch}
      />
      <Tabs/>
    </div>
  );
};

export default Search;

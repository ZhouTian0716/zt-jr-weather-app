import Tabs from "./Tabs";
import { HiX } from "react-icons/hi";
import { useState,useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import styles from "./Search.module.scss";
// Redux
import { useDispatch } from "react-redux";
import {
  setSearchStatus,
  fetchCities,
  clearSearch,
} from "../../redux/reducers/searchSlice";

const Search = () => {
  const { container, wrapper, search__input, clear__btn } = styles;
  const [keyword, setKeyword] = useState("");
  const debouncedKeywords = useDebounce(keyword, 500);

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (keyword.length) {
      dispatch(fetchCities(debouncedKeywords));
    }
  }, [debouncedKeywords]);

  const handleClear = () => {
    setKeyword("");
    dispatch(clearSearch());
    dispatch(setSearchStatus("idle"));
  };

  return (
    <div className={container}>
      <div className={wrapper}>
        <input
          className={search__input}
          type="text"
          value={keyword}
          placeholder="Enter A City Name"
          onChange={handleSearch}
        />
        <HiX className={clear__btn} onClick={handleClear} />
      </div>
      <Tabs />
    </div>
  );
};

export default Search;

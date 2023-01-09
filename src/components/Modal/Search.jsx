import Tabs from "./Tabs";
import { HiX } from "react-icons/hi";
import { useState, useEffect } from "react";
import styles from "./Search.module.scss";
// Redux
import { useDispatch } from "react-redux";
import { fetchCities, clearSearch } from "../../redux/reducers/searchSlice";

const Search = () => {
  const { container, wrapper, search__input, clear__btn } = styles;
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    keyword.length && dispatch(fetchCities(keyword));
  }, [keyword]);

  const handleClear = () => {
    setKeyword("");
    dispatch(clearSearch());
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

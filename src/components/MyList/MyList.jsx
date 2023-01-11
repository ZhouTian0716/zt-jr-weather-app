import Card from "../../components/Card/Card";

// Redux Hooks
import { useSelector, useDispatch } from "react-redux";
import {
  getMyListWeather,
  getListFetchStatus,
  getFetchError,
} from "../../redux/reducers/weatherSlice";

import styles from "./MyList.module.scss";

const { list_title, list_notice,slider_cities, message } = styles;

const MyList = () => {
  const loadingStatus = useSelector(getListFetchStatus);
  const myListWeather = useSelector(getMyListWeather);

  const error = useSelector(getFetchError);

  let content;
  if (loadingStatus === "fetching") {
    content = <p className={message}>"Loading..."</p>;
  } else if (loadingStatus === "succeeded" || myListWeather) {
    content = myListWeather.map((e, i) => <Card key={i} data={e} />);
  } else if (loadingStatus === "failed") {
    content = <p className={message}>{error}</p>;
  }
  return (
    <div>
      {myListWeather.length > 0 ? (
        <h2 className={list_title}>My City List</h2>
      ) : (
        <h2 className={list_notice}>No City Saved Yet, Start by Clicking ⭐</h2>
      )}

      <div className={slider_cities}>{content}</div>
    </div>
  );
};

export default MyList;

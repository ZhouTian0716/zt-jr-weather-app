// 20230106162100
// http://api.weatherapi.com/v1/forecast.json?key=21a12eeeda1e4a32b9043948230501&q=beijing&days=2&aqi=no&alerts=no
// data for development
import demoData from "./data.json";
import MyCity from "../../components/MyCity/MyCity";
import Card from "../../components/Card/Card";

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.scss";
const { home,container_sliders } = styles;
// const baseUrl =
//   "http://api.weatherapi.com/v1/forecast.json?key=21a12eeeda1e4a32b9043948230501&q=beijing&days=2&aqi=no&alerts=no";

// JSON.parse(demoData)

const Home = () => {
  const [data, setData] = useState(null);
  // console.log(demoData);
  // useEffect(() => {
  //   axios.get(baseUrl).then((res) => {
  //     console.log(res.data);
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <main className={home}>
      <MyCity/>
      <div className={container_sliders}>
        <Card data={demoData} />
        <Card data={demoData} />
        <Card data={demoData} />
        <Card data={demoData} />
        <Card data={demoData} />
        <Card data={demoData} />
        <Card data={demoData} />
        <Card data={demoData} />
        <Card data={demoData} />
        <Card data={demoData} />
        <Card data={demoData} />
        <Card data={demoData} />
      </div>
    </main>
  );
};

export default Home;

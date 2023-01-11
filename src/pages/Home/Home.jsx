import MyCity from "../../components/MyCity/MyCity";
import MyList from "../../components/MyList/MyList";

import styles from "./Home.module.scss";
const { home } = styles;

const Home = () => {
  return (
    <main className={home}>
      <MyCity />
      <MyList />
    </main>
  );
};

export default Home;

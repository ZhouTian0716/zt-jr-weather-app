import { HiMenuAlt2, HiX } from "react-icons/hi";
import styles from "./Search.module.scss";

const Search = () => {
  const {
    container,
   title
  } = styles;
  return (
    <div className={container}>
      <h3 className={title}>Add City</h3>
      <HiMenuAlt2/>
      
    </div>
  );
};

export default Search;
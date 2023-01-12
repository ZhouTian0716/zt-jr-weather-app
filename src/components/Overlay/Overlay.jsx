import styles from "./Overlay.module.scss";

// Redux
import { useDispatch } from "react-redux";
import { searchModalToggle } from "../../redux/reducers/displaySlice";
import { setSearchStatus,clearSearch } from "../../redux/reducers/searchSlice";

const Overlay = () => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(clearSearch());
    dispatch(searchModalToggle());
    dispatch(setSearchStatus('idle'));
  };

  return <div className={styles.overlay} onClick={handleModalClose}></div>;
};

export default Overlay;

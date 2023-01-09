import ThemeToggle from "./ThemeToggle";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { searchModalToggle } from "../../redux/reducers/displaySlice";

// styles
import styles from "./Navbar.module.scss";
const { navbar, search__btn, title } = styles;

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav className={navbar}>
      <HiOutlineSearch
        className={search__btn}
        onClick={() => dispatch(searchModalToggle())}
      />

      <Link to="/" className={title}>
        World Weather
      </Link>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;

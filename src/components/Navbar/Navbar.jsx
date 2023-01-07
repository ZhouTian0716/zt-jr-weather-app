import styles from "./Navbar.module.scss";
import ThemeToggle from "./ThemeToggle";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggleHandler = () => setIsMenuOpen((prev) => !prev);

  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      {isMenuOpen ? (
        <HiX className={styles.menu__btn} onClick={menuToggleHandler} />
      ) : (
        <HiMenuAlt2 className={styles.menu__btn} onClick={menuToggleHandler} />
      )}

      <Link to='/' className={styles.title}>World Weather</Link>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;

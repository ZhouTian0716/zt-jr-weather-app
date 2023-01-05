import styles from "./Navbar.module.scss";
import ThemeToggle from "./ThemeToggle";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      {isMenuOpen ? (
        <HiX
          color="red"
          fontSize="1.5em"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      ) : (
        <HiMenuAlt2
          color="red"
          fontSize="1.5em"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      )}

      <span>Open Weather</span>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;

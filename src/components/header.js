import React from "react";
import { Link } from "gatsby";
import * as styles from "./header.module.scss";
import Logo from "../components/logo.js";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.nav_wrapper}>
        <div className={styles.logowrapper}>
          <Logo />
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navul}>
            <li className={styles.navli}>
              <span></span>
              <Link className={styles.link} to="/what">
                What
              </Link>
            </li>
            <li className={styles.navli}>
              <span></span>
              <Link className={styles.link} to="/how">
                How
              </Link>
            </li>
            <li className={styles.navli}>
              <span></span>
              <Link className={styles.link} to="/work">
                Work
              </Link>
            </li>
            <li className={styles.navli}>
              <span></span>
              <Link className={styles.link} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

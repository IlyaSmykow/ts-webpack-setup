import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header__wrapper}>
      <h1>HH</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>Locations</li>
          <li>Videos</li>
          <li>Sign in</li>
        </ul>
      </nav>
    </div>
  );
};

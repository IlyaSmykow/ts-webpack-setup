import React from "react";
import { Main } from "./components/Main/Main";
import { Home } from "./components/Home/Home";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className={styles.app__wrapper}>
      App
      <br />
      <Main />
      <br />
      <Home />
    </div>
  );
};

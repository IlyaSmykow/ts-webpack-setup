import React from "react";
import { Main } from "./components/Main/Main";
import { Second } from "./components/Second/Second";
import { About } from "./components/About/About";
import { AppRouter } from "./components/AppRouter/AppRouter";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className={styles.app__wrapper}>
      <AppRouter />
    </div>
  );
};

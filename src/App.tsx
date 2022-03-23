import React from "react";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className={styles.app__wrapper}>
      <Header />
      <Main />
      <About />
    </div>
  );
};

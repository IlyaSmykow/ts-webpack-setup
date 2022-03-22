import React from "react";
import { useState } from "react";
import styles from "./Home.module.scss";

export const Home = () => {
  const [value, setValue] = useState("");

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  console.log(value);
  return (
    <div className={styles.home__wrapper}>
      Home component
      <br />
      <input value={value} onChange={handleInput} />
    </div>
  );
};

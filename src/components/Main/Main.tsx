import React from "react";
import styles from "./Main.module.scss";
import Button from "@mui/material/Button";

export const Main = () => {
  const handleClick = () => {
    alert("work");
  };

  return (
    <div className={styles.main}>
      <div className={styles.div_1}>1</div>
      <div className={styles.div_2}>2</div>
      <div className={styles.div_3}>3</div>
    </div>
  );
};

import React from "react";
import styles from "./Main.module.scss";

export const Main = () => {
  const handleClick = () => {
    alert("work");
  };

  return (
    <div className={styles.main}>
      Main component go !<button onClick={handleClick}>go</button>
    </div>
  );
};

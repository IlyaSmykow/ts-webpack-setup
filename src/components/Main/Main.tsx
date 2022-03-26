import React from "react";
import styles from "./Main.module.scss";
import { Header } from "../Header/Header";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

export const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/map");
  };

  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.container}>
        <h1>Что фотографировать?</h1>
        <h4>в Нижегородской области</h4>
        <div />
        <div>
          <Button onClick={handleClick}>показать карту</Button>
        </div>
      </div>
    </div>
  );
};

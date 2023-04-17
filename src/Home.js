import React from "react";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.section}>
      <h1 className={s.h1}>Welcome to our social network</h1>
      <a href="tweets" type="button" className={s.link}>
        Join
      </a>
    </div>
  );
};

export default Home;

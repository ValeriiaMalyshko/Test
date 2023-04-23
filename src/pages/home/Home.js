import React from "react";
import { Link } from "react-router-dom";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.section}>
      <h1 className={s.h1}>Welcome to our social network</h1>
      <Link to="/tweets" className={s.link}>
        Join
      </Link>
    </div>
  );
};

export default Home;

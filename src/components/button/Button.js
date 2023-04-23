import React from "react";
import s from "./Button.module.css";

export const Button = ({
  isFollow = false,
  text = "Confirm",
  onClick = null,
}) => {
  return (
    <button className={isFollow ? s.active : s.btn} onClick={onClick}>
      {text}
    </button>
  );
};

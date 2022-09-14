import React from "react";
import classes from "./Button.module.css";
const Button = ({ type, children }) => {
  console.log(children);
  return (
    <button
      className={classes.button}
      type={type || "button"}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;

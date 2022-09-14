import React from "react";
import classes from "./Cards.module.css";

const Card = ({ children, className }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;

import React from "react";

import classes from "./Cards.module.css";

const Card = (props) => {
  //   console.log(props.children);
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;

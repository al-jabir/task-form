import React from "react";

const Button = ({ type, children }) => {
  console.log("dine");
  return (
    <button className={type || "button"} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;

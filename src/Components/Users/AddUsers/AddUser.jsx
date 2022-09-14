import React, { useState } from "react";
import Button from "../../UI/Buttons/Button";
import Card from "../../UI/Cards/Card";
import classes from "./AddUser.module.css";
const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const onUserHandl = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
  };

  const userAgeHangler = (e) => {
    setUserAge(e.target.value);
    console.log(userName, userAge);
  };
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <Card className={classes.main}>
        <form onSubmit={onUserHandl}>
          <label htmlFor="user">Username</label>
          <input type="text" value={userName} onChange={userNameHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" value={userAge} onChange={userAgeHangler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

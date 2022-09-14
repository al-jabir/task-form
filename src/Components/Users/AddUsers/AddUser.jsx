import React, { useState } from "react";
import Button from "../../UI/Buttons/Button";
import ErrorModal from "../../UI/ErrorsModal/ErrorModal";
import classes from "./AddUser.module.css";
const AddUser = ({ onAddUserHandle }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const onUserHandle = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (userAge < 1) {
      return;
    }
    console.log(userName, userAge);
    onAddUserHandle(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  const userNameHandle = (e) => {
    setUserName(e.target.value);
  };

  const userAgeHandle = (e) => {
    setUserAge(e.target.value);
  };

  return (
    <div>
      <ErrorModal title="Never went wrong " message="error" />
      <form className={classes.main} onSubmit={onUserHandle}>
        <label htmlFor="username">UserName</label>
        <input type="username" value={userName} onChange={userNameHandle} />
        <label htmlFor="username">Age (Years)</label>
        <input type="number" value={userAge} onChange={userAgeHandle} />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default AddUser;

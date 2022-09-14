import React, { useState } from "react";
import Button from "../../UI/Buttons/Button";
import Card from "../../UI/Cards/Card";
import ErrorModal from "../../UI/ErrorsModal/ErrorModal";
import classes from "./AddUser.module.css";
const AddUser = ({ onAddUserHandle }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const onUserHandle = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter valid username and age!",
      });
      return;
    }
    if (userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age (age > 0)",
      });
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

  const ClosePopUP = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClickButton={ClosePopUP}
        />
      )}
      <Card>
        <form className={classes.main} onSubmit={onUserHandle}>
          <label htmlFor="username">UserName</label>
          <input type="username" value={userName} onChange={userNameHandle} />
          <label htmlFor="username">Age (Years)</label>
          <input type="number" value={userAge} onChange={userAgeHandle} />
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

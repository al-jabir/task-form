import React, { useState } from "react";
import Card from "../../UI/Cards/Card";

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
  };
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <Card>
        <form onSubmit={onUserHandl}>
          <label htmlFor="username">Username</label>
          <input type="text" value={userName} onChange={userNameHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" value={userAge} onChange={userAgeHangler} />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

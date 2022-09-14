import React, { useState } from "react";
import Card from "../../UI/Cards/Card";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userAgeHangler = (e) => {
    setUserAge(e.target.vale);
  };
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <Card>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" value={userName} onChange={userNameHandler} />
          <label htmlFor="age">Age</label>
          <input type="number" value={userAge} onChange={userAgeHangler} />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

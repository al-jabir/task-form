import React, { useState } from "react";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const onUserHandle = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (userAge < 1) {
      return;
    }
    console.log(userName, userAge);
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
      <form onSubmit={onUserHandle}>
        <label htmlFor="username">UserName</label>
        <input type="username" value={userName} onChange={userNameHandle} />
        <label htmlFor="username">Age (Years)</label>
        <input type="number" value={userAge} onChange={userAgeHandle} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;

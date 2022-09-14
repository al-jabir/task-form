import React from "react";
import Card from "../../UI/Cards/Card";

const AddUser = () => {
  return (
    <div>
      <Card>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" />
          <label htmlFor="age">Age</label>
          <input type="number" />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

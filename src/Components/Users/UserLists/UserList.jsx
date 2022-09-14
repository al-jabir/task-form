import React from "react";
import Card from "../../UI/Cards/Card";
import classes from "./UserList.module.css";

const UserList = ({ items }) => {
  //   console.log(items);
  return (
    <Card className={classes.users}>
      <ul>
        {items.map((user, id) => (
          <li key={id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

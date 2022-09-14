import React from "react";

const UserList = ({ items }) => {
  //   console.log(items);
  return (
    <div
      style={{
        border: "solid 1px tomato",
        padding: "10px",
        width: "50%",
        margin: "0 auto",
      }}
    >
      <ul>
        {items.map((item, inx) => {
          const { name, age } = item;
          return (
            <li key={inx}>
              {name} {age} Years old
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;

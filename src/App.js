import React, { useState } from "react";
import AddUser from "./Components/Users/AddUsers/AddUser";
import UserList from "./Components/Users/UserLists/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const itemListHandle = (name, age) => {
    setUserList((prevList) => {
      return [...prevList, { name: name, age: age }];
    });
  };

  return (
    <>
      <AddUser onAddUserHandle={itemListHandle} />
      <UserList items={userList} />
    </>
  );
};

export default App;

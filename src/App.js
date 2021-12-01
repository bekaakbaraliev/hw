import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]
    })
  };
  const DeleteChangeHandler =(delList)=> {
    setUserList((prevUserList) => {
      const newList = prevUserList.filter(list => list.id !== delList)
      console.log(newList)
      return newList
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList onDeleteEl={DeleteChangeHandler} users={userList} />
    </>
  );
}

export default App;
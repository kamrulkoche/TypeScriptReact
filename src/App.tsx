import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import ObjectUser from './components/ObjectUser/ObjectUser';
import UsersDemo from './components/UsersDemo/UsersDemo';

const user1 = {
  name: "Kamrul Hasan",
  age: 25,
  isRegistered: false,
  lang: ["Bangla", "English"]
}
const user2 = {
  name: "Anisul Islam",
  age: 31,
  isRegistered: true,
  lang: ["Bangla", "English"]
}

const users = [
  {
    id: 1,
    name: "kamrul hasan",
    email: "kamrulkoche@gmaul.com",
    age: 25,
  },
  {
    id: 2,
    name: "Anisul islam",
    email: "anisul@gmaul.com",
    age: 32,
  },
]

function App() {
  return (
    <div className="App">
      <h1>React + TypeScript</h1>
      {/* <User name="kamrul Hasan" age={25} isRegistered={true}></User> */}
      {/* <User name="Emon Islam" age={29} isRegistered={false} lang={["Bangla", "English"]}></User> */}

      {/* <ObjectUser user={user1}></ObjectUser>
      <ObjectUser user={user2}></ObjectUser> */}

      <UsersDemo users={users}></UsersDemo>
    </div>
  );
}

export default App;

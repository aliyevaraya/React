import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./components/Users";
import "./App.css"
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const res = await axios(BASE_URL);
    const data = res.data;
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <Users users={users} />
    </div>
  );
};

export default App;

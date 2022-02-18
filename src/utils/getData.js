import axios from "axios";
import { useState } from "react";

export const GetData = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/todos/";
  const [users, setUsers] = useState([]);
  const getApiData = async () => {
    await axios
      .get(API_URL)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  };

  getApiData();
  return users;      
};

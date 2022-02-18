import { useEffect, useState } from "react";

export const GetData = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/todos/";
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (isLoading) ? [] : users;      
};

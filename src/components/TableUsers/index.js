import axios from "axios";
import { useEffect, useState } from "react";
import "./tableusers.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

export const TableUsers = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/todos/";
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [usersTable, setUsersTable] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const getApiData = async () => {
    await axios
      .get(API_URL)
      .then((response) => {
        setUsers(response.data);
        setUsersTable(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
    filterSearch(e.target.value);
  };

  const filterSearch = (inputUserText) => {
    let results = usersTable.filter((element) => {
      if (
        element.userId
          .toString()
          .toLowerCase()
          .includes(inputUserText.toLowerCase()) ||
        element.id
          .toString()
          .toLowerCase()
          .includes(inputUserText.toLowerCase()) ||
        element.title
          .toString()
          .toLowerCase()
          .includes(inputUserText.toLowerCase())
      ) {
        return element;
      }
    });
    setUsers(results);
  };

  return (
    <div className="table-container">
      <Link to="/">
        <button>Regresar</button>
      </Link>

      {isLoading ? (
        <TailSpin height="100" width="100" color="grey" ariaLabel="loading" />
      ) : (
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar..."
            className="search"
            onChange={handleSearch}
          ></input>
          <div className="table-responsive">
            <table className="table table-sm table-bordered" id="pagination">
              <thead>
                <tr>
                  <th>ID User</th>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.userId}</td>
                      <td>{user.id}</td>
                      <td>{user.title}</td>
                      <td>{Boolean.prototype.toString(user.completed)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

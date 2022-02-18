import axios from "axios";
import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./reactBootstrapTable.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

export const ReactBootstrapTableNext = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/todos/";
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const columns = [
    {
      dataField: "userId",
      text: "User Id",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "id",
      text: "Id",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "title",
      text: "Title",
      sort: true,
      filter: textFilter(),
    },
  ];

  const getApiData = async () => {
    await axios
      .get(API_URL)
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="bootstrapTable-container">
      <h1>React Bootstrap Table Next</h1>
      <h2>Características</h2>
      <p>Paginación, Organizar al dar click sobre el título</p>
      <BootstrapTable
        keyField="id"
        data={users}
        columns={columns}
        pagination={paginationFactory()}
        filter={filterFactory()}
      />
    </div>
  );
};

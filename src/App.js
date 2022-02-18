import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { ReactBootstrapTableNext } from "./components/ReactBootstrapTable";
import { TableUsers } from "./components/TableUsers";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="table" element={<TableUsers />} />
        <Route path="next" element={<ReactBootstrapTableNext />} />
      </Routes>
    </div>
  );
}

export default App;

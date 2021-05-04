import React from "react";
import { Navbar, TableHeader, DataTable } from "./Components";
import "./App.module.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <TableHeader />
      <DataTable />
    </div>
  );
};

export default App;

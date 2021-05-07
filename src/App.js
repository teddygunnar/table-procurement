import React from "react";
import { Navbar, DataTable, FormTable } from "./Components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={DataTable} />
        <Route path="/form" exact component={FormTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

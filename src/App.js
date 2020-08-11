import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Create Import File
import "./App.css";

// Home Layout
import Main from "./Main";
import Article from "./components/Article";
import Category from "./components/Category";
import Login from "./components/Login";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main} />
        <Route path="/article" component={Article} />
        <Route path="/category" component={Category} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

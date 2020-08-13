import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Edit from "./components/Edit";
import Insert from "./components/Insert";
import View from "./components/View";

import "./App.css";
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand">
          App
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Insert"} className="nav-link">
              Insert
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/View"} className="nav-link">
              View
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/Insert" component={Insert}></Route>
        <Route path="/View" component={View}></Route>
        {/* <Route path="/Edit/:id" component={Edit}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;

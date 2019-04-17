import React, { Component } from "react";
import logo from "./logo.svg";
import WeebRanker from "./WeebRanker";
import About from "./About";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <ul class="nav nav-pills justify-content-center">
        <li class="nav-item">
          <NavLink className="nav-link" exact to="/" activeClassName="active">
            Weeb Ranker
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>

      <main className="app">
        <Route path="/" exact component={WeebRanker} />
        <Route path="/about/" component={About} />
      </main>
    </Router>
  );
}

export default App;

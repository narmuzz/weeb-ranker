import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WeebRanker from "./WeebRanker";
import About from "./About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navigation">
        <Link className="navigation-button" to="/">
          Weeb Ranker
        </Link>
        <Link className="navigation-button" to="/about">
          About
        </Link>
      </nav>

      <main className="app">
        <Route path="/" exact component={WeebRanker} />
        <Route path="/about/" component={About} />
      </main>
    </Router>
  );
}

export default App;

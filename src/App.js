import React from "react";
import "./styles/App.css";
import Header from "./Header";
import Home from "./Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


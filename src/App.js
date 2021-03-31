import React from "react";
import "./App.css";
import Nav from "./Nav.js";
import Login from "./login.js";
import Board from "./components/board.js";
import Checkout from "./components/CheckOut.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Board />
      </div>
      <Router>
        <div className="container">
          {/* <Route path="/bookticket" component={Board}></Route> */}

          <Route path="/checkout" component={Checkout}></Route>
        </div>
        <div className="container">{/* <p1>Hi</p1> */}</div>
      </Router>
    </>
  );
}

export default App;

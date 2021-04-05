import React, { useState, useEffect } from "react";
import Seat from "./seat.png";
import "./App.css";
import Nav from "./Nav.js";
import Login from "./login.js";
import Board from "./components/board.js";
import MovieList from "./components/movieList";
import Checkout from "./components/CheckOut.js";
import MovieDisplay from "./components/movieDisplay";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Board />
      {/* <MovieDisplay /> */}
      {/* <Router>
        <Switch>
          <Route path="/" exact component={MovieDisplay}></Route>
          <Route path="/board" exact component={Board}></Route>
          <Route path="/checkout" exact component={Checkout}></Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;

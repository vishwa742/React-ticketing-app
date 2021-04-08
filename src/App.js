import React, { useState, useEffect } from "react";
import Seat from "./seat.png";
import "./App.css";
import Nav from "./Nav.js";
import Login from "./login.js";
import Board from "./components/board.js";
import MovieList from "./components/movieList";
import Checkout from "./components/CheckOut.js";
import MovieDisplay from "./components/movieDisplay";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Board /> */}
      {/* <MovieDisplay /> */}

      <Router>
        <Switch>
          <Route path="/" exact component={withRouter(MovieDisplay)}></Route>
        </Switch>
        <Switch>
          <Route path="/board" component={withRouter(Board)}></Route>
        </Switch>
        <Switch>
          <Route path="/checkout" component={withRouter(Checkout)}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

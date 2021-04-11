import React from "react";
import "./App.css";
import Board from "./components/board.js";
import NewBoard from "./components/testBoard.js";

import Checkout from "./components/CheckOut.js";
import MovieDisplay from "./components/movieDisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Board /> */}
      {/* <MovieDisplay /> */}
      {/* <NewBoard /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={MovieDisplay}></Route>

          <Route path="/board" component={Board}></Route>

          <Route path="/checkout" component={Checkout}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

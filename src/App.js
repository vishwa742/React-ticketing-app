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

// const API_KEY = "a2ccb0a6c2116c753ac57cfe0bb5b417";
// const NOW_PLAYING =
//   "https://api.themoviedb.org/3/movie/now_playing?api_key=a2ccb0a6c2116c753ac57cfe0bb5b417";

function App() {
  //   const [movieNames, setMovieNames] = useState([]);

  //   useEffect(() => {
  //     fetch(NOW_PLAYING)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMovieNames(data.results);
  //         console.log(movieNames);
  //       });
  //   }, []);
  return (
    <>
      {/* <MovieDisplay /> */}
      <Router>
        <Route path="/" exact component={MovieDisplay}></Route>
        <Route path="/board" exact component={Board}></Route>
        <Route path="/checkout" exact component={Checkout}></Route>
      </Router>
    </>
  );
}

export default App;

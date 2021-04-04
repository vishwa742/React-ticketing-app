import React, { useState, useEffect } from "react";
import Seat from "./seat.png";
import "./App.css";
import Nav from "./Nav.js";
import Login from "./login.js";
import Board from "./components/board.js";
import MovieList from "./components/movieList";
import Checkout from "./components/CheckOut.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const list = [];
const array = ["1", "2", "3"];

const API_KEY = "a2ccb0a6c2116c753ac57cfe0bb5b417";
const NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=a2ccb0a6c2116c753ac57cfe0bb5b417";

function App() {
  const [movieNames, setMovieNames] = useState([]);

  useEffect(() => {
    fetch(NOW_PLAYING)
      .then((res) => res.json())
      .then((data) => {
        setMovieNames(data.results);
        console.log(movieNames);
      });
  }, []);
  return (
    <>
      <table
        style={{
          backgroundColor: "#000",
          display: "block",
          color: "#FFF",
        }}
      >
        <tbody>
          <tr>
            <td>
              <img src={Seat} width="50px"></img>
            </td>
            <td>
              <h3>Ticket Booking</h3>
            </td>
          </tr>
        </tbody>
      </table>

      <section className="movieList">
        {movieNames.map((movie) => (
          <MovieList {...movie} key={movie.id} />
        ))}
      </section>
      {/* <div className="container">
        <Board />
      </div> */}

      <Router>
        <div className="container">
          {/* <Route path="/bookticket" component={Board}></Route> */}
          <Route path="/board" component={Board}></Route>
          <Route path="/checkout" component={Checkout}></Route>
        </div>
        <div className="container">{/* <p1>Hi</p1> */}</div>
      </Router>
    </>
  );
}

export default App;

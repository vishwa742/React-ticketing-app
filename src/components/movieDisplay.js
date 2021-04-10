import React, { useState, useEffect } from "react";
import "./board.css";
import Seat from "./seat.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MovieList from "./movieList";

const API_KEY = "a2ccb0a6c2116c753ac57cfe0bb5b417";
const NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=a2ccb0a6c2116c753ac57cfe0bb5b417";

function MovieDisplay() {
  const [movieNames, setMovieNames] = useState([]);

  useEffect(() => {
    fetch(NOW_PLAYING)
      .then((res) => res.json())
      .then((data) => {
        setMovieNames(data.results);
        console.log(data);
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
              <h3>Ticket Booker</h3>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <section className="movieList">
        {movieNames.map((movie) => (
          <MovieList {...movie} key={movie.id} />
        ))}
      </section>
    </>
  );
}

export default MovieDisplay;

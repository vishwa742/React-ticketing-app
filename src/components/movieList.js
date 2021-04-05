import React, { useState } from "react";
import "./board.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Board from "./board.js";

const IMG_API = "https://image.tmdb.org/t/p/w300/";

function MovieList({ title, poster_path }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <article className="movie">
        <img src={IMG_API + poster_path} alt="" />
        {/* <div className="movie-hover"> */}
        <Router>
          <Link to="/board">
            <div className="btn">
              <button className="button">Book Tickets</button>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="btns">
              <button className="button">Play Trailer</button>
            </div>
          </Link>
        </Router>
        {/* </div> */}
        <div className="movie-title">
          <h3>{title}</h3>
        </div>
      </article>
    </>
  );
}

export default MovieList;

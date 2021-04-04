import React, { useState } from "react";
import "./board.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Board from "./board.js";

const IMG_API = "https://image.tmdb.org/t/p/w300/";

function MovieList({ title, poster_path }) {
  return (
    <>
      <article className="movie">
        <img src={IMG_API + poster_path} alt="" />
        <div className="movie-hover">
          <button className="btn">Book Tickets</button>
          <button className="btn">Play Trailer</button>
        </div>
        <div className="movie-title">
          <h3>{title}</h3>
        </div>
      </article>
    </>
  );
}

export default MovieList;

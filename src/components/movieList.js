import React from "react";

import Board from "./board.js";

import "./board.css";
import { Link } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w300/";

function MovieList({ title, poster_path }) {
  const trailer_API =
    "https://api.themoviedb.org/3/movie/" +
    poster_path +
    "/videos?api_key=a2ccb0a6c2116c753ac57cfe0bb5b417&language=en-US";
  return (
    <>
      <article className="movie">
        <img src={IMG_API + poster_path} alt="" />
        {/* <div className="movie-hover"> */}

        {/* <Link to="/board"> */}
        <Link
          to={{
            pathname: "/board",
            aboutProps: {
              title: { title },
            },
          }}
        >
          <div className="btn">
            <button className="button">Book Tickets</button>
          </div>
        </Link>
        <div className="btns">
          <a href={trailer_API}>
            {" "}
            <button className="button">Play Trailer</button>
          </a>
        </div>
        {/* </Link> */}

        {/* </div> */}
        <div className="movie-title">
          <h3>{title}</h3>
          {/* <Board {...title} /> */}
        </div>
      </article>
    </>
  );
}

export default MovieList;

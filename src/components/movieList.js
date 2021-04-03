import React, { useState } from "react";
import "./board.css";

const API_KEY = "a2ccb0a6c2116c753ac57cfe0bb5b417";
const url =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=a2ccb0a6c2116c753ac57cfe0bb5b417";

function MovieList() {
  const [movieNames, setMovieNames] = useState([]);
  const list = [];
  const getResults = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results;

        results.forEach((movie) => {
          list.push(movie.title);
        });
        setMovieNames(list);
        console.log(typeof movieNames);

        // console.log("Data:", results[0]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    //return list;
  };

  return (
    <article className="movies">
      <button onClick={getResults}>Click me</button>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6qpVJwvjH9StXx-bBtICwgHaK9%26pid%3DApi&f=1"
        alt=""
      />
      <h3>Captain Marvel</h3>
    </article>
  );
}

export default MovieList;

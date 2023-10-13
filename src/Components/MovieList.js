import React from "react";
import Moviecard from "./Moviecard";

export default function MovieList({ movieList, search, rate }) {
  
  if (!movieList) {
    return <div>No movies available</div>;
  }

  return (
    <div>
      <div className="movieListContainer">
        {movieList
          ?.filter(
            (el) =>
              el.title.toUpperCase().includes(search.toUpperCase().trim()) &&
              el.rate >= rate
          )
          .map((el, key) => (
            <Moviecard key={el.id} movies={el} />
          ))}
      </div>
    </div>
  );
}



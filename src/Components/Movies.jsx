import React, { useState } from "react";
import { moviesList as initialMoviesList } from "../Backend/Data.js";

const Movies = () => {
  //useHook
  const [moviesList, setMoviesList] = useState(initialMoviesList);

  //filter function--pending 

  //console.log(filterByCategory);

  return (
    <>
      <div className="Filter_button">
        <button type="button" class="btn btn-outline-primary">
          ALL
        </button>
        <button type="button" class="btn btn-outline-secondary">
        Action
        </button>
        <button type="button" class="btn btn-outline-success">
        Thriller
        </button>
        <button type="button" class="btn btn-outline-danger">
        Animation
        </button>
        <button type="button" class="btn btn-outline-warning">
        Horror
        </button>
        <button type="button" class="btn btn-outline-info">
        Drama
        </button>
        <button type="button" class="btn btn-outline-light">
        Sci-Fi
        </button>
         
      </div>

      <div className="flex-container">
        {moviesList.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div>
              <img src={movie.poster_path} style={{ width: "265px" }} />
              <p>{movie.title}</p>
              <p>{movie.category}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;

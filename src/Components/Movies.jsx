import React, { useState } from "react";
import { moviesList as initialMoviesList } from "../Backend/Data.js";

const Movies = () => {
  // useHook
  const [moviesList, setMoviesList] = useState(initialMoviesList);

  // filter function
  const filterCategory = (category) => {
    if (category === "All") {
      setMoviesList(initialMoviesList); // Reset to the original list
    } else {
      const filteredMovies = initialMoviesList.filter(
        (movie) => movie.category === category
      );
      setMoviesList(filteredMovies); // Update state with filtered movies
    }
  };

  return (
    <>
      <div className="Filter_button">
        <button
          onClick={() => filterCategory("All")}
          type="button"
          className="btn btn-outline-primary"
        >
          ALL
        </button>
        <button
          onClick={() => filterCategory("Action")}
          type="button"
          className="btn btn-outline-secondary"
        >
          Action
        </button>
        <button
          onClick={() => filterCategory("Thriller")}
          type="button"
          className="btn btn-outline-success"
        >
          Thriller
        </button>
        <button
          onClick={() => filterCategory("Animation")}
          type="button"
          className="btn btn-outline-danger"
        >
          Animation
        </button>
        <button
          onClick={() => filterCategory("Horror")}
          type="button"
          className="btn btn-outline-warning"
        >
          Horror
        </button>
        <button
          onClick={() => filterCategory("Drama")}
          type="button"
          className="btn btn-outline-info"
        >
          Drama
        </button>
        <button
          onClick={() => filterCategory("Sci-Fi")}
          type="button"
          className="btn btn-outline-light"
        >
          Sci-Fi
        </button>
      </div>

      <div className="flex-container">
        {moviesList.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div>
              <img
                src={movie.poster_path}
                alt={movie.title}
                style={{ width: "265px" }}
              />
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

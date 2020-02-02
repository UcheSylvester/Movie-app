import React from "react";

import Movie from "../movie/movie.component";

import "./movies-directory.styles.scss";

const MoviesDirectory = ({ movies }) => (
  <div className="movies-directory">
    {movies.map(({ id, title, release_date, vote_count, backdrop_path }) => (
      <Movie
        key={id}
        title={title}
        backdropPath={backdrop_path}
        releaseDate={release_date}
        voteCount={vote_count}
      />
    ))}
  </div>
);

export default MoviesDirectory;

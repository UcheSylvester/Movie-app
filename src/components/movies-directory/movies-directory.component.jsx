import React from "react";

import Movie from "../movie/movie.component";

import MOVIES from "./movies.data";

import "./movies-directory.styles.scss";

class MoviesDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: MOVIES
    };
  }

  render() {
    return (
      <div className="movies-directory">
        {this.state.movies.map(
          ({ id, title, poster_path, release_date, vote_count }) => (
            <Movie
              key={id}
              title={title}
              posterPath={poster_path}
              releaseDate={release_date}
              voteCount={vote_count}
            />
          )
        )}
      </div>
    );
  }
}

export default MoviesDirectory;

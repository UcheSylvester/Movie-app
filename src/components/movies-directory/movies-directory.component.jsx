import React from "react";

import Movie from "../movie/movie.component";

import "./movies-directory.styles.scss";

class MoviesDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  render() {
    return (
      <div className="movies-directory">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    );
  }
}

export default MoviesDirectory;

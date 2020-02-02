import React from "react";

import Movie from "../movie/movie.component";

import MOVIES from "./movies.data";

import "./movies-directory.styles.scss";

class MoviesDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=f1e07a6b0a80aa678e23a81b8077fbbc&sort_by=popularity.desc"
    )
      .then(res => res.json())
      .then(data => this.setState({ movies: data.results }));
  }

  render() {
    return (
      <div className="movies-directory">
        {this.state.movies.map(
          ({ id, title, release_date, vote_count, backdrop_path }) => (
            <Movie
              key={id}
              title={title}
              backdropPath={backdrop_path}
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

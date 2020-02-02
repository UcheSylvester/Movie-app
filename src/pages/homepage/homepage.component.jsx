import React from "react";

import MoviesDirectory from "../../components/movies-directory/movies-directory.component";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchInput: ""
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
      <div className="homepage">
        <MoviesDirectory movies={this.state.movies} />
      </div>
    );
  }
}

export default HomePage;

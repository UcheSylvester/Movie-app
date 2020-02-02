import React from "react";

import MoviesDirectory from "../../components/movies-directory/movies-directory.component";

import "./homepage.styles.scss";
import SearchInput from "../../components/search-input/search-input.component";

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

  handleInputChange = e => this.setState({ searchInput: e.target.value });

  render() {
    const { movies, searchInput } = this.state;

    const filteredMovies = movies.filter(({ title }) =>
      title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
      <div className="homepage">
        <SearchInput
          placeholder="search movies"
          handleInputChange={this.handleInputChange}
        />

        {!filteredMovies.length && !searchInput ? (
          "loading..."
        ) : searchInput && !filteredMovies.length ? (
          "no result found"
        ) : (
          <MoviesDirectory movies={filteredMovies} />
        )}
      </div>
    );
  }
}

export default HomePage;

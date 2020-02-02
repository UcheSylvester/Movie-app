import React from "react";

import "./movie.styles.scss";

const Movie = ({ title, releaseDate, backdropPath }) => {
  console.log(backdropPath);
  return (
    <div className="movie">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdropPath})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="release-date">{releaseDate}</span>
      </div>
    </div>
  );
};

export default Movie;

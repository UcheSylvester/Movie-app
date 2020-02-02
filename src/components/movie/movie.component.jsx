import React from "react";

import "./movie.styles.scss";

const Movie = ({ title, releaseDate, posterPath }) => {
  console.log(posterPath);
  return (
    <div
      className="movie"
      style={{
        backgroundImage: `url(${posterPath})`
      }}
    >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default Movie;

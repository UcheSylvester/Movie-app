import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="movies-directory">
      <div className="movie">
        <div className="content">
          <h1 className="title">FLASH</h1>
        </div>
      </div>

      <div className="movie">
        <div className="content">
          <h1 className="title"> LUCIFER</h1>
        </div>
      </div>

      <div className="movie">
        <div className="content">
          <h1 className="title">DECEPTION</h1>
        </div>
      </div>

      <div className="movie">
        <div className="content">
          <h1 className="title">MERLIN</h1>
        </div>
      </div>

      <div className="movie">
        <div className="content">
          <h1 className="title">LEGEND OF THE SEEKER</h1>
        </div>
      </div>

      <div className="movie">
        <div className="content">
          <h1 className="title">REDEMPTION</h1>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

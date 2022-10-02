import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__content">
        <div></div>
        <div className="input__elements">
          <label className="name__label">Enter your name</label>
          <input className="name__input" placeholder="Ali Al Riyami" />
          <button className="submit__button">Let's Go!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

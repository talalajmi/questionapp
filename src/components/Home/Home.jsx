import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    setIsLoading((current) => !current);
    setTimeout(() => {
      setIsLoading((current) => !current);
    }, 1000);
  };

  return (
    <div className="home__container">
      <div className="home__content">
        {isLoading ? (
          <div>
            <img src="http://a.top4top.net/p_1990j031.gif" alt="Loading" />
            <p>Checking for available contests...</p>
          </div>
        ) : (
          <form className="input__elements" onSubmit={submit}>
            <label className="name__label">Enter your name</label>
            <input
              className="name__input"
              placeholder="Ali Al Riyami"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              required
            />

            <button className="submit__button" type="submit">
              Let's Go!
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;

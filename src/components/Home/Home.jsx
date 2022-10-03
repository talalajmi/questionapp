import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "reactstrap";
import "./Home.css";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    setIsLoading((current) => !current);
    setTimeout(() => {
      setIsLoading((current) => !current);
      navigate("/questions");
    }, 5000);
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
            <Input
              className="name__input"
              placeholder="Ali Al Riyami"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              required
            />

            <Button color="primary" style={{ width: "12rem" }}>
              Let's Go!
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css";

const Question = () => {
  const navigate = useNavigate();
  return (
    <div className="question__container">
      <div className="question__content">
        <p>Questions Page</p>
        <button onClick={() => navigate("/thank-you")}>
          Go to thank you page
        </button>
      </div>
    </div>
  );
};

export default Question;

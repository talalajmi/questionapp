import React from "react";
import "./Contests.css";

const Contests = () => {
  return (
    <div className="contests__container">
      <div class="contests__content">
        <table class="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dom</td>
              <td>6000</td>
            </tr>
            <tr class="active-row">
              <td>Melissa</td>
              <td>5150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contests;

import React from "react";
import Card from "../Card";
import "./style.css";

function ResultsContainer() {
  return (
    <div className="jumbotronWrapper">
      <div className="jumbotron resultsContainer">
        <p className="lead resultsHeader">Results</p>
        <Card />
      </div>
    </div>
  );
}

export default ResultsContainer;
import React, { useEffect } from "react";
import Card from "../Card";
import "./style.css";
import API from "../../utils/API";

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

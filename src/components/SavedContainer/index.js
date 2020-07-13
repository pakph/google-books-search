import React from "react";
import Card from "../Card";
import "./style.css";

function SavedContainer() {
  return (
    <div className="jumbotronWrapper">
      <div className="jumbotron savedContainer">
        <p className="lead savedHeader">Saved Books</p>
        <Card />
      </div>
    </div>
  );
}

export default SavedContainer;

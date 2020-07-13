import React from "react";
import ViewBtn from "../ViewBtn";
import "./style.css";
import DeleteBtn from "../DeleteBtn";

function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <h5 className="card-title booktitle">Book Title</h5>
          <ViewBtn />
          <DeleteBtn />
        </div>
        <div className="row">
          <p className="text-muted subtitle">Subtitle</p>
        </div>
        <div className="row">
          <p className="text-muted author">Author</p>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/128"
              alt="Blank"
            />
          </div>
          <div className="col-lg-10">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

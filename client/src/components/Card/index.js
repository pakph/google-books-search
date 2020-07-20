import React from "react";
import ViewBtn from "../ViewBtn";
import "./style.css";
import DeleteBtn from "../DeleteBtn";

function Card(props) {
  return (
    <div className="card" id={props.key}>
      <div className="card-body">
        <div className="row">
          <h5 className="card-title booktitle">{props.title}</h5>
          <ViewBtn />
          <DeleteBtn />
        </div>
        <div className="row">
          <p className="text-muted author">{props.author}</p>
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
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

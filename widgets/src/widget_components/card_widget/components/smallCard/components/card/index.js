import React from "react";
import "./Card.scss";

export default function Card(props) {
  return (
    <div className="card-container">
      <img className="profile-img" src={props.image}></img>
      <div className="card-info-wrapper">
        <p className="card-title">{props.title}</p>
        <p className="card-name">{props.name}</p>
      </div>
    </div>
  );
}

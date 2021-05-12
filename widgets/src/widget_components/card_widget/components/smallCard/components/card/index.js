import React from "react";
import DefaultProfile from "../../../../assets/images/defaultProfile";
import "./Card.scss";

export default function Card(props) {
  return (
    <div className="card-container">
      {props.image ? (
        <img className="profile-img" src={props.image}></img>
      ) : (
        <DefaultProfile></DefaultProfile>
      )}
      <div className="card-info-wrapper">
        <p className="card-title">{props.title}</p>
        <p className="card-name">{props.name}</p>
      </div>
    </div>
  );
}

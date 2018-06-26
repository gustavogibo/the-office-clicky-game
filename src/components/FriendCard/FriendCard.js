import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.selectCharacter(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
        <strong className="name-cast">Name:</strong> {props.name}
    </div>
  </div>
);

export default FriendCard;

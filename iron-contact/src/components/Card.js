import React from "react";
import "../index.css";

const Card = props => {
  return (
    <tr className="card-table">
      <td>
        <img src={props.img} alt="Celeb Pic" />
      </td>
      <td> {props.name} </td>
      <td> {props.popularity} </td>
      <td>
        <button onClick={() => props.deleteCelebHandler(props.name)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Card;

import React from "react";

export default function GameChoice(props) {
  const { gameChoice } = props;

  return (
    <div className="mt-3">
      <img
        style={{ width: "100%" }}
        src={gameChoice.img}
        alt={gameChoice.img}
      />
      <div className="bg-success mt-2 pb-2 text-center">
        <button className="btn btn-danger mr-3">
          <i className="fa fa-minus"></i>
        </button>
        <span style={{ fontSize: "25px", color: "yellow" }}>
          {gameChoice.point}
        </span>
        <button className="btn btn-danger ml-3">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

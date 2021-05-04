import React from "react";
import { useDispatch } from "react-redux";

export default function GameChoice(props) {
  const { gameChoice } = props;

  const dispatch = useDispatch();

  return (
    <div className="mt-3">
      <img
        style={{ width: "100%" }}
        src={gameChoice.img}
        alt={gameChoice.img}
      />
      <div className="bg-success mt-2 pb-2 text-center">
        <button
          onClick={() =>
            dispatch({
              type: "BET_POINT",
              gameChoice,
              changePoint: false,
            })
          }
          className="btn btn-danger mr-3"
        >
          <i className="fa fa-minus"></i>
        </button>
        <span style={{ fontSize: "25px", color: "yellow" }}>
          {gameChoice.point}
        </span>
        <button
          onClick={() =>
            dispatch({
              type: "BET_POINT",
              gameChoice,
              changePoint: true,
            })
          }
          className="btn btn-danger ml-3"
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";

export default function TotalPoint(props) {
  const totalPoint = useSelector(
    (state) => state.GourdCrabShrimpFishReducer.totalPoint
  );

  return (
    <div>
      <h3 className="text-center display-4" style={{ color: "green" }}>
        Gourd Crab Shrimp Fish Game
      </h3>
      <div className="text-center mt-3">
        <span
          className="p-3 text-white bg-danger"
          style={{ fontSize: "30px", borderRadius: "8px" }}
        >
          Total Point:
          <span className="text-warning">{totalPoint.toLocaleString()}</span>
        </span>
      </div>
      <div className="text-center p-5">
        <button
          className="p-3 text-white bg-success"
          style={{
            fontSize: "20px",
            borderRadius: "5px",
            border: "none",
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

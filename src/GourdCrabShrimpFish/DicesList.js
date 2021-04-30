import React from "react";

export default function DicesList() {
  return (
    <div className="mt-5 p-3">
      <div
        className="bg-white ml-2"
        style={{ width: 300, height: 300, borderRadius: 150 }}
      >
        <div className="row">
          <div className="col-12 text-center mt-5">
            <img
              style={{ width: 60 }}
              src="./img/GourdCrabShrimpFish/gourd.png"
              alt="gourd.png"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6 p-5 text-right">
            <img
              style={{ width: 60 }}
              src="./img/GourdCrabShrimpFish/gourd.png"
              alt="gourd.png"
            />
          </div>
          <div className="col-6 p-5">
            <img
              style={{ width: 60 }}
              src="./img/GourdCrabShrimpFish/gourd.png"
              alt="gourd.png"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          style={{ fontSize: "50px", width: 150, borderRadius: "20px" }}
          className="btn btn-primary"
        >
          Roll
        </button>
      </div>
    </div>
  );
}

import React from "react";

export default function DicesList() {
  return (
    <div className="mt-5 p-3">
      <div
        className="bg-white ml-2"
        style={{ width: 600, height: 600, borderRadius: 150 }}
      >
        <div className="row">
          <div className="col-12 text-center  mt-5">
            <img
              style={{ width: 150 }}
              src="./img/GourdCrabShrimpFish/gourd.png"
              alt="gourd.png"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6 p-5 text-right">
            <img
              style={{ width: 150 }}
              src="./img/GourdCrabShrimpFish/gourd.png"
              alt="gourd.png"
            />
          </div>
          <div className="col-6 p-5">
            <img
              style={{ width: 150 }}
              src="./img/GourdCrabShrimpFish/gourd.png"
              alt="gourd.png"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          style={{ fontSize: "50px", width: 300, borderRadius: "20px" }}
          className="btn btn-primary"
        >
          Roll
        </button>
      </div>
    </div>
  );
}

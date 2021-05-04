import React from "react";
import Dice from "./Dice";
import { useSelector, useDispatch } from "react-redux";

export default function DicesList() {
  const dicesList = useSelector(
    (state) => state.GourdCrabShrimpFishReducer.dicesList
  );

  const dispatch = useDispatch();

  return (
    <div className="mt-5 ml-5">
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: 150, paddingLeft: 10 }}
      >
        <div className="row">
          <div
            className="col-12 text-center"
            style={{ marginLeft: 75, marginTop: -20 }}
          >
            <Dice diceItem={dicesList[0]} />
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-right">
            <Dice diceItem={dicesList[1]} />
          </div>
          <div className="col-4 text-right">
            <Dice diceItem={dicesList[2]} />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "20%", marginTop: "5%" }}>
        <button
          onClick={() =>
            dispatch({
              type: "ROLL_DICE",
            })
          }
          style={{ fontSize: "50px", width: 150, borderRadius: "20px" }}
          className="btn btn-primary"
        >
          Roll
        </button>
      </div>
    </div>
  );
}

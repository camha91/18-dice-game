import React from "react";
import "../assets/dice.css";
import DicesList from "./DicesList";
import GameChoicesList from "./GameChoicesList";
import TotalPoint from "./TotalPoint";

export default function GourdCrabShrimpFish() {
  return (
    <div id="diceGame" className="container-fluid">
      <TotalPoint />
      <div className="row">
        <div className="col-8">
          <GameChoicesList />
        </div>
        <div className="col-4 mt-5 p-5">
          <DicesList />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import GameChoice from "./GameChoice";

export default function GameChoicesList() {
  return (
    <div className="row mt-3">
      <div className="col-4">
        <GameChoice />
      </div>
      <div className="col-4">
        <GameChoice />
      </div>
      <div className="col-4">
        <GameChoice />
      </div>
      <div className="col-4">
        <GameChoice />
      </div>
      <div className="col-4">
        <GameChoice />
      </div>
      <div className="col-4">
        <GameChoice />
      </div>
    </div>
  );
}

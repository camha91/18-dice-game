import React from "react";
import GameChoice from "./GameChoice";
import { useSelector } from "react-redux";

export default function GameChoicesList(props) {
  const gameChoices = useSelector(
    (state) => state.GourdCrabShrimpFishReducer.gameChoicesList
  );

  const renderGameChoices = () => {
    return gameChoices.map((item, index) => {
      return (
        <div key={index} className="col-4">
          <GameChoice gameChoice={item} />
        </div>
      );
    });
  };

  return <div className="row mt-3">{renderGameChoices()}</div>;
}

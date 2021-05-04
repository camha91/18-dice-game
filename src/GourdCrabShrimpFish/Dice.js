import React, { Fragment } from "react";

export default function Dice(props) {
  const { diceItem } = props;

  return (
    <Fragment>
      <div className="scene">
        <div className="cube">
          <img
            className="ml-3 cube__face front"
            style={{ width: 60 }}
            src={diceItem.img}
            alt={diceItem.img}
          />
          <img
            className="ml-3 cube__face right"
            style={{ width: 60 }}
            src="/img/GourdCrabShrimpFish/crab.png"
            alt="/img/GourdCrabShrimpFish/crab.png"
          />
          <img
            className="ml-3 cube__face back"
            style={{ width: 60 }}
            src="/img/GourdCrabShrimpFish/deer.png"
            alt="/img/GourdCrabShrimpFish/deer.png"
          />
          <img
            className="ml-3 cube__face left"
            style={{ width: 60 }}
            src="/img/GourdCrabShrimpFish/chicken.png"
            alt="/img/GourdCrabShrimpFish/chicken.png"
          />
          <img
            className="ml-3 cube__face top"
            style={{ width: 60 }}
            src="/img/GourdCrabShrimpFish/shrimp.png"
            alt="/img/GourdCrabShrimpFish/shrimp.png"
          />
          <img
            className="ml-3 cube__face bottom"
            style={{ width: 60 }}
            src="/img/GourdCrabShrimpFish/fish.png"
            alt="/img/GourdCrabShrimpFish/fish.png"
          />
        </div>
      </div>
    </Fragment>
  );
}

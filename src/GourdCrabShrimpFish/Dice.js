import React from "react";

export default function Dice(props) {
  const { diceItem } = props;

  return (
    <div>
      <img style={{ width: 60 }} src={diceItem.img} alt={diceItem.img} />
    </div>
  );
}

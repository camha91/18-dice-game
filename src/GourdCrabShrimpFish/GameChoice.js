import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";

export default function GameChoice(props) {
  const { gameChoice } = props;

  const dispatch = useDispatch();

  const [decrease, setDecrease] = useState(false);

  const propsUseSpringDecrease = useSpring({
    from: { scale: 1 },
    to: { scale: 1.25 },
    reset: true,
  });

  const [increase, setIncrease] = useState(false);

  const propsUseSpringIncrease = useSpring({
    from: { scale: 1 },
    to: { scale: 1.25 },
    reset: true,
  });

  return (
    <div className="mt-3">
      <img
        style={{ width: "100%" }}
        src={gameChoice.img}
        alt={gameChoice.img}
      />
      <div className="bg-success mt-2 pb-2 text-center">
        <animated.button
          style={propsUseSpringDecrease}
          onClick={() => {
            setDecrease({ scale: decrease ? 1.25 : 1 });

            dispatch({
              type: "BET_POINT",
              gameChoice,
              changePoint: false,
            });
          }}
          className="btn btn-danger mr-3"
        >
          <i className="fa fa-minus"></i>
        </animated.button>
        <span style={{ fontSize: "25px", color: "yellow" }}>
          {gameChoice.point}
        </span>
        <animated.button
          style={propsUseSpringIncrease}
          onClick={() => {
            setIncrease({ scale: increase ? 1.25 : 1 });

            dispatch({
              type: "BET_POINT",
              gameChoice,
              changePoint: true,
            });
          }}
          className="btn btn-danger ml-3"
        >
          <i className="fa fa-plus"></i>
        </animated.button>
      </div>
    </div>
  );
}

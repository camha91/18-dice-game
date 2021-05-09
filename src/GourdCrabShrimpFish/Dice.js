import React, { Fragment } from "react";
import { useSpring, animated, to } from "react-spring";

export default function Dice(props) {
  const { diceItem } = props;

  const propsDice = useSpring(() => ({
    to: [1800, 1800, 1800],
    from: [0, 0, 0],
    config: {
      duration: 1000,
    },
    reset: true,
  }));

  // set({ xyz: [1800, 1800, 1800] });

  return (
    <Fragment>
      <div className="scene ml-5">
        <animated.div className="cube">
          <div className="ml-3 cube__face front">
            <img
              style={{ width: "100%" }}
              src={diceItem.img}
              alt={diceItem.img}
            />
          </div>

          <div
            className="ml-3 cube__face back"
            // style={{
            //   transform: propsDice.to(
            //     (x, y, z) => `rotate3d(${x}px, ${y}px, ${z}px)`
            //   ),
            // }}
          >
            <img
              style={{ width: "100%" }}
              src="/img/GourdCrabShrimpFish/crab.png"
              alt="/img/GourdCrabShrimpFish/crab.png"
            />
          </div>

          <div className="ml-3 cube__face right">
            <img
              style={{ width: "100%" }}
              src="/img/GourdCrabShrimpFish/deer.png"
              alt="/img/GourdCrabShrimpFish/deer.png"
            />
          </div>

          <div className="ml-3 cube__face left">
            <img
              style={{ width: "100%" }}
              src="/img/GourdCrabShrimpFish/chicken.png"
              alt="/img/GourdCrabShrimpFish/chicken.png"
            />
          </div>

          <div className="ml-3 cube__face top">
            <img
              style={{ width: "100%" }}
              src="/img/GourdCrabShrimpFish/shrimp.png"
              alt="/img/GourdCrabShrimpFish/shrimp.png"
            />
          </div>

          <div className="ml-3 cube__face bottom">
            <img
              style={{ width: "100%" }}
              src="/img/GourdCrabShrimpFish/fish.png"
              alt="/img/GourdCrabShrimpFish/fish.png"
            />
          </div>
        </animated.div>
      </div>
    </Fragment>
  );
}

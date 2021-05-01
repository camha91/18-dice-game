const initialState = {
  gameChoicesList: [
    {
      id: "chicken",
      img: "./img/GourdCrabShrimpFish/chicken.png",
      point: 0,
    },
    {
      id: "crab",
      img: "./img/GourdCrabShrimpFish/crab.png",
      point: 0,
    },
    {
      id: "deer",
      img: "./img/GourdCrabShrimpFish/deer.png",
      point: 0,
    },
    {
      id: "fish",
      img: "./img/GourdCrabShrimpFish/fish.png",
      point: 0,
    },
    {
      id: "gourd",
      img: "./img/GourdCrabShrimpFish/gourd.png",
      point: 0,
    },
    {
      id: "shrimp",
      img: "./img/GourdCrabShrimpFish/shrimp.png",
      point: 0,
    },
  ],

  dicesList: [
    {
      id: "gourd",
      img: "./img/GourdCrabShrimpFish/gourd.png",
    },
    {
      id: "gourd",
      img: "./img/GourdCrabShrimpFish/gourd.png",
    },
    {
      id: "gourd",
      img: "./img/GourdCrabShrimpFish/gourd.png",
    },
  ],

  totalPoint: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

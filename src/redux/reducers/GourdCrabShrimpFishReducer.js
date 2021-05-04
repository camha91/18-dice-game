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

  totalPoint: 1000,
};

const GourdCrabShrimpFishReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BET_POINT": {
      console.log("action", action);
      // Find in gameChoicesList the matching gameChoice
      const gameChoicesListUpdate = [...state.gameChoicesList];

      const indexGameChoice = gameChoicesListUpdate.findIndex(
        (gameChoice) => gameChoice.id === action.gameChoice.id
      );

      console.log(indexGameChoice);

      if (indexGameChoice !== -1) {
        if (action.changePoint) {
          if (state.totalPoint > 0) {
            gameChoicesListUpdate[indexGameChoice].point += 100;
            state.totalPoint -= 100;
          }
        } else {
          if (gameChoicesListUpdate[indexGameChoice].point > 0) {
            gameChoicesListUpdate[indexGameChoice].point -= 100;
            state.totalPoint += 100;
          }
        }
      }

      state.gameChoicesList = gameChoicesListUpdate;

      return { ...state };
    }
    case "ROLL_DICE": {
      let randomDicesList = [];

      for (let i = 0; i < 3; i++) {
        //Create a random number from 0 - 5
        const randomNum = Math.floor(Math.random() * 6);
        // Create random dice
        const randomDice = state.gameChoicesList[randomNum];

        randomDicesList.push(randomDice);
      }

      state.dicesList = randomDicesList;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default GourdCrabShrimpFishReducer;

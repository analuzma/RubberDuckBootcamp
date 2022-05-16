//INDEX
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

canvas.width = 600;
canvas.height = 400;

const gravity = 0.7;

//INPUTS
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

//GAME ENTITIES
const character = new Character();

// nextLevel() {
//     levelCount++;

//     switch (levelCount) {
//       case 1:
//         navigationTutorial.classList.add("hidden");
//         break;

//       case 2:
//         layersTutorial.classList.remove("hidden");
//         break;

//       case 3:
//         layersTutorial.classList.add("hidden");
//         break;

//       case 8:
//         return playerWon();
//     }

//     currentLevel = levels[levelCount];
//     //nextLevelSound.play();
//   this.respawn();
// }

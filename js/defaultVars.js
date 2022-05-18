//INDEX
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

canvas.width = 800;
canvas.height = 400;

const gravity = 0.7;

//

//level variables
let levelCount = 1;
//eventually: let currentLevel - levels[levelCount]

//MAIN CHARACTER

const character = new Character();

//INPUTS
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

//SOUNDS

const bgMusic = new Audio("/sounds/8bit.mp3");
bgMusic.level = 0.5;
bgMusic.loop = true;

const quackSFX = new Audio("/sounds/Quack.mp3");
const hurtSFX = new Audio("/sounds/ Oof.mp3");
const clickSFX = new Audio("/sounds/Click.mp3");
//sounds array
const sounds = [bgMusic, quackSFX, hurtSFX, clickSFX];

// function toggleMute() {
//   if (mute.value === "unmuted") {
//     sounds.forEach((sound) => (sound.volume = 0));
//     mute.value = "muted";
//     mute.innerText = "🔈";
//   } else {
//     sounds.forEach((sound) => (sound.volume = 0.8));
//     music.volume = 0.8;
//     mute.value = "unmuted";
//     mute.innerText = "🔇";
//   }
// }

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

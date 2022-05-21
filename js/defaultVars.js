//INDEX
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

canvas.width = 800;
canvas.height = 400;

const gravity = 0.7;

//level variables
let levelCount = 0;

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
const bgMusic = new Audio("sounds/8bit.mp3");
bgMusic.level = 0.9;
bgMusic.loop = true;
const quackSFX = new Audio("sounds/Quack.mp3");
quackSFX.level = 0.5;
const ouchSFX = new Audio("sounds/Ouch.mp3");
ouchSFX.level = 0.2;
const clickSFX = new Audio("sounds/Click.mp3");

//make rubber duck quack
const img = document.querySelector("img");
img.onclick = () => {
  quackSFX.play();
};

//START AND RESTART GAME
let botonStart = document.getElementById("start");

botonStart.onclick = () => {
  if (botonStart.innerText === "CLICK HERE TO START EXAM:") {
    quackSFX.play();
    bgMusic.play();
    levelCount = 1;
    botonStart.innerText = "RESTART EXAM";
  } else if (botonStart.innerText === "RESTART EXAM") {
    window.location.reload();
    botonStart.innerText = "CLICK HERE TO START EXAM:";
  }
};

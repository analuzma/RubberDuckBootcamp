//INDEX
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
//WIP: result ++ when win

canvas.width = 600;
canvas.height = 400;

const gravity = 1;

//INPUTS
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

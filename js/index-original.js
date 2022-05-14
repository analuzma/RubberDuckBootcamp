//INDEX
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

const gravity = 0.6;

//CLASSES
class Character {
  constructor() {
    this.position = {
      x: 500,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 30;
  }

  draw() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }
}

//GAME
const character = new Character();
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  character.update();

  //key movement and friction
  if (keys.right.pressed) {
    character.velocity.x = 5;
  } else if (keys.left.pressed) {
    character.velocity.x = -5;
  } else {
    character.velocity.x *= 0.9;
  }
}
animate();

//CONTROLS
// addEventListener("keydown", (event) => {
//   switch (event.keyCode) {
addEventListener("keydown", ({ keyCode }) => {
  switch (event.keyCode) {
    case 37:
    case 65: //left arrow and A
      keys.left.pressed = true;
      console.log("keydown left");
      break;

    case 39:
    case 68: //right arrow and D
      keys.right.pressed = true;
      console.log("keydown right");
      break;

    case 38:
    case 87:
    case 32: // up arrow and W
      character.velocity.y -= 10;
      console.log("keydown up");
      break;
  }
});

// addEventListener("keyup", (event) => {
//   switch (event.keyCode) {
addEventListener("keyup", ({ keyCode }) => {
  switch (event.keyCode) {
    case 37:
    case 65:
      keys.left.pressed = false;
      console.log("keyup left");
      break;

    case 39:
    case 68:
      keys.right.pressed = false;
      console.log("keyup right");
      break;

    case 38:
    case 87:
    case 32: // up arrow,  W and spacebar
      character.velocity.y -= 5;
      console.log("keyup up");
      break;
  }
});

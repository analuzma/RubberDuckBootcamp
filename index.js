//INDEX
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 600;

const gravity = 0.5;
//CLASSES
class Character {
  constructor() {
    this.position = {
      x: 500,
      y: 100,
    };

    this.speed = {
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
    this.position.y += this.speed.y;

    if (this.position.y + this.height + this.speed.y <= canvas.height)
      this.speed.y += gravity;
    else this.speed.y = 0;
  }
}

//GAME
let character = new Character();
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

  if (keys.right.pressed) {
    character.speed.x = 5;
  } else if (keys.left.pressed) {
    character.speed.x = -5;
  } else character.speed.x *= 0.9;
}

animate();

//CONTROLS

document.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
    case 65: //left arrow and A
      keys.left.pressed = true;
      break;

    case 39:
    case 68: //right arrow and D
      keys.right.pressed = true;
      break;

    case 38:
    case 87:
    case 32: // up arrow and W
      if (event.repeat) {
        return;
      }
      character.speed.y += -5;

      break;
  }
});

document.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
    case 65: //left arrow and A
      keys.left.pressed = false;
      break;

    case 39:
    case 68: //right arrow and D
      keys.left.pressed = false;
      break;

    case 38:
    case 87:
    case 32: // up arrow,  W and spacebar
      character.speed.y -= 5;
      break;
  }
});

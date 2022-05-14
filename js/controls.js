//CONTROLS
addEventListener("keydown", ({ keyCode }) => {
  switch (event.keyCode) {
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
      character.velocity.y -= 10;
      break;
  }
});

addEventListener("keyup", ({ keyCode }) => {
  switch (event.keyCode) {
    case 37:
    case 65:
      keys.left.pressed = false;
      break;

    case 39:
    case 68:
      keys.right.pressed = false;
      break;

    case 38:
    case 87:
    case 32: // up arrow,  W and spacebar
      character.velocity.y -= 5;
      break;
  }
});

//LEVEL NAME "TOUCH THIS"
//NEGATED: FALSE

//GAME ENTITIES
const objectThis = new Object(500, 350, 50, 50, "blue"); //('color',x,y,w,h)
const objectThat = new Object(50, 350, 50, 50, "green"); //('color',x,y,w,h)

//COLLISION

//check collision
character.collision(objectThis);
character.collision(objectThat);
if (character.collision(objectThis) === true) {
  console.log("win");
} else if (character.collision(objectThat) === true) {
  console.log("lost");
}

//TIME ENGINE
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
  character.update(); //adds character
  //LEVEL
  //level.touchthis.time
  objectThis.draw();
  objectThat.draw();
  character.time -= 1 / 60; //rests seconds to character time

  //
  document.getElementById("timeLeft").innerHTML = Math.floor(character.time); // Update the timer
  //platform.draw() later on update

  //check collision
  character.collision(objectThis);
  character.collision(objectThat);

  //
  //   if (character.time === 0) {
  //     character.lifePoints -= 1;
  //     console.log("duck life points" + character.lifePoints);
  //     if (character.lifePoints === 0) {
  //       console.log("game over");
  //     }
  //   }
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

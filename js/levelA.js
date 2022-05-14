//TIME STARTS
let timerId = null;
//GAME ENTITIES
const character = new Character();
const rectangle = new Object(0, 0, 50, 50); //('color',x,y,w,h)

//COLLISION

//TIME ENGINE
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  character.update();
  rectangle.draw(); ////TO BE CONTINUED

  //platform.draw() later on update

  //check collision
  character.collision(rectangle);
  //key movement and friction
  if (keys.right.pressed) {
    character.velocity.x = 8;
  } else if (keys.left.pressed) {
    character.velocity.x = -8;
  } else {
    character.velocity.x *= 0.9;
  }
}
animate();

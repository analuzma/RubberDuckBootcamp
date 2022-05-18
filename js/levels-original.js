// Background class for all levels (used so every level has its own background color and text on screen)
class Background {
  constructor(color) {
    this.x = 0;
    this.y = 0;
    //0,0 es el origen del canvas
    this.width = canvas.width;
    this.height = canvas.height;
    this.color = color;
  }
  //methods
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  } //end draw

  gameOver() {
    ctx.font = "80px Arial";
    ctx.fillText("Te moriste!!! :(", 150, 150);
  }
}

//////////////////////////////////////////////////////////////////
//LEVEL NAME: "TOUCH THIS"
//NEGATED: FALSE
//LEVEL NUMBER: 1
/////////////////////////////////////////////////////////////////

//** ENTITIES **//
const touchThisFalseBG = new Background("midnightblue");
const objectBlue = new Object(700, 350, 50, 50, "blue");
const objectGreen = new Object(50, 350, 50, 50, "green");

//** CLASS this level **//

class LevelTouchThis {
  constructor(color, time) {
    this.color = color;
    this.time = time;
    this.levelName = "TOUCH THIS";
  }
  LevelTitleScreen(levelName) {
    ctx.font = "70px VT323";
    ctx.fillStyle = "white";
    ctx.fillText(`${Math.trunc(this.time)}`, 50, 100);
    ctx.fillStyle = "LightSkyBlue";
    ctx.fillText(`${this.levelName}`, 50, 150);
  }

  draw() {
    ctx.font = "40px VT323";
    ctx.fillStyle = "white";
    //name THIS
    ctx.fillText(`THIS`, objectBlue.position.x + 8, objectGreen.position.y - 5);
    //name THAT
    ctx.fillText(
      `THAT`,
      objectGreen.position.x + 8,
      objectGreen.position.y - 5
    );
  }

  update() {
    this.draw();
  }

  reduceTime() {
    if (this.time <= 1) {
      character.gameOver(); //eventualmente funcion NextLevel
    } else {
      this.time -= 1 / 60;
    }
  }
}

//"touch this, false" CREATE LEVEL (level background and time)
let positiveTouchThis = new LevelTouchThis("green", 60);

//"touch this, false" GAME MECHANICS
//check collision
character.collisionWin(objectBlue);
character.collisionHurt(objectGreen);

//"touch this, false" LOGIC TO WIN "touch THIS and win, tuch THAT and lose"
function checkIfTouchThis() {
  if (character.collisionWin(objectBlue) === true) {
    console.log("win");
  } else if (character.collisionHurt(objectGreen) === true) {
    character.lifePoints -= 1;
    character.gameOver();
    //funcion para avanzar al siguiente nivel
  }
}

//"touch this, false" TIME ENGINE

//Level addups to TIME ENGINE animate()
function level1() {
  //LEVEL
  character.lifeDraw();
  objectGreen.draw();
  objectBlue.draw();
  checkIfTouchThis();
  //BACKGROUND
  positiveTouchThis.draw();
  //LEVEL NAME from Background
  positiveTouchThis.LevelTitleScreen(this.levelName);
  // Update the timer
  positiveTouchThis.reduceTime();
  //check collision
  character.collisionHurt(objectGreen);
  character.collisionWin(objectBlue);
}
const touchThisTrueBG = new Background("maroon");
function level2() {
  //LEVEL
  character.update();
  objectGreen.draw();
  objectBlue.draw();
  checkIfTouchThis();
  //BACKGROUND
  positiveTouchThis.draw();
  //LEVEL NAME from Background
  positiveTouchThis.LevelTitleScreen(this.levelName);
  // Update the timer
  positiveTouchThis.reduceTime();
  //check collision
  character.collisionHurt(objectGreen);
  character.collisionWin(objectBlue);
}
//***********************ANIMATE**********************************************

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
  //draws character
  touchThisFalseBG.draw();
  level1();
  touchThisTrueBG.draw();
  level2();

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

//if level 1, winGame, clearCanvas

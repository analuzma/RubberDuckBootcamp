/////////////////////////////////// Class LevelStyle
// used so every level has its own background color and text on screen
class LevelStyle {
  constructor(bgColor, nameColor, levelName) {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.bgColor = bgColor;
    this.levelName = levelName;
    this.nameColor = nameColor;
  }
  //methods
  draw() {
    ctx.fillStyle = this.bgColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  LevelTitleScreen() {
    ctx.font = "70px VT323";
    ctx.fillStyle = this.nameColor;
    ctx.fillText(`${this.levelName}`, 50, 150);
  }
}
/////////////////////////////////// Class LevelLogic
//contains its level time and displays it. also taxt on screen
class LevelLogic {
  constructor(time) {
    this.time = time;
  }
  TimeScreen() {
    ctx.font = "70px VT323";
    ctx.fillStyle = "white";
    ctx.fillText(`${Math.trunc(this.time)}`, 50, 100);
  }

  drawText(text, x, y) {
    ctx.font = "40px VT323";
    ctx.fillStyle = "white";
    ctx.fillText(toString(text), x, y);
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
//////////////////////////////////////////////////////////////////
//LEVEL NAME: "TOUCH THIS"
//NEGATED: FALSE
//LEVEL NUMBER: 1
/////////////////////////////////////////////////////////////////
//**  LEVEL STYLE **//
const styleTouchThis = new LevelStyle(
  "midnightblue",
  "lightblue",
  "TOUCH GREEN"
);
//** ENTITIES**//
const objectBlue = new Object(700, 350, 50, 50, "blue");
const objectGreen = new Object(50, 350, 50, 50, "green");

//** extra TEXTS ON SCREEN**//

//** EXTEND LEVEL LOGIC **//
class TouchThis extends LevelLogic {
  constructor(time) {
    super(time);
  }
  //unique methods for the level
  didItWin() {
    if (character.collision(objectGreen) === true) {
      return character.winPassLevel(); //future method next level
    } else if (character.collision(objectBlue) === true) {
      return character.gameOver(); //future method next level
    }
  }
}

//CREATE LEVEL WITH EXTENDED LOGIC//
const levelTouchThis = new TouchThis(60);

//** TURNS WHOLE "LEVEL1" into a function that will be added to the global TIME UPDATE "ANIMATE"  **//
function level1() {
  //LEVEL
  //background
  styleTouchThis.draw();
  styleTouchThis.LevelTitleScreen();
  //character
  character.lifeDraw();
  character.update();
  //entities
  objectGreen.draw();
  objectBlue.draw();
  //level methods
  levelTouchThis.TimeScreen();
  levelTouchThis.didItWin();
  // Update the timer
  levelTouchThis.reduceTime();
}
//////////////////////////////////////////////////////////////////
//LEVEL NAME: "FLY TO CEILING"
//NEGATED: FALSE
//LEVEL NUMBER: 2
/////////////////////////////////////////////////////////////////
//**  LEVEL STYLE **//
const styleJump = new LevelStyle("midnightblue", "lightblue", "FLY TO CEILING");
//** ENTITIES**//
//none

//** EXTEND LEVEL LOGIC **//
class Jump extends LevelLogic {
  constructor(time) {
    super(time);
  }
  //unique methods for the level
  didItWin() {
    if (character.position.y == 0) {
      character.winPassLevel();
    }
  }
}

//CREATE LEVEL WITH EXTENDED LOGIC//
const levelJump = new Jump(60);

//** TURNS WHOLE "LEVEL1" into a function that will be added to the global TIME UPDATE "ANIMATE"  **//
function level2() {
  //LEVEL
  //background
  styleJump.draw();
  styleJump.LevelTitleScreen();
  //character
  character.lifeDraw();
  character.update();
  //entities

  //level methods
  levelJump.TimeScreen();
  levelJump.didItWin();
  // Update the timer
  levelJump.reduceTime();
}
/////////////////////////////////////////////////////////////*********************** GLOBAL ANIMATE*********************************
////////////////////////////////////////////////////////////

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
  //////////////////////////////
  ///  LEVELS GO HERE /////
  //////////////////////////////
  level2();
  //////////////////////////////////
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

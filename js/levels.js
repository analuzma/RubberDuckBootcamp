////////////////////////////////// Class LevelStyle
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
    ctx.font = "20px VT323";
    ctx.fillStyle = "white";
    ctx.fillText(`Current level:`, 600, 50);
    ctx.font = "70px VT323";
    ctx.fillStyle = "white";
    ctx.fillText(`${levelCount}`, 680, 100);
    ctx.fillStyle = "white";
    ctx.fillText(`${(Math.round(this.time * 100) / 100).toFixed(1)}`, 50, 100);
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
const objectBlue = new Object(700, 350, 50, 50, "HotPink");
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
const styleJump = new LevelStyle("RebeccaPurple", "Thistle", "FLY TO CEILING");
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

//** LEVEL2 TO FUNCTION
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

//////////////////////////////////////////////////////////////////
//LEVEL NAME: "TOUCH RIGHT WALL"
//NEGATED: FALSE
//LEVEL NUMBER: 3
/////////////////////////////////////////////////////////////////
//**  LEVEL STYLE **//
const styleRightWall = new LevelStyle(
  "Teal",
  "MediumAquamarine",
  "TOUCH RIGHT WALL"
);
//** ENTITIES**//
//none

//** EXTEND LEVEL LOGIC **//
class RightWall extends LevelLogic {
  constructor(time) {
    super(time);
  }
  //unique methods for the level
  didItWin() {
    if (character.position.x === 770) {
      character.winPassLevel();
    } else if (character.position.x === 0) {
      character.gameOver();
    }
  }
}

//CREATE LEVEL WITH EXTENDED LOGIC//
const levelRightWall = new RightWall(60);

//** LEVEL3 TO FUNCTION
function level3() {
  //LEVEL
  //background
  styleRightWall.draw();
  styleRightWall.LevelTitleScreen();
  //character
  character.lifeDraw();
  character.update();
  //entities

  //level methods
  levelRightWall.TimeScreen();
  levelRightWall.didItWin();
  // Update the timer
  levelRightWall.reduceTime();
}

//////////////////////////////////////////////////////////////////
//LEVEL NAME: "!SUICIDE"
//NEGATED: TRUE
//LEVEL NUMBER: 5
/////////////////////////////////////////////////////////////////
//**  LEVEL STYLE **//
const styleSuicideNeg = new LevelStyle("DarkRed", "white", "!SUICIDE");
//** ENTITIES**//
//spike

//** EXTEND LEVEL LOGIC **//
class SuicideNeg extends LevelLogic {
  constructor(time) {
    super(time);
  }
  //unique methods for the level
  didItWin() {}
}

//CREATE LEVEL WITH EXTENDED LOGIC//
const levelSuicideNeg = new SuicideNeg(300);

//** LEVEL3 TO FUNCTION
function level4() {
  //LEVEL
  //background
  styleSuicideNeg.draw();
  styleSuicideNeg.LevelTitleScreen();
  //character
  character.lifeDraw();
  character.update();
  //entities

  //level methods
  levelSuicideNeg.TimeScreen();
  levelSuicideNeg.didItWin();
  // Update the timer
  levelSuicideNeg.reduceTime();
}

/////////////////////////////////////////////////////////////*********************** GLOBAL ANIMATE*********************************
////////////////////////////////////////////////////////////

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
  //////////////////////////////
  ///  LEVELS GO HERE /////
  //////////////////////////////
  switch (levelCount) {
    case 1:
      level1();
      break;
    case 2:
      level2();
      break;
    case 3:
      level3();
      break;
    case 4:
      level4();
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day";
  }
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

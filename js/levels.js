////////////////////////////////// Class LevelStyle
// used so every level has its own background color and text on screen
class LevelStyle {
  constructor(bgColor, nameColor, levelName) {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.bgColor = bgColor;
    this.nameColor = nameColor;
    this.levelName = levelName;
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
      character.lostPassLevel();
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

//** EXTEND LEVEL LOGIC **//
class TouchThis extends LevelLogic {
  constructor(time) {
    super(time);
  }
  //unique methods for the level
  didItWin() {
    if (character.collision(objectGreen) === true) {
      return character.winPassLevel();
    } else if (character.collision(objectBlue) === true) {
      return character.lostPassLevel();
    }
  }
}

//CREATE LEVEL WITH EXTENDED LOGIC//
const levelTouchThis = new TouchThis(10);

//** TURNS WHOLE "LEVEL1" into a function that will be added to the global TIME UPDATE "ANIMATE"  **//
function level1() {
  //LEVEL
  //adds music-------------------------------------------------------------------
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
const levelJump = new Jump(10);

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
      character.lostPassLevel();
    }
  }
}

//CREATE LEVEL WITH EXTENDED LOGIC//
const levelRightWall = new RightWall(10);

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
const spike1 = new Spike("gray", 300, 600);

//** EXTEND LEVEL LOGIC **//
class SuicideNeg extends LevelLogic {
  constructor(time) {
    super(time);
  }
  //unique methods for the level
  didItWin() {
    if (character.collision(spike1) === true) {
      return character.lostPassLevel();
    }
  }
}
//CREATE LEVEL WITH EXTENDED LOGIC//
const levelSuicideNeg = new SuicideNeg(10);

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
  spike1.draw();
  //level methods
  levelSuicideNeg.TimeScreen();
  levelSuicideNeg.didItWin();
  // Update the timer
  levelSuicideNeg.reduceTime();
}

////////////////////////////////////////////////////////////********************* START GAME
////////////////////////////////////////////////////////////
//**  LEVEL STYLE **//
const styleStartGame = new LevelStyle("#1a1a1a", "white", "");
//entities

//** EXTEND LEVEL LOGIC **//
class StartGame extends LevelLogic {
  //unique methods for the level
  startGameScreenBG() {
    ctx.fillStyle = "DarkCyan";
    ctx.fillRect(0, 300, 300, 100);
    ctx.fillStyle = "maroon";
    ctx.fillRect(300, 300, 300, 100);
    ctx.fillStyle = "black";
    ctx.fillRect(600, 300, 300, 200);
    //ironduck
    ctx.fillStyle = "DodgerBlue";
    ctx.fillRect(600, 100, 100, 100);
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(630, 125, 40, 40);
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(660, 115, 20, 20);
  }
  startGameScreenTEXT() {
    ctx.font = "50px VT323";
    ctx.fillStyle = "white";
    ctx.fillText(`Welcome ducky cadet,`, 50, 70);
    ctx.font = "30px VT323";
    ctx.fillText(`to successfully graduate I need you to`, 50, 120);
    ctx.fillStyle = "Gold";
    ctx.fillText(`READ FAST AND MOVE FASTER`, 50, 170);
    ctx.fillStyle = "white";
    ctx.fillText(`An ORDER will appear on each level`, 50, 220);
    ctx.fillStyle = "GOLD";
    ctx.fillText(`DO WHAT IS SAYS`, 50, 270);
    //explaining
    ctx.font = "50px VT323";
    ctx.fillStyle = "lightyellow";
    ctx.fillText(`JUMP`, 100, 350);
    ctx.fillStyle = "white";
    ctx.fillText(`!JUMP`, 400, 350);
    ctx.font = "30px VT323";
    ctx.fillText(`means JUMP`, 80, 380);
    ctx.fillText(`means DO NOT JUMP`, 350, 380);
    //ready to start?
    ctx.font = "28px VT323";
    ctx.fillStyle = "white";
    ctx.fillText(`PRESS "ENTER"`, 610, 340);
    ctx.fillText(`TO START EXAM ->`, 610, 380);
    //IronDucks
    ctx.font = "25px VT323";
    ctx.fillStyle = "#1a1a1a";
    ctx.fillText(`IronDucks`, 605, 190);
  }
  goToLevel1() {
    addEventListener("keyup", ({ keyCode }) => {
      switch (event.keyCode) {
        case 13: //"Enter" keycode to start game
          quackSFX.play();
          bgMusic.play();
          levelCount = 1;
          console.log(levelCount);
          break;
      }
    });
  }
}

//CREATE LEVEL WITH EXTENDED LOGIC//
const levelStartGame = new StartGame();

//** TURNS WHOLE "LEVEL1" into a function that will be added to the global TIME UPDATE "ANIMATE"  **//
function level0() {
  //LEVEL

  //background
  styleStartGame.draw();
  levelStartGame.startGameScreenBG();
  levelStartGame.startGameScreenTEXT();
  //character

  //level methods
  levelStartGame.goToLevel1();
}
////////////////////////////////////////////////////////////********************* YOU WIN
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////********************* GAME  OVER
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////*********************** GLOBAL ANIMATE*********************************
////////////////////////////////////////////////////////////

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
  //////////////////////////////
  ///  LEVELS GO HERE /////
  //////////////////////////////
  switch (levelCount) {
    case 0: //start game
      level0();
      break;
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
      dayName = "Thursday";
      break;
    case 7:
      dayName = "Thursday";
      break;
    case 8:
      dayName = "Thursday";
      break;
    case 9:
      dayName = "Thursday";
      break;
    case 10:
      dayName = "Thursday";
      break;
    case 11: //you win
      dayName = "Thursday";
      break;
    // default:
    //   level0();
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

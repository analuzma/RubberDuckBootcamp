// Initialize level
let levelCount = 0;
let currentLevel = levels[levelCount];

// // Levels
// const levels = [
// (level1 = { levelName: [],  negate: false),
// (level2 = { levelName: [], negate: false}),
// (level3 = { levelName: [ ],  negate: false),
// (level4 = { levelName: [ ],  negate: false),
// (level5 = { levelName: [ ],  negate: false),
// (level6 = { levelName: [ ],  negate: false),
// (level7 = { levelName: [ ],  negate: false),
// (level8 = { levelName: [ ],  negate: false),
// (level9 = { levelName: [ ],  negate: false),
// (level10 = { levelName: [ ],  negate: false),
// (level11 = { levelName: [ ],  negate: false),
// ]

// **** I want to create an array of functions
let levelsArray = [];
let levelsArray = [level0, level1, level2, level3, level4];

// we call to our level using levelsArray[0]();

// somehow create a funtction "nextLevel(), to go to next one"

//example del juego SHIFTer
// nextLevel() {
//   levelCount++;

//   switch (levelCount) {
//     case 1:
//       navigationTutorial.classList.add("hidden");
//       break;

//     case 2:
//       layersTutorial.classList.remove("hidden");
//       break;

//     case 3:
//       layersTutorial.classList.add("hidden");
//       break;

//     case 8:
//       return playerWon();
//   }

//   currentLevel = levels[levelCount];
//   nextLevelSound.play();
//   this.respawn();
// }

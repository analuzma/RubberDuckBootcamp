class Level {
  constructor(color, levelName, negated) {
    this.color = color;
    this.levelName = levelName;
    this.negated = negated;
  }
  levelTitle() {
    ctx.font = "70px arial";
    ctx.fillText(`this.levelName`, 50, 150);
  }

  backgroundColor() {
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  negated() {
    if (this.negated === true) {
      this.color = "darkred";
      this.backgroundColor();
      // agregar el ! a levelName
    }
  }
}

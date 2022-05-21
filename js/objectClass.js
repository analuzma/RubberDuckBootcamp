//any object class
class Object {
  constructor(x, y, width, height, color) {
    //object position
    this.position = {
      x: x,
      y: y,
    };
    //object dimension
    this.width = width;
    this.height = height;
    //object color
    this.color = color;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
  }
}

class Spike extends Object {
  constructor(color, x, y, width, height, bgcolor) {
    //object position
    super(x, y, width, height);
    //object color
    this.color = color;
    this.bgcolor = bgcolor;
  }
  draw() {
    ctx.fillStyle = this.bgcolor;
    ctx.fillRect(50, 320, 170, 70);
    ctx.fillStyle = this.color;
    ctx.fillStyle = "lightgray";
    //spike1
    ctx.fillRect(50, 390, 10, 10);
    ctx.fillRect(60, 360, 10, 40);
    ctx.fillRect(70, 330, 10, 70);
    ctx.fillRect(80, 360, 10, 40);
    ctx.fillRect(90, 390, 10, 10);
    //spike2
    ctx.fillRect(110, 390, 10, 10);
    ctx.fillRect(120, 360, 10, 40);
    ctx.fillRect(130, 330, 10, 70);
    ctx.fillRect(140, 360, 10, 40);
    ctx.fillRect(150, 390, 10, 10);
    //spike 3
    ctx.fillRect(170, 390, 10, 10);
    ctx.fillRect(180, 360, 10, 40);
    ctx.fillRect(190, 330, 10, 70);
    ctx.fillRect(200, 360, 10, 40);
    ctx.fillRect(210, 390, 10, 10);
  }

  update() {
    this.draw();
  }
}

//any object class
class Pata {
  constructor(x, y, width, height) {
    //object position
    this.position = {
      x: x,
      y: y,
    };
    //object dimension
    this.width = width;
    this.height = height;
  }
  draw() {
    //duck face     ctx.fillStyle = "red";
    // ctx.fillRect(54, 30, 8, 8);
    // ctx.fillRect(64, 30, 8, 8);
    // ctx.fillRect(58, 35, 10, 10);
    ctx.fillStyle = "red";
    ctx.fillRect(704, 320, 8, 8);
    ctx.fillRect(714, 320, 8, 8);
    ctx.fillRect(708, 325, 10, 10);
    ctx.fillStyle = "#F9B811";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "rgb(232,93,39)";
    ctx.fillRect(this.position.x + 7, this.position.y + 7, 15, 10);
    ctx.fillStyle = "black";
    ctx.fillRect(this.position.x + 3, this.position.y + 7, 5, 5);
    ctx.fillStyle = "black";
    ctx.fillRect(this.position.x + 22, this.position.y + 7, 5, 5);
  }

  update() {
    this.draw();
  }
}

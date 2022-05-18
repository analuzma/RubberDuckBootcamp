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
  constructor(color, x, y) {
    //object position
    super(x, y);
    //object color
    this.color = color;
  }
  draw() {
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

class Box extends Object {
  constructor(color, x, y) {
    //object position
    super(x, y);
    //object color
    this.color = color;
  }
  draw() {
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

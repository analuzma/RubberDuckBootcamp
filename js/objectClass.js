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
  drawText(text) {
    ctx.font = "40px VT323";
    ctx.fillStyle = "white";
    ctx.fillText(`${toString(text)}`, this.position.x + 8, this.position.y - 5);
  }
  update() {
    this.draw();
  }
}

//any object class
// class Objecto {
//   constructor(x, y, width, height, color) {
//     //object position
//     this.position = {
//       x: x,
//       y: y,
//     };
//     //object dimension
//     this.width = width;
//     this.height = height;
//     //object color
//     this.color = color;
//   }
//   draw() {
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
//   }

//   update() {
//     this.draw();
//   }
// }

//CLASSES
//player character
class Character {
  constructor() {
    this.position = {
      x: canvas.width / 2,
      y: 0,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 30;

    this.time = 10;
    this.lifePoints = 3;
  }

  draw() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "orange";
    ctx.fillRect(this.position.x + 7, this.position.y + 7, 15, 10);
    ctx.fillStyle = "black";
    ctx.fillRect(this.position.x + 3, this.position.y + 7, 5, 5);
    ctx.fillStyle = "black";
    ctx.fillRect(this.position.x + 22, this.position.y + 7, 5, 5);
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    //canvas limits
    //on y axis
    if (this.position.y > canvas.height - this.height)
      this.position.y = canvas.height - this.height;
    if (this.position.y < 0) this.position.y = 0;
    //on x axis
    if (this.position.x > canvas.width - this.width)
      this.position.x = canvas.width - this.width;
    this.x = 520;
    if (this.position.x < 0) this.position.x = 0;

    //gravity and velocity, character stands
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }

  //collision. returns true || false. item being object or enemy
  collision(item) {
    return (
      this.position.x < item.position.x + item.width &&
      this.position.x + this.width > item.position.x &&
      this.position.y < item.position.y + item.height &&
      this.position.y + this.height > item.position.y
    );
  }
}

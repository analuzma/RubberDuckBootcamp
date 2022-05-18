//CLASSES
//player character
class Character {
  constructor() {
    this.position = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 30;

    this.lifePoints = 3;
  }

  draw() {
    //duck face
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "orange";
    ctx.fillRect(this.position.x + 7, this.position.y + 7, 15, 10);
    ctx.fillStyle = "black";
    ctx.fillRect(this.position.x + 3, this.position.y + 7, 5, 5);
    ctx.fillStyle = "black";
    ctx.fillRect(this.position.x + 22, this.position.y + 7, 5, 5);
  }
  lifeDraw() {
    //life points represented by pixel hearts on top left corner of
    //hearts
    if (this.lifePoints === 3) {
      //heart1
      ctx.fillStyle = "red";
      ctx.fillRect(10, 10, 8, 8);
      ctx.fillRect(20, 10, 8, 8);
      ctx.fillRect(14, 15, 10, 10);
      //heart2
      ctx.fillRect(38, 10, 8, 8);
      ctx.fillRect(48, 10, 8, 8);
      ctx.fillRect(42, 15, 10, 10);
      //heart3
      ctx.fillRect(66, 10, 8, 8);
      ctx.fillRect(76, 10, 8, 8);
      ctx.fillRect(70, 15, 10, 10);
    } else if (this.lifePoints === 2) {
      hurtSFX.play();
      //heart1
      ctx.fillStyle = "red";
      ctx.fillRect(10, 10, 8, 8);
      ctx.fillRect(20, 10, 8, 8);
      ctx.fillRect(14, 15, 10, 10);
      //heart2
      ctx.fillRect(38, 10, 8, 8);
      ctx.fillRect(48, 10, 8, 8);
      ctx.fillRect(42, 15, 10, 10);
      //heart3 X
      ctx.fillStyle = "grey";
      ctx.fillRect(66, 10, 8, 8);
      ctx.fillRect(76, 10, 8, 8);
      ctx.fillRect(70, 15, 10, 10);
    } else if (this.lifePoints === 1) {
      hurtSFX.play();
      //heart1
      ctx.fillStyle = "red";
      ctx.fillRect(10, 10, 8, 8);
      ctx.fillRect(20, 10, 8, 8);
      ctx.fillRect(14, 15, 10, 10);
      //heart2 X
      ctx.fillStyle = "grey";
      ctx.fillRect(38, 10, 8, 8);
      ctx.fillRect(48, 10, 8, 8);
      ctx.fillRect(42, 15, 10, 10);
      //heart3 X
      ctx.fillRect(66, 10, 8, 8);
      ctx.fillRect(76, 10, 8, 8);
      ctx.fillRect(70, 15, 10, 10);
    } else {
      hurtSFX.play();
      //heart1
      ctx.fillStyle = "grey";
      ctx.fillRect(10, 10, 8, 8);
      ctx.fillRect(20, 10, 8, 8);
      ctx.fillRect(14, 15, 10, 10);
      //heart2
      ctx.fillRect(38, 10, 8, 8);
      ctx.fillRect(48, 10, 8, 8);
      ctx.fillRect(42, 15, 10, 10);
      //heart3
      ctx.fillRect(66, 10, 8, 8);
      ctx.fillRect(76, 10, 8, 8);
      ctx.fillRect(70, 15, 10, 10);
    }
  }
  update() {
    this.draw();
    this.lifeDraw();
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

  gameOver() {
    character.lifePoints -= 1;
    alert("GAME OVER");
    //nextlevelfunction
  }

  winPassLevel() {
    alert("You win, pass to the next level");
  }
}

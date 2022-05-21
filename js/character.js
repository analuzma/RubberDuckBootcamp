//CLASSES
//player character
class Character {
  constructor() {
    this.position = {
      x: 385,
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
    ctx.fillStyle = "#F9B811";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.fillStyle = "rgb(232,93,39)";
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
      ctx.fillRect(54, 30, 8, 8);
      ctx.fillRect(64, 30, 8, 8);
      ctx.fillRect(58, 35, 10, 10);
      //heart2
      ctx.fillRect(78, 30, 8, 8);
      ctx.fillRect(88, 30, 8, 8);
      ctx.fillRect(82, 35, 10, 10);
      //heart3
      ctx.fillRect(102, 30, 8, 8);
      ctx.fillRect(112, 30, 8, 8);
      ctx.fillRect(106, 35, 10, 10);
    } else if (this.lifePoints === 2) {
      //hurtSFX.play();
      //heart1
      ctx.fillStyle = "red";
      ctx.fillRect(54, 30, 8, 8);
      ctx.fillRect(64, 30, 8, 8);
      ctx.fillRect(58, 35, 10, 10);
      //heart2
      ctx.fillRect(78, 30, 8, 8);
      ctx.fillRect(88, 30, 8, 8);
      ctx.fillRect(82, 35, 10, 10);
      //heart3 X
      ctx.fillStyle = "grey";
      ctx.fillRect(102, 30, 8, 8);
      ctx.fillRect(112, 30, 8, 8);
      ctx.fillRect(106, 35, 10, 10);
    } else if (this.lifePoints === 1) {
      //hurtSFX.play();
      //heart1
      ctx.fillStyle = "red";
      ctx.fillRect(54, 30, 8, 8);
      ctx.fillRect(64, 30, 8, 8);
      ctx.fillRect(58, 35, 10, 10);
      //heart2 X
      ctx.fillStyle = "grey";
      ctx.fillRect(78, 30, 8, 8);
      ctx.fillRect(88, 30, 8, 8);
      ctx.fillRect(82, 35, 10, 10);
      //heart3 X
      ctx.fillRect(102, 30, 8, 8);
      ctx.fillRect(112, 30, 8, 8);
      ctx.fillRect(106, 35, 10, 10);
    } else {
      //hurtSFX.play();
      //heart1
      ctx.fillStyle = "grey";
      ctx.fillRect(54, 30, 8, 8);
      ctx.fillRect(64, 30, 8, 8);
      ctx.fillRect(58, 35, 10, 10);
      //heart2
      ctx.fillRect(78, 30, 8, 8);
      ctx.fillRect(88, 30, 8, 8);
      ctx.fillRect(82, 35, 10, 10);
      //heart3
      ctx.fillRect(102, 30, 8, 8);
      ctx.fillRect(112, 30, 8, 8);
      ctx.fillRect(106, 35, 10, 10);
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

  lostPassLevel() {
    character.lifePoints -= 1;
    levelCount++;
    ouchSFX.play();
    this.respawn();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  winPassLevel() {
    levelCount++;
    quackSFX.play();
    this.respawn();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  respawn() {
    this.position.x = 385;
    this.position.y = 200;
    this.velocity.x = 0;
    this.velocity.y = 0;
  }
  graduation() {
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    //message
    ctx.fillStyle = "white";
    ctx.font = "60px VT323";
    ctx.fillStyle = this.nameColor;
    ctx.fillStyle = "white";
    ctx.font = "45px VT323";
    ctx.fillText(`Congratulations ducky cadet!`, 50, 100);
    ctx.fillStyle = "#1E90FF";
    ctx.fillText(`You PASSED the exam!`, 50, 170);
    ctx.fillStyle = "#F9B811";
    ctx.font = "50px VT323";
    ctx.fillText(`You are an Iron Duck!`, 50, 300);
    ctx.fillStyle = "white";
    ctx.font = "30px VT323";
    ctx.fillText(`You're certified to help a programmer debug code`, 50, 350);
    ctx.fillText(`${levelCount - 1}/10`, 50, 230);
    //ironduck
    ctx.fillStyle = "DodgerBlue";
    ctx.fillRect(600, 100, 100, 100);
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(630, 125, 40, 40);
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(660, 115, 20, 20);
    //IronDucks
    ctx.font = "25px VT323";
    ctx.fillStyle = "#1a1a1a";
    ctx.fillText(`IronDucks`, 605, 190);
  }
  noGraduation() {
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    //message
    ctx.fillStyle = "white";
    ctx.font = "60px VT323";
    ctx.fillStyle = this.nameColor;
    ctx.fillStyle = "white";
    ctx.font = "50px VT323";
    ctx.fillText(`Sorry ducky cadet,`, 50, 100);
    ctx.fillStyle = "#A50000";
    ctx.fillText(`You did NOT pass the exam`, 50, 170);
    ctx.fillStyle = "#F9B811";
    ctx.font = "50px VT323";
    ctx.fillText(`You made it to LEVEL ${levelCount - 1} this time`, 50, 300);
    ctx.fillStyle = "white";
    ctx.font = "30px VT323";
    ctx.fillText(`Pay better attention next time.`, 50, 350);
    ctx.fillText(`${levelCount - 1}/10`, 50, 230);
    //ironduck
    ctx.fillStyle = "DodgerBlue";
    ctx.fillRect(600, 100, 100, 100);
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(630, 125, 40, 40);
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(660, 115, 20, 20);
    //IronDucks
    ctx.font = "25px VT323";
    ctx.fillStyle = "#1a1a1a";
    ctx.fillText(`IronDucks`, 605, 190);
  }
}

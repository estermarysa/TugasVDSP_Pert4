class Mover {
  constructor(x, y) {
    this.location = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.acceleration = createVector(0, 0);
  }

  display() {
    fill('red'); // Warna merah
    noStroke();
    // Gambar wajah bulat
    ellipse(this.location.x, this.location.y, 50, 50);
    // Gambar mata
    fill(255);
    ellipse(this.location.x - 10, this.location.y - 10, 10, 10);
    ellipse(this.location.x + 10, this.location.y - 10, 10, 10);
    // Gambar pupil
    fill(0);
    ellipse(this.location.x - 10, this.location.y - 10, 5, 5);
    ellipse(this.location.x + 10, this.location.y - 10, 5, 5);
    // Gambar mulut
    rect(this.location.x - 15, this.location.y + 10, 30, 5);
  }

  update() {
    var mouse = createVector(mouseX, mouseY);
    var dir = mouse.sub(this.location);
    var topSpeed = 10;
    dir.normalize();
    dir.mult(0.5);
    this.velocity.add(this.acceleration);
    this.velocity.add(dir);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }

  cekUjung() {
    if (this.location.x > windowWidth) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = windowWidth;
    }

    if (this.location.y > windowHeight) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = windowHeight;
    }
  }
}

let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 5; i++) {
    movers[i] = new Mover(random(windowWidth), random(windowHeight));
  }
}

function draw() {
  background(220);
  
  fill('yellow'); 
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);

  for (let i = 0; i < 5; i++) {
    movers[i].cekUjung();
    movers[i].display();
    movers[i].update();
  }
}

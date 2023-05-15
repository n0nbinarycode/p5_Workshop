let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  ellipse(x, y, 50, 50);
  x=10;
} 

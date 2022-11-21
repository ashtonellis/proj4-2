let shore;
let wave;
let bottle;
let plastic;
let glass;
let clean = 0;
let plastic1 = true;
let plastic2 = true;
let plastic3 = true;


function preload() {
  shore = loadImage('assets/shore.png');
  //wave = loadImage('wave.png');
  plastic = loadImage('assets/plastic.png');
  glass = loadImage('assets/glass.png')
}

function setup() {
  createCanvas(800, 600);
}

function draw() { 
  image(shore,0,0);

  if (plastic1){
    image(plastic,110,235); }
  if (plastic2){
    image(plastic,455,455); }
  if (plastic3){
    image(plastic,710,235); }
}

function mousePressed() {
  if (collidePointRect(mouseX,mouseY,110,235,50,130)) {
    plastic1 = false;
    clean++;
  }
  if (collidePointRect(mouseX,mouseY,455,455,50,130)){
    plastic2 = false;
    clean++;
  }
  if (collidePointRect(mouseX,mouseY,710,235,50,130)){
    plastic3 = false;
    clean++;
  }
}


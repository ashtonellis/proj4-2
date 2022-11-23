let shore;
let water;
let bottle;
let plastic;
let glass;
let clean = 0;
let wave = -350;
let plastic1 = true;
let plastic2 = true;
let plastic3 = true;
let glass1 = true;
let glass2 = true;
let glass3 = true;
let up = false;
let down = false;


function preload() {
  shore = loadImage('assets/shore.png');
  water = loadImage('assets/wave.png')
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
  if (glass1){
    image(glass,210,420,50,155);}
  if (glass2){
    image(glass,310,180,50,155);}
  if (glass3){
    image(glass,580,295,50,155);}

  image(water,0,wave);

  if (clean >= 6) {
    wave = (wave + 2);
    if (wave > 0) {
      clean = false;
      down = true;
    }
  } else { if (down) {
    wave = (wave - 2);
    plastic1 = true;
    plastic2 = true;
    plastic3 = true;
    glass1 = true;
    glass2 = true;
    glass3 = true;
    if (wave < -350) {
      down = false;
    } }  }
  

  
}

function mousePressed() {
  if (collidePointRect(mouseX,mouseY,110,235,50,130)) {
    plastic1 = false;
    clean++;}
  if (collidePointRect(mouseX,mouseY,455,455,50,130)){
    plastic2 = false;
    clean++;}
  if (collidePointRect(mouseX,mouseY,710,235,50,130)){
    plastic3 = false;
    clean++;}
  if (collidePointRect(mouseX,mouseY,210,420,50,155)){
    glass1 = false;
    clean++;}
  if (collidePointRect(mouseX,mouseY,310,180,50,155)){
    glass2 = false;
    clean++;}
  if (collidePointRect(mouseX,mouseY,580,295,50,155)){
    glass3 = false;
    clean++;}
}


let words = [
  ["corcodușe", "toltușe"],
  ["pierde-vară", "teleleu"],
  ["plăcintă cu carne", "zarbazan"],
  ["adâncitură", "afundiș"],
  ["nesuferit", "Tocsun"],
  ["pâine", "pită"]
  
];
//current word to be used
let word;


//help us treat text as an image
let g_ro;
let g_reg;
let g_clone;

let g_loupe; //used as a mask
let loupeRad = 90; //size of the loupe

//layers to switch between

let bottom_layer;
let top_layer;

let fontSize = 100

function setup() {
  createCanvas(600, 400);
  imageMode(CENTER);

  configure(this, fontSize / 4); //the overall settings have a smaller font
  //configure loupe graphics
  g_loupe = createGraphics(width, height / 2);
  g_loupe.pixelDensity(4.0);
g_loupe.fill("#fff");

  g_ro = createGraphics(width, height / 2);
  configure(g_ro, fontSize);

  g_reg = createGraphics(width, height / 2);
  configure(g_reg, fontSize);

  pickPlace(); //pick a random place

  bottom_layer = g_reg;
  top_layer = g_ro;
}
function pickPlace() {
  let wordNo = int(random(words.length));
  word = words[wordNo];
  g_ro.background(250);
  g_ro.textSize(60)
  g_ro.text(word[0], width / 2, height / 4);
  g_reg.background(250);
  g_reg.text(word[1], width / 2, height / 4);
}
function configure(g, gFontSize) {
  g.textFont("Quicksand");
  g.textSize(gFontSize);
  g.textAlign(CENTER, CENTER);
  g.pixelDensity(4.0);
}
function draw() {
  background(250);

  g_loupe.clear();
  g_loupe.ellipse(mouseX, mouseY - height / 4, loupeRad, loupeRad);
 // g_loupe.color(49, 73, 212)
  //mask the top layer with our loupe

  g_clone = top_layer.get();
  g_clone.mask(g_loupe);
  


  image(bottom_layer, width / 2, height / 2);
  image(g_clone, width / 2, height / 2);

  //let words=words[wordNo];
  //   let ro = words[0];
  //   let reg = words[1];

  //   g_ro.text(ro, width / 2, height / 2);
  //   g_reg.text(reg, width / 2, height / 2);

  // image(current_g, 0, 0);
}
function mousePressed() {
  //make sure that mouse is on our canvas
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    if (top_layer == g_ro) {
      top_layer = g_reg;
      bottom_layer = g_ro;
      text(bottom_layer)
    
     
    } else if (top_layer == g_reg) {
      top_layer = g_reg;
      bottom_layer = g_ro;
    }
  }
}
function keyPressed() {
  if (key == " ") {
    pickPlace();
  }
}
   
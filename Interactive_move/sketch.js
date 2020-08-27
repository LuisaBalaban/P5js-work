function setup() {
  createCanvas(400, 400);
}

function draw() {

  if(mouseIsPressed)
  {
    fill(255, 51, 51,40);
  }
  else
  {
    fill(205, 255, 140,40);
    stroke(205, 255, 140,40); 
    if(mouseButton)
    
  {
    fill(205, 255, 140,40);
    stroke(205, 255, 140,40);}
  
  }
  ellipse(mouseX,mouseY,100,100);
}